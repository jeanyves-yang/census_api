census_api

# census_api

## Table of contents

### Functions

- [default](api/README.md#default)

## Functions

### default

▸ **default**(`req`, `res`): `any`

Express instance itself is a request handler, which could be invoked without
third argument.

#### Parameters

| Name  | Type                                                                                                      |
| :---- | :-------------------------------------------------------------------------------------------------------- |
| `req` | `IncomingMessage` \| `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `res` | `ServerResponse` \| `Response`<`any`, `Record`<`string`, `any`\>, `number`\>                              |

#### Returns

`any`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:1052

▸ **default**(`req`, `res`, `next`): `void`

#### Parameters

| Name   | Type                                                                                 |
| :----- | :----------------------------------------------------------------------------------- |
| `req`  | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> |
| `res`  | `Response`<`any`, `Record`<`string`, `any`\>, `number`\>                             |
| `next` | `NextFunction`                                                                       |

#### Returns

`void`

#### Defined in

node_modules/@types/express-serve-static-core/index.d.ts:66
