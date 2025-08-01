# @pnpm/read-project-manifest

## 1001.1.0

### Minor Changes

- d1edf73: Add support for installing deno runtime.
- 86b33e9: Added support for installing Bun runtime.

### Patch Changes

- @pnpm/error@1000.0.4

## 1001.0.0

### Major Changes

- 1a07b8f: Added @pnpm/logger to peer deps.

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
  - @pnpm/write-project-manifest@1000.0.9
  - @pnpm/error@1000.0.3

## 1000.0.11

### Patch Changes

- Updated dependencies [5ec7255]
  - @pnpm/types@1000.6.0
  - @pnpm/write-project-manifest@1000.0.8

## 1000.0.10

### Patch Changes

- Updated dependencies [5b73df1]
  - @pnpm/types@1000.5.0
  - @pnpm/write-project-manifest@1000.0.7

## 1000.0.9

### Patch Changes

- Updated dependencies [750ae7d]
  - @pnpm/types@1000.4.0
  - @pnpm/write-project-manifest@1000.0.6

## 1000.0.8

### Patch Changes

- Updated dependencies [5f7be64]
- Updated dependencies [5f7be64]
  - @pnpm/types@1000.3.0
  - @pnpm/write-project-manifest@1000.0.5

## 1000.0.7

### Patch Changes

- Updated dependencies [a5e4965]
  - @pnpm/types@1000.2.1
  - @pnpm/write-project-manifest@1000.0.4

## 1000.0.6

### Patch Changes

- Updated dependencies [8fcc221]
  - @pnpm/types@1000.2.0
  - @pnpm/write-project-manifest@1000.0.3

## 1000.0.5

### Patch Changes

- 1e229d7: Replaced `lodash.clonedeep` with the built-in `structuredClone`.

## 1000.0.4

### Patch Changes

- Updated dependencies [b562deb]
  - @pnpm/types@1000.1.1
  - @pnpm/error@1000.0.2
  - @pnpm/write-project-manifest@1000.0.2

## 1000.0.3

### Patch Changes

- e050221: Export `WriteProjectManifest`.

## 1000.0.2

### Patch Changes

- Updated dependencies [9591a18]
  - @pnpm/types@1000.1.0
  - @pnpm/write-project-manifest@1000.0.1

## 1000.0.1

### Patch Changes

- @pnpm/error@1000.0.1

## 6.0.10

### Patch Changes

- @pnpm/error@6.0.3

## 6.0.9

### Patch Changes

- @pnpm/error@6.0.2

## 6.0.8

### Patch Changes

- Updated dependencies [d500d9f]
  - @pnpm/types@12.2.0
  - @pnpm/write-project-manifest@6.0.7

## 6.0.7

### Patch Changes

- Updated dependencies [7ee59a1]
  - @pnpm/types@12.1.0
  - @pnpm/write-project-manifest@6.0.6

## 6.0.6

### Patch Changes

- Updated dependencies [cb006df]
  - @pnpm/types@12.0.0
  - @pnpm/write-project-manifest@6.0.5

## 6.0.5

### Patch Changes

- Updated dependencies [0ef168b]
  - @pnpm/types@11.1.0
  - @pnpm/write-project-manifest@6.0.4

## 6.0.4

### Patch Changes

- Updated dependencies [dd00eeb]
- Updated dependencies
  - @pnpm/types@11.0.0
  - @pnpm/write-project-manifest@6.0.3

## 6.0.3

### Patch Changes

- Updated dependencies [13e55b2]
  - @pnpm/types@10.1.1
  - @pnpm/write-project-manifest@6.0.2

## 6.0.2

### Patch Changes

- Updated dependencies [45f4262]
  - @pnpm/types@10.1.0
  - @pnpm/write-project-manifest@6.0.1

## 6.0.1

### Patch Changes

- Updated dependencies [a7aef51]
  - @pnpm/error@6.0.1

## 6.0.0

### Major Changes

- 43cdd87: Node.js v16 support dropped. Use at least Node.js v18.12.

### Patch Changes

