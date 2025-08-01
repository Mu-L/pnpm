# @pnpm/lockfile-types

## 1002.0.0

### Major Changes

- d1edf73: Removed node fetcher. The binary fetcher should be used for downloading node assets.
- f91922c: Changed how the integrity of the node.js artifact is stored in the lockfile.

### Patch Changes

- Updated dependencies [86b33e9]
- Updated dependencies [d1edf73]
- Updated dependencies [f91922c]
  - @pnpm/resolver-base@1005.0.0

## 1001.1.0

### Minor Changes

- 1a07b8f: Added support for resolving and downloading the Node.js runtime specified in the [devEngines](https://github.com/openjs-foundation/package-metadata-interoperability-collab-space/issues/15) field of `package.json`.

  Usage example:

  ```json
  {
    "devEngines": {
      "runtime": {
        "name": "node",
        "version": "^24.4.0",
        "onFail": "download"
      }
    }
  }
  ```

  When running `pnpm install`, pnpm will resolve Node.js to the latest version that satisfies the specified range and install it as a dependency of the project. As a result, when running scripts, the locally installed Node.js version will be used.

  Unlike the existing options, `useNodeVersion` and `executionEnv.nodeVersion`, this new field supports version ranges, which are locked to exact versions during installation. The resolved version is stored in the pnpm lockfile, along with an integrity checksum for future validation of the Node.js content's validity.

  Related PR: [#9755](https://github.com/pnpm/pnpm/pull/9755).

### Patch Changes

- Updated dependencies [1a07b8f]
  - @pnpm/types@1000.7.0

## 1001.0.8

### Patch Changes

- Updated dependencies [5ec7255]
  - @pnpm/types@1000.6.0

## 1001.0.7

### Patch Changes

- Updated dependencies [5b73df1]
  - @pnpm/types@1000.5.0

## 1001.0.6

### Patch Changes

- Updated dependencies [750ae7d]
  - @pnpm/types@1000.4.0

## 1001.0.5

### Patch Changes

- Updated dependencies [5f7be64]
- Updated dependencies [5f7be64]
- Updated dependencies [5f7be64]
  - @pnpm/patching.types@1000.1.0
  - @pnpm/types@1000.3.0

## 1001.0.4

### Patch Changes

- Updated dependencies [a5e4965]
  - @pnpm/types@1000.2.1

## 1001.0.3

### Patch Changes

- Updated dependencies [8fcc221]
  - @pnpm/types@1000.2.0

## 1001.0.2

### Patch Changes

- Updated dependencies [b562deb]
  - @pnpm/types@1000.1.1

## 1001.0.1

### Patch Changes

- Updated dependencies [9591a18]
  - @pnpm/types@1000.1.0

## 1001.0.0

### Major Changes

- a76da0c: Removed lockfile conversion from v6 to v9. If you need to convert lockfile v6 to v9, use pnpm CLI v9.

### Minor Changes

- 6483b64: A new setting, `inject-workspace-packages`, has been added to allow hard-linking all local workspace dependencies instead of symlinking them. Previously, this behavior was achievable via the [`dependenciesMeta[].injected`](https://pnpm.io/package_json#dependenciesmetainjected) setting, which remains supported [#8836](https://github.com/pnpm/pnpm/pull/8836).

## 1.0.3

### Patch Changes

- Updated dependencies [d500d9f]
  - @pnpm/types@12.2.0

## 1.0.2

### Patch Changes

- Updated dependencies [7ee59a1]
  - @pnpm/types@12.1.0

## 1.0.1

### Patch Changes

- cb006df: Add ability to apply patch to all versions:
  If the key of `pnpm.patchedDependencies` is a package name without a version (e.g. `pkg`), pnpm will attempt to apply the patch to all versions of
  the package, failure will be skipped.
  If it is a package name and an exact version (e.g. `pkg@x.y.z`), pnpm will attempt to apply the patch to that exact version only, failure will
  cause pnpm to fail.

  If there's only one version of `pkg` installed, `pnpm patch pkg` and subsequent `pnpm patch-commit $edit_dir` will create an entry named `pkg` in
  `pnpm.patchedDependencies`. And pnpm will attempt to apply this patch to other versions of `pkg` in the future.

  If there's multiple versions of `pkg` installed, `pnpm patch pkg` will ask which version to edit and whether to attempt to apply the patch to all.
  If the user chooses to apply the patch to all, `pnpm patch-commit $edit_dir` would create a `pkg` entry in `pnpm.patchedDependencies`.
  If the user chooses not to apply the patch to all, `pnpm patch-commit $edit_dir` would create a `pkg@x.y.z` entry in `pnpm.patchedDependencies` with
  `x.y.z` being the version the user chose to edit.

  If the user runs `pnpm patch pkg@x.y.z` with `x.y.z` being the exact version of `pkg` that has been installed, `pnpm patch-commit $edit_dir` will always
  create a `pkg@x.y.z` entry in `pnpm.patchedDependencies`.

- Updated dependencies [cb006df]
  - @pnpm/patching.types@1.0.0
  - @pnpm/types@12.0.0

## 1.0.0

### Major Changes

- 797ef0f: Rename project from `@pnpm/lockfile-types` to `@pnpm/lockfile.types`.

## 7.1.3

### Patch Changes

- Updated dependencies [0ef168b]
  - @pnpm/types@11.1.0

## 7.1.2

### Patch Changes

- Updated dependencies [dd00eeb]
- Updated dependencies
  - @pnpm/types@11.0.0

## 7.1.1

### Patch Changes

- Updated dependencies [13e55b2]
  - @pnpm/types@10.1.1

## 7.1.0

### Minor Changes

- 47341e5: **Semi-breaking.** Dependency key names in the lockfile are shortened if they are longer than 1000 characters. We don't expect this change to affect many users. Affected users most probably can't run install successfully at the moment. This change is required to fix some edge cases in which installation fails with an out-of-memory error or "Invalid string length (RangeError: Invalid string length)" error. The max allowed length of the dependency key can be controlled with the `peers-suffix-max-length` setting [#8177](https://github.com/pnpm/pnpm/pull/8177).

## 7.0.0

### Major Changes

- Breaking changes to the API.

### Patch Changes

- Updated dependencies [45f4262]
  - @pnpm/types@10.1.0

## 6.0.0

### Major Changes

- 43cdd87: Node.js v16 support dropped. Use at least Node.js v18.12.

### Minor Changes

- 086b69c: The checksum of the `.pnpmfile.cjs` is saved into the lockfile. If the pnpmfile gets modified, the lockfile is reanalyzed to apply the changes [#7662](https://github.com/pnpm/pnpm/pull/7662).
- 730929e: Add a field named `ignoredOptionalDependencies`. This is an array of strings. If an optional dependency has its name included in this array, it will be skipped.

### Patch Changes

- 27a96a8: Remove `specifiers` field from `ProjectSnapshotV6`. This is a typing fix. The field is not present on the v6 lockfile.
- Updated dependencies [7733f3a]
- Updated dependencies [43cdd87]
- Updated dependencies [730929e]
  - @pnpm/types@10.0.0

## 5.1.5

### Patch Changes

- 4d34684f1: Added support for boolean values in 'bundleDependencies' package.json fields when installing a dependency. Fix to properly handle 'bundledDependencies' alias [#7411](https://github.com/pnpm/pnpm/issues/7411).
- Updated dependencies [4d34684f1]
  - @pnpm/types@9.4.2

## 5.1.4

### Patch Changes

- Added support for boolean values in 'bundleDependencies' package.json fields when installing a dependency. Fix to properly handle 'bundledDependencies' alias [#7411](https://github.com/pnpm/pnpm/issues/7411).
- Updated dependencies
  - @pnpm/types@9.4.1

## 5.1.3

### Patch Changes

- Updated dependencies [43ce9e4a6]
  - @pnpm/types@9.4.0

## 5.1.2

### Patch Changes

- Updated dependencies [d774a3196]
  - @pnpm/types@9.3.0

## 5.1.1

### Patch Changes

- Updated dependencies [aa2ae8fe2]
  - @pnpm/types@9.2.0

## 5.1.0

### Minor Changes

- 9c4ae87bd: Some settings influence the structure of the lockfile, so we cannot reuse the lockfile if those settings change. As a result, we need to store such settings in the lockfile. This way we will know with which settings the lockfile has been created.

  A new field will now be present in the lockfile: `settings`. It will store the values of two settings: `autoInstallPeers` and `excludeLinksFromLockfile`. If someone tries to perform a `frozen-lockfile` installation and their active settings don't match the ones in the lockfile, then an error message will be thrown.

  The lockfile format version is bumped from v6.0 to v6.1.

  Related PR: [#6557](https://github.com/pnpm/pnpm/pull/6557)
  Related issue: [#6312](https://github.com/pnpm/pnpm/issues/6312)

### Patch Changes

- Updated dependencies [a9e0b7cbf]
  - @pnpm/types@9.1.0

## 5.0.0

### Major Changes

- c92936158: The registry field is removed from the `resolution` object in `pnpm-lock.yaml`.
- eceaa8b8b: Node.js 14 support dropped.

### Patch Changes

- Updated dependencies [eceaa8b8b]
  - @pnpm/types@9.0.0

## 4.3.6

### Patch Changes

- Updated dependencies [b77651d14]
  - @pnpm/types@8.10.0

## 4.3.5

### Patch Changes

- Updated dependencies [702e847c1]
  - @pnpm/types@8.9.0

## 4.3.4

### Patch Changes

- Updated dependencies [844e82f3a]
  - @pnpm/types@8.8.0

## 4.3.3

### Patch Changes

- Updated dependencies [d665f3ff7]
  - @pnpm/types@8.7.0

## 4.3.2

### Patch Changes

- Updated dependencies [156cc1ef6]
  - @pnpm/types@8.6.0

## 4.3.1

### Patch Changes

- Updated dependencies [c90798461]
  - @pnpm/types@8.5.0

## 4.3.0

### Minor Changes

- 8dcfbe357: Add `publishDirectory` field to the lockfile and relink the project when it changes.

## 4.2.0

### Minor Changes

- d01c32355: Add optional "patched" field to package object in the lockfile.

### Patch Changes

- 8e5b77ef6: Update the dependencies when a patch file is modified.
- Updated dependencies [8e5b77ef6]
  - @pnpm/types@8.4.0

## 4.1.0

### Minor Changes

- 2a34b21ce: Dependencies patching is possible via the `pnpm.patchedDependencies` field of the `package.json`.
  To patch a package, the package name, exact version, and the relative path to the patch file should be specified. For instance:

  ```json
  {
    "pnpm": {
      "patchedDependencies": {
        "eslint@1.0.0": "./patches/eslint@1.0.0.patch"
      }
    }
  }
  ```

### Patch Changes

- Updated dependencies [2a34b21ce]
  - @pnpm/types@8.3.0

## 4.0.3

### Patch Changes

- Updated dependencies [fb5bbfd7a]
  - @pnpm/types@8.2.0

## 4.0.2

### Patch Changes

- Updated dependencies [4d39e4a0c]
  - @pnpm/types@8.1.0

## 4.0.1

### Patch Changes

- Updated dependencies [18ba5e2c0]
  - @pnpm/types@8.0.1

## 4.0.0

### Major Changes

- 542014839: Node.js 12 is not supported.

### Patch Changes

- Updated dependencies [d504dc380]
- Updated dependencies [542014839]
  - @pnpm/types@8.0.0

## 3.2.0

### Minor Changes

- b138d048c: New optional field supported: `onlyBuiltDependencies`.

### Patch Changes

- Updated dependencies [b138d048c]
  - @pnpm/types@7.10.0

## 3.1.5

### Patch Changes

- Updated dependencies [26cd01b88]
  - @pnpm/types@7.9.0

## 3.1.4

### Patch Changes

- Updated dependencies [b5734a4a7]
  - @pnpm/types@7.8.0

## 3.1.3

### Patch Changes

- Updated dependencies [6493e0c93]
  - @pnpm/types@7.7.1

## 3.1.2

### Patch Changes

- Updated dependencies [ba9b2eba1]
  - @pnpm/types@7.7.0

## 3.1.1

### Patch Changes

- Updated dependencies [302ae4f6f]
  - @pnpm/types@7.6.0

## 3.1.0

### Minor Changes

- 4ab87844a: New optional property added to project snapshots: `dependenciesMeta`.

### Patch Changes

- Updated dependencies [4ab87844a]
  - @pnpm/types@7.5.0

## 3.0.0

### Major Changes

- 97b986fbc: Node.js 10 support is dropped. At least Node.js 12.17 is required for the package to work.

### Minor Changes

- 6871d74b2: Add new transitivePeerDependencies field to lockfile.

## 2.2.0

### Minor Changes

- 9ad8c27bf: Add optional neverBuiltDependencies property to the lockfile object.

## 2.1.1

### Patch Changes

- b5d694e7f: Use pnpm.overrides instead of resolutions. Still support resolutions for partial compatibility with Yarn and for avoiding a breaking change.

## 2.1.0

### Minor Changes

- d54043ee4: A new optional field added to the lockfile type: resolutions.

## 2.0.1

### Patch Changes

- 6a8a97eee: Fix the type of bundledDependencies field.

## 2.0.1-alpha.0

### Patch Changes

- 6a8a97eee: Fix the type of bundledDependencies field.
