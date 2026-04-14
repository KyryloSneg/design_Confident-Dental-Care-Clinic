/**
 * Iterate through object's TYPED pairs of key - value
 */
export const entries = <T extends object>(obj: T) => {
  return Object.entries(obj) as [keyof T, T[keyof T]][];
};
