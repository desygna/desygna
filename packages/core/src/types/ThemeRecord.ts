export type ThemeRecord<T> =
  | string
  | number
  | { [property: string]: ThemeRecord<T> }
  | ThemeRecord<T>[];
