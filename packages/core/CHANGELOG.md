# @desygna/desygna-core

## 4.0.0

### Major Changes

- [`48b4d35`](https://github.com/desygna/desygna/commit/48b4d35ad106b35c73291e6181c7a04f6a567671) Thanks [@kerimcet](https://github.com/kerimcet)! - V4 Update

- [#36](https://github.com/desygna/desygna/pull/36) [`71740bf`](https://github.com/desygna/desygna/commit/71740bfbd8faabf83c5cfa17808b9c4864d5c781) Thanks [@kerimcet](https://github.com/kerimcet)! - You need to install peer dependencies like below:

  ```bash
  npm install @emotion/react@^11.10.0 @emotion/styled@^11.10.0 styled-system@^5.1.5 @styled-system/should-forward-prop@^5.1.5
  ```

  ## Improvements

  ### Type-safety on theme variables

  You can define your theme as a type definition, which will allow you to create
  components that are fully type-safe using your custom theme tokens. With this
  approach, you only need to include a few files to achieve this functionality.

  By having a theme.ts file that defines your custom theme and a desygna.d.ts file
  that provides type definitions for the Desygna library, you can get typings in
  your code editor (such as VS Code). This means that your editor will provide
  autocomplete suggestions and type-checking for your custom theme properties,
  making it easier and faster to write type-safe components.

  See docs: https://desygna.vercel.app/docs/v4-rc

  ***

  ## Additions

  ### `$shouldForwardProp`

  ### `$animation` system utility

  ### `DesygnaGenericProp` type

  ### `DesygnaGenericBreakpointValues` type

  ***

  ## Deprecated

  ### `ResponsiveProp` type will be deprecated

  ***

  ## Breaking Changes

  ### `DesygnaTheme` type has changed

  ### `styled` has renamed as `$styled`

  ### `variant` has renamed as `$variant`

  ### `compose` has renamed as `$compose`

  ### `composeAll` has renamed as `$composeAll`

  ### `css` has renamed as `$css`

  ### `background` has renamed as `$background`

  ### `border` has renamed as `$border`

  ### `color` has renamed as `$color`

  ### `cursor` has renamed as `$cursor`

  ### `flexbox` has renamed as `$flexbox`

  ### `grid` has renamed as `$grid`

  ### `layout` has renamed as `$layout`

  ### `position` has renamed as `$position`

  ### `shadow` has renamed as `$shadow`

  ### `space` has renamed as `$space`

  ### `typography` has renamed as `$typography`

### Patch Changes

- [#36](https://github.com/desygna/desygna/pull/36) [`71740bf`](https://github.com/desygna/desygna/commit/71740bfbd8faabf83c5cfa17808b9c4864d5c781) Thanks [@kerimcet](https://github.com/kerimcet)! - Update theme types

- [#36](https://github.com/desygna/desygna/pull/36) [`71740bf`](https://github.com/desygna/desygna/commit/71740bfbd8faabf83c5cfa17808b9c4864d5c781) Thanks [@kerimcet](https://github.com/kerimcet)! - Update `types` field in `package.json` to point to `dist/src/index.d.ts`

  Update `typeRoots` field in `tsconfig.json`

  The $shouldForwardProp property has renamed to shouldForwardProp for ease of use.

- [#36](https://github.com/desygna/desygna/pull/36) [`71740bf`](https://github.com/desygna/desygna/commit/71740bfbd8faabf83c5cfa17808b9c4864d5c781) Thanks [@kerimcet](https://github.com/kerimcet)! - Fix types from package.json

- [#36](https://github.com/desygna/desygna/pull/36) [`71740bf`](https://github.com/desygna/desygna/commit/71740bfbd8faabf83c5cfa17808b9c4864d5c781) Thanks [@kerimcet](https://github.com/kerimcet)! - Update core

## 4.0.0-pre.3

### Patch Changes

- [#31](https://github.com/desygna/desygna/pull/31) [`ad97dc8`](https://github.com/desygna/desygna/commit/ad97dc830a961f5d33f6a045bf833df89d9f68dd) Thanks [@github-actions](https://github.com/apps/github-actions)! - Update theme types

## 4.0.0-pre.2

### Patch Changes

- [`aab08ff`](https://github.com/desygna/desygna/commit/aab08ffcf0631d196bc58b321d40f50e3b7ab755) Thanks [@kerimcet](https://github.com/kerimcet)! - Fix types from package.json

- [`8ff2892`](https://github.com/desygna/desygna/commit/8ff289204e1af337c314e3a09ea37161ce70ee3b) Thanks [@kerimcet](https://github.com/kerimcet)! - Update core

## 4.0.0-pre.1

### Patch Changes

- [`753eae9`](https://github.com/desygna/desygna/commit/753eae9e8c03da67371149bb12098f78da33f526) Thanks [@kerimcet](https://github.com/kerimcet)! - Update `types` field in `package.json` to point to `dist/src/index.d.ts`

  Update `typeRoots` field in `tsconfig.json`

  The $shouldForwardProp property has renamed to shouldForwardProp for ease of use.

## 4.0.0-dev.0

### Major Changes

- [`5a08e7e`](https://github.com/desygna/desygna/commit/5a08e7e2c31f5f97770b98da216a31a4daddc6d1) Thanks [@kerimcet](https://github.com/kerimcet)! - You need to install peer dependencies like below:

  ```bash
  npm install @emotion/react@^11.10.0 @emotion/styled@^11.10.0 styled-system@^5.1.5 @styled-system/should-forward-prop@^5.1.5
  ```

  ## Improvements

  ### Type-safety on theme variables

  You can define your theme as a type definition, which will allow you to create
  components that are fully type-safe using your custom theme tokens. With this
  approach, you only need to include a few files to achieve this functionality.

  By having a theme.ts file that defines your custom theme and a desygna.d.ts file
  that provides type definitions for the Desygna library, you can get typings in
  your code editor (such as VS Code). This means that your editor will provide
  autocomplete suggestions and type-checking for your custom theme properties,
  making it easier and faster to write type-safe components.

  See docs: https://desygna.vercel.app/docs/v4-rc

  ***

  ## Additions

  ### `$shouldForwardProp`

  ### `$animation` system utility

  ### `DesygnaGenericProp` type

  ### `DesygnaGenericBreakpointValues` type

  ***

  ## Deprecated

  ### `ResponsiveProp` type will be deprecated

  ***

  ## Breaking Changes

  ### `DesygnaTheme` type has changed

  ### `styled` has renamed as `$styled`

  ### `variant` has renamed as `$variant`

  ### `compose` has renamed as `$compose`

  ### `composeAll` has renamed as `$composeAll`

  ### `css` has renamed as `$css`

  ### `background` has renamed as `$background`

  ### `border` has renamed as `$border`

  ### `color` has renamed as `$color`

  ### `cursor` has renamed as `$cursor`

  ### `flexbox` has renamed as `$flexbox`

  ### `grid` has renamed as `$grid`

  ### `layout` has renamed as `$layout`

  ### `position` has renamed as `$position`

  ### `shadow` has renamed as `$shadow`

  ### `space` has renamed as `$space`

  ### `typography` has renamed as `$typography`

## 3.0.0

### Major Changes

- [`af9852a`](https://github.com/desygna/desygna/commit/af9852aa7a9f1cea26e3ee198af4006051bfb774) Thanks [@kerimcet](https://github.com/kerimcet)! - Provide better typesafety on `system` APIs

## 2.0.3

### Patch Changes

- [`b3bcd24`](https://github.com/desygna/desygna/commit/b3bcd24c76c63ede93c3c8940f5c17be93d40370) Thanks [@kerimcet](https://github.com/kerimcet)! - Update package dependencies

## 2.0.2

### Patch Changes

- [`c979664`](https://github.com/desygna/desygna/commit/c979664361ff9b29fd25980508e745366399451c) Thanks [@kerimcet](https://github.com/kerimcet)! - Fix default display settings for `flex` and `grid`

## 2.0.1

### Patch Changes

- [`41c9dd0`](https://github.com/desygna/desygna/commit/41c9dd00e778969cb8d420f0f039cad83d2bb550) Thanks [@kerimcet](https://github.com/kerimcet)! - New component exports

## 2.0.0

### Major Changes

- [`73dc35a`](https://github.com/desygna/desygna/commit/73dc35a87f66d75e087d8eab182457eb59694c5f) Thanks [@kerimcet](https://github.com/kerimcet)! - Improve types and add primitive components (`paragraph`, `span`, `flex`, `grid`, `absolute`)

## 1.5.2

### Patch Changes

- [`a23bfb5`](https://github.com/desygna/desygna/commit/a23bfb58d3d46c14f05201648d4a952b8cc06a7b) Thanks [@kerimcet](https://github.com/kerimcet)! - Fix `compose` helper export

## 1.5.1

### Patch Changes

- [`adc3117`](https://github.com/desygna/desygna/commit/adc311794100bb19fc621c49021c4e68267124ac) Thanks [@kerimcet](https://github.com/kerimcet)! - Fix extended prop types

## 1.5.0

### Minor Changes

- [`fd06880`](https://github.com/desygna/desygna/commit/fd0688063abddcab638af752eda9a51045bb742c) Thanks [@kerimcet](https://github.com/kerimcet)! - Fix rollup configs & type autocompletion

## 1.4.3

### Patch Changes

- [`b22fbee`](https://github.com/desygna/desygna/commit/b22fbee8232d203d33fafa41362cc942f338dafb) Thanks [@kerimcet](https://github.com/kerimcet)! - Fix tsconfig compiler options

## 1.4.2

### Patch Changes

- [`83a154b`](https://github.com/desygna/desygna/commit/83a154b48dcb93754cbb0a60778a624760b82ba4) Thanks [@kerimcet](https://github.com/kerimcet)! - Fix rollup config externals

## 1.4.1

### Patch Changes

- [`1e4915c`](https://github.com/desygna/desygna/commit/1e4915c5bb1d5643178451a3a9b280728adb1a79) Thanks [@kerimcet](https://github.com/kerimcet)! - Fix tsconfig

## 1.4.0

### Minor Changes

- [`36d1c79`](https://github.com/desygna/desygna/commit/36d1c7959cb0173dd965c1ba9e2a7378c14873d1) Thanks [@kerimcet](https://github.com/kerimcet)! - Fix `core` package tsconfig compiler options

## 1.3.1

### Patch Changes

- [`d01788b`](https://github.com/desygna/desygna/commit/d01788bfffc66119e4b56dbcc37c100496f66387) Thanks [@kerimcet](https://github.com/kerimcet)! - Fix `color` system

## 1.3.0

### Minor Changes

- [`a4bfce4`](https://github.com/desygna/desygna/commit/a4bfce44cc1a443441d7418409a471b464b1af58) Thanks [@kerimcet](https://github.com/kerimcet)! - Export `box` and `button` packages from `@desygna/desygna`

## 1.2.0

### Minor Changes

- [`8f51231`](https://github.com/desygna/desygna/commit/8f512316dfd743cd81015b99762a013a001c02ce) Thanks [@kerimcet](https://github.com/kerimcet)! - Add `button` package

## 1.1.0

### Minor Changes

- [`882310e`](https://github.com/desygna/desygna/commit/882310e004211fae86023f4225bf7dabaf82e94f) Thanks [@kerimcet](https://github.com/kerimcet)! - Add `button` package

## 1.0.0

### Major Changes

- [`26c9624`](https://github.com/desygna/desygna/commit/26c962433a54ca30588ed6ac7215773a6a36f443) Thanks [@kerimcet](https://github.com/kerimcet)! - 🎉 Add core system utilities & typings

## 0.3.0

### Minor Changes

- [`319be46`](https://github.com/desygna/desygna/commit/319be46c214d2b161e37943ba732469e9d725eba) Thanks [@kerimcet](https://github.com/kerimcet)! - Add `breakpointAliases` into `createTheme` utility

## 0.2.2

### Patch Changes

- [`51a47f0`](https://github.com/desygna/desygna/commit/51a47f076caaf1d06ae66335d09f8911c092718c) Thanks [@kerimcet](https://github.com/kerimcet)! - Fix `background` system utility - use default system

## 0.2.1

### Patch Changes

- [`bc8a3a8`](https://github.com/desygna/desygna/commit/bc8a3a89ebcadbe4670bd05fe2c424a1efb4b52e) Thanks [@kerimcet](https://github.com/kerimcet)! - Fix `space` and `layout` system utilities

## 0.2.0

### Minor Changes

- [`d7f7c74`](https://github.com/desygna/desygna/commit/d7f7c748fdecd7c4485ddb27298763fb5e80db91) Thanks [@kerimcet](https://github.com/kerimcet)! - Add `createTheme` utility

## 0.1.0

### Minor Changes

- [`409e6ba`](https://github.com/desygna/desygna/commit/409e6ba2f2a106af71fb332139bb35081f0c9df7) Thanks [@kerimcet](https://github.com/kerimcet)! - Add core system utils

- [`8569732`](https://github.com/desygna/desygna/commit/856973298fc2cf10b5c755a241c133a4df4795d6) Thanks [@kerimcet](https://github.com/kerimcet)! - Add global css provider component

- [`b3b7ade`](https://github.com/desygna/desygna/commit/b3b7ade692f3a8df025bcf1f0a38a77285f59fdd) Thanks [@kerimcet](https://github.com/kerimcet)! - Add theme types and provider
