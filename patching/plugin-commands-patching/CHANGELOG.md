# @pnpm/plugin-commands-patching

## 1000.3.7

### Patch Changes

- 81b8a0e: When executing the `pnpm patch-remove` command, verify whether the passed parameter is a valid patch package name.
- Updated dependencies [d1edf73]
- Updated dependencies [d1edf73]
- Updated dependencies [86b33e9]
- Updated dependencies [d1edf73]
- Updated dependencies [adb097c]
  - @pnpm/constants@1001.3.0
  - @pnpm/read-project-manifest@1001.1.0
  - @pnpm/lockfile.utils@1003.0.0
  - @pnpm/pick-fetcher@1001.0.0
  - @pnpm/read-package-json@1000.0.11
  - @pnpm/plugin-commands-installation@1004.4.1
  - @pnpm/lockfile.fs@1001.1.17
  - @pnpm/config@1004.2.1
  - @pnpm/error@1000.0.4
  - @pnpm/store-path@1000.0.4
  - @pnpm/workspace.read-manifest@1000.2.2
  - @pnpm/cli-utils@1001.0.3
  - @pnpm/config.config-writer@1000.0.9
  - @pnpm/store-connection-manager@1002.0.8
  - @pnpm/patching.apply-patch@1000.0.6
  - @pnpm/crypto.hash@1000.2.0

## 1000.3.6

### Patch Changes

- Updated dependencies [1a07b8f]
- Updated dependencies [1a07b8f]
- Updated dependencies [2e85f29]
- Updated dependencies [6f7ac0f]
- Updated dependencies [6f7ac0f]
- Updated dependencies [1a07b8f]
- Updated dependencies [1a07b8f]
  - @pnpm/types@1000.7.0
  - @pnpm/read-project-manifest@1001.0.0
  - @pnpm/lockfile.utils@1002.1.0
  - @pnpm/plugin-commands-installation@1004.4.0
  - @pnpm/config@1004.2.0
  - @pnpm/pick-fetcher@1000.1.0
  - @pnpm/constants@1001.2.0
  - @pnpm/cli-utils@1001.0.2
  - @pnpm/config.config-writer@1000.0.8
  - @pnpm/lockfile.fs@1001.1.16
  - @pnpm/modules-yaml@1000.3.4
  - @pnpm/read-package-json@1000.0.10
  - @pnpm/workspace.read-manifest@1000.2.1
  - @pnpm/store-connection-manager@1002.0.7
  - @pnpm/error@1000.0.3
  - @pnpm/store-path@1000.0.3
  - @pnpm/crypto.hash@1000.2.0
  - @pnpm/patching.apply-patch@1000.0.5

## 1000.3.5

### Patch Changes

- Updated dependencies [7ad0bc3]
  - @pnpm/cli-utils@1001.0.1
  - @pnpm/plugin-commands-installation@1004.3.1

## 1000.3.4

### Patch Changes

