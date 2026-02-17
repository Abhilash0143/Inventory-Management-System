
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
 * Model phase1_boxes
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type phase1_boxes = $Result.DefaultSelection<Prisma.$phase1_boxesPayload>
/**
 * Model phase2_box_work
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type phase2_box_work = $Result.DefaultSelection<Prisma.$phase2_box_workPayload>
/**
 * Model phase2_lines
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type phase2_lines = $Result.DefaultSelection<Prisma.$phase2_linesPayload>
/**
 * Model report_rooms
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type report_rooms = $Result.DefaultSelection<Prisma.$report_roomsPayload>
/**
 * Model stock_reports
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type stock_reports = $Result.DefaultSelection<Prisma.$stock_reportsPayload>
/**
 * Model stock_rooms
 * 
 */
export type stock_rooms = $Result.DefaultSelection<Prisma.$stock_roomsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Phase1_boxes
 * const phase1_boxes = await prisma.phase1_boxes.findMany()
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
   * // Fetch zero or more Phase1_boxes
   * const phase1_boxes = await prisma.phase1_boxes.findMany()
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
   * `prisma.phase1_boxes`: Exposes CRUD operations for the **phase1_boxes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Phase1_boxes
    * const phase1_boxes = await prisma.phase1_boxes.findMany()
    * ```
    */
  get phase1_boxes(): Prisma.phase1_boxesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.phase2_box_work`: Exposes CRUD operations for the **phase2_box_work** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Phase2_box_works
    * const phase2_box_works = await prisma.phase2_box_work.findMany()
    * ```
    */
  get phase2_box_work(): Prisma.phase2_box_workDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.phase2_lines`: Exposes CRUD operations for the **phase2_lines** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Phase2_lines
    * const phase2_lines = await prisma.phase2_lines.findMany()
    * ```
    */
  get phase2_lines(): Prisma.phase2_linesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.report_rooms`: Exposes CRUD operations for the **report_rooms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Report_rooms
    * const report_rooms = await prisma.report_rooms.findMany()
    * ```
    */
  get report_rooms(): Prisma.report_roomsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock_reports`: Exposes CRUD operations for the **stock_reports** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stock_reports
    * const stock_reports = await prisma.stock_reports.findMany()
    * ```
    */
  get stock_reports(): Prisma.stock_reportsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock_rooms`: Exposes CRUD operations for the **stock_rooms** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stock_rooms
    * const stock_rooms = await prisma.stock_rooms.findMany()
    * ```
    */
  get stock_rooms(): Prisma.stock_roomsDelegate<ExtArgs, ClientOptions>;
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
    phase1_boxes: 'phase1_boxes',
    phase2_box_work: 'phase2_box_work',
    phase2_lines: 'phase2_lines',
    report_rooms: 'report_rooms',
    stock_reports: 'stock_reports',
    stock_rooms: 'stock_rooms'
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
      modelProps: "phase1_boxes" | "phase2_box_work" | "phase2_lines" | "report_rooms" | "stock_reports" | "stock_rooms"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      phase1_boxes: {
        payload: Prisma.$phase1_boxesPayload<ExtArgs>
        fields: Prisma.phase1_boxesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.phase1_boxesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase1_boxesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.phase1_boxesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase1_boxesPayload>
          }
          findFirst: {
            args: Prisma.phase1_boxesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase1_boxesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.phase1_boxesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase1_boxesPayload>
          }
          findMany: {
            args: Prisma.phase1_boxesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase1_boxesPayload>[]
          }
          create: {
            args: Prisma.phase1_boxesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase1_boxesPayload>
          }
          createMany: {
            args: Prisma.phase1_boxesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.phase1_boxesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase1_boxesPayload>[]
          }
          delete: {
            args: Prisma.phase1_boxesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase1_boxesPayload>
          }
          update: {
            args: Prisma.phase1_boxesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase1_boxesPayload>
          }
          deleteMany: {
            args: Prisma.phase1_boxesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.phase1_boxesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.phase1_boxesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase1_boxesPayload>[]
          }
          upsert: {
            args: Prisma.phase1_boxesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase1_boxesPayload>
          }
          aggregate: {
            args: Prisma.Phase1_boxesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhase1_boxes>
          }
          groupBy: {
            args: Prisma.phase1_boxesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Phase1_boxesGroupByOutputType>[]
          }
          count: {
            args: Prisma.phase1_boxesCountArgs<ExtArgs>
            result: $Utils.Optional<Phase1_boxesCountAggregateOutputType> | number
          }
        }
      }
      phase2_box_work: {
        payload: Prisma.$phase2_box_workPayload<ExtArgs>
        fields: Prisma.phase2_box_workFieldRefs
        operations: {
          findUnique: {
            args: Prisma.phase2_box_workFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_box_workPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.phase2_box_workFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_box_workPayload>
          }
          findFirst: {
            args: Prisma.phase2_box_workFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_box_workPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.phase2_box_workFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_box_workPayload>
          }
          findMany: {
            args: Prisma.phase2_box_workFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_box_workPayload>[]
          }
          create: {
            args: Prisma.phase2_box_workCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_box_workPayload>
          }
          createMany: {
            args: Prisma.phase2_box_workCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.phase2_box_workCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_box_workPayload>[]
          }
          delete: {
            args: Prisma.phase2_box_workDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_box_workPayload>
          }
          update: {
            args: Prisma.phase2_box_workUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_box_workPayload>
          }
          deleteMany: {
            args: Prisma.phase2_box_workDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.phase2_box_workUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.phase2_box_workUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_box_workPayload>[]
          }
          upsert: {
            args: Prisma.phase2_box_workUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_box_workPayload>
          }
          aggregate: {
            args: Prisma.Phase2_box_workAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhase2_box_work>
          }
          groupBy: {
            args: Prisma.phase2_box_workGroupByArgs<ExtArgs>
            result: $Utils.Optional<Phase2_box_workGroupByOutputType>[]
          }
          count: {
            args: Prisma.phase2_box_workCountArgs<ExtArgs>
            result: $Utils.Optional<Phase2_box_workCountAggregateOutputType> | number
          }
        }
      }
      phase2_lines: {
        payload: Prisma.$phase2_linesPayload<ExtArgs>
        fields: Prisma.phase2_linesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.phase2_linesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_linesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.phase2_linesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_linesPayload>
          }
          findFirst: {
            args: Prisma.phase2_linesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_linesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.phase2_linesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_linesPayload>
          }
          findMany: {
            args: Prisma.phase2_linesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_linesPayload>[]
          }
          create: {
            args: Prisma.phase2_linesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_linesPayload>
          }
          createMany: {
            args: Prisma.phase2_linesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.phase2_linesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_linesPayload>[]
          }
          delete: {
            args: Prisma.phase2_linesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_linesPayload>
          }
          update: {
            args: Prisma.phase2_linesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_linesPayload>
          }
          deleteMany: {
            args: Prisma.phase2_linesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.phase2_linesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.phase2_linesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_linesPayload>[]
          }
          upsert: {
            args: Prisma.phase2_linesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$phase2_linesPayload>
          }
          aggregate: {
            args: Prisma.Phase2_linesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhase2_lines>
          }
          groupBy: {
            args: Prisma.phase2_linesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Phase2_linesGroupByOutputType>[]
          }
          count: {
            args: Prisma.phase2_linesCountArgs<ExtArgs>
            result: $Utils.Optional<Phase2_linesCountAggregateOutputType> | number
          }
        }
      }
      report_rooms: {
        payload: Prisma.$report_roomsPayload<ExtArgs>
        fields: Prisma.report_roomsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.report_roomsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_roomsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.report_roomsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_roomsPayload>
          }
          findFirst: {
            args: Prisma.report_roomsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_roomsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.report_roomsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_roomsPayload>
          }
          findMany: {
            args: Prisma.report_roomsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_roomsPayload>[]
          }
          create: {
            args: Prisma.report_roomsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_roomsPayload>
          }
          createMany: {
            args: Prisma.report_roomsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.report_roomsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_roomsPayload>[]
          }
          delete: {
            args: Prisma.report_roomsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_roomsPayload>
          }
          update: {
            args: Prisma.report_roomsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_roomsPayload>
          }
          deleteMany: {
            args: Prisma.report_roomsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.report_roomsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.report_roomsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_roomsPayload>[]
          }
          upsert: {
            args: Prisma.report_roomsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$report_roomsPayload>
          }
          aggregate: {
            args: Prisma.Report_roomsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReport_rooms>
          }
          groupBy: {
            args: Prisma.report_roomsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Report_roomsGroupByOutputType>[]
          }
          count: {
            args: Prisma.report_roomsCountArgs<ExtArgs>
            result: $Utils.Optional<Report_roomsCountAggregateOutputType> | number
          }
        }
      }
      stock_reports: {
        payload: Prisma.$stock_reportsPayload<ExtArgs>
        fields: Prisma.stock_reportsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stock_reportsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_reportsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stock_reportsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_reportsPayload>
          }
          findFirst: {
            args: Prisma.stock_reportsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_reportsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stock_reportsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_reportsPayload>
          }
          findMany: {
            args: Prisma.stock_reportsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_reportsPayload>[]
          }
          create: {
            args: Prisma.stock_reportsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_reportsPayload>
          }
          createMany: {
            args: Prisma.stock_reportsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stock_reportsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_reportsPayload>[]
          }
          delete: {
            args: Prisma.stock_reportsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_reportsPayload>
          }
          update: {
            args: Prisma.stock_reportsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_reportsPayload>
          }
          deleteMany: {
            args: Prisma.stock_reportsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stock_reportsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stock_reportsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_reportsPayload>[]
          }
          upsert: {
            args: Prisma.stock_reportsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_reportsPayload>
          }
          aggregate: {
            args: Prisma.Stock_reportsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock_reports>
          }
          groupBy: {
            args: Prisma.stock_reportsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Stock_reportsGroupByOutputType>[]
          }
          count: {
            args: Prisma.stock_reportsCountArgs<ExtArgs>
            result: $Utils.Optional<Stock_reportsCountAggregateOutputType> | number
          }
        }
      }
      stock_rooms: {
        payload: Prisma.$stock_roomsPayload<ExtArgs>
        fields: Prisma.stock_roomsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stock_roomsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_roomsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stock_roomsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_roomsPayload>
          }
          findFirst: {
            args: Prisma.stock_roomsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_roomsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stock_roomsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_roomsPayload>
          }
          findMany: {
            args: Prisma.stock_roomsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_roomsPayload>[]
          }
          create: {
            args: Prisma.stock_roomsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_roomsPayload>
          }
          createMany: {
            args: Prisma.stock_roomsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stock_roomsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_roomsPayload>[]
          }
          delete: {
            args: Prisma.stock_roomsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_roomsPayload>
          }
          update: {
            args: Prisma.stock_roomsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_roomsPayload>
          }
          deleteMany: {
            args: Prisma.stock_roomsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stock_roomsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stock_roomsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_roomsPayload>[]
          }
          upsert: {
            args: Prisma.stock_roomsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_roomsPayload>
          }
          aggregate: {
            args: Prisma.Stock_roomsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock_rooms>
          }
          groupBy: {
            args: Prisma.stock_roomsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Stock_roomsGroupByOutputType>[]
          }
          count: {
            args: Prisma.stock_roomsCountArgs<ExtArgs>
            result: $Utils.Optional<Stock_roomsCountAggregateOutputType> | number
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
    phase1_boxes?: phase1_boxesOmit
    phase2_box_work?: phase2_box_workOmit
    phase2_lines?: phase2_linesOmit
    report_rooms?: report_roomsOmit
    stock_reports?: stock_reportsOmit
    stock_rooms?: stock_roomsOmit
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
   * Count Type Stock_reportsCountOutputType
   */

  export type Stock_reportsCountOutputType = {
    phase1_boxes: number
    phase2_box_work: number
    phase2_lines: number
    report_rooms: number
  }

  export type Stock_reportsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phase1_boxes?: boolean | Stock_reportsCountOutputTypeCountPhase1_boxesArgs
    phase2_box_work?: boolean | Stock_reportsCountOutputTypeCountPhase2_box_workArgs
    phase2_lines?: boolean | Stock_reportsCountOutputTypeCountPhase2_linesArgs
    report_rooms?: boolean | Stock_reportsCountOutputTypeCountReport_roomsArgs
  }

  // Custom InputTypes
  /**
   * Stock_reportsCountOutputType without action
   */
  export type Stock_reportsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock_reportsCountOutputType
     */
    select?: Stock_reportsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Stock_reportsCountOutputType without action
   */
  export type Stock_reportsCountOutputTypeCountPhase1_boxesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: phase1_boxesWhereInput
  }

  /**
   * Stock_reportsCountOutputType without action
   */
  export type Stock_reportsCountOutputTypeCountPhase2_box_workArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: phase2_box_workWhereInput
  }

  /**
   * Stock_reportsCountOutputType without action
   */
  export type Stock_reportsCountOutputTypeCountPhase2_linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: phase2_linesWhereInput
  }

  /**
   * Stock_reportsCountOutputType without action
   */
  export type Stock_reportsCountOutputTypeCountReport_roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: report_roomsWhereInput
  }


  /**
   * Count Type Stock_roomsCountOutputType
   */

  export type Stock_roomsCountOutputType = {
    phase1_boxes: number
    phase2_box_work: number
    phase2_lines: number
    report_rooms: number
  }

  export type Stock_roomsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phase1_boxes?: boolean | Stock_roomsCountOutputTypeCountPhase1_boxesArgs
    phase2_box_work?: boolean | Stock_roomsCountOutputTypeCountPhase2_box_workArgs
    phase2_lines?: boolean | Stock_roomsCountOutputTypeCountPhase2_linesArgs
    report_rooms?: boolean | Stock_roomsCountOutputTypeCountReport_roomsArgs
  }

  // Custom InputTypes
  /**
   * Stock_roomsCountOutputType without action
   */
  export type Stock_roomsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock_roomsCountOutputType
     */
    select?: Stock_roomsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Stock_roomsCountOutputType without action
   */
  export type Stock_roomsCountOutputTypeCountPhase1_boxesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: phase1_boxesWhereInput
  }

  /**
   * Stock_roomsCountOutputType without action
   */
  export type Stock_roomsCountOutputTypeCountPhase2_box_workArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: phase2_box_workWhereInput
  }

  /**
   * Stock_roomsCountOutputType without action
   */
  export type Stock_roomsCountOutputTypeCountPhase2_linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: phase2_linesWhereInput
  }

  /**
   * Stock_roomsCountOutputType without action
   */
  export type Stock_roomsCountOutputTypeCountReport_roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: report_roomsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model phase1_boxes
   */

  export type AggregatePhase1_boxes = {
    _count: Phase1_boxesCountAggregateOutputType | null
    _avg: Phase1_boxesAvgAggregateOutputType | null
    _sum: Phase1_boxesSumAggregateOutputType | null
    _min: Phase1_boxesMinAggregateOutputType | null
    _max: Phase1_boxesMaxAggregateOutputType | null
  }

  export type Phase1_boxesAvgAggregateOutputType = {
    report_id: number | null
    room_id: number | null
    scan_count: number | null
  }

  export type Phase1_boxesSumAggregateOutputType = {
    report_id: bigint | null
    room_id: bigint | null
    scan_count: number | null
  }

  export type Phase1_boxesMinAggregateOutputType = {
    report_id: bigint | null
    room_id: bigint | null
    box_id: string | null
    scan_count: number | null
    status: string | null
  }

  export type Phase1_boxesMaxAggregateOutputType = {
    report_id: bigint | null
    room_id: bigint | null
    box_id: string | null
    scan_count: number | null
    status: string | null
  }

  export type Phase1_boxesCountAggregateOutputType = {
    report_id: number
    room_id: number
    box_id: number
    scan_count: number
    status: number
    _all: number
  }


  export type Phase1_boxesAvgAggregateInputType = {
    report_id?: true
    room_id?: true
    scan_count?: true
  }

  export type Phase1_boxesSumAggregateInputType = {
    report_id?: true
    room_id?: true
    scan_count?: true
  }

  export type Phase1_boxesMinAggregateInputType = {
    report_id?: true
    room_id?: true
    box_id?: true
    scan_count?: true
    status?: true
  }

  export type Phase1_boxesMaxAggregateInputType = {
    report_id?: true
    room_id?: true
    box_id?: true
    scan_count?: true
    status?: true
  }

  export type Phase1_boxesCountAggregateInputType = {
    report_id?: true
    room_id?: true
    box_id?: true
    scan_count?: true
    status?: true
    _all?: true
  }

  export type Phase1_boxesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which phase1_boxes to aggregate.
     */
    where?: phase1_boxesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phase1_boxes to fetch.
     */
    orderBy?: phase1_boxesOrderByWithRelationInput | phase1_boxesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: phase1_boxesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phase1_boxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phase1_boxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned phase1_boxes
    **/
    _count?: true | Phase1_boxesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Phase1_boxesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Phase1_boxesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Phase1_boxesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Phase1_boxesMaxAggregateInputType
  }

  export type GetPhase1_boxesAggregateType<T extends Phase1_boxesAggregateArgs> = {
        [P in keyof T & keyof AggregatePhase1_boxes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhase1_boxes[P]>
      : GetScalarType<T[P], AggregatePhase1_boxes[P]>
  }




  export type phase1_boxesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: phase1_boxesWhereInput
    orderBy?: phase1_boxesOrderByWithAggregationInput | phase1_boxesOrderByWithAggregationInput[]
    by: Phase1_boxesScalarFieldEnum[] | Phase1_boxesScalarFieldEnum
    having?: phase1_boxesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Phase1_boxesCountAggregateInputType | true
    _avg?: Phase1_boxesAvgAggregateInputType
    _sum?: Phase1_boxesSumAggregateInputType
    _min?: Phase1_boxesMinAggregateInputType
    _max?: Phase1_boxesMaxAggregateInputType
  }

  export type Phase1_boxesGroupByOutputType = {
    report_id: bigint
    room_id: bigint
    box_id: string
    scan_count: number
    status: string
    _count: Phase1_boxesCountAggregateOutputType | null
    _avg: Phase1_boxesAvgAggregateOutputType | null
    _sum: Phase1_boxesSumAggregateOutputType | null
    _min: Phase1_boxesMinAggregateOutputType | null
    _max: Phase1_boxesMaxAggregateOutputType | null
  }

  type GetPhase1_boxesGroupByPayload<T extends phase1_boxesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Phase1_boxesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Phase1_boxesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Phase1_boxesGroupByOutputType[P]>
            : GetScalarType<T[P], Phase1_boxesGroupByOutputType[P]>
        }
      >
    >


  export type phase1_boxesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    report_id?: boolean
    room_id?: boolean
    box_id?: boolean
    scan_count?: boolean
    status?: boolean
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phase1_boxes"]>

  export type phase1_boxesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    report_id?: boolean
    room_id?: boolean
    box_id?: boolean
    scan_count?: boolean
    status?: boolean
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phase1_boxes"]>

  export type phase1_boxesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    report_id?: boolean
    room_id?: boolean
    box_id?: boolean
    scan_count?: boolean
    status?: boolean
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phase1_boxes"]>

  export type phase1_boxesSelectScalar = {
    report_id?: boolean
    room_id?: boolean
    box_id?: boolean
    scan_count?: boolean
    status?: boolean
  }

  export type phase1_boxesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"report_id" | "room_id" | "box_id" | "scan_count" | "status", ExtArgs["result"]["phase1_boxes"]>
  export type phase1_boxesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }
  export type phase1_boxesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }
  export type phase1_boxesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }

  export type $phase1_boxesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "phase1_boxes"
    objects: {
      stock_reports: Prisma.$stock_reportsPayload<ExtArgs>
      stock_rooms: Prisma.$stock_roomsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      report_id: bigint
      room_id: bigint
      box_id: string
      scan_count: number
      status: string
    }, ExtArgs["result"]["phase1_boxes"]>
    composites: {}
  }

  type phase1_boxesGetPayload<S extends boolean | null | undefined | phase1_boxesDefaultArgs> = $Result.GetResult<Prisma.$phase1_boxesPayload, S>

  type phase1_boxesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<phase1_boxesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Phase1_boxesCountAggregateInputType | true
    }

  export interface phase1_boxesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['phase1_boxes'], meta: { name: 'phase1_boxes' } }
    /**
     * Find zero or one Phase1_boxes that matches the filter.
     * @param {phase1_boxesFindUniqueArgs} args - Arguments to find a Phase1_boxes
     * @example
     * // Get one Phase1_boxes
     * const phase1_boxes = await prisma.phase1_boxes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends phase1_boxesFindUniqueArgs>(args: SelectSubset<T, phase1_boxesFindUniqueArgs<ExtArgs>>): Prisma__phase1_boxesClient<$Result.GetResult<Prisma.$phase1_boxesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Phase1_boxes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {phase1_boxesFindUniqueOrThrowArgs} args - Arguments to find a Phase1_boxes
     * @example
     * // Get one Phase1_boxes
     * const phase1_boxes = await prisma.phase1_boxes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends phase1_boxesFindUniqueOrThrowArgs>(args: SelectSubset<T, phase1_boxesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__phase1_boxesClient<$Result.GetResult<Prisma.$phase1_boxesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phase1_boxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phase1_boxesFindFirstArgs} args - Arguments to find a Phase1_boxes
     * @example
     * // Get one Phase1_boxes
     * const phase1_boxes = await prisma.phase1_boxes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends phase1_boxesFindFirstArgs>(args?: SelectSubset<T, phase1_boxesFindFirstArgs<ExtArgs>>): Prisma__phase1_boxesClient<$Result.GetResult<Prisma.$phase1_boxesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phase1_boxes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phase1_boxesFindFirstOrThrowArgs} args - Arguments to find a Phase1_boxes
     * @example
     * // Get one Phase1_boxes
     * const phase1_boxes = await prisma.phase1_boxes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends phase1_boxesFindFirstOrThrowArgs>(args?: SelectSubset<T, phase1_boxesFindFirstOrThrowArgs<ExtArgs>>): Prisma__phase1_boxesClient<$Result.GetResult<Prisma.$phase1_boxesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Phase1_boxes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phase1_boxesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Phase1_boxes
     * const phase1_boxes = await prisma.phase1_boxes.findMany()
     * 
     * // Get first 10 Phase1_boxes
     * const phase1_boxes = await prisma.phase1_boxes.findMany({ take: 10 })
     * 
     * // Only select the `report_id`
     * const phase1_boxesWithReport_idOnly = await prisma.phase1_boxes.findMany({ select: { report_id: true } })
     * 
     */
    findMany<T extends phase1_boxesFindManyArgs>(args?: SelectSubset<T, phase1_boxesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phase1_boxesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Phase1_boxes.
     * @param {phase1_boxesCreateArgs} args - Arguments to create a Phase1_boxes.
     * @example
     * // Create one Phase1_boxes
     * const Phase1_boxes = await prisma.phase1_boxes.create({
     *   data: {
     *     // ... data to create a Phase1_boxes
     *   }
     * })
     * 
     */
    create<T extends phase1_boxesCreateArgs>(args: SelectSubset<T, phase1_boxesCreateArgs<ExtArgs>>): Prisma__phase1_boxesClient<$Result.GetResult<Prisma.$phase1_boxesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Phase1_boxes.
     * @param {phase1_boxesCreateManyArgs} args - Arguments to create many Phase1_boxes.
     * @example
     * // Create many Phase1_boxes
     * const phase1_boxes = await prisma.phase1_boxes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends phase1_boxesCreateManyArgs>(args?: SelectSubset<T, phase1_boxesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Phase1_boxes and returns the data saved in the database.
     * @param {phase1_boxesCreateManyAndReturnArgs} args - Arguments to create many Phase1_boxes.
     * @example
     * // Create many Phase1_boxes
     * const phase1_boxes = await prisma.phase1_boxes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Phase1_boxes and only return the `report_id`
     * const phase1_boxesWithReport_idOnly = await prisma.phase1_boxes.createManyAndReturn({
     *   select: { report_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends phase1_boxesCreateManyAndReturnArgs>(args?: SelectSubset<T, phase1_boxesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phase1_boxesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Phase1_boxes.
     * @param {phase1_boxesDeleteArgs} args - Arguments to delete one Phase1_boxes.
     * @example
     * // Delete one Phase1_boxes
     * const Phase1_boxes = await prisma.phase1_boxes.delete({
     *   where: {
     *     // ... filter to delete one Phase1_boxes
     *   }
     * })
     * 
     */
    delete<T extends phase1_boxesDeleteArgs>(args: SelectSubset<T, phase1_boxesDeleteArgs<ExtArgs>>): Prisma__phase1_boxesClient<$Result.GetResult<Prisma.$phase1_boxesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Phase1_boxes.
     * @param {phase1_boxesUpdateArgs} args - Arguments to update one Phase1_boxes.
     * @example
     * // Update one Phase1_boxes
     * const phase1_boxes = await prisma.phase1_boxes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends phase1_boxesUpdateArgs>(args: SelectSubset<T, phase1_boxesUpdateArgs<ExtArgs>>): Prisma__phase1_boxesClient<$Result.GetResult<Prisma.$phase1_boxesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Phase1_boxes.
     * @param {phase1_boxesDeleteManyArgs} args - Arguments to filter Phase1_boxes to delete.
     * @example
     * // Delete a few Phase1_boxes
     * const { count } = await prisma.phase1_boxes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends phase1_boxesDeleteManyArgs>(args?: SelectSubset<T, phase1_boxesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phase1_boxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phase1_boxesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Phase1_boxes
     * const phase1_boxes = await prisma.phase1_boxes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends phase1_boxesUpdateManyArgs>(args: SelectSubset<T, phase1_boxesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phase1_boxes and returns the data updated in the database.
     * @param {phase1_boxesUpdateManyAndReturnArgs} args - Arguments to update many Phase1_boxes.
     * @example
     * // Update many Phase1_boxes
     * const phase1_boxes = await prisma.phase1_boxes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Phase1_boxes and only return the `report_id`
     * const phase1_boxesWithReport_idOnly = await prisma.phase1_boxes.updateManyAndReturn({
     *   select: { report_id: true },
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
    updateManyAndReturn<T extends phase1_boxesUpdateManyAndReturnArgs>(args: SelectSubset<T, phase1_boxesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phase1_boxesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Phase1_boxes.
     * @param {phase1_boxesUpsertArgs} args - Arguments to update or create a Phase1_boxes.
     * @example
     * // Update or create a Phase1_boxes
     * const phase1_boxes = await prisma.phase1_boxes.upsert({
     *   create: {
     *     // ... data to create a Phase1_boxes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Phase1_boxes we want to update
     *   }
     * })
     */
    upsert<T extends phase1_boxesUpsertArgs>(args: SelectSubset<T, phase1_boxesUpsertArgs<ExtArgs>>): Prisma__phase1_boxesClient<$Result.GetResult<Prisma.$phase1_boxesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Phase1_boxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phase1_boxesCountArgs} args - Arguments to filter Phase1_boxes to count.
     * @example
     * // Count the number of Phase1_boxes
     * const count = await prisma.phase1_boxes.count({
     *   where: {
     *     // ... the filter for the Phase1_boxes we want to count
     *   }
     * })
    **/
    count<T extends phase1_boxesCountArgs>(
      args?: Subset<T, phase1_boxesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Phase1_boxesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Phase1_boxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Phase1_boxesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Phase1_boxesAggregateArgs>(args: Subset<T, Phase1_boxesAggregateArgs>): Prisma.PrismaPromise<GetPhase1_boxesAggregateType<T>>

    /**
     * Group by Phase1_boxes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phase1_boxesGroupByArgs} args - Group by arguments.
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
      T extends phase1_boxesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: phase1_boxesGroupByArgs['orderBy'] }
        : { orderBy?: phase1_boxesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, phase1_boxesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhase1_boxesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the phase1_boxes model
   */
  readonly fields: phase1_boxesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for phase1_boxes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__phase1_boxesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stock_reports<T extends stock_reportsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stock_reportsDefaultArgs<ExtArgs>>): Prisma__stock_reportsClient<$Result.GetResult<Prisma.$stock_reportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stock_rooms<T extends stock_roomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stock_roomsDefaultArgs<ExtArgs>>): Prisma__stock_roomsClient<$Result.GetResult<Prisma.$stock_roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the phase1_boxes model
   */
  interface phase1_boxesFieldRefs {
    readonly report_id: FieldRef<"phase1_boxes", 'BigInt'>
    readonly room_id: FieldRef<"phase1_boxes", 'BigInt'>
    readonly box_id: FieldRef<"phase1_boxes", 'String'>
    readonly scan_count: FieldRef<"phase1_boxes", 'Int'>
    readonly status: FieldRef<"phase1_boxes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * phase1_boxes findUnique
   */
  export type phase1_boxesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase1_boxes
     */
    select?: phase1_boxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase1_boxes
     */
    omit?: phase1_boxesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase1_boxesInclude<ExtArgs> | null
    /**
     * Filter, which phase1_boxes to fetch.
     */
    where: phase1_boxesWhereUniqueInput
  }

  /**
   * phase1_boxes findUniqueOrThrow
   */
  export type phase1_boxesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase1_boxes
     */
    select?: phase1_boxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase1_boxes
     */
    omit?: phase1_boxesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase1_boxesInclude<ExtArgs> | null
    /**
     * Filter, which phase1_boxes to fetch.
     */
    where: phase1_boxesWhereUniqueInput
  }

  /**
   * phase1_boxes findFirst
   */
  export type phase1_boxesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase1_boxes
     */
    select?: phase1_boxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase1_boxes
     */
    omit?: phase1_boxesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase1_boxesInclude<ExtArgs> | null
    /**
     * Filter, which phase1_boxes to fetch.
     */
    where?: phase1_boxesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phase1_boxes to fetch.
     */
    orderBy?: phase1_boxesOrderByWithRelationInput | phase1_boxesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for phase1_boxes.
     */
    cursor?: phase1_boxesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phase1_boxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phase1_boxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of phase1_boxes.
     */
    distinct?: Phase1_boxesScalarFieldEnum | Phase1_boxesScalarFieldEnum[]
  }

  /**
   * phase1_boxes findFirstOrThrow
   */
  export type phase1_boxesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase1_boxes
     */
    select?: phase1_boxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase1_boxes
     */
    omit?: phase1_boxesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase1_boxesInclude<ExtArgs> | null
    /**
     * Filter, which phase1_boxes to fetch.
     */
    where?: phase1_boxesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phase1_boxes to fetch.
     */
    orderBy?: phase1_boxesOrderByWithRelationInput | phase1_boxesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for phase1_boxes.
     */
    cursor?: phase1_boxesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phase1_boxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phase1_boxes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of phase1_boxes.
     */
    distinct?: Phase1_boxesScalarFieldEnum | Phase1_boxesScalarFieldEnum[]
  }

  /**
   * phase1_boxes findMany
   */
  export type phase1_boxesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase1_boxes
     */
    select?: phase1_boxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase1_boxes
     */
    omit?: phase1_boxesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase1_boxesInclude<ExtArgs> | null
    /**
     * Filter, which phase1_boxes to fetch.
     */
    where?: phase1_boxesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phase1_boxes to fetch.
     */
    orderBy?: phase1_boxesOrderByWithRelationInput | phase1_boxesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing phase1_boxes.
     */
    cursor?: phase1_boxesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phase1_boxes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phase1_boxes.
     */
    skip?: number
    distinct?: Phase1_boxesScalarFieldEnum | Phase1_boxesScalarFieldEnum[]
  }

  /**
   * phase1_boxes create
   */
  export type phase1_boxesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase1_boxes
     */
    select?: phase1_boxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase1_boxes
     */
    omit?: phase1_boxesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase1_boxesInclude<ExtArgs> | null
    /**
     * The data needed to create a phase1_boxes.
     */
    data: XOR<phase1_boxesCreateInput, phase1_boxesUncheckedCreateInput>
  }

  /**
   * phase1_boxes createMany
   */
  export type phase1_boxesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many phase1_boxes.
     */
    data: phase1_boxesCreateManyInput | phase1_boxesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * phase1_boxes createManyAndReturn
   */
  export type phase1_boxesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase1_boxes
     */
    select?: phase1_boxesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the phase1_boxes
     */
    omit?: phase1_boxesOmit<ExtArgs> | null
    /**
     * The data used to create many phase1_boxes.
     */
    data: phase1_boxesCreateManyInput | phase1_boxesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase1_boxesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * phase1_boxes update
   */
  export type phase1_boxesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase1_boxes
     */
    select?: phase1_boxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase1_boxes
     */
    omit?: phase1_boxesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase1_boxesInclude<ExtArgs> | null
    /**
     * The data needed to update a phase1_boxes.
     */
    data: XOR<phase1_boxesUpdateInput, phase1_boxesUncheckedUpdateInput>
    /**
     * Choose, which phase1_boxes to update.
     */
    where: phase1_boxesWhereUniqueInput
  }

  /**
   * phase1_boxes updateMany
   */
  export type phase1_boxesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update phase1_boxes.
     */
    data: XOR<phase1_boxesUpdateManyMutationInput, phase1_boxesUncheckedUpdateManyInput>
    /**
     * Filter which phase1_boxes to update
     */
    where?: phase1_boxesWhereInput
    /**
     * Limit how many phase1_boxes to update.
     */
    limit?: number
  }

  /**
   * phase1_boxes updateManyAndReturn
   */
  export type phase1_boxesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase1_boxes
     */
    select?: phase1_boxesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the phase1_boxes
     */
    omit?: phase1_boxesOmit<ExtArgs> | null
    /**
     * The data used to update phase1_boxes.
     */
    data: XOR<phase1_boxesUpdateManyMutationInput, phase1_boxesUncheckedUpdateManyInput>
    /**
     * Filter which phase1_boxes to update
     */
    where?: phase1_boxesWhereInput
    /**
     * Limit how many phase1_boxes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase1_boxesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * phase1_boxes upsert
   */
  export type phase1_boxesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase1_boxes
     */
    select?: phase1_boxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase1_boxes
     */
    omit?: phase1_boxesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase1_boxesInclude<ExtArgs> | null
    /**
     * The filter to search for the phase1_boxes to update in case it exists.
     */
    where: phase1_boxesWhereUniqueInput
    /**
     * In case the phase1_boxes found by the `where` argument doesn't exist, create a new phase1_boxes with this data.
     */
    create: XOR<phase1_boxesCreateInput, phase1_boxesUncheckedCreateInput>
    /**
     * In case the phase1_boxes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<phase1_boxesUpdateInput, phase1_boxesUncheckedUpdateInput>
  }

  /**
   * phase1_boxes delete
   */
  export type phase1_boxesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase1_boxes
     */
    select?: phase1_boxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase1_boxes
     */
    omit?: phase1_boxesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase1_boxesInclude<ExtArgs> | null
    /**
     * Filter which phase1_boxes to delete.
     */
    where: phase1_boxesWhereUniqueInput
  }

  /**
   * phase1_boxes deleteMany
   */
  export type phase1_boxesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which phase1_boxes to delete
     */
    where?: phase1_boxesWhereInput
    /**
     * Limit how many phase1_boxes to delete.
     */
    limit?: number
  }

  /**
   * phase1_boxes without action
   */
  export type phase1_boxesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase1_boxes
     */
    select?: phase1_boxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase1_boxes
     */
    omit?: phase1_boxesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase1_boxesInclude<ExtArgs> | null
  }


  /**
   * Model phase2_box_work
   */

  export type AggregatePhase2_box_work = {
    _count: Phase2_box_workCountAggregateOutputType | null
    _avg: Phase2_box_workAvgAggregateOutputType | null
    _sum: Phase2_box_workSumAggregateOutputType | null
    _min: Phase2_box_workMinAggregateOutputType | null
    _max: Phase2_box_workMaxAggregateOutputType | null
  }

  export type Phase2_box_workAvgAggregateOutputType = {
    report_id: number | null
    room_id: number | null
  }

  export type Phase2_box_workSumAggregateOutputType = {
    report_id: bigint | null
    room_id: bigint | null
  }

  export type Phase2_box_workMinAggregateOutputType = {
    report_id: bigint | null
    room_id: bigint | null
    box_id: string | null
    assigned_to: string | null
    status: string | null
  }

  export type Phase2_box_workMaxAggregateOutputType = {
    report_id: bigint | null
    room_id: bigint | null
    box_id: string | null
    assigned_to: string | null
    status: string | null
  }

  export type Phase2_box_workCountAggregateOutputType = {
    report_id: number
    room_id: number
    box_id: number
    assigned_to: number
    status: number
    _all: number
  }


  export type Phase2_box_workAvgAggregateInputType = {
    report_id?: true
    room_id?: true
  }

  export type Phase2_box_workSumAggregateInputType = {
    report_id?: true
    room_id?: true
  }

  export type Phase2_box_workMinAggregateInputType = {
    report_id?: true
    room_id?: true
    box_id?: true
    assigned_to?: true
    status?: true
  }

  export type Phase2_box_workMaxAggregateInputType = {
    report_id?: true
    room_id?: true
    box_id?: true
    assigned_to?: true
    status?: true
  }

  export type Phase2_box_workCountAggregateInputType = {
    report_id?: true
    room_id?: true
    box_id?: true
    assigned_to?: true
    status?: true
    _all?: true
  }

  export type Phase2_box_workAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which phase2_box_work to aggregate.
     */
    where?: phase2_box_workWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phase2_box_works to fetch.
     */
    orderBy?: phase2_box_workOrderByWithRelationInput | phase2_box_workOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: phase2_box_workWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phase2_box_works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phase2_box_works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned phase2_box_works
    **/
    _count?: true | Phase2_box_workCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Phase2_box_workAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Phase2_box_workSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Phase2_box_workMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Phase2_box_workMaxAggregateInputType
  }

  export type GetPhase2_box_workAggregateType<T extends Phase2_box_workAggregateArgs> = {
        [P in keyof T & keyof AggregatePhase2_box_work]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhase2_box_work[P]>
      : GetScalarType<T[P], AggregatePhase2_box_work[P]>
  }




  export type phase2_box_workGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: phase2_box_workWhereInput
    orderBy?: phase2_box_workOrderByWithAggregationInput | phase2_box_workOrderByWithAggregationInput[]
    by: Phase2_box_workScalarFieldEnum[] | Phase2_box_workScalarFieldEnum
    having?: phase2_box_workScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Phase2_box_workCountAggregateInputType | true
    _avg?: Phase2_box_workAvgAggregateInputType
    _sum?: Phase2_box_workSumAggregateInputType
    _min?: Phase2_box_workMinAggregateInputType
    _max?: Phase2_box_workMaxAggregateInputType
  }

  export type Phase2_box_workGroupByOutputType = {
    report_id: bigint
    room_id: bigint
    box_id: string
    assigned_to: string | null
    status: string
    _count: Phase2_box_workCountAggregateOutputType | null
    _avg: Phase2_box_workAvgAggregateOutputType | null
    _sum: Phase2_box_workSumAggregateOutputType | null
    _min: Phase2_box_workMinAggregateOutputType | null
    _max: Phase2_box_workMaxAggregateOutputType | null
  }

  type GetPhase2_box_workGroupByPayload<T extends phase2_box_workGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Phase2_box_workGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Phase2_box_workGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Phase2_box_workGroupByOutputType[P]>
            : GetScalarType<T[P], Phase2_box_workGroupByOutputType[P]>
        }
      >
    >


  export type phase2_box_workSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    report_id?: boolean
    room_id?: boolean
    box_id?: boolean
    assigned_to?: boolean
    status?: boolean
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phase2_box_work"]>

  export type phase2_box_workSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    report_id?: boolean
    room_id?: boolean
    box_id?: boolean
    assigned_to?: boolean
    status?: boolean
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phase2_box_work"]>

  export type phase2_box_workSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    report_id?: boolean
    room_id?: boolean
    box_id?: boolean
    assigned_to?: boolean
    status?: boolean
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phase2_box_work"]>

  export type phase2_box_workSelectScalar = {
    report_id?: boolean
    room_id?: boolean
    box_id?: boolean
    assigned_to?: boolean
    status?: boolean
  }

  export type phase2_box_workOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"report_id" | "room_id" | "box_id" | "assigned_to" | "status", ExtArgs["result"]["phase2_box_work"]>
  export type phase2_box_workInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }
  export type phase2_box_workIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }
  export type phase2_box_workIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }

  export type $phase2_box_workPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "phase2_box_work"
    objects: {
      stock_reports: Prisma.$stock_reportsPayload<ExtArgs>
      stock_rooms: Prisma.$stock_roomsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      report_id: bigint
      room_id: bigint
      box_id: string
      assigned_to: string | null
      status: string
    }, ExtArgs["result"]["phase2_box_work"]>
    composites: {}
  }

  type phase2_box_workGetPayload<S extends boolean | null | undefined | phase2_box_workDefaultArgs> = $Result.GetResult<Prisma.$phase2_box_workPayload, S>

  type phase2_box_workCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<phase2_box_workFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Phase2_box_workCountAggregateInputType | true
    }

  export interface phase2_box_workDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['phase2_box_work'], meta: { name: 'phase2_box_work' } }
    /**
     * Find zero or one Phase2_box_work that matches the filter.
     * @param {phase2_box_workFindUniqueArgs} args - Arguments to find a Phase2_box_work
     * @example
     * // Get one Phase2_box_work
     * const phase2_box_work = await prisma.phase2_box_work.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends phase2_box_workFindUniqueArgs>(args: SelectSubset<T, phase2_box_workFindUniqueArgs<ExtArgs>>): Prisma__phase2_box_workClient<$Result.GetResult<Prisma.$phase2_box_workPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Phase2_box_work that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {phase2_box_workFindUniqueOrThrowArgs} args - Arguments to find a Phase2_box_work
     * @example
     * // Get one Phase2_box_work
     * const phase2_box_work = await prisma.phase2_box_work.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends phase2_box_workFindUniqueOrThrowArgs>(args: SelectSubset<T, phase2_box_workFindUniqueOrThrowArgs<ExtArgs>>): Prisma__phase2_box_workClient<$Result.GetResult<Prisma.$phase2_box_workPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phase2_box_work that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phase2_box_workFindFirstArgs} args - Arguments to find a Phase2_box_work
     * @example
     * // Get one Phase2_box_work
     * const phase2_box_work = await prisma.phase2_box_work.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends phase2_box_workFindFirstArgs>(args?: SelectSubset<T, phase2_box_workFindFirstArgs<ExtArgs>>): Prisma__phase2_box_workClient<$Result.GetResult<Prisma.$phase2_box_workPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phase2_box_work that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phase2_box_workFindFirstOrThrowArgs} args - Arguments to find a Phase2_box_work
     * @example
     * // Get one Phase2_box_work
     * const phase2_box_work = await prisma.phase2_box_work.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends phase2_box_workFindFirstOrThrowArgs>(args?: SelectSubset<T, phase2_box_workFindFirstOrThrowArgs<ExtArgs>>): Prisma__phase2_box_workClient<$Result.GetResult<Prisma.$phase2_box_workPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Phase2_box_works that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phase2_box_workFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Phase2_box_works
     * const phase2_box_works = await prisma.phase2_box_work.findMany()
     * 
     * // Get first 10 Phase2_box_works
     * const phase2_box_works = await prisma.phase2_box_work.findMany({ take: 10 })
     * 
     * // Only select the `report_id`
     * const phase2_box_workWithReport_idOnly = await prisma.phase2_box_work.findMany({ select: { report_id: true } })
     * 
     */
    findMany<T extends phase2_box_workFindManyArgs>(args?: SelectSubset<T, phase2_box_workFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phase2_box_workPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Phase2_box_work.
     * @param {phase2_box_workCreateArgs} args - Arguments to create a Phase2_box_work.
     * @example
     * // Create one Phase2_box_work
     * const Phase2_box_work = await prisma.phase2_box_work.create({
     *   data: {
     *     // ... data to create a Phase2_box_work
     *   }
     * })
     * 
     */
    create<T extends phase2_box_workCreateArgs>(args: SelectSubset<T, phase2_box_workCreateArgs<ExtArgs>>): Prisma__phase2_box_workClient<$Result.GetResult<Prisma.$phase2_box_workPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Phase2_box_works.
     * @param {phase2_box_workCreateManyArgs} args - Arguments to create many Phase2_box_works.
     * @example
     * // Create many Phase2_box_works
     * const phase2_box_work = await prisma.phase2_box_work.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends phase2_box_workCreateManyArgs>(args?: SelectSubset<T, phase2_box_workCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Phase2_box_works and returns the data saved in the database.
     * @param {phase2_box_workCreateManyAndReturnArgs} args - Arguments to create many Phase2_box_works.
     * @example
     * // Create many Phase2_box_works
     * const phase2_box_work = await prisma.phase2_box_work.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Phase2_box_works and only return the `report_id`
     * const phase2_box_workWithReport_idOnly = await prisma.phase2_box_work.createManyAndReturn({
     *   select: { report_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends phase2_box_workCreateManyAndReturnArgs>(args?: SelectSubset<T, phase2_box_workCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phase2_box_workPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Phase2_box_work.
     * @param {phase2_box_workDeleteArgs} args - Arguments to delete one Phase2_box_work.
     * @example
     * // Delete one Phase2_box_work
     * const Phase2_box_work = await prisma.phase2_box_work.delete({
     *   where: {
     *     // ... filter to delete one Phase2_box_work
     *   }
     * })
     * 
     */
    delete<T extends phase2_box_workDeleteArgs>(args: SelectSubset<T, phase2_box_workDeleteArgs<ExtArgs>>): Prisma__phase2_box_workClient<$Result.GetResult<Prisma.$phase2_box_workPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Phase2_box_work.
     * @param {phase2_box_workUpdateArgs} args - Arguments to update one Phase2_box_work.
     * @example
     * // Update one Phase2_box_work
     * const phase2_box_work = await prisma.phase2_box_work.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends phase2_box_workUpdateArgs>(args: SelectSubset<T, phase2_box_workUpdateArgs<ExtArgs>>): Prisma__phase2_box_workClient<$Result.GetResult<Prisma.$phase2_box_workPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Phase2_box_works.
     * @param {phase2_box_workDeleteManyArgs} args - Arguments to filter Phase2_box_works to delete.
     * @example
     * // Delete a few Phase2_box_works
     * const { count } = await prisma.phase2_box_work.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends phase2_box_workDeleteManyArgs>(args?: SelectSubset<T, phase2_box_workDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phase2_box_works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phase2_box_workUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Phase2_box_works
     * const phase2_box_work = await prisma.phase2_box_work.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends phase2_box_workUpdateManyArgs>(args: SelectSubset<T, phase2_box_workUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phase2_box_works and returns the data updated in the database.
     * @param {phase2_box_workUpdateManyAndReturnArgs} args - Arguments to update many Phase2_box_works.
     * @example
     * // Update many Phase2_box_works
     * const phase2_box_work = await prisma.phase2_box_work.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Phase2_box_works and only return the `report_id`
     * const phase2_box_workWithReport_idOnly = await prisma.phase2_box_work.updateManyAndReturn({
     *   select: { report_id: true },
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
    updateManyAndReturn<T extends phase2_box_workUpdateManyAndReturnArgs>(args: SelectSubset<T, phase2_box_workUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phase2_box_workPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Phase2_box_work.
     * @param {phase2_box_workUpsertArgs} args - Arguments to update or create a Phase2_box_work.
     * @example
     * // Update or create a Phase2_box_work
     * const phase2_box_work = await prisma.phase2_box_work.upsert({
     *   create: {
     *     // ... data to create a Phase2_box_work
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Phase2_box_work we want to update
     *   }
     * })
     */
    upsert<T extends phase2_box_workUpsertArgs>(args: SelectSubset<T, phase2_box_workUpsertArgs<ExtArgs>>): Prisma__phase2_box_workClient<$Result.GetResult<Prisma.$phase2_box_workPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Phase2_box_works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phase2_box_workCountArgs} args - Arguments to filter Phase2_box_works to count.
     * @example
     * // Count the number of Phase2_box_works
     * const count = await prisma.phase2_box_work.count({
     *   where: {
     *     // ... the filter for the Phase2_box_works we want to count
     *   }
     * })
    **/
    count<T extends phase2_box_workCountArgs>(
      args?: Subset<T, phase2_box_workCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Phase2_box_workCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Phase2_box_work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Phase2_box_workAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Phase2_box_workAggregateArgs>(args: Subset<T, Phase2_box_workAggregateArgs>): Prisma.PrismaPromise<GetPhase2_box_workAggregateType<T>>

    /**
     * Group by Phase2_box_work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phase2_box_workGroupByArgs} args - Group by arguments.
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
      T extends phase2_box_workGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: phase2_box_workGroupByArgs['orderBy'] }
        : { orderBy?: phase2_box_workGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, phase2_box_workGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhase2_box_workGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the phase2_box_work model
   */
  readonly fields: phase2_box_workFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for phase2_box_work.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__phase2_box_workClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stock_reports<T extends stock_reportsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stock_reportsDefaultArgs<ExtArgs>>): Prisma__stock_reportsClient<$Result.GetResult<Prisma.$stock_reportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stock_rooms<T extends stock_roomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stock_roomsDefaultArgs<ExtArgs>>): Prisma__stock_roomsClient<$Result.GetResult<Prisma.$stock_roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the phase2_box_work model
   */
  interface phase2_box_workFieldRefs {
    readonly report_id: FieldRef<"phase2_box_work", 'BigInt'>
    readonly room_id: FieldRef<"phase2_box_work", 'BigInt'>
    readonly box_id: FieldRef<"phase2_box_work", 'String'>
    readonly assigned_to: FieldRef<"phase2_box_work", 'String'>
    readonly status: FieldRef<"phase2_box_work", 'String'>
  }
    

  // Custom InputTypes
  /**
   * phase2_box_work findUnique
   */
  export type phase2_box_workFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_box_work
     */
    select?: phase2_box_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_box_work
     */
    omit?: phase2_box_workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_box_workInclude<ExtArgs> | null
    /**
     * Filter, which phase2_box_work to fetch.
     */
    where: phase2_box_workWhereUniqueInput
  }

  /**
   * phase2_box_work findUniqueOrThrow
   */
  export type phase2_box_workFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_box_work
     */
    select?: phase2_box_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_box_work
     */
    omit?: phase2_box_workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_box_workInclude<ExtArgs> | null
    /**
     * Filter, which phase2_box_work to fetch.
     */
    where: phase2_box_workWhereUniqueInput
  }

  /**
   * phase2_box_work findFirst
   */
  export type phase2_box_workFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_box_work
     */
    select?: phase2_box_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_box_work
     */
    omit?: phase2_box_workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_box_workInclude<ExtArgs> | null
    /**
     * Filter, which phase2_box_work to fetch.
     */
    where?: phase2_box_workWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phase2_box_works to fetch.
     */
    orderBy?: phase2_box_workOrderByWithRelationInput | phase2_box_workOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for phase2_box_works.
     */
    cursor?: phase2_box_workWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phase2_box_works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phase2_box_works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of phase2_box_works.
     */
    distinct?: Phase2_box_workScalarFieldEnum | Phase2_box_workScalarFieldEnum[]
  }

  /**
   * phase2_box_work findFirstOrThrow
   */
  export type phase2_box_workFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_box_work
     */
    select?: phase2_box_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_box_work
     */
    omit?: phase2_box_workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_box_workInclude<ExtArgs> | null
    /**
     * Filter, which phase2_box_work to fetch.
     */
    where?: phase2_box_workWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phase2_box_works to fetch.
     */
    orderBy?: phase2_box_workOrderByWithRelationInput | phase2_box_workOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for phase2_box_works.
     */
    cursor?: phase2_box_workWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phase2_box_works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phase2_box_works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of phase2_box_works.
     */
    distinct?: Phase2_box_workScalarFieldEnum | Phase2_box_workScalarFieldEnum[]
  }

  /**
   * phase2_box_work findMany
   */
  export type phase2_box_workFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_box_work
     */
    select?: phase2_box_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_box_work
     */
    omit?: phase2_box_workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_box_workInclude<ExtArgs> | null
    /**
     * Filter, which phase2_box_works to fetch.
     */
    where?: phase2_box_workWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phase2_box_works to fetch.
     */
    orderBy?: phase2_box_workOrderByWithRelationInput | phase2_box_workOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing phase2_box_works.
     */
    cursor?: phase2_box_workWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phase2_box_works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phase2_box_works.
     */
    skip?: number
    distinct?: Phase2_box_workScalarFieldEnum | Phase2_box_workScalarFieldEnum[]
  }

  /**
   * phase2_box_work create
   */
  export type phase2_box_workCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_box_work
     */
    select?: phase2_box_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_box_work
     */
    omit?: phase2_box_workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_box_workInclude<ExtArgs> | null
    /**
     * The data needed to create a phase2_box_work.
     */
    data: XOR<phase2_box_workCreateInput, phase2_box_workUncheckedCreateInput>
  }

  /**
   * phase2_box_work createMany
   */
  export type phase2_box_workCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many phase2_box_works.
     */
    data: phase2_box_workCreateManyInput | phase2_box_workCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * phase2_box_work createManyAndReturn
   */
  export type phase2_box_workCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_box_work
     */
    select?: phase2_box_workSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_box_work
     */
    omit?: phase2_box_workOmit<ExtArgs> | null
    /**
     * The data used to create many phase2_box_works.
     */
    data: phase2_box_workCreateManyInput | phase2_box_workCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_box_workIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * phase2_box_work update
   */
  export type phase2_box_workUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_box_work
     */
    select?: phase2_box_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_box_work
     */
    omit?: phase2_box_workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_box_workInclude<ExtArgs> | null
    /**
     * The data needed to update a phase2_box_work.
     */
    data: XOR<phase2_box_workUpdateInput, phase2_box_workUncheckedUpdateInput>
    /**
     * Choose, which phase2_box_work to update.
     */
    where: phase2_box_workWhereUniqueInput
  }

  /**
   * phase2_box_work updateMany
   */
  export type phase2_box_workUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update phase2_box_works.
     */
    data: XOR<phase2_box_workUpdateManyMutationInput, phase2_box_workUncheckedUpdateManyInput>
    /**
     * Filter which phase2_box_works to update
     */
    where?: phase2_box_workWhereInput
    /**
     * Limit how many phase2_box_works to update.
     */
    limit?: number
  }

  /**
   * phase2_box_work updateManyAndReturn
   */
  export type phase2_box_workUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_box_work
     */
    select?: phase2_box_workSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_box_work
     */
    omit?: phase2_box_workOmit<ExtArgs> | null
    /**
     * The data used to update phase2_box_works.
     */
    data: XOR<phase2_box_workUpdateManyMutationInput, phase2_box_workUncheckedUpdateManyInput>
    /**
     * Filter which phase2_box_works to update
     */
    where?: phase2_box_workWhereInput
    /**
     * Limit how many phase2_box_works to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_box_workIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * phase2_box_work upsert
   */
  export type phase2_box_workUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_box_work
     */
    select?: phase2_box_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_box_work
     */
    omit?: phase2_box_workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_box_workInclude<ExtArgs> | null
    /**
     * The filter to search for the phase2_box_work to update in case it exists.
     */
    where: phase2_box_workWhereUniqueInput
    /**
     * In case the phase2_box_work found by the `where` argument doesn't exist, create a new phase2_box_work with this data.
     */
    create: XOR<phase2_box_workCreateInput, phase2_box_workUncheckedCreateInput>
    /**
     * In case the phase2_box_work was found with the provided `where` argument, update it with this data.
     */
    update: XOR<phase2_box_workUpdateInput, phase2_box_workUncheckedUpdateInput>
  }

  /**
   * phase2_box_work delete
   */
  export type phase2_box_workDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_box_work
     */
    select?: phase2_box_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_box_work
     */
    omit?: phase2_box_workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_box_workInclude<ExtArgs> | null
    /**
     * Filter which phase2_box_work to delete.
     */
    where: phase2_box_workWhereUniqueInput
  }

  /**
   * phase2_box_work deleteMany
   */
  export type phase2_box_workDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which phase2_box_works to delete
     */
    where?: phase2_box_workWhereInput
    /**
     * Limit how many phase2_box_works to delete.
     */
    limit?: number
  }

  /**
   * phase2_box_work without action
   */
  export type phase2_box_workDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_box_work
     */
    select?: phase2_box_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_box_work
     */
    omit?: phase2_box_workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_box_workInclude<ExtArgs> | null
  }


  /**
   * Model phase2_lines
   */

  export type AggregatePhase2_lines = {
    _count: Phase2_linesCountAggregateOutputType | null
    _avg: Phase2_linesAvgAggregateOutputType | null
    _sum: Phase2_linesSumAggregateOutputType | null
    _min: Phase2_linesMinAggregateOutputType | null
    _max: Phase2_linesMaxAggregateOutputType | null
  }

  export type Phase2_linesAvgAggregateOutputType = {
    report_id: number | null
    room_id: number | null
    qty: number | null
    id: number | null
  }

  export type Phase2_linesSumAggregateOutputType = {
    report_id: bigint | null
    room_id: bigint | null
    qty: number | null
    id: bigint | null
  }

  export type Phase2_linesMinAggregateOutputType = {
    report_id: bigint | null
    room_id: bigint | null
    box_id: string | null
    sku: string | null
    qty: number | null
    id: bigint | null
  }

  export type Phase2_linesMaxAggregateOutputType = {
    report_id: bigint | null
    room_id: bigint | null
    box_id: string | null
    sku: string | null
    qty: number | null
    id: bigint | null
  }

  export type Phase2_linesCountAggregateOutputType = {
    report_id: number
    room_id: number
    box_id: number
    sku: number
    qty: number
    id: number
    _all: number
  }


  export type Phase2_linesAvgAggregateInputType = {
    report_id?: true
    room_id?: true
    qty?: true
    id?: true
  }

  export type Phase2_linesSumAggregateInputType = {
    report_id?: true
    room_id?: true
    qty?: true
    id?: true
  }

  export type Phase2_linesMinAggregateInputType = {
    report_id?: true
    room_id?: true
    box_id?: true
    sku?: true
    qty?: true
    id?: true
  }

  export type Phase2_linesMaxAggregateInputType = {
    report_id?: true
    room_id?: true
    box_id?: true
    sku?: true
    qty?: true
    id?: true
  }

  export type Phase2_linesCountAggregateInputType = {
    report_id?: true
    room_id?: true
    box_id?: true
    sku?: true
    qty?: true
    id?: true
    _all?: true
  }

  export type Phase2_linesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which phase2_lines to aggregate.
     */
    where?: phase2_linesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phase2_lines to fetch.
     */
    orderBy?: phase2_linesOrderByWithRelationInput | phase2_linesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: phase2_linesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phase2_lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phase2_lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned phase2_lines
    **/
    _count?: true | Phase2_linesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Phase2_linesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Phase2_linesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Phase2_linesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Phase2_linesMaxAggregateInputType
  }

  export type GetPhase2_linesAggregateType<T extends Phase2_linesAggregateArgs> = {
        [P in keyof T & keyof AggregatePhase2_lines]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhase2_lines[P]>
      : GetScalarType<T[P], AggregatePhase2_lines[P]>
  }




  export type phase2_linesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: phase2_linesWhereInput
    orderBy?: phase2_linesOrderByWithAggregationInput | phase2_linesOrderByWithAggregationInput[]
    by: Phase2_linesScalarFieldEnum[] | Phase2_linesScalarFieldEnum
    having?: phase2_linesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Phase2_linesCountAggregateInputType | true
    _avg?: Phase2_linesAvgAggregateInputType
    _sum?: Phase2_linesSumAggregateInputType
    _min?: Phase2_linesMinAggregateInputType
    _max?: Phase2_linesMaxAggregateInputType
  }

  export type Phase2_linesGroupByOutputType = {
    report_id: bigint
    room_id: bigint
    box_id: string
    sku: string
    qty: number
    id: bigint
    _count: Phase2_linesCountAggregateOutputType | null
    _avg: Phase2_linesAvgAggregateOutputType | null
    _sum: Phase2_linesSumAggregateOutputType | null
    _min: Phase2_linesMinAggregateOutputType | null
    _max: Phase2_linesMaxAggregateOutputType | null
  }

  type GetPhase2_linesGroupByPayload<T extends phase2_linesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Phase2_linesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Phase2_linesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Phase2_linesGroupByOutputType[P]>
            : GetScalarType<T[P], Phase2_linesGroupByOutputType[P]>
        }
      >
    >


  export type phase2_linesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    report_id?: boolean
    room_id?: boolean
    box_id?: boolean
    sku?: boolean
    qty?: boolean
    id?: boolean
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phase2_lines"]>

  export type phase2_linesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    report_id?: boolean
    room_id?: boolean
    box_id?: boolean
    sku?: boolean
    qty?: boolean
    id?: boolean
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phase2_lines"]>

  export type phase2_linesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    report_id?: boolean
    room_id?: boolean
    box_id?: boolean
    sku?: boolean
    qty?: boolean
    id?: boolean
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["phase2_lines"]>

  export type phase2_linesSelectScalar = {
    report_id?: boolean
    room_id?: boolean
    box_id?: boolean
    sku?: boolean
    qty?: boolean
    id?: boolean
  }

  export type phase2_linesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"report_id" | "room_id" | "box_id" | "sku" | "qty" | "id", ExtArgs["result"]["phase2_lines"]>
  export type phase2_linesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }
  export type phase2_linesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }
  export type phase2_linesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }

  export type $phase2_linesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "phase2_lines"
    objects: {
      stock_reports: Prisma.$stock_reportsPayload<ExtArgs>
      stock_rooms: Prisma.$stock_roomsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      report_id: bigint
      room_id: bigint
      box_id: string
      sku: string
      qty: number
      id: bigint
    }, ExtArgs["result"]["phase2_lines"]>
    composites: {}
  }

  type phase2_linesGetPayload<S extends boolean | null | undefined | phase2_linesDefaultArgs> = $Result.GetResult<Prisma.$phase2_linesPayload, S>

  type phase2_linesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<phase2_linesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Phase2_linesCountAggregateInputType | true
    }

  export interface phase2_linesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['phase2_lines'], meta: { name: 'phase2_lines' } }
    /**
     * Find zero or one Phase2_lines that matches the filter.
     * @param {phase2_linesFindUniqueArgs} args - Arguments to find a Phase2_lines
     * @example
     * // Get one Phase2_lines
     * const phase2_lines = await prisma.phase2_lines.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends phase2_linesFindUniqueArgs>(args: SelectSubset<T, phase2_linesFindUniqueArgs<ExtArgs>>): Prisma__phase2_linesClient<$Result.GetResult<Prisma.$phase2_linesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Phase2_lines that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {phase2_linesFindUniqueOrThrowArgs} args - Arguments to find a Phase2_lines
     * @example
     * // Get one Phase2_lines
     * const phase2_lines = await prisma.phase2_lines.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends phase2_linesFindUniqueOrThrowArgs>(args: SelectSubset<T, phase2_linesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__phase2_linesClient<$Result.GetResult<Prisma.$phase2_linesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phase2_lines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phase2_linesFindFirstArgs} args - Arguments to find a Phase2_lines
     * @example
     * // Get one Phase2_lines
     * const phase2_lines = await prisma.phase2_lines.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends phase2_linesFindFirstArgs>(args?: SelectSubset<T, phase2_linesFindFirstArgs<ExtArgs>>): Prisma__phase2_linesClient<$Result.GetResult<Prisma.$phase2_linesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Phase2_lines that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phase2_linesFindFirstOrThrowArgs} args - Arguments to find a Phase2_lines
     * @example
     * // Get one Phase2_lines
     * const phase2_lines = await prisma.phase2_lines.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends phase2_linesFindFirstOrThrowArgs>(args?: SelectSubset<T, phase2_linesFindFirstOrThrowArgs<ExtArgs>>): Prisma__phase2_linesClient<$Result.GetResult<Prisma.$phase2_linesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Phase2_lines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phase2_linesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Phase2_lines
     * const phase2_lines = await prisma.phase2_lines.findMany()
     * 
     * // Get first 10 Phase2_lines
     * const phase2_lines = await prisma.phase2_lines.findMany({ take: 10 })
     * 
     * // Only select the `report_id`
     * const phase2_linesWithReport_idOnly = await prisma.phase2_lines.findMany({ select: { report_id: true } })
     * 
     */
    findMany<T extends phase2_linesFindManyArgs>(args?: SelectSubset<T, phase2_linesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phase2_linesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Phase2_lines.
     * @param {phase2_linesCreateArgs} args - Arguments to create a Phase2_lines.
     * @example
     * // Create one Phase2_lines
     * const Phase2_lines = await prisma.phase2_lines.create({
     *   data: {
     *     // ... data to create a Phase2_lines
     *   }
     * })
     * 
     */
    create<T extends phase2_linesCreateArgs>(args: SelectSubset<T, phase2_linesCreateArgs<ExtArgs>>): Prisma__phase2_linesClient<$Result.GetResult<Prisma.$phase2_linesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Phase2_lines.
     * @param {phase2_linesCreateManyArgs} args - Arguments to create many Phase2_lines.
     * @example
     * // Create many Phase2_lines
     * const phase2_lines = await prisma.phase2_lines.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends phase2_linesCreateManyArgs>(args?: SelectSubset<T, phase2_linesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Phase2_lines and returns the data saved in the database.
     * @param {phase2_linesCreateManyAndReturnArgs} args - Arguments to create many Phase2_lines.
     * @example
     * // Create many Phase2_lines
     * const phase2_lines = await prisma.phase2_lines.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Phase2_lines and only return the `report_id`
     * const phase2_linesWithReport_idOnly = await prisma.phase2_lines.createManyAndReturn({
     *   select: { report_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends phase2_linesCreateManyAndReturnArgs>(args?: SelectSubset<T, phase2_linesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phase2_linesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Phase2_lines.
     * @param {phase2_linesDeleteArgs} args - Arguments to delete one Phase2_lines.
     * @example
     * // Delete one Phase2_lines
     * const Phase2_lines = await prisma.phase2_lines.delete({
     *   where: {
     *     // ... filter to delete one Phase2_lines
     *   }
     * })
     * 
     */
    delete<T extends phase2_linesDeleteArgs>(args: SelectSubset<T, phase2_linesDeleteArgs<ExtArgs>>): Prisma__phase2_linesClient<$Result.GetResult<Prisma.$phase2_linesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Phase2_lines.
     * @param {phase2_linesUpdateArgs} args - Arguments to update one Phase2_lines.
     * @example
     * // Update one Phase2_lines
     * const phase2_lines = await prisma.phase2_lines.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends phase2_linesUpdateArgs>(args: SelectSubset<T, phase2_linesUpdateArgs<ExtArgs>>): Prisma__phase2_linesClient<$Result.GetResult<Prisma.$phase2_linesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Phase2_lines.
     * @param {phase2_linesDeleteManyArgs} args - Arguments to filter Phase2_lines to delete.
     * @example
     * // Delete a few Phase2_lines
     * const { count } = await prisma.phase2_lines.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends phase2_linesDeleteManyArgs>(args?: SelectSubset<T, phase2_linesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phase2_lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phase2_linesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Phase2_lines
     * const phase2_lines = await prisma.phase2_lines.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends phase2_linesUpdateManyArgs>(args: SelectSubset<T, phase2_linesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Phase2_lines and returns the data updated in the database.
     * @param {phase2_linesUpdateManyAndReturnArgs} args - Arguments to update many Phase2_lines.
     * @example
     * // Update many Phase2_lines
     * const phase2_lines = await prisma.phase2_lines.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Phase2_lines and only return the `report_id`
     * const phase2_linesWithReport_idOnly = await prisma.phase2_lines.updateManyAndReturn({
     *   select: { report_id: true },
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
    updateManyAndReturn<T extends phase2_linesUpdateManyAndReturnArgs>(args: SelectSubset<T, phase2_linesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phase2_linesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Phase2_lines.
     * @param {phase2_linesUpsertArgs} args - Arguments to update or create a Phase2_lines.
     * @example
     * // Update or create a Phase2_lines
     * const phase2_lines = await prisma.phase2_lines.upsert({
     *   create: {
     *     // ... data to create a Phase2_lines
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Phase2_lines we want to update
     *   }
     * })
     */
    upsert<T extends phase2_linesUpsertArgs>(args: SelectSubset<T, phase2_linesUpsertArgs<ExtArgs>>): Prisma__phase2_linesClient<$Result.GetResult<Prisma.$phase2_linesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Phase2_lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phase2_linesCountArgs} args - Arguments to filter Phase2_lines to count.
     * @example
     * // Count the number of Phase2_lines
     * const count = await prisma.phase2_lines.count({
     *   where: {
     *     // ... the filter for the Phase2_lines we want to count
     *   }
     * })
    **/
    count<T extends phase2_linesCountArgs>(
      args?: Subset<T, phase2_linesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Phase2_linesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Phase2_lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Phase2_linesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Phase2_linesAggregateArgs>(args: Subset<T, Phase2_linesAggregateArgs>): Prisma.PrismaPromise<GetPhase2_linesAggregateType<T>>

    /**
     * Group by Phase2_lines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {phase2_linesGroupByArgs} args - Group by arguments.
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
      T extends phase2_linesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: phase2_linesGroupByArgs['orderBy'] }
        : { orderBy?: phase2_linesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, phase2_linesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhase2_linesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the phase2_lines model
   */
  readonly fields: phase2_linesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for phase2_lines.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__phase2_linesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stock_reports<T extends stock_reportsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stock_reportsDefaultArgs<ExtArgs>>): Prisma__stock_reportsClient<$Result.GetResult<Prisma.$stock_reportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stock_rooms<T extends stock_roomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stock_roomsDefaultArgs<ExtArgs>>): Prisma__stock_roomsClient<$Result.GetResult<Prisma.$stock_roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the phase2_lines model
   */
  interface phase2_linesFieldRefs {
    readonly report_id: FieldRef<"phase2_lines", 'BigInt'>
    readonly room_id: FieldRef<"phase2_lines", 'BigInt'>
    readonly box_id: FieldRef<"phase2_lines", 'String'>
    readonly sku: FieldRef<"phase2_lines", 'String'>
    readonly qty: FieldRef<"phase2_lines", 'Int'>
    readonly id: FieldRef<"phase2_lines", 'BigInt'>
  }
    

  // Custom InputTypes
  /**
   * phase2_lines findUnique
   */
  export type phase2_linesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_lines
     */
    select?: phase2_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_lines
     */
    omit?: phase2_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_linesInclude<ExtArgs> | null
    /**
     * Filter, which phase2_lines to fetch.
     */
    where: phase2_linesWhereUniqueInput
  }

  /**
   * phase2_lines findUniqueOrThrow
   */
  export type phase2_linesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_lines
     */
    select?: phase2_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_lines
     */
    omit?: phase2_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_linesInclude<ExtArgs> | null
    /**
     * Filter, which phase2_lines to fetch.
     */
    where: phase2_linesWhereUniqueInput
  }

  /**
   * phase2_lines findFirst
   */
  export type phase2_linesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_lines
     */
    select?: phase2_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_lines
     */
    omit?: phase2_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_linesInclude<ExtArgs> | null
    /**
     * Filter, which phase2_lines to fetch.
     */
    where?: phase2_linesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phase2_lines to fetch.
     */
    orderBy?: phase2_linesOrderByWithRelationInput | phase2_linesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for phase2_lines.
     */
    cursor?: phase2_linesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phase2_lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phase2_lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of phase2_lines.
     */
    distinct?: Phase2_linesScalarFieldEnum | Phase2_linesScalarFieldEnum[]
  }

  /**
   * phase2_lines findFirstOrThrow
   */
  export type phase2_linesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_lines
     */
    select?: phase2_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_lines
     */
    omit?: phase2_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_linesInclude<ExtArgs> | null
    /**
     * Filter, which phase2_lines to fetch.
     */
    where?: phase2_linesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phase2_lines to fetch.
     */
    orderBy?: phase2_linesOrderByWithRelationInput | phase2_linesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for phase2_lines.
     */
    cursor?: phase2_linesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phase2_lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phase2_lines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of phase2_lines.
     */
    distinct?: Phase2_linesScalarFieldEnum | Phase2_linesScalarFieldEnum[]
  }

  /**
   * phase2_lines findMany
   */
  export type phase2_linesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_lines
     */
    select?: phase2_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_lines
     */
    omit?: phase2_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_linesInclude<ExtArgs> | null
    /**
     * Filter, which phase2_lines to fetch.
     */
    where?: phase2_linesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of phase2_lines to fetch.
     */
    orderBy?: phase2_linesOrderByWithRelationInput | phase2_linesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing phase2_lines.
     */
    cursor?: phase2_linesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` phase2_lines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` phase2_lines.
     */
    skip?: number
    distinct?: Phase2_linesScalarFieldEnum | Phase2_linesScalarFieldEnum[]
  }

  /**
   * phase2_lines create
   */
  export type phase2_linesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_lines
     */
    select?: phase2_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_lines
     */
    omit?: phase2_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_linesInclude<ExtArgs> | null
    /**
     * The data needed to create a phase2_lines.
     */
    data: XOR<phase2_linesCreateInput, phase2_linesUncheckedCreateInput>
  }

  /**
   * phase2_lines createMany
   */
  export type phase2_linesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many phase2_lines.
     */
    data: phase2_linesCreateManyInput | phase2_linesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * phase2_lines createManyAndReturn
   */
  export type phase2_linesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_lines
     */
    select?: phase2_linesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_lines
     */
    omit?: phase2_linesOmit<ExtArgs> | null
    /**
     * The data used to create many phase2_lines.
     */
    data: phase2_linesCreateManyInput | phase2_linesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_linesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * phase2_lines update
   */
  export type phase2_linesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_lines
     */
    select?: phase2_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_lines
     */
    omit?: phase2_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_linesInclude<ExtArgs> | null
    /**
     * The data needed to update a phase2_lines.
     */
    data: XOR<phase2_linesUpdateInput, phase2_linesUncheckedUpdateInput>
    /**
     * Choose, which phase2_lines to update.
     */
    where: phase2_linesWhereUniqueInput
  }

  /**
   * phase2_lines updateMany
   */
  export type phase2_linesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update phase2_lines.
     */
    data: XOR<phase2_linesUpdateManyMutationInput, phase2_linesUncheckedUpdateManyInput>
    /**
     * Filter which phase2_lines to update
     */
    where?: phase2_linesWhereInput
    /**
     * Limit how many phase2_lines to update.
     */
    limit?: number
  }

  /**
   * phase2_lines updateManyAndReturn
   */
  export type phase2_linesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_lines
     */
    select?: phase2_linesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_lines
     */
    omit?: phase2_linesOmit<ExtArgs> | null
    /**
     * The data used to update phase2_lines.
     */
    data: XOR<phase2_linesUpdateManyMutationInput, phase2_linesUncheckedUpdateManyInput>
    /**
     * Filter which phase2_lines to update
     */
    where?: phase2_linesWhereInput
    /**
     * Limit how many phase2_lines to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_linesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * phase2_lines upsert
   */
  export type phase2_linesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_lines
     */
    select?: phase2_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_lines
     */
    omit?: phase2_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_linesInclude<ExtArgs> | null
    /**
     * The filter to search for the phase2_lines to update in case it exists.
     */
    where: phase2_linesWhereUniqueInput
    /**
     * In case the phase2_lines found by the `where` argument doesn't exist, create a new phase2_lines with this data.
     */
    create: XOR<phase2_linesCreateInput, phase2_linesUncheckedCreateInput>
    /**
     * In case the phase2_lines was found with the provided `where` argument, update it with this data.
     */
    update: XOR<phase2_linesUpdateInput, phase2_linesUncheckedUpdateInput>
  }

  /**
   * phase2_lines delete
   */
  export type phase2_linesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_lines
     */
    select?: phase2_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_lines
     */
    omit?: phase2_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_linesInclude<ExtArgs> | null
    /**
     * Filter which phase2_lines to delete.
     */
    where: phase2_linesWhereUniqueInput
  }

  /**
   * phase2_lines deleteMany
   */
  export type phase2_linesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which phase2_lines to delete
     */
    where?: phase2_linesWhereInput
    /**
     * Limit how many phase2_lines to delete.
     */
    limit?: number
  }

  /**
   * phase2_lines without action
   */
  export type phase2_linesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_lines
     */
    select?: phase2_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_lines
     */
    omit?: phase2_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_linesInclude<ExtArgs> | null
  }


  /**
   * Model report_rooms
   */

  export type AggregateReport_rooms = {
    _count: Report_roomsCountAggregateOutputType | null
    _avg: Report_roomsAvgAggregateOutputType | null
    _sum: Report_roomsSumAggregateOutputType | null
    _min: Report_roomsMinAggregateOutputType | null
    _max: Report_roomsMaxAggregateOutputType | null
  }

  export type Report_roomsAvgAggregateOutputType = {
    report_id: number | null
    room_id: number | null
  }

  export type Report_roomsSumAggregateOutputType = {
    report_id: bigint | null
    room_id: bigint | null
  }

  export type Report_roomsMinAggregateOutputType = {
    report_id: bigint | null
    room_id: bigint | null
    phase1_owner: string | null
    phase1_status: string | null
    phase2_status: string | null
  }

  export type Report_roomsMaxAggregateOutputType = {
    report_id: bigint | null
    room_id: bigint | null
    phase1_owner: string | null
    phase1_status: string | null
    phase2_status: string | null
  }

  export type Report_roomsCountAggregateOutputType = {
    report_id: number
    room_id: number
    phase1_owner: number
    phase1_status: number
    phase2_status: number
    _all: number
  }


  export type Report_roomsAvgAggregateInputType = {
    report_id?: true
    room_id?: true
  }

  export type Report_roomsSumAggregateInputType = {
    report_id?: true
    room_id?: true
  }

  export type Report_roomsMinAggregateInputType = {
    report_id?: true
    room_id?: true
    phase1_owner?: true
    phase1_status?: true
    phase2_status?: true
  }

  export type Report_roomsMaxAggregateInputType = {
    report_id?: true
    room_id?: true
    phase1_owner?: true
    phase1_status?: true
    phase2_status?: true
  }

  export type Report_roomsCountAggregateInputType = {
    report_id?: true
    room_id?: true
    phase1_owner?: true
    phase1_status?: true
    phase2_status?: true
    _all?: true
  }

  export type Report_roomsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which report_rooms to aggregate.
     */
    where?: report_roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of report_rooms to fetch.
     */
    orderBy?: report_roomsOrderByWithRelationInput | report_roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: report_roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` report_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` report_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned report_rooms
    **/
    _count?: true | Report_roomsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Report_roomsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Report_roomsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Report_roomsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Report_roomsMaxAggregateInputType
  }

  export type GetReport_roomsAggregateType<T extends Report_roomsAggregateArgs> = {
        [P in keyof T & keyof AggregateReport_rooms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReport_rooms[P]>
      : GetScalarType<T[P], AggregateReport_rooms[P]>
  }




  export type report_roomsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: report_roomsWhereInput
    orderBy?: report_roomsOrderByWithAggregationInput | report_roomsOrderByWithAggregationInput[]
    by: Report_roomsScalarFieldEnum[] | Report_roomsScalarFieldEnum
    having?: report_roomsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Report_roomsCountAggregateInputType | true
    _avg?: Report_roomsAvgAggregateInputType
    _sum?: Report_roomsSumAggregateInputType
    _min?: Report_roomsMinAggregateInputType
    _max?: Report_roomsMaxAggregateInputType
  }

  export type Report_roomsGroupByOutputType = {
    report_id: bigint
    room_id: bigint
    phase1_owner: string | null
    phase1_status: string
    phase2_status: string
    _count: Report_roomsCountAggregateOutputType | null
    _avg: Report_roomsAvgAggregateOutputType | null
    _sum: Report_roomsSumAggregateOutputType | null
    _min: Report_roomsMinAggregateOutputType | null
    _max: Report_roomsMaxAggregateOutputType | null
  }

  type GetReport_roomsGroupByPayload<T extends report_roomsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Report_roomsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Report_roomsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Report_roomsGroupByOutputType[P]>
            : GetScalarType<T[P], Report_roomsGroupByOutputType[P]>
        }
      >
    >


  export type report_roomsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    report_id?: boolean
    room_id?: boolean
    phase1_owner?: boolean
    phase1_status?: boolean
    phase2_status?: boolean
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report_rooms"]>

  export type report_roomsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    report_id?: boolean
    room_id?: boolean
    phase1_owner?: boolean
    phase1_status?: boolean
    phase2_status?: boolean
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report_rooms"]>

  export type report_roomsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    report_id?: boolean
    room_id?: boolean
    phase1_owner?: boolean
    phase1_status?: boolean
    phase2_status?: boolean
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["report_rooms"]>

  export type report_roomsSelectScalar = {
    report_id?: boolean
    room_id?: boolean
    phase1_owner?: boolean
    phase1_status?: boolean
    phase2_status?: boolean
  }

  export type report_roomsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"report_id" | "room_id" | "phase1_owner" | "phase1_status" | "phase2_status", ExtArgs["result"]["report_rooms"]>
  export type report_roomsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }
  export type report_roomsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }
  export type report_roomsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock_reports?: boolean | stock_reportsDefaultArgs<ExtArgs>
    stock_rooms?: boolean | stock_roomsDefaultArgs<ExtArgs>
  }

  export type $report_roomsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "report_rooms"
    objects: {
      stock_reports: Prisma.$stock_reportsPayload<ExtArgs>
      stock_rooms: Prisma.$stock_roomsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      report_id: bigint
      room_id: bigint
      phase1_owner: string | null
      phase1_status: string
      phase2_status: string
    }, ExtArgs["result"]["report_rooms"]>
    composites: {}
  }

  type report_roomsGetPayload<S extends boolean | null | undefined | report_roomsDefaultArgs> = $Result.GetResult<Prisma.$report_roomsPayload, S>

  type report_roomsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<report_roomsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Report_roomsCountAggregateInputType | true
    }

  export interface report_roomsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['report_rooms'], meta: { name: 'report_rooms' } }
    /**
     * Find zero or one Report_rooms that matches the filter.
     * @param {report_roomsFindUniqueArgs} args - Arguments to find a Report_rooms
     * @example
     * // Get one Report_rooms
     * const report_rooms = await prisma.report_rooms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends report_roomsFindUniqueArgs>(args: SelectSubset<T, report_roomsFindUniqueArgs<ExtArgs>>): Prisma__report_roomsClient<$Result.GetResult<Prisma.$report_roomsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Report_rooms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {report_roomsFindUniqueOrThrowArgs} args - Arguments to find a Report_rooms
     * @example
     * // Get one Report_rooms
     * const report_rooms = await prisma.report_rooms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends report_roomsFindUniqueOrThrowArgs>(args: SelectSubset<T, report_roomsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__report_roomsClient<$Result.GetResult<Prisma.$report_roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report_rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_roomsFindFirstArgs} args - Arguments to find a Report_rooms
     * @example
     * // Get one Report_rooms
     * const report_rooms = await prisma.report_rooms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends report_roomsFindFirstArgs>(args?: SelectSubset<T, report_roomsFindFirstArgs<ExtArgs>>): Prisma__report_roomsClient<$Result.GetResult<Prisma.$report_roomsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Report_rooms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_roomsFindFirstOrThrowArgs} args - Arguments to find a Report_rooms
     * @example
     * // Get one Report_rooms
     * const report_rooms = await prisma.report_rooms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends report_roomsFindFirstOrThrowArgs>(args?: SelectSubset<T, report_roomsFindFirstOrThrowArgs<ExtArgs>>): Prisma__report_roomsClient<$Result.GetResult<Prisma.$report_roomsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Report_rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_roomsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Report_rooms
     * const report_rooms = await prisma.report_rooms.findMany()
     * 
     * // Get first 10 Report_rooms
     * const report_rooms = await prisma.report_rooms.findMany({ take: 10 })
     * 
     * // Only select the `report_id`
     * const report_roomsWithReport_idOnly = await prisma.report_rooms.findMany({ select: { report_id: true } })
     * 
     */
    findMany<T extends report_roomsFindManyArgs>(args?: SelectSubset<T, report_roomsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$report_roomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Report_rooms.
     * @param {report_roomsCreateArgs} args - Arguments to create a Report_rooms.
     * @example
     * // Create one Report_rooms
     * const Report_rooms = await prisma.report_rooms.create({
     *   data: {
     *     // ... data to create a Report_rooms
     *   }
     * })
     * 
     */
    create<T extends report_roomsCreateArgs>(args: SelectSubset<T, report_roomsCreateArgs<ExtArgs>>): Prisma__report_roomsClient<$Result.GetResult<Prisma.$report_roomsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Report_rooms.
     * @param {report_roomsCreateManyArgs} args - Arguments to create many Report_rooms.
     * @example
     * // Create many Report_rooms
     * const report_rooms = await prisma.report_rooms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends report_roomsCreateManyArgs>(args?: SelectSubset<T, report_roomsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Report_rooms and returns the data saved in the database.
     * @param {report_roomsCreateManyAndReturnArgs} args - Arguments to create many Report_rooms.
     * @example
     * // Create many Report_rooms
     * const report_rooms = await prisma.report_rooms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Report_rooms and only return the `report_id`
     * const report_roomsWithReport_idOnly = await prisma.report_rooms.createManyAndReturn({
     *   select: { report_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends report_roomsCreateManyAndReturnArgs>(args?: SelectSubset<T, report_roomsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$report_roomsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Report_rooms.
     * @param {report_roomsDeleteArgs} args - Arguments to delete one Report_rooms.
     * @example
     * // Delete one Report_rooms
     * const Report_rooms = await prisma.report_rooms.delete({
     *   where: {
     *     // ... filter to delete one Report_rooms
     *   }
     * })
     * 
     */
    delete<T extends report_roomsDeleteArgs>(args: SelectSubset<T, report_roomsDeleteArgs<ExtArgs>>): Prisma__report_roomsClient<$Result.GetResult<Prisma.$report_roomsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Report_rooms.
     * @param {report_roomsUpdateArgs} args - Arguments to update one Report_rooms.
     * @example
     * // Update one Report_rooms
     * const report_rooms = await prisma.report_rooms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends report_roomsUpdateArgs>(args: SelectSubset<T, report_roomsUpdateArgs<ExtArgs>>): Prisma__report_roomsClient<$Result.GetResult<Prisma.$report_roomsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Report_rooms.
     * @param {report_roomsDeleteManyArgs} args - Arguments to filter Report_rooms to delete.
     * @example
     * // Delete a few Report_rooms
     * const { count } = await prisma.report_rooms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends report_roomsDeleteManyArgs>(args?: SelectSubset<T, report_roomsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Report_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_roomsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Report_rooms
     * const report_rooms = await prisma.report_rooms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends report_roomsUpdateManyArgs>(args: SelectSubset<T, report_roomsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Report_rooms and returns the data updated in the database.
     * @param {report_roomsUpdateManyAndReturnArgs} args - Arguments to update many Report_rooms.
     * @example
     * // Update many Report_rooms
     * const report_rooms = await prisma.report_rooms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Report_rooms and only return the `report_id`
     * const report_roomsWithReport_idOnly = await prisma.report_rooms.updateManyAndReturn({
     *   select: { report_id: true },
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
    updateManyAndReturn<T extends report_roomsUpdateManyAndReturnArgs>(args: SelectSubset<T, report_roomsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$report_roomsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Report_rooms.
     * @param {report_roomsUpsertArgs} args - Arguments to update or create a Report_rooms.
     * @example
     * // Update or create a Report_rooms
     * const report_rooms = await prisma.report_rooms.upsert({
     *   create: {
     *     // ... data to create a Report_rooms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Report_rooms we want to update
     *   }
     * })
     */
    upsert<T extends report_roomsUpsertArgs>(args: SelectSubset<T, report_roomsUpsertArgs<ExtArgs>>): Prisma__report_roomsClient<$Result.GetResult<Prisma.$report_roomsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Report_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_roomsCountArgs} args - Arguments to filter Report_rooms to count.
     * @example
     * // Count the number of Report_rooms
     * const count = await prisma.report_rooms.count({
     *   where: {
     *     // ... the filter for the Report_rooms we want to count
     *   }
     * })
    **/
    count<T extends report_roomsCountArgs>(
      args?: Subset<T, report_roomsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Report_roomsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Report_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Report_roomsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Report_roomsAggregateArgs>(args: Subset<T, Report_roomsAggregateArgs>): Prisma.PrismaPromise<GetReport_roomsAggregateType<T>>

    /**
     * Group by Report_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {report_roomsGroupByArgs} args - Group by arguments.
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
      T extends report_roomsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: report_roomsGroupByArgs['orderBy'] }
        : { orderBy?: report_roomsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, report_roomsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReport_roomsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the report_rooms model
   */
  readonly fields: report_roomsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for report_rooms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__report_roomsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stock_reports<T extends stock_reportsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stock_reportsDefaultArgs<ExtArgs>>): Prisma__stock_reportsClient<$Result.GetResult<Prisma.$stock_reportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stock_rooms<T extends stock_roomsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stock_roomsDefaultArgs<ExtArgs>>): Prisma__stock_roomsClient<$Result.GetResult<Prisma.$stock_roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the report_rooms model
   */
  interface report_roomsFieldRefs {
    readonly report_id: FieldRef<"report_rooms", 'BigInt'>
    readonly room_id: FieldRef<"report_rooms", 'BigInt'>
    readonly phase1_owner: FieldRef<"report_rooms", 'String'>
    readonly phase1_status: FieldRef<"report_rooms", 'String'>
    readonly phase2_status: FieldRef<"report_rooms", 'String'>
  }
    

  // Custom InputTypes
  /**
   * report_rooms findUnique
   */
  export type report_roomsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_rooms
     */
    select?: report_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_rooms
     */
    omit?: report_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_roomsInclude<ExtArgs> | null
    /**
     * Filter, which report_rooms to fetch.
     */
    where: report_roomsWhereUniqueInput
  }

  /**
   * report_rooms findUniqueOrThrow
   */
  export type report_roomsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_rooms
     */
    select?: report_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_rooms
     */
    omit?: report_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_roomsInclude<ExtArgs> | null
    /**
     * Filter, which report_rooms to fetch.
     */
    where: report_roomsWhereUniqueInput
  }

  /**
   * report_rooms findFirst
   */
  export type report_roomsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_rooms
     */
    select?: report_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_rooms
     */
    omit?: report_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_roomsInclude<ExtArgs> | null
    /**
     * Filter, which report_rooms to fetch.
     */
    where?: report_roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of report_rooms to fetch.
     */
    orderBy?: report_roomsOrderByWithRelationInput | report_roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for report_rooms.
     */
    cursor?: report_roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` report_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` report_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of report_rooms.
     */
    distinct?: Report_roomsScalarFieldEnum | Report_roomsScalarFieldEnum[]
  }

  /**
   * report_rooms findFirstOrThrow
   */
  export type report_roomsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_rooms
     */
    select?: report_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_rooms
     */
    omit?: report_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_roomsInclude<ExtArgs> | null
    /**
     * Filter, which report_rooms to fetch.
     */
    where?: report_roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of report_rooms to fetch.
     */
    orderBy?: report_roomsOrderByWithRelationInput | report_roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for report_rooms.
     */
    cursor?: report_roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` report_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` report_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of report_rooms.
     */
    distinct?: Report_roomsScalarFieldEnum | Report_roomsScalarFieldEnum[]
  }

  /**
   * report_rooms findMany
   */
  export type report_roomsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_rooms
     */
    select?: report_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_rooms
     */
    omit?: report_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_roomsInclude<ExtArgs> | null
    /**
     * Filter, which report_rooms to fetch.
     */
    where?: report_roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of report_rooms to fetch.
     */
    orderBy?: report_roomsOrderByWithRelationInput | report_roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing report_rooms.
     */
    cursor?: report_roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` report_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` report_rooms.
     */
    skip?: number
    distinct?: Report_roomsScalarFieldEnum | Report_roomsScalarFieldEnum[]
  }

  /**
   * report_rooms create
   */
  export type report_roomsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_rooms
     */
    select?: report_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_rooms
     */
    omit?: report_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_roomsInclude<ExtArgs> | null
    /**
     * The data needed to create a report_rooms.
     */
    data: XOR<report_roomsCreateInput, report_roomsUncheckedCreateInput>
  }

  /**
   * report_rooms createMany
   */
  export type report_roomsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many report_rooms.
     */
    data: report_roomsCreateManyInput | report_roomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * report_rooms createManyAndReturn
   */
  export type report_roomsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_rooms
     */
    select?: report_roomsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the report_rooms
     */
    omit?: report_roomsOmit<ExtArgs> | null
    /**
     * The data used to create many report_rooms.
     */
    data: report_roomsCreateManyInput | report_roomsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_roomsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * report_rooms update
   */
  export type report_roomsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_rooms
     */
    select?: report_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_rooms
     */
    omit?: report_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_roomsInclude<ExtArgs> | null
    /**
     * The data needed to update a report_rooms.
     */
    data: XOR<report_roomsUpdateInput, report_roomsUncheckedUpdateInput>
    /**
     * Choose, which report_rooms to update.
     */
    where: report_roomsWhereUniqueInput
  }

  /**
   * report_rooms updateMany
   */
  export type report_roomsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update report_rooms.
     */
    data: XOR<report_roomsUpdateManyMutationInput, report_roomsUncheckedUpdateManyInput>
    /**
     * Filter which report_rooms to update
     */
    where?: report_roomsWhereInput
    /**
     * Limit how many report_rooms to update.
     */
    limit?: number
  }

  /**
   * report_rooms updateManyAndReturn
   */
  export type report_roomsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_rooms
     */
    select?: report_roomsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the report_rooms
     */
    omit?: report_roomsOmit<ExtArgs> | null
    /**
     * The data used to update report_rooms.
     */
    data: XOR<report_roomsUpdateManyMutationInput, report_roomsUncheckedUpdateManyInput>
    /**
     * Filter which report_rooms to update
     */
    where?: report_roomsWhereInput
    /**
     * Limit how many report_rooms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_roomsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * report_rooms upsert
   */
  export type report_roomsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_rooms
     */
    select?: report_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_rooms
     */
    omit?: report_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_roomsInclude<ExtArgs> | null
    /**
     * The filter to search for the report_rooms to update in case it exists.
     */
    where: report_roomsWhereUniqueInput
    /**
     * In case the report_rooms found by the `where` argument doesn't exist, create a new report_rooms with this data.
     */
    create: XOR<report_roomsCreateInput, report_roomsUncheckedCreateInput>
    /**
     * In case the report_rooms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<report_roomsUpdateInput, report_roomsUncheckedUpdateInput>
  }

  /**
   * report_rooms delete
   */
  export type report_roomsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_rooms
     */
    select?: report_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_rooms
     */
    omit?: report_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_roomsInclude<ExtArgs> | null
    /**
     * Filter which report_rooms to delete.
     */
    where: report_roomsWhereUniqueInput
  }

  /**
   * report_rooms deleteMany
   */
  export type report_roomsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which report_rooms to delete
     */
    where?: report_roomsWhereInput
    /**
     * Limit how many report_rooms to delete.
     */
    limit?: number
  }

  /**
   * report_rooms without action
   */
  export type report_roomsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_rooms
     */
    select?: report_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_rooms
     */
    omit?: report_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_roomsInclude<ExtArgs> | null
  }


  /**
   * Model stock_reports
   */

  export type AggregateStock_reports = {
    _count: Stock_reportsCountAggregateOutputType | null
    _avg: Stock_reportsAvgAggregateOutputType | null
    _sum: Stock_reportsSumAggregateOutputType | null
    _min: Stock_reportsMinAggregateOutputType | null
    _max: Stock_reportsMaxAggregateOutputType | null
  }

  export type Stock_reportsAvgAggregateOutputType = {
    id: number | null
  }

  export type Stock_reportsSumAggregateOutputType = {
    id: bigint | null
  }

  export type Stock_reportsMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    status: string | null
    created_by: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Stock_reportsMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    status: string | null
    created_by: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Stock_reportsCountAggregateOutputType = {
    id: number
    name: number
    status: number
    created_by: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Stock_reportsAvgAggregateInputType = {
    id?: true
  }

  export type Stock_reportsSumAggregateInputType = {
    id?: true
  }

  export type Stock_reportsMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    created_by?: true
    created_at?: true
    updated_at?: true
  }

  export type Stock_reportsMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    created_by?: true
    created_at?: true
    updated_at?: true
  }

  export type Stock_reportsCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    created_by?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Stock_reportsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stock_reports to aggregate.
     */
    where?: stock_reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_reports to fetch.
     */
    orderBy?: stock_reportsOrderByWithRelationInput | stock_reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stock_reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stock_reports
    **/
    _count?: true | Stock_reportsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Stock_reportsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Stock_reportsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Stock_reportsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Stock_reportsMaxAggregateInputType
  }

  export type GetStock_reportsAggregateType<T extends Stock_reportsAggregateArgs> = {
        [P in keyof T & keyof AggregateStock_reports]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock_reports[P]>
      : GetScalarType<T[P], AggregateStock_reports[P]>
  }




  export type stock_reportsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stock_reportsWhereInput
    orderBy?: stock_reportsOrderByWithAggregationInput | stock_reportsOrderByWithAggregationInput[]
    by: Stock_reportsScalarFieldEnum[] | Stock_reportsScalarFieldEnum
    having?: stock_reportsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Stock_reportsCountAggregateInputType | true
    _avg?: Stock_reportsAvgAggregateInputType
    _sum?: Stock_reportsSumAggregateInputType
    _min?: Stock_reportsMinAggregateInputType
    _max?: Stock_reportsMaxAggregateInputType
  }

  export type Stock_reportsGroupByOutputType = {
    id: bigint
    name: string
    status: string
    created_by: string
    created_at: Date
    updated_at: Date
    _count: Stock_reportsCountAggregateOutputType | null
    _avg: Stock_reportsAvgAggregateOutputType | null
    _sum: Stock_reportsSumAggregateOutputType | null
    _min: Stock_reportsMinAggregateOutputType | null
    _max: Stock_reportsMaxAggregateOutputType | null
  }

  type GetStock_reportsGroupByPayload<T extends stock_reportsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Stock_reportsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Stock_reportsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Stock_reportsGroupByOutputType[P]>
            : GetScalarType<T[P], Stock_reportsGroupByOutputType[P]>
        }
      >
    >


  export type stock_reportsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
    phase1_boxes?: boolean | stock_reports$phase1_boxesArgs<ExtArgs>
    phase2_box_work?: boolean | stock_reports$phase2_box_workArgs<ExtArgs>
    phase2_lines?: boolean | stock_reports$phase2_linesArgs<ExtArgs>
    report_rooms?: boolean | stock_reports$report_roomsArgs<ExtArgs>
    _count?: boolean | Stock_reportsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock_reports"]>

  export type stock_reportsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["stock_reports"]>

  export type stock_reportsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    status?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["stock_reports"]>

  export type stock_reportsSelectScalar = {
    id?: boolean
    name?: boolean
    status?: boolean
    created_by?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type stock_reportsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "status" | "created_by" | "created_at" | "updated_at", ExtArgs["result"]["stock_reports"]>
  export type stock_reportsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phase1_boxes?: boolean | stock_reports$phase1_boxesArgs<ExtArgs>
    phase2_box_work?: boolean | stock_reports$phase2_box_workArgs<ExtArgs>
    phase2_lines?: boolean | stock_reports$phase2_linesArgs<ExtArgs>
    report_rooms?: boolean | stock_reports$report_roomsArgs<ExtArgs>
    _count?: boolean | Stock_reportsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type stock_reportsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type stock_reportsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $stock_reportsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stock_reports"
    objects: {
      phase1_boxes: Prisma.$phase1_boxesPayload<ExtArgs>[]
      phase2_box_work: Prisma.$phase2_box_workPayload<ExtArgs>[]
      phase2_lines: Prisma.$phase2_linesPayload<ExtArgs>[]
      report_rooms: Prisma.$report_roomsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
      status: string
      created_by: string
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["stock_reports"]>
    composites: {}
  }

  type stock_reportsGetPayload<S extends boolean | null | undefined | stock_reportsDefaultArgs> = $Result.GetResult<Prisma.$stock_reportsPayload, S>

  type stock_reportsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stock_reportsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Stock_reportsCountAggregateInputType | true
    }

  export interface stock_reportsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stock_reports'], meta: { name: 'stock_reports' } }
    /**
     * Find zero or one Stock_reports that matches the filter.
     * @param {stock_reportsFindUniqueArgs} args - Arguments to find a Stock_reports
     * @example
     * // Get one Stock_reports
     * const stock_reports = await prisma.stock_reports.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stock_reportsFindUniqueArgs>(args: SelectSubset<T, stock_reportsFindUniqueArgs<ExtArgs>>): Prisma__stock_reportsClient<$Result.GetResult<Prisma.$stock_reportsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stock_reports that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stock_reportsFindUniqueOrThrowArgs} args - Arguments to find a Stock_reports
     * @example
     * // Get one Stock_reports
     * const stock_reports = await prisma.stock_reports.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stock_reportsFindUniqueOrThrowArgs>(args: SelectSubset<T, stock_reportsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stock_reportsClient<$Result.GetResult<Prisma.$stock_reportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock_reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_reportsFindFirstArgs} args - Arguments to find a Stock_reports
     * @example
     * // Get one Stock_reports
     * const stock_reports = await prisma.stock_reports.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stock_reportsFindFirstArgs>(args?: SelectSubset<T, stock_reportsFindFirstArgs<ExtArgs>>): Prisma__stock_reportsClient<$Result.GetResult<Prisma.$stock_reportsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock_reports that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_reportsFindFirstOrThrowArgs} args - Arguments to find a Stock_reports
     * @example
     * // Get one Stock_reports
     * const stock_reports = await prisma.stock_reports.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stock_reportsFindFirstOrThrowArgs>(args?: SelectSubset<T, stock_reportsFindFirstOrThrowArgs<ExtArgs>>): Prisma__stock_reportsClient<$Result.GetResult<Prisma.$stock_reportsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stock_reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_reportsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stock_reports
     * const stock_reports = await prisma.stock_reports.findMany()
     * 
     * // Get first 10 Stock_reports
     * const stock_reports = await prisma.stock_reports.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stock_reportsWithIdOnly = await prisma.stock_reports.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stock_reportsFindManyArgs>(args?: SelectSubset<T, stock_reportsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_reportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stock_reports.
     * @param {stock_reportsCreateArgs} args - Arguments to create a Stock_reports.
     * @example
     * // Create one Stock_reports
     * const Stock_reports = await prisma.stock_reports.create({
     *   data: {
     *     // ... data to create a Stock_reports
     *   }
     * })
     * 
     */
    create<T extends stock_reportsCreateArgs>(args: SelectSubset<T, stock_reportsCreateArgs<ExtArgs>>): Prisma__stock_reportsClient<$Result.GetResult<Prisma.$stock_reportsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stock_reports.
     * @param {stock_reportsCreateManyArgs} args - Arguments to create many Stock_reports.
     * @example
     * // Create many Stock_reports
     * const stock_reports = await prisma.stock_reports.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stock_reportsCreateManyArgs>(args?: SelectSubset<T, stock_reportsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stock_reports and returns the data saved in the database.
     * @param {stock_reportsCreateManyAndReturnArgs} args - Arguments to create many Stock_reports.
     * @example
     * // Create many Stock_reports
     * const stock_reports = await prisma.stock_reports.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stock_reports and only return the `id`
     * const stock_reportsWithIdOnly = await prisma.stock_reports.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stock_reportsCreateManyAndReturnArgs>(args?: SelectSubset<T, stock_reportsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_reportsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stock_reports.
     * @param {stock_reportsDeleteArgs} args - Arguments to delete one Stock_reports.
     * @example
     * // Delete one Stock_reports
     * const Stock_reports = await prisma.stock_reports.delete({
     *   where: {
     *     // ... filter to delete one Stock_reports
     *   }
     * })
     * 
     */
    delete<T extends stock_reportsDeleteArgs>(args: SelectSubset<T, stock_reportsDeleteArgs<ExtArgs>>): Prisma__stock_reportsClient<$Result.GetResult<Prisma.$stock_reportsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stock_reports.
     * @param {stock_reportsUpdateArgs} args - Arguments to update one Stock_reports.
     * @example
     * // Update one Stock_reports
     * const stock_reports = await prisma.stock_reports.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stock_reportsUpdateArgs>(args: SelectSubset<T, stock_reportsUpdateArgs<ExtArgs>>): Prisma__stock_reportsClient<$Result.GetResult<Prisma.$stock_reportsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stock_reports.
     * @param {stock_reportsDeleteManyArgs} args - Arguments to filter Stock_reports to delete.
     * @example
     * // Delete a few Stock_reports
     * const { count } = await prisma.stock_reports.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stock_reportsDeleteManyArgs>(args?: SelectSubset<T, stock_reportsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stock_reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_reportsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stock_reports
     * const stock_reports = await prisma.stock_reports.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stock_reportsUpdateManyArgs>(args: SelectSubset<T, stock_reportsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stock_reports and returns the data updated in the database.
     * @param {stock_reportsUpdateManyAndReturnArgs} args - Arguments to update many Stock_reports.
     * @example
     * // Update many Stock_reports
     * const stock_reports = await prisma.stock_reports.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stock_reports and only return the `id`
     * const stock_reportsWithIdOnly = await prisma.stock_reports.updateManyAndReturn({
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
    updateManyAndReturn<T extends stock_reportsUpdateManyAndReturnArgs>(args: SelectSubset<T, stock_reportsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_reportsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stock_reports.
     * @param {stock_reportsUpsertArgs} args - Arguments to update or create a Stock_reports.
     * @example
     * // Update or create a Stock_reports
     * const stock_reports = await prisma.stock_reports.upsert({
     *   create: {
     *     // ... data to create a Stock_reports
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock_reports we want to update
     *   }
     * })
     */
    upsert<T extends stock_reportsUpsertArgs>(args: SelectSubset<T, stock_reportsUpsertArgs<ExtArgs>>): Prisma__stock_reportsClient<$Result.GetResult<Prisma.$stock_reportsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stock_reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_reportsCountArgs} args - Arguments to filter Stock_reports to count.
     * @example
     * // Count the number of Stock_reports
     * const count = await prisma.stock_reports.count({
     *   where: {
     *     // ... the filter for the Stock_reports we want to count
     *   }
     * })
    **/
    count<T extends stock_reportsCountArgs>(
      args?: Subset<T, stock_reportsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Stock_reportsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock_reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stock_reportsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Stock_reportsAggregateArgs>(args: Subset<T, Stock_reportsAggregateArgs>): Prisma.PrismaPromise<GetStock_reportsAggregateType<T>>

    /**
     * Group by Stock_reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_reportsGroupByArgs} args - Group by arguments.
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
      T extends stock_reportsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stock_reportsGroupByArgs['orderBy'] }
        : { orderBy?: stock_reportsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, stock_reportsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStock_reportsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stock_reports model
   */
  readonly fields: stock_reportsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stock_reports.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stock_reportsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    phase1_boxes<T extends stock_reports$phase1_boxesArgs<ExtArgs> = {}>(args?: Subset<T, stock_reports$phase1_boxesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phase1_boxesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    phase2_box_work<T extends stock_reports$phase2_box_workArgs<ExtArgs> = {}>(args?: Subset<T, stock_reports$phase2_box_workArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phase2_box_workPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    phase2_lines<T extends stock_reports$phase2_linesArgs<ExtArgs> = {}>(args?: Subset<T, stock_reports$phase2_linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phase2_linesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    report_rooms<T extends stock_reports$report_roomsArgs<ExtArgs> = {}>(args?: Subset<T, stock_reports$report_roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$report_roomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the stock_reports model
   */
  interface stock_reportsFieldRefs {
    readonly id: FieldRef<"stock_reports", 'BigInt'>
    readonly name: FieldRef<"stock_reports", 'String'>
    readonly status: FieldRef<"stock_reports", 'String'>
    readonly created_by: FieldRef<"stock_reports", 'String'>
    readonly created_at: FieldRef<"stock_reports", 'DateTime'>
    readonly updated_at: FieldRef<"stock_reports", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * stock_reports findUnique
   */
  export type stock_reportsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_reports
     */
    select?: stock_reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_reports
     */
    omit?: stock_reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_reportsInclude<ExtArgs> | null
    /**
     * Filter, which stock_reports to fetch.
     */
    where: stock_reportsWhereUniqueInput
  }

  /**
   * stock_reports findUniqueOrThrow
   */
  export type stock_reportsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_reports
     */
    select?: stock_reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_reports
     */
    omit?: stock_reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_reportsInclude<ExtArgs> | null
    /**
     * Filter, which stock_reports to fetch.
     */
    where: stock_reportsWhereUniqueInput
  }

  /**
   * stock_reports findFirst
   */
  export type stock_reportsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_reports
     */
    select?: stock_reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_reports
     */
    omit?: stock_reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_reportsInclude<ExtArgs> | null
    /**
     * Filter, which stock_reports to fetch.
     */
    where?: stock_reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_reports to fetch.
     */
    orderBy?: stock_reportsOrderByWithRelationInput | stock_reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stock_reports.
     */
    cursor?: stock_reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stock_reports.
     */
    distinct?: Stock_reportsScalarFieldEnum | Stock_reportsScalarFieldEnum[]
  }

  /**
   * stock_reports findFirstOrThrow
   */
  export type stock_reportsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_reports
     */
    select?: stock_reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_reports
     */
    omit?: stock_reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_reportsInclude<ExtArgs> | null
    /**
     * Filter, which stock_reports to fetch.
     */
    where?: stock_reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_reports to fetch.
     */
    orderBy?: stock_reportsOrderByWithRelationInput | stock_reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stock_reports.
     */
    cursor?: stock_reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stock_reports.
     */
    distinct?: Stock_reportsScalarFieldEnum | Stock_reportsScalarFieldEnum[]
  }

  /**
   * stock_reports findMany
   */
  export type stock_reportsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_reports
     */
    select?: stock_reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_reports
     */
    omit?: stock_reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_reportsInclude<ExtArgs> | null
    /**
     * Filter, which stock_reports to fetch.
     */
    where?: stock_reportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_reports to fetch.
     */
    orderBy?: stock_reportsOrderByWithRelationInput | stock_reportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stock_reports.
     */
    cursor?: stock_reportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_reports.
     */
    skip?: number
    distinct?: Stock_reportsScalarFieldEnum | Stock_reportsScalarFieldEnum[]
  }

  /**
   * stock_reports create
   */
  export type stock_reportsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_reports
     */
    select?: stock_reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_reports
     */
    omit?: stock_reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_reportsInclude<ExtArgs> | null
    /**
     * The data needed to create a stock_reports.
     */
    data: XOR<stock_reportsCreateInput, stock_reportsUncheckedCreateInput>
  }

  /**
   * stock_reports createMany
   */
  export type stock_reportsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stock_reports.
     */
    data: stock_reportsCreateManyInput | stock_reportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stock_reports createManyAndReturn
   */
  export type stock_reportsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_reports
     */
    select?: stock_reportsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stock_reports
     */
    omit?: stock_reportsOmit<ExtArgs> | null
    /**
     * The data used to create many stock_reports.
     */
    data: stock_reportsCreateManyInput | stock_reportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stock_reports update
   */
  export type stock_reportsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_reports
     */
    select?: stock_reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_reports
     */
    omit?: stock_reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_reportsInclude<ExtArgs> | null
    /**
     * The data needed to update a stock_reports.
     */
    data: XOR<stock_reportsUpdateInput, stock_reportsUncheckedUpdateInput>
    /**
     * Choose, which stock_reports to update.
     */
    where: stock_reportsWhereUniqueInput
  }

  /**
   * stock_reports updateMany
   */
  export type stock_reportsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stock_reports.
     */
    data: XOR<stock_reportsUpdateManyMutationInput, stock_reportsUncheckedUpdateManyInput>
    /**
     * Filter which stock_reports to update
     */
    where?: stock_reportsWhereInput
    /**
     * Limit how many stock_reports to update.
     */
    limit?: number
  }

  /**
   * stock_reports updateManyAndReturn
   */
  export type stock_reportsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_reports
     */
    select?: stock_reportsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stock_reports
     */
    omit?: stock_reportsOmit<ExtArgs> | null
    /**
     * The data used to update stock_reports.
     */
    data: XOR<stock_reportsUpdateManyMutationInput, stock_reportsUncheckedUpdateManyInput>
    /**
     * Filter which stock_reports to update
     */
    where?: stock_reportsWhereInput
    /**
     * Limit how many stock_reports to update.
     */
    limit?: number
  }

  /**
   * stock_reports upsert
   */
  export type stock_reportsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_reports
     */
    select?: stock_reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_reports
     */
    omit?: stock_reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_reportsInclude<ExtArgs> | null
    /**
     * The filter to search for the stock_reports to update in case it exists.
     */
    where: stock_reportsWhereUniqueInput
    /**
     * In case the stock_reports found by the `where` argument doesn't exist, create a new stock_reports with this data.
     */
    create: XOR<stock_reportsCreateInput, stock_reportsUncheckedCreateInput>
    /**
     * In case the stock_reports was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stock_reportsUpdateInput, stock_reportsUncheckedUpdateInput>
  }

  /**
   * stock_reports delete
   */
  export type stock_reportsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_reports
     */
    select?: stock_reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_reports
     */
    omit?: stock_reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_reportsInclude<ExtArgs> | null
    /**
     * Filter which stock_reports to delete.
     */
    where: stock_reportsWhereUniqueInput
  }

  /**
   * stock_reports deleteMany
   */
  export type stock_reportsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stock_reports to delete
     */
    where?: stock_reportsWhereInput
    /**
     * Limit how many stock_reports to delete.
     */
    limit?: number
  }

  /**
   * stock_reports.phase1_boxes
   */
  export type stock_reports$phase1_boxesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase1_boxes
     */
    select?: phase1_boxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase1_boxes
     */
    omit?: phase1_boxesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase1_boxesInclude<ExtArgs> | null
    where?: phase1_boxesWhereInput
    orderBy?: phase1_boxesOrderByWithRelationInput | phase1_boxesOrderByWithRelationInput[]
    cursor?: phase1_boxesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Phase1_boxesScalarFieldEnum | Phase1_boxesScalarFieldEnum[]
  }

  /**
   * stock_reports.phase2_box_work
   */
  export type stock_reports$phase2_box_workArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_box_work
     */
    select?: phase2_box_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_box_work
     */
    omit?: phase2_box_workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_box_workInclude<ExtArgs> | null
    where?: phase2_box_workWhereInput
    orderBy?: phase2_box_workOrderByWithRelationInput | phase2_box_workOrderByWithRelationInput[]
    cursor?: phase2_box_workWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Phase2_box_workScalarFieldEnum | Phase2_box_workScalarFieldEnum[]
  }

  /**
   * stock_reports.phase2_lines
   */
  export type stock_reports$phase2_linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_lines
     */
    select?: phase2_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_lines
     */
    omit?: phase2_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_linesInclude<ExtArgs> | null
    where?: phase2_linesWhereInput
    orderBy?: phase2_linesOrderByWithRelationInput | phase2_linesOrderByWithRelationInput[]
    cursor?: phase2_linesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Phase2_linesScalarFieldEnum | Phase2_linesScalarFieldEnum[]
  }

  /**
   * stock_reports.report_rooms
   */
  export type stock_reports$report_roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_rooms
     */
    select?: report_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_rooms
     */
    omit?: report_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_roomsInclude<ExtArgs> | null
    where?: report_roomsWhereInput
    orderBy?: report_roomsOrderByWithRelationInput | report_roomsOrderByWithRelationInput[]
    cursor?: report_roomsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Report_roomsScalarFieldEnum | Report_roomsScalarFieldEnum[]
  }

  /**
   * stock_reports without action
   */
  export type stock_reportsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_reports
     */
    select?: stock_reportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_reports
     */
    omit?: stock_reportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_reportsInclude<ExtArgs> | null
  }


  /**
   * Model stock_rooms
   */

  export type AggregateStock_rooms = {
    _count: Stock_roomsCountAggregateOutputType | null
    _avg: Stock_roomsAvgAggregateOutputType | null
    _sum: Stock_roomsSumAggregateOutputType | null
    _min: Stock_roomsMinAggregateOutputType | null
    _max: Stock_roomsMaxAggregateOutputType | null
  }

  export type Stock_roomsAvgAggregateOutputType = {
    id: number | null
  }

  export type Stock_roomsSumAggregateOutputType = {
    id: bigint | null
  }

  export type Stock_roomsMinAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type Stock_roomsMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
  }

  export type Stock_roomsCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type Stock_roomsAvgAggregateInputType = {
    id?: true
  }

  export type Stock_roomsSumAggregateInputType = {
    id?: true
  }

  export type Stock_roomsMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type Stock_roomsMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type Stock_roomsCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type Stock_roomsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stock_rooms to aggregate.
     */
    where?: stock_roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_rooms to fetch.
     */
    orderBy?: stock_roomsOrderByWithRelationInput | stock_roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stock_roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stock_rooms
    **/
    _count?: true | Stock_roomsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Stock_roomsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Stock_roomsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Stock_roomsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Stock_roomsMaxAggregateInputType
  }

  export type GetStock_roomsAggregateType<T extends Stock_roomsAggregateArgs> = {
        [P in keyof T & keyof AggregateStock_rooms]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock_rooms[P]>
      : GetScalarType<T[P], AggregateStock_rooms[P]>
  }




  export type stock_roomsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stock_roomsWhereInput
    orderBy?: stock_roomsOrderByWithAggregationInput | stock_roomsOrderByWithAggregationInput[]
    by: Stock_roomsScalarFieldEnum[] | Stock_roomsScalarFieldEnum
    having?: stock_roomsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Stock_roomsCountAggregateInputType | true
    _avg?: Stock_roomsAvgAggregateInputType
    _sum?: Stock_roomsSumAggregateInputType
    _min?: Stock_roomsMinAggregateInputType
    _max?: Stock_roomsMaxAggregateInputType
  }

  export type Stock_roomsGroupByOutputType = {
    id: bigint
    name: string
    _count: Stock_roomsCountAggregateOutputType | null
    _avg: Stock_roomsAvgAggregateOutputType | null
    _sum: Stock_roomsSumAggregateOutputType | null
    _min: Stock_roomsMinAggregateOutputType | null
    _max: Stock_roomsMaxAggregateOutputType | null
  }

  type GetStock_roomsGroupByPayload<T extends stock_roomsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Stock_roomsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Stock_roomsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Stock_roomsGroupByOutputType[P]>
            : GetScalarType<T[P], Stock_roomsGroupByOutputType[P]>
        }
      >
    >


  export type stock_roomsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phase1_boxes?: boolean | stock_rooms$phase1_boxesArgs<ExtArgs>
    phase2_box_work?: boolean | stock_rooms$phase2_box_workArgs<ExtArgs>
    phase2_lines?: boolean | stock_rooms$phase2_linesArgs<ExtArgs>
    report_rooms?: boolean | stock_rooms$report_roomsArgs<ExtArgs>
    _count?: boolean | Stock_roomsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock_rooms"]>

  export type stock_roomsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["stock_rooms"]>

  export type stock_roomsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["stock_rooms"]>

  export type stock_roomsSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type stock_roomsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["stock_rooms"]>
  export type stock_roomsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    phase1_boxes?: boolean | stock_rooms$phase1_boxesArgs<ExtArgs>
    phase2_box_work?: boolean | stock_rooms$phase2_box_workArgs<ExtArgs>
    phase2_lines?: boolean | stock_rooms$phase2_linesArgs<ExtArgs>
    report_rooms?: boolean | stock_rooms$report_roomsArgs<ExtArgs>
    _count?: boolean | Stock_roomsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type stock_roomsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type stock_roomsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $stock_roomsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stock_rooms"
    objects: {
      phase1_boxes: Prisma.$phase1_boxesPayload<ExtArgs>[]
      phase2_box_work: Prisma.$phase2_box_workPayload<ExtArgs>[]
      phase2_lines: Prisma.$phase2_linesPayload<ExtArgs>[]
      report_rooms: Prisma.$report_roomsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string
    }, ExtArgs["result"]["stock_rooms"]>
    composites: {}
  }

  type stock_roomsGetPayload<S extends boolean | null | undefined | stock_roomsDefaultArgs> = $Result.GetResult<Prisma.$stock_roomsPayload, S>

  type stock_roomsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stock_roomsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Stock_roomsCountAggregateInputType | true
    }

  export interface stock_roomsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stock_rooms'], meta: { name: 'stock_rooms' } }
    /**
     * Find zero or one Stock_rooms that matches the filter.
     * @param {stock_roomsFindUniqueArgs} args - Arguments to find a Stock_rooms
     * @example
     * // Get one Stock_rooms
     * const stock_rooms = await prisma.stock_rooms.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stock_roomsFindUniqueArgs>(args: SelectSubset<T, stock_roomsFindUniqueArgs<ExtArgs>>): Prisma__stock_roomsClient<$Result.GetResult<Prisma.$stock_roomsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stock_rooms that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stock_roomsFindUniqueOrThrowArgs} args - Arguments to find a Stock_rooms
     * @example
     * // Get one Stock_rooms
     * const stock_rooms = await prisma.stock_rooms.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stock_roomsFindUniqueOrThrowArgs>(args: SelectSubset<T, stock_roomsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stock_roomsClient<$Result.GetResult<Prisma.$stock_roomsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock_rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_roomsFindFirstArgs} args - Arguments to find a Stock_rooms
     * @example
     * // Get one Stock_rooms
     * const stock_rooms = await prisma.stock_rooms.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stock_roomsFindFirstArgs>(args?: SelectSubset<T, stock_roomsFindFirstArgs<ExtArgs>>): Prisma__stock_roomsClient<$Result.GetResult<Prisma.$stock_roomsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock_rooms that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_roomsFindFirstOrThrowArgs} args - Arguments to find a Stock_rooms
     * @example
     * // Get one Stock_rooms
     * const stock_rooms = await prisma.stock_rooms.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stock_roomsFindFirstOrThrowArgs>(args?: SelectSubset<T, stock_roomsFindFirstOrThrowArgs<ExtArgs>>): Prisma__stock_roomsClient<$Result.GetResult<Prisma.$stock_roomsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stock_rooms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_roomsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stock_rooms
     * const stock_rooms = await prisma.stock_rooms.findMany()
     * 
     * // Get first 10 Stock_rooms
     * const stock_rooms = await prisma.stock_rooms.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stock_roomsWithIdOnly = await prisma.stock_rooms.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stock_roomsFindManyArgs>(args?: SelectSubset<T, stock_roomsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_roomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stock_rooms.
     * @param {stock_roomsCreateArgs} args - Arguments to create a Stock_rooms.
     * @example
     * // Create one Stock_rooms
     * const Stock_rooms = await prisma.stock_rooms.create({
     *   data: {
     *     // ... data to create a Stock_rooms
     *   }
     * })
     * 
     */
    create<T extends stock_roomsCreateArgs>(args: SelectSubset<T, stock_roomsCreateArgs<ExtArgs>>): Prisma__stock_roomsClient<$Result.GetResult<Prisma.$stock_roomsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stock_rooms.
     * @param {stock_roomsCreateManyArgs} args - Arguments to create many Stock_rooms.
     * @example
     * // Create many Stock_rooms
     * const stock_rooms = await prisma.stock_rooms.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stock_roomsCreateManyArgs>(args?: SelectSubset<T, stock_roomsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stock_rooms and returns the data saved in the database.
     * @param {stock_roomsCreateManyAndReturnArgs} args - Arguments to create many Stock_rooms.
     * @example
     * // Create many Stock_rooms
     * const stock_rooms = await prisma.stock_rooms.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stock_rooms and only return the `id`
     * const stock_roomsWithIdOnly = await prisma.stock_rooms.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stock_roomsCreateManyAndReturnArgs>(args?: SelectSubset<T, stock_roomsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_roomsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stock_rooms.
     * @param {stock_roomsDeleteArgs} args - Arguments to delete one Stock_rooms.
     * @example
     * // Delete one Stock_rooms
     * const Stock_rooms = await prisma.stock_rooms.delete({
     *   where: {
     *     // ... filter to delete one Stock_rooms
     *   }
     * })
     * 
     */
    delete<T extends stock_roomsDeleteArgs>(args: SelectSubset<T, stock_roomsDeleteArgs<ExtArgs>>): Prisma__stock_roomsClient<$Result.GetResult<Prisma.$stock_roomsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stock_rooms.
     * @param {stock_roomsUpdateArgs} args - Arguments to update one Stock_rooms.
     * @example
     * // Update one Stock_rooms
     * const stock_rooms = await prisma.stock_rooms.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stock_roomsUpdateArgs>(args: SelectSubset<T, stock_roomsUpdateArgs<ExtArgs>>): Prisma__stock_roomsClient<$Result.GetResult<Prisma.$stock_roomsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stock_rooms.
     * @param {stock_roomsDeleteManyArgs} args - Arguments to filter Stock_rooms to delete.
     * @example
     * // Delete a few Stock_rooms
     * const { count } = await prisma.stock_rooms.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stock_roomsDeleteManyArgs>(args?: SelectSubset<T, stock_roomsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stock_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_roomsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stock_rooms
     * const stock_rooms = await prisma.stock_rooms.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stock_roomsUpdateManyArgs>(args: SelectSubset<T, stock_roomsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stock_rooms and returns the data updated in the database.
     * @param {stock_roomsUpdateManyAndReturnArgs} args - Arguments to update many Stock_rooms.
     * @example
     * // Update many Stock_rooms
     * const stock_rooms = await prisma.stock_rooms.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stock_rooms and only return the `id`
     * const stock_roomsWithIdOnly = await prisma.stock_rooms.updateManyAndReturn({
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
    updateManyAndReturn<T extends stock_roomsUpdateManyAndReturnArgs>(args: SelectSubset<T, stock_roomsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_roomsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stock_rooms.
     * @param {stock_roomsUpsertArgs} args - Arguments to update or create a Stock_rooms.
     * @example
     * // Update or create a Stock_rooms
     * const stock_rooms = await prisma.stock_rooms.upsert({
     *   create: {
     *     // ... data to create a Stock_rooms
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock_rooms we want to update
     *   }
     * })
     */
    upsert<T extends stock_roomsUpsertArgs>(args: SelectSubset<T, stock_roomsUpsertArgs<ExtArgs>>): Prisma__stock_roomsClient<$Result.GetResult<Prisma.$stock_roomsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stock_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_roomsCountArgs} args - Arguments to filter Stock_rooms to count.
     * @example
     * // Count the number of Stock_rooms
     * const count = await prisma.stock_rooms.count({
     *   where: {
     *     // ... the filter for the Stock_rooms we want to count
     *   }
     * })
    **/
    count<T extends stock_roomsCountArgs>(
      args?: Subset<T, stock_roomsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Stock_roomsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stock_roomsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Stock_roomsAggregateArgs>(args: Subset<T, Stock_roomsAggregateArgs>): Prisma.PrismaPromise<GetStock_roomsAggregateType<T>>

    /**
     * Group by Stock_rooms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_roomsGroupByArgs} args - Group by arguments.
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
      T extends stock_roomsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stock_roomsGroupByArgs['orderBy'] }
        : { orderBy?: stock_roomsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, stock_roomsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStock_roomsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stock_rooms model
   */
  readonly fields: stock_roomsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stock_rooms.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stock_roomsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    phase1_boxes<T extends stock_rooms$phase1_boxesArgs<ExtArgs> = {}>(args?: Subset<T, stock_rooms$phase1_boxesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phase1_boxesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    phase2_box_work<T extends stock_rooms$phase2_box_workArgs<ExtArgs> = {}>(args?: Subset<T, stock_rooms$phase2_box_workArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phase2_box_workPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    phase2_lines<T extends stock_rooms$phase2_linesArgs<ExtArgs> = {}>(args?: Subset<T, stock_rooms$phase2_linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$phase2_linesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    report_rooms<T extends stock_rooms$report_roomsArgs<ExtArgs> = {}>(args?: Subset<T, stock_rooms$report_roomsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$report_roomsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the stock_rooms model
   */
  interface stock_roomsFieldRefs {
    readonly id: FieldRef<"stock_rooms", 'BigInt'>
    readonly name: FieldRef<"stock_rooms", 'String'>
  }
    

  // Custom InputTypes
  /**
   * stock_rooms findUnique
   */
  export type stock_roomsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_rooms
     */
    select?: stock_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_rooms
     */
    omit?: stock_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_roomsInclude<ExtArgs> | null
    /**
     * Filter, which stock_rooms to fetch.
     */
    where: stock_roomsWhereUniqueInput
  }

  /**
   * stock_rooms findUniqueOrThrow
   */
  export type stock_roomsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_rooms
     */
    select?: stock_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_rooms
     */
    omit?: stock_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_roomsInclude<ExtArgs> | null
    /**
     * Filter, which stock_rooms to fetch.
     */
    where: stock_roomsWhereUniqueInput
  }

  /**
   * stock_rooms findFirst
   */
  export type stock_roomsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_rooms
     */
    select?: stock_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_rooms
     */
    omit?: stock_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_roomsInclude<ExtArgs> | null
    /**
     * Filter, which stock_rooms to fetch.
     */
    where?: stock_roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_rooms to fetch.
     */
    orderBy?: stock_roomsOrderByWithRelationInput | stock_roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stock_rooms.
     */
    cursor?: stock_roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stock_rooms.
     */
    distinct?: Stock_roomsScalarFieldEnum | Stock_roomsScalarFieldEnum[]
  }

  /**
   * stock_rooms findFirstOrThrow
   */
  export type stock_roomsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_rooms
     */
    select?: stock_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_rooms
     */
    omit?: stock_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_roomsInclude<ExtArgs> | null
    /**
     * Filter, which stock_rooms to fetch.
     */
    where?: stock_roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_rooms to fetch.
     */
    orderBy?: stock_roomsOrderByWithRelationInput | stock_roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stock_rooms.
     */
    cursor?: stock_roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_rooms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stock_rooms.
     */
    distinct?: Stock_roomsScalarFieldEnum | Stock_roomsScalarFieldEnum[]
  }

  /**
   * stock_rooms findMany
   */
  export type stock_roomsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_rooms
     */
    select?: stock_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_rooms
     */
    omit?: stock_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_roomsInclude<ExtArgs> | null
    /**
     * Filter, which stock_rooms to fetch.
     */
    where?: stock_roomsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_rooms to fetch.
     */
    orderBy?: stock_roomsOrderByWithRelationInput | stock_roomsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stock_rooms.
     */
    cursor?: stock_roomsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_rooms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_rooms.
     */
    skip?: number
    distinct?: Stock_roomsScalarFieldEnum | Stock_roomsScalarFieldEnum[]
  }

  /**
   * stock_rooms create
   */
  export type stock_roomsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_rooms
     */
    select?: stock_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_rooms
     */
    omit?: stock_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_roomsInclude<ExtArgs> | null
    /**
     * The data needed to create a stock_rooms.
     */
    data: XOR<stock_roomsCreateInput, stock_roomsUncheckedCreateInput>
  }

  /**
   * stock_rooms createMany
   */
  export type stock_roomsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stock_rooms.
     */
    data: stock_roomsCreateManyInput | stock_roomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stock_rooms createManyAndReturn
   */
  export type stock_roomsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_rooms
     */
    select?: stock_roomsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stock_rooms
     */
    omit?: stock_roomsOmit<ExtArgs> | null
    /**
     * The data used to create many stock_rooms.
     */
    data: stock_roomsCreateManyInput | stock_roomsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stock_rooms update
   */
  export type stock_roomsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_rooms
     */
    select?: stock_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_rooms
     */
    omit?: stock_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_roomsInclude<ExtArgs> | null
    /**
     * The data needed to update a stock_rooms.
     */
    data: XOR<stock_roomsUpdateInput, stock_roomsUncheckedUpdateInput>
    /**
     * Choose, which stock_rooms to update.
     */
    where: stock_roomsWhereUniqueInput
  }

  /**
   * stock_rooms updateMany
   */
  export type stock_roomsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stock_rooms.
     */
    data: XOR<stock_roomsUpdateManyMutationInput, stock_roomsUncheckedUpdateManyInput>
    /**
     * Filter which stock_rooms to update
     */
    where?: stock_roomsWhereInput
    /**
     * Limit how many stock_rooms to update.
     */
    limit?: number
  }

  /**
   * stock_rooms updateManyAndReturn
   */
  export type stock_roomsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_rooms
     */
    select?: stock_roomsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stock_rooms
     */
    omit?: stock_roomsOmit<ExtArgs> | null
    /**
     * The data used to update stock_rooms.
     */
    data: XOR<stock_roomsUpdateManyMutationInput, stock_roomsUncheckedUpdateManyInput>
    /**
     * Filter which stock_rooms to update
     */
    where?: stock_roomsWhereInput
    /**
     * Limit how many stock_rooms to update.
     */
    limit?: number
  }

  /**
   * stock_rooms upsert
   */
  export type stock_roomsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_rooms
     */
    select?: stock_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_rooms
     */
    omit?: stock_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_roomsInclude<ExtArgs> | null
    /**
     * The filter to search for the stock_rooms to update in case it exists.
     */
    where: stock_roomsWhereUniqueInput
    /**
     * In case the stock_rooms found by the `where` argument doesn't exist, create a new stock_rooms with this data.
     */
    create: XOR<stock_roomsCreateInput, stock_roomsUncheckedCreateInput>
    /**
     * In case the stock_rooms was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stock_roomsUpdateInput, stock_roomsUncheckedUpdateInput>
  }

  /**
   * stock_rooms delete
   */
  export type stock_roomsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_rooms
     */
    select?: stock_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_rooms
     */
    omit?: stock_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_roomsInclude<ExtArgs> | null
    /**
     * Filter which stock_rooms to delete.
     */
    where: stock_roomsWhereUniqueInput
  }

  /**
   * stock_rooms deleteMany
   */
  export type stock_roomsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stock_rooms to delete
     */
    where?: stock_roomsWhereInput
    /**
     * Limit how many stock_rooms to delete.
     */
    limit?: number
  }

  /**
   * stock_rooms.phase1_boxes
   */
  export type stock_rooms$phase1_boxesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase1_boxes
     */
    select?: phase1_boxesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase1_boxes
     */
    omit?: phase1_boxesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase1_boxesInclude<ExtArgs> | null
    where?: phase1_boxesWhereInput
    orderBy?: phase1_boxesOrderByWithRelationInput | phase1_boxesOrderByWithRelationInput[]
    cursor?: phase1_boxesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Phase1_boxesScalarFieldEnum | Phase1_boxesScalarFieldEnum[]
  }

  /**
   * stock_rooms.phase2_box_work
   */
  export type stock_rooms$phase2_box_workArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_box_work
     */
    select?: phase2_box_workSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_box_work
     */
    omit?: phase2_box_workOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_box_workInclude<ExtArgs> | null
    where?: phase2_box_workWhereInput
    orderBy?: phase2_box_workOrderByWithRelationInput | phase2_box_workOrderByWithRelationInput[]
    cursor?: phase2_box_workWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Phase2_box_workScalarFieldEnum | Phase2_box_workScalarFieldEnum[]
  }

  /**
   * stock_rooms.phase2_lines
   */
  export type stock_rooms$phase2_linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the phase2_lines
     */
    select?: phase2_linesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the phase2_lines
     */
    omit?: phase2_linesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: phase2_linesInclude<ExtArgs> | null
    where?: phase2_linesWhereInput
    orderBy?: phase2_linesOrderByWithRelationInput | phase2_linesOrderByWithRelationInput[]
    cursor?: phase2_linesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Phase2_linesScalarFieldEnum | Phase2_linesScalarFieldEnum[]
  }

  /**
   * stock_rooms.report_rooms
   */
  export type stock_rooms$report_roomsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the report_rooms
     */
    select?: report_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the report_rooms
     */
    omit?: report_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: report_roomsInclude<ExtArgs> | null
    where?: report_roomsWhereInput
    orderBy?: report_roomsOrderByWithRelationInput | report_roomsOrderByWithRelationInput[]
    cursor?: report_roomsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Report_roomsScalarFieldEnum | Report_roomsScalarFieldEnum[]
  }

  /**
   * stock_rooms without action
   */
  export type stock_roomsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_rooms
     */
    select?: stock_roomsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_rooms
     */
    omit?: stock_roomsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_roomsInclude<ExtArgs> | null
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


  export const Phase1_boxesScalarFieldEnum: {
    report_id: 'report_id',
    room_id: 'room_id',
    box_id: 'box_id',
    scan_count: 'scan_count',
    status: 'status'
  };

  export type Phase1_boxesScalarFieldEnum = (typeof Phase1_boxesScalarFieldEnum)[keyof typeof Phase1_boxesScalarFieldEnum]


  export const Phase2_box_workScalarFieldEnum: {
    report_id: 'report_id',
    room_id: 'room_id',
    box_id: 'box_id',
    assigned_to: 'assigned_to',
    status: 'status'
  };

  export type Phase2_box_workScalarFieldEnum = (typeof Phase2_box_workScalarFieldEnum)[keyof typeof Phase2_box_workScalarFieldEnum]


  export const Phase2_linesScalarFieldEnum: {
    report_id: 'report_id',
    room_id: 'room_id',
    box_id: 'box_id',
    sku: 'sku',
    qty: 'qty',
    id: 'id'
  };

  export type Phase2_linesScalarFieldEnum = (typeof Phase2_linesScalarFieldEnum)[keyof typeof Phase2_linesScalarFieldEnum]


  export const Report_roomsScalarFieldEnum: {
    report_id: 'report_id',
    room_id: 'room_id',
    phase1_owner: 'phase1_owner',
    phase1_status: 'phase1_status',
    phase2_status: 'phase2_status'
  };

  export type Report_roomsScalarFieldEnum = (typeof Report_roomsScalarFieldEnum)[keyof typeof Report_roomsScalarFieldEnum]


  export const Stock_reportsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Stock_reportsScalarFieldEnum = (typeof Stock_reportsScalarFieldEnum)[keyof typeof Stock_reportsScalarFieldEnum]


  export const Stock_roomsScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type Stock_roomsScalarFieldEnum = (typeof Stock_roomsScalarFieldEnum)[keyof typeof Stock_roomsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


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


  export type phase1_boxesWhereInput = {
    AND?: phase1_boxesWhereInput | phase1_boxesWhereInput[]
    OR?: phase1_boxesWhereInput[]
    NOT?: phase1_boxesWhereInput | phase1_boxesWhereInput[]
    report_id?: BigIntFilter<"phase1_boxes"> | bigint | number
    room_id?: BigIntFilter<"phase1_boxes"> | bigint | number
    box_id?: StringFilter<"phase1_boxes"> | string
    scan_count?: IntFilter<"phase1_boxes"> | number
    status?: StringFilter<"phase1_boxes"> | string
    stock_reports?: XOR<Stock_reportsScalarRelationFilter, stock_reportsWhereInput>
    stock_rooms?: XOR<Stock_roomsScalarRelationFilter, stock_roomsWhereInput>
  }

  export type phase1_boxesOrderByWithRelationInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    box_id?: SortOrder
    scan_count?: SortOrder
    status?: SortOrder
    stock_reports?: stock_reportsOrderByWithRelationInput
    stock_rooms?: stock_roomsOrderByWithRelationInput
  }

  export type phase1_boxesWhereUniqueInput = Prisma.AtLeast<{
    report_id_room_id_box_id?: phase1_boxesReport_idRoom_idBox_idCompoundUniqueInput
    AND?: phase1_boxesWhereInput | phase1_boxesWhereInput[]
    OR?: phase1_boxesWhereInput[]
    NOT?: phase1_boxesWhereInput | phase1_boxesWhereInput[]
    report_id?: BigIntFilter<"phase1_boxes"> | bigint | number
    room_id?: BigIntFilter<"phase1_boxes"> | bigint | number
    box_id?: StringFilter<"phase1_boxes"> | string
    scan_count?: IntFilter<"phase1_boxes"> | number
    status?: StringFilter<"phase1_boxes"> | string
    stock_reports?: XOR<Stock_reportsScalarRelationFilter, stock_reportsWhereInput>
    stock_rooms?: XOR<Stock_roomsScalarRelationFilter, stock_roomsWhereInput>
  }, "report_id_room_id_box_id">

  export type phase1_boxesOrderByWithAggregationInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    box_id?: SortOrder
    scan_count?: SortOrder
    status?: SortOrder
    _count?: phase1_boxesCountOrderByAggregateInput
    _avg?: phase1_boxesAvgOrderByAggregateInput
    _max?: phase1_boxesMaxOrderByAggregateInput
    _min?: phase1_boxesMinOrderByAggregateInput
    _sum?: phase1_boxesSumOrderByAggregateInput
  }

  export type phase1_boxesScalarWhereWithAggregatesInput = {
    AND?: phase1_boxesScalarWhereWithAggregatesInput | phase1_boxesScalarWhereWithAggregatesInput[]
    OR?: phase1_boxesScalarWhereWithAggregatesInput[]
    NOT?: phase1_boxesScalarWhereWithAggregatesInput | phase1_boxesScalarWhereWithAggregatesInput[]
    report_id?: BigIntWithAggregatesFilter<"phase1_boxes"> | bigint | number
    room_id?: BigIntWithAggregatesFilter<"phase1_boxes"> | bigint | number
    box_id?: StringWithAggregatesFilter<"phase1_boxes"> | string
    scan_count?: IntWithAggregatesFilter<"phase1_boxes"> | number
    status?: StringWithAggregatesFilter<"phase1_boxes"> | string
  }

  export type phase2_box_workWhereInput = {
    AND?: phase2_box_workWhereInput | phase2_box_workWhereInput[]
    OR?: phase2_box_workWhereInput[]
    NOT?: phase2_box_workWhereInput | phase2_box_workWhereInput[]
    report_id?: BigIntFilter<"phase2_box_work"> | bigint | number
    room_id?: BigIntFilter<"phase2_box_work"> | bigint | number
    box_id?: StringFilter<"phase2_box_work"> | string
    assigned_to?: StringNullableFilter<"phase2_box_work"> | string | null
    status?: StringFilter<"phase2_box_work"> | string
    stock_reports?: XOR<Stock_reportsScalarRelationFilter, stock_reportsWhereInput>
    stock_rooms?: XOR<Stock_roomsScalarRelationFilter, stock_roomsWhereInput>
  }

  export type phase2_box_workOrderByWithRelationInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    box_id?: SortOrder
    assigned_to?: SortOrderInput | SortOrder
    status?: SortOrder
    stock_reports?: stock_reportsOrderByWithRelationInput
    stock_rooms?: stock_roomsOrderByWithRelationInput
  }

  export type phase2_box_workWhereUniqueInput = Prisma.AtLeast<{
    report_id_box_id?: phase2_box_workReport_idBox_idCompoundUniqueInput
    AND?: phase2_box_workWhereInput | phase2_box_workWhereInput[]
    OR?: phase2_box_workWhereInput[]
    NOT?: phase2_box_workWhereInput | phase2_box_workWhereInput[]
    report_id?: BigIntFilter<"phase2_box_work"> | bigint | number
    room_id?: BigIntFilter<"phase2_box_work"> | bigint | number
    box_id?: StringFilter<"phase2_box_work"> | string
    assigned_to?: StringNullableFilter<"phase2_box_work"> | string | null
    status?: StringFilter<"phase2_box_work"> | string
    stock_reports?: XOR<Stock_reportsScalarRelationFilter, stock_reportsWhereInput>
    stock_rooms?: XOR<Stock_roomsScalarRelationFilter, stock_roomsWhereInput>
  }, "report_id_box_id" | "report_id_box_id">

  export type phase2_box_workOrderByWithAggregationInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    box_id?: SortOrder
    assigned_to?: SortOrderInput | SortOrder
    status?: SortOrder
    _count?: phase2_box_workCountOrderByAggregateInput
    _avg?: phase2_box_workAvgOrderByAggregateInput
    _max?: phase2_box_workMaxOrderByAggregateInput
    _min?: phase2_box_workMinOrderByAggregateInput
    _sum?: phase2_box_workSumOrderByAggregateInput
  }

  export type phase2_box_workScalarWhereWithAggregatesInput = {
    AND?: phase2_box_workScalarWhereWithAggregatesInput | phase2_box_workScalarWhereWithAggregatesInput[]
    OR?: phase2_box_workScalarWhereWithAggregatesInput[]
    NOT?: phase2_box_workScalarWhereWithAggregatesInput | phase2_box_workScalarWhereWithAggregatesInput[]
    report_id?: BigIntWithAggregatesFilter<"phase2_box_work"> | bigint | number
    room_id?: BigIntWithAggregatesFilter<"phase2_box_work"> | bigint | number
    box_id?: StringWithAggregatesFilter<"phase2_box_work"> | string
    assigned_to?: StringNullableWithAggregatesFilter<"phase2_box_work"> | string | null
    status?: StringWithAggregatesFilter<"phase2_box_work"> | string
  }

  export type phase2_linesWhereInput = {
    AND?: phase2_linesWhereInput | phase2_linesWhereInput[]
    OR?: phase2_linesWhereInput[]
    NOT?: phase2_linesWhereInput | phase2_linesWhereInput[]
    report_id?: BigIntFilter<"phase2_lines"> | bigint | number
    room_id?: BigIntFilter<"phase2_lines"> | bigint | number
    box_id?: StringFilter<"phase2_lines"> | string
    sku?: StringFilter<"phase2_lines"> | string
    qty?: IntFilter<"phase2_lines"> | number
    id?: BigIntFilter<"phase2_lines"> | bigint | number
    stock_reports?: XOR<Stock_reportsScalarRelationFilter, stock_reportsWhereInput>
    stock_rooms?: XOR<Stock_roomsScalarRelationFilter, stock_roomsWhereInput>
  }

  export type phase2_linesOrderByWithRelationInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    box_id?: SortOrder
    sku?: SortOrder
    qty?: SortOrder
    id?: SortOrder
    stock_reports?: stock_reportsOrderByWithRelationInput
    stock_rooms?: stock_roomsOrderByWithRelationInput
  }

  export type phase2_linesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: phase2_linesWhereInput | phase2_linesWhereInput[]
    OR?: phase2_linesWhereInput[]
    NOT?: phase2_linesWhereInput | phase2_linesWhereInput[]
    report_id?: BigIntFilter<"phase2_lines"> | bigint | number
    room_id?: BigIntFilter<"phase2_lines"> | bigint | number
    box_id?: StringFilter<"phase2_lines"> | string
    sku?: StringFilter<"phase2_lines"> | string
    qty?: IntFilter<"phase2_lines"> | number
    stock_reports?: XOR<Stock_reportsScalarRelationFilter, stock_reportsWhereInput>
    stock_rooms?: XOR<Stock_roomsScalarRelationFilter, stock_roomsWhereInput>
  }, "id">

  export type phase2_linesOrderByWithAggregationInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    box_id?: SortOrder
    sku?: SortOrder
    qty?: SortOrder
    id?: SortOrder
    _count?: phase2_linesCountOrderByAggregateInput
    _avg?: phase2_linesAvgOrderByAggregateInput
    _max?: phase2_linesMaxOrderByAggregateInput
    _min?: phase2_linesMinOrderByAggregateInput
    _sum?: phase2_linesSumOrderByAggregateInput
  }

  export type phase2_linesScalarWhereWithAggregatesInput = {
    AND?: phase2_linesScalarWhereWithAggregatesInput | phase2_linesScalarWhereWithAggregatesInput[]
    OR?: phase2_linesScalarWhereWithAggregatesInput[]
    NOT?: phase2_linesScalarWhereWithAggregatesInput | phase2_linesScalarWhereWithAggregatesInput[]
    report_id?: BigIntWithAggregatesFilter<"phase2_lines"> | bigint | number
    room_id?: BigIntWithAggregatesFilter<"phase2_lines"> | bigint | number
    box_id?: StringWithAggregatesFilter<"phase2_lines"> | string
    sku?: StringWithAggregatesFilter<"phase2_lines"> | string
    qty?: IntWithAggregatesFilter<"phase2_lines"> | number
    id?: BigIntWithAggregatesFilter<"phase2_lines"> | bigint | number
  }

  export type report_roomsWhereInput = {
    AND?: report_roomsWhereInput | report_roomsWhereInput[]
    OR?: report_roomsWhereInput[]
    NOT?: report_roomsWhereInput | report_roomsWhereInput[]
    report_id?: BigIntFilter<"report_rooms"> | bigint | number
    room_id?: BigIntFilter<"report_rooms"> | bigint | number
    phase1_owner?: StringNullableFilter<"report_rooms"> | string | null
    phase1_status?: StringFilter<"report_rooms"> | string
    phase2_status?: StringFilter<"report_rooms"> | string
    stock_reports?: XOR<Stock_reportsScalarRelationFilter, stock_reportsWhereInput>
    stock_rooms?: XOR<Stock_roomsScalarRelationFilter, stock_roomsWhereInput>
  }

  export type report_roomsOrderByWithRelationInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    phase1_owner?: SortOrderInput | SortOrder
    phase1_status?: SortOrder
    phase2_status?: SortOrder
    stock_reports?: stock_reportsOrderByWithRelationInput
    stock_rooms?: stock_roomsOrderByWithRelationInput
  }

  export type report_roomsWhereUniqueInput = Prisma.AtLeast<{
    report_id_room_id?: report_roomsReport_idRoom_idCompoundUniqueInput
    AND?: report_roomsWhereInput | report_roomsWhereInput[]
    OR?: report_roomsWhereInput[]
    NOT?: report_roomsWhereInput | report_roomsWhereInput[]
    report_id?: BigIntFilter<"report_rooms"> | bigint | number
    room_id?: BigIntFilter<"report_rooms"> | bigint | number
    phase1_owner?: StringNullableFilter<"report_rooms"> | string | null
    phase1_status?: StringFilter<"report_rooms"> | string
    phase2_status?: StringFilter<"report_rooms"> | string
    stock_reports?: XOR<Stock_reportsScalarRelationFilter, stock_reportsWhereInput>
    stock_rooms?: XOR<Stock_roomsScalarRelationFilter, stock_roomsWhereInput>
  }, "report_id_room_id">

  export type report_roomsOrderByWithAggregationInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    phase1_owner?: SortOrderInput | SortOrder
    phase1_status?: SortOrder
    phase2_status?: SortOrder
    _count?: report_roomsCountOrderByAggregateInput
    _avg?: report_roomsAvgOrderByAggregateInput
    _max?: report_roomsMaxOrderByAggregateInput
    _min?: report_roomsMinOrderByAggregateInput
    _sum?: report_roomsSumOrderByAggregateInput
  }

  export type report_roomsScalarWhereWithAggregatesInput = {
    AND?: report_roomsScalarWhereWithAggregatesInput | report_roomsScalarWhereWithAggregatesInput[]
    OR?: report_roomsScalarWhereWithAggregatesInput[]
    NOT?: report_roomsScalarWhereWithAggregatesInput | report_roomsScalarWhereWithAggregatesInput[]
    report_id?: BigIntWithAggregatesFilter<"report_rooms"> | bigint | number
    room_id?: BigIntWithAggregatesFilter<"report_rooms"> | bigint | number
    phase1_owner?: StringNullableWithAggregatesFilter<"report_rooms"> | string | null
    phase1_status?: StringWithAggregatesFilter<"report_rooms"> | string
    phase2_status?: StringWithAggregatesFilter<"report_rooms"> | string
  }

  export type stock_reportsWhereInput = {
    AND?: stock_reportsWhereInput | stock_reportsWhereInput[]
    OR?: stock_reportsWhereInput[]
    NOT?: stock_reportsWhereInput | stock_reportsWhereInput[]
    id?: BigIntFilter<"stock_reports"> | bigint | number
    name?: StringFilter<"stock_reports"> | string
    status?: StringFilter<"stock_reports"> | string
    created_by?: StringFilter<"stock_reports"> | string
    created_at?: DateTimeFilter<"stock_reports"> | Date | string
    updated_at?: DateTimeFilter<"stock_reports"> | Date | string
    phase1_boxes?: Phase1_boxesListRelationFilter
    phase2_box_work?: Phase2_box_workListRelationFilter
    phase2_lines?: Phase2_linesListRelationFilter
    report_rooms?: Report_roomsListRelationFilter
  }

  export type stock_reportsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    phase1_boxes?: phase1_boxesOrderByRelationAggregateInput
    phase2_box_work?: phase2_box_workOrderByRelationAggregateInput
    phase2_lines?: phase2_linesOrderByRelationAggregateInput
    report_rooms?: report_roomsOrderByRelationAggregateInput
  }

  export type stock_reportsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: stock_reportsWhereInput | stock_reportsWhereInput[]
    OR?: stock_reportsWhereInput[]
    NOT?: stock_reportsWhereInput | stock_reportsWhereInput[]
    name?: StringFilter<"stock_reports"> | string
    status?: StringFilter<"stock_reports"> | string
    created_by?: StringFilter<"stock_reports"> | string
    created_at?: DateTimeFilter<"stock_reports"> | Date | string
    updated_at?: DateTimeFilter<"stock_reports"> | Date | string
    phase1_boxes?: Phase1_boxesListRelationFilter
    phase2_box_work?: Phase2_box_workListRelationFilter
    phase2_lines?: Phase2_linesListRelationFilter
    report_rooms?: Report_roomsListRelationFilter
  }, "id">

  export type stock_reportsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: stock_reportsCountOrderByAggregateInput
    _avg?: stock_reportsAvgOrderByAggregateInput
    _max?: stock_reportsMaxOrderByAggregateInput
    _min?: stock_reportsMinOrderByAggregateInput
    _sum?: stock_reportsSumOrderByAggregateInput
  }

  export type stock_reportsScalarWhereWithAggregatesInput = {
    AND?: stock_reportsScalarWhereWithAggregatesInput | stock_reportsScalarWhereWithAggregatesInput[]
    OR?: stock_reportsScalarWhereWithAggregatesInput[]
    NOT?: stock_reportsScalarWhereWithAggregatesInput | stock_reportsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"stock_reports"> | bigint | number
    name?: StringWithAggregatesFilter<"stock_reports"> | string
    status?: StringWithAggregatesFilter<"stock_reports"> | string
    created_by?: StringWithAggregatesFilter<"stock_reports"> | string
    created_at?: DateTimeWithAggregatesFilter<"stock_reports"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"stock_reports"> | Date | string
  }

  export type stock_roomsWhereInput = {
    AND?: stock_roomsWhereInput | stock_roomsWhereInput[]
    OR?: stock_roomsWhereInput[]
    NOT?: stock_roomsWhereInput | stock_roomsWhereInput[]
    id?: BigIntFilter<"stock_rooms"> | bigint | number
    name?: StringFilter<"stock_rooms"> | string
    phase1_boxes?: Phase1_boxesListRelationFilter
    phase2_box_work?: Phase2_box_workListRelationFilter
    phase2_lines?: Phase2_linesListRelationFilter
    report_rooms?: Report_roomsListRelationFilter
  }

  export type stock_roomsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phase1_boxes?: phase1_boxesOrderByRelationAggregateInput
    phase2_box_work?: phase2_box_workOrderByRelationAggregateInput
    phase2_lines?: phase2_linesOrderByRelationAggregateInput
    report_rooms?: report_roomsOrderByRelationAggregateInput
  }

  export type stock_roomsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    name?: string
    AND?: stock_roomsWhereInput | stock_roomsWhereInput[]
    OR?: stock_roomsWhereInput[]
    NOT?: stock_roomsWhereInput | stock_roomsWhereInput[]
    phase1_boxes?: Phase1_boxesListRelationFilter
    phase2_box_work?: Phase2_box_workListRelationFilter
    phase2_lines?: Phase2_linesListRelationFilter
    report_rooms?: Report_roomsListRelationFilter
  }, "id" | "name">

  export type stock_roomsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: stock_roomsCountOrderByAggregateInput
    _avg?: stock_roomsAvgOrderByAggregateInput
    _max?: stock_roomsMaxOrderByAggregateInput
    _min?: stock_roomsMinOrderByAggregateInput
    _sum?: stock_roomsSumOrderByAggregateInput
  }

  export type stock_roomsScalarWhereWithAggregatesInput = {
    AND?: stock_roomsScalarWhereWithAggregatesInput | stock_roomsScalarWhereWithAggregatesInput[]
    OR?: stock_roomsScalarWhereWithAggregatesInput[]
    NOT?: stock_roomsScalarWhereWithAggregatesInput | stock_roomsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"stock_rooms"> | bigint | number
    name?: StringWithAggregatesFilter<"stock_rooms"> | string
  }

  export type phase1_boxesCreateInput = {
    box_id: string
    scan_count?: number
    status: string
    stock_reports: stock_reportsCreateNestedOneWithoutPhase1_boxesInput
    stock_rooms: stock_roomsCreateNestedOneWithoutPhase1_boxesInput
  }

  export type phase1_boxesUncheckedCreateInput = {
    report_id: bigint | number
    room_id: bigint | number
    box_id: string
    scan_count?: number
    status: string
  }

  export type phase1_boxesUpdateInput = {
    box_id?: StringFieldUpdateOperationsInput | string
    scan_count?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stock_reports?: stock_reportsUpdateOneRequiredWithoutPhase1_boxesNestedInput
    stock_rooms?: stock_roomsUpdateOneRequiredWithoutPhase1_boxesNestedInput
  }

  export type phase1_boxesUncheckedUpdateInput = {
    report_id?: BigIntFieldUpdateOperationsInput | bigint | number
    room_id?: BigIntFieldUpdateOperationsInput | bigint | number
    box_id?: StringFieldUpdateOperationsInput | string
    scan_count?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type phase1_boxesCreateManyInput = {
    report_id: bigint | number
    room_id: bigint | number
    box_id: string
    scan_count?: number
    status: string
  }

  export type phase1_boxesUpdateManyMutationInput = {
    box_id?: StringFieldUpdateOperationsInput | string
    scan_count?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type phase1_boxesUncheckedUpdateManyInput = {
    report_id?: BigIntFieldUpdateOperationsInput | bigint | number
    room_id?: BigIntFieldUpdateOperationsInput | bigint | number
    box_id?: StringFieldUpdateOperationsInput | string
    scan_count?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type phase2_box_workCreateInput = {
    box_id: string
    assigned_to?: string | null
    status?: string
    stock_reports: stock_reportsCreateNestedOneWithoutPhase2_box_workInput
    stock_rooms: stock_roomsCreateNestedOneWithoutPhase2_box_workInput
  }

  export type phase2_box_workUncheckedCreateInput = {
    report_id: bigint | number
    room_id: bigint | number
    box_id: string
    assigned_to?: string | null
    status?: string
  }

  export type phase2_box_workUpdateInput = {
    box_id?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    stock_reports?: stock_reportsUpdateOneRequiredWithoutPhase2_box_workNestedInput
    stock_rooms?: stock_roomsUpdateOneRequiredWithoutPhase2_box_workNestedInput
  }

  export type phase2_box_workUncheckedUpdateInput = {
    report_id?: BigIntFieldUpdateOperationsInput | bigint | number
    room_id?: BigIntFieldUpdateOperationsInput | bigint | number
    box_id?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type phase2_box_workCreateManyInput = {
    report_id: bigint | number
    room_id: bigint | number
    box_id: string
    assigned_to?: string | null
    status?: string
  }

  export type phase2_box_workUpdateManyMutationInput = {
    box_id?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type phase2_box_workUncheckedUpdateManyInput = {
    report_id?: BigIntFieldUpdateOperationsInput | bigint | number
    room_id?: BigIntFieldUpdateOperationsInput | bigint | number
    box_id?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type phase2_linesCreateInput = {
    box_id: string
    sku: string
    qty: number
    id?: bigint | number
    stock_reports: stock_reportsCreateNestedOneWithoutPhase2_linesInput
    stock_rooms: stock_roomsCreateNestedOneWithoutPhase2_linesInput
  }

  export type phase2_linesUncheckedCreateInput = {
    report_id: bigint | number
    room_id: bigint | number
    box_id: string
    sku: string
    qty: number
    id?: bigint | number
  }

  export type phase2_linesUpdateInput = {
    box_id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    stock_reports?: stock_reportsUpdateOneRequiredWithoutPhase2_linesNestedInput
    stock_rooms?: stock_roomsUpdateOneRequiredWithoutPhase2_linesNestedInput
  }

  export type phase2_linesUncheckedUpdateInput = {
    report_id?: BigIntFieldUpdateOperationsInput | bigint | number
    room_id?: BigIntFieldUpdateOperationsInput | bigint | number
    box_id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type phase2_linesCreateManyInput = {
    report_id: bigint | number
    room_id: bigint | number
    box_id: string
    sku: string
    qty: number
    id?: bigint | number
  }

  export type phase2_linesUpdateManyMutationInput = {
    box_id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type phase2_linesUncheckedUpdateManyInput = {
    report_id?: BigIntFieldUpdateOperationsInput | bigint | number
    room_id?: BigIntFieldUpdateOperationsInput | bigint | number
    box_id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type report_roomsCreateInput = {
    phase1_owner?: string | null
    phase1_status?: string
    phase2_status?: string
    stock_reports: stock_reportsCreateNestedOneWithoutReport_roomsInput
    stock_rooms: stock_roomsCreateNestedOneWithoutReport_roomsInput
  }

  export type report_roomsUncheckedCreateInput = {
    report_id: bigint | number
    room_id: bigint | number
    phase1_owner?: string | null
    phase1_status?: string
    phase2_status?: string
  }

  export type report_roomsUpdateInput = {
    phase1_owner?: NullableStringFieldUpdateOperationsInput | string | null
    phase1_status?: StringFieldUpdateOperationsInput | string
    phase2_status?: StringFieldUpdateOperationsInput | string
    stock_reports?: stock_reportsUpdateOneRequiredWithoutReport_roomsNestedInput
    stock_rooms?: stock_roomsUpdateOneRequiredWithoutReport_roomsNestedInput
  }

  export type report_roomsUncheckedUpdateInput = {
    report_id?: BigIntFieldUpdateOperationsInput | bigint | number
    room_id?: BigIntFieldUpdateOperationsInput | bigint | number
    phase1_owner?: NullableStringFieldUpdateOperationsInput | string | null
    phase1_status?: StringFieldUpdateOperationsInput | string
    phase2_status?: StringFieldUpdateOperationsInput | string
  }

  export type report_roomsCreateManyInput = {
    report_id: bigint | number
    room_id: bigint | number
    phase1_owner?: string | null
    phase1_status?: string
    phase2_status?: string
  }

  export type report_roomsUpdateManyMutationInput = {
    phase1_owner?: NullableStringFieldUpdateOperationsInput | string | null
    phase1_status?: StringFieldUpdateOperationsInput | string
    phase2_status?: StringFieldUpdateOperationsInput | string
  }

  export type report_roomsUncheckedUpdateManyInput = {
    report_id?: BigIntFieldUpdateOperationsInput | bigint | number
    room_id?: BigIntFieldUpdateOperationsInput | bigint | number
    phase1_owner?: NullableStringFieldUpdateOperationsInput | string | null
    phase1_status?: StringFieldUpdateOperationsInput | string
    phase2_status?: StringFieldUpdateOperationsInput | string
  }

  export type stock_reportsCreateInput = {
    id?: bigint | number
    name: string
    status?: string
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    phase1_boxes?: phase1_boxesCreateNestedManyWithoutStock_reportsInput
    phase2_box_work?: phase2_box_workCreateNestedManyWithoutStock_reportsInput
    phase2_lines?: phase2_linesCreateNestedManyWithoutStock_reportsInput
    report_rooms?: report_roomsCreateNestedManyWithoutStock_reportsInput
  }

  export type stock_reportsUncheckedCreateInput = {
    id?: bigint | number
    name: string
    status?: string
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    phase1_boxes?: phase1_boxesUncheckedCreateNestedManyWithoutStock_reportsInput
    phase2_box_work?: phase2_box_workUncheckedCreateNestedManyWithoutStock_reportsInput
    phase2_lines?: phase2_linesUncheckedCreateNestedManyWithoutStock_reportsInput
    report_rooms?: report_roomsUncheckedCreateNestedManyWithoutStock_reportsInput
  }

  export type stock_reportsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    phase1_boxes?: phase1_boxesUpdateManyWithoutStock_reportsNestedInput
    phase2_box_work?: phase2_box_workUpdateManyWithoutStock_reportsNestedInput
    phase2_lines?: phase2_linesUpdateManyWithoutStock_reportsNestedInput
    report_rooms?: report_roomsUpdateManyWithoutStock_reportsNestedInput
  }

  export type stock_reportsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    phase1_boxes?: phase1_boxesUncheckedUpdateManyWithoutStock_reportsNestedInput
    phase2_box_work?: phase2_box_workUncheckedUpdateManyWithoutStock_reportsNestedInput
    phase2_lines?: phase2_linesUncheckedUpdateManyWithoutStock_reportsNestedInput
    report_rooms?: report_roomsUncheckedUpdateManyWithoutStock_reportsNestedInput
  }

  export type stock_reportsCreateManyInput = {
    id?: bigint | number
    name: string
    status?: string
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type stock_reportsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stock_reportsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stock_roomsCreateInput = {
    id?: bigint | number
    name: string
    phase1_boxes?: phase1_boxesCreateNestedManyWithoutStock_roomsInput
    phase2_box_work?: phase2_box_workCreateNestedManyWithoutStock_roomsInput
    phase2_lines?: phase2_linesCreateNestedManyWithoutStock_roomsInput
    report_rooms?: report_roomsCreateNestedManyWithoutStock_roomsInput
  }

  export type stock_roomsUncheckedCreateInput = {
    id?: bigint | number
    name: string
    phase1_boxes?: phase1_boxesUncheckedCreateNestedManyWithoutStock_roomsInput
    phase2_box_work?: phase2_box_workUncheckedCreateNestedManyWithoutStock_roomsInput
    phase2_lines?: phase2_linesUncheckedCreateNestedManyWithoutStock_roomsInput
    report_rooms?: report_roomsUncheckedCreateNestedManyWithoutStock_roomsInput
  }

  export type stock_roomsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    phase1_boxes?: phase1_boxesUpdateManyWithoutStock_roomsNestedInput
    phase2_box_work?: phase2_box_workUpdateManyWithoutStock_roomsNestedInput
    phase2_lines?: phase2_linesUpdateManyWithoutStock_roomsNestedInput
    report_rooms?: report_roomsUpdateManyWithoutStock_roomsNestedInput
  }

  export type stock_roomsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    phase1_boxes?: phase1_boxesUncheckedUpdateManyWithoutStock_roomsNestedInput
    phase2_box_work?: phase2_box_workUncheckedUpdateManyWithoutStock_roomsNestedInput
    phase2_lines?: phase2_linesUncheckedUpdateManyWithoutStock_roomsNestedInput
    report_rooms?: report_roomsUncheckedUpdateManyWithoutStock_roomsNestedInput
  }

  export type stock_roomsCreateManyInput = {
    id?: bigint | number
    name: string
  }

  export type stock_roomsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type stock_roomsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
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

  export type Stock_reportsScalarRelationFilter = {
    is?: stock_reportsWhereInput
    isNot?: stock_reportsWhereInput
  }

  export type Stock_roomsScalarRelationFilter = {
    is?: stock_roomsWhereInput
    isNot?: stock_roomsWhereInput
  }

  export type phase1_boxesReport_idRoom_idBox_idCompoundUniqueInput = {
    report_id: bigint | number
    room_id: bigint | number
    box_id: string
  }

  export type phase1_boxesCountOrderByAggregateInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    box_id?: SortOrder
    scan_count?: SortOrder
    status?: SortOrder
  }

  export type phase1_boxesAvgOrderByAggregateInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    scan_count?: SortOrder
  }

  export type phase1_boxesMaxOrderByAggregateInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    box_id?: SortOrder
    scan_count?: SortOrder
    status?: SortOrder
  }

  export type phase1_boxesMinOrderByAggregateInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    box_id?: SortOrder
    scan_count?: SortOrder
    status?: SortOrder
  }

  export type phase1_boxesSumOrderByAggregateInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    scan_count?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type phase2_box_workReport_idBox_idCompoundUniqueInput = {
    report_id: bigint | number
    box_id: string
  }

  export type phase2_box_workCountOrderByAggregateInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    box_id?: SortOrder
    assigned_to?: SortOrder
    status?: SortOrder
  }

  export type phase2_box_workAvgOrderByAggregateInput = {
    report_id?: SortOrder
    room_id?: SortOrder
  }

  export type phase2_box_workMaxOrderByAggregateInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    box_id?: SortOrder
    assigned_to?: SortOrder
    status?: SortOrder
  }

  export type phase2_box_workMinOrderByAggregateInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    box_id?: SortOrder
    assigned_to?: SortOrder
    status?: SortOrder
  }

  export type phase2_box_workSumOrderByAggregateInput = {
    report_id?: SortOrder
    room_id?: SortOrder
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

  export type phase2_linesCountOrderByAggregateInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    box_id?: SortOrder
    sku?: SortOrder
    qty?: SortOrder
    id?: SortOrder
  }

  export type phase2_linesAvgOrderByAggregateInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    qty?: SortOrder
    id?: SortOrder
  }

  export type phase2_linesMaxOrderByAggregateInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    box_id?: SortOrder
    sku?: SortOrder
    qty?: SortOrder
    id?: SortOrder
  }

  export type phase2_linesMinOrderByAggregateInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    box_id?: SortOrder
    sku?: SortOrder
    qty?: SortOrder
    id?: SortOrder
  }

  export type phase2_linesSumOrderByAggregateInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    qty?: SortOrder
    id?: SortOrder
  }

  export type report_roomsReport_idRoom_idCompoundUniqueInput = {
    report_id: bigint | number
    room_id: bigint | number
  }

  export type report_roomsCountOrderByAggregateInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    phase1_owner?: SortOrder
    phase1_status?: SortOrder
    phase2_status?: SortOrder
  }

  export type report_roomsAvgOrderByAggregateInput = {
    report_id?: SortOrder
    room_id?: SortOrder
  }

  export type report_roomsMaxOrderByAggregateInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    phase1_owner?: SortOrder
    phase1_status?: SortOrder
    phase2_status?: SortOrder
  }

  export type report_roomsMinOrderByAggregateInput = {
    report_id?: SortOrder
    room_id?: SortOrder
    phase1_owner?: SortOrder
    phase1_status?: SortOrder
    phase2_status?: SortOrder
  }

  export type report_roomsSumOrderByAggregateInput = {
    report_id?: SortOrder
    room_id?: SortOrder
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

  export type Phase1_boxesListRelationFilter = {
    every?: phase1_boxesWhereInput
    some?: phase1_boxesWhereInput
    none?: phase1_boxesWhereInput
  }

  export type Phase2_box_workListRelationFilter = {
    every?: phase2_box_workWhereInput
    some?: phase2_box_workWhereInput
    none?: phase2_box_workWhereInput
  }

  export type Phase2_linesListRelationFilter = {
    every?: phase2_linesWhereInput
    some?: phase2_linesWhereInput
    none?: phase2_linesWhereInput
  }

  export type Report_roomsListRelationFilter = {
    every?: report_roomsWhereInput
    some?: report_roomsWhereInput
    none?: report_roomsWhereInput
  }

  export type phase1_boxesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type phase2_box_workOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type phase2_linesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type report_roomsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type stock_reportsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type stock_reportsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type stock_reportsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type stock_reportsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type stock_reportsSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type stock_roomsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type stock_roomsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type stock_roomsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type stock_roomsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type stock_roomsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type stock_reportsCreateNestedOneWithoutPhase1_boxesInput = {
    create?: XOR<stock_reportsCreateWithoutPhase1_boxesInput, stock_reportsUncheckedCreateWithoutPhase1_boxesInput>
    connectOrCreate?: stock_reportsCreateOrConnectWithoutPhase1_boxesInput
    connect?: stock_reportsWhereUniqueInput
  }

  export type stock_roomsCreateNestedOneWithoutPhase1_boxesInput = {
    create?: XOR<stock_roomsCreateWithoutPhase1_boxesInput, stock_roomsUncheckedCreateWithoutPhase1_boxesInput>
    connectOrCreate?: stock_roomsCreateOrConnectWithoutPhase1_boxesInput
    connect?: stock_roomsWhereUniqueInput
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

  export type stock_reportsUpdateOneRequiredWithoutPhase1_boxesNestedInput = {
    create?: XOR<stock_reportsCreateWithoutPhase1_boxesInput, stock_reportsUncheckedCreateWithoutPhase1_boxesInput>
    connectOrCreate?: stock_reportsCreateOrConnectWithoutPhase1_boxesInput
    upsert?: stock_reportsUpsertWithoutPhase1_boxesInput
    connect?: stock_reportsWhereUniqueInput
    update?: XOR<XOR<stock_reportsUpdateToOneWithWhereWithoutPhase1_boxesInput, stock_reportsUpdateWithoutPhase1_boxesInput>, stock_reportsUncheckedUpdateWithoutPhase1_boxesInput>
  }

  export type stock_roomsUpdateOneRequiredWithoutPhase1_boxesNestedInput = {
    create?: XOR<stock_roomsCreateWithoutPhase1_boxesInput, stock_roomsUncheckedCreateWithoutPhase1_boxesInput>
    connectOrCreate?: stock_roomsCreateOrConnectWithoutPhase1_boxesInput
    upsert?: stock_roomsUpsertWithoutPhase1_boxesInput
    connect?: stock_roomsWhereUniqueInput
    update?: XOR<XOR<stock_roomsUpdateToOneWithWhereWithoutPhase1_boxesInput, stock_roomsUpdateWithoutPhase1_boxesInput>, stock_roomsUncheckedUpdateWithoutPhase1_boxesInput>
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type stock_reportsCreateNestedOneWithoutPhase2_box_workInput = {
    create?: XOR<stock_reportsCreateWithoutPhase2_box_workInput, stock_reportsUncheckedCreateWithoutPhase2_box_workInput>
    connectOrCreate?: stock_reportsCreateOrConnectWithoutPhase2_box_workInput
    connect?: stock_reportsWhereUniqueInput
  }

  export type stock_roomsCreateNestedOneWithoutPhase2_box_workInput = {
    create?: XOR<stock_roomsCreateWithoutPhase2_box_workInput, stock_roomsUncheckedCreateWithoutPhase2_box_workInput>
    connectOrCreate?: stock_roomsCreateOrConnectWithoutPhase2_box_workInput
    connect?: stock_roomsWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type stock_reportsUpdateOneRequiredWithoutPhase2_box_workNestedInput = {
    create?: XOR<stock_reportsCreateWithoutPhase2_box_workInput, stock_reportsUncheckedCreateWithoutPhase2_box_workInput>
    connectOrCreate?: stock_reportsCreateOrConnectWithoutPhase2_box_workInput
    upsert?: stock_reportsUpsertWithoutPhase2_box_workInput
    connect?: stock_reportsWhereUniqueInput
    update?: XOR<XOR<stock_reportsUpdateToOneWithWhereWithoutPhase2_box_workInput, stock_reportsUpdateWithoutPhase2_box_workInput>, stock_reportsUncheckedUpdateWithoutPhase2_box_workInput>
  }

  export type stock_roomsUpdateOneRequiredWithoutPhase2_box_workNestedInput = {
    create?: XOR<stock_roomsCreateWithoutPhase2_box_workInput, stock_roomsUncheckedCreateWithoutPhase2_box_workInput>
    connectOrCreate?: stock_roomsCreateOrConnectWithoutPhase2_box_workInput
    upsert?: stock_roomsUpsertWithoutPhase2_box_workInput
    connect?: stock_roomsWhereUniqueInput
    update?: XOR<XOR<stock_roomsUpdateToOneWithWhereWithoutPhase2_box_workInput, stock_roomsUpdateWithoutPhase2_box_workInput>, stock_roomsUncheckedUpdateWithoutPhase2_box_workInput>
  }

  export type stock_reportsCreateNestedOneWithoutPhase2_linesInput = {
    create?: XOR<stock_reportsCreateWithoutPhase2_linesInput, stock_reportsUncheckedCreateWithoutPhase2_linesInput>
    connectOrCreate?: stock_reportsCreateOrConnectWithoutPhase2_linesInput
    connect?: stock_reportsWhereUniqueInput
  }

  export type stock_roomsCreateNestedOneWithoutPhase2_linesInput = {
    create?: XOR<stock_roomsCreateWithoutPhase2_linesInput, stock_roomsUncheckedCreateWithoutPhase2_linesInput>
    connectOrCreate?: stock_roomsCreateOrConnectWithoutPhase2_linesInput
    connect?: stock_roomsWhereUniqueInput
  }

  export type stock_reportsUpdateOneRequiredWithoutPhase2_linesNestedInput = {
    create?: XOR<stock_reportsCreateWithoutPhase2_linesInput, stock_reportsUncheckedCreateWithoutPhase2_linesInput>
    connectOrCreate?: stock_reportsCreateOrConnectWithoutPhase2_linesInput
    upsert?: stock_reportsUpsertWithoutPhase2_linesInput
    connect?: stock_reportsWhereUniqueInput
    update?: XOR<XOR<stock_reportsUpdateToOneWithWhereWithoutPhase2_linesInput, stock_reportsUpdateWithoutPhase2_linesInput>, stock_reportsUncheckedUpdateWithoutPhase2_linesInput>
  }

  export type stock_roomsUpdateOneRequiredWithoutPhase2_linesNestedInput = {
    create?: XOR<stock_roomsCreateWithoutPhase2_linesInput, stock_roomsUncheckedCreateWithoutPhase2_linesInput>
    connectOrCreate?: stock_roomsCreateOrConnectWithoutPhase2_linesInput
    upsert?: stock_roomsUpsertWithoutPhase2_linesInput
    connect?: stock_roomsWhereUniqueInput
    update?: XOR<XOR<stock_roomsUpdateToOneWithWhereWithoutPhase2_linesInput, stock_roomsUpdateWithoutPhase2_linesInput>, stock_roomsUncheckedUpdateWithoutPhase2_linesInput>
  }

  export type stock_reportsCreateNestedOneWithoutReport_roomsInput = {
    create?: XOR<stock_reportsCreateWithoutReport_roomsInput, stock_reportsUncheckedCreateWithoutReport_roomsInput>
    connectOrCreate?: stock_reportsCreateOrConnectWithoutReport_roomsInput
    connect?: stock_reportsWhereUniqueInput
  }

  export type stock_roomsCreateNestedOneWithoutReport_roomsInput = {
    create?: XOR<stock_roomsCreateWithoutReport_roomsInput, stock_roomsUncheckedCreateWithoutReport_roomsInput>
    connectOrCreate?: stock_roomsCreateOrConnectWithoutReport_roomsInput
    connect?: stock_roomsWhereUniqueInput
  }

  export type stock_reportsUpdateOneRequiredWithoutReport_roomsNestedInput = {
    create?: XOR<stock_reportsCreateWithoutReport_roomsInput, stock_reportsUncheckedCreateWithoutReport_roomsInput>
    connectOrCreate?: stock_reportsCreateOrConnectWithoutReport_roomsInput
    upsert?: stock_reportsUpsertWithoutReport_roomsInput
    connect?: stock_reportsWhereUniqueInput
    update?: XOR<XOR<stock_reportsUpdateToOneWithWhereWithoutReport_roomsInput, stock_reportsUpdateWithoutReport_roomsInput>, stock_reportsUncheckedUpdateWithoutReport_roomsInput>
  }

  export type stock_roomsUpdateOneRequiredWithoutReport_roomsNestedInput = {
    create?: XOR<stock_roomsCreateWithoutReport_roomsInput, stock_roomsUncheckedCreateWithoutReport_roomsInput>
    connectOrCreate?: stock_roomsCreateOrConnectWithoutReport_roomsInput
    upsert?: stock_roomsUpsertWithoutReport_roomsInput
    connect?: stock_roomsWhereUniqueInput
    update?: XOR<XOR<stock_roomsUpdateToOneWithWhereWithoutReport_roomsInput, stock_roomsUpdateWithoutReport_roomsInput>, stock_roomsUncheckedUpdateWithoutReport_roomsInput>
  }

  export type phase1_boxesCreateNestedManyWithoutStock_reportsInput = {
    create?: XOR<phase1_boxesCreateWithoutStock_reportsInput, phase1_boxesUncheckedCreateWithoutStock_reportsInput> | phase1_boxesCreateWithoutStock_reportsInput[] | phase1_boxesUncheckedCreateWithoutStock_reportsInput[]
    connectOrCreate?: phase1_boxesCreateOrConnectWithoutStock_reportsInput | phase1_boxesCreateOrConnectWithoutStock_reportsInput[]
    createMany?: phase1_boxesCreateManyStock_reportsInputEnvelope
    connect?: phase1_boxesWhereUniqueInput | phase1_boxesWhereUniqueInput[]
  }

  export type phase2_box_workCreateNestedManyWithoutStock_reportsInput = {
    create?: XOR<phase2_box_workCreateWithoutStock_reportsInput, phase2_box_workUncheckedCreateWithoutStock_reportsInput> | phase2_box_workCreateWithoutStock_reportsInput[] | phase2_box_workUncheckedCreateWithoutStock_reportsInput[]
    connectOrCreate?: phase2_box_workCreateOrConnectWithoutStock_reportsInput | phase2_box_workCreateOrConnectWithoutStock_reportsInput[]
    createMany?: phase2_box_workCreateManyStock_reportsInputEnvelope
    connect?: phase2_box_workWhereUniqueInput | phase2_box_workWhereUniqueInput[]
  }

  export type phase2_linesCreateNestedManyWithoutStock_reportsInput = {
    create?: XOR<phase2_linesCreateWithoutStock_reportsInput, phase2_linesUncheckedCreateWithoutStock_reportsInput> | phase2_linesCreateWithoutStock_reportsInput[] | phase2_linesUncheckedCreateWithoutStock_reportsInput[]
    connectOrCreate?: phase2_linesCreateOrConnectWithoutStock_reportsInput | phase2_linesCreateOrConnectWithoutStock_reportsInput[]
    createMany?: phase2_linesCreateManyStock_reportsInputEnvelope
    connect?: phase2_linesWhereUniqueInput | phase2_linesWhereUniqueInput[]
  }

  export type report_roomsCreateNestedManyWithoutStock_reportsInput = {
    create?: XOR<report_roomsCreateWithoutStock_reportsInput, report_roomsUncheckedCreateWithoutStock_reportsInput> | report_roomsCreateWithoutStock_reportsInput[] | report_roomsUncheckedCreateWithoutStock_reportsInput[]
    connectOrCreate?: report_roomsCreateOrConnectWithoutStock_reportsInput | report_roomsCreateOrConnectWithoutStock_reportsInput[]
    createMany?: report_roomsCreateManyStock_reportsInputEnvelope
    connect?: report_roomsWhereUniqueInput | report_roomsWhereUniqueInput[]
  }

  export type phase1_boxesUncheckedCreateNestedManyWithoutStock_reportsInput = {
    create?: XOR<phase1_boxesCreateWithoutStock_reportsInput, phase1_boxesUncheckedCreateWithoutStock_reportsInput> | phase1_boxesCreateWithoutStock_reportsInput[] | phase1_boxesUncheckedCreateWithoutStock_reportsInput[]
    connectOrCreate?: phase1_boxesCreateOrConnectWithoutStock_reportsInput | phase1_boxesCreateOrConnectWithoutStock_reportsInput[]
    createMany?: phase1_boxesCreateManyStock_reportsInputEnvelope
    connect?: phase1_boxesWhereUniqueInput | phase1_boxesWhereUniqueInput[]
  }

  export type phase2_box_workUncheckedCreateNestedManyWithoutStock_reportsInput = {
    create?: XOR<phase2_box_workCreateWithoutStock_reportsInput, phase2_box_workUncheckedCreateWithoutStock_reportsInput> | phase2_box_workCreateWithoutStock_reportsInput[] | phase2_box_workUncheckedCreateWithoutStock_reportsInput[]
    connectOrCreate?: phase2_box_workCreateOrConnectWithoutStock_reportsInput | phase2_box_workCreateOrConnectWithoutStock_reportsInput[]
    createMany?: phase2_box_workCreateManyStock_reportsInputEnvelope
    connect?: phase2_box_workWhereUniqueInput | phase2_box_workWhereUniqueInput[]
  }

  export type phase2_linesUncheckedCreateNestedManyWithoutStock_reportsInput = {
    create?: XOR<phase2_linesCreateWithoutStock_reportsInput, phase2_linesUncheckedCreateWithoutStock_reportsInput> | phase2_linesCreateWithoutStock_reportsInput[] | phase2_linesUncheckedCreateWithoutStock_reportsInput[]
    connectOrCreate?: phase2_linesCreateOrConnectWithoutStock_reportsInput | phase2_linesCreateOrConnectWithoutStock_reportsInput[]
    createMany?: phase2_linesCreateManyStock_reportsInputEnvelope
    connect?: phase2_linesWhereUniqueInput | phase2_linesWhereUniqueInput[]
  }

  export type report_roomsUncheckedCreateNestedManyWithoutStock_reportsInput = {
    create?: XOR<report_roomsCreateWithoutStock_reportsInput, report_roomsUncheckedCreateWithoutStock_reportsInput> | report_roomsCreateWithoutStock_reportsInput[] | report_roomsUncheckedCreateWithoutStock_reportsInput[]
    connectOrCreate?: report_roomsCreateOrConnectWithoutStock_reportsInput | report_roomsCreateOrConnectWithoutStock_reportsInput[]
    createMany?: report_roomsCreateManyStock_reportsInputEnvelope
    connect?: report_roomsWhereUniqueInput | report_roomsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type phase1_boxesUpdateManyWithoutStock_reportsNestedInput = {
    create?: XOR<phase1_boxesCreateWithoutStock_reportsInput, phase1_boxesUncheckedCreateWithoutStock_reportsInput> | phase1_boxesCreateWithoutStock_reportsInput[] | phase1_boxesUncheckedCreateWithoutStock_reportsInput[]
    connectOrCreate?: phase1_boxesCreateOrConnectWithoutStock_reportsInput | phase1_boxesCreateOrConnectWithoutStock_reportsInput[]
    upsert?: phase1_boxesUpsertWithWhereUniqueWithoutStock_reportsInput | phase1_boxesUpsertWithWhereUniqueWithoutStock_reportsInput[]
    createMany?: phase1_boxesCreateManyStock_reportsInputEnvelope
    set?: phase1_boxesWhereUniqueInput | phase1_boxesWhereUniqueInput[]
    disconnect?: phase1_boxesWhereUniqueInput | phase1_boxesWhereUniqueInput[]
    delete?: phase1_boxesWhereUniqueInput | phase1_boxesWhereUniqueInput[]
    connect?: phase1_boxesWhereUniqueInput | phase1_boxesWhereUniqueInput[]
    update?: phase1_boxesUpdateWithWhereUniqueWithoutStock_reportsInput | phase1_boxesUpdateWithWhereUniqueWithoutStock_reportsInput[]
    updateMany?: phase1_boxesUpdateManyWithWhereWithoutStock_reportsInput | phase1_boxesUpdateManyWithWhereWithoutStock_reportsInput[]
    deleteMany?: phase1_boxesScalarWhereInput | phase1_boxesScalarWhereInput[]
  }

  export type phase2_box_workUpdateManyWithoutStock_reportsNestedInput = {
    create?: XOR<phase2_box_workCreateWithoutStock_reportsInput, phase2_box_workUncheckedCreateWithoutStock_reportsInput> | phase2_box_workCreateWithoutStock_reportsInput[] | phase2_box_workUncheckedCreateWithoutStock_reportsInput[]
    connectOrCreate?: phase2_box_workCreateOrConnectWithoutStock_reportsInput | phase2_box_workCreateOrConnectWithoutStock_reportsInput[]
    upsert?: phase2_box_workUpsertWithWhereUniqueWithoutStock_reportsInput | phase2_box_workUpsertWithWhereUniqueWithoutStock_reportsInput[]
    createMany?: phase2_box_workCreateManyStock_reportsInputEnvelope
    set?: phase2_box_workWhereUniqueInput | phase2_box_workWhereUniqueInput[]
    disconnect?: phase2_box_workWhereUniqueInput | phase2_box_workWhereUniqueInput[]
    delete?: phase2_box_workWhereUniqueInput | phase2_box_workWhereUniqueInput[]
    connect?: phase2_box_workWhereUniqueInput | phase2_box_workWhereUniqueInput[]
    update?: phase2_box_workUpdateWithWhereUniqueWithoutStock_reportsInput | phase2_box_workUpdateWithWhereUniqueWithoutStock_reportsInput[]
    updateMany?: phase2_box_workUpdateManyWithWhereWithoutStock_reportsInput | phase2_box_workUpdateManyWithWhereWithoutStock_reportsInput[]
    deleteMany?: phase2_box_workScalarWhereInput | phase2_box_workScalarWhereInput[]
  }

  export type phase2_linesUpdateManyWithoutStock_reportsNestedInput = {
    create?: XOR<phase2_linesCreateWithoutStock_reportsInput, phase2_linesUncheckedCreateWithoutStock_reportsInput> | phase2_linesCreateWithoutStock_reportsInput[] | phase2_linesUncheckedCreateWithoutStock_reportsInput[]
    connectOrCreate?: phase2_linesCreateOrConnectWithoutStock_reportsInput | phase2_linesCreateOrConnectWithoutStock_reportsInput[]
    upsert?: phase2_linesUpsertWithWhereUniqueWithoutStock_reportsInput | phase2_linesUpsertWithWhereUniqueWithoutStock_reportsInput[]
    createMany?: phase2_linesCreateManyStock_reportsInputEnvelope
    set?: phase2_linesWhereUniqueInput | phase2_linesWhereUniqueInput[]
    disconnect?: phase2_linesWhereUniqueInput | phase2_linesWhereUniqueInput[]
    delete?: phase2_linesWhereUniqueInput | phase2_linesWhereUniqueInput[]
    connect?: phase2_linesWhereUniqueInput | phase2_linesWhereUniqueInput[]
    update?: phase2_linesUpdateWithWhereUniqueWithoutStock_reportsInput | phase2_linesUpdateWithWhereUniqueWithoutStock_reportsInput[]
    updateMany?: phase2_linesUpdateManyWithWhereWithoutStock_reportsInput | phase2_linesUpdateManyWithWhereWithoutStock_reportsInput[]
    deleteMany?: phase2_linesScalarWhereInput | phase2_linesScalarWhereInput[]
  }

  export type report_roomsUpdateManyWithoutStock_reportsNestedInput = {
    create?: XOR<report_roomsCreateWithoutStock_reportsInput, report_roomsUncheckedCreateWithoutStock_reportsInput> | report_roomsCreateWithoutStock_reportsInput[] | report_roomsUncheckedCreateWithoutStock_reportsInput[]
    connectOrCreate?: report_roomsCreateOrConnectWithoutStock_reportsInput | report_roomsCreateOrConnectWithoutStock_reportsInput[]
    upsert?: report_roomsUpsertWithWhereUniqueWithoutStock_reportsInput | report_roomsUpsertWithWhereUniqueWithoutStock_reportsInput[]
    createMany?: report_roomsCreateManyStock_reportsInputEnvelope
    set?: report_roomsWhereUniqueInput | report_roomsWhereUniqueInput[]
    disconnect?: report_roomsWhereUniqueInput | report_roomsWhereUniqueInput[]
    delete?: report_roomsWhereUniqueInput | report_roomsWhereUniqueInput[]
    connect?: report_roomsWhereUniqueInput | report_roomsWhereUniqueInput[]
    update?: report_roomsUpdateWithWhereUniqueWithoutStock_reportsInput | report_roomsUpdateWithWhereUniqueWithoutStock_reportsInput[]
    updateMany?: report_roomsUpdateManyWithWhereWithoutStock_reportsInput | report_roomsUpdateManyWithWhereWithoutStock_reportsInput[]
    deleteMany?: report_roomsScalarWhereInput | report_roomsScalarWhereInput[]
  }

  export type phase1_boxesUncheckedUpdateManyWithoutStock_reportsNestedInput = {
    create?: XOR<phase1_boxesCreateWithoutStock_reportsInput, phase1_boxesUncheckedCreateWithoutStock_reportsInput> | phase1_boxesCreateWithoutStock_reportsInput[] | phase1_boxesUncheckedCreateWithoutStock_reportsInput[]
    connectOrCreate?: phase1_boxesCreateOrConnectWithoutStock_reportsInput | phase1_boxesCreateOrConnectWithoutStock_reportsInput[]
    upsert?: phase1_boxesUpsertWithWhereUniqueWithoutStock_reportsInput | phase1_boxesUpsertWithWhereUniqueWithoutStock_reportsInput[]
    createMany?: phase1_boxesCreateManyStock_reportsInputEnvelope
    set?: phase1_boxesWhereUniqueInput | phase1_boxesWhereUniqueInput[]
    disconnect?: phase1_boxesWhereUniqueInput | phase1_boxesWhereUniqueInput[]
    delete?: phase1_boxesWhereUniqueInput | phase1_boxesWhereUniqueInput[]
    connect?: phase1_boxesWhereUniqueInput | phase1_boxesWhereUniqueInput[]
    update?: phase1_boxesUpdateWithWhereUniqueWithoutStock_reportsInput | phase1_boxesUpdateWithWhereUniqueWithoutStock_reportsInput[]
    updateMany?: phase1_boxesUpdateManyWithWhereWithoutStock_reportsInput | phase1_boxesUpdateManyWithWhereWithoutStock_reportsInput[]
    deleteMany?: phase1_boxesScalarWhereInput | phase1_boxesScalarWhereInput[]
  }

  export type phase2_box_workUncheckedUpdateManyWithoutStock_reportsNestedInput = {
    create?: XOR<phase2_box_workCreateWithoutStock_reportsInput, phase2_box_workUncheckedCreateWithoutStock_reportsInput> | phase2_box_workCreateWithoutStock_reportsInput[] | phase2_box_workUncheckedCreateWithoutStock_reportsInput[]
    connectOrCreate?: phase2_box_workCreateOrConnectWithoutStock_reportsInput | phase2_box_workCreateOrConnectWithoutStock_reportsInput[]
    upsert?: phase2_box_workUpsertWithWhereUniqueWithoutStock_reportsInput | phase2_box_workUpsertWithWhereUniqueWithoutStock_reportsInput[]
    createMany?: phase2_box_workCreateManyStock_reportsInputEnvelope
    set?: phase2_box_workWhereUniqueInput | phase2_box_workWhereUniqueInput[]
    disconnect?: phase2_box_workWhereUniqueInput | phase2_box_workWhereUniqueInput[]
    delete?: phase2_box_workWhereUniqueInput | phase2_box_workWhereUniqueInput[]
    connect?: phase2_box_workWhereUniqueInput | phase2_box_workWhereUniqueInput[]
    update?: phase2_box_workUpdateWithWhereUniqueWithoutStock_reportsInput | phase2_box_workUpdateWithWhereUniqueWithoutStock_reportsInput[]
    updateMany?: phase2_box_workUpdateManyWithWhereWithoutStock_reportsInput | phase2_box_workUpdateManyWithWhereWithoutStock_reportsInput[]
    deleteMany?: phase2_box_workScalarWhereInput | phase2_box_workScalarWhereInput[]
  }

  export type phase2_linesUncheckedUpdateManyWithoutStock_reportsNestedInput = {
    create?: XOR<phase2_linesCreateWithoutStock_reportsInput, phase2_linesUncheckedCreateWithoutStock_reportsInput> | phase2_linesCreateWithoutStock_reportsInput[] | phase2_linesUncheckedCreateWithoutStock_reportsInput[]
    connectOrCreate?: phase2_linesCreateOrConnectWithoutStock_reportsInput | phase2_linesCreateOrConnectWithoutStock_reportsInput[]
    upsert?: phase2_linesUpsertWithWhereUniqueWithoutStock_reportsInput | phase2_linesUpsertWithWhereUniqueWithoutStock_reportsInput[]
    createMany?: phase2_linesCreateManyStock_reportsInputEnvelope
    set?: phase2_linesWhereUniqueInput | phase2_linesWhereUniqueInput[]
    disconnect?: phase2_linesWhereUniqueInput | phase2_linesWhereUniqueInput[]
    delete?: phase2_linesWhereUniqueInput | phase2_linesWhereUniqueInput[]
    connect?: phase2_linesWhereUniqueInput | phase2_linesWhereUniqueInput[]
    update?: phase2_linesUpdateWithWhereUniqueWithoutStock_reportsInput | phase2_linesUpdateWithWhereUniqueWithoutStock_reportsInput[]
    updateMany?: phase2_linesUpdateManyWithWhereWithoutStock_reportsInput | phase2_linesUpdateManyWithWhereWithoutStock_reportsInput[]
    deleteMany?: phase2_linesScalarWhereInput | phase2_linesScalarWhereInput[]
  }

  export type report_roomsUncheckedUpdateManyWithoutStock_reportsNestedInput = {
    create?: XOR<report_roomsCreateWithoutStock_reportsInput, report_roomsUncheckedCreateWithoutStock_reportsInput> | report_roomsCreateWithoutStock_reportsInput[] | report_roomsUncheckedCreateWithoutStock_reportsInput[]
    connectOrCreate?: report_roomsCreateOrConnectWithoutStock_reportsInput | report_roomsCreateOrConnectWithoutStock_reportsInput[]
    upsert?: report_roomsUpsertWithWhereUniqueWithoutStock_reportsInput | report_roomsUpsertWithWhereUniqueWithoutStock_reportsInput[]
    createMany?: report_roomsCreateManyStock_reportsInputEnvelope
    set?: report_roomsWhereUniqueInput | report_roomsWhereUniqueInput[]
    disconnect?: report_roomsWhereUniqueInput | report_roomsWhereUniqueInput[]
    delete?: report_roomsWhereUniqueInput | report_roomsWhereUniqueInput[]
    connect?: report_roomsWhereUniqueInput | report_roomsWhereUniqueInput[]
    update?: report_roomsUpdateWithWhereUniqueWithoutStock_reportsInput | report_roomsUpdateWithWhereUniqueWithoutStock_reportsInput[]
    updateMany?: report_roomsUpdateManyWithWhereWithoutStock_reportsInput | report_roomsUpdateManyWithWhereWithoutStock_reportsInput[]
    deleteMany?: report_roomsScalarWhereInput | report_roomsScalarWhereInput[]
  }

  export type phase1_boxesCreateNestedManyWithoutStock_roomsInput = {
    create?: XOR<phase1_boxesCreateWithoutStock_roomsInput, phase1_boxesUncheckedCreateWithoutStock_roomsInput> | phase1_boxesCreateWithoutStock_roomsInput[] | phase1_boxesUncheckedCreateWithoutStock_roomsInput[]
    connectOrCreate?: phase1_boxesCreateOrConnectWithoutStock_roomsInput | phase1_boxesCreateOrConnectWithoutStock_roomsInput[]
    createMany?: phase1_boxesCreateManyStock_roomsInputEnvelope
    connect?: phase1_boxesWhereUniqueInput | phase1_boxesWhereUniqueInput[]
  }

  export type phase2_box_workCreateNestedManyWithoutStock_roomsInput = {
    create?: XOR<phase2_box_workCreateWithoutStock_roomsInput, phase2_box_workUncheckedCreateWithoutStock_roomsInput> | phase2_box_workCreateWithoutStock_roomsInput[] | phase2_box_workUncheckedCreateWithoutStock_roomsInput[]
    connectOrCreate?: phase2_box_workCreateOrConnectWithoutStock_roomsInput | phase2_box_workCreateOrConnectWithoutStock_roomsInput[]
    createMany?: phase2_box_workCreateManyStock_roomsInputEnvelope
    connect?: phase2_box_workWhereUniqueInput | phase2_box_workWhereUniqueInput[]
  }

  export type phase2_linesCreateNestedManyWithoutStock_roomsInput = {
    create?: XOR<phase2_linesCreateWithoutStock_roomsInput, phase2_linesUncheckedCreateWithoutStock_roomsInput> | phase2_linesCreateWithoutStock_roomsInput[] | phase2_linesUncheckedCreateWithoutStock_roomsInput[]
    connectOrCreate?: phase2_linesCreateOrConnectWithoutStock_roomsInput | phase2_linesCreateOrConnectWithoutStock_roomsInput[]
    createMany?: phase2_linesCreateManyStock_roomsInputEnvelope
    connect?: phase2_linesWhereUniqueInput | phase2_linesWhereUniqueInput[]
  }

  export type report_roomsCreateNestedManyWithoutStock_roomsInput = {
    create?: XOR<report_roomsCreateWithoutStock_roomsInput, report_roomsUncheckedCreateWithoutStock_roomsInput> | report_roomsCreateWithoutStock_roomsInput[] | report_roomsUncheckedCreateWithoutStock_roomsInput[]
    connectOrCreate?: report_roomsCreateOrConnectWithoutStock_roomsInput | report_roomsCreateOrConnectWithoutStock_roomsInput[]
    createMany?: report_roomsCreateManyStock_roomsInputEnvelope
    connect?: report_roomsWhereUniqueInput | report_roomsWhereUniqueInput[]
  }

  export type phase1_boxesUncheckedCreateNestedManyWithoutStock_roomsInput = {
    create?: XOR<phase1_boxesCreateWithoutStock_roomsInput, phase1_boxesUncheckedCreateWithoutStock_roomsInput> | phase1_boxesCreateWithoutStock_roomsInput[] | phase1_boxesUncheckedCreateWithoutStock_roomsInput[]
    connectOrCreate?: phase1_boxesCreateOrConnectWithoutStock_roomsInput | phase1_boxesCreateOrConnectWithoutStock_roomsInput[]
    createMany?: phase1_boxesCreateManyStock_roomsInputEnvelope
    connect?: phase1_boxesWhereUniqueInput | phase1_boxesWhereUniqueInput[]
  }

  export type phase2_box_workUncheckedCreateNestedManyWithoutStock_roomsInput = {
    create?: XOR<phase2_box_workCreateWithoutStock_roomsInput, phase2_box_workUncheckedCreateWithoutStock_roomsInput> | phase2_box_workCreateWithoutStock_roomsInput[] | phase2_box_workUncheckedCreateWithoutStock_roomsInput[]
    connectOrCreate?: phase2_box_workCreateOrConnectWithoutStock_roomsInput | phase2_box_workCreateOrConnectWithoutStock_roomsInput[]
    createMany?: phase2_box_workCreateManyStock_roomsInputEnvelope
    connect?: phase2_box_workWhereUniqueInput | phase2_box_workWhereUniqueInput[]
  }

  export type phase2_linesUncheckedCreateNestedManyWithoutStock_roomsInput = {
    create?: XOR<phase2_linesCreateWithoutStock_roomsInput, phase2_linesUncheckedCreateWithoutStock_roomsInput> | phase2_linesCreateWithoutStock_roomsInput[] | phase2_linesUncheckedCreateWithoutStock_roomsInput[]
    connectOrCreate?: phase2_linesCreateOrConnectWithoutStock_roomsInput | phase2_linesCreateOrConnectWithoutStock_roomsInput[]
    createMany?: phase2_linesCreateManyStock_roomsInputEnvelope
    connect?: phase2_linesWhereUniqueInput | phase2_linesWhereUniqueInput[]
  }

  export type report_roomsUncheckedCreateNestedManyWithoutStock_roomsInput = {
    create?: XOR<report_roomsCreateWithoutStock_roomsInput, report_roomsUncheckedCreateWithoutStock_roomsInput> | report_roomsCreateWithoutStock_roomsInput[] | report_roomsUncheckedCreateWithoutStock_roomsInput[]
    connectOrCreate?: report_roomsCreateOrConnectWithoutStock_roomsInput | report_roomsCreateOrConnectWithoutStock_roomsInput[]
    createMany?: report_roomsCreateManyStock_roomsInputEnvelope
    connect?: report_roomsWhereUniqueInput | report_roomsWhereUniqueInput[]
  }

  export type phase1_boxesUpdateManyWithoutStock_roomsNestedInput = {
    create?: XOR<phase1_boxesCreateWithoutStock_roomsInput, phase1_boxesUncheckedCreateWithoutStock_roomsInput> | phase1_boxesCreateWithoutStock_roomsInput[] | phase1_boxesUncheckedCreateWithoutStock_roomsInput[]
    connectOrCreate?: phase1_boxesCreateOrConnectWithoutStock_roomsInput | phase1_boxesCreateOrConnectWithoutStock_roomsInput[]
    upsert?: phase1_boxesUpsertWithWhereUniqueWithoutStock_roomsInput | phase1_boxesUpsertWithWhereUniqueWithoutStock_roomsInput[]
    createMany?: phase1_boxesCreateManyStock_roomsInputEnvelope
    set?: phase1_boxesWhereUniqueInput | phase1_boxesWhereUniqueInput[]
    disconnect?: phase1_boxesWhereUniqueInput | phase1_boxesWhereUniqueInput[]
    delete?: phase1_boxesWhereUniqueInput | phase1_boxesWhereUniqueInput[]
    connect?: phase1_boxesWhereUniqueInput | phase1_boxesWhereUniqueInput[]
    update?: phase1_boxesUpdateWithWhereUniqueWithoutStock_roomsInput | phase1_boxesUpdateWithWhereUniqueWithoutStock_roomsInput[]
    updateMany?: phase1_boxesUpdateManyWithWhereWithoutStock_roomsInput | phase1_boxesUpdateManyWithWhereWithoutStock_roomsInput[]
    deleteMany?: phase1_boxesScalarWhereInput | phase1_boxesScalarWhereInput[]
  }

  export type phase2_box_workUpdateManyWithoutStock_roomsNestedInput = {
    create?: XOR<phase2_box_workCreateWithoutStock_roomsInput, phase2_box_workUncheckedCreateWithoutStock_roomsInput> | phase2_box_workCreateWithoutStock_roomsInput[] | phase2_box_workUncheckedCreateWithoutStock_roomsInput[]
    connectOrCreate?: phase2_box_workCreateOrConnectWithoutStock_roomsInput | phase2_box_workCreateOrConnectWithoutStock_roomsInput[]
    upsert?: phase2_box_workUpsertWithWhereUniqueWithoutStock_roomsInput | phase2_box_workUpsertWithWhereUniqueWithoutStock_roomsInput[]
    createMany?: phase2_box_workCreateManyStock_roomsInputEnvelope
    set?: phase2_box_workWhereUniqueInput | phase2_box_workWhereUniqueInput[]
    disconnect?: phase2_box_workWhereUniqueInput | phase2_box_workWhereUniqueInput[]
    delete?: phase2_box_workWhereUniqueInput | phase2_box_workWhereUniqueInput[]
    connect?: phase2_box_workWhereUniqueInput | phase2_box_workWhereUniqueInput[]
    update?: phase2_box_workUpdateWithWhereUniqueWithoutStock_roomsInput | phase2_box_workUpdateWithWhereUniqueWithoutStock_roomsInput[]
    updateMany?: phase2_box_workUpdateManyWithWhereWithoutStock_roomsInput | phase2_box_workUpdateManyWithWhereWithoutStock_roomsInput[]
    deleteMany?: phase2_box_workScalarWhereInput | phase2_box_workScalarWhereInput[]
  }

  export type phase2_linesUpdateManyWithoutStock_roomsNestedInput = {
    create?: XOR<phase2_linesCreateWithoutStock_roomsInput, phase2_linesUncheckedCreateWithoutStock_roomsInput> | phase2_linesCreateWithoutStock_roomsInput[] | phase2_linesUncheckedCreateWithoutStock_roomsInput[]
    connectOrCreate?: phase2_linesCreateOrConnectWithoutStock_roomsInput | phase2_linesCreateOrConnectWithoutStock_roomsInput[]
    upsert?: phase2_linesUpsertWithWhereUniqueWithoutStock_roomsInput | phase2_linesUpsertWithWhereUniqueWithoutStock_roomsInput[]
    createMany?: phase2_linesCreateManyStock_roomsInputEnvelope
    set?: phase2_linesWhereUniqueInput | phase2_linesWhereUniqueInput[]
    disconnect?: phase2_linesWhereUniqueInput | phase2_linesWhereUniqueInput[]
    delete?: phase2_linesWhereUniqueInput | phase2_linesWhereUniqueInput[]
    connect?: phase2_linesWhereUniqueInput | phase2_linesWhereUniqueInput[]
    update?: phase2_linesUpdateWithWhereUniqueWithoutStock_roomsInput | phase2_linesUpdateWithWhereUniqueWithoutStock_roomsInput[]
    updateMany?: phase2_linesUpdateManyWithWhereWithoutStock_roomsInput | phase2_linesUpdateManyWithWhereWithoutStock_roomsInput[]
    deleteMany?: phase2_linesScalarWhereInput | phase2_linesScalarWhereInput[]
  }

  export type report_roomsUpdateManyWithoutStock_roomsNestedInput = {
    create?: XOR<report_roomsCreateWithoutStock_roomsInput, report_roomsUncheckedCreateWithoutStock_roomsInput> | report_roomsCreateWithoutStock_roomsInput[] | report_roomsUncheckedCreateWithoutStock_roomsInput[]
    connectOrCreate?: report_roomsCreateOrConnectWithoutStock_roomsInput | report_roomsCreateOrConnectWithoutStock_roomsInput[]
    upsert?: report_roomsUpsertWithWhereUniqueWithoutStock_roomsInput | report_roomsUpsertWithWhereUniqueWithoutStock_roomsInput[]
    createMany?: report_roomsCreateManyStock_roomsInputEnvelope
    set?: report_roomsWhereUniqueInput | report_roomsWhereUniqueInput[]
    disconnect?: report_roomsWhereUniqueInput | report_roomsWhereUniqueInput[]
    delete?: report_roomsWhereUniqueInput | report_roomsWhereUniqueInput[]
    connect?: report_roomsWhereUniqueInput | report_roomsWhereUniqueInput[]
    update?: report_roomsUpdateWithWhereUniqueWithoutStock_roomsInput | report_roomsUpdateWithWhereUniqueWithoutStock_roomsInput[]
    updateMany?: report_roomsUpdateManyWithWhereWithoutStock_roomsInput | report_roomsUpdateManyWithWhereWithoutStock_roomsInput[]
    deleteMany?: report_roomsScalarWhereInput | report_roomsScalarWhereInput[]
  }

  export type phase1_boxesUncheckedUpdateManyWithoutStock_roomsNestedInput = {
    create?: XOR<phase1_boxesCreateWithoutStock_roomsInput, phase1_boxesUncheckedCreateWithoutStock_roomsInput> | phase1_boxesCreateWithoutStock_roomsInput[] | phase1_boxesUncheckedCreateWithoutStock_roomsInput[]
    connectOrCreate?: phase1_boxesCreateOrConnectWithoutStock_roomsInput | phase1_boxesCreateOrConnectWithoutStock_roomsInput[]
    upsert?: phase1_boxesUpsertWithWhereUniqueWithoutStock_roomsInput | phase1_boxesUpsertWithWhereUniqueWithoutStock_roomsInput[]
    createMany?: phase1_boxesCreateManyStock_roomsInputEnvelope
    set?: phase1_boxesWhereUniqueInput | phase1_boxesWhereUniqueInput[]
    disconnect?: phase1_boxesWhereUniqueInput | phase1_boxesWhereUniqueInput[]
    delete?: phase1_boxesWhereUniqueInput | phase1_boxesWhereUniqueInput[]
    connect?: phase1_boxesWhereUniqueInput | phase1_boxesWhereUniqueInput[]
    update?: phase1_boxesUpdateWithWhereUniqueWithoutStock_roomsInput | phase1_boxesUpdateWithWhereUniqueWithoutStock_roomsInput[]
    updateMany?: phase1_boxesUpdateManyWithWhereWithoutStock_roomsInput | phase1_boxesUpdateManyWithWhereWithoutStock_roomsInput[]
    deleteMany?: phase1_boxesScalarWhereInput | phase1_boxesScalarWhereInput[]
  }

  export type phase2_box_workUncheckedUpdateManyWithoutStock_roomsNestedInput = {
    create?: XOR<phase2_box_workCreateWithoutStock_roomsInput, phase2_box_workUncheckedCreateWithoutStock_roomsInput> | phase2_box_workCreateWithoutStock_roomsInput[] | phase2_box_workUncheckedCreateWithoutStock_roomsInput[]
    connectOrCreate?: phase2_box_workCreateOrConnectWithoutStock_roomsInput | phase2_box_workCreateOrConnectWithoutStock_roomsInput[]
    upsert?: phase2_box_workUpsertWithWhereUniqueWithoutStock_roomsInput | phase2_box_workUpsertWithWhereUniqueWithoutStock_roomsInput[]
    createMany?: phase2_box_workCreateManyStock_roomsInputEnvelope
    set?: phase2_box_workWhereUniqueInput | phase2_box_workWhereUniqueInput[]
    disconnect?: phase2_box_workWhereUniqueInput | phase2_box_workWhereUniqueInput[]
    delete?: phase2_box_workWhereUniqueInput | phase2_box_workWhereUniqueInput[]
    connect?: phase2_box_workWhereUniqueInput | phase2_box_workWhereUniqueInput[]
    update?: phase2_box_workUpdateWithWhereUniqueWithoutStock_roomsInput | phase2_box_workUpdateWithWhereUniqueWithoutStock_roomsInput[]
    updateMany?: phase2_box_workUpdateManyWithWhereWithoutStock_roomsInput | phase2_box_workUpdateManyWithWhereWithoutStock_roomsInput[]
    deleteMany?: phase2_box_workScalarWhereInput | phase2_box_workScalarWhereInput[]
  }

  export type phase2_linesUncheckedUpdateManyWithoutStock_roomsNestedInput = {
    create?: XOR<phase2_linesCreateWithoutStock_roomsInput, phase2_linesUncheckedCreateWithoutStock_roomsInput> | phase2_linesCreateWithoutStock_roomsInput[] | phase2_linesUncheckedCreateWithoutStock_roomsInput[]
    connectOrCreate?: phase2_linesCreateOrConnectWithoutStock_roomsInput | phase2_linesCreateOrConnectWithoutStock_roomsInput[]
    upsert?: phase2_linesUpsertWithWhereUniqueWithoutStock_roomsInput | phase2_linesUpsertWithWhereUniqueWithoutStock_roomsInput[]
    createMany?: phase2_linesCreateManyStock_roomsInputEnvelope
    set?: phase2_linesWhereUniqueInput | phase2_linesWhereUniqueInput[]
    disconnect?: phase2_linesWhereUniqueInput | phase2_linesWhereUniqueInput[]
    delete?: phase2_linesWhereUniqueInput | phase2_linesWhereUniqueInput[]
    connect?: phase2_linesWhereUniqueInput | phase2_linesWhereUniqueInput[]
    update?: phase2_linesUpdateWithWhereUniqueWithoutStock_roomsInput | phase2_linesUpdateWithWhereUniqueWithoutStock_roomsInput[]
    updateMany?: phase2_linesUpdateManyWithWhereWithoutStock_roomsInput | phase2_linesUpdateManyWithWhereWithoutStock_roomsInput[]
    deleteMany?: phase2_linesScalarWhereInput | phase2_linesScalarWhereInput[]
  }

  export type report_roomsUncheckedUpdateManyWithoutStock_roomsNestedInput = {
    create?: XOR<report_roomsCreateWithoutStock_roomsInput, report_roomsUncheckedCreateWithoutStock_roomsInput> | report_roomsCreateWithoutStock_roomsInput[] | report_roomsUncheckedCreateWithoutStock_roomsInput[]
    connectOrCreate?: report_roomsCreateOrConnectWithoutStock_roomsInput | report_roomsCreateOrConnectWithoutStock_roomsInput[]
    upsert?: report_roomsUpsertWithWhereUniqueWithoutStock_roomsInput | report_roomsUpsertWithWhereUniqueWithoutStock_roomsInput[]
    createMany?: report_roomsCreateManyStock_roomsInputEnvelope
    set?: report_roomsWhereUniqueInput | report_roomsWhereUniqueInput[]
    disconnect?: report_roomsWhereUniqueInput | report_roomsWhereUniqueInput[]
    delete?: report_roomsWhereUniqueInput | report_roomsWhereUniqueInput[]
    connect?: report_roomsWhereUniqueInput | report_roomsWhereUniqueInput[]
    update?: report_roomsUpdateWithWhereUniqueWithoutStock_roomsInput | report_roomsUpdateWithWhereUniqueWithoutStock_roomsInput[]
    updateMany?: report_roomsUpdateManyWithWhereWithoutStock_roomsInput | report_roomsUpdateManyWithWhereWithoutStock_roomsInput[]
    deleteMany?: report_roomsScalarWhereInput | report_roomsScalarWhereInput[]
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

  export type stock_reportsCreateWithoutPhase1_boxesInput = {
    id?: bigint | number
    name: string
    status?: string
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    phase2_box_work?: phase2_box_workCreateNestedManyWithoutStock_reportsInput
    phase2_lines?: phase2_linesCreateNestedManyWithoutStock_reportsInput
    report_rooms?: report_roomsCreateNestedManyWithoutStock_reportsInput
  }

  export type stock_reportsUncheckedCreateWithoutPhase1_boxesInput = {
    id?: bigint | number
    name: string
    status?: string
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    phase2_box_work?: phase2_box_workUncheckedCreateNestedManyWithoutStock_reportsInput
    phase2_lines?: phase2_linesUncheckedCreateNestedManyWithoutStock_reportsInput
    report_rooms?: report_roomsUncheckedCreateNestedManyWithoutStock_reportsInput
  }

  export type stock_reportsCreateOrConnectWithoutPhase1_boxesInput = {
    where: stock_reportsWhereUniqueInput
    create: XOR<stock_reportsCreateWithoutPhase1_boxesInput, stock_reportsUncheckedCreateWithoutPhase1_boxesInput>
  }

  export type stock_roomsCreateWithoutPhase1_boxesInput = {
    id?: bigint | number
    name: string
    phase2_box_work?: phase2_box_workCreateNestedManyWithoutStock_roomsInput
    phase2_lines?: phase2_linesCreateNestedManyWithoutStock_roomsInput
    report_rooms?: report_roomsCreateNestedManyWithoutStock_roomsInput
  }

  export type stock_roomsUncheckedCreateWithoutPhase1_boxesInput = {
    id?: bigint | number
    name: string
    phase2_box_work?: phase2_box_workUncheckedCreateNestedManyWithoutStock_roomsInput
    phase2_lines?: phase2_linesUncheckedCreateNestedManyWithoutStock_roomsInput
    report_rooms?: report_roomsUncheckedCreateNestedManyWithoutStock_roomsInput
  }

  export type stock_roomsCreateOrConnectWithoutPhase1_boxesInput = {
    where: stock_roomsWhereUniqueInput
    create: XOR<stock_roomsCreateWithoutPhase1_boxesInput, stock_roomsUncheckedCreateWithoutPhase1_boxesInput>
  }

  export type stock_reportsUpsertWithoutPhase1_boxesInput = {
    update: XOR<stock_reportsUpdateWithoutPhase1_boxesInput, stock_reportsUncheckedUpdateWithoutPhase1_boxesInput>
    create: XOR<stock_reportsCreateWithoutPhase1_boxesInput, stock_reportsUncheckedCreateWithoutPhase1_boxesInput>
    where?: stock_reportsWhereInput
  }

  export type stock_reportsUpdateToOneWithWhereWithoutPhase1_boxesInput = {
    where?: stock_reportsWhereInput
    data: XOR<stock_reportsUpdateWithoutPhase1_boxesInput, stock_reportsUncheckedUpdateWithoutPhase1_boxesInput>
  }

  export type stock_reportsUpdateWithoutPhase1_boxesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    phase2_box_work?: phase2_box_workUpdateManyWithoutStock_reportsNestedInput
    phase2_lines?: phase2_linesUpdateManyWithoutStock_reportsNestedInput
    report_rooms?: report_roomsUpdateManyWithoutStock_reportsNestedInput
  }

  export type stock_reportsUncheckedUpdateWithoutPhase1_boxesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    phase2_box_work?: phase2_box_workUncheckedUpdateManyWithoutStock_reportsNestedInput
    phase2_lines?: phase2_linesUncheckedUpdateManyWithoutStock_reportsNestedInput
    report_rooms?: report_roomsUncheckedUpdateManyWithoutStock_reportsNestedInput
  }

  export type stock_roomsUpsertWithoutPhase1_boxesInput = {
    update: XOR<stock_roomsUpdateWithoutPhase1_boxesInput, stock_roomsUncheckedUpdateWithoutPhase1_boxesInput>
    create: XOR<stock_roomsCreateWithoutPhase1_boxesInput, stock_roomsUncheckedCreateWithoutPhase1_boxesInput>
    where?: stock_roomsWhereInput
  }

  export type stock_roomsUpdateToOneWithWhereWithoutPhase1_boxesInput = {
    where?: stock_roomsWhereInput
    data: XOR<stock_roomsUpdateWithoutPhase1_boxesInput, stock_roomsUncheckedUpdateWithoutPhase1_boxesInput>
  }

  export type stock_roomsUpdateWithoutPhase1_boxesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    phase2_box_work?: phase2_box_workUpdateManyWithoutStock_roomsNestedInput
    phase2_lines?: phase2_linesUpdateManyWithoutStock_roomsNestedInput
    report_rooms?: report_roomsUpdateManyWithoutStock_roomsNestedInput
  }

  export type stock_roomsUncheckedUpdateWithoutPhase1_boxesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    phase2_box_work?: phase2_box_workUncheckedUpdateManyWithoutStock_roomsNestedInput
    phase2_lines?: phase2_linesUncheckedUpdateManyWithoutStock_roomsNestedInput
    report_rooms?: report_roomsUncheckedUpdateManyWithoutStock_roomsNestedInput
  }

  export type stock_reportsCreateWithoutPhase2_box_workInput = {
    id?: bigint | number
    name: string
    status?: string
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    phase1_boxes?: phase1_boxesCreateNestedManyWithoutStock_reportsInput
    phase2_lines?: phase2_linesCreateNestedManyWithoutStock_reportsInput
    report_rooms?: report_roomsCreateNestedManyWithoutStock_reportsInput
  }

  export type stock_reportsUncheckedCreateWithoutPhase2_box_workInput = {
    id?: bigint | number
    name: string
    status?: string
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    phase1_boxes?: phase1_boxesUncheckedCreateNestedManyWithoutStock_reportsInput
    phase2_lines?: phase2_linesUncheckedCreateNestedManyWithoutStock_reportsInput
    report_rooms?: report_roomsUncheckedCreateNestedManyWithoutStock_reportsInput
  }

  export type stock_reportsCreateOrConnectWithoutPhase2_box_workInput = {
    where: stock_reportsWhereUniqueInput
    create: XOR<stock_reportsCreateWithoutPhase2_box_workInput, stock_reportsUncheckedCreateWithoutPhase2_box_workInput>
  }

  export type stock_roomsCreateWithoutPhase2_box_workInput = {
    id?: bigint | number
    name: string
    phase1_boxes?: phase1_boxesCreateNestedManyWithoutStock_roomsInput
    phase2_lines?: phase2_linesCreateNestedManyWithoutStock_roomsInput
    report_rooms?: report_roomsCreateNestedManyWithoutStock_roomsInput
  }

  export type stock_roomsUncheckedCreateWithoutPhase2_box_workInput = {
    id?: bigint | number
    name: string
    phase1_boxes?: phase1_boxesUncheckedCreateNestedManyWithoutStock_roomsInput
    phase2_lines?: phase2_linesUncheckedCreateNestedManyWithoutStock_roomsInput
    report_rooms?: report_roomsUncheckedCreateNestedManyWithoutStock_roomsInput
  }

  export type stock_roomsCreateOrConnectWithoutPhase2_box_workInput = {
    where: stock_roomsWhereUniqueInput
    create: XOR<stock_roomsCreateWithoutPhase2_box_workInput, stock_roomsUncheckedCreateWithoutPhase2_box_workInput>
  }

  export type stock_reportsUpsertWithoutPhase2_box_workInput = {
    update: XOR<stock_reportsUpdateWithoutPhase2_box_workInput, stock_reportsUncheckedUpdateWithoutPhase2_box_workInput>
    create: XOR<stock_reportsCreateWithoutPhase2_box_workInput, stock_reportsUncheckedCreateWithoutPhase2_box_workInput>
    where?: stock_reportsWhereInput
  }

  export type stock_reportsUpdateToOneWithWhereWithoutPhase2_box_workInput = {
    where?: stock_reportsWhereInput
    data: XOR<stock_reportsUpdateWithoutPhase2_box_workInput, stock_reportsUncheckedUpdateWithoutPhase2_box_workInput>
  }

  export type stock_reportsUpdateWithoutPhase2_box_workInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    phase1_boxes?: phase1_boxesUpdateManyWithoutStock_reportsNestedInput
    phase2_lines?: phase2_linesUpdateManyWithoutStock_reportsNestedInput
    report_rooms?: report_roomsUpdateManyWithoutStock_reportsNestedInput
  }

  export type stock_reportsUncheckedUpdateWithoutPhase2_box_workInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    phase1_boxes?: phase1_boxesUncheckedUpdateManyWithoutStock_reportsNestedInput
    phase2_lines?: phase2_linesUncheckedUpdateManyWithoutStock_reportsNestedInput
    report_rooms?: report_roomsUncheckedUpdateManyWithoutStock_reportsNestedInput
  }

  export type stock_roomsUpsertWithoutPhase2_box_workInput = {
    update: XOR<stock_roomsUpdateWithoutPhase2_box_workInput, stock_roomsUncheckedUpdateWithoutPhase2_box_workInput>
    create: XOR<stock_roomsCreateWithoutPhase2_box_workInput, stock_roomsUncheckedCreateWithoutPhase2_box_workInput>
    where?: stock_roomsWhereInput
  }

  export type stock_roomsUpdateToOneWithWhereWithoutPhase2_box_workInput = {
    where?: stock_roomsWhereInput
    data: XOR<stock_roomsUpdateWithoutPhase2_box_workInput, stock_roomsUncheckedUpdateWithoutPhase2_box_workInput>
  }

  export type stock_roomsUpdateWithoutPhase2_box_workInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    phase1_boxes?: phase1_boxesUpdateManyWithoutStock_roomsNestedInput
    phase2_lines?: phase2_linesUpdateManyWithoutStock_roomsNestedInput
    report_rooms?: report_roomsUpdateManyWithoutStock_roomsNestedInput
  }

  export type stock_roomsUncheckedUpdateWithoutPhase2_box_workInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    phase1_boxes?: phase1_boxesUncheckedUpdateManyWithoutStock_roomsNestedInput
    phase2_lines?: phase2_linesUncheckedUpdateManyWithoutStock_roomsNestedInput
    report_rooms?: report_roomsUncheckedUpdateManyWithoutStock_roomsNestedInput
  }

  export type stock_reportsCreateWithoutPhase2_linesInput = {
    id?: bigint | number
    name: string
    status?: string
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    phase1_boxes?: phase1_boxesCreateNestedManyWithoutStock_reportsInput
    phase2_box_work?: phase2_box_workCreateNestedManyWithoutStock_reportsInput
    report_rooms?: report_roomsCreateNestedManyWithoutStock_reportsInput
  }

  export type stock_reportsUncheckedCreateWithoutPhase2_linesInput = {
    id?: bigint | number
    name: string
    status?: string
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    phase1_boxes?: phase1_boxesUncheckedCreateNestedManyWithoutStock_reportsInput
    phase2_box_work?: phase2_box_workUncheckedCreateNestedManyWithoutStock_reportsInput
    report_rooms?: report_roomsUncheckedCreateNestedManyWithoutStock_reportsInput
  }

  export type stock_reportsCreateOrConnectWithoutPhase2_linesInput = {
    where: stock_reportsWhereUniqueInput
    create: XOR<stock_reportsCreateWithoutPhase2_linesInput, stock_reportsUncheckedCreateWithoutPhase2_linesInput>
  }

  export type stock_roomsCreateWithoutPhase2_linesInput = {
    id?: bigint | number
    name: string
    phase1_boxes?: phase1_boxesCreateNestedManyWithoutStock_roomsInput
    phase2_box_work?: phase2_box_workCreateNestedManyWithoutStock_roomsInput
    report_rooms?: report_roomsCreateNestedManyWithoutStock_roomsInput
  }

  export type stock_roomsUncheckedCreateWithoutPhase2_linesInput = {
    id?: bigint | number
    name: string
    phase1_boxes?: phase1_boxesUncheckedCreateNestedManyWithoutStock_roomsInput
    phase2_box_work?: phase2_box_workUncheckedCreateNestedManyWithoutStock_roomsInput
    report_rooms?: report_roomsUncheckedCreateNestedManyWithoutStock_roomsInput
  }

  export type stock_roomsCreateOrConnectWithoutPhase2_linesInput = {
    where: stock_roomsWhereUniqueInput
    create: XOR<stock_roomsCreateWithoutPhase2_linesInput, stock_roomsUncheckedCreateWithoutPhase2_linesInput>
  }

  export type stock_reportsUpsertWithoutPhase2_linesInput = {
    update: XOR<stock_reportsUpdateWithoutPhase2_linesInput, stock_reportsUncheckedUpdateWithoutPhase2_linesInput>
    create: XOR<stock_reportsCreateWithoutPhase2_linesInput, stock_reportsUncheckedCreateWithoutPhase2_linesInput>
    where?: stock_reportsWhereInput
  }

  export type stock_reportsUpdateToOneWithWhereWithoutPhase2_linesInput = {
    where?: stock_reportsWhereInput
    data: XOR<stock_reportsUpdateWithoutPhase2_linesInput, stock_reportsUncheckedUpdateWithoutPhase2_linesInput>
  }

  export type stock_reportsUpdateWithoutPhase2_linesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    phase1_boxes?: phase1_boxesUpdateManyWithoutStock_reportsNestedInput
    phase2_box_work?: phase2_box_workUpdateManyWithoutStock_reportsNestedInput
    report_rooms?: report_roomsUpdateManyWithoutStock_reportsNestedInput
  }

  export type stock_reportsUncheckedUpdateWithoutPhase2_linesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    phase1_boxes?: phase1_boxesUncheckedUpdateManyWithoutStock_reportsNestedInput
    phase2_box_work?: phase2_box_workUncheckedUpdateManyWithoutStock_reportsNestedInput
    report_rooms?: report_roomsUncheckedUpdateManyWithoutStock_reportsNestedInput
  }

  export type stock_roomsUpsertWithoutPhase2_linesInput = {
    update: XOR<stock_roomsUpdateWithoutPhase2_linesInput, stock_roomsUncheckedUpdateWithoutPhase2_linesInput>
    create: XOR<stock_roomsCreateWithoutPhase2_linesInput, stock_roomsUncheckedCreateWithoutPhase2_linesInput>
    where?: stock_roomsWhereInput
  }

  export type stock_roomsUpdateToOneWithWhereWithoutPhase2_linesInput = {
    where?: stock_roomsWhereInput
    data: XOR<stock_roomsUpdateWithoutPhase2_linesInput, stock_roomsUncheckedUpdateWithoutPhase2_linesInput>
  }

  export type stock_roomsUpdateWithoutPhase2_linesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    phase1_boxes?: phase1_boxesUpdateManyWithoutStock_roomsNestedInput
    phase2_box_work?: phase2_box_workUpdateManyWithoutStock_roomsNestedInput
    report_rooms?: report_roomsUpdateManyWithoutStock_roomsNestedInput
  }

  export type stock_roomsUncheckedUpdateWithoutPhase2_linesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    phase1_boxes?: phase1_boxesUncheckedUpdateManyWithoutStock_roomsNestedInput
    phase2_box_work?: phase2_box_workUncheckedUpdateManyWithoutStock_roomsNestedInput
    report_rooms?: report_roomsUncheckedUpdateManyWithoutStock_roomsNestedInput
  }

  export type stock_reportsCreateWithoutReport_roomsInput = {
    id?: bigint | number
    name: string
    status?: string
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    phase1_boxes?: phase1_boxesCreateNestedManyWithoutStock_reportsInput
    phase2_box_work?: phase2_box_workCreateNestedManyWithoutStock_reportsInput
    phase2_lines?: phase2_linesCreateNestedManyWithoutStock_reportsInput
  }

  export type stock_reportsUncheckedCreateWithoutReport_roomsInput = {
    id?: bigint | number
    name: string
    status?: string
    created_by: string
    created_at?: Date | string
    updated_at?: Date | string
    phase1_boxes?: phase1_boxesUncheckedCreateNestedManyWithoutStock_reportsInput
    phase2_box_work?: phase2_box_workUncheckedCreateNestedManyWithoutStock_reportsInput
    phase2_lines?: phase2_linesUncheckedCreateNestedManyWithoutStock_reportsInput
  }

  export type stock_reportsCreateOrConnectWithoutReport_roomsInput = {
    where: stock_reportsWhereUniqueInput
    create: XOR<stock_reportsCreateWithoutReport_roomsInput, stock_reportsUncheckedCreateWithoutReport_roomsInput>
  }

  export type stock_roomsCreateWithoutReport_roomsInput = {
    id?: bigint | number
    name: string
    phase1_boxes?: phase1_boxesCreateNestedManyWithoutStock_roomsInput
    phase2_box_work?: phase2_box_workCreateNestedManyWithoutStock_roomsInput
    phase2_lines?: phase2_linesCreateNestedManyWithoutStock_roomsInput
  }

  export type stock_roomsUncheckedCreateWithoutReport_roomsInput = {
    id?: bigint | number
    name: string
    phase1_boxes?: phase1_boxesUncheckedCreateNestedManyWithoutStock_roomsInput
    phase2_box_work?: phase2_box_workUncheckedCreateNestedManyWithoutStock_roomsInput
    phase2_lines?: phase2_linesUncheckedCreateNestedManyWithoutStock_roomsInput
  }

  export type stock_roomsCreateOrConnectWithoutReport_roomsInput = {
    where: stock_roomsWhereUniqueInput
    create: XOR<stock_roomsCreateWithoutReport_roomsInput, stock_roomsUncheckedCreateWithoutReport_roomsInput>
  }

  export type stock_reportsUpsertWithoutReport_roomsInput = {
    update: XOR<stock_reportsUpdateWithoutReport_roomsInput, stock_reportsUncheckedUpdateWithoutReport_roomsInput>
    create: XOR<stock_reportsCreateWithoutReport_roomsInput, stock_reportsUncheckedCreateWithoutReport_roomsInput>
    where?: stock_reportsWhereInput
  }

  export type stock_reportsUpdateToOneWithWhereWithoutReport_roomsInput = {
    where?: stock_reportsWhereInput
    data: XOR<stock_reportsUpdateWithoutReport_roomsInput, stock_reportsUncheckedUpdateWithoutReport_roomsInput>
  }

  export type stock_reportsUpdateWithoutReport_roomsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    phase1_boxes?: phase1_boxesUpdateManyWithoutStock_reportsNestedInput
    phase2_box_work?: phase2_box_workUpdateManyWithoutStock_reportsNestedInput
    phase2_lines?: phase2_linesUpdateManyWithoutStock_reportsNestedInput
  }

  export type stock_reportsUncheckedUpdateWithoutReport_roomsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    created_by?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    phase1_boxes?: phase1_boxesUncheckedUpdateManyWithoutStock_reportsNestedInput
    phase2_box_work?: phase2_box_workUncheckedUpdateManyWithoutStock_reportsNestedInput
    phase2_lines?: phase2_linesUncheckedUpdateManyWithoutStock_reportsNestedInput
  }

  export type stock_roomsUpsertWithoutReport_roomsInput = {
    update: XOR<stock_roomsUpdateWithoutReport_roomsInput, stock_roomsUncheckedUpdateWithoutReport_roomsInput>
    create: XOR<stock_roomsCreateWithoutReport_roomsInput, stock_roomsUncheckedCreateWithoutReport_roomsInput>
    where?: stock_roomsWhereInput
  }

  export type stock_roomsUpdateToOneWithWhereWithoutReport_roomsInput = {
    where?: stock_roomsWhereInput
    data: XOR<stock_roomsUpdateWithoutReport_roomsInput, stock_roomsUncheckedUpdateWithoutReport_roomsInput>
  }

  export type stock_roomsUpdateWithoutReport_roomsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    phase1_boxes?: phase1_boxesUpdateManyWithoutStock_roomsNestedInput
    phase2_box_work?: phase2_box_workUpdateManyWithoutStock_roomsNestedInput
    phase2_lines?: phase2_linesUpdateManyWithoutStock_roomsNestedInput
  }

  export type stock_roomsUncheckedUpdateWithoutReport_roomsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    phase1_boxes?: phase1_boxesUncheckedUpdateManyWithoutStock_roomsNestedInput
    phase2_box_work?: phase2_box_workUncheckedUpdateManyWithoutStock_roomsNestedInput
    phase2_lines?: phase2_linesUncheckedUpdateManyWithoutStock_roomsNestedInput
  }

  export type phase1_boxesCreateWithoutStock_reportsInput = {
    box_id: string
    scan_count?: number
    status: string
    stock_rooms: stock_roomsCreateNestedOneWithoutPhase1_boxesInput
  }

  export type phase1_boxesUncheckedCreateWithoutStock_reportsInput = {
    room_id: bigint | number
    box_id: string
    scan_count?: number
    status: string
  }

  export type phase1_boxesCreateOrConnectWithoutStock_reportsInput = {
    where: phase1_boxesWhereUniqueInput
    create: XOR<phase1_boxesCreateWithoutStock_reportsInput, phase1_boxesUncheckedCreateWithoutStock_reportsInput>
  }

  export type phase1_boxesCreateManyStock_reportsInputEnvelope = {
    data: phase1_boxesCreateManyStock_reportsInput | phase1_boxesCreateManyStock_reportsInput[]
    skipDuplicates?: boolean
  }

  export type phase2_box_workCreateWithoutStock_reportsInput = {
    box_id: string
    assigned_to?: string | null
    status?: string
    stock_rooms: stock_roomsCreateNestedOneWithoutPhase2_box_workInput
  }

  export type phase2_box_workUncheckedCreateWithoutStock_reportsInput = {
    room_id: bigint | number
    box_id: string
    assigned_to?: string | null
    status?: string
  }

  export type phase2_box_workCreateOrConnectWithoutStock_reportsInput = {
    where: phase2_box_workWhereUniqueInput
    create: XOR<phase2_box_workCreateWithoutStock_reportsInput, phase2_box_workUncheckedCreateWithoutStock_reportsInput>
  }

  export type phase2_box_workCreateManyStock_reportsInputEnvelope = {
    data: phase2_box_workCreateManyStock_reportsInput | phase2_box_workCreateManyStock_reportsInput[]
    skipDuplicates?: boolean
  }

  export type phase2_linesCreateWithoutStock_reportsInput = {
    box_id: string
    sku: string
    qty: number
    id?: bigint | number
    stock_rooms: stock_roomsCreateNestedOneWithoutPhase2_linesInput
  }

  export type phase2_linesUncheckedCreateWithoutStock_reportsInput = {
    room_id: bigint | number
    box_id: string
    sku: string
    qty: number
    id?: bigint | number
  }

  export type phase2_linesCreateOrConnectWithoutStock_reportsInput = {
    where: phase2_linesWhereUniqueInput
    create: XOR<phase2_linesCreateWithoutStock_reportsInput, phase2_linesUncheckedCreateWithoutStock_reportsInput>
  }

  export type phase2_linesCreateManyStock_reportsInputEnvelope = {
    data: phase2_linesCreateManyStock_reportsInput | phase2_linesCreateManyStock_reportsInput[]
    skipDuplicates?: boolean
  }

  export type report_roomsCreateWithoutStock_reportsInput = {
    phase1_owner?: string | null
    phase1_status?: string
    phase2_status?: string
    stock_rooms: stock_roomsCreateNestedOneWithoutReport_roomsInput
  }

  export type report_roomsUncheckedCreateWithoutStock_reportsInput = {
    room_id: bigint | number
    phase1_owner?: string | null
    phase1_status?: string
    phase2_status?: string
  }

  export type report_roomsCreateOrConnectWithoutStock_reportsInput = {
    where: report_roomsWhereUniqueInput
    create: XOR<report_roomsCreateWithoutStock_reportsInput, report_roomsUncheckedCreateWithoutStock_reportsInput>
  }

  export type report_roomsCreateManyStock_reportsInputEnvelope = {
    data: report_roomsCreateManyStock_reportsInput | report_roomsCreateManyStock_reportsInput[]
    skipDuplicates?: boolean
  }

  export type phase1_boxesUpsertWithWhereUniqueWithoutStock_reportsInput = {
    where: phase1_boxesWhereUniqueInput
    update: XOR<phase1_boxesUpdateWithoutStock_reportsInput, phase1_boxesUncheckedUpdateWithoutStock_reportsInput>
    create: XOR<phase1_boxesCreateWithoutStock_reportsInput, phase1_boxesUncheckedCreateWithoutStock_reportsInput>
  }

  export type phase1_boxesUpdateWithWhereUniqueWithoutStock_reportsInput = {
    where: phase1_boxesWhereUniqueInput
    data: XOR<phase1_boxesUpdateWithoutStock_reportsInput, phase1_boxesUncheckedUpdateWithoutStock_reportsInput>
  }

  export type phase1_boxesUpdateManyWithWhereWithoutStock_reportsInput = {
    where: phase1_boxesScalarWhereInput
    data: XOR<phase1_boxesUpdateManyMutationInput, phase1_boxesUncheckedUpdateManyWithoutStock_reportsInput>
  }

  export type phase1_boxesScalarWhereInput = {
    AND?: phase1_boxesScalarWhereInput | phase1_boxesScalarWhereInput[]
    OR?: phase1_boxesScalarWhereInput[]
    NOT?: phase1_boxesScalarWhereInput | phase1_boxesScalarWhereInput[]
    report_id?: BigIntFilter<"phase1_boxes"> | bigint | number
    room_id?: BigIntFilter<"phase1_boxes"> | bigint | number
    box_id?: StringFilter<"phase1_boxes"> | string
    scan_count?: IntFilter<"phase1_boxes"> | number
    status?: StringFilter<"phase1_boxes"> | string
  }

  export type phase2_box_workUpsertWithWhereUniqueWithoutStock_reportsInput = {
    where: phase2_box_workWhereUniqueInput
    update: XOR<phase2_box_workUpdateWithoutStock_reportsInput, phase2_box_workUncheckedUpdateWithoutStock_reportsInput>
    create: XOR<phase2_box_workCreateWithoutStock_reportsInput, phase2_box_workUncheckedCreateWithoutStock_reportsInput>
  }

  export type phase2_box_workUpdateWithWhereUniqueWithoutStock_reportsInput = {
    where: phase2_box_workWhereUniqueInput
    data: XOR<phase2_box_workUpdateWithoutStock_reportsInput, phase2_box_workUncheckedUpdateWithoutStock_reportsInput>
  }

  export type phase2_box_workUpdateManyWithWhereWithoutStock_reportsInput = {
    where: phase2_box_workScalarWhereInput
    data: XOR<phase2_box_workUpdateManyMutationInput, phase2_box_workUncheckedUpdateManyWithoutStock_reportsInput>
  }

  export type phase2_box_workScalarWhereInput = {
    AND?: phase2_box_workScalarWhereInput | phase2_box_workScalarWhereInput[]
    OR?: phase2_box_workScalarWhereInput[]
    NOT?: phase2_box_workScalarWhereInput | phase2_box_workScalarWhereInput[]
    report_id?: BigIntFilter<"phase2_box_work"> | bigint | number
    room_id?: BigIntFilter<"phase2_box_work"> | bigint | number
    box_id?: StringFilter<"phase2_box_work"> | string
    assigned_to?: StringNullableFilter<"phase2_box_work"> | string | null
    status?: StringFilter<"phase2_box_work"> | string
  }

  export type phase2_linesUpsertWithWhereUniqueWithoutStock_reportsInput = {
    where: phase2_linesWhereUniqueInput
    update: XOR<phase2_linesUpdateWithoutStock_reportsInput, phase2_linesUncheckedUpdateWithoutStock_reportsInput>
    create: XOR<phase2_linesCreateWithoutStock_reportsInput, phase2_linesUncheckedCreateWithoutStock_reportsInput>
  }

  export type phase2_linesUpdateWithWhereUniqueWithoutStock_reportsInput = {
    where: phase2_linesWhereUniqueInput
    data: XOR<phase2_linesUpdateWithoutStock_reportsInput, phase2_linesUncheckedUpdateWithoutStock_reportsInput>
  }

  export type phase2_linesUpdateManyWithWhereWithoutStock_reportsInput = {
    where: phase2_linesScalarWhereInput
    data: XOR<phase2_linesUpdateManyMutationInput, phase2_linesUncheckedUpdateManyWithoutStock_reportsInput>
  }

  export type phase2_linesScalarWhereInput = {
    AND?: phase2_linesScalarWhereInput | phase2_linesScalarWhereInput[]
    OR?: phase2_linesScalarWhereInput[]
    NOT?: phase2_linesScalarWhereInput | phase2_linesScalarWhereInput[]
    report_id?: BigIntFilter<"phase2_lines"> | bigint | number
    room_id?: BigIntFilter<"phase2_lines"> | bigint | number
    box_id?: StringFilter<"phase2_lines"> | string
    sku?: StringFilter<"phase2_lines"> | string
    qty?: IntFilter<"phase2_lines"> | number
    id?: BigIntFilter<"phase2_lines"> | bigint | number
  }

  export type report_roomsUpsertWithWhereUniqueWithoutStock_reportsInput = {
    where: report_roomsWhereUniqueInput
    update: XOR<report_roomsUpdateWithoutStock_reportsInput, report_roomsUncheckedUpdateWithoutStock_reportsInput>
    create: XOR<report_roomsCreateWithoutStock_reportsInput, report_roomsUncheckedCreateWithoutStock_reportsInput>
  }

  export type report_roomsUpdateWithWhereUniqueWithoutStock_reportsInput = {
    where: report_roomsWhereUniqueInput
    data: XOR<report_roomsUpdateWithoutStock_reportsInput, report_roomsUncheckedUpdateWithoutStock_reportsInput>
  }

  export type report_roomsUpdateManyWithWhereWithoutStock_reportsInput = {
    where: report_roomsScalarWhereInput
    data: XOR<report_roomsUpdateManyMutationInput, report_roomsUncheckedUpdateManyWithoutStock_reportsInput>
  }

  export type report_roomsScalarWhereInput = {
    AND?: report_roomsScalarWhereInput | report_roomsScalarWhereInput[]
    OR?: report_roomsScalarWhereInput[]
    NOT?: report_roomsScalarWhereInput | report_roomsScalarWhereInput[]
    report_id?: BigIntFilter<"report_rooms"> | bigint | number
    room_id?: BigIntFilter<"report_rooms"> | bigint | number
    phase1_owner?: StringNullableFilter<"report_rooms"> | string | null
    phase1_status?: StringFilter<"report_rooms"> | string
    phase2_status?: StringFilter<"report_rooms"> | string
  }

  export type phase1_boxesCreateWithoutStock_roomsInput = {
    box_id: string
    scan_count?: number
    status: string
    stock_reports: stock_reportsCreateNestedOneWithoutPhase1_boxesInput
  }

  export type phase1_boxesUncheckedCreateWithoutStock_roomsInput = {
    report_id: bigint | number
    box_id: string
    scan_count?: number
    status: string
  }

  export type phase1_boxesCreateOrConnectWithoutStock_roomsInput = {
    where: phase1_boxesWhereUniqueInput
    create: XOR<phase1_boxesCreateWithoutStock_roomsInput, phase1_boxesUncheckedCreateWithoutStock_roomsInput>
  }

  export type phase1_boxesCreateManyStock_roomsInputEnvelope = {
    data: phase1_boxesCreateManyStock_roomsInput | phase1_boxesCreateManyStock_roomsInput[]
    skipDuplicates?: boolean
  }

  export type phase2_box_workCreateWithoutStock_roomsInput = {
    box_id: string
    assigned_to?: string | null
    status?: string
    stock_reports: stock_reportsCreateNestedOneWithoutPhase2_box_workInput
  }

  export type phase2_box_workUncheckedCreateWithoutStock_roomsInput = {
    report_id: bigint | number
    box_id: string
    assigned_to?: string | null
    status?: string
  }

  export type phase2_box_workCreateOrConnectWithoutStock_roomsInput = {
    where: phase2_box_workWhereUniqueInput
    create: XOR<phase2_box_workCreateWithoutStock_roomsInput, phase2_box_workUncheckedCreateWithoutStock_roomsInput>
  }

  export type phase2_box_workCreateManyStock_roomsInputEnvelope = {
    data: phase2_box_workCreateManyStock_roomsInput | phase2_box_workCreateManyStock_roomsInput[]
    skipDuplicates?: boolean
  }

  export type phase2_linesCreateWithoutStock_roomsInput = {
    box_id: string
    sku: string
    qty: number
    id?: bigint | number
    stock_reports: stock_reportsCreateNestedOneWithoutPhase2_linesInput
  }

  export type phase2_linesUncheckedCreateWithoutStock_roomsInput = {
    report_id: bigint | number
    box_id: string
    sku: string
    qty: number
    id?: bigint | number
  }

  export type phase2_linesCreateOrConnectWithoutStock_roomsInput = {
    where: phase2_linesWhereUniqueInput
    create: XOR<phase2_linesCreateWithoutStock_roomsInput, phase2_linesUncheckedCreateWithoutStock_roomsInput>
  }

  export type phase2_linesCreateManyStock_roomsInputEnvelope = {
    data: phase2_linesCreateManyStock_roomsInput | phase2_linesCreateManyStock_roomsInput[]
    skipDuplicates?: boolean
  }

  export type report_roomsCreateWithoutStock_roomsInput = {
    phase1_owner?: string | null
    phase1_status?: string
    phase2_status?: string
    stock_reports: stock_reportsCreateNestedOneWithoutReport_roomsInput
  }

  export type report_roomsUncheckedCreateWithoutStock_roomsInput = {
    report_id: bigint | number
    phase1_owner?: string | null
    phase1_status?: string
    phase2_status?: string
  }

  export type report_roomsCreateOrConnectWithoutStock_roomsInput = {
    where: report_roomsWhereUniqueInput
    create: XOR<report_roomsCreateWithoutStock_roomsInput, report_roomsUncheckedCreateWithoutStock_roomsInput>
  }

  export type report_roomsCreateManyStock_roomsInputEnvelope = {
    data: report_roomsCreateManyStock_roomsInput | report_roomsCreateManyStock_roomsInput[]
    skipDuplicates?: boolean
  }

  export type phase1_boxesUpsertWithWhereUniqueWithoutStock_roomsInput = {
    where: phase1_boxesWhereUniqueInput
    update: XOR<phase1_boxesUpdateWithoutStock_roomsInput, phase1_boxesUncheckedUpdateWithoutStock_roomsInput>
    create: XOR<phase1_boxesCreateWithoutStock_roomsInput, phase1_boxesUncheckedCreateWithoutStock_roomsInput>
  }

  export type phase1_boxesUpdateWithWhereUniqueWithoutStock_roomsInput = {
    where: phase1_boxesWhereUniqueInput
    data: XOR<phase1_boxesUpdateWithoutStock_roomsInput, phase1_boxesUncheckedUpdateWithoutStock_roomsInput>
  }

  export type phase1_boxesUpdateManyWithWhereWithoutStock_roomsInput = {
    where: phase1_boxesScalarWhereInput
    data: XOR<phase1_boxesUpdateManyMutationInput, phase1_boxesUncheckedUpdateManyWithoutStock_roomsInput>
  }

  export type phase2_box_workUpsertWithWhereUniqueWithoutStock_roomsInput = {
    where: phase2_box_workWhereUniqueInput
    update: XOR<phase2_box_workUpdateWithoutStock_roomsInput, phase2_box_workUncheckedUpdateWithoutStock_roomsInput>
    create: XOR<phase2_box_workCreateWithoutStock_roomsInput, phase2_box_workUncheckedCreateWithoutStock_roomsInput>
  }

  export type phase2_box_workUpdateWithWhereUniqueWithoutStock_roomsInput = {
    where: phase2_box_workWhereUniqueInput
    data: XOR<phase2_box_workUpdateWithoutStock_roomsInput, phase2_box_workUncheckedUpdateWithoutStock_roomsInput>
  }

  export type phase2_box_workUpdateManyWithWhereWithoutStock_roomsInput = {
    where: phase2_box_workScalarWhereInput
    data: XOR<phase2_box_workUpdateManyMutationInput, phase2_box_workUncheckedUpdateManyWithoutStock_roomsInput>
  }

  export type phase2_linesUpsertWithWhereUniqueWithoutStock_roomsInput = {
    where: phase2_linesWhereUniqueInput
    update: XOR<phase2_linesUpdateWithoutStock_roomsInput, phase2_linesUncheckedUpdateWithoutStock_roomsInput>
    create: XOR<phase2_linesCreateWithoutStock_roomsInput, phase2_linesUncheckedCreateWithoutStock_roomsInput>
  }

  export type phase2_linesUpdateWithWhereUniqueWithoutStock_roomsInput = {
    where: phase2_linesWhereUniqueInput
    data: XOR<phase2_linesUpdateWithoutStock_roomsInput, phase2_linesUncheckedUpdateWithoutStock_roomsInput>
  }

  export type phase2_linesUpdateManyWithWhereWithoutStock_roomsInput = {
    where: phase2_linesScalarWhereInput
    data: XOR<phase2_linesUpdateManyMutationInput, phase2_linesUncheckedUpdateManyWithoutStock_roomsInput>
  }

  export type report_roomsUpsertWithWhereUniqueWithoutStock_roomsInput = {
    where: report_roomsWhereUniqueInput
    update: XOR<report_roomsUpdateWithoutStock_roomsInput, report_roomsUncheckedUpdateWithoutStock_roomsInput>
    create: XOR<report_roomsCreateWithoutStock_roomsInput, report_roomsUncheckedCreateWithoutStock_roomsInput>
  }

  export type report_roomsUpdateWithWhereUniqueWithoutStock_roomsInput = {
    where: report_roomsWhereUniqueInput
    data: XOR<report_roomsUpdateWithoutStock_roomsInput, report_roomsUncheckedUpdateWithoutStock_roomsInput>
  }

  export type report_roomsUpdateManyWithWhereWithoutStock_roomsInput = {
    where: report_roomsScalarWhereInput
    data: XOR<report_roomsUpdateManyMutationInput, report_roomsUncheckedUpdateManyWithoutStock_roomsInput>
  }

  export type phase1_boxesCreateManyStock_reportsInput = {
    room_id: bigint | number
    box_id: string
    scan_count?: number
    status: string
  }

  export type phase2_box_workCreateManyStock_reportsInput = {
    room_id: bigint | number
    box_id: string
    assigned_to?: string | null
    status?: string
  }

  export type phase2_linesCreateManyStock_reportsInput = {
    room_id: bigint | number
    box_id: string
    sku: string
    qty: number
    id?: bigint | number
  }

  export type report_roomsCreateManyStock_reportsInput = {
    room_id: bigint | number
    phase1_owner?: string | null
    phase1_status?: string
    phase2_status?: string
  }

  export type phase1_boxesUpdateWithoutStock_reportsInput = {
    box_id?: StringFieldUpdateOperationsInput | string
    scan_count?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stock_rooms?: stock_roomsUpdateOneRequiredWithoutPhase1_boxesNestedInput
  }

  export type phase1_boxesUncheckedUpdateWithoutStock_reportsInput = {
    room_id?: BigIntFieldUpdateOperationsInput | bigint | number
    box_id?: StringFieldUpdateOperationsInput | string
    scan_count?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type phase1_boxesUncheckedUpdateManyWithoutStock_reportsInput = {
    room_id?: BigIntFieldUpdateOperationsInput | bigint | number
    box_id?: StringFieldUpdateOperationsInput | string
    scan_count?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type phase2_box_workUpdateWithoutStock_reportsInput = {
    box_id?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    stock_rooms?: stock_roomsUpdateOneRequiredWithoutPhase2_box_workNestedInput
  }

  export type phase2_box_workUncheckedUpdateWithoutStock_reportsInput = {
    room_id?: BigIntFieldUpdateOperationsInput | bigint | number
    box_id?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type phase2_box_workUncheckedUpdateManyWithoutStock_reportsInput = {
    room_id?: BigIntFieldUpdateOperationsInput | bigint | number
    box_id?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type phase2_linesUpdateWithoutStock_reportsInput = {
    box_id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    stock_rooms?: stock_roomsUpdateOneRequiredWithoutPhase2_linesNestedInput
  }

  export type phase2_linesUncheckedUpdateWithoutStock_reportsInput = {
    room_id?: BigIntFieldUpdateOperationsInput | bigint | number
    box_id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type phase2_linesUncheckedUpdateManyWithoutStock_reportsInput = {
    room_id?: BigIntFieldUpdateOperationsInput | bigint | number
    box_id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type report_roomsUpdateWithoutStock_reportsInput = {
    phase1_owner?: NullableStringFieldUpdateOperationsInput | string | null
    phase1_status?: StringFieldUpdateOperationsInput | string
    phase2_status?: StringFieldUpdateOperationsInput | string
    stock_rooms?: stock_roomsUpdateOneRequiredWithoutReport_roomsNestedInput
  }

  export type report_roomsUncheckedUpdateWithoutStock_reportsInput = {
    room_id?: BigIntFieldUpdateOperationsInput | bigint | number
    phase1_owner?: NullableStringFieldUpdateOperationsInput | string | null
    phase1_status?: StringFieldUpdateOperationsInput | string
    phase2_status?: StringFieldUpdateOperationsInput | string
  }

  export type report_roomsUncheckedUpdateManyWithoutStock_reportsInput = {
    room_id?: BigIntFieldUpdateOperationsInput | bigint | number
    phase1_owner?: NullableStringFieldUpdateOperationsInput | string | null
    phase1_status?: StringFieldUpdateOperationsInput | string
    phase2_status?: StringFieldUpdateOperationsInput | string
  }

  export type phase1_boxesCreateManyStock_roomsInput = {
    report_id: bigint | number
    box_id: string
    scan_count?: number
    status: string
  }

  export type phase2_box_workCreateManyStock_roomsInput = {
    report_id: bigint | number
    box_id: string
    assigned_to?: string | null
    status?: string
  }

  export type phase2_linesCreateManyStock_roomsInput = {
    report_id: bigint | number
    box_id: string
    sku: string
    qty: number
    id?: bigint | number
  }

  export type report_roomsCreateManyStock_roomsInput = {
    report_id: bigint | number
    phase1_owner?: string | null
    phase1_status?: string
    phase2_status?: string
  }

  export type phase1_boxesUpdateWithoutStock_roomsInput = {
    box_id?: StringFieldUpdateOperationsInput | string
    scan_count?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    stock_reports?: stock_reportsUpdateOneRequiredWithoutPhase1_boxesNestedInput
  }

  export type phase1_boxesUncheckedUpdateWithoutStock_roomsInput = {
    report_id?: BigIntFieldUpdateOperationsInput | bigint | number
    box_id?: StringFieldUpdateOperationsInput | string
    scan_count?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type phase1_boxesUncheckedUpdateManyWithoutStock_roomsInput = {
    report_id?: BigIntFieldUpdateOperationsInput | bigint | number
    box_id?: StringFieldUpdateOperationsInput | string
    scan_count?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
  }

  export type phase2_box_workUpdateWithoutStock_roomsInput = {
    box_id?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    stock_reports?: stock_reportsUpdateOneRequiredWithoutPhase2_box_workNestedInput
  }

  export type phase2_box_workUncheckedUpdateWithoutStock_roomsInput = {
    report_id?: BigIntFieldUpdateOperationsInput | bigint | number
    box_id?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type phase2_box_workUncheckedUpdateManyWithoutStock_roomsInput = {
    report_id?: BigIntFieldUpdateOperationsInput | bigint | number
    box_id?: StringFieldUpdateOperationsInput | string
    assigned_to?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
  }

  export type phase2_linesUpdateWithoutStock_roomsInput = {
    box_id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    stock_reports?: stock_reportsUpdateOneRequiredWithoutPhase2_linesNestedInput
  }

  export type phase2_linesUncheckedUpdateWithoutStock_roomsInput = {
    report_id?: BigIntFieldUpdateOperationsInput | bigint | number
    box_id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type phase2_linesUncheckedUpdateManyWithoutStock_roomsInput = {
    report_id?: BigIntFieldUpdateOperationsInput | bigint | number
    box_id?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    qty?: IntFieldUpdateOperationsInput | number
    id?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type report_roomsUpdateWithoutStock_roomsInput = {
    phase1_owner?: NullableStringFieldUpdateOperationsInput | string | null
    phase1_status?: StringFieldUpdateOperationsInput | string
    phase2_status?: StringFieldUpdateOperationsInput | string
    stock_reports?: stock_reportsUpdateOneRequiredWithoutReport_roomsNestedInput
  }

  export type report_roomsUncheckedUpdateWithoutStock_roomsInput = {
    report_id?: BigIntFieldUpdateOperationsInput | bigint | number
    phase1_owner?: NullableStringFieldUpdateOperationsInput | string | null
    phase1_status?: StringFieldUpdateOperationsInput | string
    phase2_status?: StringFieldUpdateOperationsInput | string
  }

  export type report_roomsUncheckedUpdateManyWithoutStock_roomsInput = {
    report_id?: BigIntFieldUpdateOperationsInput | bigint | number
    phase1_owner?: NullableStringFieldUpdateOperationsInput | string | null
    phase1_status?: StringFieldUpdateOperationsInput | string
    phase2_status?: StringFieldUpdateOperationsInput | string
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