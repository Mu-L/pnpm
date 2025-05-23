import fs from 'fs'
import path from 'path'
import { pack } from '@pnpm/plugin-commands-publishing'
import { prepare, preparePackages, tempDir } from '@pnpm/prepare'
import tar from 'tar'
import chalk from 'chalk'
import { sync as writeYamlFile } from 'write-yaml-file'
import { filterPackagesFromDir } from '@pnpm/workspace.filter-packages-from-dir'
import { type PackResultJson } from '../src/pack'
import { DEFAULT_OPTS } from './utils'

test('pack: package with package.json', async () => {
  prepare({
    name: 'test-publish-package.json',
    version: '0.0.0',
  })

  await pack.handler({
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir: process.cwd(),
    extraBinPaths: [],
  })

  expect(fs.existsSync('test-publish-package.json-0.0.0.tgz')).toBeTruthy()
  expect(fs.existsSync('package.json')).toBeTruthy()
})

test('pack: package with package.yaml', async () => {
  prepare({
    name: 'test-publish-package.yaml',
    version: '0.0.0',
  }, { manifestFormat: 'YAML' })

  await pack.handler({
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir: process.cwd(),
    extraBinPaths: [],
  })

  expect(fs.existsSync('test-publish-package.yaml-0.0.0.tgz')).toBeTruthy()
  expect(fs.existsSync('package.yaml')).toBeTruthy()
  expect(fs.existsSync('package.json')).toBeFalsy()
})

test('pack: package with package.json5', async () => {
  prepare({
    name: 'test-publish-package.json5',
    version: '0.0.0',
  }, { manifestFormat: 'JSON5' })

  await pack.handler({
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir: process.cwd(),
    extraBinPaths: [],
  })

  expect(fs.existsSync('test-publish-package.json5-0.0.0.tgz')).toBeTruthy()
  expect(fs.existsSync('package.json5')).toBeTruthy()
  expect(fs.existsSync('package.json')).toBeFalsy()
})

test('pack a package with scoped name', async () => {
  prepare({
    name: '@pnpm/test-scope',
    version: '0.0.0',
  })

  await pack.handler({
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir: process.cwd(),
    extraBinPaths: [],
  })

  expect(fs.existsSync('pnpm-test-scope-0.0.0.tgz')).toBeTruthy()
})

test('pack when there is bundledDependencies but without node-linker=hoisted', async () => {
  prepare({
    name: 'bundled-deps-without-node-linker-hoisted',
    version: '0.0.0',
    bundledDependencies: [],
  })

  await expect(pack.handler({
    ...DEFAULT_OPTS,
    nodeLinker: 'isolated',
    argv: { original: [] },
    dir: process.cwd(),
    extraBinPaths: [],
  })).rejects.toMatchObject({
    code: 'ERR_PNPM_BUNDLED_DEPENDENCIES_WITHOUT_HOISTED',
    message: 'bundledDependencies does not work with "nodeLinker: isolated"',
    hint: 'Add "nodeLinker: hoisted" to pnpm-workspace.yaml or delete bundledDependencies from the root package.json to resolve this error',
  })
})

describe('pack: package with custom tarball path', () => {
  beforeAll(() => {
    prepare({
      name: 'test-publish-package',
      version: '0.0.0',
    })
  })

  test.each([
    {
      out: 'custom-name.tgz',
      expected: 'custom-name.tgz',
    },
    {
      out: '%s.tgz',
      expected: 'test-publish-package.tgz',
    },
    {
      out: 'custom-name-%v.tgz',
      expected: 'custom-name-0.0.0.tgz',
    },
    {
      out: '%s-%v.tgz',
      expected: 'test-publish-package-0.0.0.tgz',
    },
    {
      out: './foo/%s-%v.tgz',
      expected: './foo/test-publish-package-0.0.0.tgz',
    },
    {
      out: './%s/out/%v.tgz',
      expected: './test-publish-package/out/0.0.0.tgz',
    },
    {
      out: './%s/%s-%v.tgz',
      expected: './test-publish-package/test-publish-package-0.0.0.tgz',
    },
  ])('should pack $actual as $expected', async ({ out, expected }) => {
    await pack.handler({
      ...DEFAULT_OPTS,
      argv: { original: [] },
      dir: process.cwd(),
      extraBinPaths: [],
      out,
    })

    expect(fs.existsSync(expected)).toBeTruthy()
  })
})