- b656f8a: When patching dependencies installed via `pkg.pr.new`, treat them as git tarball URLs [#9694](https://github.com/pnpm/pnpm/pull/9694).
- Updated dependencies [623da6f]
- Updated dependencies [cf630a8]
- Updated dependencies [cf630a8]
- Updated dependencies [e225310]
  - @pnpm/config@1004.1.0
  - @pnpm/cli-utils@1001.0.0
  - @pnpm/plugin-commands-installation@1004.3.0
  - @pnpm/crypto.hash@1000.2.0
  - @pnpm/store-connection-manager@1002.0.6
  - @pnpm/config.config-writer@1000.0.7
  - @pnpm/lockfile.fs@1001.1.15
  - @pnpm/lockfile.utils@1002.0.1

## 1000.3.3

### Patch Changes

- Updated dependencies [b511eac]
  - @pnpm/plugin-commands-installation@1004.2.2

## 1000.3.2

### Patch Changes

- @pnpm/plugin-commands-installation@1004.2.1

## 1000.3.1

### Patch Changes

- Updated dependencies [983efdc]
- Updated dependencies [540986f]
  - @pnpm/plugin-commands-installation@1004.2.0
  - @pnpm/lockfile.utils@1002.0.0
  - @pnpm/store-connection-manager@1002.0.5
  - @pnpm/lockfile.fs@1001.1.14
  - @pnpm/cli-utils@1000.1.7

## 1000.3.0

### Minor Changes

- 046af72: A new `catalogMode` setting is available for controlling if and how dependencies are added to the default catalog. It can be configured to several modes:

  - `strict`: Only allows dependency versions from the catalog. Adding a dependency outside the catalog's version range will cause an error.
  - `prefer`: Prefers catalog versions, but will fall back to direct dependencies if no compatible version is found.
  - `manual` (default): Does not automatically add dependencies to the catalog.

### Patch Changes

- d385b71: Sort versions printed by `pnpm patch` using semantic versioning rules.
- b0ead51: Read the current lockfile from `node_modules/.pnpm/lock.yaml`, when the project uses a global virtual store.
- Updated dependencies [6acf819]
- Updated dependencies [b217bbb]
- Updated dependencies [b0ead51]
- Updated dependencies [c8341cc]
- Updated dependencies [b0ead51]
- Updated dependencies [046af72]
  - @pnpm/pick-fetcher@1000.0.1
  - @pnpm/plugin-commands-installation@1004.1.0
  - @pnpm/config@1004.0.0
  - @pnpm/workspace.read-manifest@1000.2.0
  - @pnpm/lockfile.utils@1001.0.12
  - @pnpm/cli-utils@1000.1.6
  - @pnpm/store-connection-manager@1002.0.4
  - @pnpm/config.config-writer@1000.0.6
  - @pnpm/lockfile.fs@1001.1.13
  - @pnpm/crypto.hash@1000.1.1
  - @pnpm/patching.apply-patch@1000.0.4

## 1000.2.5

### Patch Changes

- Updated dependencies [8d175c0]
  - @pnpm/config@1003.1.1
  - @pnpm/plugin-commands-installation@1004.0.3
  - @pnpm/cli-utils@1000.1.5
  - @pnpm/store-connection-manager@1002.0.3
  - @pnpm/crypto.hash@1000.1.1
  - @pnpm/patching.apply-patch@1000.0.4

## 1000.2.4

### Patch Changes

- 09cf46f: Update `@pnpm/logger` in peer dependencies.
- Updated dependencies [b282bd1]
- Updated dependencies [fdb1d98]
- Updated dependencies [e4af08c]
- Updated dependencies [09cf46f]
- Updated dependencies [36d1448]
- Updated dependencies [9362b5f]
- Updated dependencies [5ec7255]
- Updated dependencies [6cf010c]
  - @pnpm/config@1003.1.0
  - @pnpm/plugin-commands-installation@1004.0.2
  - @pnpm/store-connection-manager@1002.0.2
  - @pnpm/patching.apply-patch@1000.0.4
  - @pnpm/cli-utils@1000.1.4
  - @pnpm/lockfile.fs@1001.1.12
  - @pnpm/types@1000.6.0
  - @pnpm/config.config-writer@1000.0.5
  - @pnpm/lockfile.utils@1001.0.11
  - @pnpm/modules-yaml@1000.3.3
  - @pnpm/read-package-json@1000.0.9
  - @pnpm/read-project-manifest@1000.0.11
  - @pnpm/workspace.read-manifest@1000.1.5
  - @pnpm/crypto.hash@1000.1.1
  - @pnpm/pick-fetcher@1000.0.0

## 1000.2.3

### Patch Changes

- @pnpm/plugin-commands-installation@1004.0.1
- @pnpm/config.config-writer@1000.0.4
- @pnpm/cli-utils@1000.1.3
- @pnpm/config@1003.0.1
- @pnpm/store-connection-manager@1002.0.1

## 1000.2.2

### Patch Changes

- Updated dependencies [56bb69b]
- Updated dependencies [8a9f3a4]
- Updated dependencies [5b73df1]
- Updated dependencies [9c3dd03]
- Updated dependencies [5b73df1]
  - @pnpm/config@1003.0.0
  - @pnpm/plugin-commands-installation@1004.0.0
  - @pnpm/parse-wanted-dependency@1001.0.0
  - @pnpm/logger@1001.0.0
  - @pnpm/store-connection-manager@1002.0.0
  - @pnpm/types@1000.5.0
  - @pnpm/cli-utils@1000.1.2
  - @pnpm/pick-fetcher@1000.0.0
  - @pnpm/lockfile.utils@1001.0.10
  - @pnpm/config.config-writer@1000.0.3
  - @pnpm/lockfile.fs@1001.1.11
  - @pnpm/modules-yaml@1000.3.2
  - @pnpm/read-package-json@1000.0.8
  - @pnpm/read-project-manifest@1000.0.10
  - @pnpm/workspace.read-manifest@1000.1.4
  - @pnpm/crypto.hash@1000.1.1
  - @pnpm/patching.apply-patch@1000.0.3

## 1000.2.1

### Patch Changes

- 17b7e9f: The patch file path saved by the pnpm `patch-commit` and `patch-remove` commands should be a relative path [#9403](https://github.com/pnpm/pnpm/pull/9403).
- Updated dependencies [17b7e9f]
- Updated dependencies [4d95e93]
  - @pnpm/config.config-writer@1000.0.2
  - @pnpm/plugin-commands-installation@1003.0.1
  - @pnpm/pick-fetcher@1000.0.0
  - @pnpm/lockfile.utils@1001.0.9
  - @pnpm/cli-utils@1000.1.1
  - @pnpm/lockfile.fs@1001.1.10
  - @pnpm/store-connection-manager@1001.0.1
  - @pnpm/config@1002.7.2
  - @pnpm/crypto.hash@1000.1.1
  - @pnpm/patching.apply-patch@1000.0.3

## 1000.2.0

### Minor Changes

- 31b19ae: The pnpm `patch-remove` command failed to remove the corresponding patch file.

### Patch Changes

- Updated dependencies [750ae7d]
- Updated dependencies [72cff38]
- Updated dependencies [5679712]
- Updated dependencies [01f2bcf]
- Updated dependencies [750ae7d]
- Updated dependencies [8033854]
- Updated dependencies [1413c25]
  - @pnpm/types@1000.4.0
  - @pnpm/store-connection-manager@1001.0.0
  - @pnpm/config@1002.7.1
  - @pnpm/plugin-commands-installation@1003.0.0
  - @pnpm/cli-utils@1000.1.0
  - @pnpm/config.config-writer@1000.0.1
  - @pnpm/lockfile.fs@1001.1.9
  - @pnpm/lockfile.utils@1001.0.8
  - @pnpm/modules-yaml@1000.3.1
  - @pnpm/read-package-json@1000.0.7
  - @pnpm/read-project-manifest@1000.0.9
  - @pnpm/workspace.read-manifest@1000.1.3
  - @pnpm/pick-fetcher@1000.0.0
  - @pnpm/crypto.hash@1000.1.1
  - @pnpm/patching.apply-patch@1000.0.3

## 1000.1.7

### Patch Changes

- Updated dependencies [e57f1df]
  - @pnpm/config@1002.7.0
  - @pnpm/cli-utils@1000.0.19
  - @pnpm/plugin-commands-installation@1002.2.4
  - @pnpm/store-connection-manager@1000.0.19

## 1000.1.6

### Patch Changes

- e9e4c59: When executing the `patch-commit` command, if `patchedDependencies` does not exist in `package.json`, the configuration will be written to `pnpm-workspace.yaml`.
- Updated dependencies [9bcca9f]
- Updated dependencies [5b35dff]
- Updated dependencies [9bcca9f]
- Updated dependencies [5f7be64]
- Updated dependencies [5a9e34f]
- Updated dependencies [64f6b4f]
- Updated dependencies [5f7be64]
  - @pnpm/config@1002.6.0
  - @pnpm/types@1000.3.0
  - @pnpm/config.config-writer@1000.0.0
  - @pnpm/modules-yaml@1000.3.0
  - @pnpm/cli-utils@1000.0.18
  - @pnpm/plugin-commands-installation@1002.2.3
  - @pnpm/store-connection-manager@1000.0.18
  - @pnpm/pick-registry-for-package@1000.0.5
  - @pnpm/lockfile.fs@1001.1.8
  - @pnpm/lockfile.utils@1001.0.7
  - @pnpm/read-package-json@1000.0.6
  - @pnpm/read-project-manifest@1000.0.8
  - @pnpm/workspace.read-manifest@1000.1.2
  - @pnpm/crypto.hash@1000.1.1
  - @pnpm/patching.apply-patch@1000.0.3
  - @pnpm/pick-fetcher@1000.0.0

## 1000.1.5

### Patch Changes

- Updated dependencies [d612dcf]
- Updated dependencies [936430a]
- Updated dependencies [d612dcf]
  - @pnpm/modules-yaml@1000.2.0
  - @pnpm/config@1002.5.4
  - @pnpm/plugin-commands-installation@1002.2.2
  - @pnpm/cli-utils@1000.0.17
  - @pnpm/store-connection-manager@1000.0.17
  - @pnpm/pick-fetcher@1000.0.0
  - @pnpm/lockfile.utils@1001.0.6
  - @pnpm/lockfile.fs@1001.1.7
  - @pnpm/crypto.hash@1000.1.1
  - @pnpm/patching.apply-patch@1000.0.3

## 1000.1.4

### Patch Changes

- Updated dependencies [e5b7bf4]
  - @pnpm/plugin-commands-installation@1002.2.1
  - @pnpm/store-connection-manager@1000.0.16

## 1000.1.3

### Patch Changes

- 968b85b: When `terminalLink` is not supported, it should fallback to the default text.
- Updated dependencies [b4efd0e]
- Updated dependencies [6e4459c]
- Updated dependencies [cda1c43]
  - @pnpm/plugin-commands-installation@1002.2.0
  - @pnpm/config@1002.5.3
  - @pnpm/cli-utils@1000.0.16
  - @pnpm/store-connection-manager@1000.0.15

## 1000.1.2

### Patch Changes

- 0378a9a: `pnpm patch-commit` will now use the same filesystem as the store directory to compare and create patch files.
  - @pnpm/cli-utils@1000.0.15
  - @pnpm/crypto.hash@1000.1.1
  - @pnpm/plugin-commands-installation@1002.1.2
  - @pnpm/config@1002.5.2
  - @pnpm/lockfile.fs@1001.1.6
  - @pnpm/lockfile.utils@1001.0.5
  - @pnpm/store-connection-manager@1000.0.14

## 1000.1.1

### Patch Changes

- Updated dependencies [c3aa4d8]
  - @pnpm/config@1002.5.1
  - @pnpm/cli-utils@1000.0.14
  - @pnpm/plugin-commands-installation@1002.1.1
  - @pnpm/store-connection-manager@1000.0.13

## 1000.1.0

### Minor Changes

- d965748: `pnpm-workspace.yaml` can now hold all the settings that `.npmrc` accepts. The settings should use camelCase [#9211](https://github.com/pnpm/pnpm/pull/9211).

  `pnpm-workspace.yaml` example:

  ```yaml
  verifyDepsBeforeRun: install
  optimisticRepeatInstall: true
  publicHoistPattern:
    - "*types*"
    - "!@types/react"
  ```

### Patch Changes

- b8b0c68: `fast-glob` replace with `tinyglobby` to reduce the size of the pnpm CLI dependencies [#9169](https://github.com/pnpm/pnpm/pull/9169).
- Updated dependencies [6a59366]
- Updated dependencies [a5e4965]
- Updated dependencies [d9d7607]
- Updated dependencies [d965748]
- Updated dependencies [453a18a]
- Updated dependencies [e4eeafd]
  - @pnpm/plugin-commands-installation@1002.1.0
  - @pnpm/types@1000.2.1
  - @pnpm/config@1002.5.0
  - @pnpm/patching.apply-patch@1000.0.3
  - @pnpm/cli-utils@1000.0.13
  - @pnpm/pick-registry-for-package@1000.0.4
  - @pnpm/lockfile.fs@1001.1.5
  - @pnpm/lockfile.utils@1001.0.4
  - @pnpm/modules-yaml@1000.1.4
  - @pnpm/read-package-json@1000.0.5
  - @pnpm/read-project-manifest@1000.0.7
  - @pnpm/store-connection-manager@1000.0.12
  - @pnpm/pick-fetcher@1000.0.0

## 1000.0.14

### Patch Changes

- Updated dependencies [76973d8]
- Updated dependencies [1c2eb8c]
  - @pnpm/plugin-commands-installation@1002.0.1
  - @pnpm/config@1002.4.1
  - @pnpm/cli-utils@1000.0.12
  - @pnpm/store-connection-manager@1000.0.11

## 1000.0.13

### Patch Changes

- Updated dependencies [8fcc221]
- Updated dependencies [8fcc221]
- Updated dependencies [e32b1a2]
- Updated dependencies [5296961]
- Updated dependencies [8fcc221]
  - @pnpm/plugin-commands-installation@1002.0.0
  - @pnpm/config@1002.4.0
  - @pnpm/types@1000.2.0
  - @pnpm/cli-utils@1000.0.11
  - @pnpm/store-connection-manager@1000.0.10
  - @pnpm/pick-registry-for-package@1000.0.3
  - @pnpm/lockfile.fs@1001.1.4
  - @pnpm/lockfile.utils@1001.0.3
  - @pnpm/modules-yaml@1000.1.3
  - @pnpm/read-package-json@1000.0.4
  - @pnpm/read-project-manifest@1000.0.6
  - @pnpm/patching.apply-patch@1000.0.2
  - @pnpm/pick-fetcher@1000.0.0

## 1000.0.12

### Patch Changes

- Updated dependencies [fee898f]
- Updated dependencies [546ab37]
  - @pnpm/config@1002.3.1
  - @pnpm/plugin-commands-installation@1001.5.1
  - @pnpm/cli-utils@1000.0.10
  - @pnpm/store-connection-manager@1000.0.9
  - @pnpm/lockfile.fs@1001.1.3

## 1000.0.11

### Patch Changes

- Updated dependencies [91d46ee]
  - @pnpm/plugin-commands-installation@1001.5.0
  - @pnpm/cli-utils@1000.0.9

## 1000.0.10

### Patch Changes

- Updated dependencies [f6006f2]
  - @pnpm/plugin-commands-installation@1001.4.0
  - @pnpm/config@1002.3.0
  - @pnpm/cli-utils@1000.0.8
  - @pnpm/store-connection-manager@1000.0.8

## 1000.0.9

### Patch Changes

- @pnpm/plugin-commands-installation@1001.3.2

## 1000.0.8

### Patch Changes

- Updated dependencies [1e229d7]
  - @pnpm/read-project-manifest@1000.0.5
  - @pnpm/cli-utils@1000.0.7
  - @pnpm/config@1002.2.1
  - @pnpm/plugin-commands-installation@1001.3.1
  - @pnpm/store-connection-manager@1000.0.7

## 1000.0.7

### Patch Changes

- Updated dependencies [9a44e6c]
- Updated dependencies [b562deb]
- Updated dependencies [f3ffaed]
- Updated dependencies [c96eb2b]
  - @pnpm/constants@1001.1.0
  - @pnpm/types@1000.1.1
  - @pnpm/plugin-commands-installation@1001.3.0
  - @pnpm/config@1002.2.0
  - @pnpm/lockfile.fs@1001.1.2
  - @pnpm/error@1000.0.2
  - @pnpm/cli-utils@1000.0.6
  - @pnpm/pick-registry-for-package@1000.0.2
  - @pnpm/lockfile.utils@1001.0.2
  - @pnpm/modules-yaml@1000.1.2
  - @pnpm/read-package-json@1000.0.3
  - @pnpm/read-project-manifest@1000.0.4
  - @pnpm/store-connection-manager@1000.0.6
  - @pnpm/patching.apply-patch@1000.0.2
  - @pnpm/pick-fetcher@1000.0.0

## 1000.0.6

### Patch Changes

- Updated dependencies [e050221]
- Updated dependencies [e050221]
  - @pnpm/read-project-manifest@1000.0.3
  - @pnpm/plugin-commands-installation@1001.2.1
  - @pnpm/cli-utils@1000.0.5
  - @pnpm/config@1002.1.2
  - @pnpm/store-connection-manager@1000.0.5
  - @pnpm/patching.apply-patch@1000.0.1

## 1000.0.5

### Patch Changes

- 046388c: Exclude `.DS_Store` file at `patch-commit` [#8922](https://github.com/pnpm/pnpm/issues/8922).
- 0f35416: Fix a bug in which `pnpm patch` is unable to bring back old patch without specifying `@version` suffix [#8919](https://github.com/pnpm/pnpm/issues/8919).
- Updated dependencies [c7eefdd]
- Updated dependencies [9591a18]
- Updated dependencies [1f5169f]
  - @pnpm/plugin-commands-installation@1001.2.0
  - @pnpm/types@1000.1.0
  - @pnpm/config@1002.1.1
  - @pnpm/cli-utils@1000.0.4
  - @pnpm/pick-registry-for-package@1000.0.1
  - @pnpm/lockfile.fs@1001.1.1
  - @pnpm/lockfile.utils@1001.0.1
  - @pnpm/modules-yaml@1000.1.1
  - @pnpm/read-package-json@1000.0.2
  - @pnpm/read-project-manifest@1000.0.2
  - @pnpm/store-connection-manager@1000.0.4
  - @pnpm/patching.apply-patch@1000.0.1
  - @pnpm/pick-fetcher@1000.0.0

## 1000.0.4

### Patch Changes

- Updated dependencies [f90a94b]
- Updated dependencies [f891288]
- Updated dependencies [f891288]
  - @pnpm/config@1002.1.0
  - @pnpm/plugin-commands-installation@1001.1.0
  - @pnpm/cli-utils@1000.0.3
  - @pnpm/store-connection-manager@1000.0.3

## 1000.0.3

### Patch Changes

- f74070d: Use double quotes in the command suggestion by `pnpm patch` on Windows [#7546](https://github.com/pnpm/pnpm/issues/7546).
- Updated dependencies [f685565]
- Updated dependencies [4771813]
- Updated dependencies [878ea8c]
  - @pnpm/plugin-commands-installation@1001.0.2
  - @pnpm/modules-yaml@1000.1.0
  - @pnpm/config@1002.0.0
  - @pnpm/cli-utils@1000.0.2
  - @pnpm/store-connection-manager@1000.0.2
  - @pnpm/patching.apply-patch@1000.0.1

## 1000.0.2

### Patch Changes

- Updated dependencies [3f0e4f0]
  - @pnpm/lockfile.fs@1001.1.0
  - @pnpm/plugin-commands-installation@1001.0.1

## 1000.0.1

### Patch Changes

- Updated dependencies [ac5b9d8]
- Updated dependencies [d2e83b0]
- Updated dependencies [6483b64]
- Updated dependencies [31911f1]
- Updated dependencies [b8bda0a]
- Updated dependencies [d47c426]
- Updated dependencies [a76da0c]
  - @pnpm/plugin-commands-installation@1001.0.0
  - @pnpm/config@1001.0.0
  - @pnpm/constants@1001.0.0
  - @pnpm/lockfile.utils@1001.0.0
  - @pnpm/lockfile.fs@1001.0.0
  - @pnpm/cli-utils@1000.0.1
  - @pnpm/store-connection-manager@1000.0.1
  - @pnpm/error@1000.0.1
  - @pnpm/pick-fetcher@1000.0.0
  - @pnpm/patching.apply-patch@1000.0.1
  - @pnpm/read-package-json@1000.0.1
  - @pnpm/read-project-manifest@1000.0.1

## 6.4.15

### Patch Changes

- Updated dependencies [19d5b51]
- Updated dependencies [8108680]
- Updated dependencies [477e0c1]
- Updated dependencies [dfcf034]
- Updated dependencies [592e2ef]
- Updated dependencies [19d5b51]
- Updated dependencies [19d5b51]
- Updated dependencies [1dbc56a]
- Updated dependencies [6b27c81]
- Updated dependencies [e9985b6]
- Updated dependencies [c4f5231]
  - @pnpm/constants@10.0.0
  - @pnpm/plugin-commands-installation@18.0.0
  - @pnpm/config@22.0.0
  - @pnpm/lockfile.fs@1.0.6
  - @pnpm/error@6.0.3
  - @pnpm/cli-utils@4.0.8
  - @pnpm/store-connection-manager@8.4.3
  - @pnpm/lockfile.utils@1.0.5
  - @pnpm/patching.apply-patch@3.1.2
  - @pnpm/read-package-json@9.0.10
  - @pnpm/read-project-manifest@6.0.10

## 6.4.14

### Patch Changes

- Updated dependencies [6014522]
  - @pnpm/plugin-commands-installation@17.2.7
  - @pnpm/store-connection-manager@8.4.2
  - @pnpm/cli-utils@4.0.7
  - @pnpm/config@21.8.5
  - @pnpm/lockfile.fs@1.0.5
  - @pnpm/lockfile.utils@1.0.4
  - @pnpm/patching.apply-patch@3.1.1

## 6.4.13

### Patch Changes

- @pnpm/plugin-commands-installation@17.2.6
- @pnpm/store-connection-manager@8.4.1
- @pnpm/cli-utils@4.0.6
- @pnpm/config@21.8.4
- @pnpm/patching.apply-patch@3.1.1

## 6.4.12

### Patch Changes

- @pnpm/plugin-commands-installation@17.2.5

## 6.4.11

### Patch Changes

- Updated dependencies [83681da]
- Updated dependencies [83681da]
  - @pnpm/store-connection-manager@8.4.0
  - @pnpm/plugin-commands-installation@17.2.4
  - @pnpm/constants@9.0.0
  - @pnpm/config@21.8.4
  - @pnpm/lockfile.fs@1.0.4
  - @pnpm/error@6.0.2
  - @pnpm/cli-utils@4.0.6
  - @pnpm/patching.apply-patch@3.1.1
  - @pnpm/read-package-json@9.0.9
  - @pnpm/read-project-manifest@6.0.9

## 6.4.10

### Patch Changes

- Updated dependencies [ad1fd64]
- Updated dependencies [eeb76cd]
  - @pnpm/plugin-commands-installation@17.2.3

## 6.4.9

### Patch Changes

- Updated dependencies [d500d9f]
  - @pnpm/types@12.2.0
  - @pnpm/cli-utils@4.0.5
  - @pnpm/config@21.8.3
  - @pnpm/pick-registry-for-package@6.0.7
  - @pnpm/lockfile.fs@1.0.3
  - @pnpm/lockfile.utils@1.0.3
  - @pnpm/modules-yaml@13.1.7
  - @pnpm/plugin-commands-installation@17.2.2
  - @pnpm/read-package-json@9.0.8
  - @pnpm/read-project-manifest@6.0.8
  - @pnpm/patching.apply-patch@3.1.0
  - @pnpm/store-connection-manager@8.3.10
  - @pnpm/pick-fetcher@3.0.0

## 6.4.8

### Patch Changes

- @pnpm/plugin-commands-installation@17.2.1

## 6.4.7

### Patch Changes

- Updated dependencies [7ee59a1]
  - @pnpm/types@12.1.0
  - @pnpm/plugin-commands-installation@17.2.0
  - @pnpm/cli-utils@4.0.4
  - @pnpm/config@21.8.2
  - @pnpm/pick-registry-for-package@6.0.6
  - @pnpm/lockfile.fs@1.0.2
  - @pnpm/lockfile.utils@1.0.2
  - @pnpm/modules-yaml@13.1.6
  - @pnpm/read-package-json@9.0.7
  - @pnpm/read-project-manifest@6.0.7
  - @pnpm/patching.apply-patch@3.1.0
  - @pnpm/store-connection-manager@8.3.9
  - @pnpm/pick-fetcher@3.0.0

## 6.4.6

### Patch Changes

- @pnpm/plugin-commands-installation@17.1.1

## 6.4.5

### Patch Changes

- da3fa97: Remember the state of edit dir, allow running `pnpm patch-commit` the second time without having to re-run `pnpm patch`.
- Updated dependencies [eb8bf2a]
  - @pnpm/plugin-commands-installation@17.1.0
  - @pnpm/cli-utils@4.0.3
  - @pnpm/store-connection-manager@8.3.8

## 6.4.4

### Patch Changes

- ed2bc5d: Fix a bug in `patch-commit` in which relative path is rejected [#8405](https://github.com/pnpm/pnpm/pull/8405).
- Updated dependencies [251ab21]
  - @pnpm/config@21.8.1
  - @pnpm/cli-utils@4.0.2
  - @pnpm/plugin-commands-installation@17.0.7
  - @pnpm/store-connection-manager@8.3.7

## 6.4.3

### Patch Changes

- @pnpm/plugin-commands-installation@17.0.6

## 6.4.2

### Patch Changes

- @pnpm/plugin-commands-installation@17.0.5

## 6.4.1

### Patch Changes

- @pnpm/cli-utils@4.0.1
- @pnpm/plugin-commands-installation@17.0.4

## 6.4.0

### Minor Changes

- 1731386: Change the default edit dir location when running `pnpm patch` from a temporary directory to `node_modules/.pnpm_patches/pkg[@version]` to allow the code editor to open the edit dir in the same file tree as the main project.

### Patch Changes

- Updated dependencies [26b065c]
- Updated dependencies [26b065c]
  - @pnpm/cli-utils@4.0.0
  - @pnpm/config@21.8.0
  - @pnpm/plugin-commands-installation@17.0.3
  - @pnpm/store-connection-manager@8.3.6

## 6.3.0

### Minor Changes

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

### Patch Changes

- Updated dependencies [cb006df]
- Updated dependencies [98c8bd6]
- Updated dependencies [d20eed3]
  - @pnpm/patching.apply-patch@3.1.0
  - @pnpm/types@12.0.0
  - @pnpm/cli-utils@3.1.7
  - @pnpm/config@21.7.0
  - @pnpm/plugin-commands-installation@17.0.2
  - @pnpm/lockfile.fs@1.0.1
  - @pnpm/lockfile.utils@1.0.1
  - @pnpm/pick-registry-for-package@6.0.5
  - @pnpm/modules-yaml@13.1.5
  - @pnpm/read-package-json@9.0.6
  - @pnpm/read-project-manifest@6.0.6
  - @pnpm/store-connection-manager@8.3.5
  - @pnpm/pick-fetcher@3.0.0

## 6.2.5

### Patch Changes

- Updated dependencies [c5ef9b0]
- Updated dependencies [8055a30]
  - @pnpm/lockfile.utils@1.0.0
  - @pnpm/lockfile.fs@1.0.0
  - @pnpm/plugin-commands-installation@17.0.1
  - @pnpm/config@21.6.3
  - @pnpm/cli-utils@3.1.6
  - @pnpm/patching.apply-patch@3.0.1
  - @pnpm/store-connection-manager@8.3.4

## 6.2.4

### Patch Changes

- 726753f: Correct the error message when trying to run `pnpm patch` without `node_modules/.modules.yaml` [#8257](https://github.com/pnpm/pnpm/issues/8257).
- Updated dependencies [1e4dd79]
- Updated dependencies [0ef168b]
  - @pnpm/plugin-commands-installation@17.0.0
  - @pnpm/types@11.1.0
  - @pnpm/cli-utils@3.1.5
  - @pnpm/config@21.6.2
  - @pnpm/pick-registry-for-package@6.0.4
  - @pnpm/lockfile-file@9.1.3
  - @pnpm/lockfile-utils@11.0.4
  - @pnpm/modules-yaml@13.1.4
  - @pnpm/read-package-json@9.0.5
  - @pnpm/read-project-manifest@6.0.5
  - @pnpm/patching.apply-patch@3.0.1
  - @pnpm/store-connection-manager@8.3.3
  - @pnpm/pick-fetcher@3.0.0

## 6.2.3

### Patch Changes

- Updated dependencies [afe520d]
  - @pnpm/config@21.6.1
  - @pnpm/plugin-commands-installation@16.0.1
  - @pnpm/cli-utils@3.1.4
  - @pnpm/store-connection-manager@8.3.2
  - @pnpm/patching.apply-patch@3.0.1

## 6.2.2

### Patch Changes

- Updated dependencies [1b03682]
- Updated dependencies [dd00eeb]
- Updated dependencies
- Updated dependencies [84654bd]
  - @pnpm/config@21.6.0
  - @pnpm/plugin-commands-installation@16.0.0
  - @pnpm/types@11.0.0
  - @pnpm/cli-utils@3.1.3
  - @pnpm/store-connection-manager@8.3.1
  - @pnpm/pick-fetcher@3.0.0
  - @pnpm/lockfile-utils@11.0.3
  - @pnpm/pick-registry-for-package@6.0.3
  - @pnpm/lockfile-file@9.1.2
  - @pnpm/modules-yaml@13.1.3
  - @pnpm/read-package-json@9.0.4
  - @pnpm/read-project-manifest@6.0.4
  - @pnpm/patching.apply-patch@3.0.1

## 6.2.1

### Patch Changes

- Updated dependencies [7c6c923]
- Updated dependencies [7d10394]
- Updated dependencies [d8eab39]
- Updated dependencies [13e55b2]
- Updated dependencies [04b8363]
  - @pnpm/store-connection-manager@8.3.0
  - @pnpm/config@21.5.0
  - @pnpm/plugin-commands-installation@15.1.11
  - @pnpm/cli-utils@3.1.2
  - @pnpm/pick-registry-for-package@6.0.2
  - @pnpm/lockfile-file@9.1.1
  - @pnpm/lockfile-utils@11.0.2
  - @pnpm/modules-yaml@13.1.2
  - @pnpm/read-package-json@9.0.3
  - @pnpm/read-project-manifest@6.0.3
  - @pnpm/patching.apply-patch@3.0.1
  - @pnpm/pick-fetcher@3.0.0

## 6.2.0

### Minor Changes

- 47341e5: **Semi-breaking.** Dependency key names in the lockfile are shortened if they are longer than 1000 characters. We don't expect this change to affect many users. Affected users most probably can't run install successfully at the moment. This change is required to fix some edge cases in which installation fails with an out-of-memory error or "Invalid string length (RangeError: Invalid string length)" error. The max allowed length of the dependency key can be controlled with the `peers-suffix-max-length` setting [#8177](https://github.com/pnpm/pnpm/pull/8177).

### Patch Changes

- 08dad01: Add `--no-ext-diff` disallow external diff drivers to prevent incorrect diff file formats
- Updated dependencies [47341e5]
  - @pnpm/lockfile-file@9.1.0
  - @pnpm/config@21.4.0
  - @pnpm/plugin-commands-installation@15.1.10
  - @pnpm/lockfile-utils@11.0.1
  - @pnpm/cli-utils@3.1.1
  - @pnpm/store-connection-manager@8.2.2
  - @pnpm/patching.apply-patch@3.0.1

## 6.1.9

### Patch Changes

- Updated dependencies [b7ca13f]
- Updated dependencies [b7ca13f]
  - @pnpm/cli-utils@3.1.0
  - @pnpm/config@21.3.0
  - @pnpm/plugin-commands-installation@15.1.9
  - @pnpm/store-connection-manager@8.2.1

## 6.1.8

### Patch Changes

- @pnpm/plugin-commands-installation@15.1.8

## 6.1.7

### Patch Changes

- @pnpm/plugin-commands-installation@15.1.7

## 6.1.6

### Patch Changes

- @pnpm/plugin-commands-installation@15.1.6

## 6.1.5

### Patch Changes

- Updated dependencies [0c08e1c]
  - @pnpm/store-connection-manager@8.2.0
  - @pnpm/plugin-commands-installation@15.1.5
  - @pnpm/config@21.2.3
  - @pnpm/cli-utils@3.0.7
  - @pnpm/patching.apply-patch@3.0.1

## 6.1.4

### Patch Changes

- Updated dependencies
  - @pnpm/lockfile-utils@11.0.0
  - @pnpm/cli-utils@3.0.6
  - @pnpm/config@21.2.2
  - @pnpm/pick-registry-for-package@6.0.1
  - @pnpm/lockfile-file@9.0.6
  - @pnpm/modules-yaml@13.1.1
  - @pnpm/plugin-commands-installation@15.1.4
  - @pnpm/read-package-json@9.0.2
  - @pnpm/read-project-manifest@6.0.2
  - @pnpm/patching.apply-patch@3.0.1
  - @pnpm/store-connection-manager@8.1.4
  - @pnpm/pick-fetcher@3.0.0

## 6.1.3

### Patch Changes

- Updated dependencies [a7aef51]
  - @pnpm/error@6.0.1
  - @pnpm/cli-utils@3.0.5
  - @pnpm/config@21.2.1
  - @pnpm/lockfile-file@9.0.5
  - @pnpm/patching.apply-patch@3.0.1
  - @pnpm/plugin-commands-installation@15.1.3
  - @pnpm/read-package-json@9.0.1
  - @pnpm/read-project-manifest@6.0.1
  - @pnpm/store-connection-manager@8.1.3

## 6.1.2

### Patch Changes

- @pnpm/cli-utils@3.0.4
- @pnpm/plugin-commands-installation@15.1.2
- @pnpm/store-connection-manager@8.1.2

## 6.1.1

### Patch Changes

- Updated dependencies [7a0536e]
  - @pnpm/lockfile-utils@10.1.1
  - @pnpm/lockfile-file@9.0.4
  - @pnpm/plugin-commands-installation@15.1.1
  - @pnpm/store-connection-manager@8.1.1

## 6.1.0

### Minor Changes

- 9719a42: New setting called `virtual-store-dir-max-length` added to modify the maximum allowed length of the directories inside `node_modules/.pnpm`. The default length is set to 120 characters. This setting is particularly useful on Windows, where there is a limit to the maximum length of a file path [#7355](https://github.com/pnpm/pnpm/issues/7355).

### Patch Changes

- Updated dependencies [9719a42]
  - @pnpm/plugin-commands-installation@15.1.0
  - @pnpm/store-connection-manager@8.1.0
  - @pnpm/modules-yaml@13.1.0
  - @pnpm/lockfile-utils@10.1.0
  - @pnpm/config@21.2.0
  - @pnpm/lockfile-file@9.0.3
  - @pnpm/cli-utils@3.0.3
  - @pnpm/patching.apply-patch@3.0.0

## 6.0.7

### Patch Changes

- Updated dependencies [c969f37]
  - @pnpm/lockfile-file@9.0.2
  - @pnpm/plugin-commands-installation@15.0.7
  - @pnpm/store-connection-manager@8.0.4

## 6.0.6

### Patch Changes

- Updated dependencies [2cbf7b7]
- Updated dependencies [6b6ca69]
  - @pnpm/lockfile-file@9.0.1
  - @pnpm/plugin-commands-installation@15.0.6

## 6.0.5

### Patch Changes

- @pnpm/plugin-commands-installation@15.0.5
- @pnpm/store-connection-manager@8.0.3

## 6.0.4

### Patch Changes

- Updated dependencies [a80b539]
  - @pnpm/cli-utils@3.0.2
  - @pnpm/plugin-commands-installation@15.0.4
  - @pnpm/store-connection-manager@8.0.2

## 6.0.3

### Patch Changes

- @pnpm/plugin-commands-installation@15.0.3

## 6.0.2

### Patch Changes

- @pnpm/plugin-commands-installation@15.0.2

## 6.0.1

### Patch Changes

- Updated dependencies [e0f47f4]
  - @pnpm/config@21.1.0
  - @pnpm/cli-utils@3.0.1
  - @pnpm/plugin-commands-installation@15.0.1
  - @pnpm/store-connection-manager@8.0.1

## 6.0.0

### Major Changes

- 43cdd87: Node.js v16 support dropped. Use at least Node.js v18.12.

### Patch Changes

- Updated dependencies [7733f3a]
- Updated dependencies [3ded840]
- Updated dependencies [cdd8365]
- Updated dependencies [c692f80]
- Updated dependencies [43cdd87]
- Updated dependencies [2d9e3b8]
- Updated dependencies [086b69c]
- Updated dependencies [d381a60]
- Updated dependencies [3477ee5]
- Updated dependencies [cfa33f1]
- Updated dependencies [d4e13ca]
- Updated dependencies [e748162]
- Updated dependencies [f67ad31]
- Updated dependencies [2b89155]
- Updated dependencies [60839fc]
- Updated dependencies [730929e]
- Updated dependencies [98566d9]
  - @pnpm/store-connection-manager@8.0.0
  - @pnpm/config@21.0.0
  - @pnpm/error@6.0.0
  - @pnpm/lockfile-utils@10.0.0
  - @pnpm/constants@8.0.0
  - @pnpm/plugin-commands-installation@15.0.0
  - @pnpm/read-project-manifest@6.0.0
  - @pnpm/pick-registry-for-package@6.0.0
  - @pnpm/parse-wanted-dependency@6.0.0
  - @pnpm/read-package-json@9.0.0
  - @pnpm/modules-yaml@13.0.0
  - @pnpm/lockfile-file@9.0.0
  - @pnpm/pick-fetcher@3.0.0
  - @pnpm/patching.apply-patch@3.0.0
  - @pnpm/cli-utils@3.0.0
  - @pnpm/fs.packlist@2.0.0

## 5.1.1

### Patch Changes

- Updated dependencies [31054a63e]
- Updated dependencies [f43bdcf45]
  - @pnpm/plugin-commands-installation@14.2.0
  - @pnpm/pick-fetcher@2.0.1
  - @pnpm/lockfile-utils@9.0.5
  - @pnpm/cli-utils@2.1.9
  - @pnpm/store-connection-manager@7.0.26
  - @pnpm/config@20.4.2
  - @pnpm/patching.apply-patch@2.0.5

## 5.1.0

### Minor Changes

- 6964eade5: `pnpm patch-remove` removes the directory containing the patch file if it is empty.

### Patch Changes

- Updated dependencies [9fb45d0fc]
  - @pnpm/fs.packlist@1.0.3
  - @pnpm/plugin-commands-installation@14.1.3
  - @pnpm/store-connection-manager@7.0.25

## 5.0.18

### Patch Changes

- Updated dependencies [d349bc3a2]
- Updated dependencies [d9564e354]
  - @pnpm/modules-yaml@12.1.7
  - @pnpm/config@20.4.1
  - @pnpm/plugin-commands-installation@14.1.2
  - @pnpm/store-connection-manager@7.0.24
  - @pnpm/cli-utils@2.1.8
  - @pnpm/patching.apply-patch@2.0.5

## 5.0.17

### Patch Changes

- @pnpm/plugin-commands-installation@14.1.1
- @pnpm/store-connection-manager@7.0.23

## 5.0.16

### Patch Changes

- Updated dependencies [064aeb681]
- Updated dependencies [c597f72ec]
  - @pnpm/plugin-commands-installation@14.1.0
  - @pnpm/config@20.4.0
  - @pnpm/cli-utils@2.1.7
  - @pnpm/store-connection-manager@7.0.22

## 5.0.15

### Patch Changes

- Updated dependencies [619e9ed6f]
- Updated dependencies [4e71066dd]
  - @pnpm/plugin-commands-installation@14.0.15
  - @pnpm/config@20.3.0
  - @pnpm/cli-utils@2.1.6
  - @pnpm/store-connection-manager@7.0.21
  - @pnpm/lockfile-file@8.1.6
  - @pnpm/lockfile-utils@9.0.4
  - @pnpm/pick-registry-for-package@5.0.6
  - @pnpm/modules-yaml@12.1.6
  - @pnpm/read-package-json@8.0.7
  - @pnpm/read-project-manifest@5.0.10
  - @pnpm/patching.apply-patch@2.0.5
  - @pnpm/pick-fetcher@2.0.1

## 5.0.14

### Patch Changes

- Updated dependencies [672c559e4]
  - @pnpm/config@20.2.0
  - @pnpm/lockfile-file@8.1.5
  - @pnpm/lockfile-utils@9.0.3
  - @pnpm/plugin-commands-installation@14.0.14
  - @pnpm/cli-utils@2.1.5
  - @pnpm/pick-registry-for-package@5.0.5
  - @pnpm/modules-yaml@12.1.5
  - @pnpm/read-package-json@8.0.6
  - @pnpm/read-project-manifest@5.0.9
  - @pnpm/store-connection-manager@7.0.20
  - @pnpm/patching.apply-patch@2.0.5
  - @pnpm/pick-fetcher@2.0.1

## 5.0.13

### Patch Changes

- 9a53179e3: Do not create empty patch directory.
- Updated dependencies [d5a176af7]
  - @pnpm/lockfile-utils@9.0.2
  - @pnpm/plugin-commands-installation@14.0.13
  - @pnpm/store-connection-manager@7.0.19

## 5.0.12

### Patch Changes

- @pnpm/plugin-commands-installation@14.0.12

## 5.0.11

### Patch Changes

- Updated dependencies [6558d1865]
  - @pnpm/plugin-commands-installation@14.0.11
  - @pnpm/cli-utils@2.1.4
  - @pnpm/store-connection-manager@7.0.18

## 5.0.10

### Patch Changes

- @pnpm/cli-utils@2.1.3
- @pnpm/plugin-commands-installation@14.0.10
- @pnpm/store-connection-manager@7.0.17

## 5.0.9

### Patch Changes

- @pnpm/plugin-commands-installation@14.0.9
- @pnpm/store-connection-manager@7.0.16

## 5.0.8

### Patch Changes

- @pnpm/plugin-commands-installation@14.0.8
- @pnpm/store-connection-manager@7.0.15

## 5.0.7

### Patch Changes

- Updated dependencies [b4194fe52]
  - @pnpm/lockfile-utils@9.0.1
  - @pnpm/plugin-commands-installation@14.0.7

## 5.0.6

### Patch Changes

- 2dfc8c80a: `pnpm patch` should reuse existing patch when `shared-workspace-file=false` [#7252](https://github.com/pnpm/pnpm/pull/7252).
- Updated dependencies [74432d605]
  - @pnpm/fs.packlist@1.0.2
  - @pnpm/plugin-commands-installation@14.0.6
  - @pnpm/store-connection-manager@7.0.14
  - @pnpm/config@20.1.2
  - @pnpm/cli-utils@2.1.2
  - @pnpm/patching.apply-patch@2.0.5

## 5.0.5

### Patch Changes

- @pnpm/plugin-commands-installation@14.0.5

## 5.0.4

### Patch Changes

- Updated dependencies [c7f1359b6]
  - @pnpm/fs.packlist@1.0.1
  - @pnpm/store-connection-manager@7.0.13
  - @pnpm/plugin-commands-installation@14.0.4

## 5.0.3

### Patch Changes

- Updated dependencies [4c2450208]
  - @pnpm/lockfile-utils@9.0.0
  - @pnpm/pick-fetcher@2.0.1
  - @pnpm/plugin-commands-installation@14.0.3
  - @pnpm/store-connection-manager@7.0.12
  - @pnpm/config@20.1.1
  - @pnpm/cli-utils@2.1.1
  - @pnpm/patching.apply-patch@2.0.5

## 5.0.2

### Patch Changes

- 500363647: `pnpm publish` should not pack the same file twice sometimes [#6997](https://github.com/pnpm/pnpm/issues/6997).

  The fix was to update `npm-packlist` to the latest version.

- Updated dependencies [500363647]
  - @pnpm/fs.packlist@1.0.0
  - @pnpm/store-connection-manager@7.0.11
  - @pnpm/plugin-commands-installation@14.0.2

## 5.0.1

### Patch Changes

- @pnpm/plugin-commands-installation@14.0.1

## 5.0.0

### Major Changes

- d6592964f: `rootProjectManifestDir` is a required field.

### Minor Changes

- 43ce9e4a6: Support for multiple architectures when installing dependencies [#5965](https://github.com/pnpm/pnpm/issues/5965).

  You can now specify architectures for which you'd like to install optional dependencies, even if they don't match the architecture of the system running the install. Use the `supportedArchitectures` field in `package.json` to define your preferences.

  For example, the following configuration tells pnpm to install optional dependencies for Windows x64:

  ```json
  {
    "pnpm": {
      "supportedArchitectures": {
        "os": ["win32"],
        "cpu": ["x64"]
      }
    }
  }
  ```

  Whereas this configuration will have pnpm install optional dependencies for Windows, macOS, and the architecture of the system currently running the install. It includes artifacts for both x64 and arm64 CPUs:

  ```json
  {
    "pnpm": {
      "supportedArchitectures": {
        "os": ["win32", "darwin", "current"],
        "cpu": ["x64", "arm64"]
      }
    }
  }
  ```

  Additionally, `supportedArchitectures` also supports specifying the `libc` of the system.

### Patch Changes

- d93e5d06d: Should fetch dependency from tarball url when patching dependency installed from git [#7196](https://github.com/pnpm/pnpm/issues/7196)
- Updated dependencies [43ce9e4a6]
- Updated dependencies [d6592964f]
- Updated dependencies [d6592964f]
  - @pnpm/cli-utils@2.1.0
  - @pnpm/config@20.1.0
  - @pnpm/plugin-commands-installation@14.0.0
  - @pnpm/pick-registry-for-package@5.0.4
  - @pnpm/lockfile-file@8.1.4
  - @pnpm/lockfile-utils@8.0.7
  - @pnpm/modules-yaml@12.1.4
  - @pnpm/read-package-json@8.0.5
  - @pnpm/read-project-manifest@5.0.8
  - @pnpm/store-connection-manager@7.0.10
  - @pnpm/patching.apply-patch@2.0.5
  - @pnpm/pick-fetcher@2.0.1

## 4.0.2

### Patch Changes

- @pnpm/plugin-commands-installation@13.2.6
- @pnpm/store-connection-manager@7.0.9

## 4.0.1

### Patch Changes

- @pnpm/plugin-commands-installation@13.2.5
- @pnpm/store-connection-manager@7.0.8

## 4.0.0

### Major Changes

- ac5abd3ff: The paths in patchedDependencies passed to `@pnpm/core` are absolute.

### Patch Changes

- Updated dependencies [bc83798d4]
- Updated dependencies [46dc34dcc]
- Updated dependencies [ac5abd3ff]
- Updated dependencies [b60bb6cbe]
  - @pnpm/plugin-commands-installation@13.2.4
  - @pnpm/config@20.0.0
  - @pnpm/store-connection-manager@7.0.7
  - @pnpm/cli-utils@2.0.24
  - @pnpm/patching.apply-patch@2.0.5

## 3.1.33

### Patch Changes

- @pnpm/plugin-commands-installation@13.2.3
- @pnpm/store-connection-manager@7.0.6

## 3.1.32

### Patch Changes

- @pnpm/plugin-commands-installation@13.2.2
- @pnpm/store-connection-manager@7.0.5

## 3.1.31

### Patch Changes

- Updated dependencies [b1dd0ee58]
  - @pnpm/config@19.2.1
  - @pnpm/cli-utils@2.0.23
  - @pnpm/plugin-commands-installation@13.2.1
  - @pnpm/store-connection-manager@7.0.4

## 3.1.30

### Patch Changes

- Updated dependencies [d774a3196]
- Updated dependencies [12f45a83d]
- Updated dependencies [d774a3196]
- Updated dependencies [832e28826]
  - @pnpm/config@19.2.0
  - @pnpm/plugin-commands-installation@13.2.0
  - @pnpm/cli-utils@2.0.22
  - @pnpm/store-connection-manager@7.0.3
  - @pnpm/pick-registry-for-package@5.0.3
  - @pnpm/lockfile-file@8.1.3
  - @pnpm/lockfile-utils@8.0.6
  - @pnpm/modules-yaml@12.1.3
  - @pnpm/read-package-json@8.0.4
  - @pnpm/read-project-manifest@5.0.7
  - @pnpm/patching.apply-patch@2.0.5

## 3.1.29

### Patch Changes

- @pnpm/plugin-commands-installation@13.1.8

## 3.1.28

### Patch Changes

- Updated dependencies [ba48fe0bc]
- Updated dependencies [ee328fd25]
- Updated dependencies [f394cfccd]
  - @pnpm/plugin-commands-installation@13.1.7
  - @pnpm/config@19.1.0
  - @pnpm/lockfile-utils@8.0.5
  - @pnpm/cli-utils@2.0.21
  - @pnpm/store-connection-manager@7.0.2

## 3.1.27

### Patch Changes

- @pnpm/plugin-commands-installation@13.1.6
- @pnpm/cli-utils@2.0.20
- @pnpm/store-connection-manager@7.0.1

## 3.1.26

### Patch Changes

- Updated dependencies [9caa33d53]
  - @pnpm/store-connection-manager@7.0.0
  - @pnpm/plugin-commands-installation@13.1.5
  - @pnpm/read-project-manifest@5.0.6
  - @pnpm/config@19.0.3
  - @pnpm/cli-utils@2.0.19
  - @pnpm/patching.apply-patch@2.0.5

## 3.1.25

### Patch Changes

- @pnpm/plugin-commands-installation@13.1.4
- @pnpm/store-connection-manager@6.2.1

## 3.1.24

### Patch Changes

- Updated dependencies [03cdccc6e]
  - @pnpm/store-connection-manager@6.2.0
  - @pnpm/plugin-commands-installation@13.1.3
  - @pnpm/config@19.0.2
  - @pnpm/cli-utils@2.0.18
  - @pnpm/patching.apply-patch@2.0.5

## 3.1.23

### Patch Changes

- @pnpm/plugin-commands-installation@13.1.2
- @pnpm/store-connection-manager@6.1.3
- @pnpm/config@19.0.1
- @pnpm/patching.apply-patch@2.0.5

## 3.1.22

### Patch Changes

- @pnpm/store-connection-manager@6.1.2
- @pnpm/plugin-commands-installation@13.1.1
- @pnpm/config@19.0.1
- @pnpm/patching.apply-patch@2.0.5
- @pnpm/cli-utils@2.0.17

## 3.1.21

### Patch Changes

- Updated dependencies [ef3609049]
- Updated dependencies [e0474bc4c]
- Updated dependencies [bf21c9bf3]
- Updated dependencies [cb8bcc8df]
- Updated dependencies [512d71254]
- Updated dependencies [e9aa6f682]
- Updated dependencies [81e5ada3a]
  - @pnpm/plugin-commands-installation@13.1.0
  - @pnpm/config@19.0.0
  - @pnpm/patching.apply-patch@2.0.5
  - @pnpm/lockfile-utils@8.0.4
  - @pnpm/cli-utils@2.0.16
  - @pnpm/store-connection-manager@6.1.1
  - @pnpm/read-project-manifest@5.0.5

## 3.1.20

### Patch Changes

- 12b0f0976: `pnpm patch` should works correctly when shared-workspace-file is false [#6885](https://github.com/pnpm/pnpm/issues/6885)
- Updated dependencies [12b0f0976]
- Updated dependencies [92f42224c]
  - @pnpm/plugin-commands-installation@13.0.25
  - @pnpm/store-connection-manager@6.1.0
  - @pnpm/cli-utils@2.0.15

## 3.1.19

### Patch Changes

- Updated dependencies [78d43a862]
  - @pnpm/plugin-commands-installation@13.0.24
  - @pnpm/store-connection-manager@6.0.24

## 3.1.18

### Patch Changes

- @pnpm/cli-utils@2.0.14
- @pnpm/plugin-commands-installation@13.0.23
- @pnpm/store-connection-manager@6.0.23

## 3.1.17

### Patch Changes

- @pnpm/plugin-commands-installation@13.0.22
- @pnpm/store-connection-manager@6.0.22
- @pnpm/config@18.4.4
- @pnpm/patching.apply-patch@2.0.4

## 3.1.16

### Patch Changes

- 653e9104c: Ignore empty patch content when patch-commit.
  - @pnpm/plugin-commands-installation@13.0.21
  - @pnpm/store-connection-manager@6.0.21
  - @pnpm/config@18.4.4
  - @pnpm/patching.apply-patch@2.0.4

## 3.1.15

### Patch Changes

- @pnpm/plugin-commands-installation@13.0.20
- @pnpm/store-connection-manager@6.0.20
- @pnpm/config@18.4.4
- @pnpm/patching.apply-patch@2.0.4

## 3.1.14

### Patch Changes

- @pnpm/store-connection-manager@6.0.19
- @pnpm/plugin-commands-installation@13.0.19

## 3.1.13

### Patch Changes

- @pnpm/cli-utils@2.0.13
- @pnpm/config@18.4.4
- @pnpm/pick-registry-for-package@5.0.2
- @pnpm/lockfile-file@8.1.2
- @pnpm/lockfile-utils@8.0.3
- @pnpm/modules-yaml@12.1.2
- @pnpm/plugin-commands-installation@13.0.18
- @pnpm/read-package-json@8.0.3
- @pnpm/read-project-manifest@5.0.4
- @pnpm/patching.apply-patch@2.0.4
- @pnpm/store-connection-manager@6.0.18

## 3.1.12

### Patch Changes

- @pnpm/plugin-commands-installation@13.0.17

## 3.1.11

### Patch Changes

- Updated dependencies [b4892acc5]
  - @pnpm/read-project-manifest@5.0.3
  - @pnpm/cli-utils@2.0.12
  - @pnpm/config@18.4.3
  - @pnpm/plugin-commands-installation@13.0.16
  - @pnpm/store-connection-manager@6.0.17

## 3.1.10

### Patch Changes

- @pnpm/plugin-commands-installation@13.0.15
- @pnpm/store-connection-manager@6.0.16
- @pnpm/config@18.4.2
- @pnpm/patching.apply-patch@2.0.4

## 3.1.9

### Patch Changes

- @pnpm/store-connection-manager@6.0.15
- @pnpm/plugin-commands-installation@13.0.14

## 3.1.8

### Patch Changes

- @pnpm/plugin-commands-installation@13.0.13
- @pnpm/store-connection-manager@6.0.14

## 3.1.7

### Patch Changes

- @pnpm/plugin-commands-installation@13.0.12

## 3.1.6

### Patch Changes

- Updated dependencies [e2d631217]
- Updated dependencies [3b6930263]
- Updated dependencies [0b830f947]
  - @pnpm/config@18.4.2
  - @pnpm/patching.apply-patch@2.0.4
  - @pnpm/plugin-commands-installation@13.0.11
  - @pnpm/cli-utils@2.0.11
  - @pnpm/store-connection-manager@6.0.13

## 3.1.5

### Patch Changes

- f0d68ab2f: When patching a dependency, only consider files specified in the 'files' field of its package.json. Ignore all others [#6565](https://github.com/pnpm/pnpm/issues/6565)
- Updated dependencies [d9da627cd]
- Updated dependencies [302ebffc5]
  - @pnpm/lockfile-utils@8.0.2
  - @pnpm/constants@7.1.1
  - @pnpm/plugin-commands-installation@13.0.10
  - @pnpm/config@18.4.1
  - @pnpm/lockfile-file@8.1.1
  - @pnpm/error@5.0.2
  - @pnpm/cli-utils@2.0.10
  - @pnpm/store-connection-manager@6.0.12
  - @pnpm/patching.apply-patch@2.0.3
  - @pnpm/read-package-json@8.0.2
  - @pnpm/read-project-manifest@5.0.2

## 3.1.4

### Patch Changes

- 4b97f1f07: Don't use await in loops.
- Updated dependencies [d55b41a8b]
- Updated dependencies [47f529ebf]
  - @pnpm/plugin-commands-installation@13.0.9
  - @pnpm/patching.apply-patch@2.0.2
  - @pnpm/store-connection-manager@6.0.11
  - @pnpm/config@18.4.0

## 3.1.3

### Patch Changes

- 9c4ae87bd: Don't run install with the `frozen-lockfile=true` setting.
- Updated dependencies [9c4ae87bd]
- Updated dependencies [9c4ae87bd]
- Updated dependencies [9c4ae87bd]
- Updated dependencies [301b8e2da]
- Updated dependencies [04a279881]
  - @pnpm/lockfile-file@8.1.0
  - @pnpm/constants@7.1.0
  - @pnpm/config@18.4.0
  - @pnpm/plugin-commands-installation@13.0.8
  - @pnpm/lockfile-utils@8.0.1
  - @pnpm/cli-utils@2.0.9
  - @pnpm/pick-registry-for-package@5.0.1
  - @pnpm/modules-yaml@12.1.1
  - @pnpm/read-package-json@8.0.1
  - @pnpm/read-project-manifest@5.0.1
  - @pnpm/error@5.0.1
  - @pnpm/store-connection-manager@6.0.10
  - @pnpm/patching.apply-patch@2.0.1

## 3.1.2

### Patch Changes

- @pnpm/plugin-commands-installation@13.0.7

## 3.1.1

### Patch Changes

- Updated dependencies [d58cdb962]
- Updated dependencies [ee429b300]
- Updated dependencies [1de07a4af]
  - @pnpm/lockfile-utils@8.0.0
  - @pnpm/cli-utils@2.0.8
  - @pnpm/config@18.3.2
  - @pnpm/plugin-commands-installation@13.0.6
  - @pnpm/store-connection-manager@6.0.9

## 3.1.0

### Minor Changes

- `pnpm patch-remove` command added [#6521](https://github.com/pnpm/pnpm/pull/6521).

### Patch Changes

- Updated dependencies [d5c40b556]
  - @pnpm/plugin-commands-installation@13.0.5

## 3.0.10

### Patch Changes

- @pnpm/plugin-commands-installation@13.0.4

## 3.0.9

### Patch Changes

- Updated dependencies [2809e89ab]
- Updated dependencies [e6b83c84e]
  - @pnpm/config@18.3.1
  - @pnpm/modules-yaml@12.1.0
  - @pnpm/plugin-commands-installation@13.0.3
  - @pnpm/cli-utils@2.0.7
  - @pnpm/store-connection-manager@6.0.8

## 3.0.8

### Patch Changes

- @pnpm/store-connection-manager@6.0.7
- @pnpm/plugin-commands-installation@13.0.2

## 3.0.7

### Patch Changes

- @pnpm/plugin-commands-installation@13.0.1

## 3.0.6

### Patch Changes

- c0760128d: bump semver to 7.4.0
- Updated dependencies [8e7a86dd9]
- Updated dependencies [6706a7d17]
- Updated dependencies [32f8e08c6]
- Updated dependencies [6850bb135]
- Updated dependencies [71a3ee77b]
- Updated dependencies [8e7a86dd9]
- Updated dependencies [c0760128d]
  - @pnpm/plugin-commands-installation@13.0.0
  - @pnpm/config@18.3.0
  - @pnpm/lockfile-file@8.0.2
  - @pnpm/cli-utils@2.0.6
  - @pnpm/store-connection-manager@6.0.6
  - @pnpm/lockfile-utils@7.0.1

## 3.0.5

### Patch Changes

- Updated dependencies [72ba638e3]
- Updated dependencies [e440d784f]
- Updated dependencies [fc8780ca9]
  - @pnpm/lockfile-utils@7.0.0
  - @pnpm/plugin-commands-installation@12.1.2
  - @pnpm/config@18.2.0
  - @pnpm/cli-utils@2.0.5
  - @pnpm/store-connection-manager@6.0.5

## 3.0.4

### Patch Changes

- Updated dependencies [5087636b6]
- Updated dependencies [94f94eed6]
  - @pnpm/lockfile-file@8.0.1
  - @pnpm/plugin-commands-installation@12.1.1
  - @pnpm/lockfile-utils@6.0.1
  - @pnpm/cli-utils@2.0.4
  - @pnpm/config@18.1.1
  - @pnpm/store-connection-manager@6.0.4

## 3.0.3

### Patch Changes

- Updated dependencies [e2cb4b63d]
- Updated dependencies [cd6ce11f0]
  - @pnpm/plugin-commands-installation@12.1.0
  - @pnpm/config@18.1.0
  - @pnpm/cli-utils@2.0.3
  - @pnpm/store-connection-manager@6.0.3

## 3.0.2

### Patch Changes

- @pnpm/plugin-commands-installation@12.0.2
- @pnpm/config@18.0.2
- @pnpm/cli-utils@2.0.2
- @pnpm/store-connection-manager@6.0.2

## 3.0.1

### Patch Changes

- Updated dependencies [51445f955]
  - @pnpm/plugin-commands-installation@12.0.1
  - @pnpm/config@18.0.1
  - @pnpm/cli-utils@2.0.1
  - @pnpm/store-connection-manager@6.0.1

## 3.0.0

### Major Changes

- eceaa8b8b: Node.js 14 support dropped.

### Patch Changes

- Updated dependencies [47e45d717]
- Updated dependencies [cae85dbb1]
- Updated dependencies [c92936158]
- Updated dependencies [47e45d717]
- Updated dependencies [22ccf155e]
- Updated dependencies [7a0ce1df0]
- Updated dependencies [158d8cf22]
- Updated dependencies [eceaa8b8b]
- Updated dependencies [8e35c21d1]
- Updated dependencies [47e45d717]
- Updated dependencies [47e45d717]
- Updated dependencies [113f0ae26]
- Updated dependencies [417c8ac59]
  - @pnpm/config@18.0.0
  - @pnpm/plugin-commands-installation@12.0.0
  - @pnpm/lockfile-utils@6.0.0
  - @pnpm/store-connection-manager@6.0.0
  - @pnpm/lockfile-file@8.0.0
  - @pnpm/read-project-manifest@5.0.0
  - @pnpm/pick-registry-for-package@5.0.0
  - @pnpm/parse-wanted-dependency@5.0.0
  - @pnpm/read-package-json@8.0.0
  - @pnpm/modules-yaml@12.0.0
  - @pnpm/patching.apply-patch@2.0.0
  - @pnpm/constants@7.0.0
  - @pnpm/error@5.0.0
  - @pnpm/cli-utils@2.0.0

## 2.2.0

### Minor Changes

- 40845b9ad: Allow to set a custom directory for storing patch files via the `patches-dir` setting [#6215](https://github.com/pnpm/pnpm/pull/6215)

### Patch Changes

- @pnpm/plugin-commands-installation@11.5.7
- @pnpm/config@17.0.2
- @pnpm/cli-utils@1.1.7
- @pnpm/store-connection-manager@5.2.20

## 2.1.15

### Patch Changes

- Updated dependencies [b38d711f3]
  - @pnpm/config@17.0.1
  - @pnpm/cli-utils@1.1.6
  - @pnpm/plugin-commands-installation@11.5.6
  - @pnpm/store-connection-manager@5.2.19

## 2.1.14

### Patch Changes

- 185ab01ad: When patch package does not specify a version, use locally installed version by default [#6192](https://github.com/pnpm/pnpm/issues/6192).
- Updated dependencies [787c43dcc]
- Updated dependencies [e505b58e3]
  - @pnpm/lockfile-file@7.0.6
  - @pnpm/config@17.0.0
  - @pnpm/plugin-commands-installation@11.5.5
  - @pnpm/read-project-manifest@4.1.4
  - @pnpm/cli-utils@1.1.5
  - @pnpm/store-connection-manager@5.2.18

## 2.1.13

### Patch Changes

- @pnpm/plugin-commands-installation@11.5.4
- @pnpm/config@16.7.2
- @pnpm/cli-utils@1.1.4
- @pnpm/store-connection-manager@5.2.17

## 2.1.12

### Patch Changes

- Updated dependencies [690bead26]
  - @pnpm/plugin-commands-installation@11.5.3
  - @pnpm/config@16.7.1
  - @pnpm/cli-utils@1.1.3
  - @pnpm/store-connection-manager@5.2.16

## 2.1.11

### Patch Changes

- Updated dependencies [7d64d757b]
- Updated dependencies [5c31fa8be]
  - @pnpm/cli-utils@1.1.2
  - @pnpm/config@16.7.0
  - @pnpm/plugin-commands-installation@11.5.2
  - @pnpm/store-connection-manager@5.2.15

## 2.1.10

### Patch Changes

- 6f56cc16e: `patch-commit` should auto apply patches in workspaces [#6048](https://github.com/pnpm/pnpm/issues/6048)
  - @pnpm/plugin-commands-installation@11.5.1
  - @pnpm/config@16.6.4
  - @pnpm/cli-utils@1.1.1
  - @pnpm/store-connection-manager@5.2.14

## 2.1.9

### Patch Changes

- Updated dependencies [0377d9367]
  - @pnpm/plugin-commands-installation@11.5.0
  - @pnpm/cli-utils@1.1.0
  - @pnpm/config@16.6.3
  - @pnpm/store-connection-manager@5.2.13

## 2.1.8

### Patch Changes

- @pnpm/plugin-commands-installation@11.4.6
- @pnpm/store-connection-manager@5.2.12
- @pnpm/config@16.6.2
- @pnpm/cli-utils@1.0.34

## 2.1.7

### Patch Changes

- @pnpm/plugin-commands-installation@11.4.5
- @pnpm/config@16.6.1
- @pnpm/store-connection-manager@5.2.11
- @pnpm/cli-utils@1.0.33

## 2.1.6

### Patch Changes

- Updated dependencies [308eb2c9b]
- Updated dependencies [59ee53678]
  - @pnpm/plugin-commands-installation@11.4.4
  - @pnpm/config@16.6.0
  - @pnpm/cli-utils@1.0.32
  - @pnpm/store-connection-manager@5.2.10

## 2.1.5

### Patch Changes

- Updated dependencies [6348f5931]
  - @pnpm/plugin-commands-installation@11.4.3
  - @pnpm/config@16.5.5
  - @pnpm/store-connection-manager@5.2.9
  - @pnpm/cli-utils@1.0.31

## 2.1.4

### Patch Changes

- @pnpm/plugin-commands-installation@11.4.2
- @pnpm/store-connection-manager@5.2.8
- @pnpm/config@16.5.4
- @pnpm/cli-utils@1.0.30

## 2.1.3

### Patch Changes

- @pnpm/plugin-commands-installation@11.4.1
- @pnpm/config@16.5.3
- @pnpm/cli-utils@1.0.29
- @pnpm/store-connection-manager@5.2.7

## 2.1.2

### Patch Changes

- Updated dependencies [e8f6ab683]
  - @pnpm/plugin-commands-installation@11.4.0
  - @pnpm/config@16.5.2
  - @pnpm/cli-utils@1.0.28
  - @pnpm/store-connection-manager@5.2.6

## 2.1.1

### Patch Changes

- Updated dependencies [4655dd41e]
  - @pnpm/plugin-commands-installation@11.3.5
  - @pnpm/store-connection-manager@5.2.5
  - @pnpm/config@16.5.1
  - @pnpm/cli-utils@1.0.27

## 2.1.0

### Minor Changes

- 2ae1c449d: apply existing patch file when re-patch [#5632](https://github.com/pnpm/pnpm/issues/5632)

### Patch Changes

- Updated dependencies [2ae1c449d]
- Updated dependencies [2ae1c449d]
- Updated dependencies [28b47a156]
  - @pnpm/parse-wanted-dependency@4.1.0
  - @pnpm/patching.apply-patch@1.0.0
  - @pnpm/config@16.5.0
  - @pnpm/plugin-commands-installation@11.3.4
  - @pnpm/cli-utils@1.0.26
  - @pnpm/store-connection-manager@5.2.4

## 2.0.25

### Patch Changes

- @pnpm/plugin-commands-installation@11.3.3
- @pnpm/store-connection-manager@5.2.3
- @pnpm/config@16.4.3
- @pnpm/cli-utils@1.0.25

## 2.0.24

### Patch Changes

- @pnpm/plugin-commands-installation@11.3.2
- @pnpm/config@16.4.2
- @pnpm/cli-utils@1.0.24
- @pnpm/store-connection-manager@5.2.2

## 2.0.23

### Patch Changes

- @pnpm/plugin-commands-installation@11.3.1
- @pnpm/config@16.4.1
- @pnpm/store-connection-manager@5.2.1
- @pnpm/cli-utils@1.0.23

## 2.0.22

### Patch Changes

- Updated dependencies [c7b05cd9a]
- Updated dependencies [3ebce5db7]
  - @pnpm/store-connection-manager@5.2.0
  - @pnpm/plugin-commands-installation@11.3.0
  - @pnpm/config@16.4.0
  - @pnpm/error@4.0.1
  - @pnpm/cli-utils@1.0.22
  - @pnpm/read-package-json@7.0.5
  - @pnpm/read-project-manifest@4.1.3

## 2.0.21

### Patch Changes

- Updated dependencies [1fad508b0]
  - @pnpm/plugin-commands-installation@11.2.0
  - @pnpm/config@16.3.0
  - @pnpm/cli-utils@1.0.21
  - @pnpm/store-connection-manager@5.1.14

## 2.0.20

### Patch Changes

- Updated dependencies [ec97a3105]
- Updated dependencies [08ceaf3fc]
  - @pnpm/store-connection-manager@5.1.13
  - @pnpm/plugin-commands-installation@11.1.7
  - @pnpm/cli-utils@1.0.20
  - @pnpm/config@16.2.2

## 2.0.19

### Patch Changes

- Updated dependencies [d71dbf230]
  - @pnpm/config@16.2.1
  - @pnpm/plugin-commands-installation@11.1.6
  - @pnpm/cli-utils@1.0.19
  - @pnpm/store-connection-manager@5.1.12

## 2.0.18

### Patch Changes

- Updated dependencies [841f52e70]
  - @pnpm/config@16.2.0
  - @pnpm/plugin-commands-installation@11.1.5
  - @pnpm/store-connection-manager@5.1.11
  - @pnpm/cli-utils@1.0.18

## 2.0.17

### Patch Changes

- e8aafe393: `pnpm patch` should print instructions about how to commit the changes.
  - @pnpm/plugin-commands-installation@11.1.4
  - @pnpm/cli-utils@1.0.17
  - @pnpm/config@16.1.11
  - @pnpm/pick-registry-for-package@4.0.3
  - @pnpm/read-package-json@7.0.4
  - @pnpm/read-project-manifest@4.1.2
  - @pnpm/store-connection-manager@5.1.10

## 2.0.16

### Patch Changes

- @pnpm/plugin-commands-installation@11.1.3
- @pnpm/config@16.1.10
- @pnpm/cli-utils@1.0.16
- @pnpm/store-connection-manager@5.1.9

## 2.0.15

### Patch Changes

- Updated dependencies [49f6c917f]
  - @pnpm/plugin-commands-installation@11.1.2
  - @pnpm/config@16.1.9
  - @pnpm/cli-utils@1.0.15
  - @pnpm/store-connection-manager@5.1.8

## 2.0.14

### Patch Changes

- @pnpm/cli-utils@1.0.14
- @pnpm/plugin-commands-installation@11.1.1
- @pnpm/config@16.1.8
- @pnpm/store-connection-manager@5.1.7

## 2.0.13

### Patch Changes

- Updated dependencies [4097af6b5]
- Updated dependencies [a9d59d8bc]
  - @pnpm/plugin-commands-installation@11.1.0
  - @pnpm/config@16.1.7
  - @pnpm/parse-wanted-dependency@4.0.1
  - @pnpm/read-package-json@7.0.3
  - @pnpm/cli-utils@1.0.13
  - @pnpm/store-connection-manager@5.1.6
  - @pnpm/read-project-manifest@4.1.1

## 2.0.12

### Patch Changes

- @pnpm/plugin-commands-installation@11.0.12
- @pnpm/config@16.1.6
- @pnpm/cli-utils@1.0.12
- @pnpm/store-connection-manager@5.1.5

## 2.0.11

### Patch Changes

- @pnpm/plugin-commands-installation@11.0.11
- @pnpm/config@16.1.5
- @pnpm/cli-utils@1.0.11
- @pnpm/store-connection-manager@5.1.4

## 2.0.10

### Patch Changes

- Updated dependencies [fec9e3149]
- Updated dependencies [868f2fb16]
- Updated dependencies [0d12d38fd]
  - @pnpm/read-project-manifest@4.1.0
  - @pnpm/plugin-commands-installation@11.0.10
  - @pnpm/cli-utils@1.0.10
  - @pnpm/config@16.1.4
  - @pnpm/store-connection-manager@5.1.3

## 2.0.9

### Patch Changes

- Updated dependencies [969f8a002]
  - @pnpm/plugin-commands-installation@11.0.9
  - @pnpm/config@16.1.3
  - @pnpm/cli-utils@1.0.9
  - @pnpm/store-connection-manager@5.1.2

## 2.0.8

### Patch Changes

- @pnpm/plugin-commands-installation@11.0.8
- @pnpm/config@16.1.2
- @pnpm/cli-utils@1.0.8
- @pnpm/store-connection-manager@5.1.1

## 2.0.7

### Patch Changes

- Updated dependencies [eacff33e4]
  - @pnpm/store-connection-manager@5.1.0
  - @pnpm/plugin-commands-installation@11.0.7
  - @pnpm/config@16.1.1
  - @pnpm/cli-utils@1.0.7

## 2.0.6

### Patch Changes

- Updated dependencies [3dab7f83c]
- Updated dependencies [3dab7f83c]
  - @pnpm/config@16.1.0
  - @pnpm/plugin-commands-installation@11.0.6
  - @pnpm/cli-utils@1.0.6
  - @pnpm/store-connection-manager@5.0.6

## 2.0.5

### Patch Changes

- @pnpm/cli-utils@1.0.5
- @pnpm/plugin-commands-installation@11.0.5
- @pnpm/config@16.0.5
- @pnpm/pick-registry-for-package@4.0.2
- @pnpm/read-package-json@7.0.2
- @pnpm/read-project-manifest@4.0.2
- @pnpm/store-connection-manager@5.0.5

## 2.0.4

### Patch Changes

- Updated dependencies [0da2f0412]
  - @pnpm/plugin-commands-installation@11.0.4
  - @pnpm/config@16.0.4
  - @pnpm/cli-utils@1.0.4
  - @pnpm/store-connection-manager@5.0.4

## 2.0.3

### Patch Changes

- Updated dependencies [aacb83f73]
- Updated dependencies [a14ad09e6]
  - @pnpm/config@16.0.3
  - @pnpm/cli-utils@1.0.3
  - @pnpm/plugin-commands-installation@11.0.3
  - @pnpm/store-connection-manager@5.0.3

## 2.0.2

### Patch Changes

- Updated dependencies [bea0acdfc]
  - @pnpm/config@16.0.2
  - @pnpm/cli-utils@1.0.2
  - @pnpm/plugin-commands-installation@11.0.2
  - @pnpm/store-connection-manager@5.0.2

## 2.0.1

### Patch Changes

- Updated dependencies [e7fd8a84c]
  - @pnpm/config@16.0.1
  - @pnpm/cli-utils@1.0.1
  - @pnpm/plugin-commands-installation@11.0.1
  - @pnpm/store-connection-manager@5.0.1
  - @pnpm/pick-registry-for-package@4.0.1
  - @pnpm/read-package-json@7.0.1
  - @pnpm/read-project-manifest@4.0.1

## 2.0.0

### Major Changes

- f884689e0: Require `@pnpm/logger` v5.

### Patch Changes

- Updated dependencies [043d988fc]
- Updated dependencies [1d0fd82fd]
- Updated dependencies [645384bfd]
- Updated dependencies [645384bfd]
- Updated dependencies [f884689e0]
- Updated dependencies [3c117996e]
- Updated dependencies [e35988d1f]
  - @pnpm/config@16.0.0
  - @pnpm/error@4.0.0
  - @pnpm/plugin-commands-installation@11.0.0
  - @pnpm/cli-utils@1.0.0
  - @pnpm/parse-wanted-dependency@4.0.0
  - @pnpm/pick-registry-for-package@4.0.0
  - @pnpm/read-package-json@7.0.0
  - @pnpm/read-project-manifest@4.0.0
  - @pnpm/store-connection-manager@5.0.0

## 1.3.9

### Patch Changes

- Updated dependencies [96b507b73]
  - @pnpm/plugin-commands-installation@10.8.4
  - @pnpm/store-connection-manager@4.3.16
  - @pnpm/read-project-manifest@3.0.13
  - @pnpm/config@15.10.12
  - @pnpm/cli-utils@0.7.43

## 1.3.8

### Patch Changes

- Updated dependencies [3277188eb]
  - @pnpm/plugin-commands-installation@10.8.3
  - @pnpm/cli-utils@0.7.42
  - @pnpm/config@15.10.11
  - @pnpm/store-connection-manager@4.3.15

## 1.3.7

### Patch Changes

- 911d29584: `pnpm patch-commit` should work when the patch directory is specified with a trailing slash [#5449](https://github.com/pnpm/pnpm/issues/5449).
- Updated dependencies [e8a631bf0]
  - @pnpm/error@3.1.0
  - @pnpm/cli-utils@0.7.41
  - @pnpm/config@15.10.10
  - @pnpm/plugin-commands-installation@10.8.2
  - @pnpm/read-package-json@6.0.11
  - @pnpm/read-project-manifest@3.0.12
  - @pnpm/store-connection-manager@4.3.14

## 1.3.6

### Patch Changes

- Updated dependencies [536b16856]
  - @pnpm/plugin-commands-installation@10.8.1

## 1.3.5

### Patch Changes

- Updated dependencies [abb41a626]
- Updated dependencies [51566e34b]
- Updated dependencies [5beb4e26b]
- Updated dependencies [d665f3ff7]
  - @pnpm/plugin-commands-installation@10.8.0
  - @pnpm/config@15.10.9
  - @pnpm/cli-utils@0.7.40
  - @pnpm/pick-registry-for-package@3.0.8
  - @pnpm/read-package-json@6.0.10
  - @pnpm/read-project-manifest@3.0.11
  - @pnpm/store-connection-manager@4.3.13

## 1.3.4

### Patch Changes

- Updated dependencies [56aeba4ba]
- Updated dependencies [56aeba4ba]
  - @pnpm/plugin-commands-installation@10.7.2
  - @pnpm/config@15.10.8
  - @pnpm/cli-utils@0.7.39
  - @pnpm/store-connection-manager@4.3.12

## 1.3.3

### Patch Changes

- @pnpm/plugin-commands-installation@10.7.1
- @pnpm/config@15.10.7
- @pnpm/cli-utils@0.7.38
- @pnpm/store-connection-manager@4.3.11

## 1.3.2

### Patch Changes

- b93a21bed: `pnpm patch` should work on files that don't have an end of line [#5320](https://github.com/pnpm/pnpm/issues/5320).
- 3f0137077: Fix `pnpm patch` using a custom `--edit-dir`.
- Updated dependencies [156cc1ef6]
  - @pnpm/plugin-commands-installation@10.7.0
  - @pnpm/cli-utils@0.7.37
  - @pnpm/config@15.10.6
  - @pnpm/pick-registry-for-package@3.0.7
  - @pnpm/read-package-json@6.0.9
  - @pnpm/read-project-manifest@3.0.10
  - @pnpm/store-connection-manager@4.3.10

## 1.3.1

### Patch Changes

- @pnpm/store-connection-manager@4.3.9
- @pnpm/plugin-commands-installation@10.6.5
- @pnpm/config@15.10.5
- @pnpm/cli-utils@0.7.36

## 1.3.0

### Minor Changes

- b6f788cff: `pnpm patch`: edit the patched package in a directory specified by the `--edit-dir` option. E.g., `pnpm patch express@3.1.0 --edit-dir=/home/xxx/src/patched-express`

### Patch Changes

- @pnpm/plugin-commands-installation@10.6.4
- @pnpm/cli-utils@0.7.35
- @pnpm/config@15.10.4
- @pnpm/store-connection-manager@4.3.8

## 1.2.3

### Patch Changes

- @pnpm/plugin-commands-installation@10.6.3
- @pnpm/store-connection-manager@4.3.7
- @pnpm/config@15.10.3
- @pnpm/cli-utils@0.7.34

## 1.2.2

### Patch Changes

- @pnpm/plugin-commands-installation@10.6.2
- @pnpm/store-connection-manager@4.3.6
- @pnpm/config@15.10.2
- @pnpm/cli-utils@0.7.33

## 1.2.1

### Patch Changes

- Updated dependencies [17e69e18b]
  - @pnpm/store-connection-manager@4.3.5
  - @pnpm/plugin-commands-installation@10.6.1
  - @pnpm/config@15.10.1
  - @pnpm/cli-utils@0.7.32

## 1.2.0

### Minor Changes

- 2aa22e4b1: Set `NODE_PATH` when `preferSymlinkedExecutables` is enabled.

### Patch Changes

- Updated dependencies [2aa22e4b1]
  - @pnpm/config@15.10.0
  - @pnpm/plugin-commands-installation@10.6.0
  - @pnpm/cli-utils@0.7.31
  - @pnpm/store-connection-manager@4.3.4

## 1.1.14

### Patch Changes

- @pnpm/plugin-commands-installation@10.5.8
- @pnpm/config@15.9.4
- @pnpm/cli-utils@0.7.30
- @pnpm/store-connection-manager@4.3.3

## 1.1.13

### Patch Changes

- @pnpm/plugin-commands-installation@10.5.7
- @pnpm/store-connection-manager@4.3.2
- @pnpm/config@15.9.3
- @pnpm/cli-utils@0.7.29

## 1.1.12

### Patch Changes

- Updated dependencies [07bc24ad1]
- Updated dependencies [9faf0221d]
  - @pnpm/read-package-json@6.0.8
  - @pnpm/plugin-commands-installation@10.5.6
  - @pnpm/store-connection-manager@4.3.1
  - @pnpm/config@15.9.2
  - @pnpm/cli-utils@0.7.28

## 1.1.11

### Patch Changes

- Updated dependencies [23984abd1]
  - @pnpm/store-connection-manager@4.3.0
  - @pnpm/plugin-commands-installation@10.5.5
  - @pnpm/config@15.9.1
  - @pnpm/cli-utils@0.7.27

## 1.1.10

### Patch Changes

- Updated dependencies [238a165a5]
  - @pnpm/parse-wanted-dependency@3.0.2
  - @pnpm/plugin-commands-installation@10.5.4
  - @pnpm/store-connection-manager@4.2.1
  - @pnpm/config@15.9.0

## 1.1.9

### Patch Changes

- 8103f92bd: Use a patched version of ramda to fix deprecation warnings on Node.js 16. Related issue: https://github.com/ramda/ramda/pull/3270
- Updated dependencies [39c040127]
- Updated dependencies [43cd6aaca]
- Updated dependencies [8103f92bd]
- Updated dependencies [65c4260de]
- Updated dependencies [29a81598a]
  - @pnpm/plugin-commands-installation@10.5.3
  - @pnpm/read-project-manifest@3.0.9
  - @pnpm/config@15.9.0
  - @pnpm/store-connection-manager@4.2.0
  - @pnpm/cli-utils@0.7.26

## 1.1.8

### Patch Changes

- Updated dependencies [34121d753]
  - @pnpm/config@15.8.1
  - @pnpm/cli-utils@0.7.25
  - @pnpm/pick-registry-for-package@3.0.6
  - @pnpm/plugin-commands-installation@10.5.2
  - @pnpm/read-package-json@6.0.7
  - @pnpm/read-project-manifest@3.0.8
  - @pnpm/store-connection-manager@4.1.26

## 1.1.7

### Patch Changes

- @pnpm/plugin-commands-installation@10.5.1

## 1.1.6

### Patch Changes

- Updated dependencies [cac34ad69]
- Updated dependencies [99019e071]
  - @pnpm/config@15.8.0
  - @pnpm/plugin-commands-installation@10.5.0
  - @pnpm/cli-utils@0.7.24
  - @pnpm/store-connection-manager@4.1.25

## 1.1.5

### Patch Changes

- @pnpm/plugin-commands-installation@10.4.2
- @pnpm/config@15.7.1
- @pnpm/cli-utils@0.7.23
- @pnpm/store-connection-manager@4.1.24

## 1.1.4

### Patch Changes

- Updated dependencies [01c5834bf]
- Updated dependencies [4fa1091c8]
  - @pnpm/read-project-manifest@3.0.7
  - @pnpm/config@15.7.0
  - @pnpm/cli-utils@0.7.22
  - @pnpm/plugin-commands-installation@10.4.1
  - @pnpm/store-connection-manager@4.1.23

## 1.1.3

### Patch Changes

- Updated dependencies [7334b347b]
- Updated dependencies [0569f1022]
  - @pnpm/config@15.6.1
  - @pnpm/plugin-commands-installation@10.4.0
  - @pnpm/cli-utils@0.7.21
  - @pnpm/store-connection-manager@4.1.22

## 1.1.2

### Patch Changes

- Updated dependencies [28f000509]
- Updated dependencies [406656f80]
  - @pnpm/config@15.6.0
  - @pnpm/plugin-commands-installation@10.3.10
  - @pnpm/cli-utils@0.7.20
  - @pnpm/store-connection-manager@4.1.21

## 1.1.1

### Patch Changes

- @pnpm/config@15.5.2
- @pnpm/plugin-commands-installation@10.3.9
- @pnpm/cli-utils@0.7.19
- @pnpm/store-connection-manager@4.1.20

## 1.1.0

### Minor Changes

- f0cd8b0f3: Avoid retaining a copy of the contents of files deleted during patching [#5003](https://github.com/pnpm/pnpm/issues/5003).

### Patch Changes

- @pnpm/plugin-commands-installation@10.3.8

## 1.0.7

### Patch Changes

- @pnpm/cli-utils@0.7.18
- @pnpm/plugin-commands-installation@10.3.7
- @pnpm/store-connection-manager@4.1.19

## 1.0.6

### Patch Changes

- Updated dependencies [b55b3782d]
  - @pnpm/plugin-commands-installation@10.3.6
  - @pnpm/store-connection-manager@4.1.18

## 1.0.5

### Patch Changes

- 5f643f23b: Update ramda to v0.28.
- Updated dependencies [5f643f23b]
- Updated dependencies [42c1ea1c0]
  - @pnpm/cli-utils@0.7.17
  - @pnpm/config@15.5.1
  - @pnpm/plugin-commands-installation@10.3.5
  - @pnpm/parse-wanted-dependency@3.0.1
  - @pnpm/store-connection-manager@4.1.17

## 1.0.4

### Patch Changes

- @pnpm/plugin-commands-installation@10.3.4
- @pnpm/store-connection-manager@4.1.16

## 1.0.3

### Patch Changes

- @pnpm/plugin-commands-installation@10.3.3
- @pnpm/store-connection-manager@4.1.15

## 1.0.2

### Patch Changes

- Updated dependencies [f48d46ef6]
  - @pnpm/config@15.5.0
  - @pnpm/cli-utils@0.7.16
  - @pnpm/plugin-commands-installation@10.3.2
  - @pnpm/store-connection-manager@4.1.14

## 1.0.1

### Patch Changes

- @pnpm/plugin-commands-installation@10.3.1
- @pnpm/cli-utils@0.7.15
- @pnpm/config@15.4.1
- @pnpm/pick-registry-for-package@3.0.5
- @pnpm/read-package-json@6.0.6
- @pnpm/read-project-manifest@3.0.6
- @pnpm/store-connection-manager@4.1.13

## 1.0.0

### Major Changes

- 47b5e45dd: Initial release.

### Patch Changes

- Updated dependencies [2a34b21ce]
- Updated dependencies [949e84ba8]
- Updated dependencies [47b5e45dd]
  - @pnpm/plugin-commands-installation@10.3.0
  - @pnpm/config@15.4.0
  - @pnpm/cli-utils@0.7.14
  - @pnpm/pick-registry-for-package@3.0.4
  - @pnpm/read-package-json@6.0.5
  - @pnpm/read-project-manifest@3.0.5
  - @pnpm/store-connection-manager@4.1.12
