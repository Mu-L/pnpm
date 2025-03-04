import assert from 'assert'
import path from 'path'
import util from 'util'
import type { GitFetcher } from '@pnpm/fetcher-base'
import { packlist } from '@pnpm/fs.packlist'
import { globalWarn } from '@pnpm/logger'
import { preparePackage } from '@pnpm/prepare-package'
import { addFilesFromDir } from '@pnpm/worker'
import rimraf from '@zkochan/rimraf'
import execa from 'execa'
import { URL } from 'url'

export interface CreateGitFetcherOptions {
  gitShallowHosts?: string[]
  rawConfig: Record<string, unknown>
  unsafePerm?: boolean
  ignoreScripts?: boolean
}

export function createGitFetcher (createOpts: CreateGitFetcherOptions): { git: GitFetcher } {
  const allowedHosts = new Set(createOpts?.gitShallowHosts ?? [])
  const ignoreScripts = createOpts.ignoreScripts ?? false
  const preparePkg = preparePackage.bind(null, {
    ignoreScripts: createOpts.ignoreScripts,
    rawConfig: createOpts.rawConfig,
    unsafePerm: createOpts.unsafePerm,
  })

  const gitFetcher: GitFetcher = async (cafs, resolution, opts) => {
    const tempLocation = await cafs.tempDir()
    if (allowedHosts.size > 0 && shouldUseShallow(resolution.repo, allowedHosts)) {
      await execGit(['init'], { cwd: tempLocation })
      await execGit(['remote', 'add', 'origin', resolution.repo], { cwd: tempLocation })
      await execGit(['fetch', '--depth', '1', 'origin', resolution.commit], { cwd: tempLocation })
    } else {
      await execGit(['clone', resolution.repo, tempLocation])
    }
    await execGit(['checkout', resolution.commit], { cwd: tempLocation })
    let pkgDir: string
    try {
      const prepareResult = await preparePkg(tempLocation, resolution.path ?? '')
      pkgDir = prepareResult.pkgDir
      if (ignoreScripts && prepareResult.shouldBeBuilt) {
        globalWarn(`The git-hosted package fetched from "${resolution.repo}" has to be built but the build scripts were ignored.`)
      }
    } catch (err: unknown) {
      assert(util.types.isNativeError(err))
      err.message = `Failed to prepare git-hosted package fetched from "${resolution.repo}": ${err.message}`
      throw err
    }
    // removing /.git to make directory integrity calculation faster
    await rimraf(path.join(tempLocation, '.git'))
    const files = await packlist(pkgDir)
    // Important! We cannot remove the temp location at this stage.
    // Even though we have the index of the package,
    // the linking of files to the store is in progress.
    return addFilesFromDir({
      storeDir: cafs.storeDir,
      dir: pkgDir,
      files,
      filesIndexFile: opts.filesIndexFile,
      readManifest: opts.readManifest,
      pkg: opts.pkg,
    })
  }

  return {
    git: gitFetcher,
  }
}

function shouldUseShallow (repoUrl: string, allowedHosts: Set<string>): boolean {
  try {
    const { host } = new URL(repoUrl)
    if (allowedHosts.has(host)) {
      return true
    }
  } catch {
    // URL might be malformed
  }
  return false
}

function prefixGitArgs (): string[] {
  return process.platform === 'win32' ? ['-c', 'core.longpaths=true'] : []
}

async function execGit (args: string[], opts?: object): Promise<void> {
  const fullArgs = prefixGitArgs().concat(args || [])
  await execa('git', fullArgs, opts)
}