test('pack: cannot use --pack-destination with --out', async () => {
  prepare({
    name: 'test-publish-package',
    version: '0.0.0',
  })

  await expect(pack.handler({
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir: process.cwd(),
    extraBinPaths: [],
    out: 'foo.tgz',
    packDestination: 'bar',
  })).rejects.toThrow('Cannot use --pack-destination and --out together')
})

test('pack a package without package name', async () => {
  prepare({
    name: undefined,
    version: '0.0.0',
  })

  await expect(pack.handler({
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir: process.cwd(),
    extraBinPaths: [],
  })).rejects.toThrow('Package name is not defined in the package.json.')
})

test('pack a package with invalid package name', async () => {
  prepare({
    name: '@',
    version: '0.0.0',
  })

  await expect(pack.handler({
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir: process.cwd(),
    extraBinPaths: [],
  })).rejects.toThrow('Invalid package name "@".')
})

test('pack a package without package version', async () => {
  prepare({
    name: 'test-publish-package-no-version',
    version: undefined,
  })

  await expect(pack.handler({
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir: process.cwd(),
    extraBinPaths: [],
  })).rejects.toThrow('Package version is not defined in the package.json.')
})

test('pack: runs prepack, prepare, and postpack', async () => {
  prepare({
    name: 'test-publish-package.json',
    version: '0.0.0',
    scripts: {
      prepack: 'node -e "require(\'fs\').writeFileSync(\'prepack\', \'\')"',
      prepare: 'node -e "require(\'fs\').writeFileSync(\'prepare\', \'\')"',
      postpack: 'node -e "require(\'fs\').writeFileSync(\'postpack\', \'\')"',
    },
  })

  await pack.handler({
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir: process.cwd(),
    extraBinPaths: [],
  })

  expect(fs.existsSync('test-publish-package.json-0.0.0.tgz')).toBeTruthy()
  expect(fs.existsSync('prepack')).toBeTruthy()
  expect(fs.existsSync('prepare')).toBeTruthy()
  expect(fs.existsSync('postpack')).toBeTruthy()
})

const modeIsExecutable = (mode: number) => (mode & 0o111) === 0o111

;(process.platform === 'win32' ? test.skip : test)('the mode of executable is changed', async () => {
  tempDir()

  await pack.handler({
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir: path.join(__dirname, '../fixtures/has-bin'),
    extraBinPaths: [],
    packDestination: process.cwd(),
  })

  await tar.x({ file: 'has-bin-0.0.0.tgz' })

  {
    const stat = fs.statSync(path.resolve('package/exec'))
    expect(modeIsExecutable(stat.mode)).toBeTruthy()
  }
  {
    const stat = fs.statSync(path.resolve('package/other-exec'))
    expect(modeIsExecutable(stat.mode)).toBeTruthy()
  }
  {
    const stat = fs.statSync(path.resolve('package/index.js'))
    expect(modeIsExecutable(stat.mode)).toBeFalsy()
  }
})

test('pack: should embed readme', async () => {
  tempDir()

  await pack.handler({
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir: path.join(__dirname, '../fixtures/readme'),
    extraBinPaths: [],
    packDestination: process.cwd(),
    embedReadme: true,
  })

  await tar.x({ file: 'readme-0.0.0.tgz' })

  const pkg = await import(path.resolve('package/package.json'))

  expect(pkg.readme).toBeTruthy()
})

test('pack: should not embed readme', async () => {
  tempDir()

  await pack.handler({
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir: path.join(__dirname, '../fixtures/readme'),
    extraBinPaths: [],
    packDestination: process.cwd(),
    embedReadme: false,
  })

  await tar.x({ file: 'readme-0.0.0.tgz' })

  const pkg = await import(path.resolve('package/package.json'))

  expect(pkg.readme).toBeFalsy()
})

