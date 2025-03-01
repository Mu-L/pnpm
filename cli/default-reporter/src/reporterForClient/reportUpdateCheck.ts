import { UpdateCheckLog } from '@pnpm/core-loggers'
import boxen from 'boxen'
import chalk from 'chalk'
import * as Rx from 'rxjs'
import { filter, map, take } from 'rxjs/operators'
import semver from 'semver'

export function reportUpdateCheck (log$: Rx.Observable<UpdateCheckLog>, opts: {
  env: NodeJS.ProcessEnv
}) {
  return log$.pipe(
    take(1),
    filter((log) => semver.gt(log.latestVersion, log.currentVersion)),
    map((log) => {
      const updateCommand = renderUpdateCommand({
        latestVersion: log.latestVersion,
        env: opts.env,
      })
      return Rx.of({
        msg: boxen(`\
Update available! ${chalk.red(log.currentVersion)} → ${chalk.green(log.latestVersion)}.
${chalk.magenta('Changelog:')} https://github.com/pnpm/pnpm/releases/tag/v${log.latestVersion}
Run "${chalk.magenta(updateCommand)}" to update.

Follow ${chalk.magenta('@pnpmjs')} for updates: https://twitter.com/pnpmjs`,
        {
          padding: 1,
          margin: 1,
          align: 'center',
          borderColor: 'yellow',
          borderStyle: 'round',
        }
        ),
      })
    })
  )
}

function renderUpdateCommand (opts: { env: NodeJS.ProcessEnv, latestVersion: string }) {
  if (opts.env.COREPACK_ROOT) {
    return `corepack prepare pnpm@${opts.latestVersion} --activate`
  }
  const pkgName = process['pkg'] != null ? '@pnpm/exe' : 'pnpm'
  return `pnpm add -g ${pkgName}`
}
