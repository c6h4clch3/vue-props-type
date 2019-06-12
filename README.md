# Vue Props Type

Helper function to define typed-props in Vue.js.

## Install

```bash
$ npm install --save vue-props-type
```

or

```bash
$ yarn add vue-props-type
```

## Usage

```ts
import Vue from "vue";
import { makePropsType } from "vue-props-type";

export default Vue.extend({
  props: {
    strValue: makePropsType(String, true),
    numArrValue: makePropsType<number>(Array, true),
    optionalValue: makePropsType(String, false, "default"),
    validatedValue: makePropsType(
      String,
      false,
      "default",
      (value: unknown): value is string => {}
    )
  }
});
```

### Signature

```ts
makePropsType<T>(type?, required?, default?, validator?);
```

### Parameters

#### type

optional

type: `() => T | (new () => T) | ((() => T) | (new () => T))[])`

The same as `type` property of `PropsOptions<T>`.
Add validation with `instanceof` operator to runtime-validation.
`null` or `undefined` passes through this validation.

#### required

optional

type: `boolean`

The same as `required` property of `PropsOptions<T>`.
Add validation that refuses `null` or `undefined` to runtime-validation.

#### default

optional

type: `T | () => T`

The same as `default` property of `PropsOptions<T>`.
If the prop is not given, Vue uses this as the prop.
If `T` is not primitive, you must provide a function that returns the default value.
(Don't worry, type-inference will guides you.)

#### validator

optional

type: `(value: unknown) => value is T`

It is like as `validator` method of `PropsOptions<T>`.
The difference is the type of argument. (`T` -> `unknown`)
