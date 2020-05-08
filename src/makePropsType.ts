import { PropOptions } from "vue/types/options";

type Constructor<T> = new (...args: any[]) => T & object;
type PropsType<T> = Constructor<T> | (() => T);
type SomeOf<T> = T | T[];
type isPrimitive = string | number | boolean | null | undefined | Symbol;

export const makePropsType = <T = any>(
  type?: SomeOf<PropsType<T>>,
  required?: boolean,
  defaultProp?: T extends isPrimitive ? T : () => T,
  validator?: (value: unknown) => value is T
): typeof required extends true
  ? PropOptions<T>
  : PropOptions<T | undefined> => {
  return {
    type,
    required,
    default: defaultProp,
    validator,
  };
};
