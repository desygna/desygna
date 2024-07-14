---
"@desygna/desygna-core": major
---

You need to install peer dependencies like below:

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

---

## Additions

### `$shouldForwardProp`

### `$animation` system utility

### `DesygnaGenericProp` type

### `DesygnaGenericBreakpointValues` type

---

## Deprecated

### `ResponsiveProp` type will be deprecated

---

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