- Updated dependencies [7733f3a]
- Updated dependencies [3ded840]
- Updated dependencies [43cdd87]
- Updated dependencies [730929e]
  - @pnpm/types@10.0.0
  - @pnpm/error@6.0.0
  - @pnpm/write-project-manifest@6.0.0
  - @pnpm/text.comments-parser@3.0.0
  - @pnpm/graceful-fs@4.0.0

## 5.0.10

### Patch Changes

- Updated dependencies [4d34684f1]
  - @pnpm/types@9.4.2
  - @pnpm/write-project-manifest@5.0.6

## 5.0.9

### Patch Changes

- Updated dependencies
  - @pnpm/types@9.4.1
  - @pnpm/write-project-manifest@5.0.5

## 5.0.8

### Patch Changes

- Updated dependencies [43ce9e4a6]
  - @pnpm/types@9.4.0
  - @pnpm/write-project-manifest@5.0.4

## 5.0.7

### Patch Changes

- Updated dependencies [d774a3196]
  - @pnpm/types@9.3.0
  - @pnpm/write-project-manifest@5.0.3

## 5.0.6

### Patch Changes

- Updated dependencies [9caa33d53]
  - @pnpm/graceful-fs@3.2.0

## 5.0.5

### Patch Changes

- Updated dependencies [083bbf590]
  - @pnpm/graceful-fs@3.1.0

## 5.0.4

### Patch Changes

- Updated dependencies [aa2ae8fe2]
  - @pnpm/types@9.2.0
  - @pnpm/write-project-manifest@5.0.2

## 5.0.3

### Patch Changes

- b4892acc5: Optimizing project manifest normalization, reducing amoung of data copying

## 5.0.2

### Patch Changes

- @pnpm/error@5.0.2

## 5.0.1

### Patch Changes

- Updated dependencies [a9e0b7cbf]
  - @pnpm/types@9.1.0
  - @pnpm/write-project-manifest@5.0.1
  - @pnpm/error@5.0.1

## 5.0.0

### Major Changes

- eceaa8b8b: Node.js 14 support dropped.

### Patch Changes

- Updated dependencies [eceaa8b8b]
  - @pnpm/write-project-manifest@5.0.0
  - @pnpm/text.comments-parser@2.0.0
  - @pnpm/graceful-fs@3.0.0
  - @pnpm/error@5.0.0
  - @pnpm/types@9.0.0

## 4.1.4

### Patch Changes

- Updated dependencies [955874422]
  - @pnpm/graceful-fs@2.1.0

## 4.1.3

### Patch Changes

- @pnpm/error@4.0.1

## 4.1.2

### Patch Changes

- Updated dependencies [b77651d14]
  - @pnpm/types@8.10.0
  - @pnpm/write-project-manifest@4.1.2

## 4.1.1

### Patch Changes

- Updated dependencies [a9d59d8bc]
  - @pnpm/write-project-manifest@4.1.1

## 4.1.0

### Minor Changes

