export type KeysMatchingPattern<T extends string, Pattern extends string> = T extends Pattern ? T : never;
