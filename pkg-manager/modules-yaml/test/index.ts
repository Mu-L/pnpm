/// <reference path="../../../__typings__/index.d.ts"/>
import path from 'path'
import { readModulesManifest, writeModulesManifest } from '@pnpm/modules-yaml'
import readYamlFile from 'read-yaml-file'
import isWindows from 'is-windows'
import tempy from 'tempy'

test('writeModulesManifest() and readModulesManifest()', async () => {
  const modulesDir = tempy.directory()
  const modulesYaml = {
    hoistedDependencies: {},
    included: {
      dependencies: true,
      devDependencies: true,
      optionalDependencies: true,
    },
    layoutVersion: 1,
    packageManager: 'pnpm@2',
    pendingBuilds: [],
    publicHoistPattern: [],
    prunedAt: new Date().toUTCString(),
    registries: {
      default: 'https://registry.npmjs.org/',
    },
    shamefullyHoist: false,
    skipped: [],
    storeDir: '/.pnpm-store',
    virtualStoreDir: path.join(modulesDir, '.pnpm'),
  }
  await writeModulesManifest(modulesDir, modulesYaml)
  expect(await readModulesManifest(modulesDir)).toEqual(modulesYaml)

  const raw = await readYamlFile<object>(path.join(modulesDir, '.modules.yaml'))
  expect(raw['virtualStoreDir']).toBeDefined()
  expect(path.isAbsolute(raw['virtualStoreDir'])).toEqual(isWindows())
})

test('backward compatible read of .modules.yaml created with shamefully-hoist=true', async () => {
  const modulesYaml = await readModulesManifest(path.join(__dirname, 'fixtures/old-shamefully-hoist'))
  if (modulesYaml == null) {
    fail('modulesYaml was nullish')
  }
  expect(modulesYaml.publicHoistPattern).toEqual(['*'])
  expect(modulesYaml.hoistedDependencies).toEqual({
    '/accepts/1.3.7': { accepts: 'public' },
    '/array-flatten/1.1.1': { 'array-flatten': 'public' },
    '/body-parser/1.19.0': { 'body-parser': 'public' },
  })
})

test('backward compatible read of .modules.yaml created with shamefully-hoist=false', async () => {
  const modulesYaml = await readModulesManifest(path.join(__dirname, 'fixtures/old-no-shamefully-hoist'))
  if (modulesYaml == null) {
    fail('modulesYaml was nullish')
  }
  expect(modulesYaml.publicHoistPattern).toEqual([])
  expect(modulesYaml.hoistedDependencies).toEqual({
    '/accepts/1.3.7': { accepts: 'private' },
    '/array-flatten/1.1.1': { 'array-flatten': 'private' },
    '/body-parser/1.19.0': { 'body-parser': 'private' },
  })
})