test('pack: remove publishConfig', async () => {
  prepare({
    name: 'remove-publish-config',
    version: '0.0.0',
    main: 'index.d.js',
    publishConfig: {
      types: 'index.d.ts',
      main: 'index.js',
    },
  })

  await pack.handler({
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir: process.cwd(),
    extraBinPaths: [],
    packDestination: process.cwd(),
    embedReadme: false,
  })

  await tar.x({ file: 'remove-publish-config-0.0.0.tgz' })

  expect((await import(path.resolve('package/package.json'))).default).toStrictEqual({
    name: 'remove-publish-config',
    version: '0.0.0',
    main: 'index.js',
    types: 'index.d.ts',
  })
})

test('pack should read from the correct node_modules when publishing from a custom directory', async () => {
  prepare({
    name: 'custom-publish-dir',
    version: '0.0.0',
    publishConfig: {
      directory: 'dist',
    },
    dependencies: {
      local: 'workspace:*',
    },
  })

  fs.mkdirSync('dist')
  fs.copyFileSync('package.json', 'dist/package.json')
  fs.mkdirSync('node_modules/local', { recursive: true })
  fs.writeFileSync('node_modules/local/package.json', JSON.stringify({ name: 'local', version: '1.0.0' }), 'utf8')

  await pack.handler({
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir: process.cwd(),
    extraBinPaths: [],
    packDestination: process.cwd(),
  })

  await tar.x({ file: 'custom-publish-dir-0.0.0.tgz' })

  expect((await import(path.resolve('package/package.json'))).default).toStrictEqual({
    name: 'custom-publish-dir',
    version: '0.0.0',
    dependencies: {
      local: '1.0.0',
    },
    publishConfig: {
      directory: 'dist',
    },
  })
})

test('pack to custom destination directory', async () => {
  prepare({
    name: 'custom-dest',
    version: '0.0.0',
  })

  const output = await pack.handler({
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir: process.cwd(),
    extraBinPaths: [],
    packDestination: path.resolve('custom-dest'),
    embedReadme: false,
  })

  expect(output).toContain(path.resolve('custom-dest/custom-dest-0.0.0.tgz'))
})

test('pack: custom pack-gzip-level', async () => {
  prepare({
    name: 'test-publish-package.json',
    version: '0.0.0',
  })

  const packOpts = {
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir: process.cwd(),
    extraBinPaths: [],
  }
  await pack.handler({
    ...packOpts,
    packGzipLevel: 9,
    packDestination: path.resolve('../small'),
  })

  await pack.handler({
    ...packOpts,
    packGzipLevel: 0,
    packDestination: path.resolve('../big'),
  })

  const tgz1 = fs.statSync(path.resolve('../small/test-publish-package.json-0.0.0.tgz'))
  const tgz2 = fs.statSync(path.resolve('../big/test-publish-package.json-0.0.0.tgz'))
  expect(tgz1.size).not.toEqual(tgz2.size)
})

test('pack: should resolve correct files from publishConfig', async () => {
  prepare({
    name: 'custom-publish-dir',
    version: '0.0.0',
    main: './index.ts',
    bin: './bin.js',
    files: [
      './a.js',
    ],
    publishConfig: {
      main: './dist-index.js',
      bin: './dist-bin.js',
    },
  })
  fs.writeFileSync('./a.js', 'a', 'utf8')
  fs.writeFileSync('./index.ts', 'src-index', 'utf8')
  fs.writeFileSync('./bin.js', 'src-bin-src', 'utf8')
  fs.writeFileSync('./dist-index.js', 'dist-index', 'utf8')
  fs.writeFileSync('./dist-bin.js', 'dist-bin', 'utf8')

  await pack.handler({
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir: process.cwd(),
    extraBinPaths: [],
    packDestination: process.cwd(),
  })
  await tar.x({ file: 'custom-publish-dir-0.0.0.tgz' })

  expect(fs.existsSync('./package/bin.js')).toBeFalsy()
  expect(fs.existsSync('./package/index.ts')).toBeFalsy()
  expect(fs.existsSync('./package/package.json')).toBeTruthy()
  expect(fs.existsSync('./package/a.js')).toBeTruthy()
  expect(fs.existsSync('./package/dist-index.js')).toBeTruthy()
  expect(fs.existsSync('./package/dist-bin.js')).toBeTruthy()
})

