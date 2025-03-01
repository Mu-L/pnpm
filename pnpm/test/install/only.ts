import path from 'path'
import { prepare } from '@pnpm/prepare'
import { PackageManifest } from '@pnpm/types'
import loadJsonFile from 'load-json-file'
import { execPnpm } from '../utils'

const basicPackageManifest = loadJsonFile.sync<PackageManifest>(path.join(__dirname, '../utils/simple-package.json'))

test('production install (with --production flag)', async () => {
  const project = prepare(basicPackageManifest)

  await execPnpm(['install', '--production'])

  await project.hasNot(Object.keys(basicPackageManifest.devDependencies!)[0])
  await project.has('rimraf')
  await project.has('is-positive')
})

test('production install (with production NODE_ENV)', async () => {
  const project = prepare(basicPackageManifest)

  await execPnpm(['install'], { env: { NODE_ENV: 'production' } })

  await project.hasNot(Object.keys(basicPackageManifest.devDependencies!)[0])
  await project.has('rimraf')
  await project.has('is-positive')
})

test('dev dependencies install (with production NODE_ENV)', async () => {
  const project = prepare(basicPackageManifest)

  await execPnpm(['install', '--dev'], { env: { NODE_ENV: 'production' } })

  await project.hasNot(Object.keys(basicPackageManifest.dependencies!)[0])
  await project.has('@rstacruz/tap-spec')
})

test('install dev dependencies only', async () => {
  const project = prepare({
    dependencies: {
      'is-positive': '^1.0.0',
    },
    devDependencies: {
      'is-negative': '^1.0.0',
    },
  })

  // NODE_ENV should be ignored if --only is used
  const originalNodeEnv = process.env.NODE_ENV
  process.env.NODE_ENV = 'production'

  await execPnpm(['install', '--only', 'dev'])

  // reset NODE_ENV
  process.env.NODE_ENV = originalNodeEnv

  const isNegative = project.requireModule('is-negative')
  expect(typeof isNegative).toBe('function')

  await project.hasNot('is-positive')
})