- 0d12d38fd: Comments in `package.json5` are preserver [#2008](https://github.com/pnpm/pnpm/issues/2008).

### Patch Changes

- fec9e3149: Update detect-intent with fork from @gwhitney.
- Updated dependencies [0d12d38fd]
- Updated dependencies [0d12d38fd]
  - @pnpm/text.comments-parser@1.0.0
  - @pnpm/write-project-manifest@4.1.0

## 4.0.2

### Patch Changes

- Updated dependencies [702e847c1]
  - @pnpm/types@8.9.0
  - @pnpm/write-project-manifest@4.0.2

## 4.0.1

### Patch Changes

- Updated dependencies [844e82f3a]
  - @pnpm/types@8.8.0
  - @pnpm/write-project-manifest@4.0.1

## 4.0.0

### Major Changes

- f884689e0: Require `@pnpm/logger` v5.

### Patch Changes

- Updated dependencies [043d988fc]
- Updated dependencies [f884689e0]
  - @pnpm/error@4.0.0
  - @pnpm/write-project-manifest@4.0.0

## 3.0.13

### Patch Changes

- Updated dependencies [7c296fe9b]
  - @pnpm/write-project-manifest@3.0.10

## 3.0.12

### Patch Changes

- Updated dependencies [e8a631bf0]
  - @pnpm/error@3.1.0

## 3.0.11

### Patch Changes

- Updated dependencies [d665f3ff7]
  - @pnpm/types@8.7.0
  - @pnpm/write-project-manifest@3.0.9

## 3.0.10

### Patch Changes

- Updated dependencies [156cc1ef6]
  - @pnpm/types@8.6.0
  - @pnpm/write-project-manifest@3.0.8

## 3.0.9

### Patch Changes

- 39c040127: upgrade various dependencies
- Updated dependencies [39c040127]
  - @pnpm/write-project-manifest@3.0.7

## 3.0.8

### Patch Changes

- Updated dependencies [c90798461]
  - @pnpm/types@8.5.0
  - @pnpm/write-project-manifest@3.0.6

## 3.0.7

### Patch Changes

- 01c5834bf: It should be possible to rewrite a manifest back to its initial content [#5061](https://github.com/pnpm/pnpm/issues/5061).

## 3.0.6

### Patch Changes

- Updated dependencies [8e5b77ef6]
  - @pnpm/types@8.4.0
  - @pnpm/write-project-manifest@3.0.5

## 3.0.5

### Patch Changes

- Updated dependencies [2a34b21ce]
  - @pnpm/types@8.3.0
  - @pnpm/write-project-manifest@3.0.4

## 3.0.4

### Patch Changes

- Updated dependencies [fb5bbfd7a]
  - @pnpm/types@8.2.0
  - @pnpm/write-project-manifest@3.0.3

## 3.0.3

### Patch Changes

- Updated dependencies [4d39e4a0c]
  - @pnpm/types@8.1.0
  - @pnpm/write-project-manifest@3.0.2

## 3.0.2

### Patch Changes

- Updated dependencies [18ba5e2c0]
  - @pnpm/types@8.0.1
  - @pnpm/write-project-manifest@3.0.1

## 3.0.1

### Patch Changes

- @pnpm/error@3.0.1

## 3.0.0

### Major Changes

- 542014839: Node.js 12 is not supported.

### Patch Changes

- Updated dependencies [d504dc380]
- Updated dependencies [542014839]
  - @pnpm/types@8.0.0
  - @pnpm/error@3.0.0
  - @pnpm/graceful-fs@2.0.0
  - @pnpm/write-project-manifest@3.0.0

## 2.0.13

### Patch Changes

- Updated dependencies [70ba51da9]
  - @pnpm/error@2.1.0

## 2.0.12

### Patch Changes

- Updated dependencies [b138d048c]
  - @pnpm/types@7.10.0
  - @pnpm/write-project-manifest@2.0.11

## 2.0.11

### Patch Changes

- Updated dependencies [26cd01b88]
  - @pnpm/types@7.9.0
  - @pnpm/write-project-manifest@2.0.10

## 2.0.10

### Patch Changes

- Updated dependencies [b5734a4a7]
  - @pnpm/types@7.8.0
  - @pnpm/write-project-manifest@2.0.9

## 2.0.9

### Patch Changes

- Updated dependencies [6493e0c93]
  - @pnpm/types@7.7.1
  - @pnpm/write-project-manifest@2.0.8

## 2.0.8

### Patch Changes

- Updated dependencies [ba9b2eba1]
  - @pnpm/types@7.7.0
  - @pnpm/write-project-manifest@2.0.7

## 2.0.7

### Patch Changes

- Updated dependencies [302ae4f6f]
  - @pnpm/types@7.6.0
  - @pnpm/write-project-manifest@2.0.6

## 2.0.6

### Patch Changes

- Updated dependencies [4ab87844a]
  - @pnpm/types@7.5.0
  - @pnpm/write-project-manifest@2.0.5

## 2.0.5

### Patch Changes

- Updated dependencies [b734b45ea]
  - @pnpm/types@7.4.0
  - @pnpm/write-project-manifest@2.0.4

## 2.0.4

### Patch Changes

- Updated dependencies [8e76690f4]
  - @pnpm/types@7.3.0
  - @pnpm/write-project-manifest@2.0.3

## 2.0.3

### Patch Changes

- Updated dependencies [724c5abd8]
  - @pnpm/types@7.2.0
  - @pnpm/write-project-manifest@2.0.2

## 2.0.2

### Patch Changes

- Updated dependencies [a2aeeef88]
  - @pnpm/graceful-fs@1.0.0

## 2.0.1

### Patch Changes

- 6e9c112af: Use graceful-fs in order to avoid EMFILE errors.
- Updated dependencies [97c64bae4]
  - @pnpm/types@7.1.0
  - @pnpm/write-project-manifest@2.0.1

## 2.0.0

### Major Changes

- 97b986fbc: Node.js 10 support is dropped. At least Node.js 12.17 is required for the package to work.

### Patch Changes

- Updated dependencies [97b986fbc]
  - @pnpm/error@2.0.0
  - @pnpm/types@7.0.0
  - @pnpm/write-project-manifest@2.0.0

## 1.1.7

### Patch Changes

- ad113645b: pin graceful-fs to v4.2.4
- Updated dependencies [ad113645b]
  - @pnpm/write-project-manifest@1.1.7

## 1.1.6

### Patch Changes

- Updated dependencies [9ad8c27bf]
  - @pnpm/types@6.4.0
  - @pnpm/write-project-manifest@1.1.6

## 1.1.5

### Patch Changes

- Updated dependencies [0c5f1bcc9]
  - @pnpm/error@1.4.0

## 1.1.4

### Patch Changes

- Updated dependencies [09492b7b4]
  - @pnpm/write-project-manifest@1.1.5

## 1.1.3

### Patch Changes

- Updated dependencies [cb6e6fc8a]
  - @pnpm/write-project-manifest@1.1.4

## 1.1.2

### Patch Changes

- Updated dependencies [b5d694e7f]
  - @pnpm/types@6.3.1
  - @pnpm/write-project-manifest@1.1.3

## 1.1.1

### Patch Changes

- Updated dependencies [d54043ee4]
  - @pnpm/types@6.3.0
  - @pnpm/write-project-manifest@1.1.2

## 1.1.0

### Minor Changes

- 2762781cc: safeReadProjectManifestOnly() added.

## 1.0.13

### Patch Changes

- Updated dependencies [75a36deba]
  - @pnpm/error@1.3.1

## 1.0.12

### Patch Changes

- Updated dependencies [6d480dd7a]
  - @pnpm/error@1.3.0

## 1.0.11

### Patch Changes

- Updated dependencies [2de5e1bec]
  - @pnpm/write-project-manifest@1.1.1

## 1.0.10

### Patch Changes

- 3bd3253e3: Trailing new lines are preserved, when updating the read manifests.
- Updated dependencies [3bd3253e3]
  - @pnpm/write-project-manifest@1.1.0

## 1.0.9

### Patch Changes

- Updated dependencies [db17f6f7b]
  - @pnpm/types@6.2.0
  - @pnpm/write-project-manifest@1.0.5

## 1.0.8

### Patch Changes

- Updated dependencies [71a8c8ce3]
  - @pnpm/types@6.1.0
  - @pnpm/write-project-manifest@1.0.4

## 1.0.7

### Patch Changes

- 57c510f00: Update fast-deep-equal to v3.1.3.

## 1.0.6

### Patch Changes

- Updated dependencies [da091c711]
  - @pnpm/types@6.0.0
  - @pnpm/error@1.2.1
  - @pnpm/write-project-manifest@1.0.3

## 1.0.6-alpha.0

### Patch Changes

- Updated dependencies [da091c71]
  - @pnpm/types@6.0.0-alpha.0
  - @pnpm/write-project-manifest@1.0.3-alpha.0

## 1.0.5

### Patch Changes

- Updated dependencies [907c63a48]
  - @pnpm/write-project-manifest@1.0.2
