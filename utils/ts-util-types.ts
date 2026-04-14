export type OptionalField<T, K extends keyof T> = Omit<T, K> & Partial<T>;
export type XOR<T, U> =
  | (T & { [K in keyof U]?: never })
  | (U & { [K in keyof T]?: never });
