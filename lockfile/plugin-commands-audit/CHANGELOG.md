# @pnpm/plugin-commands-audit

## 1002.1.7

### Patch Changes

- Updated dependencies [d1edf73]
- Updated dependencies [86b33e9]
  - @pnpm/constants@1001.3.0
  - @pnpm/read-project-manifest@1001.1.0
  - @pnpm/lockfile.fs@1001.1.17
  - @pnpm/config@1004.2.1
  - @pnpm/audit@1002.0.9
  - @pnpm/error@1000.0.4
  - @pnpm/cli-utils@1001.0.3
  - @pnpm/config.config-writer@1000.0.9
  - @pnpm/network.auth-header@1000.0.5

## 1002.1.6

### Patch Changes

- Updated dependencies [1a07b8f]
- Updated dependencies [1a07b8f]
- Updated dependencies [6f7ac0f]
- Updated dependencies [1a07b8f]
- Updated dependencies [1a07b8f]
  - @pnpm/types@1000.7.0
  - @pnpm/read-project-manifest@1001.0.0
  - @pnpm/config@1004.2.0
  - @pnpm/constants@1001.2.0
  - @pnpm/cli-utils@1001.0.2
  - @pnpm/config.config-writer@1000.0.8
  - @pnpm/audit@1002.0.8
  - @pnpm/lockfile.fs@1001.1.16
  - @pnpm/error@1000.0.3
  - @pnpm/network.auth-header@1000.0.4

## 1002.1.5

### Patch Changes

- Updated dependencies [7ad0bc3]
  - @pnpm/cli-utils@1001.0.1

## 1002.1.4

### Patch Changes

- Updated dependencies [623da6f]
- Updated dependencies [cf630a8]
- Updated dependencies [e225310]
  - @pnpm/config@1004.1.0
  - @pnpm/cli-utils@1001.0.0
  - @pnpm/config.config-writer@1000.0.7
  - @pnpm/lockfile.fs@1001.1.15
  - @pnpm/audit@1002.0.7

## 1002.1.3

### Patch Changes

- @pnpm/lockfile.fs@1001.1.14
- @pnpm/audit@1002.0.6
- @pnpm/cli-utils@1000.1.7

## 1002.1.2

### Patch Changes

- Updated dependencies [b217bbb]
- Updated dependencies [b0ead51]
- Updated dependencies [c8341cc]
- Updated dependencies [b0ead51]
- Updated dependencies [046af72]
  - @pnpm/config@1004.0.0
  - @pnpm/cli-utils@1000.1.6
  - @pnpm/config.config-writer@1000.0.6
  - @pnpm/audit@1002.0.5
  - @pnpm/lockfile.fs@1001.1.13

## 1002.1.1

### Patch Changes

- Updated dependencies [8d175c0]
  - @pnpm/config@1003.1.1
  - @pnpm/cli-utils@1000.1.5

## 1002.1.0

### Minor Changes

