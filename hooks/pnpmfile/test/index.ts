import path from 'path'
import { Log } from '@pnpm/core-loggers'
import { requireHooks, requirePnpmfile, BadReadPackageHookError } from '@pnpm/pnpmfile'

test('ignoring a pnpmfile that exports undefined', () => {
  const pnpmfile = requirePnpmfile(path.join(__dirname, 'pnpmfiles/undefined.js'), __dirname)
  expect(pnpmfile).toBeUndefined()
})

test('readPackage hook run fails when returns undefined ', () => {
  const pnpmfilePath = path.join(__dirname, 'pnpmfiles/readPackageNoReturn.js')
  const pnpmfile = requirePnpmfile(pnpmfilePath, __dirname)

  return expect(
    pnpmfile.hooks.readPackage({})
  ).rejects.toEqual(new BadReadPackageHookError(pnpmfilePath, 'readPackage hook did not return a package manifest object.'))
})

test('readPackage hook run fails when returned dependencies is not an object ', () => {
  const pnpmfilePath = path.join(__dirname, 'pnpmfiles/readPackageNoObject.js')
  const pnpmfile = requirePnpmfile(pnpmfilePath, __dirname)
  return expect(
    pnpmfile.hooks.readPackage({})
  ).rejects.toEqual(new BadReadPackageHookError(pnpmfilePath, 'readPackage hook returned package manifest object\'s property \'dependencies\' must be an object.'))
})

test('filterLog hook combines with the global hook', () => {
  const globalPnpmfile = path.join(__dirname, 'pnpmfiles/globalFilterLog.js')
  const pnpmfile = path.join(__dirname, 'pnpmfiles/filterLog.js')
  const hooks = requireHooks(__dirname, { globalPnpmfile, pnpmfile })

  expect(hooks.filterLog).toBeDefined()
  expect(hooks.filterLog!.length).toBe(2)
  const filterLog = (log: Log) => hooks.filterLog!.every((hook) => hook(log))
  expect(filterLog({
    name: 'pnpm:summary',
    level: 'error',
    prefix: 'test',
  })).toBeTruthy()
  expect(filterLog({
    name: 'pnpm:summary',
    level: 'debug',
    prefix: 'test',
  })).toBeFalsy()
})
