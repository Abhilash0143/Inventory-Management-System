
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model inbound_innerboxes
 * 
 */
export type inbound_innerboxes = $Result.DefaultSelection<Prisma.$inbound_innerboxesPayload>
/**
 * Model inbound_items
 * 
 */
export type inbound_items = $Result.DefaultSelection<Prisma.$inbound_itemsPayload>
/**
 * Model inbound_sessions
 * 
 */
export type inbound_sessions = $Result.DefaultSelection<Prisma.$inbound_sessionsPayload>
/**
 * Model operators
 * 
 */
export type operators = $Result.DefaultSelection<Prisma.$operatorsPayload>
/**
 * Model push_subscriptions
 * 
 */
export type push_subscriptions = $Result.DefaultSelection<Prisma.$push_subscriptionsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Inbound_innerboxes
 * const inbound_innerboxes = await prisma.inbound_innerboxes.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Inbound_innerboxes
   * const inbound_innerboxes = await prisma.inbound_innerboxes.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.inbound_innerboxes`: Exposes CRUD operations for the **inbound_innerboxes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inbound_innerboxes
    * const inbound_innerboxes = await prisma.inbound_innerboxes.findMany()
    * ```
    */
  get inbound_innerboxes(): Prisma.inbound_innerboxesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inbound_items`: Exposes CRUD operations for the **inbound_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inbound_items
    * const inbound_items = await prisma.inbound_items.findMany()
    * ```
    */
  get inbound_items(): Prisma.inbound_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inbound_sessions`: Exposes CRUD operations for the **inbound_sessions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inbound_sessions
    * const inbound_sessions = await prisma.inbound_sessions.findMany()
    * ```
    */
  get inbound_sessions(): Prisma.inbound_sessionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.operators`: Exposes CRUD operations for the **operators** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Operators
    * const operators = await prisma.operators.findMany()
    * ```
    */
  get operators(): Prisma.operatorsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.push_subscriptions`: Exposes CRUD operations for the **push_subscriptions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Push_subscriptions
    * const push_subscriptions = await prisma.push_subscriptions.findMany()
    * ```
    */
  get push_subscriptions(): Prisma.push_subscriptionsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.0
   * Query Engine version: ab56fe763f921d033a6c195e7ddeb3e255bdbb57
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    inbound_innerboxes: 'inbound_innerboxes',
    inbound_items: 'inbound_items',
    inbound_sessions: 'inbound_sessions',
    operators: 'operators',
    push_subscriptions: 'push_subscriptions'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "inbound_innerboxes" | "inbound_items" | "inbound_sessions" | "operators" | "push_subscriptions"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      inbound_innerboxes: {
        payload: Prisma.$inbound_innerboxesPayload<ExtArgs>
        fields: Prisma.inbound_innerboxesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inbound_innerboxesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_innerboxesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inbound_innerboxesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_innerboxesPayload>
          }
          findFirst: {
            args: Prisma.inbound_innerboxesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_innerboxesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inbound_innerboxesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_innerboxesPayload>
          }
          findMany: {
            args: Prisma.inbound_innerboxesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_innerboxesPayload>[]
          }
          create: {
            args: Prisma.inbound_innerboxesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_innerboxesPayload>
          }
          createMany: {
            args: Prisma.inbound_innerboxesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.inbound_innerboxesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_innerboxesPayload>[]
          }
          delete: {
            args: Prisma.inbound_innerboxesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_innerboxesPayload>
          }
          update: {
            args: Prisma.inbound_innerboxesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_innerboxesPayload>
          }
          deleteMany: {
            args: Prisma.inbound_innerboxesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inbound_innerboxesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.inbound_innerboxesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_innerboxesPayload>[]
          }
          upsert: {
            args: Prisma.inbound_innerboxesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_innerboxesPayload>
          }
          aggregate: {
            args: Prisma.Inbound_innerboxesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInbound_innerboxes>
          }
          groupBy: {
            args: Prisma.inbound_innerboxesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Inbound_innerboxesGroupByOutputType>[]
          }
          count: {
            args: Prisma.inbound_innerboxesCountArgs<ExtArgs>
            result: $Utils.Optional<Inbound_innerboxesCountAggregateOutputType> | number
          }
        }
      }
      inbound_items: {
        payload: Prisma.$inbound_itemsPayload<ExtArgs>
        fields: Prisma.inbound_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inbound_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inbound_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_itemsPayload>
          }
          findFirst: {
            args: Prisma.inbound_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inbound_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_itemsPayload>
          }
          findMany: {
            args: Prisma.inbound_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_itemsPayload>[]
          }
          create: {
            args: Prisma.inbound_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_itemsPayload>
          }
          createMany: {
            args: Prisma.inbound_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.inbound_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_itemsPayload>[]
          }
          delete: {
            args: Prisma.inbound_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_itemsPayload>
          }
          update: {
            args: Prisma.inbound_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_itemsPayload>
          }
          deleteMany: {
            args: Prisma.inbound_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inbound_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.inbound_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_itemsPayload>[]
          }
          upsert: {
            args: Prisma.inbound_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_itemsPayload>
          }
          aggregate: {
            args: Prisma.Inbound_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInbound_items>
          }
          groupBy: {
            args: Prisma.inbound_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Inbound_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.inbound_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Inbound_itemsCountAggregateOutputType> | number
          }
        }
      }
      inbound_sessions: {
        payload: Prisma.$inbound_sessionsPayload<ExtArgs>
        fields: Prisma.inbound_sessionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.inbound_sessionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_sessionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.inbound_sessionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_sessionsPayload>
          }
          findFirst: {
            args: Prisma.inbound_sessionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_sessionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.inbound_sessionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_sessionsPayload>
          }
          findMany: {
            args: Prisma.inbound_sessionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_sessionsPayload>[]
          }
          create: {
            args: Prisma.inbound_sessionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_sessionsPayload>
          }
          createMany: {
            args: Prisma.inbound_sessionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.inbound_sessionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_sessionsPayload>[]
          }
          delete: {
            args: Prisma.inbound_sessionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_sessionsPayload>
          }
          update: {
            args: Prisma.inbound_sessionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_sessionsPayload>
          }
          deleteMany: {
            args: Prisma.inbound_sessionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.inbound_sessionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.inbound_sessionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_sessionsPayload>[]
          }
          upsert: {
            args: Prisma.inbound_sessionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$inbound_sessionsPayload>
          }
          aggregate: {
            args: Prisma.Inbound_sessionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInbound_sessions>
          }
          groupBy: {
            args: Prisma.inbound_sessionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Inbound_sessionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.inbound_sessionsCountArgs<ExtArgs>
            result: $Utils.Optional<Inbound_sessionsCountAggregateOutputType> | number
          }
        }
      }
      operators: {
        payload: Prisma.$operatorsPayload<ExtArgs>
        fields: Prisma.operatorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.operatorsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operatorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.operatorsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operatorsPayload>
          }
          findFirst: {
            args: Prisma.operatorsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operatorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.operatorsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operatorsPayload>
          }
          findMany: {
            args: Prisma.operatorsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operatorsPayload>[]
          }
          create: {
            args: Prisma.operatorsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operatorsPayload>
          }
          createMany: {
            args: Prisma.operatorsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.operatorsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operatorsPayload>[]
          }
          delete: {
            args: Prisma.operatorsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operatorsPayload>
          }
          update: {
            args: Prisma.operatorsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operatorsPayload>
          }
          deleteMany: {
            args: Prisma.operatorsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.operatorsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.operatorsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operatorsPayload>[]
          }
          upsert: {
            args: Prisma.operatorsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$operatorsPayload>
          }
          aggregate: {
            args: Prisma.OperatorsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOperators>
          }
          groupBy: {
            args: Prisma.operatorsGroupByArgs<ExtArgs>
            result: $Utils.Optional<OperatorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.operatorsCountArgs<ExtArgs>
            result: $Utils.Optional<OperatorsCountAggregateOutputType> | number
          }
        }
      }
      push_subscriptions: {
        payload: Prisma.$push_subscriptionsPayload<ExtArgs>
        fields: Prisma.push_subscriptionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.push_subscriptionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.push_subscriptionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionsPayload>
          }
          findFirst: {
            args: Prisma.push_subscriptionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.push_subscriptionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionsPayload>
          }
          findMany: {
            args: Prisma.push_subscriptionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionsPayload>[]
          }
          create: {
            args: Prisma.push_subscriptionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionsPayload>
          }
          createMany: {
            args: Prisma.push_subscriptionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.push_subscriptionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionsPayload>[]
          }
          delete: {
            args: Prisma.push_subscriptionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionsPayload>
          }
          update: {
            args: Prisma.push_subscriptionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionsPayload>
          }
          deleteMany: {
            args: Prisma.push_subscriptionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.push_subscriptionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.push_subscriptionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionsPayload>[]
          }
          upsert: {
            args: Prisma.push_subscriptionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$push_subscriptionsPayload>
          }
          aggregate: {
            args: Prisma.Push_subscriptionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePush_subscriptions>
          }
          groupBy: {
            args: Prisma.push_subscriptionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Push_subscriptionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.push_subscriptionsCountArgs<ExtArgs>
            result: $Utils.Optional<Push_subscriptionsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    inbound_innerboxes?: inbound_innerboxesOmit
    inbound_items?: inbound_itemsOmit
    inbound_sessions?: inbound_sessionsOmit
    operators?: operatorsOmit
    push_subscriptions?: push_subscriptionsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model inbound_innerboxes
   */

  export type AggregateInbound_innerboxes = {
    _count: Inbound_innerboxesCountAggregateOutputType | null
    _avg: Inbound_innerboxesAvgAggregateOutputType | null
    _sum: Inbound_innerboxesSumAggregateOutputType | null
    _min: Inbound_innerboxesMinAggregateOutputType | null
    _max: Inbound_innerboxesMaxAggregateOutputType | null
  }

  export type Inbound_innerboxesAvgAggregateOutputType = {
    expected_qty: number | null
  }

  export type Inbound_innerboxesSumAggregateOutputType = {
    expected_qty: number | null
  }

  export type Inbound_innerboxesMinAggregateOutputType = {
    outerbox_id: string | null
    innerbox_id: string | null
    expected_qty: number | null
    packed_by: string | null
    status: string | null
    claimed_at: Date | null
    last_seen_at: Date | null
  }

  export type Inbound_innerboxesMaxAggregateOutputType = {
    outerbox_id: string | null
    innerbox_id: string | null
    expected_qty: number | null
    packed_by: string | null
    status: string | null
    claimed_at: Date | null
    last_seen_at: Date | null
  }

  export type Inbound_innerboxesCountAggregateOutputType = {
    outerbox_id: number
    innerbox_id: number
    expected_qty: number
    packed_by: number
    status: number
    claimed_at: number
    last_seen_at: number
    _all: number
  }


  export type Inbound_innerboxesAvgAggregateInputType = {
    expected_qty?: true
  }

  export type Inbound_innerboxesSumAggregateInputType = {
    expected_qty?: true
  }

  export type Inbound_innerboxesMinAggregateInputType = {
    outerbox_id?: true
    innerbox_id?: true
    expected_qty?: true
    packed_by?: true
    status?: true
    claimed_at?: true
    last_seen_at?: true
  }

  export type Inbound_innerboxesMaxAggregateInputType = {
    outerbox_id?: true
    innerbox_id?: true
    expected_qty?: true
    packed_by?: true
    status?: true
    claimed_at?: true
    last_seen_at?: true
  }

  export type Inbound_innerboxesCountAggregateInputType = {
    outerbox_id?: true
    innerbox_id?: true
    expected_qty?: true
    packed_by?: true
    status?: true
    claimed_at?: true
    last_seen_at?: true
    _all?: true
  }

  export type Inbound_innerboxesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inbound_innerboxes to aggregate.
     */
    where?: inbound_innerboxesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inbound_innerboxes to fetch.
     */
    orderBy?: inbound_innerboxesOrderByWithRelationInput | inbound_innerboxesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inbound_innerboxesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inbound_innerboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inbound_innerboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inbound_innerboxes
    **/
    _count?: true | Inbound_innerboxesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Inbound_innerboxesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Inbound_innerboxesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Inbound_innerboxesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Inbound_innerboxesMaxAggregateInputType
  }

  export type GetInbound_innerboxesAggregateType<T extends Inbound_innerboxesAggregateArgs> = {
        [P in keyof T & keyof AggregateInbound_innerboxes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInbound_innerboxes[P]>
      : GetScalarType<T[P], AggregateInbound_innerboxes[P]>
  }




  export type inbound_innerboxesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inbound_innerboxesWhereInput
    orderBy?: inbound_innerboxesOrderByWithAggregationInput | inbound_innerboxesOrderByWithAggregationInput[]
    by: Inbound_innerboxesScalarFieldEnum[] | Inbound_innerboxesScalarFieldEnum
    having?: inbound_innerboxesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Inbound_innerboxesCountAggregateInputType | true
    _avg?: Inbound_innerboxesAvgAggregateInputType
    _sum?: Inbound_innerboxesSumAggregateInputType
    _min?: Inbound_innerboxesMinAggregateInputType
    _max?: Inbound_innerboxesMaxAggregateInputType
  }

  export type Inbound_innerboxesGroupByOutputType = {
    outerbox_id: string
    innerbox_id: string
    expected_qty: number
    packed_by: string
    status: string
    claimed_at: Date
    last_seen_at: Date
    _count: Inbound_innerboxesCountAggregateOutputType | null
    _avg: Inbound_innerboxesAvgAggregateOutputType | null
    _sum: Inbound_innerboxesSumAggregateOutputType | null
    _min: Inbound_innerboxesMinAggregateOutputType | null
    _max: Inbound_innerboxesMaxAggregateOutputType | null
  }

  type GetInbound_innerboxesGroupByPayload<T extends inbound_innerboxesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Inbound_innerboxesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Inbound_innerboxesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Inbound_innerboxesGroupByOutputType[P]>
            : GetScalarType<T[P], Inbound_innerboxesGroupByOutputType[P]>
        }
      >
    >


  export type inbound_innerboxesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    outerbox_id?: boolean
    innerbox_id?: boolean
    expected_qty?: boolean
    packed_by?: boolean
    status?: boolean
    claimed_at?: boolean
    last_seen_at?: boolean
  }, ExtArgs["result"]["inbound_innerboxes"]>

  export type inbound_innerboxesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    outerbox_id?: boolean
    innerbox_id?: boolean
    expected_qty?: boolean
    packed_by?: boolean
    status?: boolean
    claimed_at?: boolean
    last_seen_at?: boolean
  }, ExtArgs["result"]["inbound_innerboxes"]>

  export type inbound_innerboxesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    outerbox_id?: boolean
    innerbox_id?: boolean
    expected_qty?: boolean
    packed_by?: boolean
    status?: boolean
    claimed_at?: boolean
    last_seen_at?: boolean
  }, ExtArgs["result"]["inbound_innerboxes"]>

  export type inbound_innerboxesSelectScalar = {
    outerbox_id?: boolean
    innerbox_id?: boolean
    expected_qty?: boolean
    packed_by?: boolean
    status?: boolean
    claimed_at?: boolean
    last_seen_at?: boolean
  }

  export type inbound_innerboxesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"outerbox_id" | "innerbox_id" | "expected_qty" | "packed_by" | "status" | "claimed_at" | "last_seen_at", ExtArgs["result"]["inbound_innerboxes"]>

  export type $inbound_innerboxesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inbound_innerboxes"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      outerbox_id: string
      innerbox_id: string
      expected_qty: number
      packed_by: string
      status: string
      claimed_at: Date
      last_seen_at: Date
    }, ExtArgs["result"]["inbound_innerboxes"]>
    composites: {}
  }

  type inbound_innerboxesGetPayload<S extends boolean | null | undefined | inbound_innerboxesDefaultArgs> = $Result.GetResult<Prisma.$inbound_innerboxesPayload, S>

  type inbound_innerboxesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inbound_innerboxesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Inbound_innerboxesCountAggregateInputType | true
    }

  export interface inbound_innerboxesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inbound_innerboxes'], meta: { name: 'inbound_innerboxes' } }
    /**
     * Find zero or one Inbound_innerboxes that matches the filter.
     * @param {inbound_innerboxesFindUniqueArgs} args - Arguments to find a Inbound_innerboxes
     * @example
     * // Get one Inbound_innerboxes
     * const inbound_innerboxes = await prisma.inbound_innerboxes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inbound_innerboxesFindUniqueArgs>(args: SelectSubset<T, inbound_innerboxesFindUniqueArgs<ExtArgs>>): Prisma__inbound_innerboxesClient<$Result.GetResult<Prisma.$inbound_innerboxesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inbound_innerboxes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inbound_innerboxesFindUniqueOrThrowArgs} args - Arguments to find a Inbound_innerboxes
     * @example
     * // Get one Inbound_innerboxes
     * const inbound_innerboxes = await prisma.inbound_innerboxes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inbound_innerboxesFindUniqueOrThrowArgs>(args: SelectSubset<T, inbound_innerboxesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inbound_innerboxesClient<$Result.GetResult<Prisma.$inbound_innerboxesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inbound_innerboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inbound_innerboxesFindFirstArgs} args - Arguments to find a Inbound_innerboxes
     * @example
     * // Get one Inbound_innerboxes
     * const inbound_innerboxes = await prisma.inbound_innerboxes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inbound_innerboxesFindFirstArgs>(args?: SelectSubset<T, inbound_innerboxesFindFirstArgs<ExtArgs>>): Prisma__inbound_innerboxesClient<$Result.GetResult<Prisma.$inbound_innerboxesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inbound_innerboxes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inbound_innerboxesFindFirstOrThrowArgs} args - Arguments to find a Inbound_innerboxes
     * @example
     * // Get one Inbound_innerboxes
     * const inbound_innerboxes = await prisma.inbound_innerboxes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inbound_innerboxesFindFirstOrThrowArgs>(args?: SelectSubset<T, inbound_innerboxesFindFirstOrThrowArgs<ExtArgs>>): Prisma__inbound_innerboxesClient<$Result.GetResult<Prisma.$inbound_innerboxesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inbound_innerboxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inbound_innerboxesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inbound_innerboxes
     * const inbound_innerboxes = await prisma.inbound_innerboxes.findMany()
     * 
     * // Get first 10 Inbound_innerboxes
     * const inbound_innerboxes = await prisma.inbound_innerboxes.findMany({ take: 10 })
     * 
     * // Only select the `outerbox_id`
     * const inbound_innerboxesWithOuterbox_idOnly = await prisma.inbound_innerboxes.findMany({ select: { outerbox_id: true } })
     * 
     */
    findMany<T extends inbound_innerboxesFindManyArgs>(args?: SelectSubset<T, inbound_innerboxesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inbound_innerboxesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inbound_innerboxes.
     * @param {inbound_innerboxesCreateArgs} args - Arguments to create a Inbound_innerboxes.
     * @example
     * // Create one Inbound_innerboxes
     * const Inbound_innerboxes = await prisma.inbound_innerboxes.create({
     *   data: {
     *     // ... data to create a Inbound_innerboxes
     *   }
     * })
     * 
     */
    create<T extends inbound_innerboxesCreateArgs>(args: SelectSubset<T, inbound_innerboxesCreateArgs<ExtArgs>>): Prisma__inbound_innerboxesClient<$Result.GetResult<Prisma.$inbound_innerboxesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inbound_innerboxes.
     * @param {inbound_innerboxesCreateManyArgs} args - Arguments to create many Inbound_innerboxes.
     * @example
     * // Create many Inbound_innerboxes
     * const inbound_innerboxes = await prisma.inbound_innerboxes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inbound_innerboxesCreateManyArgs>(args?: SelectSubset<T, inbound_innerboxesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inbound_innerboxes and returns the data saved in the database.
     * @param {inbound_innerboxesCreateManyAndReturnArgs} args - Arguments to create many Inbound_innerboxes.
     * @example
     * // Create many Inbound_innerboxes
     * const inbound_innerboxes = await prisma.inbound_innerboxes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inbound_innerboxes and only return the `outerbox_id`
     * const inbound_innerboxesWithOuterbox_idOnly = await prisma.inbound_innerboxes.createManyAndReturn({
     *   select: { outerbox_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends inbound_innerboxesCreateManyAndReturnArgs>(args?: SelectSubset<T, inbound_innerboxesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inbound_innerboxesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inbound_innerboxes.
     * @param {inbound_innerboxesDeleteArgs} args - Arguments to delete one Inbound_innerboxes.
     * @example
     * // Delete one Inbound_innerboxes
     * const Inbound_innerboxes = await prisma.inbound_innerboxes.delete({
     *   where: {
     *     // ... filter to delete one Inbound_innerboxes
     *   }
     * })
     * 
     */
    delete<T extends inbound_innerboxesDeleteArgs>(args: SelectSubset<T, inbound_innerboxesDeleteArgs<ExtArgs>>): Prisma__inbound_innerboxesClient<$Result.GetResult<Prisma.$inbound_innerboxesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inbound_innerboxes.
     * @param {inbound_innerboxesUpdateArgs} args - Arguments to update one Inbound_innerboxes.
     * @example
     * // Update one Inbound_innerboxes
     * const inbound_innerboxes = await prisma.inbound_innerboxes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inbound_innerboxesUpdateArgs>(args: SelectSubset<T, inbound_innerboxesUpdateArgs<ExtArgs>>): Prisma__inbound_innerboxesClient<$Result.GetResult<Prisma.$inbound_innerboxesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inbound_innerboxes.
     * @param {inbound_innerboxesDeleteManyArgs} args - Arguments to filter Inbound_innerboxes to delete.
     * @example
     * // Delete a few Inbound_innerboxes
     * const { count } = await prisma.inbound_innerboxes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inbound_innerboxesDeleteManyArgs>(args?: SelectSubset<T, inbound_innerboxesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inbound_innerboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inbound_innerboxesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inbound_innerboxes
     * const inbound_innerboxes = await prisma.inbound_innerboxes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inbound_innerboxesUpdateManyArgs>(args: SelectSubset<T, inbound_innerboxesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inbound_innerboxes and returns the data updated in the database.
     * @param {inbound_innerboxesUpdateManyAndReturnArgs} args - Arguments to update many Inbound_innerboxes.
     * @example
     * // Update many Inbound_innerboxes
     * const inbound_innerboxes = await prisma.inbound_innerboxes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inbound_innerboxes and only return the `outerbox_id`
     * const inbound_innerboxesWithOuterbox_idOnly = await prisma.inbound_innerboxes.updateManyAndReturn({
     *   select: { outerbox_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends inbound_innerboxesUpdateManyAndReturnArgs>(args: SelectSubset<T, inbound_innerboxesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inbound_innerboxesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inbound_innerboxes.
     * @param {inbound_innerboxesUpsertArgs} args - Arguments to update or create a Inbound_innerboxes.
     * @example
     * // Update or create a Inbound_innerboxes
     * const inbound_innerboxes = await prisma.inbound_innerboxes.upsert({
     *   create: {
     *     // ... data to create a Inbound_innerboxes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inbound_innerboxes we want to update
     *   }
     * })
     */
    upsert<T extends inbound_innerboxesUpsertArgs>(args: SelectSubset<T, inbound_innerboxesUpsertArgs<ExtArgs>>): Prisma__inbound_innerboxesClient<$Result.GetResult<Prisma.$inbound_innerboxesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inbound_innerboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inbound_innerboxesCountArgs} args - Arguments to filter Inbound_innerboxes to count.
     * @example
     * // Count the number of Inbound_innerboxes
     * const count = await prisma.inbound_innerboxes.count({
     *   where: {
     *     // ... the filter for the Inbound_innerboxes we want to count
     *   }
     * })
    **/
    count<T extends inbound_innerboxesCountArgs>(
      args?: Subset<T, inbound_innerboxesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Inbound_innerboxesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inbound_innerboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Inbound_innerboxesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Inbound_innerboxesAggregateArgs>(args: Subset<T, Inbound_innerboxesAggregateArgs>): Prisma.PrismaPromise<GetInbound_innerboxesAggregateType<T>>

    /**
     * Group by Inbound_innerboxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inbound_innerboxesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inbound_innerboxesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inbound_innerboxesGroupByArgs['orderBy'] }
        : { orderBy?: inbound_innerboxesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inbound_innerboxesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInbound_innerboxesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inbound_innerboxes model
   */
  readonly fields: inbound_innerboxesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inbound_innerboxes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inbound_innerboxesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the inbound_innerboxes model
   */
  interface inbound_innerboxesFieldRefs {
    readonly outerbox_id: FieldRef<"inbound_innerboxes", 'String'>
    readonly innerbox_id: FieldRef<"inbound_innerboxes", 'String'>
    readonly expected_qty: FieldRef<"inbound_innerboxes", 'Int'>
    readonly packed_by: FieldRef<"inbound_innerboxes", 'String'>
    readonly status: FieldRef<"inbound_innerboxes", 'String'>
    readonly claimed_at: FieldRef<"inbound_innerboxes", 'DateTime'>
    readonly last_seen_at: FieldRef<"inbound_innerboxes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * inbound_innerboxes findUnique
   */
  export type inbound_innerboxesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_innerboxes
     */
    select?: inbound_innerboxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_innerboxes
     */
    omit?: inbound_innerboxesOmit<ExtArgs> | null
    /**
     * Filter, which inbound_innerboxes to fetch.
     */
    where: inbound_innerboxesWhereUniqueInput
  }

  /**
   * inbound_innerboxes findUniqueOrThrow
   */
  export type inbound_innerboxesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_innerboxes
     */
    select?: inbound_innerboxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_innerboxes
     */
    omit?: inbound_innerboxesOmit<ExtArgs> | null
    /**
     * Filter, which inbound_innerboxes to fetch.
     */
    where: inbound_innerboxesWhereUniqueInput
  }

  /**
   * inbound_innerboxes findFirst
   */
  export type inbound_innerboxesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_innerboxes
     */
    select?: inbound_innerboxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_innerboxes
     */
    omit?: inbound_innerboxesOmit<ExtArgs> | null
    /**
     * Filter, which inbound_innerboxes to fetch.
     */
    where?: inbound_innerboxesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inbound_innerboxes to fetch.
     */
    orderBy?: inbound_innerboxesOrderByWithRelationInput | inbound_innerboxesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inbound_innerboxes.
     */
    cursor?: inbound_innerboxesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inbound_innerboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inbound_innerboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inbound_innerboxes.
     */
    distinct?: Inbound_innerboxesScalarFieldEnum | Inbound_innerboxesScalarFieldEnum[]
  }

  /**
   * inbound_innerboxes findFirstOrThrow
   */
  export type inbound_innerboxesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_innerboxes
     */
    select?: inbound_innerboxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_innerboxes
     */
    omit?: inbound_innerboxesOmit<ExtArgs> | null
    /**
     * Filter, which inbound_innerboxes to fetch.
     */
    where?: inbound_innerboxesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inbound_innerboxes to fetch.
     */
    orderBy?: inbound_innerboxesOrderByWithRelationInput | inbound_innerboxesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inbound_innerboxes.
     */
    cursor?: inbound_innerboxesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inbound_innerboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inbound_innerboxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inbound_innerboxes.
     */
    distinct?: Inbound_innerboxesScalarFieldEnum | Inbound_innerboxesScalarFieldEnum[]
  }

  /**
   * inbound_innerboxes findMany
   */
  export type inbound_innerboxesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_innerboxes
     */
    select?: inbound_innerboxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_innerboxes
     */
    omit?: inbound_innerboxesOmit<ExtArgs> | null
    /**
     * Filter, which inbound_innerboxes to fetch.
     */
    where?: inbound_innerboxesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inbound_innerboxes to fetch.
     */
    orderBy?: inbound_innerboxesOrderByWithRelationInput | inbound_innerboxesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inbound_innerboxes.
     */
    cursor?: inbound_innerboxesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inbound_innerboxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inbound_innerboxes.
     */
    skip?: number
    distinct?: Inbound_innerboxesScalarFieldEnum | Inbound_innerboxesScalarFieldEnum[]
  }

  /**
   * inbound_innerboxes create
   */
  export type inbound_innerboxesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_innerboxes
     */
    select?: inbound_innerboxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_innerboxes
     */
    omit?: inbound_innerboxesOmit<ExtArgs> | null
    /**
     * The data needed to create a inbound_innerboxes.
     */
    data: XOR<inbound_innerboxesCreateInput, inbound_innerboxesUncheckedCreateInput>
  }

  /**
   * inbound_innerboxes createMany
   */
  export type inbound_innerboxesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inbound_innerboxes.
     */
    data: inbound_innerboxesCreateManyInput | inbound_innerboxesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inbound_innerboxes createManyAndReturn
   */
  export type inbound_innerboxesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_innerboxes
     */
    select?: inbound_innerboxesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_innerboxes
     */
    omit?: inbound_innerboxesOmit<ExtArgs> | null
    /**
     * The data used to create many inbound_innerboxes.
     */
    data: inbound_innerboxesCreateManyInput | inbound_innerboxesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inbound_innerboxes update
   */
  export type inbound_innerboxesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_innerboxes
     */
    select?: inbound_innerboxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_innerboxes
     */
    omit?: inbound_innerboxesOmit<ExtArgs> | null
    /**
     * The data needed to update a inbound_innerboxes.
     */
    data: XOR<inbound_innerboxesUpdateInput, inbound_innerboxesUncheckedUpdateInput>
    /**
     * Choose, which inbound_innerboxes to update.
     */
    where: inbound_innerboxesWhereUniqueInput
  }

  /**
   * inbound_innerboxes updateMany
   */
  export type inbound_innerboxesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inbound_innerboxes.
     */
    data: XOR<inbound_innerboxesUpdateManyMutationInput, inbound_innerboxesUncheckedUpdateManyInput>
    /**
     * Filter which inbound_innerboxes to update
     */
    where?: inbound_innerboxesWhereInput
    /**
     * Limit how many inbound_innerboxes to update.
     */
    limit?: number
  }

  /**
   * inbound_innerboxes updateManyAndReturn
   */
  export type inbound_innerboxesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_innerboxes
     */
    select?: inbound_innerboxesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_innerboxes
     */
    omit?: inbound_innerboxesOmit<ExtArgs> | null
    /**
     * The data used to update inbound_innerboxes.
     */
    data: XOR<inbound_innerboxesUpdateManyMutationInput, inbound_innerboxesUncheckedUpdateManyInput>
    /**
     * Filter which inbound_innerboxes to update
     */
    where?: inbound_innerboxesWhereInput
    /**
     * Limit how many inbound_innerboxes to update.
     */
    limit?: number
  }

  /**
   * inbound_innerboxes upsert
   */
  export type inbound_innerboxesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_innerboxes
     */
    select?: inbound_innerboxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_innerboxes
     */
    omit?: inbound_innerboxesOmit<ExtArgs> | null
    /**
     * The filter to search for the inbound_innerboxes to update in case it exists.
     */
    where: inbound_innerboxesWhereUniqueInput
    /**
     * In case the inbound_innerboxes found by the `where` argument doesn't exist, create a new inbound_innerboxes with this data.
     */
    create: XOR<inbound_innerboxesCreateInput, inbound_innerboxesUncheckedCreateInput>
    /**
     * In case the inbound_innerboxes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inbound_innerboxesUpdateInput, inbound_innerboxesUncheckedUpdateInput>
  }

  /**
   * inbound_innerboxes delete
   */
  export type inbound_innerboxesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_innerboxes
     */
    select?: inbound_innerboxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_innerboxes
     */
    omit?: inbound_innerboxesOmit<ExtArgs> | null
    /**
     * Filter which inbound_innerboxes to delete.
     */
    where: inbound_innerboxesWhereUniqueInput
  }

  /**
   * inbound_innerboxes deleteMany
   */
  export type inbound_innerboxesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inbound_innerboxes to delete
     */
    where?: inbound_innerboxesWhereInput
    /**
     * Limit how many inbound_innerboxes to delete.
     */
    limit?: number
  }

  /**
   * inbound_innerboxes without action
   */
  export type inbound_innerboxesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_innerboxes
     */
    select?: inbound_innerboxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_innerboxes
     */
    omit?: inbound_innerboxesOmit<ExtArgs> | null
  }


  /**
   * Model inbound_items
   */

  export type AggregateInbound_items = {
    _count: Inbound_itemsCountAggregateOutputType | null
    _avg: Inbound_itemsAvgAggregateOutputType | null
    _sum: Inbound_itemsSumAggregateOutputType | null
    _min: Inbound_itemsMinAggregateOutputType | null
    _max: Inbound_itemsMaxAggregateOutputType | null
  }

  export type Inbound_itemsAvgAggregateOutputType = {
    id: number | null
    session_id: number | null
  }

  export type Inbound_itemsSumAggregateOutputType = {
    id: bigint | null
    session_id: bigint | null
  }

  export type Inbound_itemsMinAggregateOutputType = {
    id: bigint | null
    outerbox_id: string | null
    innerbox_id: string | null
    sku: string | null
    serial_number: string | null
    created_at: Date | null
    packed_by: string | null
    session_id: bigint | null
  }

  export type Inbound_itemsMaxAggregateOutputType = {
    id: bigint | null
    outerbox_id: string | null
    innerbox_id: string | null
    sku: string | null
    serial_number: string | null
    created_at: Date | null
    packed_by: string | null
    session_id: bigint | null
  }

  export type Inbound_itemsCountAggregateOutputType = {
    id: number
    outerbox_id: number
    innerbox_id: number
    sku: number
    serial_number: number
    created_at: number
    packed_by: number
    session_id: number
    _all: number
  }


  export type Inbound_itemsAvgAggregateInputType = {
    id?: true
    session_id?: true
  }

  export type Inbound_itemsSumAggregateInputType = {
    id?: true
    session_id?: true
  }

  export type Inbound_itemsMinAggregateInputType = {
    id?: true
    outerbox_id?: true
    innerbox_id?: true
    sku?: true
    serial_number?: true
    created_at?: true
    packed_by?: true
    session_id?: true
  }

  export type Inbound_itemsMaxAggregateInputType = {
    id?: true
    outerbox_id?: true
    innerbox_id?: true
    sku?: true
    serial_number?: true
    created_at?: true
    packed_by?: true
    session_id?: true
  }

  export type Inbound_itemsCountAggregateInputType = {
    id?: true
    outerbox_id?: true
    innerbox_id?: true
    sku?: true
    serial_number?: true
    created_at?: true
    packed_by?: true
    session_id?: true
    _all?: true
  }

  export type Inbound_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inbound_items to aggregate.
     */
    where?: inbound_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inbound_items to fetch.
     */
    orderBy?: inbound_itemsOrderByWithRelationInput | inbound_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inbound_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inbound_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inbound_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inbound_items
    **/
    _count?: true | Inbound_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Inbound_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Inbound_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Inbound_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Inbound_itemsMaxAggregateInputType
  }

  export type GetInbound_itemsAggregateType<T extends Inbound_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateInbound_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInbound_items[P]>
      : GetScalarType<T[P], AggregateInbound_items[P]>
  }




  export type inbound_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inbound_itemsWhereInput
    orderBy?: inbound_itemsOrderByWithAggregationInput | inbound_itemsOrderByWithAggregationInput[]
    by: Inbound_itemsScalarFieldEnum[] | Inbound_itemsScalarFieldEnum
    having?: inbound_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Inbound_itemsCountAggregateInputType | true
    _avg?: Inbound_itemsAvgAggregateInputType
    _sum?: Inbound_itemsSumAggregateInputType
    _min?: Inbound_itemsMinAggregateInputType
    _max?: Inbound_itemsMaxAggregateInputType
  }

  export type Inbound_itemsGroupByOutputType = {
    id: bigint
    outerbox_id: string
    innerbox_id: string
    sku: string
    serial_number: string
    created_at: Date
    packed_by: string | null
    session_id: bigint | null
    _count: Inbound_itemsCountAggregateOutputType | null
    _avg: Inbound_itemsAvgAggregateOutputType | null
    _sum: Inbound_itemsSumAggregateOutputType | null
    _min: Inbound_itemsMinAggregateOutputType | null
    _max: Inbound_itemsMaxAggregateOutputType | null
  }

  type GetInbound_itemsGroupByPayload<T extends inbound_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Inbound_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Inbound_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Inbound_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Inbound_itemsGroupByOutputType[P]>
        }
      >
    >


  export type inbound_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outerbox_id?: boolean
    innerbox_id?: boolean
    sku?: boolean
    serial_number?: boolean
    created_at?: boolean
    packed_by?: boolean
    session_id?: boolean
  }, ExtArgs["result"]["inbound_items"]>

  export type inbound_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outerbox_id?: boolean
    innerbox_id?: boolean
    sku?: boolean
    serial_number?: boolean
    created_at?: boolean
    packed_by?: boolean
    session_id?: boolean
  }, ExtArgs["result"]["inbound_items"]>

  export type inbound_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outerbox_id?: boolean
    innerbox_id?: boolean
    sku?: boolean
    serial_number?: boolean
    created_at?: boolean
    packed_by?: boolean
    session_id?: boolean
  }, ExtArgs["result"]["inbound_items"]>

  export type inbound_itemsSelectScalar = {
    id?: boolean
    outerbox_id?: boolean
    innerbox_id?: boolean
    sku?: boolean
    serial_number?: boolean
    created_at?: boolean
    packed_by?: boolean
    session_id?: boolean
  }

  export type inbound_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "outerbox_id" | "innerbox_id" | "sku" | "serial_number" | "created_at" | "packed_by" | "session_id", ExtArgs["result"]["inbound_items"]>

  export type $inbound_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inbound_items"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      outerbox_id: string
      innerbox_id: string
      sku: string
      serial_number: string
      created_at: Date
      packed_by: string | null
      session_id: bigint | null
    }, ExtArgs["result"]["inbound_items"]>
    composites: {}
  }

  type inbound_itemsGetPayload<S extends boolean | null | undefined | inbound_itemsDefaultArgs> = $Result.GetResult<Prisma.$inbound_itemsPayload, S>

  type inbound_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inbound_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Inbound_itemsCountAggregateInputType | true
    }

  export interface inbound_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inbound_items'], meta: { name: 'inbound_items' } }
    /**
     * Find zero or one Inbound_items that matches the filter.
     * @param {inbound_itemsFindUniqueArgs} args - Arguments to find a Inbound_items
     * @example
     * // Get one Inbound_items
     * const inbound_items = await prisma.inbound_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inbound_itemsFindUniqueArgs>(args: SelectSubset<T, inbound_itemsFindUniqueArgs<ExtArgs>>): Prisma__inbound_itemsClient<$Result.GetResult<Prisma.$inbound_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inbound_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inbound_itemsFindUniqueOrThrowArgs} args - Arguments to find a Inbound_items
     * @example
     * // Get one Inbound_items
     * const inbound_items = await prisma.inbound_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inbound_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, inbound_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inbound_itemsClient<$Result.GetResult<Prisma.$inbound_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inbound_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inbound_itemsFindFirstArgs} args - Arguments to find a Inbound_items
     * @example
     * // Get one Inbound_items
     * const inbound_items = await prisma.inbound_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inbound_itemsFindFirstArgs>(args?: SelectSubset<T, inbound_itemsFindFirstArgs<ExtArgs>>): Prisma__inbound_itemsClient<$Result.GetResult<Prisma.$inbound_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inbound_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inbound_itemsFindFirstOrThrowArgs} args - Arguments to find a Inbound_items
     * @example
     * // Get one Inbound_items
     * const inbound_items = await prisma.inbound_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inbound_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, inbound_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__inbound_itemsClient<$Result.GetResult<Prisma.$inbound_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inbound_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inbound_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inbound_items
     * const inbound_items = await prisma.inbound_items.findMany()
     * 
     * // Get first 10 Inbound_items
     * const inbound_items = await prisma.inbound_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inbound_itemsWithIdOnly = await prisma.inbound_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends inbound_itemsFindManyArgs>(args?: SelectSubset<T, inbound_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inbound_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inbound_items.
     * @param {inbound_itemsCreateArgs} args - Arguments to create a Inbound_items.
     * @example
     * // Create one Inbound_items
     * const Inbound_items = await prisma.inbound_items.create({
     *   data: {
     *     // ... data to create a Inbound_items
     *   }
     * })
     * 
     */
    create<T extends inbound_itemsCreateArgs>(args: SelectSubset<T, inbound_itemsCreateArgs<ExtArgs>>): Prisma__inbound_itemsClient<$Result.GetResult<Prisma.$inbound_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inbound_items.
     * @param {inbound_itemsCreateManyArgs} args - Arguments to create many Inbound_items.
     * @example
     * // Create many Inbound_items
     * const inbound_items = await prisma.inbound_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inbound_itemsCreateManyArgs>(args?: SelectSubset<T, inbound_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inbound_items and returns the data saved in the database.
     * @param {inbound_itemsCreateManyAndReturnArgs} args - Arguments to create many Inbound_items.
     * @example
     * // Create many Inbound_items
     * const inbound_items = await prisma.inbound_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inbound_items and only return the `id`
     * const inbound_itemsWithIdOnly = await prisma.inbound_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends inbound_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, inbound_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inbound_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inbound_items.
     * @param {inbound_itemsDeleteArgs} args - Arguments to delete one Inbound_items.
     * @example
     * // Delete one Inbound_items
     * const Inbound_items = await prisma.inbound_items.delete({
     *   where: {
     *     // ... filter to delete one Inbound_items
     *   }
     * })
     * 
     */
    delete<T extends inbound_itemsDeleteArgs>(args: SelectSubset<T, inbound_itemsDeleteArgs<ExtArgs>>): Prisma__inbound_itemsClient<$Result.GetResult<Prisma.$inbound_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inbound_items.
     * @param {inbound_itemsUpdateArgs} args - Arguments to update one Inbound_items.
     * @example
     * // Update one Inbound_items
     * const inbound_items = await prisma.inbound_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inbound_itemsUpdateArgs>(args: SelectSubset<T, inbound_itemsUpdateArgs<ExtArgs>>): Prisma__inbound_itemsClient<$Result.GetResult<Prisma.$inbound_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inbound_items.
     * @param {inbound_itemsDeleteManyArgs} args - Arguments to filter Inbound_items to delete.
     * @example
     * // Delete a few Inbound_items
     * const { count } = await prisma.inbound_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inbound_itemsDeleteManyArgs>(args?: SelectSubset<T, inbound_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inbound_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inbound_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inbound_items
     * const inbound_items = await prisma.inbound_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inbound_itemsUpdateManyArgs>(args: SelectSubset<T, inbound_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inbound_items and returns the data updated in the database.
     * @param {inbound_itemsUpdateManyAndReturnArgs} args - Arguments to update many Inbound_items.
     * @example
     * // Update many Inbound_items
     * const inbound_items = await prisma.inbound_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inbound_items and only return the `id`
     * const inbound_itemsWithIdOnly = await prisma.inbound_items.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends inbound_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, inbound_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inbound_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inbound_items.
     * @param {inbound_itemsUpsertArgs} args - Arguments to update or create a Inbound_items.
     * @example
     * // Update or create a Inbound_items
     * const inbound_items = await prisma.inbound_items.upsert({
     *   create: {
     *     // ... data to create a Inbound_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inbound_items we want to update
     *   }
     * })
     */
    upsert<T extends inbound_itemsUpsertArgs>(args: SelectSubset<T, inbound_itemsUpsertArgs<ExtArgs>>): Prisma__inbound_itemsClient<$Result.GetResult<Prisma.$inbound_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inbound_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inbound_itemsCountArgs} args - Arguments to filter Inbound_items to count.
     * @example
     * // Count the number of Inbound_items
     * const count = await prisma.inbound_items.count({
     *   where: {
     *     // ... the filter for the Inbound_items we want to count
     *   }
     * })
    **/
    count<T extends inbound_itemsCountArgs>(
      args?: Subset<T, inbound_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Inbound_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inbound_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Inbound_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Inbound_itemsAggregateArgs>(args: Subset<T, Inbound_itemsAggregateArgs>): Prisma.PrismaPromise<GetInbound_itemsAggregateType<T>>

    /**
     * Group by Inbound_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inbound_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inbound_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inbound_itemsGroupByArgs['orderBy'] }
        : { orderBy?: inbound_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inbound_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInbound_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inbound_items model
   */
  readonly fields: inbound_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inbound_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inbound_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the inbound_items model
   */
  interface inbound_itemsFieldRefs {
    readonly id: FieldRef<"inbound_items", 'BigInt'>
    readonly outerbox_id: FieldRef<"inbound_items", 'String'>
    readonly innerbox_id: FieldRef<"inbound_items", 'String'>
    readonly sku: FieldRef<"inbound_items", 'String'>
    readonly serial_number: FieldRef<"inbound_items", 'String'>
    readonly created_at: FieldRef<"inbound_items", 'DateTime'>
    readonly packed_by: FieldRef<"inbound_items", 'String'>
    readonly session_id: FieldRef<"inbound_items", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * inbound_items findUnique
   */
  export type inbound_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_items
     */
    select?: inbound_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_items
     */
    omit?: inbound_itemsOmit<ExtArgs> | null
    /**
     * Filter, which inbound_items to fetch.
     */
    where: inbound_itemsWhereUniqueInput
  }

  /**
   * inbound_items findUniqueOrThrow
   */
  export type inbound_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_items
     */
    select?: inbound_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_items
     */
    omit?: inbound_itemsOmit<ExtArgs> | null
    /**
     * Filter, which inbound_items to fetch.
     */
    where: inbound_itemsWhereUniqueInput
  }

  /**
   * inbound_items findFirst
   */
  export type inbound_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_items
     */
    select?: inbound_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_items
     */
    omit?: inbound_itemsOmit<ExtArgs> | null
    /**
     * Filter, which inbound_items to fetch.
     */
    where?: inbound_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inbound_items to fetch.
     */
    orderBy?: inbound_itemsOrderByWithRelationInput | inbound_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inbound_items.
     */
    cursor?: inbound_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inbound_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inbound_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inbound_items.
     */
    distinct?: Inbound_itemsScalarFieldEnum | Inbound_itemsScalarFieldEnum[]
  }

  /**
   * inbound_items findFirstOrThrow
   */
  export type inbound_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_items
     */
    select?: inbound_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_items
     */
    omit?: inbound_itemsOmit<ExtArgs> | null
    /**
     * Filter, which inbound_items to fetch.
     */
    where?: inbound_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inbound_items to fetch.
     */
    orderBy?: inbound_itemsOrderByWithRelationInput | inbound_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inbound_items.
     */
    cursor?: inbound_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inbound_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inbound_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inbound_items.
     */
    distinct?: Inbound_itemsScalarFieldEnum | Inbound_itemsScalarFieldEnum[]
  }

  /**
   * inbound_items findMany
   */
  export type inbound_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_items
     */
    select?: inbound_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_items
     */
    omit?: inbound_itemsOmit<ExtArgs> | null
    /**
     * Filter, which inbound_items to fetch.
     */
    where?: inbound_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inbound_items to fetch.
     */
    orderBy?: inbound_itemsOrderByWithRelationInput | inbound_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inbound_items.
     */
    cursor?: inbound_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inbound_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inbound_items.
     */
    skip?: number
    distinct?: Inbound_itemsScalarFieldEnum | Inbound_itemsScalarFieldEnum[]
  }

  /**
   * inbound_items create
   */
  export type inbound_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_items
     */
    select?: inbound_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_items
     */
    omit?: inbound_itemsOmit<ExtArgs> | null
    /**
     * The data needed to create a inbound_items.
     */
    data: XOR<inbound_itemsCreateInput, inbound_itemsUncheckedCreateInput>
  }

  /**
   * inbound_items createMany
   */
  export type inbound_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inbound_items.
     */
    data: inbound_itemsCreateManyInput | inbound_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inbound_items createManyAndReturn
   */
  export type inbound_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_items
     */
    select?: inbound_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_items
     */
    omit?: inbound_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many inbound_items.
     */
    data: inbound_itemsCreateManyInput | inbound_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inbound_items update
   */
  export type inbound_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_items
     */
    select?: inbound_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_items
     */
    omit?: inbound_itemsOmit<ExtArgs> | null
    /**
     * The data needed to update a inbound_items.
     */
    data: XOR<inbound_itemsUpdateInput, inbound_itemsUncheckedUpdateInput>
    /**
     * Choose, which inbound_items to update.
     */
    where: inbound_itemsWhereUniqueInput
  }

  /**
   * inbound_items updateMany
   */
  export type inbound_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inbound_items.
     */
    data: XOR<inbound_itemsUpdateManyMutationInput, inbound_itemsUncheckedUpdateManyInput>
    /**
     * Filter which inbound_items to update
     */
    where?: inbound_itemsWhereInput
    /**
     * Limit how many inbound_items to update.
     */
    limit?: number
  }

  /**
   * inbound_items updateManyAndReturn
   */
  export type inbound_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_items
     */
    select?: inbound_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_items
     */
    omit?: inbound_itemsOmit<ExtArgs> | null
    /**
     * The data used to update inbound_items.
     */
    data: XOR<inbound_itemsUpdateManyMutationInput, inbound_itemsUncheckedUpdateManyInput>
    /**
     * Filter which inbound_items to update
     */
    where?: inbound_itemsWhereInput
    /**
     * Limit how many inbound_items to update.
     */
    limit?: number
  }

  /**
   * inbound_items upsert
   */
  export type inbound_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_items
     */
    select?: inbound_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_items
     */
    omit?: inbound_itemsOmit<ExtArgs> | null
    /**
     * The filter to search for the inbound_items to update in case it exists.
     */
    where: inbound_itemsWhereUniqueInput
    /**
     * In case the inbound_items found by the `where` argument doesn't exist, create a new inbound_items with this data.
     */
    create: XOR<inbound_itemsCreateInput, inbound_itemsUncheckedCreateInput>
    /**
     * In case the inbound_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inbound_itemsUpdateInput, inbound_itemsUncheckedUpdateInput>
  }

  /**
   * inbound_items delete
   */
  export type inbound_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_items
     */
    select?: inbound_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_items
     */
    omit?: inbound_itemsOmit<ExtArgs> | null
    /**
     * Filter which inbound_items to delete.
     */
    where: inbound_itemsWhereUniqueInput
  }

  /**
   * inbound_items deleteMany
   */
  export type inbound_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inbound_items to delete
     */
    where?: inbound_itemsWhereInput
    /**
     * Limit how many inbound_items to delete.
     */
    limit?: number
  }

  /**
   * inbound_items without action
   */
  export type inbound_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_items
     */
    select?: inbound_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_items
     */
    omit?: inbound_itemsOmit<ExtArgs> | null
  }


  /**
   * Model inbound_sessions
   */

  export type AggregateInbound_sessions = {
    _count: Inbound_sessionsCountAggregateOutputType | null
    _avg: Inbound_sessionsAvgAggregateOutputType | null
    _sum: Inbound_sessionsSumAggregateOutputType | null
    _min: Inbound_sessionsMinAggregateOutputType | null
    _max: Inbound_sessionsMaxAggregateOutputType | null
  }

  export type Inbound_sessionsAvgAggregateOutputType = {
    id: number | null
    expected_qty: number | null
  }

  export type Inbound_sessionsSumAggregateOutputType = {
    id: bigint | null
    expected_qty: number | null
  }

  export type Inbound_sessionsMinAggregateOutputType = {
    id: bigint | null
    outerbox_id: string | null
    innerbox_id: string | null
    expected_qty: number | null
    status: string | null
    locked_by: string | null
    locked_at: Date | null
    last_seen: Date | null
    confirmed_at: Date | null
    locked_sku: string | null
  }

  export type Inbound_sessionsMaxAggregateOutputType = {
    id: bigint | null
    outerbox_id: string | null
    innerbox_id: string | null
    expected_qty: number | null
    status: string | null
    locked_by: string | null
    locked_at: Date | null
    last_seen: Date | null
    confirmed_at: Date | null
    locked_sku: string | null
  }

  export type Inbound_sessionsCountAggregateOutputType = {
    id: number
    outerbox_id: number
    innerbox_id: number
    expected_qty: number
    status: number
    locked_by: number
    locked_at: number
    last_seen: number
    confirmed_at: number
    locked_sku: number
    _all: number
  }


  export type Inbound_sessionsAvgAggregateInputType = {
    id?: true
    expected_qty?: true
  }

  export type Inbound_sessionsSumAggregateInputType = {
    id?: true
    expected_qty?: true
  }

  export type Inbound_sessionsMinAggregateInputType = {
    id?: true
    outerbox_id?: true
    innerbox_id?: true
    expected_qty?: true
    status?: true
    locked_by?: true
    locked_at?: true
    last_seen?: true
    confirmed_at?: true
    locked_sku?: true
  }

  export type Inbound_sessionsMaxAggregateInputType = {
    id?: true
    outerbox_id?: true
    innerbox_id?: true
    expected_qty?: true
    status?: true
    locked_by?: true
    locked_at?: true
    last_seen?: true
    confirmed_at?: true
    locked_sku?: true
  }

  export type Inbound_sessionsCountAggregateInputType = {
    id?: true
    outerbox_id?: true
    innerbox_id?: true
    expected_qty?: true
    status?: true
    locked_by?: true
    locked_at?: true
    last_seen?: true
    confirmed_at?: true
    locked_sku?: true
    _all?: true
  }

  export type Inbound_sessionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inbound_sessions to aggregate.
     */
    where?: inbound_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inbound_sessions to fetch.
     */
    orderBy?: inbound_sessionsOrderByWithRelationInput | inbound_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: inbound_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inbound_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inbound_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned inbound_sessions
    **/
    _count?: true | Inbound_sessionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Inbound_sessionsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Inbound_sessionsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Inbound_sessionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Inbound_sessionsMaxAggregateInputType
  }

  export type GetInbound_sessionsAggregateType<T extends Inbound_sessionsAggregateArgs> = {
        [P in keyof T & keyof AggregateInbound_sessions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInbound_sessions[P]>
      : GetScalarType<T[P], AggregateInbound_sessions[P]>
  }




  export type inbound_sessionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: inbound_sessionsWhereInput
    orderBy?: inbound_sessionsOrderByWithAggregationInput | inbound_sessionsOrderByWithAggregationInput[]
    by: Inbound_sessionsScalarFieldEnum[] | Inbound_sessionsScalarFieldEnum
    having?: inbound_sessionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Inbound_sessionsCountAggregateInputType | true
    _avg?: Inbound_sessionsAvgAggregateInputType
    _sum?: Inbound_sessionsSumAggregateInputType
    _min?: Inbound_sessionsMinAggregateInputType
    _max?: Inbound_sessionsMaxAggregateInputType
  }

  export type Inbound_sessionsGroupByOutputType = {
    id: bigint
    outerbox_id: string
    innerbox_id: string
    expected_qty: number
    status: string
    locked_by: string
    locked_at: Date
    last_seen: Date
    confirmed_at: Date | null
    locked_sku: string | null
    _count: Inbound_sessionsCountAggregateOutputType | null
    _avg: Inbound_sessionsAvgAggregateOutputType | null
    _sum: Inbound_sessionsSumAggregateOutputType | null
    _min: Inbound_sessionsMinAggregateOutputType | null
    _max: Inbound_sessionsMaxAggregateOutputType | null
  }

  type GetInbound_sessionsGroupByPayload<T extends inbound_sessionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Inbound_sessionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Inbound_sessionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Inbound_sessionsGroupByOutputType[P]>
            : GetScalarType<T[P], Inbound_sessionsGroupByOutputType[P]>
        }
      >
    >


  export type inbound_sessionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outerbox_id?: boolean
    innerbox_id?: boolean
    expected_qty?: boolean
    status?: boolean
    locked_by?: boolean
    locked_at?: boolean
    last_seen?: boolean
    confirmed_at?: boolean
    locked_sku?: boolean
  }, ExtArgs["result"]["inbound_sessions"]>

  export type inbound_sessionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outerbox_id?: boolean
    innerbox_id?: boolean
    expected_qty?: boolean
    status?: boolean
    locked_by?: boolean
    locked_at?: boolean
    last_seen?: boolean
    confirmed_at?: boolean
    locked_sku?: boolean
  }, ExtArgs["result"]["inbound_sessions"]>

  export type inbound_sessionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    outerbox_id?: boolean
    innerbox_id?: boolean
    expected_qty?: boolean
    status?: boolean
    locked_by?: boolean
    locked_at?: boolean
    last_seen?: boolean
    confirmed_at?: boolean
    locked_sku?: boolean
  }, ExtArgs["result"]["inbound_sessions"]>

  export type inbound_sessionsSelectScalar = {
    id?: boolean
    outerbox_id?: boolean
    innerbox_id?: boolean
    expected_qty?: boolean
    status?: boolean
    locked_by?: boolean
    locked_at?: boolean
    last_seen?: boolean
    confirmed_at?: boolean
    locked_sku?: boolean
  }

  export type inbound_sessionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "outerbox_id" | "innerbox_id" | "expected_qty" | "status" | "locked_by" | "locked_at" | "last_seen" | "confirmed_at" | "locked_sku", ExtArgs["result"]["inbound_sessions"]>

  export type $inbound_sessionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "inbound_sessions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      outerbox_id: string
      innerbox_id: string
      expected_qty: number
      status: string
      locked_by: string
      locked_at: Date
      last_seen: Date
      confirmed_at: Date | null
      locked_sku: string | null
    }, ExtArgs["result"]["inbound_sessions"]>
    composites: {}
  }

  type inbound_sessionsGetPayload<S extends boolean | null | undefined | inbound_sessionsDefaultArgs> = $Result.GetResult<Prisma.$inbound_sessionsPayload, S>

  type inbound_sessionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<inbound_sessionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Inbound_sessionsCountAggregateInputType | true
    }

  export interface inbound_sessionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['inbound_sessions'], meta: { name: 'inbound_sessions' } }
    /**
     * Find zero or one Inbound_sessions that matches the filter.
     * @param {inbound_sessionsFindUniqueArgs} args - Arguments to find a Inbound_sessions
     * @example
     * // Get one Inbound_sessions
     * const inbound_sessions = await prisma.inbound_sessions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends inbound_sessionsFindUniqueArgs>(args: SelectSubset<T, inbound_sessionsFindUniqueArgs<ExtArgs>>): Prisma__inbound_sessionsClient<$Result.GetResult<Prisma.$inbound_sessionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inbound_sessions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {inbound_sessionsFindUniqueOrThrowArgs} args - Arguments to find a Inbound_sessions
     * @example
     * // Get one Inbound_sessions
     * const inbound_sessions = await prisma.inbound_sessions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends inbound_sessionsFindUniqueOrThrowArgs>(args: SelectSubset<T, inbound_sessionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__inbound_sessionsClient<$Result.GetResult<Prisma.$inbound_sessionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inbound_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inbound_sessionsFindFirstArgs} args - Arguments to find a Inbound_sessions
     * @example
     * // Get one Inbound_sessions
     * const inbound_sessions = await prisma.inbound_sessions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends inbound_sessionsFindFirstArgs>(args?: SelectSubset<T, inbound_sessionsFindFirstArgs<ExtArgs>>): Prisma__inbound_sessionsClient<$Result.GetResult<Prisma.$inbound_sessionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inbound_sessions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inbound_sessionsFindFirstOrThrowArgs} args - Arguments to find a Inbound_sessions
     * @example
     * // Get one Inbound_sessions
     * const inbound_sessions = await prisma.inbound_sessions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends inbound_sessionsFindFirstOrThrowArgs>(args?: SelectSubset<T, inbound_sessionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__inbound_sessionsClient<$Result.GetResult<Prisma.$inbound_sessionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inbound_sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inbound_sessionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inbound_sessions
     * const inbound_sessions = await prisma.inbound_sessions.findMany()
     * 
     * // Get first 10 Inbound_sessions
     * const inbound_sessions = await prisma.inbound_sessions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inbound_sessionsWithIdOnly = await prisma.inbound_sessions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends inbound_sessionsFindManyArgs>(args?: SelectSubset<T, inbound_sessionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inbound_sessionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inbound_sessions.
     * @param {inbound_sessionsCreateArgs} args - Arguments to create a Inbound_sessions.
     * @example
     * // Create one Inbound_sessions
     * const Inbound_sessions = await prisma.inbound_sessions.create({
     *   data: {
     *     // ... data to create a Inbound_sessions
     *   }
     * })
     * 
     */
    create<T extends inbound_sessionsCreateArgs>(args: SelectSubset<T, inbound_sessionsCreateArgs<ExtArgs>>): Prisma__inbound_sessionsClient<$Result.GetResult<Prisma.$inbound_sessionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inbound_sessions.
     * @param {inbound_sessionsCreateManyArgs} args - Arguments to create many Inbound_sessions.
     * @example
     * // Create many Inbound_sessions
     * const inbound_sessions = await prisma.inbound_sessions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends inbound_sessionsCreateManyArgs>(args?: SelectSubset<T, inbound_sessionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inbound_sessions and returns the data saved in the database.
     * @param {inbound_sessionsCreateManyAndReturnArgs} args - Arguments to create many Inbound_sessions.
     * @example
     * // Create many Inbound_sessions
     * const inbound_sessions = await prisma.inbound_sessions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inbound_sessions and only return the `id`
     * const inbound_sessionsWithIdOnly = await prisma.inbound_sessions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends inbound_sessionsCreateManyAndReturnArgs>(args?: SelectSubset<T, inbound_sessionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inbound_sessionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inbound_sessions.
     * @param {inbound_sessionsDeleteArgs} args - Arguments to delete one Inbound_sessions.
     * @example
     * // Delete one Inbound_sessions
     * const Inbound_sessions = await prisma.inbound_sessions.delete({
     *   where: {
     *     // ... filter to delete one Inbound_sessions
     *   }
     * })
     * 
     */
    delete<T extends inbound_sessionsDeleteArgs>(args: SelectSubset<T, inbound_sessionsDeleteArgs<ExtArgs>>): Prisma__inbound_sessionsClient<$Result.GetResult<Prisma.$inbound_sessionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inbound_sessions.
     * @param {inbound_sessionsUpdateArgs} args - Arguments to update one Inbound_sessions.
     * @example
     * // Update one Inbound_sessions
     * const inbound_sessions = await prisma.inbound_sessions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends inbound_sessionsUpdateArgs>(args: SelectSubset<T, inbound_sessionsUpdateArgs<ExtArgs>>): Prisma__inbound_sessionsClient<$Result.GetResult<Prisma.$inbound_sessionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inbound_sessions.
     * @param {inbound_sessionsDeleteManyArgs} args - Arguments to filter Inbound_sessions to delete.
     * @example
     * // Delete a few Inbound_sessions
     * const { count } = await prisma.inbound_sessions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends inbound_sessionsDeleteManyArgs>(args?: SelectSubset<T, inbound_sessionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inbound_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inbound_sessionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inbound_sessions
     * const inbound_sessions = await prisma.inbound_sessions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends inbound_sessionsUpdateManyArgs>(args: SelectSubset<T, inbound_sessionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inbound_sessions and returns the data updated in the database.
     * @param {inbound_sessionsUpdateManyAndReturnArgs} args - Arguments to update many Inbound_sessions.
     * @example
     * // Update many Inbound_sessions
     * const inbound_sessions = await prisma.inbound_sessions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inbound_sessions and only return the `id`
     * const inbound_sessionsWithIdOnly = await prisma.inbound_sessions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends inbound_sessionsUpdateManyAndReturnArgs>(args: SelectSubset<T, inbound_sessionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$inbound_sessionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inbound_sessions.
     * @param {inbound_sessionsUpsertArgs} args - Arguments to update or create a Inbound_sessions.
     * @example
     * // Update or create a Inbound_sessions
     * const inbound_sessions = await prisma.inbound_sessions.upsert({
     *   create: {
     *     // ... data to create a Inbound_sessions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inbound_sessions we want to update
     *   }
     * })
     */
    upsert<T extends inbound_sessionsUpsertArgs>(args: SelectSubset<T, inbound_sessionsUpsertArgs<ExtArgs>>): Prisma__inbound_sessionsClient<$Result.GetResult<Prisma.$inbound_sessionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inbound_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inbound_sessionsCountArgs} args - Arguments to filter Inbound_sessions to count.
     * @example
     * // Count the number of Inbound_sessions
     * const count = await prisma.inbound_sessions.count({
     *   where: {
     *     // ... the filter for the Inbound_sessions we want to count
     *   }
     * })
    **/
    count<T extends inbound_sessionsCountArgs>(
      args?: Subset<T, inbound_sessionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Inbound_sessionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inbound_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Inbound_sessionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Inbound_sessionsAggregateArgs>(args: Subset<T, Inbound_sessionsAggregateArgs>): Prisma.PrismaPromise<GetInbound_sessionsAggregateType<T>>

    /**
     * Group by Inbound_sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {inbound_sessionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends inbound_sessionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: inbound_sessionsGroupByArgs['orderBy'] }
        : { orderBy?: inbound_sessionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, inbound_sessionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInbound_sessionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the inbound_sessions model
   */
  readonly fields: inbound_sessionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for inbound_sessions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__inbound_sessionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the inbound_sessions model
   */
  interface inbound_sessionsFieldRefs {
    readonly id: FieldRef<"inbound_sessions", 'BigInt'>
    readonly outerbox_id: FieldRef<"inbound_sessions", 'String'>
    readonly innerbox_id: FieldRef<"inbound_sessions", 'String'>
    readonly expected_qty: FieldRef<"inbound_sessions", 'Int'>
    readonly status: FieldRef<"inbound_sessions", 'String'>
    readonly locked_by: FieldRef<"inbound_sessions", 'String'>
    readonly locked_at: FieldRef<"inbound_sessions", 'DateTime'>
    readonly last_seen: FieldRef<"inbound_sessions", 'DateTime'>
    readonly confirmed_at: FieldRef<"inbound_sessions", 'DateTime'>
    readonly locked_sku: FieldRef<"inbound_sessions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * inbound_sessions findUnique
   */
  export type inbound_sessionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_sessions
     */
    select?: inbound_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_sessions
     */
    omit?: inbound_sessionsOmit<ExtArgs> | null
    /**
     * Filter, which inbound_sessions to fetch.
     */
    where: inbound_sessionsWhereUniqueInput
  }

  /**
   * inbound_sessions findUniqueOrThrow
   */
  export type inbound_sessionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_sessions
     */
    select?: inbound_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_sessions
     */
    omit?: inbound_sessionsOmit<ExtArgs> | null
    /**
     * Filter, which inbound_sessions to fetch.
     */
    where: inbound_sessionsWhereUniqueInput
  }

  /**
   * inbound_sessions findFirst
   */
  export type inbound_sessionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_sessions
     */
    select?: inbound_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_sessions
     */
    omit?: inbound_sessionsOmit<ExtArgs> | null
    /**
     * Filter, which inbound_sessions to fetch.
     */
    where?: inbound_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inbound_sessions to fetch.
     */
    orderBy?: inbound_sessionsOrderByWithRelationInput | inbound_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inbound_sessions.
     */
    cursor?: inbound_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inbound_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inbound_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inbound_sessions.
     */
    distinct?: Inbound_sessionsScalarFieldEnum | Inbound_sessionsScalarFieldEnum[]
  }

  /**
   * inbound_sessions findFirstOrThrow
   */
  export type inbound_sessionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_sessions
     */
    select?: inbound_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_sessions
     */
    omit?: inbound_sessionsOmit<ExtArgs> | null
    /**
     * Filter, which inbound_sessions to fetch.
     */
    where?: inbound_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inbound_sessions to fetch.
     */
    orderBy?: inbound_sessionsOrderByWithRelationInput | inbound_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for inbound_sessions.
     */
    cursor?: inbound_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inbound_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inbound_sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of inbound_sessions.
     */
    distinct?: Inbound_sessionsScalarFieldEnum | Inbound_sessionsScalarFieldEnum[]
  }

  /**
   * inbound_sessions findMany
   */
  export type inbound_sessionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_sessions
     */
    select?: inbound_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_sessions
     */
    omit?: inbound_sessionsOmit<ExtArgs> | null
    /**
     * Filter, which inbound_sessions to fetch.
     */
    where?: inbound_sessionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of inbound_sessions to fetch.
     */
    orderBy?: inbound_sessionsOrderByWithRelationInput | inbound_sessionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing inbound_sessions.
     */
    cursor?: inbound_sessionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` inbound_sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` inbound_sessions.
     */
    skip?: number
    distinct?: Inbound_sessionsScalarFieldEnum | Inbound_sessionsScalarFieldEnum[]
  }

  /**
   * inbound_sessions create
   */
  export type inbound_sessionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_sessions
     */
    select?: inbound_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_sessions
     */
    omit?: inbound_sessionsOmit<ExtArgs> | null
    /**
     * The data needed to create a inbound_sessions.
     */
    data: XOR<inbound_sessionsCreateInput, inbound_sessionsUncheckedCreateInput>
  }

  /**
   * inbound_sessions createMany
   */
  export type inbound_sessionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many inbound_sessions.
     */
    data: inbound_sessionsCreateManyInput | inbound_sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inbound_sessions createManyAndReturn
   */
  export type inbound_sessionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_sessions
     */
    select?: inbound_sessionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_sessions
     */
    omit?: inbound_sessionsOmit<ExtArgs> | null
    /**
     * The data used to create many inbound_sessions.
     */
    data: inbound_sessionsCreateManyInput | inbound_sessionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * inbound_sessions update
   */
  export type inbound_sessionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_sessions
     */
    select?: inbound_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_sessions
     */
    omit?: inbound_sessionsOmit<ExtArgs> | null
    /**
     * The data needed to update a inbound_sessions.
     */
    data: XOR<inbound_sessionsUpdateInput, inbound_sessionsUncheckedUpdateInput>
    /**
     * Choose, which inbound_sessions to update.
     */
    where: inbound_sessionsWhereUniqueInput
  }

  /**
   * inbound_sessions updateMany
   */
  export type inbound_sessionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update inbound_sessions.
     */
    data: XOR<inbound_sessionsUpdateManyMutationInput, inbound_sessionsUncheckedUpdateManyInput>
    /**
     * Filter which inbound_sessions to update
     */
    where?: inbound_sessionsWhereInput
    /**
     * Limit how many inbound_sessions to update.
     */
    limit?: number
  }

  /**
   * inbound_sessions updateManyAndReturn
   */
  export type inbound_sessionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_sessions
     */
    select?: inbound_sessionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_sessions
     */
    omit?: inbound_sessionsOmit<ExtArgs> | null
    /**
     * The data used to update inbound_sessions.
     */
    data: XOR<inbound_sessionsUpdateManyMutationInput, inbound_sessionsUncheckedUpdateManyInput>
    /**
     * Filter which inbound_sessions to update
     */
    where?: inbound_sessionsWhereInput
    /**
     * Limit how many inbound_sessions to update.
     */
    limit?: number
  }

  /**
   * inbound_sessions upsert
   */
  export type inbound_sessionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_sessions
     */
    select?: inbound_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_sessions
     */
    omit?: inbound_sessionsOmit<ExtArgs> | null
    /**
     * The filter to search for the inbound_sessions to update in case it exists.
     */
    where: inbound_sessionsWhereUniqueInput
    /**
     * In case the inbound_sessions found by the `where` argument doesn't exist, create a new inbound_sessions with this data.
     */
    create: XOR<inbound_sessionsCreateInput, inbound_sessionsUncheckedCreateInput>
    /**
     * In case the inbound_sessions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<inbound_sessionsUpdateInput, inbound_sessionsUncheckedUpdateInput>
  }

  /**
   * inbound_sessions delete
   */
  export type inbound_sessionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_sessions
     */
    select?: inbound_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_sessions
     */
    omit?: inbound_sessionsOmit<ExtArgs> | null
    /**
     * Filter which inbound_sessions to delete.
     */
    where: inbound_sessionsWhereUniqueInput
  }

  /**
   * inbound_sessions deleteMany
   */
  export type inbound_sessionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which inbound_sessions to delete
     */
    where?: inbound_sessionsWhereInput
    /**
     * Limit how many inbound_sessions to delete.
     */
    limit?: number
  }

  /**
   * inbound_sessions without action
   */
  export type inbound_sessionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the inbound_sessions
     */
    select?: inbound_sessionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the inbound_sessions
     */
    omit?: inbound_sessionsOmit<ExtArgs> | null
  }


  /**
   * Model operators
   */

  export type AggregateOperators = {
    _count: OperatorsCountAggregateOutputType | null
    _min: OperatorsMinAggregateOutputType | null
    _max: OperatorsMaxAggregateOutputType | null
  }

  export type OperatorsMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    password_hash: string | null
  }

  export type OperatorsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
    password_hash: string | null
  }

  export type OperatorsCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    password_hash: number
    _all: number
  }


  export type OperatorsMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    password_hash?: true
  }

  export type OperatorsMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    password_hash?: true
  }

  export type OperatorsCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    password_hash?: true
    _all?: true
  }

  export type OperatorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operators to aggregate.
     */
    where?: operatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operators to fetch.
     */
    orderBy?: operatorsOrderByWithRelationInput | operatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: operatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned operators
    **/
    _count?: true | OperatorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OperatorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OperatorsMaxAggregateInputType
  }

  export type GetOperatorsAggregateType<T extends OperatorsAggregateArgs> = {
        [P in keyof T & keyof AggregateOperators]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOperators[P]>
      : GetScalarType<T[P], AggregateOperators[P]>
  }




  export type operatorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: operatorsWhereInput
    orderBy?: operatorsOrderByWithAggregationInput | operatorsOrderByWithAggregationInput[]
    by: OperatorsScalarFieldEnum[] | OperatorsScalarFieldEnum
    having?: operatorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OperatorsCountAggregateInputType | true
    _min?: OperatorsMinAggregateInputType
    _max?: OperatorsMaxAggregateInputType
  }

  export type OperatorsGroupByOutputType = {
    id: string
    name: string
    created_at: Date
    updated_at: Date
    password_hash: string | null
    _count: OperatorsCountAggregateOutputType | null
    _min: OperatorsMinAggregateOutputType | null
    _max: OperatorsMaxAggregateOutputType | null
  }

  type GetOperatorsGroupByPayload<T extends operatorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OperatorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OperatorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OperatorsGroupByOutputType[P]>
            : GetScalarType<T[P], OperatorsGroupByOutputType[P]>
        }
      >
    >


  export type operatorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    password_hash?: boolean
  }, ExtArgs["result"]["operators"]>

  export type operatorsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    password_hash?: boolean
  }, ExtArgs["result"]["operators"]>

  export type operatorsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    password_hash?: boolean
  }, ExtArgs["result"]["operators"]>

  export type operatorsSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    password_hash?: boolean
  }

  export type operatorsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at" | "password_hash", ExtArgs["result"]["operators"]>

  export type $operatorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "operators"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date
      updated_at: Date
      password_hash: string | null
    }, ExtArgs["result"]["operators"]>
    composites: {}
  }

  type operatorsGetPayload<S extends boolean | null | undefined | operatorsDefaultArgs> = $Result.GetResult<Prisma.$operatorsPayload, S>

  type operatorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<operatorsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OperatorsCountAggregateInputType | true
    }

  export interface operatorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['operators'], meta: { name: 'operators' } }
    /**
     * Find zero or one Operators that matches the filter.
     * @param {operatorsFindUniqueArgs} args - Arguments to find a Operators
     * @example
     * // Get one Operators
     * const operators = await prisma.operators.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends operatorsFindUniqueArgs>(args: SelectSubset<T, operatorsFindUniqueArgs<ExtArgs>>): Prisma__operatorsClient<$Result.GetResult<Prisma.$operatorsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Operators that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {operatorsFindUniqueOrThrowArgs} args - Arguments to find a Operators
     * @example
     * // Get one Operators
     * const operators = await prisma.operators.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends operatorsFindUniqueOrThrowArgs>(args: SelectSubset<T, operatorsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__operatorsClient<$Result.GetResult<Prisma.$operatorsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operatorsFindFirstArgs} args - Arguments to find a Operators
     * @example
     * // Get one Operators
     * const operators = await prisma.operators.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends operatorsFindFirstArgs>(args?: SelectSubset<T, operatorsFindFirstArgs<ExtArgs>>): Prisma__operatorsClient<$Result.GetResult<Prisma.$operatorsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Operators that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operatorsFindFirstOrThrowArgs} args - Arguments to find a Operators
     * @example
     * // Get one Operators
     * const operators = await prisma.operators.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends operatorsFindFirstOrThrowArgs>(args?: SelectSubset<T, operatorsFindFirstOrThrowArgs<ExtArgs>>): Prisma__operatorsClient<$Result.GetResult<Prisma.$operatorsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Operators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operatorsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Operators
     * const operators = await prisma.operators.findMany()
     * 
     * // Get first 10 Operators
     * const operators = await prisma.operators.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const operatorsWithIdOnly = await prisma.operators.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends operatorsFindManyArgs>(args?: SelectSubset<T, operatorsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operatorsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Operators.
     * @param {operatorsCreateArgs} args - Arguments to create a Operators.
     * @example
     * // Create one Operators
     * const Operators = await prisma.operators.create({
     *   data: {
     *     // ... data to create a Operators
     *   }
     * })
     * 
     */
    create<T extends operatorsCreateArgs>(args: SelectSubset<T, operatorsCreateArgs<ExtArgs>>): Prisma__operatorsClient<$Result.GetResult<Prisma.$operatorsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Operators.
     * @param {operatorsCreateManyArgs} args - Arguments to create many Operators.
     * @example
     * // Create many Operators
     * const operators = await prisma.operators.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends operatorsCreateManyArgs>(args?: SelectSubset<T, operatorsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Operators and returns the data saved in the database.
     * @param {operatorsCreateManyAndReturnArgs} args - Arguments to create many Operators.
     * @example
     * // Create many Operators
     * const operators = await prisma.operators.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Operators and only return the `id`
     * const operatorsWithIdOnly = await prisma.operators.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends operatorsCreateManyAndReturnArgs>(args?: SelectSubset<T, operatorsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operatorsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Operators.
     * @param {operatorsDeleteArgs} args - Arguments to delete one Operators.
     * @example
     * // Delete one Operators
     * const Operators = await prisma.operators.delete({
     *   where: {
     *     // ... filter to delete one Operators
     *   }
     * })
     * 
     */
    delete<T extends operatorsDeleteArgs>(args: SelectSubset<T, operatorsDeleteArgs<ExtArgs>>): Prisma__operatorsClient<$Result.GetResult<Prisma.$operatorsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Operators.
     * @param {operatorsUpdateArgs} args - Arguments to update one Operators.
     * @example
     * // Update one Operators
     * const operators = await prisma.operators.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends operatorsUpdateArgs>(args: SelectSubset<T, operatorsUpdateArgs<ExtArgs>>): Prisma__operatorsClient<$Result.GetResult<Prisma.$operatorsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Operators.
     * @param {operatorsDeleteManyArgs} args - Arguments to filter Operators to delete.
     * @example
     * // Delete a few Operators
     * const { count } = await prisma.operators.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends operatorsDeleteManyArgs>(args?: SelectSubset<T, operatorsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operatorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Operators
     * const operators = await prisma.operators.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends operatorsUpdateManyArgs>(args: SelectSubset<T, operatorsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Operators and returns the data updated in the database.
     * @param {operatorsUpdateManyAndReturnArgs} args - Arguments to update many Operators.
     * @example
     * // Update many Operators
     * const operators = await prisma.operators.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Operators and only return the `id`
     * const operatorsWithIdOnly = await prisma.operators.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends operatorsUpdateManyAndReturnArgs>(args: SelectSubset<T, operatorsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$operatorsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Operators.
     * @param {operatorsUpsertArgs} args - Arguments to update or create a Operators.
     * @example
     * // Update or create a Operators
     * const operators = await prisma.operators.upsert({
     *   create: {
     *     // ... data to create a Operators
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Operators we want to update
     *   }
     * })
     */
    upsert<T extends operatorsUpsertArgs>(args: SelectSubset<T, operatorsUpsertArgs<ExtArgs>>): Prisma__operatorsClient<$Result.GetResult<Prisma.$operatorsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Operators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operatorsCountArgs} args - Arguments to filter Operators to count.
     * @example
     * // Count the number of Operators
     * const count = await prisma.operators.count({
     *   where: {
     *     // ... the filter for the Operators we want to count
     *   }
     * })
    **/
    count<T extends operatorsCountArgs>(
      args?: Subset<T, operatorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OperatorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Operators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OperatorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OperatorsAggregateArgs>(args: Subset<T, OperatorsAggregateArgs>): Prisma.PrismaPromise<GetOperatorsAggregateType<T>>

    /**
     * Group by Operators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {operatorsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends operatorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: operatorsGroupByArgs['orderBy'] }
        : { orderBy?: operatorsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, operatorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOperatorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the operators model
   */
  readonly fields: operatorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for operators.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__operatorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the operators model
   */
  interface operatorsFieldRefs {
    readonly id: FieldRef<"operators", 'String'>
    readonly name: FieldRef<"operators", 'String'>
    readonly created_at: FieldRef<"operators", 'DateTime'>
    readonly updated_at: FieldRef<"operators", 'DateTime'>
    readonly password_hash: FieldRef<"operators", 'String'>
  }
    

  // Custom InputTypes
  /**
   * operators findUnique
   */
  export type operatorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operators
     */
    select?: operatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operators
     */
    omit?: operatorsOmit<ExtArgs> | null
    /**
     * Filter, which operators to fetch.
     */
    where: operatorsWhereUniqueInput
  }

  /**
   * operators findUniqueOrThrow
   */
  export type operatorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operators
     */
    select?: operatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operators
     */
    omit?: operatorsOmit<ExtArgs> | null
    /**
     * Filter, which operators to fetch.
     */
    where: operatorsWhereUniqueInput
  }

  /**
   * operators findFirst
   */
  export type operatorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operators
     */
    select?: operatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operators
     */
    omit?: operatorsOmit<ExtArgs> | null
    /**
     * Filter, which operators to fetch.
     */
    where?: operatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operators to fetch.
     */
    orderBy?: operatorsOrderByWithRelationInput | operatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for operators.
     */
    cursor?: operatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of operators.
     */
    distinct?: OperatorsScalarFieldEnum | OperatorsScalarFieldEnum[]
  }

  /**
   * operators findFirstOrThrow
   */
  export type operatorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operators
     */
    select?: operatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operators
     */
    omit?: operatorsOmit<ExtArgs> | null
    /**
     * Filter, which operators to fetch.
     */
    where?: operatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operators to fetch.
     */
    orderBy?: operatorsOrderByWithRelationInput | operatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for operators.
     */
    cursor?: operatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of operators.
     */
    distinct?: OperatorsScalarFieldEnum | OperatorsScalarFieldEnum[]
  }

  /**
   * operators findMany
   */
  export type operatorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operators
     */
    select?: operatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operators
     */
    omit?: operatorsOmit<ExtArgs> | null
    /**
     * Filter, which operators to fetch.
     */
    where?: operatorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of operators to fetch.
     */
    orderBy?: operatorsOrderByWithRelationInput | operatorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing operators.
     */
    cursor?: operatorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` operators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` operators.
     */
    skip?: number
    distinct?: OperatorsScalarFieldEnum | OperatorsScalarFieldEnum[]
  }

  /**
   * operators create
   */
  export type operatorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operators
     */
    select?: operatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operators
     */
    omit?: operatorsOmit<ExtArgs> | null
    /**
     * The data needed to create a operators.
     */
    data: XOR<operatorsCreateInput, operatorsUncheckedCreateInput>
  }

  /**
   * operators createMany
   */
  export type operatorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many operators.
     */
    data: operatorsCreateManyInput | operatorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * operators createManyAndReturn
   */
  export type operatorsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operators
     */
    select?: operatorsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the operators
     */
    omit?: operatorsOmit<ExtArgs> | null
    /**
     * The data used to create many operators.
     */
    data: operatorsCreateManyInput | operatorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * operators update
   */
  export type operatorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operators
     */
    select?: operatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operators
     */
    omit?: operatorsOmit<ExtArgs> | null
    /**
     * The data needed to update a operators.
     */
    data: XOR<operatorsUpdateInput, operatorsUncheckedUpdateInput>
    /**
     * Choose, which operators to update.
     */
    where: operatorsWhereUniqueInput
  }

  /**
   * operators updateMany
   */
  export type operatorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update operators.
     */
    data: XOR<operatorsUpdateManyMutationInput, operatorsUncheckedUpdateManyInput>
    /**
     * Filter which operators to update
     */
    where?: operatorsWhereInput
    /**
     * Limit how many operators to update.
     */
    limit?: number
  }

  /**
   * operators updateManyAndReturn
   */
  export type operatorsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operators
     */
    select?: operatorsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the operators
     */
    omit?: operatorsOmit<ExtArgs> | null
    /**
     * The data used to update operators.
     */
    data: XOR<operatorsUpdateManyMutationInput, operatorsUncheckedUpdateManyInput>
    /**
     * Filter which operators to update
     */
    where?: operatorsWhereInput
    /**
     * Limit how many operators to update.
     */
    limit?: number
  }

  /**
   * operators upsert
   */
  export type operatorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operators
     */
    select?: operatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operators
     */
    omit?: operatorsOmit<ExtArgs> | null
    /**
     * The filter to search for the operators to update in case it exists.
     */
    where: operatorsWhereUniqueInput
    /**
     * In case the operators found by the `where` argument doesn't exist, create a new operators with this data.
     */
    create: XOR<operatorsCreateInput, operatorsUncheckedCreateInput>
    /**
     * In case the operators was found with the provided `where` argument, update it with this data.
     */
    update: XOR<operatorsUpdateInput, operatorsUncheckedUpdateInput>
  }

  /**
   * operators delete
   */
  export type operatorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operators
     */
    select?: operatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operators
     */
    omit?: operatorsOmit<ExtArgs> | null
    /**
     * Filter which operators to delete.
     */
    where: operatorsWhereUniqueInput
  }

  /**
   * operators deleteMany
   */
  export type operatorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which operators to delete
     */
    where?: operatorsWhereInput
    /**
     * Limit how many operators to delete.
     */
    limit?: number
  }

  /**
   * operators without action
   */
  export type operatorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the operators
     */
    select?: operatorsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the operators
     */
    omit?: operatorsOmit<ExtArgs> | null
  }


  /**
   * Model push_subscriptions
   */

  export type AggregatePush_subscriptions = {
    _count: Push_subscriptionsCountAggregateOutputType | null
    _min: Push_subscriptionsMinAggregateOutputType | null
    _max: Push_subscriptionsMaxAggregateOutputType | null
  }

  export type Push_subscriptionsMinAggregateOutputType = {
    operator_name: string | null
    updated_at: Date | null
  }

  export type Push_subscriptionsMaxAggregateOutputType = {
    operator_name: string | null
    updated_at: Date | null
  }

  export type Push_subscriptionsCountAggregateOutputType = {
    operator_name: number
    subscription: number
    updated_at: number
    _all: number
  }


  export type Push_subscriptionsMinAggregateInputType = {
    operator_name?: true
    updated_at?: true
  }

  export type Push_subscriptionsMaxAggregateInputType = {
    operator_name?: true
    updated_at?: true
  }

  export type Push_subscriptionsCountAggregateInputType = {
    operator_name?: true
    subscription?: true
    updated_at?: true
    _all?: true
  }

  export type Push_subscriptionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which push_subscriptions to aggregate.
     */
    where?: push_subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of push_subscriptions to fetch.
     */
    orderBy?: push_subscriptionsOrderByWithRelationInput | push_subscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: push_subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` push_subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` push_subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned push_subscriptions
    **/
    _count?: true | Push_subscriptionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Push_subscriptionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Push_subscriptionsMaxAggregateInputType
  }

  export type GetPush_subscriptionsAggregateType<T extends Push_subscriptionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePush_subscriptions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePush_subscriptions[P]>
      : GetScalarType<T[P], AggregatePush_subscriptions[P]>
  }




  export type push_subscriptionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: push_subscriptionsWhereInput
    orderBy?: push_subscriptionsOrderByWithAggregationInput | push_subscriptionsOrderByWithAggregationInput[]
    by: Push_subscriptionsScalarFieldEnum[] | Push_subscriptionsScalarFieldEnum
    having?: push_subscriptionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Push_subscriptionsCountAggregateInputType | true
    _min?: Push_subscriptionsMinAggregateInputType
    _max?: Push_subscriptionsMaxAggregateInputType
  }

  export type Push_subscriptionsGroupByOutputType = {
    operator_name: string
    subscription: JsonValue
    updated_at: Date | null
    _count: Push_subscriptionsCountAggregateOutputType | null
    _min: Push_subscriptionsMinAggregateOutputType | null
    _max: Push_subscriptionsMaxAggregateOutputType | null
  }

  type GetPush_subscriptionsGroupByPayload<T extends push_subscriptionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Push_subscriptionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Push_subscriptionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Push_subscriptionsGroupByOutputType[P]>
            : GetScalarType<T[P], Push_subscriptionsGroupByOutputType[P]>
        }
      >
    >


  export type push_subscriptionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    operator_name?: boolean
    subscription?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["push_subscriptions"]>

  export type push_subscriptionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    operator_name?: boolean
    subscription?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["push_subscriptions"]>

  export type push_subscriptionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    operator_name?: boolean
    subscription?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["push_subscriptions"]>

  export type push_subscriptionsSelectScalar = {
    operator_name?: boolean
    subscription?: boolean
    updated_at?: boolean
  }

  export type push_subscriptionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"operator_name" | "subscription" | "updated_at", ExtArgs["result"]["push_subscriptions"]>

  export type $push_subscriptionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "push_subscriptions"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      operator_name: string
      subscription: Prisma.JsonValue
      updated_at: Date | null
    }, ExtArgs["result"]["push_subscriptions"]>
    composites: {}
  }

  type push_subscriptionsGetPayload<S extends boolean | null | undefined | push_subscriptionsDefaultArgs> = $Result.GetResult<Prisma.$push_subscriptionsPayload, S>

  type push_subscriptionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<push_subscriptionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Push_subscriptionsCountAggregateInputType | true
    }

  export interface push_subscriptionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['push_subscriptions'], meta: { name: 'push_subscriptions' } }
    /**
     * Find zero or one Push_subscriptions that matches the filter.
     * @param {push_subscriptionsFindUniqueArgs} args - Arguments to find a Push_subscriptions
     * @example
     * // Get one Push_subscriptions
     * const push_subscriptions = await prisma.push_subscriptions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends push_subscriptionsFindUniqueArgs>(args: SelectSubset<T, push_subscriptionsFindUniqueArgs<ExtArgs>>): Prisma__push_subscriptionsClient<$Result.GetResult<Prisma.$push_subscriptionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Push_subscriptions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {push_subscriptionsFindUniqueOrThrowArgs} args - Arguments to find a Push_subscriptions
     * @example
     * // Get one Push_subscriptions
     * const push_subscriptions = await prisma.push_subscriptions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends push_subscriptionsFindUniqueOrThrowArgs>(args: SelectSubset<T, push_subscriptionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__push_subscriptionsClient<$Result.GetResult<Prisma.$push_subscriptionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Push_subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {push_subscriptionsFindFirstArgs} args - Arguments to find a Push_subscriptions
     * @example
     * // Get one Push_subscriptions
     * const push_subscriptions = await prisma.push_subscriptions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends push_subscriptionsFindFirstArgs>(args?: SelectSubset<T, push_subscriptionsFindFirstArgs<ExtArgs>>): Prisma__push_subscriptionsClient<$Result.GetResult<Prisma.$push_subscriptionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Push_subscriptions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {push_subscriptionsFindFirstOrThrowArgs} args - Arguments to find a Push_subscriptions
     * @example
     * // Get one Push_subscriptions
     * const push_subscriptions = await prisma.push_subscriptions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends push_subscriptionsFindFirstOrThrowArgs>(args?: SelectSubset<T, push_subscriptionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__push_subscriptionsClient<$Result.GetResult<Prisma.$push_subscriptionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Push_subscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {push_subscriptionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Push_subscriptions
     * const push_subscriptions = await prisma.push_subscriptions.findMany()
     * 
     * // Get first 10 Push_subscriptions
     * const push_subscriptions = await prisma.push_subscriptions.findMany({ take: 10 })
     * 
     * // Only select the `operator_name`
     * const push_subscriptionsWithOperator_nameOnly = await prisma.push_subscriptions.findMany({ select: { operator_name: true } })
     * 
     */
    findMany<T extends push_subscriptionsFindManyArgs>(args?: SelectSubset<T, push_subscriptionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$push_subscriptionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Push_subscriptions.
     * @param {push_subscriptionsCreateArgs} args - Arguments to create a Push_subscriptions.
     * @example
     * // Create one Push_subscriptions
     * const Push_subscriptions = await prisma.push_subscriptions.create({
     *   data: {
     *     // ... data to create a Push_subscriptions
     *   }
     * })
     * 
     */
    create<T extends push_subscriptionsCreateArgs>(args: SelectSubset<T, push_subscriptionsCreateArgs<ExtArgs>>): Prisma__push_subscriptionsClient<$Result.GetResult<Prisma.$push_subscriptionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Push_subscriptions.
     * @param {push_subscriptionsCreateManyArgs} args - Arguments to create many Push_subscriptions.
     * @example
     * // Create many Push_subscriptions
     * const push_subscriptions = await prisma.push_subscriptions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends push_subscriptionsCreateManyArgs>(args?: SelectSubset<T, push_subscriptionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Push_subscriptions and returns the data saved in the database.
     * @param {push_subscriptionsCreateManyAndReturnArgs} args - Arguments to create many Push_subscriptions.
     * @example
     * // Create many Push_subscriptions
     * const push_subscriptions = await prisma.push_subscriptions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Push_subscriptions and only return the `operator_name`
     * const push_subscriptionsWithOperator_nameOnly = await prisma.push_subscriptions.createManyAndReturn({
     *   select: { operator_name: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends push_subscriptionsCreateManyAndReturnArgs>(args?: SelectSubset<T, push_subscriptionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$push_subscriptionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Push_subscriptions.
     * @param {push_subscriptionsDeleteArgs} args - Arguments to delete one Push_subscriptions.
     * @example
     * // Delete one Push_subscriptions
     * const Push_subscriptions = await prisma.push_subscriptions.delete({
     *   where: {
     *     // ... filter to delete one Push_subscriptions
     *   }
     * })
     * 
     */
    delete<T extends push_subscriptionsDeleteArgs>(args: SelectSubset<T, push_subscriptionsDeleteArgs<ExtArgs>>): Prisma__push_subscriptionsClient<$Result.GetResult<Prisma.$push_subscriptionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Push_subscriptions.
     * @param {push_subscriptionsUpdateArgs} args - Arguments to update one Push_subscriptions.
     * @example
     * // Update one Push_subscriptions
     * const push_subscriptions = await prisma.push_subscriptions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends push_subscriptionsUpdateArgs>(args: SelectSubset<T, push_subscriptionsUpdateArgs<ExtArgs>>): Prisma__push_subscriptionsClient<$Result.GetResult<Prisma.$push_subscriptionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Push_subscriptions.
     * @param {push_subscriptionsDeleteManyArgs} args - Arguments to filter Push_subscriptions to delete.
     * @example
     * // Delete a few Push_subscriptions
     * const { count } = await prisma.push_subscriptions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends push_subscriptionsDeleteManyArgs>(args?: SelectSubset<T, push_subscriptionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Push_subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {push_subscriptionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Push_subscriptions
     * const push_subscriptions = await prisma.push_subscriptions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends push_subscriptionsUpdateManyArgs>(args: SelectSubset<T, push_subscriptionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Push_subscriptions and returns the data updated in the database.
     * @param {push_subscriptionsUpdateManyAndReturnArgs} args - Arguments to update many Push_subscriptions.
     * @example
     * // Update many Push_subscriptions
     * const push_subscriptions = await prisma.push_subscriptions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Push_subscriptions and only return the `operator_name`
     * const push_subscriptionsWithOperator_nameOnly = await prisma.push_subscriptions.updateManyAndReturn({
     *   select: { operator_name: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends push_subscriptionsUpdateManyAndReturnArgs>(args: SelectSubset<T, push_subscriptionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$push_subscriptionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Push_subscriptions.
     * @param {push_subscriptionsUpsertArgs} args - Arguments to update or create a Push_subscriptions.
     * @example
     * // Update or create a Push_subscriptions
     * const push_subscriptions = await prisma.push_subscriptions.upsert({
     *   create: {
     *     // ... data to create a Push_subscriptions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Push_subscriptions we want to update
     *   }
     * })
     */
    upsert<T extends push_subscriptionsUpsertArgs>(args: SelectSubset<T, push_subscriptionsUpsertArgs<ExtArgs>>): Prisma__push_subscriptionsClient<$Result.GetResult<Prisma.$push_subscriptionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Push_subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {push_subscriptionsCountArgs} args - Arguments to filter Push_subscriptions to count.
     * @example
     * // Count the number of Push_subscriptions
     * const count = await prisma.push_subscriptions.count({
     *   where: {
     *     // ... the filter for the Push_subscriptions we want to count
     *   }
     * })
    **/
    count<T extends push_subscriptionsCountArgs>(
      args?: Subset<T, push_subscriptionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Push_subscriptionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Push_subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Push_subscriptionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Push_subscriptionsAggregateArgs>(args: Subset<T, Push_subscriptionsAggregateArgs>): Prisma.PrismaPromise<GetPush_subscriptionsAggregateType<T>>

    /**
     * Group by Push_subscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {push_subscriptionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends push_subscriptionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: push_subscriptionsGroupByArgs['orderBy'] }
        : { orderBy?: push_subscriptionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, push_subscriptionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPush_subscriptionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the push_subscriptions model
   */
  readonly fields: push_subscriptionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for push_subscriptions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__push_subscriptionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the push_subscriptions model
   */
  interface push_subscriptionsFieldRefs {
    readonly operator_name: FieldRef<"push_subscriptions", 'String'>
    readonly subscription: FieldRef<"push_subscriptions", 'Json'>
    readonly updated_at: FieldRef<"push_subscriptions", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * push_subscriptions findUnique
   */
  export type push_subscriptionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscriptions
     */
    select?: push_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscriptions
     */
    omit?: push_subscriptionsOmit<ExtArgs> | null
    /**
     * Filter, which push_subscriptions to fetch.
     */
    where: push_subscriptionsWhereUniqueInput
  }

  /**
   * push_subscriptions findUniqueOrThrow
   */
  export type push_subscriptionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscriptions
     */
    select?: push_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscriptions
     */
    omit?: push_subscriptionsOmit<ExtArgs> | null
    /**
     * Filter, which push_subscriptions to fetch.
     */
    where: push_subscriptionsWhereUniqueInput
  }

  /**
   * push_subscriptions findFirst
   */
  export type push_subscriptionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscriptions
     */
    select?: push_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscriptions
     */
    omit?: push_subscriptionsOmit<ExtArgs> | null
    /**
     * Filter, which push_subscriptions to fetch.
     */
    where?: push_subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of push_subscriptions to fetch.
     */
    orderBy?: push_subscriptionsOrderByWithRelationInput | push_subscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for push_subscriptions.
     */
    cursor?: push_subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` push_subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` push_subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of push_subscriptions.
     */
    distinct?: Push_subscriptionsScalarFieldEnum | Push_subscriptionsScalarFieldEnum[]
  }

  /**
   * push_subscriptions findFirstOrThrow
   */
  export type push_subscriptionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscriptions
     */
    select?: push_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscriptions
     */
    omit?: push_subscriptionsOmit<ExtArgs> | null
    /**
     * Filter, which push_subscriptions to fetch.
     */
    where?: push_subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of push_subscriptions to fetch.
     */
    orderBy?: push_subscriptionsOrderByWithRelationInput | push_subscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for push_subscriptions.
     */
    cursor?: push_subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` push_subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` push_subscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of push_subscriptions.
     */
    distinct?: Push_subscriptionsScalarFieldEnum | Push_subscriptionsScalarFieldEnum[]
  }

  /**
   * push_subscriptions findMany
   */
  export type push_subscriptionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscriptions
     */
    select?: push_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscriptions
     */
    omit?: push_subscriptionsOmit<ExtArgs> | null
    /**
     * Filter, which push_subscriptions to fetch.
     */
    where?: push_subscriptionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of push_subscriptions to fetch.
     */
    orderBy?: push_subscriptionsOrderByWithRelationInput | push_subscriptionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing push_subscriptions.
     */
    cursor?: push_subscriptionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` push_subscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` push_subscriptions.
     */
    skip?: number
    distinct?: Push_subscriptionsScalarFieldEnum | Push_subscriptionsScalarFieldEnum[]
  }

  /**
   * push_subscriptions create
   */
  export type push_subscriptionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscriptions
     */
    select?: push_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscriptions
     */
    omit?: push_subscriptionsOmit<ExtArgs> | null
    /**
     * The data needed to create a push_subscriptions.
     */
    data: XOR<push_subscriptionsCreateInput, push_subscriptionsUncheckedCreateInput>
  }

  /**
   * push_subscriptions createMany
   */
  export type push_subscriptionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many push_subscriptions.
     */
    data: push_subscriptionsCreateManyInput | push_subscriptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * push_subscriptions createManyAndReturn
   */
  export type push_subscriptionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscriptions
     */
    select?: push_subscriptionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscriptions
     */
    omit?: push_subscriptionsOmit<ExtArgs> | null
    /**
     * The data used to create many push_subscriptions.
     */
    data: push_subscriptionsCreateManyInput | push_subscriptionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * push_subscriptions update
   */
  export type push_subscriptionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscriptions
     */
    select?: push_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscriptions
     */
    omit?: push_subscriptionsOmit<ExtArgs> | null
    /**
     * The data needed to update a push_subscriptions.
     */
    data: XOR<push_subscriptionsUpdateInput, push_subscriptionsUncheckedUpdateInput>
    /**
     * Choose, which push_subscriptions to update.
     */
    where: push_subscriptionsWhereUniqueInput
  }

  /**
   * push_subscriptions updateMany
   */
  export type push_subscriptionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update push_subscriptions.
     */
    data: XOR<push_subscriptionsUpdateManyMutationInput, push_subscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which push_subscriptions to update
     */
    where?: push_subscriptionsWhereInput
    /**
     * Limit how many push_subscriptions to update.
     */
    limit?: number
  }

  /**
   * push_subscriptions updateManyAndReturn
   */
  export type push_subscriptionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscriptions
     */
    select?: push_subscriptionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscriptions
     */
    omit?: push_subscriptionsOmit<ExtArgs> | null
    /**
     * The data used to update push_subscriptions.
     */
    data: XOR<push_subscriptionsUpdateManyMutationInput, push_subscriptionsUncheckedUpdateManyInput>
    /**
     * Filter which push_subscriptions to update
     */
    where?: push_subscriptionsWhereInput
    /**
     * Limit how many push_subscriptions to update.
     */
    limit?: number
  }

  /**
   * push_subscriptions upsert
   */
  export type push_subscriptionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscriptions
     */
    select?: push_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscriptions
     */
    omit?: push_subscriptionsOmit<ExtArgs> | null
    /**
     * The filter to search for the push_subscriptions to update in case it exists.
     */
    where: push_subscriptionsWhereUniqueInput
    /**
     * In case the push_subscriptions found by the `where` argument doesn't exist, create a new push_subscriptions with this data.
     */
    create: XOR<push_subscriptionsCreateInput, push_subscriptionsUncheckedCreateInput>
    /**
     * In case the push_subscriptions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<push_subscriptionsUpdateInput, push_subscriptionsUncheckedUpdateInput>
  }

  /**
   * push_subscriptions delete
   */
  export type push_subscriptionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscriptions
     */
    select?: push_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscriptions
     */
    omit?: push_subscriptionsOmit<ExtArgs> | null
    /**
     * Filter which push_subscriptions to delete.
     */
    where: push_subscriptionsWhereUniqueInput
  }

  /**
   * push_subscriptions deleteMany
   */
  export type push_subscriptionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which push_subscriptions to delete
     */
    where?: push_subscriptionsWhereInput
    /**
     * Limit how many push_subscriptions to delete.
     */
    limit?: number
  }

  /**
   * push_subscriptions without action
   */
  export type push_subscriptionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the push_subscriptions
     */
    select?: push_subscriptionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the push_subscriptions
     */
    omit?: push_subscriptionsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Inbound_innerboxesScalarFieldEnum: {
    outerbox_id: 'outerbox_id',
    innerbox_id: 'innerbox_id',
    expected_qty: 'expected_qty',
    packed_by: 'packed_by',
    status: 'status',
    claimed_at: 'claimed_at',
    last_seen_at: 'last_seen_at'
  };

  export type Inbound_innerboxesScalarFieldEnum = (typeof Inbound_innerboxesScalarFieldEnum)[keyof typeof Inbound_innerboxesScalarFieldEnum]


  export const Inbound_itemsScalarFieldEnum: {
    id: 'id',
    outerbox_id: 'outerbox_id',
    innerbox_id: 'innerbox_id',
    sku: 'sku',
    serial_number: 'serial_number',
    created_at: 'created_at',
    packed_by: 'packed_by',
    session_id: 'session_id'
  };

  export type Inbound_itemsScalarFieldEnum = (typeof Inbound_itemsScalarFieldEnum)[keyof typeof Inbound_itemsScalarFieldEnum]


  export const Inbound_sessionsScalarFieldEnum: {
    id: 'id',
    outerbox_id: 'outerbox_id',
    innerbox_id: 'innerbox_id',
    expected_qty: 'expected_qty',
    status: 'status',
    locked_by: 'locked_by',
    locked_at: 'locked_at',
    last_seen: 'last_seen',
    confirmed_at: 'confirmed_at',
    locked_sku: 'locked_sku'
  };

  export type Inbound_sessionsScalarFieldEnum = (typeof Inbound_sessionsScalarFieldEnum)[keyof typeof Inbound_sessionsScalarFieldEnum]


  export const OperatorsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at',
    password_hash: 'password_hash'
  };

  export type OperatorsScalarFieldEnum = (typeof OperatorsScalarFieldEnum)[keyof typeof OperatorsScalarFieldEnum]


  export const Push_subscriptionsScalarFieldEnum: {
    operator_name: 'operator_name',
    subscription: 'subscription',
    updated_at: 'updated_at'
  };

  export type Push_subscriptionsScalarFieldEnum = (typeof Push_subscriptionsScalarFieldEnum)[keyof typeof Push_subscriptionsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type inbound_innerboxesWhereInput = {
    AND?: inbound_innerboxesWhereInput | inbound_innerboxesWhereInput[]
    OR?: inbound_innerboxesWhereInput[]
    NOT?: inbound_innerboxesWhereInput | inbound_innerboxesWhereInput[]
    outerbox_id?: StringFilter<"inbound_innerboxes"> | string
    innerbox_id?: StringFilter<"inbound_innerboxes"> | string
    expected_qty?: IntFilter<"inbound_innerboxes"> | number
    packed_by?: StringFilter<"inbound_innerboxes"> | string
    status?: StringFilter<"inbound_innerboxes"> | string
    claimed_at?: DateTimeFilter<"inbound_innerboxes"> | Date | string
    last_seen_at?: DateTimeFilter<"inbound_innerboxes"> | Date | string
  }

  export type inbound_innerboxesOrderByWithRelationInput = {
    outerbox_id?: SortOrder
    innerbox_id?: SortOrder
    expected_qty?: SortOrder
    packed_by?: SortOrder
    status?: SortOrder
    claimed_at?: SortOrder
    last_seen_at?: SortOrder
  }

  export type inbound_innerboxesWhereUniqueInput = Prisma.AtLeast<{
    outerbox_id_innerbox_id?: inbound_innerboxesOuterbox_idInnerbox_idCompoundUniqueInput
    AND?: inbound_innerboxesWhereInput | inbound_innerboxesWhereInput[]
    OR?: inbound_innerboxesWhereInput[]
    NOT?: inbound_innerboxesWhereInput | inbound_innerboxesWhereInput[]
    outerbox_id?: StringFilter<"inbound_innerboxes"> | string
    innerbox_id?: StringFilter<"inbound_innerboxes"> | string
    expected_qty?: IntFilter<"inbound_innerboxes"> | number
    packed_by?: StringFilter<"inbound_innerboxes"> | string
    status?: StringFilter<"inbound_innerboxes"> | string
    claimed_at?: DateTimeFilter<"inbound_innerboxes"> | Date | string
    last_seen_at?: DateTimeFilter<"inbound_innerboxes"> | Date | string
  }, "outerbox_id_innerbox_id">

  export type inbound_innerboxesOrderByWithAggregationInput = {
    outerbox_id?: SortOrder
    innerbox_id?: SortOrder
    expected_qty?: SortOrder
    packed_by?: SortOrder
    status?: SortOrder
    claimed_at?: SortOrder
    last_seen_at?: SortOrder
    _count?: inbound_innerboxesCountOrderByAggregateInput
    _avg?: inbound_innerboxesAvgOrderByAggregateInput
    _max?: inbound_innerboxesMaxOrderByAggregateInput
    _min?: inbound_innerboxesMinOrderByAggregateInput
    _sum?: inbound_innerboxesSumOrderByAggregateInput
  }

  export type inbound_innerboxesScalarWhereWithAggregatesInput = {
    AND?: inbound_innerboxesScalarWhereWithAggregatesInput | inbound_innerboxesScalarWhereWithAggregatesInput[]
    OR?: inbound_innerboxesScalarWhereWithAggregatesInput[]
    NOT?: inbound_innerboxesScalarWhereWithAggregatesInput | inbound_innerboxesScalarWhereWithAggregatesInput[]
    outerbox_id?: StringWithAggregatesFilter<"inbound_innerboxes"> | string
    innerbox_id?: StringWithAggregatesFilter<"inbound_innerboxes"> | string
    expected_qty?: IntWithAggregatesFilter<"inbound_innerboxes"> | number
    packed_by?: StringWithAggregatesFilter<"inbound_innerboxes"> | string
    status?: StringWithAggregatesFilter<"inbound_innerboxes"> | string
    claimed_at?: DateTimeWithAggregatesFilter<"inbound_innerboxes"> | Date | string
    last_seen_at?: DateTimeWithAggregatesFilter<"inbound_innerboxes"> | Date | string
  }

  export type inbound_itemsWhereInput = {
    AND?: inbound_itemsWhereInput | inbound_itemsWhereInput[]
    OR?: inbound_itemsWhereInput[]
    NOT?: inbound_itemsWhereInput | inbound_itemsWhereInput[]
    id?: BigIntFilter<"inbound_items"> | bigint | number
    outerbox_id?: StringFilter<"inbound_items"> | string
    innerbox_id?: StringFilter<"inbound_items"> | string
    sku?: StringFilter<"inbound_items"> | string
    serial_number?: StringFilter<"inbound_items"> | string
    created_at?: DateTimeFilter<"inbound_items"> | Date | string
    packed_by?: StringNullableFilter<"inbound_items"> | string | null
    session_id?: BigIntNullableFilter<"inbound_items"> | bigint | number | null
  }

  export type inbound_itemsOrderByWithRelationInput = {
    id?: SortOrder
    outerbox_id?: SortOrder
    innerbox_id?: SortOrder
    sku?: SortOrder
    serial_number?: SortOrder
    created_at?: SortOrder
    packed_by?: SortOrderInput | SortOrder
    session_id?: SortOrderInput | SortOrder
  }

  export type inbound_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    serial_number?: string
    AND?: inbound_itemsWhereInput | inbound_itemsWhereInput[]
    OR?: inbound_itemsWhereInput[]
    NOT?: inbound_itemsWhereInput | inbound_itemsWhereInput[]
    outerbox_id?: StringFilter<"inbound_items"> | string
    innerbox_id?: StringFilter<"inbound_items"> | string
    sku?: StringFilter<"inbound_items"> | string
    created_at?: DateTimeFilter<"inbound_items"> | Date | string
    packed_by?: StringNullableFilter<"inbound_items"> | string | null
    session_id?: BigIntNullableFilter<"inbound_items"> | bigint | number | null
  }, "id" | "serial_number">

  export type inbound_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    outerbox_id?: SortOrder
    innerbox_id?: SortOrder
    sku?: SortOrder
    serial_number?: SortOrder
    created_at?: SortOrder
    packed_by?: SortOrderInput | SortOrder
    session_id?: SortOrderInput | SortOrder
    _count?: inbound_itemsCountOrderByAggregateInput
    _avg?: inbound_itemsAvgOrderByAggregateInput
    _max?: inbound_itemsMaxOrderByAggregateInput
    _min?: inbound_itemsMinOrderByAggregateInput
    _sum?: inbound_itemsSumOrderByAggregateInput
  }

  export type inbound_itemsScalarWhereWithAggregatesInput = {
    AND?: inbound_itemsScalarWhereWithAggregatesInput | inbound_itemsScalarWhereWithAggregatesInput[]
    OR?: inbound_itemsScalarWhereWithAggregatesInput[]
    NOT?: inbound_itemsScalarWhereWithAggregatesInput | inbound_itemsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"inbound_items"> | bigint | number
    outerbox_id?: StringWithAggregatesFilter<"inbound_items"> | string
    innerbox_id?: StringWithAggregatesFilter<"inbound_items"> | string
    sku?: StringWithAggregatesFilter<"inbound_items"> | string
    serial_number?: StringWithAggregatesFilter<"inbound_items"> | string
    created_at?: DateTimeWithAggregatesFilter<"inbound_items"> | Date | string
    packed_by?: StringNullableWithAggregatesFilter<"inbound_items"> | string | null
    session_id?: BigIntNullableWithAggregatesFilter<"inbound_items"> | bigint | number | null
  }

  export type inbound_sessionsWhereInput = {
    AND?: inbound_sessionsWhereInput | inbound_sessionsWhereInput[]
    OR?: inbound_sessionsWhereInput[]
    NOT?: inbound_sessionsWhereInput | inbound_sessionsWhereInput[]
    id?: BigIntFilter<"inbound_sessions"> | bigint | number
    outerbox_id?: StringFilter<"inbound_sessions"> | string
    innerbox_id?: StringFilter<"inbound_sessions"> | string
    expected_qty?: IntFilter<"inbound_sessions"> | number
    status?: StringFilter<"inbound_sessions"> | string
    locked_by?: StringFilter<"inbound_sessions"> | string
    locked_at?: DateTimeFilter<"inbound_sessions"> | Date | string
    last_seen?: DateTimeFilter<"inbound_sessions"> | Date | string
    confirmed_at?: DateTimeNullableFilter<"inbound_sessions"> | Date | string | null
    locked_sku?: StringNullableFilter<"inbound_sessions"> | string | null
  }

  export type inbound_sessionsOrderByWithRelationInput = {
    id?: SortOrder
    outerbox_id?: SortOrder
    innerbox_id?: SortOrder
    expected_qty?: SortOrder
    status?: SortOrder
    locked_by?: SortOrder
    locked_at?: SortOrder
    last_seen?: SortOrder
    confirmed_at?: SortOrderInput | SortOrder
    locked_sku?: SortOrderInput | SortOrder
  }

  export type inbound_sessionsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    outerbox_id_innerbox_id?: inbound_sessionsOuterbox_idInnerbox_idCompoundUniqueInput
    AND?: inbound_sessionsWhereInput | inbound_sessionsWhereInput[]
    OR?: inbound_sessionsWhereInput[]
    NOT?: inbound_sessionsWhereInput | inbound_sessionsWhereInput[]
    outerbox_id?: StringFilter<"inbound_sessions"> | string
    innerbox_id?: StringFilter<"inbound_sessions"> | string
    expected_qty?: IntFilter<"inbound_sessions"> | number
    status?: StringFilter<"inbound_sessions"> | string
    locked_by?: StringFilter<"inbound_sessions"> | string
    locked_at?: DateTimeFilter<"inbound_sessions"> | Date | string
    last_seen?: DateTimeFilter<"inbound_sessions"> | Date | string
    confirmed_at?: DateTimeNullableFilter<"inbound_sessions"> | Date | string | null
    locked_sku?: StringNullableFilter<"inbound_sessions"> | string | null
  }, "id" | "outerbox_id_innerbox_id">

  export type inbound_sessionsOrderByWithAggregationInput = {
    id?: SortOrder
    outerbox_id?: SortOrder
    innerbox_id?: SortOrder
    expected_qty?: SortOrder
    status?: SortOrder
    locked_by?: SortOrder
    locked_at?: SortOrder
    last_seen?: SortOrder
    confirmed_at?: SortOrderInput | SortOrder
    locked_sku?: SortOrderInput | SortOrder
    _count?: inbound_sessionsCountOrderByAggregateInput
    _avg?: inbound_sessionsAvgOrderByAggregateInput
    _max?: inbound_sessionsMaxOrderByAggregateInput
    _min?: inbound_sessionsMinOrderByAggregateInput
    _sum?: inbound_sessionsSumOrderByAggregateInput
  }

  export type inbound_sessionsScalarWhereWithAggregatesInput = {
    AND?: inbound_sessionsScalarWhereWithAggregatesInput | inbound_sessionsScalarWhereWithAggregatesInput[]
    OR?: inbound_sessionsScalarWhereWithAggregatesInput[]
    NOT?: inbound_sessionsScalarWhereWithAggregatesInput | inbound_sessionsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"inbound_sessions"> | bigint | number
    outerbox_id?: StringWithAggregatesFilter<"inbound_sessions"> | string
    innerbox_id?: StringWithAggregatesFilter<"inbound_sessions"> | string
    expected_qty?: IntWithAggregatesFilter<"inbound_sessions"> | number
    status?: StringWithAggregatesFilter<"inbound_sessions"> | string
    locked_by?: StringWithAggregatesFilter<"inbound_sessions"> | string
    locked_at?: DateTimeWithAggregatesFilter<"inbound_sessions"> | Date | string
    last_seen?: DateTimeWithAggregatesFilter<"inbound_sessions"> | Date | string
    confirmed_at?: DateTimeNullableWithAggregatesFilter<"inbound_sessions"> | Date | string | null
    locked_sku?: StringNullableWithAggregatesFilter<"inbound_sessions"> | string | null
  }

  export type operatorsWhereInput = {
    AND?: operatorsWhereInput | operatorsWhereInput[]
    OR?: operatorsWhereInput[]
    NOT?: operatorsWhereInput | operatorsWhereInput[]
    id?: StringFilter<"operators"> | string
    name?: StringFilter<"operators"> | string
    created_at?: DateTimeFilter<"operators"> | Date | string
    updated_at?: DateTimeFilter<"operators"> | Date | string
    password_hash?: StringNullableFilter<"operators"> | string | null
  }

  export type operatorsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    password_hash?: SortOrderInput | SortOrder
  }

  export type operatorsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: operatorsWhereInput | operatorsWhereInput[]
    OR?: operatorsWhereInput[]
    NOT?: operatorsWhereInput | operatorsWhereInput[]
    created_at?: DateTimeFilter<"operators"> | Date | string
    updated_at?: DateTimeFilter<"operators"> | Date | string
    password_hash?: StringNullableFilter<"operators"> | string | null
  }, "id" | "name">

  export type operatorsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    password_hash?: SortOrderInput | SortOrder
    _count?: operatorsCountOrderByAggregateInput
    _max?: operatorsMaxOrderByAggregateInput
    _min?: operatorsMinOrderByAggregateInput
  }

  export type operatorsScalarWhereWithAggregatesInput = {
    AND?: operatorsScalarWhereWithAggregatesInput | operatorsScalarWhereWithAggregatesInput[]
    OR?: operatorsScalarWhereWithAggregatesInput[]
    NOT?: operatorsScalarWhereWithAggregatesInput | operatorsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"operators"> | string
    name?: StringWithAggregatesFilter<"operators"> | string
    created_at?: DateTimeWithAggregatesFilter<"operators"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"operators"> | Date | string
    password_hash?: StringNullableWithAggregatesFilter<"operators"> | string | null
  }

  export type push_subscriptionsWhereInput = {
    AND?: push_subscriptionsWhereInput | push_subscriptionsWhereInput[]
    OR?: push_subscriptionsWhereInput[]
    NOT?: push_subscriptionsWhereInput | push_subscriptionsWhereInput[]
    operator_name?: StringFilter<"push_subscriptions"> | string
    subscription?: JsonFilter<"push_subscriptions">
    updated_at?: DateTimeNullableFilter<"push_subscriptions"> | Date | string | null
  }

  export type push_subscriptionsOrderByWithRelationInput = {
    operator_name?: SortOrder
    subscription?: SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type push_subscriptionsWhereUniqueInput = Prisma.AtLeast<{
    operator_name?: string
    AND?: push_subscriptionsWhereInput | push_subscriptionsWhereInput[]
    OR?: push_subscriptionsWhereInput[]
    NOT?: push_subscriptionsWhereInput | push_subscriptionsWhereInput[]
    subscription?: JsonFilter<"push_subscriptions">
    updated_at?: DateTimeNullableFilter<"push_subscriptions"> | Date | string | null
  }, "operator_name">

  export type push_subscriptionsOrderByWithAggregationInput = {
    operator_name?: SortOrder
    subscription?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: push_subscriptionsCountOrderByAggregateInput
    _max?: push_subscriptionsMaxOrderByAggregateInput
    _min?: push_subscriptionsMinOrderByAggregateInput
  }

  export type push_subscriptionsScalarWhereWithAggregatesInput = {
    AND?: push_subscriptionsScalarWhereWithAggregatesInput | push_subscriptionsScalarWhereWithAggregatesInput[]
    OR?: push_subscriptionsScalarWhereWithAggregatesInput[]
    NOT?: push_subscriptionsScalarWhereWithAggregatesInput | push_subscriptionsScalarWhereWithAggregatesInput[]
    operator_name?: StringWithAggregatesFilter<"push_subscriptions"> | string
    subscription?: JsonWithAggregatesFilter<"push_subscriptions">
    updated_at?: DateTimeNullableWithAggregatesFilter<"push_subscriptions"> | Date | string | null
  }

  export type inbound_innerboxesCreateInput = {
    outerbox_id: string
    innerbox_id: string
    expected_qty: number
    packed_by: string
    status?: string
    claimed_at?: Date | string
    last_seen_at?: Date | string
  }

  export type inbound_innerboxesUncheckedCreateInput = {
    outerbox_id: string
    innerbox_id: string
    expected_qty: number
    packed_by: string
    status?: string
    claimed_at?: Date | string
    last_seen_at?: Date | string
  }

  export type inbound_innerboxesUpdateInput = {
    outerbox_id?: StringFieldUpdateOperationsInput | string
    innerbox_id?: StringFieldUpdateOperationsInput | string
    expected_qty?: IntFieldUpdateOperationsInput | number
    packed_by?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inbound_innerboxesUncheckedUpdateInput = {
    outerbox_id?: StringFieldUpdateOperationsInput | string
    innerbox_id?: StringFieldUpdateOperationsInput | string
    expected_qty?: IntFieldUpdateOperationsInput | number
    packed_by?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inbound_innerboxesCreateManyInput = {
    outerbox_id: string
    innerbox_id: string
    expected_qty: number
    packed_by: string
    status?: string
    claimed_at?: Date | string
    last_seen_at?: Date | string
  }

  export type inbound_innerboxesUpdateManyMutationInput = {
    outerbox_id?: StringFieldUpdateOperationsInput | string
    innerbox_id?: StringFieldUpdateOperationsInput | string
    expected_qty?: IntFieldUpdateOperationsInput | number
    packed_by?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inbound_innerboxesUncheckedUpdateManyInput = {
    outerbox_id?: StringFieldUpdateOperationsInput | string
    innerbox_id?: StringFieldUpdateOperationsInput | string
    expected_qty?: IntFieldUpdateOperationsInput | number
    packed_by?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    claimed_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type inbound_itemsCreateInput = {
    id?: bigint | number
    outerbox_id: string
    innerbox_id: string
    sku: string
    serial_number: string
    created_at?: Date | string
    packed_by?: string | null
    session_id?: bigint | number | null
  }

  export type inbound_itemsUncheckedCreateInput = {
    id?: bigint | number
    outerbox_id: string
    innerbox_id: string
    sku: string
    serial_number: string
    created_at?: Date | string
    packed_by?: string | null
    session_id?: bigint | number | null
  }

  export type inbound_itemsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    outerbox_id?: StringFieldUpdateOperationsInput | string
    innerbox_id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    serial_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    packed_by?: NullableStringFieldUpdateOperationsInput | string | null
    session_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type inbound_itemsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    outerbox_id?: StringFieldUpdateOperationsInput | string
    innerbox_id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    serial_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    packed_by?: NullableStringFieldUpdateOperationsInput | string | null
    session_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type inbound_itemsCreateManyInput = {
    id?: bigint | number
    outerbox_id: string
    innerbox_id: string
    sku: string
    serial_number: string
    created_at?: Date | string
    packed_by?: string | null
    session_id?: bigint | number | null
  }

  export type inbound_itemsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    outerbox_id?: StringFieldUpdateOperationsInput | string
    innerbox_id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    serial_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    packed_by?: NullableStringFieldUpdateOperationsInput | string | null
    session_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type inbound_itemsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    outerbox_id?: StringFieldUpdateOperationsInput | string
    innerbox_id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    serial_number?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    packed_by?: NullableStringFieldUpdateOperationsInput | string | null
    session_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type inbound_sessionsCreateInput = {
    id?: bigint | number
    outerbox_id: string
    innerbox_id: string
    expected_qty?: number
    status?: string
    locked_by: string
    locked_at?: Date | string
    last_seen?: Date | string
    confirmed_at?: Date | string | null
    locked_sku?: string | null
  }

  export type inbound_sessionsUncheckedCreateInput = {
    id?: bigint | number
    outerbox_id: string
    innerbox_id: string
    expected_qty?: number
    status?: string
    locked_by: string
    locked_at?: Date | string
    last_seen?: Date | string
    confirmed_at?: Date | string | null
    locked_sku?: string | null
  }

  export type inbound_sessionsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    outerbox_id?: StringFieldUpdateOperationsInput | string
    innerbox_id?: StringFieldUpdateOperationsInput | string
    expected_qty?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    locked_by?: StringFieldUpdateOperationsInput | string
    locked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locked_sku?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inbound_sessionsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    outerbox_id?: StringFieldUpdateOperationsInput | string
    innerbox_id?: StringFieldUpdateOperationsInput | string
    expected_qty?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    locked_by?: StringFieldUpdateOperationsInput | string
    locked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locked_sku?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inbound_sessionsCreateManyInput = {
    id?: bigint | number
    outerbox_id: string
    innerbox_id: string
    expected_qty?: number
    status?: string
    locked_by: string
    locked_at?: Date | string
    last_seen?: Date | string
    confirmed_at?: Date | string | null
    locked_sku?: string | null
  }

  export type inbound_sessionsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    outerbox_id?: StringFieldUpdateOperationsInput | string
    innerbox_id?: StringFieldUpdateOperationsInput | string
    expected_qty?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    locked_by?: StringFieldUpdateOperationsInput | string
    locked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locked_sku?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type inbound_sessionsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    outerbox_id?: StringFieldUpdateOperationsInput | string
    innerbox_id?: StringFieldUpdateOperationsInput | string
    expected_qty?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    locked_by?: StringFieldUpdateOperationsInput | string
    locked_at?: DateTimeFieldUpdateOperationsInput | Date | string
    last_seen?: DateTimeFieldUpdateOperationsInput | Date | string
    confirmed_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    locked_sku?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type operatorsCreateInput = {
    id: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    password_hash?: string | null
  }

  export type operatorsUncheckedCreateInput = {
    id: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    password_hash?: string | null
  }

  export type operatorsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type operatorsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type operatorsCreateManyInput = {
    id: string
    name: string
    created_at?: Date | string
    updated_at?: Date | string
    password_hash?: string | null
  }

  export type operatorsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type operatorsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    password_hash?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type push_subscriptionsCreateInput = {
    operator_name: string
    subscription: JsonNullValueInput | InputJsonValue
    updated_at?: Date | string | null
  }

  export type push_subscriptionsUncheckedCreateInput = {
    operator_name: string
    subscription: JsonNullValueInput | InputJsonValue
    updated_at?: Date | string | null
  }

  export type push_subscriptionsUpdateInput = {
    operator_name?: StringFieldUpdateOperationsInput | string
    subscription?: JsonNullValueInput | InputJsonValue
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type push_subscriptionsUncheckedUpdateInput = {
    operator_name?: StringFieldUpdateOperationsInput | string
    subscription?: JsonNullValueInput | InputJsonValue
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type push_subscriptionsCreateManyInput = {
    operator_name: string
    subscription: JsonNullValueInput | InputJsonValue
    updated_at?: Date | string | null
  }

  export type push_subscriptionsUpdateManyMutationInput = {
    operator_name?: StringFieldUpdateOperationsInput | string
    subscription?: JsonNullValueInput | InputJsonValue
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type push_subscriptionsUncheckedUpdateManyInput = {
    operator_name?: StringFieldUpdateOperationsInput | string
    subscription?: JsonNullValueInput | InputJsonValue
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type inbound_innerboxesOuterbox_idInnerbox_idCompoundUniqueInput = {
    outerbox_id: string
    innerbox_id: string
  }

  export type inbound_innerboxesCountOrderByAggregateInput = {
    outerbox_id?: SortOrder
    innerbox_id?: SortOrder
    expected_qty?: SortOrder
    packed_by?: SortOrder
    status?: SortOrder
    claimed_at?: SortOrder
    last_seen_at?: SortOrder
  }

  export type inbound_innerboxesAvgOrderByAggregateInput = {
    expected_qty?: SortOrder
  }

  export type inbound_innerboxesMaxOrderByAggregateInput = {
    outerbox_id?: SortOrder
    innerbox_id?: SortOrder
    expected_qty?: SortOrder
    packed_by?: SortOrder
    status?: SortOrder
    claimed_at?: SortOrder
    last_seen_at?: SortOrder
  }

  export type inbound_innerboxesMinOrderByAggregateInput = {
    outerbox_id?: SortOrder
    innerbox_id?: SortOrder
    expected_qty?: SortOrder
    packed_by?: SortOrder
    status?: SortOrder
    claimed_at?: SortOrder
    last_seen_at?: SortOrder
  }

  export type inbound_innerboxesSumOrderByAggregateInput = {
    expected_qty?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type inbound_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    outerbox_id?: SortOrder
    innerbox_id?: SortOrder
    sku?: SortOrder
    serial_number?: SortOrder
    created_at?: SortOrder
    packed_by?: SortOrder
    session_id?: SortOrder
  }

  export type inbound_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
  }

  export type inbound_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    outerbox_id?: SortOrder
    innerbox_id?: SortOrder
    sku?: SortOrder
    serial_number?: SortOrder
    created_at?: SortOrder
    packed_by?: SortOrder
    session_id?: SortOrder
  }

  export type inbound_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    outerbox_id?: SortOrder
    innerbox_id?: SortOrder
    sku?: SortOrder
    serial_number?: SortOrder
    created_at?: SortOrder
    packed_by?: SortOrder
    session_id?: SortOrder
  }

  export type inbound_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    session_id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type inbound_sessionsOuterbox_idInnerbox_idCompoundUniqueInput = {
    outerbox_id: string
    innerbox_id: string
  }

  export type inbound_sessionsCountOrderByAggregateInput = {
    id?: SortOrder
    outerbox_id?: SortOrder
    innerbox_id?: SortOrder
    expected_qty?: SortOrder
    status?: SortOrder
    locked_by?: SortOrder
    locked_at?: SortOrder
    last_seen?: SortOrder
    confirmed_at?: SortOrder
    locked_sku?: SortOrder
  }

  export type inbound_sessionsAvgOrderByAggregateInput = {
    id?: SortOrder
    expected_qty?: SortOrder
  }

  export type inbound_sessionsMaxOrderByAggregateInput = {
    id?: SortOrder
    outerbox_id?: SortOrder
    innerbox_id?: SortOrder
    expected_qty?: SortOrder
    status?: SortOrder
    locked_by?: SortOrder
    locked_at?: SortOrder
    last_seen?: SortOrder
    confirmed_at?: SortOrder
    locked_sku?: SortOrder
  }

  export type inbound_sessionsMinOrderByAggregateInput = {
    id?: SortOrder
    outerbox_id?: SortOrder
    innerbox_id?: SortOrder
    expected_qty?: SortOrder
    status?: SortOrder
    locked_by?: SortOrder
    locked_at?: SortOrder
    last_seen?: SortOrder
    confirmed_at?: SortOrder
    locked_sku?: SortOrder
  }

  export type inbound_sessionsSumOrderByAggregateInput = {
    id?: SortOrder
    expected_qty?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type operatorsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    password_hash?: SortOrder
  }

  export type operatorsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    password_hash?: SortOrder
  }

  export type operatorsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    password_hash?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type push_subscriptionsCountOrderByAggregateInput = {
    operator_name?: SortOrder
    subscription?: SortOrder
    updated_at?: SortOrder
  }

  export type push_subscriptionsMaxOrderByAggregateInput = {
    operator_name?: SortOrder
    updated_at?: SortOrder
  }

  export type push_subscriptionsMinOrderByAggregateInput = {
    operator_name?: SortOrder
    updated_at?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}