export type PathToStringProps<T> = T extends string
  ? []
  : {
      [K in Extract<keyof T, string>]: [K, ...PathToStringProps<T[K]>];
    }[Extract<keyof T, string>];

export type StringPathJoin<T extends string[], D extends string> = T extends []
  ? never
  : T extends [infer F]
  ? F
  : T extends [infer F, ...infer R]
  ? F extends string
    ? `${F}${D}${StringPathJoin<Extract<R, string[]>, D>}`
    : never
  : string;
