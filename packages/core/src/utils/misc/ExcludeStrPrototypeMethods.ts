export type ExcludeStrPrototypeMethods<T> = {
  [K in keyof T as K extends keyof string ? never : K]: T[K];
};