- 5ec7255: Added two new flags to the `pnpm audit` command, `--ignore` and `--ignore-unfixable` [#8474](https://github.com/pnpm/pnpm/pull/8474).

  Ignore all vulnerabilities that have no solution:

  ```shell
  > pnpm audit --ignore-unfixable
  ```

  Provide a list of CVE's to ignore those specifically, even if they have a resolution.

  ```shell
  > pnpm audit --ignore=CVE-2021-1234 --ignore=CVE-2021-5678
  ```

### Patch Changes

- Updated dependencies [b282bd1]
- Updated dependencies [51bd373]
- Updated dependencies [fdb1d98]
- Updated dependencies [e4af08c]
- Updated dependencies [09cf46f]
- Updated dependencies [36d1448]
- Updated dependencies [9362b5f]
- Updated dependencies [5ec7255]
- Updated dependencies [6cf010c]
  - @pnpm/config@1003.1.0
  - @pnpm/network.auth-header@1000.0.3
  - @pnpm/audit@1002.0.4
  - @pnpm/cli-utils@1000.1.4
  - @pnpm/lockfile.fs@1001.1.12
  - @pnpm/types@1000.6.0
  - @pnpm/config.config-writer@1000.0.5
  - @pnpm/read-project-manifest@1000.0.11

## 1002.0.5

### Patch Changes

- @pnpm/config.config-writer@1000.0.4
- @pnpm/cli-utils@1000.1.3
- @pnpm/config@1003.0.1

## 1002.0.4

### Patch Changes

- Updated dependencies [56bb69b]
- Updated dependencies [8a9f3a4]
- Updated dependencies [9c3dd03]
- Updated dependencies [5b73df1]
  - @pnpm/config@1003.0.0
  - @pnpm/types@1000.5.0
  - @pnpm/cli-utils@1000.1.2
  - @pnpm/config.config-writer@1000.0.3
  - @pnpm/audit@1002.0.3
  - @pnpm/lockfile.fs@1001.1.11
  - @pnpm/read-project-manifest@1000.0.10

## 1002.0.3

### Patch Changes

- Updated dependencies [17b7e9f]
  - @pnpm/config.config-writer@1000.0.2
  - @pnpm/cli-utils@1000.1.1
  - @pnpm/audit@1002.0.2
  - @pnpm/lockfile.fs@1001.1.10
  - @pnpm/config@1002.7.2

## 1002.0.2

### Patch Changes

- 01f2bcf: `pnpm audit --fix` should update the overrides in `pnpm-workspace.yaml`.
- Updated dependencies [750ae7d]
- Updated dependencies [5679712]
- Updated dependencies [01f2bcf]
- Updated dependencies [1413c25]
  - @pnpm/types@1000.4.0
  - @pnpm/config@1002.7.1
  - @pnpm/cli-utils@1000.1.0
  - @pnpm/config.config-writer@1000.0.1
  - @pnpm/audit@1002.0.1
  - @pnpm/lockfile.fs@1001.1.9
  - @pnpm/read-project-manifest@1000.0.9

## 1002.0.1

### Patch Changes

- Updated dependencies [e57f1df]
  - @pnpm/config@1002.7.0
  - @pnpm/cli-utils@1000.0.19

## 1002.0.0

### Major Changes

- 7f9f202: Remove dependency paths from audit output to prevent out-of-memory errors [#9280](https://github.com/pnpm/pnpm/issues/9280).

### Patch Changes

- Updated dependencies [9bcca9f]
- Updated dependencies [5b35dff]
- Updated dependencies [9bcca9f]
- Updated dependencies [5f7be64]
- Updated dependencies [5f7be64]
- Updated dependencies [7f9f202]
  - @pnpm/config@1002.6.0
  - @pnpm/types@1000.3.0
  - @pnpm/audit@1002.0.0
  - @pnpm/cli-utils@1000.0.18
  - @pnpm/lockfile.fs@1001.1.8
  - @pnpm/read-project-manifest@1000.0.8

## 1001.0.17

### Patch Changes

- Updated dependencies [936430a]
  - @pnpm/config@1002.5.4
  - @pnpm/cli-utils@1000.0.17
  - @pnpm/audit@1001.0.11
  - @pnpm/lockfile.fs@1001.1.7

## 1001.0.16

### Patch Changes

- Updated dependencies [6e4459c]
  - @pnpm/config@1002.5.3
  - @pnpm/cli-utils@1000.0.16

## 1001.0.15

### Patch Changes

- @pnpm/cli-utils@1000.0.15
- @pnpm/audit@1001.0.10
- @pnpm/config@1002.5.2
- @pnpm/lockfile.fs@1001.1.6

## 1001.0.14

### Patch Changes

- Updated dependencies [c3aa4d8]
  - @pnpm/config@1002.5.1
  - @pnpm/cli-utils@1000.0.14

## 1001.0.13

### Patch Changes

- Updated dependencies [a5e4965]
- Updated dependencies [d965748]
  - @pnpm/types@1000.2.1
  - @pnpm/config@1002.5.0
  - @pnpm/cli-utils@1000.0.13
  - @pnpm/audit@1001.0.9
  - @pnpm/lockfile.fs@1001.1.5
  - @pnpm/read-project-manifest@1000.0.7

## 1001.0.12

### Patch Changes

- Updated dependencies [1c2eb8c]
  - @pnpm/config@1002.4.1
  - @pnpm/cli-utils@1000.0.12

## 1001.0.11

### Patch Changes

- Updated dependencies [8fcc221]
- Updated dependencies [e32b1a2]
- Updated dependencies [8fcc221]
  - @pnpm/config@1002.4.0
  - @pnpm/types@1000.2.0
  - @pnpm/cli-utils@1000.0.11
  - @pnpm/audit@1001.0.8
  - @pnpm/lockfile.fs@1001.1.4
  - @pnpm/read-project-manifest@1000.0.6

## 1001.0.10

### Patch Changes

- Updated dependencies [fee898f]
  - @pnpm/config@1002.3.1
  - @pnpm/cli-utils@1000.0.10
  - @pnpm/lockfile.fs@1001.1.3
  - @pnpm/audit@1001.0.7

## 1001.0.9

### Patch Changes

- @pnpm/cli-utils@1000.0.9

## 1001.0.8

### Patch Changes

- Updated dependencies [f6006f2]
  - @pnpm/config@1002.3.0
  - @pnpm/cli-utils@1000.0.8

## 1001.0.7

### Patch Changes

- Updated dependencies [1e229d7]
  - @pnpm/read-project-manifest@1000.0.5
  - @pnpm/cli-utils@1000.0.7
  - @pnpm/config@1002.2.1
  - @pnpm/audit@1001.0.6

## 1001.0.6

### Patch Changes

- acdf26d: Replace `strip-ansi` with the built-in `util.stripVTControlCharacters` [#9009](https://github.com/pnpm/pnpm/pull/9009).
- Updated dependencies [9a44e6c]
- Updated dependencies [b562deb]
- Updated dependencies [f3ffaed]
- Updated dependencies [c96eb2b]
  - @pnpm/constants@1001.1.0
  - @pnpm/types@1000.1.1
  - @pnpm/config@1002.2.0
  - @pnpm/audit@1001.0.5
  - @pnpm/lockfile.fs@1001.1.2
  - @pnpm/error@1000.0.2
  - @pnpm/cli-utils@1000.0.6
  - @pnpm/read-project-manifest@1000.0.4
  - @pnpm/network.auth-header@1000.0.2

## 1001.0.5

### Patch Changes

- Updated dependencies [e050221]
  - @pnpm/read-project-manifest@1000.0.3
  - @pnpm/cli-utils@1000.0.5
  - @pnpm/config@1002.1.2
  - @pnpm/audit@1001.0.4

## 1001.0.4

### Patch Changes

- Updated dependencies [9591a18]
- Updated dependencies [1f5169f]
  - @pnpm/types@1000.1.0
  - @pnpm/config@1002.1.1
  - @pnpm/cli-utils@1000.0.4
  - @pnpm/audit@1001.0.3
  - @pnpm/lockfile.fs@1001.1.1
  - @pnpm/read-project-manifest@1000.0.2

## 1001.0.3

### Patch Changes

- Updated dependencies [f90a94b]
- Updated dependencies [f891288]
  - @pnpm/config@1002.1.0
  - @pnpm/cli-utils@1000.0.3

## 1001.0.2

### Patch Changes

- Updated dependencies [878ea8c]
  - @pnpm/config@1002.0.0
  - @pnpm/cli-utils@1000.0.2
  - @pnpm/audit@1001.0.2

## 1001.0.1

### Patch Changes

- Updated dependencies [3f0e4f0]
  - @pnpm/lockfile.fs@1001.1.0
  - @pnpm/audit@1001.0.1

## 1001.0.0

### Major Changes

- a76da0c: Removed lockfile conversion from v6 to v9. If you need to convert lockfile v6 to v9, use pnpm CLI v9.

### Patch Changes

- Updated dependencies [ac5b9d8]
- Updated dependencies [d2e83b0]
- Updated dependencies [6483b64]
- Updated dependencies [a76da0c]
  - @pnpm/config@1001.0.0
  - @pnpm/constants@1001.0.0
  - @pnpm/audit@1001.0.0
  - @pnpm/lockfile.fs@1001.0.0
  - @pnpm/cli-utils@1000.0.1
  - @pnpm/error@1000.0.1
  - @pnpm/network.auth-header@1000.0.1
  - @pnpm/read-project-manifest@1000.0.1

## 10.3.3

### Patch Changes

- Updated dependencies [19d5b51]
- Updated dependencies [8108680]
- Updated dependencies [477e0c1]
- Updated dependencies [dfcf034]
- Updated dependencies [592e2ef]
- Updated dependencies [19d5b51]
- Updated dependencies [1dbc56a]
- Updated dependencies [e9985b6]
- Updated dependencies [c4f5231]
  - @pnpm/constants@10.0.0
  - @pnpm/config@22.0.0
  - @pnpm/audit@8.2.3
  - @pnpm/lockfile.fs@1.0.6
  - @pnpm/error@6.0.3
  - @pnpm/cli-utils@4.0.8
  - @pnpm/network.auth-header@3.0.3
  - @pnpm/read-project-manifest@6.0.10

## 10.3.2

### Patch Changes

- @pnpm/audit@8.2.2
- @pnpm/cli-utils@4.0.7
- @pnpm/config@21.8.5
- @pnpm/lockfile.fs@1.0.5

## 10.3.1

### Patch Changes

- Updated dependencies [83681da]
  - @pnpm/constants@9.0.0
  - @pnpm/audit@8.2.1
  - @pnpm/config@21.8.4
  - @pnpm/lockfile.fs@1.0.4
  - @pnpm/error@6.0.2
  - @pnpm/cli-utils@4.0.6
  - @pnpm/network.auth-header@3.0.2
  - @pnpm/read-project-manifest@6.0.9

## 10.3.0

### Minor Changes

- d500d9f: Added a new setting to `package.json` at `pnpm.auditConfig.ignoreGhsas` for ignoring vulnerabilities by their GHSA code [#6838](https://github.com/pnpm/pnpm/issues/6838).

  For instance:

  ```json
  {
    "pnpm": {
      "auditConfig": {
        "ignoreGhsas": [
          "GHSA-42xw-2xvc-qx8m",
          "GHSA-4w2v-q235-vp99",
          "GHSA-cph5-m8f7-6c5x",
          "GHSA-vh95-rmgr-6w4m"
        ]
      }
    }
  }
  ```

### Patch Changes

- Updated dependencies [d500d9f]
  - @pnpm/audit@8.2.0
  - @pnpm/types@12.2.0
  - @pnpm/cli-utils@4.0.5
  - @pnpm/config@21.8.3
  - @pnpm/lockfile.fs@1.0.3
  - @pnpm/read-project-manifest@6.0.8

## 10.2.11

### Patch Changes

- Updated dependencies [7ee59a1]
  - @pnpm/types@12.1.0
  - @pnpm/cli-utils@4.0.4
  - @pnpm/config@21.8.2
  - @pnpm/audit@8.1.10
  - @pnpm/lockfile.fs@1.0.2
  - @pnpm/read-project-manifest@6.0.7

## 10.2.10

### Patch Changes

- @pnpm/cli-utils@4.0.3

## 10.2.9

### Patch Changes

- Updated dependencies [251ab21]
  - @pnpm/config@21.8.1
  - @pnpm/cli-utils@4.0.2

## 10.2.8

### Patch Changes

- @pnpm/cli-utils@4.0.1

## 10.2.7

### Patch Changes

- Updated dependencies [26b065c]
- Updated dependencies [26b065c]
  - @pnpm/cli-utils@4.0.0
  - @pnpm/config@21.8.0

## 10.2.6

### Patch Changes

- Updated dependencies [cb006df]
- Updated dependencies [98c8bd6]
- Updated dependencies [d20eed3]
  - @pnpm/types@12.0.0
  - @pnpm/cli-utils@3.1.7
  - @pnpm/config@21.7.0
  - @pnpm/audit@8.1.9
  - @pnpm/lockfile.fs@1.0.1
  - @pnpm/read-project-manifest@6.0.6

## 10.2.5

### Patch Changes

- Updated dependencies [8055a30]
  - @pnpm/lockfile.fs@1.0.0
  - @pnpm/audit@8.1.8
  - @pnpm/config@21.6.3
  - @pnpm/cli-utils@3.1.6

## 10.2.4

### Patch Changes

- Updated dependencies [0ef168b]
  - @pnpm/types@11.1.0
  - @pnpm/cli-utils@3.1.5
  - @pnpm/config@21.6.2
  - @pnpm/audit@8.1.7
  - @pnpm/lockfile-file@9.1.3
  - @pnpm/read-project-manifest@6.0.5

## 10.2.3

### Patch Changes

- Updated dependencies [afe520d]
  - @pnpm/config@21.6.1
  - @pnpm/cli-utils@3.1.4
  - @pnpm/audit@8.1.6

## 10.2.2

### Patch Changes

- Updated dependencies [1b03682]
- Updated dependencies [dd00eeb]
- Updated dependencies
  - @pnpm/config@21.6.0
  - @pnpm/types@11.0.0
  - @pnpm/cli-utils@3.1.3
  - @pnpm/audit@8.1.6
  - @pnpm/lockfile-file@9.1.2
  - @pnpm/read-project-manifest@6.0.4

## 10.2.1

### Patch Changes

- Updated dependencies [7c6c923]
- Updated dependencies [7d10394]
- Updated dependencies [d8eab39]
- Updated dependencies [13e55b2]
- Updated dependencies [04b8363]
  - @pnpm/config@21.5.0
  - @pnpm/types@10.1.1
  - @pnpm/cli-utils@3.1.2
  - @pnpm/audit@8.1.5
  - @pnpm/lockfile-file@9.1.1
  - @pnpm/read-project-manifest@6.0.3

## 10.2.0

### Minor Changes

- 47341e5: **Semi-breaking.** Dependency key names in the lockfile are shortened if they are longer than 1000 characters. We don't expect this change to affect many users. Affected users most probably can't run install successfully at the moment. This change is required to fix some edge cases in which installation fails with an out-of-memory error or "Invalid string length (RangeError: Invalid string length)" error. The max allowed length of the dependency key can be controlled with the `peers-suffix-max-length` setting [#8177](https://github.com/pnpm/pnpm/pull/8177).

### Patch Changes

- Updated dependencies [47341e5]
  - @pnpm/lockfile-file@9.1.0
  - @pnpm/config@21.4.0
  - @pnpm/audit@8.1.4
  - @pnpm/cli-utils@3.1.1

## 10.1.6

### Patch Changes

- Updated dependencies [b7ca13f]
- Updated dependencies [b7ca13f]
  - @pnpm/cli-utils@3.1.0
  - @pnpm/config@21.3.0

## 10.1.5

### Patch Changes

- @pnpm/config@21.2.3
- @pnpm/cli-utils@3.0.7
- @pnpm/audit@8.1.3

## 10.1.4

### Patch Changes

- Updated dependencies [45f4262]
  - @pnpm/types@10.1.0
  - @pnpm/cli-utils@3.0.6
  - @pnpm/config@21.2.2
  - @pnpm/audit@8.1.3
  - @pnpm/lockfile-file@9.0.6
  - @pnpm/read-project-manifest@6.0.2

## 10.1.3

### Patch Changes

- Updated dependencies [a7aef51]
  - @pnpm/error@6.0.1
  - @pnpm/cli-utils@3.0.5
  - @pnpm/config@21.2.1
  - @pnpm/audit@8.1.2
  - @pnpm/lockfile-file@9.0.5
  - @pnpm/network.auth-header@3.0.1
  - @pnpm/read-project-manifest@6.0.1

## 10.1.2

### Patch Changes

- @pnpm/cli-utils@3.0.4

## 10.1.1

### Patch Changes

- @pnpm/audit@8.1.1
- @pnpm/lockfile-file@9.0.4

## 10.1.0

### Minor Changes

- 9719a42: New setting called `virtual-store-dir-max-length` added to modify the maximum allowed length of the directories inside `node_modules/.pnpm`. The default length is set to 120 characters. This setting is particularly useful on Windows, where there is a limit to the maximum length of a file path [#7355](https://github.com/pnpm/pnpm/issues/7355).

### Patch Changes

- Updated dependencies [9719a42]
  - @pnpm/audit@8.1.0
  - @pnpm/config@21.2.0
  - @pnpm/lockfile-file@9.0.3
  - @pnpm/cli-utils@3.0.3

## 10.0.4

### Patch Changes

- Updated dependencies [c969f37]
  - @pnpm/lockfile-file@9.0.2
  - @pnpm/audit@8.0.2

## 10.0.3

### Patch Changes

- Updated dependencies [2cbf7b7]
- Updated dependencies [6b6ca69]
  - @pnpm/lockfile-file@9.0.1
  - @pnpm/audit@8.0.1

## 10.0.2

### Patch Changes

- Updated dependencies [a80b539]
  - @pnpm/cli-utils@3.0.2

## 10.0.1

### Patch Changes

- Updated dependencies [e0f47f4]
  - @pnpm/config@21.1.0
  - @pnpm/cli-utils@3.0.1

## 10.0.0

### Major Changes

- 43cdd87: Node.js v16 support dropped. Use at least Node.js v18.12.

### Patch Changes

- Updated dependencies [7733f3a]
- Updated dependencies [3ded840]
- Updated dependencies [c692f80]
- Updated dependencies [43cdd87]
- Updated dependencies [2d9e3b8]
- Updated dependencies [086b69c]
- Updated dependencies [d381a60]
- Updated dependencies [3477ee5]
- Updated dependencies [cfa33f1]
- Updated dependencies [e748162]
- Updated dependencies [f67ad31]
- Updated dependencies [2b89155]
- Updated dependencies [60839fc]
- Updated dependencies [730929e]
- Updated dependencies [98566d9]
  - @pnpm/types@10.0.0
  - @pnpm/config@21.0.0
  - @pnpm/error@6.0.0
  - @pnpm/constants@8.0.0
  - @pnpm/read-project-manifest@6.0.0
  - @pnpm/lockfile-file@9.0.0
  - @pnpm/network.auth-header@3.0.0
  - @pnpm/audit@8.0.0
  - @pnpm/cli-utils@3.0.0

## 9.0.11

### Patch Changes

- @pnpm/cli-utils@2.1.9
- @pnpm/config@20.4.2
- @pnpm/audit@7.0.25

## 9.0.10

### Patch Changes

- Updated dependencies [5a5e42551]
- Updated dependencies [d9564e354]
  - @pnpm/network.auth-header@2.2.0
  - @pnpm/config@20.4.1
  - @pnpm/cli-utils@2.1.8
  - @pnpm/audit@7.0.24

## 9.0.9

### Patch Changes

- Updated dependencies [c597f72ec]
  - @pnpm/config@20.4.0
  - @pnpm/cli-utils@2.1.7

## 9.0.8

### Patch Changes

- Updated dependencies [4e71066dd]
- Updated dependencies [4d34684f1]
  - @pnpm/config@20.3.0
  - @pnpm/types@9.4.2
  - @pnpm/audit@7.0.23
  - @pnpm/cli-utils@2.1.6
  - @pnpm/lockfile-file@8.1.6
  - @pnpm/read-project-manifest@5.0.10

## 9.0.7

### Patch Changes

- Updated dependencies
- Updated dependencies [672c559e4]
  - @pnpm/types@9.4.1
  - @pnpm/config@20.2.0
  - @pnpm/audit@7.0.22
  - @pnpm/lockfile-file@8.1.5
  - @pnpm/cli-utils@2.1.5
  - @pnpm/read-project-manifest@5.0.9

## 9.0.6

### Patch Changes

- @pnpm/audit@7.0.21

## 9.0.5

### Patch Changes

- Updated dependencies [3ac0487b3]
  - @pnpm/network.auth-header@2.1.0
  - @pnpm/cli-utils@2.1.4

## 9.0.4

### Patch Changes

- Updated dependencies [23039a6d6]
  - @pnpm/network.auth-header@2.0.6
  - @pnpm/cli-utils@2.1.3

## 9.0.3

### Patch Changes

- @pnpm/audit@7.0.20

## 9.0.2

### Patch Changes

- @pnpm/config@20.1.2
- @pnpm/cli-utils@2.1.2
- @pnpm/audit@7.0.19

## 9.0.1

### Patch Changes

- @pnpm/audit@7.0.19
- @pnpm/config@20.1.1
- @pnpm/cli-utils@2.1.1

## 9.0.0

### Major Changes

- d6592964f: `rootProjectManifestDir` is a required field.

### Patch Changes

- Updated dependencies [43ce9e4a6]
- Updated dependencies [d6592964f]
  - @pnpm/types@9.4.0
  - @pnpm/cli-utils@2.1.0
  - @pnpm/config@20.1.0
  - @pnpm/audit@7.0.18
  - @pnpm/lockfile-file@8.1.4
  - @pnpm/read-project-manifest@5.0.8

## 8.0.30

### Patch Changes

- Updated dependencies [ac5abd3ff]
- Updated dependencies [b60bb6cbe]
  - @pnpm/config@20.0.0
  - @pnpm/cli-utils@2.0.24
  - @pnpm/audit@7.0.17

## 8.0.29

### Patch Changes

- Updated dependencies [b1dd0ee58]
  - @pnpm/config@19.2.1
  - @pnpm/cli-utils@2.0.23

## 8.0.28

### Patch Changes

- Updated dependencies [d774a3196]
- Updated dependencies [d774a3196]
- Updated dependencies [832e28826]
  - @pnpm/config@19.2.0
  - @pnpm/types@9.3.0
  - @pnpm/cli-utils@2.0.22
  - @pnpm/audit@7.0.17
  - @pnpm/lockfile-file@8.1.3
  - @pnpm/read-project-manifest@5.0.7

## 8.0.27

### Patch Changes

- @pnpm/audit@7.0.16

## 8.0.26

### Patch Changes

- Updated dependencies [ee328fd25]
  - @pnpm/config@19.1.0
  - @pnpm/audit@7.0.15
  - @pnpm/cli-utils@2.0.21

## 8.0.25

### Patch Changes

- @pnpm/cli-utils@2.0.20

## 8.0.24

### Patch Changes

- @pnpm/read-project-manifest@5.0.6
- @pnpm/config@19.0.3
- @pnpm/cli-utils@2.0.19
- @pnpm/audit@7.0.14

## 8.0.23

### Patch Changes

- @pnpm/config@19.0.2
- @pnpm/cli-utils@2.0.18
- @pnpm/audit@7.0.13

## 8.0.22

### Patch Changes

- @pnpm/config@19.0.1
- @pnpm/cli-utils@2.0.17
- @pnpm/audit@7.0.13

## 8.0.21

### Patch Changes

- Updated dependencies [cb8bcc8df]
  - @pnpm/config@19.0.0
  - @pnpm/audit@7.0.13
  - @pnpm/cli-utils@2.0.16
  - @pnpm/read-project-manifest@5.0.5

## 8.0.20

### Patch Changes

- @pnpm/cli-utils@2.0.15

## 8.0.19

### Patch Changes

- Updated dependencies [aa20818a0]
  - @pnpm/network.auth-header@2.0.5

## 8.0.18

### Patch Changes

- @pnpm/cli-utils@2.0.14

## 8.0.17

### Patch Changes

- Updated dependencies [aa2ae8fe2]
  - @pnpm/types@9.2.0
  - @pnpm/cli-utils@2.0.13
  - @pnpm/config@18.4.4
  - @pnpm/audit@7.0.12
  - @pnpm/lockfile-file@8.1.2
  - @pnpm/read-project-manifest@5.0.4

## 8.0.16

### Patch Changes

- Updated dependencies [b4892acc5]
  - @pnpm/read-project-manifest@5.0.3
  - @pnpm/cli-utils@2.0.12
  - @pnpm/config@18.4.3
  - @pnpm/audit@7.0.11

## 8.0.15

### Patch Changes

- Updated dependencies [e44031e71]
  - @pnpm/network.auth-header@2.0.4

## 8.0.14

### Patch Changes

- Updated dependencies [4e7afec90]
  - @pnpm/network.auth-header@2.0.3

## 8.0.13

### Patch Changes

- Updated dependencies [e2d631217]
  - @pnpm/config@18.4.2
  - @pnpm/cli-utils@2.0.11
  - @pnpm/audit@7.0.10

## 8.0.12

### Patch Changes

- Updated dependencies [302ebffc5]
  - @pnpm/constants@7.1.1
  - @pnpm/audit@7.0.10
  - @pnpm/config@18.4.1
  - @pnpm/lockfile-file@8.1.1
  - @pnpm/error@5.0.2
  - @pnpm/cli-utils@2.0.10
  - @pnpm/network.auth-header@2.0.2
  - @pnpm/read-project-manifest@5.0.2

## 8.0.11

### Patch Changes

- Updated dependencies [4b97f1f07]
  - @pnpm/audit@7.0.9
  - @pnpm/config@18.4.0

## 8.0.10

### Patch Changes

- Updated dependencies [9c4ae87bd]
- Updated dependencies [a9e0b7cbf]
- Updated dependencies [9c4ae87bd]
- Updated dependencies [9c4ae87bd]
- Updated dependencies [301b8e2da]
  - @pnpm/lockfile-file@8.1.0
  - @pnpm/types@9.1.0
  - @pnpm/constants@7.1.0
  - @pnpm/config@18.4.0
  - @pnpm/audit@7.0.8
  - @pnpm/cli-utils@2.0.9
  - @pnpm/read-project-manifest@5.0.1
  - @pnpm/error@5.0.1
  - @pnpm/network.auth-header@2.0.1

## 8.0.9

### Patch Changes

- Updated dependencies [ee429b300]
- Updated dependencies [1de07a4af]
  - @pnpm/cli-utils@2.0.8
  - @pnpm/config@18.3.2
  - @pnpm/audit@7.0.7

## 8.0.8

### Patch Changes

- Updated dependencies [2809e89ab]
  - @pnpm/config@18.3.1
  - @pnpm/cli-utils@2.0.7
  - @pnpm/audit@7.0.6

## 8.0.7

### Patch Changes

- @pnpm/audit@7.0.5

## 8.0.6

### Patch Changes

- Updated dependencies [32f8e08c6]
- Updated dependencies [c0760128d]
  - @pnpm/config@18.3.0
  - @pnpm/lockfile-file@8.0.2
  - @pnpm/cli-utils@2.0.6
  - @pnpm/audit@7.0.4

## 8.0.5

### Patch Changes

- Updated dependencies [fc8780ca9]
  - @pnpm/config@18.2.0
  - @pnpm/audit@7.0.3
  - @pnpm/cli-utils@2.0.5

## 8.0.4

### Patch Changes

- Updated dependencies [5087636b6]
- Updated dependencies [94f94eed6]
  - @pnpm/lockfile-file@8.0.1
  - @pnpm/audit@7.0.2
  - @pnpm/cli-utils@2.0.4
  - @pnpm/config@18.1.1

## 8.0.3

### Patch Changes

- Updated dependencies [e2cb4b63d]
- Updated dependencies [cd6ce11f0]
  - @pnpm/config@18.1.0
  - @pnpm/cli-utils@2.0.3

## 8.0.2

### Patch Changes

- Updated dependencies [7a16da9f4]
  - @pnpm/audit@7.0.1
  - @pnpm/config@18.0.2
  - @pnpm/cli-utils@2.0.2

## 8.0.1

### Patch Changes

- @pnpm/config@18.0.1
- @pnpm/cli-utils@2.0.1

## 8.0.0

### Major Changes

- eceaa8b8b: Node.js 14 support dropped.

### Patch Changes

- 22ccf155e: Fix `Segmentation fault` error in the bundled version of pnpm [#6241](https://github.com/pnpm/pnpm/issues/6241).
- fd6b5a2c8: Only three paths are displayed in `pnpm audit` output [#6203](https://github.com/pnpm/pnpm/issues/6203)
- Updated dependencies [47e45d717]
- Updated dependencies [47e45d717]
- Updated dependencies [158d8cf22]
- Updated dependencies [eceaa8b8b]
- Updated dependencies [8e35c21d1]
- Updated dependencies [47e45d717]
- Updated dependencies [47e45d717]
- Updated dependencies [113f0ae26]
- Updated dependencies [417c8ac59]
  - @pnpm/config@18.0.0
  - @pnpm/lockfile-file@8.0.0
  - @pnpm/read-project-manifest@5.0.0
  - @pnpm/network.auth-header@2.0.0
  - @pnpm/constants@7.0.0
  - @pnpm/audit@7.0.0
  - @pnpm/error@5.0.0
  - @pnpm/types@9.0.0
  - @pnpm/cli-utils@2.0.0

## 7.2.15

### Patch Changes

- @pnpm/config@17.0.2
- @pnpm/cli-utils@1.1.7

## 7.2.14

### Patch Changes

- Updated dependencies [b38d711f3]
  - @pnpm/config@17.0.1
  - @pnpm/cli-utils@1.1.6

## 7.2.13

### Patch Changes

- Updated dependencies [185ab01ad]
- Updated dependencies [787c43dcc]
- Updated dependencies [e505b58e3]
  - @pnpm/audit@6.1.8
  - @pnpm/lockfile-file@7.0.6
  - @pnpm/config@17.0.0
  - @pnpm/read-project-manifest@4.1.4
  - @pnpm/cli-utils@1.1.5

## 7.2.12

### Patch Changes

- @pnpm/config@16.7.2
- @pnpm/cli-utils@1.1.4

## 7.2.11

### Patch Changes

- @pnpm/config@16.7.1
- @pnpm/cli-utils@1.1.3

## 7.2.10

### Patch Changes

- Updated dependencies [7d64d757b]
- Updated dependencies [5c31fa8be]
  - @pnpm/cli-utils@1.1.2
  - @pnpm/config@16.7.0

## 7.2.9

### Patch Changes

- Updated dependencies [ed946c73e]
  - @pnpm/lockfile-file@7.0.5
  - @pnpm/audit@6.1.7
  - @pnpm/config@16.6.4
  - @pnpm/cli-utils@1.1.1

## 7.2.8

### Patch Changes

- Updated dependencies [0377d9367]
  - @pnpm/cli-utils@1.1.0
  - @pnpm/audit@6.1.6
  - @pnpm/config@16.6.3

## 7.2.7

### Patch Changes

- @pnpm/audit@6.1.5
- @pnpm/config@16.6.2
- @pnpm/cli-utils@1.0.34

## 7.2.6

### Patch Changes

- @pnpm/config@16.6.1
- @pnpm/audit@6.1.4
- @pnpm/cli-utils@1.0.33

## 7.2.5

### Patch Changes

- 93d34632f: Fix AUDIT_TABLE_OPTIONS not to overwrite TABLE_OPTIONS, which prevents breaking other table outputs such like `pnpm outdated` [#6017](https://github.com/pnpm/pnpm/issues/6017).
- Updated dependencies [59ee53678]
  - @pnpm/config@16.6.0
  - @pnpm/lockfile-file@7.0.4
  - @pnpm/cli-utils@1.0.32
  - @pnpm/audit@6.1.3

## 7.2.4

### Patch Changes

- @pnpm/lockfile-file@7.0.3
- @pnpm/audit@6.1.2
- @pnpm/config@16.5.5
- @pnpm/cli-utils@1.0.31

## 7.2.3

### Patch Changes

- 2ff11e77a: Wrap text in `pnpm audit` output for better readability [#5981](https://github.com/pnpm/pnpm/issues/5981)
- Updated dependencies [2ff11e77a]
  - @pnpm/audit@6.1.1
  - @pnpm/config@16.5.4
  - @pnpm/cli-utils@1.0.30

## 7.2.2

### Patch Changes

- @pnpm/config@16.5.3
- @pnpm/cli-utils@1.0.29

## 7.2.1

### Patch Changes

- @pnpm/config@16.5.2
- @pnpm/cli-utils@1.0.28

## 7.2.0

### Minor Changes

- 94ef3299e: Show dependency paths info in `pnpm audit` output [#3073](https://github.com/pnpm/pnpm/issues/3073)

### Patch Changes

- Updated dependencies [94ef3299e]
  - @pnpm/audit@6.1.0
  - @pnpm/config@16.5.1
  - @pnpm/cli-utils@1.0.27

## 7.1.21

### Patch Changes

- Updated dependencies [28b47a156]
  - @pnpm/config@16.5.0
  - @pnpm/cli-utils@1.0.26

## 7.1.20

### Patch Changes

- @pnpm/config@16.4.3
- @pnpm/cli-utils@1.0.25
- @pnpm/audit@6.0.6

## 7.1.19

### Patch Changes

- Updated dependencies [9a68ebbae]
  - @pnpm/lockfile-file@7.0.2
  - @pnpm/audit@6.0.6
  - @pnpm/config@16.4.2
  - @pnpm/cli-utils@1.0.24

## 7.1.18

### Patch Changes

- @pnpm/lockfile-file@7.0.1
- @pnpm/audit@6.0.6
- @pnpm/config@16.4.1
- @pnpm/cli-utils@1.0.23

## 7.1.17

### Patch Changes

- Updated dependencies [3ebce5db7]
- Updated dependencies [3ebce5db7]
- Updated dependencies [3ebce5db7]
  - @pnpm/constants@6.2.0
  - @pnpm/lockfile-file@7.0.0
  - @pnpm/config@16.4.0
  - @pnpm/audit@6.0.5
  - @pnpm/error@4.0.1
  - @pnpm/cli-utils@1.0.22
  - @pnpm/network.auth-header@1.0.1
  - @pnpm/read-project-manifest@4.1.3

## 7.1.16

### Patch Changes

- Updated dependencies [1fad508b0]
  - @pnpm/config@16.3.0
  - @pnpm/cli-utils@1.0.21

## 7.1.15

### Patch Changes

- @pnpm/cli-utils@1.0.20
- @pnpm/config@16.2.2

## 7.1.14

### Patch Changes

- Updated dependencies [d71dbf230]
  - @pnpm/config@16.2.1
  - @pnpm/cli-utils@1.0.19

## 7.1.13

### Patch Changes

- Updated dependencies [841f52e70]
  - @pnpm/config@16.2.0
  - @pnpm/cli-utils@1.0.18

## 7.1.12

### Patch Changes

- Updated dependencies [b77651d14]
  - @pnpm/types@8.10.0
  - @pnpm/cli-utils@1.0.17
  - @pnpm/config@16.1.11
  - @pnpm/audit@6.0.4
  - @pnpm/lockfile-file@6.0.5
  - @pnpm/read-project-manifest@4.1.2

## 7.1.11

### Patch Changes

- @pnpm/lockfile-file@6.0.4
- @pnpm/config@16.1.10
- @pnpm/audit@6.0.3
- @pnpm/cli-utils@1.0.16

## 7.1.10

### Patch Changes

- @pnpm/config@16.1.9
- @pnpm/cli-utils@1.0.15

## 7.1.9

### Patch Changes

- 494760388: Vulnerabilities that don't have CVEs codes should not be skipped by `pnpm audit` if an ignoreCves list is declared in `package.json`.
- c5aea50ae: `pnpm audit --json` should ignore vulnerabilities listed in `auditConfig.ignoreCves` [#5734](https://github.com/pnpm/pnpm/issues/5734).
  - @pnpm/cli-utils@1.0.14
  - @pnpm/config@16.1.8

## 7.1.8

### Patch Changes

- Updated dependencies [dd83e5974]
- Updated dependencies [a9d59d8bc]
  - @pnpm/audit@6.0.2
  - @pnpm/config@16.1.7
  - @pnpm/lockfile-file@6.0.3
  - @pnpm/cli-utils@1.0.13
  - @pnpm/read-project-manifest@4.1.1

## 7.1.7

### Patch Changes

- @pnpm/config@16.1.6
- @pnpm/cli-utils@1.0.12

## 7.1.6

### Patch Changes

- @pnpm/config@16.1.5
- @pnpm/cli-utils@1.0.11

## 7.1.5

### Patch Changes

- Updated dependencies [fec9e3149]
- Updated dependencies [0d12d38fd]
  - @pnpm/read-project-manifest@4.1.0
  - @pnpm/cli-utils@1.0.10
  - @pnpm/config@16.1.4
  - @pnpm/audit@6.0.1

## 7.1.4

### Patch Changes

- Updated dependencies [3801d2fa2]
  - @pnpm/audit@6.0.0
  - @pnpm/config@16.1.3
  - @pnpm/cli-utils@1.0.9

## 7.1.3

### Patch Changes

- @pnpm/config@16.1.2
- @pnpm/cli-utils@1.0.8

## 7.1.2

### Patch Changes

- @pnpm/audit@5.0.2
- @pnpm/config@16.1.1
- @pnpm/cli-utils@1.0.7

## 7.1.1

### Patch Changes

- Updated dependencies [3dab7f83c]
  - @pnpm/config@16.1.0
  - @pnpm/cli-utils@1.0.6

## 7.1.0

### Minor Changes

- 702e847c1: A new setting supported for ignoring vulnerabilities by their CVEs. The ignored CVEs may be listed in the `pnpm.auditConfig.ignoreCves` field of `package.json`. For instance:

  ```
  {
    "pnpm": {
      "auditConfig": {
        "ignoreCves": [
          "CVE-2019-10742",
          "CVE-2020-28168",
          "CVE-2021-3749",
          "CVE-2020-7598"
        ]
      }
    }
  }
  ```

### Patch Changes

- Updated dependencies [702e847c1]
  - @pnpm/types@8.9.0
  - @pnpm/cli-utils@1.0.5
  - @pnpm/audit@5.0.1
  - @pnpm/config@16.0.5
  - @pnpm/lockfile-file@6.0.2
  - @pnpm/read-project-manifest@4.0.2

## 7.0.4

### Patch Changes

- @pnpm/config@16.0.4
- @pnpm/cli-utils@1.0.4

## 7.0.3

### Patch Changes

- Updated dependencies [aacb83f73]
- Updated dependencies [a14ad09e6]
  - @pnpm/config@16.0.3
  - @pnpm/cli-utils@1.0.3

## 7.0.2

### Patch Changes

- Updated dependencies [804de211e]
- Updated dependencies [804de211e]
- Updated dependencies [bea0acdfc]
  - @pnpm/audit@5.0.0
  - @pnpm/network.auth-header@1.0.0
  - @pnpm/config@16.0.2
  - @pnpm/cli-utils@1.0.2

## 7.0.1

### Patch Changes

- Updated dependencies [e7fd8a84c]
- Updated dependencies [844e82f3a]
  - @pnpm/config@16.0.1
  - @pnpm/types@8.8.0
  - @pnpm/cli-utils@1.0.1
  - @pnpm/audit@4.0.1
  - @pnpm/lockfile-file@6.0.1
  - @pnpm/read-project-manifest@4.0.1

## 7.0.0

### Major Changes

- f884689e0: Require `@pnpm/logger` v5.

### Patch Changes

- Updated dependencies [043d988fc]
- Updated dependencies [1d0fd82fd]
- Updated dependencies [645384bfd]
- Updated dependencies [f884689e0]
- Updated dependencies [3c117996e]
  - @pnpm/audit@4.0.0
  - @pnpm/config@16.0.0
  - @pnpm/error@4.0.0
  - @pnpm/cli-utils@1.0.0
  - @pnpm/lockfile-file@6.0.0
  - @pnpm/read-project-manifest@4.0.0

## 6.1.25

### Patch Changes

- Updated dependencies [7c296fe9b]
  - @pnpm/lockfile-file@5.3.8
  - @pnpm/audit@3.1.11
  - @pnpm/read-project-manifest@3.0.13
  - @pnpm/config@15.10.12
  - @pnpm/cli-utils@0.7.43

## 6.1.24

### Patch Changes

- @pnpm/cli-utils@0.7.42
- @pnpm/audit@3.1.11
- @pnpm/config@15.10.11

## 6.1.23

### Patch Changes

- Updated dependencies [e8a631bf0]
  - @pnpm/error@3.1.0
  - @pnpm/audit@3.1.10
  - @pnpm/cli-utils@0.7.41
  - @pnpm/config@15.10.10
  - @pnpm/lockfile-file@5.3.7
  - @pnpm/read-project-manifest@3.0.12

## 6.1.22

### Patch Changes

- Updated dependencies [d665f3ff7]
  - @pnpm/types@8.7.0
  - @pnpm/config@15.10.9
  - @pnpm/cli-utils@0.7.40
  - @pnpm/audit@3.1.9
  - @pnpm/lockfile-file@5.3.6
  - @pnpm/read-project-manifest@3.0.11

## 6.1.21

### Patch Changes

- @pnpm/config@15.10.8
- @pnpm/cli-utils@0.7.39

## 6.1.20

### Patch Changes

- @pnpm/config@15.10.7
- @pnpm/cli-utils@0.7.38

## 6.1.19

### Patch Changes

- Updated dependencies [156cc1ef6]
  - @pnpm/types@8.6.0
  - @pnpm/audit@3.1.8
  - @pnpm/cli-utils@0.7.37
  - @pnpm/config@15.10.6
  - @pnpm/lockfile-file@5.3.5
  - @pnpm/read-project-manifest@3.0.10

## 6.1.18

### Patch Changes

- @pnpm/config@15.10.5
- @pnpm/cli-utils@0.7.36

## 6.1.17

### Patch Changes

- @pnpm/cli-utils@0.7.35
- @pnpm/config@15.10.4

## 6.1.16

### Patch Changes

- Updated dependencies [0373af22e]
  - @pnpm/lockfile-file@5.3.4
  - @pnpm/audit@3.1.7
  - @pnpm/config@15.10.3
  - @pnpm/cli-utils@0.7.34

## 6.1.15

### Patch Changes

- @pnpm/config@15.10.2
- @pnpm/cli-utils@0.7.33

## 6.1.14

### Patch Changes

- @pnpm/config@15.10.1
- @pnpm/cli-utils@0.7.32

## 6.1.13

### Patch Changes

- a12d1a011: - Add new Error type: AuditEndpointNotExistsError
  - On AuditUrl returns 404, AuditEndpointNotExistsError will throw
  - When audit handler catches AuditEndpointNotExistsError, the command will return to avoid execute further codes
- Updated dependencies [2aa22e4b1]
- Updated dependencies [a12d1a011]
  - @pnpm/config@15.10.0
  - @pnpm/audit@3.1.7
  - @pnpm/cli-utils@0.7.31

## 6.1.12

### Patch Changes

- @pnpm/config@15.9.4
- @pnpm/cli-utils@0.7.30

## 6.1.11

### Patch Changes

- @pnpm/config@15.9.3
- @pnpm/cli-utils@0.7.29

## 6.1.10

### Patch Changes

- @pnpm/config@15.9.2
- @pnpm/cli-utils@0.7.28

## 6.1.9

### Patch Changes

- @pnpm/config@15.9.1
- @pnpm/cli-utils@0.7.27
- @pnpm/audit@3.1.6

## 6.1.8

### Patch Changes

- Updated dependencies [1e5482da4]
  - @pnpm/lockfile-file@5.3.3
  - @pnpm/audit@3.1.5
  - @pnpm/config@15.9.0

## 6.1.7

### Patch Changes

- 8103f92bd: Use a patched version of ramda to fix deprecation warnings on Node.js 16. Related issue: https://github.com/ramda/ramda/pull/3270
- Updated dependencies [39c040127]
- Updated dependencies [43cd6aaca]
- Updated dependencies [8103f92bd]
- Updated dependencies [65c4260de]
- Updated dependencies [29a81598a]
  - @pnpm/read-project-manifest@3.0.9
  - @pnpm/config@15.9.0
  - @pnpm/lockfile-file@5.3.2
  - @pnpm/cli-utils@0.7.26
  - @pnpm/audit@3.1.5

## 6.1.6

### Patch Changes

- Updated dependencies [44544b493]
- Updated dependencies [c90798461]
- Updated dependencies [34121d753]
  - @pnpm/lockfile-file@5.3.1
  - @pnpm/types@8.5.0
  - @pnpm/config@15.8.1
  - @pnpm/audit@3.1.4
  - @pnpm/cli-utils@0.7.25
  - @pnpm/read-project-manifest@3.0.8

## 6.1.5

### Patch Changes

- @pnpm/audit@3.1.3

## 6.1.4

### Patch Changes

- Updated dependencies [cac34ad69]
- Updated dependencies [99019e071]
  - @pnpm/config@15.8.0
  - @pnpm/cli-utils@0.7.24

## 6.1.3

### Patch Changes

- Updated dependencies [8dcfbe357]
  - @pnpm/lockfile-file@5.3.0
  - @pnpm/audit@3.1.2
  - @pnpm/config@15.7.1
  - @pnpm/cli-utils@0.7.23

## 6.1.2

### Patch Changes

- Updated dependencies [01c5834bf]
- Updated dependencies [4fa1091c8]
  - @pnpm/read-project-manifest@3.0.7
  - @pnpm/config@15.7.0
  - @pnpm/lockfile-file@5.2.0
  - @pnpm/cli-utils@0.7.22
  - @pnpm/audit@3.1.1

## 6.1.1

### Patch Changes

- Updated dependencies [7334b347b]
  - @pnpm/config@15.6.1
  - @pnpm/cli-utils@0.7.21
  - @pnpm/audit@3.1.1

## 6.1.0

### Minor Changes

- af79b6184: Add authentication to audit command

### Patch Changes

- Updated dependencies [af79b6184]
- Updated dependencies [28f000509]
- Updated dependencies [406656f80]
  - @pnpm/audit@3.1.0
  - @pnpm/config@15.6.0
  - @pnpm/cli-utils@0.7.20

## 6.0.21

### Patch Changes

- @pnpm/config@15.5.2
- @pnpm/cli-utils@0.7.19

## 6.0.20

### Patch Changes

- @pnpm/cli-utils@0.7.18
- @pnpm/audit@3.0.10

## 6.0.19

### Patch Changes

- Updated dependencies [ab684d77e]
  - @pnpm/lockfile-file@5.1.4
  - @pnpm/audit@3.0.9

## 6.0.18

### Patch Changes

- 5f643f23b: Update ramda to v0.28.
- Updated dependencies [5f643f23b]
  - @pnpm/cli-utils@0.7.17
  - @pnpm/config@15.5.1
  - @pnpm/lockfile-file@5.1.3
  - @pnpm/audit@3.0.9

## 6.0.17

### Patch Changes

- d3ad3368f: `pnpm audit --fix` should not add an override for a vulnerable package that has no fixes released.
  - @pnpm/audit@3.0.8

## 6.0.16

### Patch Changes

- Updated dependencies [f48d46ef6]
  - @pnpm/config@15.5.0
  - @pnpm/cli-utils@0.7.16

## 6.0.15

### Patch Changes

- Updated dependencies [8e5b77ef6]
  - @pnpm/types@8.4.0
  - @pnpm/audit@3.0.7
  - @pnpm/lockfile-file@5.1.2
  - @pnpm/cli-utils@0.7.15
  - @pnpm/config@15.4.1
  - @pnpm/read-project-manifest@3.0.6

## 6.0.14

### Patch Changes

- Updated dependencies [2a34b21ce]
- Updated dependencies [47b5e45dd]
  - @pnpm/types@8.3.0
  - @pnpm/config@15.4.0
  - @pnpm/audit@3.0.6
  - @pnpm/cli-utils@0.7.14
  - @pnpm/lockfile-file@5.1.1
  - @pnpm/read-project-manifest@3.0.5

## 6.0.13

### Patch Changes

- Updated dependencies [fb5bbfd7a]
- Updated dependencies [56cf04cb3]
  - @pnpm/types@8.2.0
  - @pnpm/config@15.3.0
  - @pnpm/lockfile-file@5.1.0
  - @pnpm/audit@3.0.5
  - @pnpm/cli-utils@0.7.13
  - @pnpm/read-project-manifest@3.0.4

## 6.0.12

### Patch Changes

- Updated dependencies [25798aad1]
  - @pnpm/config@15.2.1
  - @pnpm/cli-utils@0.7.12

## 6.0.11

### Patch Changes

- Updated dependencies [4d39e4a0c]
- Updated dependencies [bc80631d3]
- Updated dependencies [d5730ba81]
  - @pnpm/types@8.1.0
  - @pnpm/config@15.2.0
  - @pnpm/audit@3.0.4
  - @pnpm/cli-utils@0.7.11
  - @pnpm/lockfile-file@5.0.4
  - @pnpm/read-project-manifest@3.0.3

## 6.0.10

### Patch Changes

- @pnpm/cli-utils@0.7.10
- @pnpm/config@15.1.4

## 6.0.9

### Patch Changes

- Updated dependencies [ae2f845c5]
  - @pnpm/config@15.1.4
  - @pnpm/cli-utils@0.7.9

## 6.0.8

### Patch Changes

- Updated dependencies [05159665d]
  - @pnpm/config@15.1.3
  - @pnpm/cli-utils@0.7.8

## 6.0.7

### Patch Changes

- @pnpm/cli-utils@0.7.7

## 6.0.6

### Patch Changes

- Updated dependencies [af22c6c4f]
  - @pnpm/config@15.1.2
  - @pnpm/cli-utils@0.7.6
  - @pnpm/audit@3.0.3

## 6.0.5

### Patch Changes

- Updated dependencies [52b0576af]
  - @pnpm/cli-utils@0.7.5
  - @pnpm/lockfile-file@5.0.3
  - @pnpm/audit@3.0.2

## 6.0.4

### Patch Changes

- @pnpm/cli-utils@0.7.4
- @pnpm/config@15.1.1

## 6.0.3

### Patch Changes

- Updated dependencies [18ba5e2c0]
  - @pnpm/types@8.0.1
  - @pnpm/audit@3.0.2
  - @pnpm/cli-utils@0.7.3
  - @pnpm/config@15.1.1
  - @pnpm/lockfile-file@5.0.2
  - @pnpm/read-project-manifest@3.0.2

## 6.0.2

### Patch Changes

- Updated dependencies [e05dcc48a]
  - @pnpm/config@15.1.0
  - @pnpm/cli-utils@0.7.2

## 6.0.1

### Patch Changes

- Updated dependencies [8dac029ef]
- Updated dependencies [72b79f55a]
- Updated dependencies [546e644e9]
- Updated dependencies [c6463b9fd]
- Updated dependencies [4bed585e2]
- Updated dependencies [8fa95fd86]
- Updated dependencies [1267e4eff]
  - @pnpm/config@15.0.0
  - @pnpm/constants@6.1.0
  - @pnpm/cli-utils@0.7.1
  - @pnpm/audit@3.0.1
  - @pnpm/error@3.0.1
  - @pnpm/lockfile-file@5.0.1
  - @pnpm/read-project-manifest@3.0.1

## 6.0.0

### Major Changes

- 542014839: Node.js 12 is not supported.

### Patch Changes

- Updated dependencies [516859178]
- Updated dependencies [d504dc380]
- Updated dependencies [73d71a2d5]
- Updated dependencies [fa656992c]
- Updated dependencies [542014839]
- Updated dependencies [585e9ca9e]
  - @pnpm/config@14.0.0
  - @pnpm/types@8.0.0
  - @pnpm/audit@3.0.0
  - @pnpm/constants@6.0.0
  - @pnpm/error@3.0.0
  - @pnpm/lockfile-file@5.0.0
  - @pnpm/read-project-manifest@3.0.0
  - @pnpm/cli-utils@0.7.0

## 5.1.42

### Patch Changes

- Updated dependencies [70ba51da9]
  - @pnpm/error@2.1.0
  - @pnpm/audit@2.2.7
  - @pnpm/cli-utils@0.6.50
  - @pnpm/config@13.13.2
  - @pnpm/lockfile-file@4.3.1
  - @pnpm/read-project-manifest@2.0.13

## 5.1.41

### Patch Changes

- Updated dependencies [b138d048c]
  - @pnpm/lockfile-file@4.3.0
  - @pnpm/types@7.10.0
  - @pnpm/audit@2.2.6
  - @pnpm/cli-utils@0.6.49
  - @pnpm/config@13.13.1
  - @pnpm/read-project-manifest@2.0.12

## 5.1.40

### Patch Changes

- Updated dependencies [334e5340a]
  - @pnpm/config@13.13.0
  - @pnpm/cli-utils@0.6.48

## 5.1.39

### Patch Changes

- Updated dependencies [b7566b979]
  - @pnpm/config@13.12.0
  - @pnpm/cli-utils@0.6.47

## 5.1.38

### Patch Changes

- @pnpm/audit@2.2.5
- @pnpm/config@13.11.0

## 5.1.37

### Patch Changes

- Updated dependencies [fff0e4493]
  - @pnpm/config@13.11.0
  - @pnpm/cli-utils@0.6.46

## 5.1.36

### Patch Changes

- @pnpm/cli-utils@0.6.45

## 5.1.35

### Patch Changes

- Updated dependencies [e76151f66]
- Updated dependencies [26cd01b88]
  - @pnpm/config@13.10.0
  - @pnpm/types@7.9.0
  - @pnpm/cli-utils@0.6.44
  - @pnpm/audit@2.2.4
  - @pnpm/lockfile-file@4.2.6
  - @pnpm/read-project-manifest@2.0.11

## 5.1.34

### Patch Changes

- @pnpm/cli-utils@0.6.43

## 5.1.33

### Patch Changes

- Updated dependencies [8fe8f5e55]
  - @pnpm/config@13.9.0
  - @pnpm/cli-utils@0.6.42

## 5.1.32

### Patch Changes

- Updated dependencies [732d4962f]
- Updated dependencies [a6cf11cb7]
  - @pnpm/config@13.8.0
  - @pnpm/cli-utils@0.6.41

## 5.1.31

### Patch Changes

- @pnpm/audit@2.2.3
- @pnpm/cli-utils@0.6.40
- @pnpm/config@13.7.2
- @pnpm/lockfile-file@4.2.5
- @pnpm/read-project-manifest@2.0.10

## 5.1.30

### Patch Changes

- Updated dependencies [eb9ebd0f3]
- Updated dependencies [eb9ebd0f3]
  - @pnpm/lockfile-file@4.2.4
  - @pnpm/audit@2.2.2

## 5.1.29

### Patch Changes

- @pnpm/cli-utils@0.6.39

## 5.1.28

### Patch Changes

- @pnpm/audit@2.2.2
- @pnpm/cli-utils@0.6.38
- @pnpm/config@13.7.1
- @pnpm/lockfile-file@4.2.3
- @pnpm/read-project-manifest@2.0.9

## 5.1.27

### Patch Changes

- Updated dependencies [30bfca967]
- Updated dependencies [927c4a089]
- Updated dependencies [10a4bd4db]
  - @pnpm/config@13.7.0
  - @pnpm/cli-utils@0.6.37
  - @pnpm/audit@2.2.1
  - @pnpm/lockfile-file@4.2.2
  - @pnpm/read-project-manifest@2.0.8

## 5.1.26

### Patch Changes

- Updated dependencies [f1c194ded]
- Updated dependencies [46aaf7108]
  - @pnpm/audit@2.2.0
  - @pnpm/config@13.6.1
  - @pnpm/cli-utils@0.6.36

## 5.1.25

### Patch Changes

- Updated dependencies [8a99a01ff]
  - @pnpm/config@13.6.0
  - @pnpm/audit@2.1.15
  - @pnpm/cli-utils@0.6.35

## 5.1.24

### Patch Changes

- @pnpm/cli-utils@0.6.34

## 5.1.23

### Patch Changes

- Updated dependencies [a7ff2d5ce]
  - @pnpm/config@13.5.1
  - @pnpm/cli-utils@0.6.33

## 5.1.22

### Patch Changes

- Updated dependencies [002778559]
  - @pnpm/config@13.5.0
  - @pnpm/cli-utils@0.6.32
  - @pnpm/audit@2.1.14

## 5.1.21

### Patch Changes

- @pnpm/cli-utils@0.6.31

## 5.1.20

### Patch Changes

- @pnpm/config@13.4.2
- @pnpm/audit@2.1.13
- @pnpm/cli-utils@0.6.30
- @pnpm/lockfile-file@4.2.1
- @pnpm/read-project-manifest@2.0.7

## 5.1.19

### Patch Changes

- Updated dependencies [4ab87844a]
  - @pnpm/lockfile-file@4.2.0
  - @pnpm/audit@2.1.12
  - @pnpm/cli-utils@0.6.29
  - @pnpm/config@13.4.1
  - @pnpm/read-project-manifest@2.0.6

## 5.1.18

### Patch Changes

- @pnpm/audit@2.1.11

## 5.1.17

### Patch Changes

- Updated dependencies [b6d74c545]
  - @pnpm/config@13.4.0
  - @pnpm/cli-utils@0.6.28

## 5.1.16

### Patch Changes

- Updated dependencies [bd7bcdbe8]
  - @pnpm/config@13.3.0
  - @pnpm/cli-utils@0.6.27
  - @pnpm/audit@2.1.10

## 5.1.15

### Patch Changes

- Updated dependencies [5ee3b2dc7]
  - @pnpm/config@13.2.0
  - @pnpm/cli-utils@0.6.26

## 5.1.14

### Patch Changes

- @pnpm/cli-utils@0.6.25

## 5.1.13

### Patch Changes

- Updated dependencies [4027a3c69]
  - @pnpm/config@13.1.0
  - @pnpm/cli-utils@0.6.24

## 5.1.12

### Patch Changes

- Updated dependencies [fe5688dc0]
- Updated dependencies [c7081cbb4]
- Updated dependencies [c7081cbb4]
  - @pnpm/config@13.0.0
  - @pnpm/cli-utils@0.6.23

## 5.1.11

### Patch Changes

- Updated dependencies [d62259d67]
  - @pnpm/config@12.6.0
  - @pnpm/cli-utils@0.6.22

## 5.1.10

### Patch Changes

- Updated dependencies [6681fdcbc]
  - @pnpm/config@12.5.0
  - @pnpm/cli-utils@0.6.21
  - @pnpm/audit@2.1.9

## 5.1.9

### Patch Changes

- @pnpm/audit@2.1.8
- @pnpm/cli-utils@0.6.20

## 5.1.8

### Patch Changes

- Updated dependencies [ede519190]
  - @pnpm/config@12.4.9
  - @pnpm/cli-utils@0.6.19

## 5.1.7

### Patch Changes

- @pnpm/config@12.4.8
- @pnpm/cli-utils@0.6.18

## 5.1.6

### Patch Changes

- Updated dependencies [655af55ba]
  - @pnpm/config@12.4.7
  - @pnpm/cli-utils@0.6.17

## 5.1.5

### Patch Changes

- Updated dependencies [3fb74c618]
  - @pnpm/config@12.4.6
  - @pnpm/cli-utils@0.6.16

## 5.1.4

### Patch Changes

- 92ed1272e: If a package has no fixes, do not add it to the overrides.
- Updated dependencies [051296a16]
  - @pnpm/config@12.4.5
  - @pnpm/cli-utils@0.6.15

## 5.1.3

### Patch Changes

- Updated dependencies [af8b5716e]
  - @pnpm/config@12.4.4
  - @pnpm/cli-utils@0.6.14

## 5.1.2

### Patch Changes

- @pnpm/audit@2.1.7
- @pnpm/cli-utils@0.6.13
- @pnpm/config@12.4.3
- @pnpm/lockfile-file@4.1.1
- @pnpm/read-project-manifest@2.0.5

## 5.1.1

### Patch Changes

- Updated dependencies [73c1f802e]
  - @pnpm/config@12.4.2
  - @pnpm/cli-utils@0.6.12

## 5.1.0

### Minor Changes

- a5f698290: New command added: `pnpm audit --fix`. This command adds overrides to `package.json` that force versions of packages that do not have the vulnerabilities.

### Patch Changes

- @pnpm/cli-utils@0.6.11

## 5.0.1

### Patch Changes

- Updated dependencies [2264bfdf4]
  - @pnpm/config@12.4.1
  - @pnpm/cli-utils@0.6.10

## 5.0.0

### Major Changes

- 691f64713: New required option added: cacheDir.

### Patch Changes

- Updated dependencies [25f6968d4]
- Updated dependencies [5aaf3e3fa]
  - @pnpm/config@12.4.0
  - @pnpm/cli-utils@0.6.9

## 4.2.2

### Patch Changes

- Updated dependencies [8e76690f4]
  - @pnpm/lockfile-file@4.1.0
  - @pnpm/audit@2.1.6
  - @pnpm/cli-utils@0.6.8
  - @pnpm/config@12.3.3

## 4.2.1

### Patch Changes

- @pnpm/audit@2.1.5

## 4.2.0

### Minor Changes

- 448710f88: New CLI option added: `--ignore-registry-errors`. When used, audit exits with 0 exit code, when the registry responds with a non-200 status code.

### Patch Changes

- Updated dependencies [2dc5a7a4c]
  - @pnpm/lockfile-file@4.0.4
  - @pnpm/audit@2.1.4

## 4.1.6

### Patch Changes

- @pnpm/audit@2.1.4
- @pnpm/cli-utils@0.6.7
- @pnpm/config@12.3.2
- @pnpm/lockfile-file@4.0.3

## 4.1.5

### Patch Changes

- a1a03d145: Import only the required functions from ramda.
- Updated dependencies [a1a03d145]
  - @pnpm/config@12.3.1
  - @pnpm/lockfile-file@4.0.2
  - @pnpm/cli-utils@0.6.6
  - @pnpm/audit@2.1.3

## 4.1.4

### Patch Changes

- Updated dependencies [84ec82e05]
- Updated dependencies [c2a71e4fd]
- Updated dependencies [84ec82e05]
  - @pnpm/config@12.3.0
  - @pnpm/cli-utils@0.6.5

## 4.1.3

### Patch Changes

- @pnpm/cli-utils@0.6.4
- @pnpm/audit@2.1.2

## 4.1.2

### Patch Changes

- @pnpm/cli-utils@0.6.3
- @pnpm/config@12.2.0

## 4.1.1

### Patch Changes

- Updated dependencies [40b75fbb9]
  - @pnpm/audit@2.1.1
  - @pnpm/config@12.2.0

## 4.1.0

### Minor Changes

- 05baaa6e7: Add new config setting: `fetch-timeout`.

### Patch Changes

- Updated dependencies [05baaa6e7]
- Updated dependencies [dfdf669e6]
- Updated dependencies [05baaa6e7]
  - @pnpm/config@12.2.0
  - @pnpm/audit@2.1.0
  - @pnpm/cli-utils@0.6.2
  - @pnpm/lockfile-file@4.0.1

## 4.0.2

### Patch Changes

- Updated dependencies [ba5231ccf]
  - @pnpm/config@12.1.0
  - @pnpm/cli-utils@0.6.1

## 4.0.1

### Patch Changes

- @pnpm/audit@2.0.1

## 4.0.0

### Major Changes

- 97b986fbc: Node.js 10 support is dropped. At least Node.js 12.17 is required for the package to work.

### Patch Changes

- Updated dependencies [6871d74b2]
- Updated dependencies [97b986fbc]
- Updated dependencies [78470a32d]
- Updated dependencies [155e70597]
- Updated dependencies [9c2a878c3]
- Updated dependencies [aed712455]
- Updated dependencies [8b66f26dc]
- Updated dependencies [f2bb5cbeb]
- Updated dependencies [f7750baed]
- Updated dependencies [aed712455]
- Updated dependencies [9c2a878c3]
  - @pnpm/constants@5.0.0
  - @pnpm/audit@2.0.0
  - @pnpm/cli-utils@0.6.0
  - @pnpm/config@12.0.0
  - @pnpm/error@2.0.0
  - @pnpm/lockfile-file@4.0.0

## 3.0.6

### Patch Changes

- Updated dependencies [4f1ce907a]
  - @pnpm/config@11.14.2
  - @pnpm/cli-utils@0.5.4

## 3.0.5

### Patch Changes

- Updated dependencies [4b3852c39]
  - @pnpm/config@11.14.1
  - @pnpm/cli-utils@0.5.3

## 3.0.4

### Patch Changes

- @pnpm/audit@1.1.24

## 3.0.3

### Patch Changes

- @pnpm/config@11.14.0
- @pnpm/cli-utils@0.5.2

## 3.0.2

### Patch Changes

- Updated dependencies [3be2b1773]
  - @pnpm/cli-utils@0.5.1

## 3.0.1

### Patch Changes

- Updated dependencies [51e1456dd]
  - @pnpm/lockfile-file@3.2.1
  - @pnpm/audit@1.1.23

## 3.0.0

### Major Changes

- 5175460a0: Filter dependency types via the `dev`/`production`/`optional` options instead of the `included` option.

## 2.0.43

### Patch Changes

- 0c11e1a07: Audit output should always have a new line at the end.
- Updated dependencies [cb040ae18]
  - @pnpm/cli-utils@0.5.0
  - @pnpm/config@11.14.0

## 2.0.42

### Patch Changes

- Updated dependencies [c4cc62506]
  - @pnpm/config@11.13.0
  - @pnpm/cli-utils@0.4.51

## 2.0.41

### Patch Changes

- Updated dependencies [bff84dbca]
  - @pnpm/config@11.12.1
  - @pnpm/cli-utils@0.4.50

## 2.0.40

### Patch Changes

- @pnpm/cli-utils@0.4.49

## 2.0.39

### Patch Changes

- @pnpm/cli-utils@0.4.48

## 2.0.38

### Patch Changes

- Updated dependencies [9ad8c27bf]
- Updated dependencies [548f28df9]
- Updated dependencies [548f28df9]
  - @pnpm/lockfile-file@3.2.0
  - @pnpm/cli-utils@0.4.47
  - @pnpm/config@11.12.0
  - @pnpm/audit@1.1.23

## 2.0.37

### Patch Changes

- @pnpm/config@11.11.1
- @pnpm/cli-utils@0.4.46

## 2.0.36

### Patch Changes

- Updated dependencies [af897c324]
  - @pnpm/lockfile-file@3.1.4
  - @pnpm/audit@1.1.22

## 2.0.35

### Patch Changes

- Updated dependencies [1e4a3a17a]
- Updated dependencies [f40bc5927]
  - @pnpm/lockfile-file@3.1.3
  - @pnpm/config@11.11.0
  - @pnpm/audit@1.1.22
  - @pnpm/cli-utils@0.4.45

## 2.0.34

### Patch Changes

- Updated dependencies [425c7547d]
  - @pnpm/config@11.10.2
  - @pnpm/cli-utils@0.4.44
  - @pnpm/audit@1.1.22

## 2.0.33

### Patch Changes

- Updated dependencies [ea09da716]
  - @pnpm/config@11.10.1
  - @pnpm/cli-utils@0.4.43

## 2.0.32

### Patch Changes

- Updated dependencies [a8656b42f]
  - @pnpm/config@11.10.0
  - @pnpm/cli-utils@0.4.42

## 2.0.31

### Patch Changes

- Updated dependencies [041537bc3]
  - @pnpm/config@11.9.1
  - @pnpm/cli-utils@0.4.41

## 2.0.30

### Patch Changes

- Updated dependencies [fba715512]
  - @pnpm/lockfile-file@3.1.2
  - @pnpm/audit@1.1.21

## 2.0.29

### Patch Changes

- @pnpm/audit@1.1.20

## 2.0.28

### Patch Changes

- Updated dependencies [8698a7060]
  - @pnpm/config@11.9.0
  - @pnpm/cli-utils@0.4.40
  - @pnpm/audit@1.1.19

## 2.0.27

### Patch Changes

- Updated dependencies [fcc1c7100]
  - @pnpm/config@11.8.0
  - @pnpm/cli-utils@0.4.39

## 2.0.26

### Patch Changes

- Updated dependencies [0c5f1bcc9]
  - @pnpm/error@1.4.0
  - @pnpm/audit@1.1.18
  - @pnpm/cli-utils@0.4.38
  - @pnpm/config@11.7.2
  - @pnpm/lockfile-file@3.1.1

## 2.0.25

### Patch Changes

- Updated dependencies [3776b5a52]
  - @pnpm/lockfile-file@3.1.0
  - @pnpm/audit@1.1.17

## 2.0.24

### Patch Changes

- Updated dependencies [dbcc6c96f]
- Updated dependencies [09492b7b4]
  - @pnpm/lockfile-file@3.0.18
  - @pnpm/audit@1.1.17
  - @pnpm/cli-utils@0.4.37

## 2.0.23

### Patch Changes

- e70232907: Use @arcanis/slice-ansi instead of slice-ansi.
- Updated dependencies [aa6bc4f95]
  - @pnpm/lockfile-file@3.0.17
  - @pnpm/audit@1.1.17
  - @pnpm/cli-utils@0.4.36

## 2.0.22

### Patch Changes

- @pnpm/audit@1.1.16
- @pnpm/lockfile-file@3.0.16
- @pnpm/cli-utils@0.4.35
- @pnpm/config@11.7.1

## 2.0.21

### Patch Changes

- Updated dependencies [50b360ec1]
  - @pnpm/config@11.7.0
  - @pnpm/cli-utils@0.4.34

## 2.0.20

### Patch Changes

- Updated dependencies [fcdad632f]
  - @pnpm/constants@4.1.0
  - @pnpm/audit@1.1.15
  - @pnpm/lockfile-file@3.0.15
  - @pnpm/cli-utils@0.4.33
  - @pnpm/config@11.6.1

## 2.0.19

### Patch Changes

- Updated dependencies [f591fdeeb]
  - @pnpm/config@11.6.0
  - @pnpm/cli-utils@0.4.32

## 2.0.18

### Patch Changes

- @pnpm/cli-utils@0.4.31

## 2.0.17

### Patch Changes

- Updated dependencies [74914c178]
  - @pnpm/config@11.5.0
  - @pnpm/cli-utils@0.4.30

## 2.0.16

### Patch Changes

- Updated dependencies [23cf3c88b]
  - @pnpm/config@11.4.0
  - @pnpm/cli-utils@0.4.29

## 2.0.15

### Patch Changes

- Updated dependencies [767212f4e]
- Updated dependencies [092f8dd83]
  - @pnpm/config@11.3.0
  - @pnpm/cli-utils@0.4.28

## 2.0.14

### Patch Changes

- @pnpm/audit@1.1.14
- @pnpm/cli-utils@0.4.27

## 2.0.13

### Patch Changes

- @pnpm/audit@1.1.13

## 2.0.12

### Patch Changes

- @pnpm/cli-utils@0.4.26

## 2.0.11

### Patch Changes

- Updated dependencies [75a36deba]
- Updated dependencies [9f1a29ff9]
  - @pnpm/error@1.3.1
  - @pnpm/config@11.2.7
  - @pnpm/audit@1.1.12
  - @pnpm/cli-utils@0.4.25
  - @pnpm/lockfile-file@3.0.14

## 2.0.10

### Patch Changes

- 6138b56d0: Update table to v6.

## 2.0.9

### Patch Changes

- Updated dependencies [ac0d3e122]
  - @pnpm/config@11.2.6
  - @pnpm/cli-utils@0.4.24

## 2.0.8

### Patch Changes

- Updated dependencies [9550b0505]
- Updated dependencies [972864e0d]
  - @pnpm/lockfile-file@3.0.13
  - @pnpm/config@11.2.5
  - @pnpm/audit@1.1.11
  - @pnpm/cli-utils@0.4.23

## 2.0.7

### Patch Changes

- Updated dependencies [6d480dd7a]
  - @pnpm/error@1.3.0
  - @pnpm/audit@1.1.11
  - @pnpm/cli-utils@0.4.22
  - @pnpm/config@11.2.4
  - @pnpm/lockfile-file@3.0.12

## 2.0.6

### Patch Changes

- Updated dependencies [13c18e397]
  - @pnpm/config@11.2.3
  - @pnpm/cli-utils@0.4.21

## 2.0.5

### Patch Changes

- Updated dependencies [3f6d35997]
  - @pnpm/config@11.2.2
  - @pnpm/cli-utils@0.4.20

## 2.0.4

### Patch Changes

- @pnpm/cli-utils@0.4.19

## 2.0.3

### Patch Changes

- @pnpm/cli-utils@0.4.18

## 2.0.2

### Patch Changes

- Updated dependencies [a2ef8084f]
  - @pnpm/config@11.2.1
  - @pnpm/audit@1.1.10
  - @pnpm/cli-utils@0.4.17

## 2.0.1

### Patch Changes

- 8bb015059: `pnpm audit --audit-level high` should not error if the found vulnerabilities are low and/or moderate.

## 2.0.0

### Major Changes

- a64b7250c: Return `Promise&lt;{ output: string, exitCode: number }>` instead of `Promise&lt;string>`.

  `exitCode` is `1` when there are any packages with vulnerabilities in the dependencies.

## 1.0.21

### Patch Changes

- Updated dependencies [ad69677a7]
  - @pnpm/cli-utils@0.4.16
  - @pnpm/config@11.2.0

## 1.0.20

### Patch Changes

- 4e5e22aab: Allow to set a custom registry through the `--registry` option, when running `pnpm audit` (#2689).

## 1.0.19

### Patch Changes

- @pnpm/audit@1.1.9
- @pnpm/cli-utils@0.4.15

## 1.0.18

### Patch Changes

- Updated dependencies [65b4d07ca]
- Updated dependencies [ab3b8f51d]
  - @pnpm/config@11.1.0
  - @pnpm/cli-utils@0.4.14
  - @pnpm/audit@1.1.8

## 1.0.17

### Patch Changes

- @pnpm/config@11.0.1
- @pnpm/cli-utils@0.4.13

## 1.0.16

### Patch Changes

- Updated dependencies [71aeb9a38]
- Updated dependencies [915828b46]
  - @pnpm/config@11.0.0
  - @pnpm/cli-utils@0.4.12
  - @pnpm/audit@1.1.7

## 1.0.15

### Patch Changes

- @pnpm/config@10.0.1
- @pnpm/cli-utils@0.4.11

## 1.0.14

### Patch Changes

- Updated dependencies [db17f6f7b]
- Updated dependencies [1146b76d2]
  - @pnpm/config@10.0.0
  - @pnpm/cli-utils@0.4.10
  - @pnpm/audit@1.1.6
  - @pnpm/lockfile-file@3.0.11

## 1.0.13

### Patch Changes

- Updated dependencies [71a8c8ce3]
  - @pnpm/config@9.2.0
  - @pnpm/audit@1.1.5
  - @pnpm/cli-utils@0.4.9
  - @pnpm/lockfile-file@3.0.10

## 1.0.12

### Patch Changes

- e934b1a48: Update chalk to v4.1.0.
- Updated dependencies [e934b1a48]
  - @pnpm/cli-utils@0.4.8
  - @pnpm/audit@1.1.4

## 1.0.11

### Patch Changes

- @pnpm/audit@1.1.3
- @pnpm/cli-utils@0.4.7

## 1.0.10

### Patch Changes

- Updated dependencies [ffddf34a8]
  - @pnpm/config@9.1.0
  - @pnpm/cli-utils@0.4.6

## 1.0.9

### Patch Changes

- Updated dependencies [b5f66c0f2]
- Updated dependencies [242cf8737]
- Updated dependencies [ca9f50844]
- Updated dependencies [e11019b89]
- Updated dependencies [802d145fc]
- Updated dependencies [45fdcfde2]
- Updated dependencies [4f5801b1c]
  - @pnpm/constants@4.0.0
  - @pnpm/config@9.0.0
  - @pnpm/audit@1.1.2
  - @pnpm/cli-utils@0.4.5
  - @pnpm/error@1.2.1
  - @pnpm/lockfile-file@3.0.9

## 1.0.9-alpha.2

### Patch Changes

- Updated dependencies [242cf8737]
- Updated dependencies [ca9f50844]
- Updated dependencies [45fdcfde2]
  - @pnpm/config@9.0.0-alpha.2
  - @pnpm/constants@4.0.0-alpha.1
  - @pnpm/cli-utils@0.4.5-alpha.2
  - @pnpm/lockfile-file@3.0.9-alpha.2
  - @pnpm/audit@1.1.2-alpha.2

## 1.0.9-alpha.1

### Patch Changes

- @pnpm/audit@1.1.2-alpha.1
- @pnpm/cli-utils@0.4.5-alpha.1
- @pnpm/config@8.3.1-alpha.1
- @pnpm/lockfile-file@3.0.9-alpha.1

## 1.0.9-alpha.0

### Patch Changes

- Updated dependencies [b5f66c0f2]
  - @pnpm/constants@4.0.0-alpha.0
  - @pnpm/config@8.3.1-alpha.0
  - @pnpm/lockfile-file@3.0.9-alpha.0
  - @pnpm/cli-utils@0.4.5-alpha.0
  - @pnpm/audit@1.1.1-alpha.0

## 1.0.8

### Patch Changes

- Updated dependencies [907c63a48]
- Updated dependencies [907c63a48]
- Updated dependencies [907c63a48]
  - @pnpm/lockfile-file@3.0.8
  - @pnpm/audit@1.1.0
  - @pnpm/cli-utils@0.4.4