test('pack: modify manifest in prepack script', async () => {
  prepare({
    name: 'custom-publish-dir',
    version: '0.0.0',
    main: './src/index.ts',
    bin: './src/bin.js',
    files: [
      'dist',
    ],
    scripts: {
      prepack: 'node ./prepack.js',
    },
  })
  fs.mkdirSync('./src')
  fs.writeFileSync('./src/index.ts', 'index', 'utf8')
  fs.writeFileSync('./src/bin.js', 'bin', 'utf8')
  fs.mkdirSync('./dist')
  fs.writeFileSync('./dist/index.js', 'index', 'utf8')
  fs.writeFileSync('./dist/bin.js', 'bin', 'utf8')
  fs.writeFileSync('./prepack.js', `
  require('fs').writeFileSync('./package.json',
    JSON.stringify({
      name: 'custom-publish-dir',
      version: '0.0.0',
      main: './dist/index.js',
      bin: './dist/bin.js',
      files: [
        'dist'
      ]
    }, null, 2), 'utf8')
  `, 'utf8')

  await pack.handler({
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir: process.cwd(),
    extraBinPaths: [],
    packDestination: process.cwd(),
  })
  await tar.x({ file: 'custom-publish-dir-0.0.0.tgz' })
  expect(fs.existsSync('./package/src/bin.js')).toBeFalsy()
  expect(fs.existsSync('./package/src/index.ts')).toBeFalsy()
  expect(fs.existsSync('./package/package.json')).toBeTruthy()
  expect(fs.existsSync('./package/dist/index.js')).toBeTruthy()
  expect(fs.existsSync('./package/dist/bin.js')).toBeTruthy()
})

test('pack: should display packed contents order by name', async () => {
  prepare({
    name: 'test-publish-package.json',
    version: '0.0.0',
  })

  fs.mkdirSync('./src')
  fs.writeFileSync('./src/index.ts', 'index', 'utf8')
  fs.writeFileSync('./a.js', 'a', 'utf8')
  fs.writeFileSync('./b.js', 'b', 'utf8')

  const output = await pack.handler({
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir: process.cwd(),
    extraBinPaths: [],
  })

  expect(output).toBe(`package: test-publish-package.json@0.0.0
${chalk.blueBright('Tarball Contents')}
a.js
b.js
package.json
src/index.ts
${chalk.blueBright('Tarball Details')}
test-publish-package.json-0.0.0.tgz`)
})

test('pack: display in json format', async () => {
  prepare({
    name: 'test-publish-package.json',
    version: '0.0.0',
  })

  fs.mkdirSync('./src')
  fs.writeFileSync('./src/index.ts', 'index', 'utf8')
  fs.writeFileSync('./a.js', 'a', 'utf8')
  fs.writeFileSync('./b.js', 'b', 'utf8')

  const output = await pack.handler({
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir: process.cwd(),
    extraBinPaths: [],
    json: true,
  })

  expect(output).toBe(JSON.stringify({
    name: 'test-publish-package.json',
    version: '0.0.0',
    filename: 'test-publish-package.json-0.0.0.tgz',
    files: [
      {
        path: 'a.js',
      },
      {
        path: 'b.js',
      },
      {
        path: 'package.json',
      },
      {
        path: 'src/index.ts',
      },
    ],
  }, null, 2))
})

