import { parseWantedDependency } from '@pnpm/parse-wanted-dependency'
import { type Dependencies } from '@pnpm/types'
import { type WantedDependency } from '@pnpm/resolve-dependencies'
import { type Catalog } from '@pnpm/catalogs.types'

export function parseWantedDependencies (
  rawWantedDependencies: string[],
  opts: {
    allowNew: boolean
    currentPrefs: Dependencies
    defaultTag: string
    dev: boolean
    devDependencies: Dependencies
    optional: boolean
    optionalDependencies: Dependencies
    overrides?: Record<string, string>
    updateWorkspaceDependencies?: boolean
    preferredSpecs?: Record<string, string>
    defaultCatalog?: Catalog
  }
): WantedDependency[] {
  return rawWantedDependencies
    .map((rawWantedDependency) => {
      const parsed = parseWantedDependency(rawWantedDependency)
      const alias = parsed['alias']
      let pref = parsed['pref']

      if (!opts.allowNew && (!alias || !opts.currentPrefs[alias])) {
        return null
      }
      if (alias && opts.defaultCatalog?.[alias] && (
        (!opts.currentPrefs[alias] && pref === undefined) ||
          opts.defaultCatalog[alias] === pref ||
          opts.defaultCatalog[alias] === opts.currentPrefs[alias]
      )) {
        pref = 'catalog:'
      }
      if (alias && opts.currentPrefs[alias]) {
        pref ??= opts.currentPrefs[alias]
      }
      const result = {
        alias,
        dev: Boolean(opts.dev || alias && !!opts.devDependencies[alias]),
        optional: Boolean(opts.optional || alias && !!opts.optionalDependencies[alias]),
        prevSpecifier: alias && opts.currentPrefs[alias],
      }
      if (pref) {
        return {
          ...result,
          pref,
        }
      }
      if (alias && opts.preferredSpecs?.[alias]) {
        return {
          ...result,
          pref: opts.preferredSpecs[alias],
        }
      }
      if (alias && opts.overrides?.[alias]) {
        return {
          ...result,
          pref: opts.overrides[alias],
        }
      }
      return {
        ...result,
        pref: opts.defaultTag,
      }
    })
    .filter((wd) => wd !== null) as WantedDependency[]
}