test('pack: recursive pack and display in json format', async () => {
  const dir = tempDir()

  const pkg1 = {
    name: '@pnpmtest/test-recursive-pack-project-1',
    version: '1.0.0',

    dependencies: {
      'is-positive': '1.0.0',
    },
  }
  const pkg2 = {
    name: '@pnpmtest/test-recursive-pack-project-2',
    version: '1.0.0',

    dependencies: {
      'is-negative': '1.0.0',
    },
  }

  prepare({
    name: '@pnpmtest/test-recursive-pack-project',
    version: '0.0.0',
  }, {
    tempDir: dir,
  })

  const pkgs = [
    pkg1,
    pkg2,
    // This will be packed because the pack command does not check whether it is in the registry
    {
      name: 'is-positive',
      version: '1.0.0',

      scripts: {
        prepublishOnly: 'exit 1',
      },
    },
    // This will be packed because the pack command does not check whether it is a private package
    {
      name: 'i-am-private',
      version: '1.0.0',

      private: true,
      scripts: {
        prepublishOnly: 'exit 1',
      },
    },
  ]

  preparePackages(pkgs, {
    tempDir: path.join(dir, 'project'),
  })

  writeYamlFile(path.join(dir, 'pnpm-workspace.yaml'), { packages: pkgs.filter(pkg => pkg).map(pkg => pkg.name) })

  const { selectedProjectsGraph } = await filterPackagesFromDir(dir, [])

  const output = await pack.handler({
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir,
    extraBinPaths: [],
    json: true,
    recursive: true,
    selectedProjectsGraph,
  })

  const json: PackResultJson[] = JSON.parse(output)

  expect(Array.isArray(json)).toBeTruthy()
  expect(json).toHaveLength(5)

  for (const pkg of json) {
    expect(pkg).toHaveProperty('name')
    expect(pkg).toHaveProperty('version')
    expect(pkg).toHaveProperty('filename')
    expect(pkg).toHaveProperty('files')
    expect(Array.isArray(pkg.files)).toBeTruthy()
    for (const file of pkg.files) {
      expect(file).toHaveProperty('path')
    }
    expect(fs.existsSync(pkg.filename)).toBeTruthy()
  }
})

test('pack: recursive pack with filter', async () => {
  const dir = tempDir()

  const pkg1 = {
    name: '@pnpmtest/test-recursive-pack-project-1',
    version: '1.0.0',

    dependencies: {
      'is-positive': '1.0.0',
    },
  }
  const pkg2 = {
    name: '@pnpmtest/test-recursive-pack-project-2',
    version: '1.0.0',

    dependencies: {
      'is-negative': '1.0.0',
    },
  }

  prepare({
    name: '@pnpmtest/test-recursive-pack-project',
    version: '0.0.0',
  }, {
    tempDir: dir,
  })

  const pkgs = [
    pkg1,
    pkg2,
    {
      name: 'is-positive',
      version: '1.0.0',

      scripts: {
        prepublishOnly: 'exit 1',
      },
    },
    {
      name: 'i-am-private',
      version: '1.0.0',

      private: true,
      scripts: {
        prepublishOnly: 'exit 1',
      },
    },
  ]

  preparePackages(pkgs, {
    tempDir: path.join(dir, 'project'),
  })

  writeYamlFile(path.join(dir, 'pnpm-workspace.yaml'), { packages: pkgs.filter(pkg => pkg).map(pkg => pkg.name) })

  const { selectedProjectsGraph } = await filterPackagesFromDir(dir, [{ namePattern: '@pnpmtest/*' }])

  const output = await pack.handler({
    ...DEFAULT_OPTS,
    argv: { original: [] },
    dir,
    extraBinPaths: [],
    selectedProjectsGraph,
    recursive: true,
    unicode: false,
  })

  expect(output).toContain('package: @pnpmtest/test-recursive-pack-project@0.0.0')
  expect(output).toContain('package: @pnpmtest/test-recursive-pack-project-1@1.0.0')
  expect(output).toContain('package: @pnpmtest/test-recursive-pack-project-2@1.0.0')
  expect(output).not.toContain('package: is-positive')
  expect(output).not.toContain('package: i-am-private')
})
