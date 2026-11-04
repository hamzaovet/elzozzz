
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
 * Model GameScore
 * 
 */
export type GameScore = $Result.DefaultSelection<Prisma.$GameScorePayload>
/**
 * Model GoalRecord
 * 
 */
export type GoalRecord = $Result.DefaultSelection<Prisma.$GoalRecordPayload>
/**
 * Model MonsterTruck
 * 
 */
export type MonsterTruck = $Result.DefaultSelection<Prisma.$MonsterTruckPayload>
/**
 * Model SecretClubTrophy
 * 
 */
export type SecretClubTrophy = $Result.DefaultSelection<Prisma.$SecretClubTrophyPayload>
/**
 * Model VoiceChant
 * 
 */
export type VoiceChant = $Result.DefaultSelection<Prisma.$VoiceChantPayload>
/**
 * Model Settings
 * 
 */
export type Settings = $Result.DefaultSelection<Prisma.$SettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more GameScores
 * const gameScores = await prisma.gameScore.findMany()
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
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more GameScores
   * const gameScores = await prisma.gameScore.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.gameScore`: Exposes CRUD operations for the **GameScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameScores
    * const gameScores = await prisma.gameScore.findMany()
    * ```
    */
  get gameScore(): Prisma.GameScoreDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.goalRecord`: Exposes CRUD operations for the **GoalRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GoalRecords
    * const goalRecords = await prisma.goalRecord.findMany()
    * ```
    */
  get goalRecord(): Prisma.GoalRecordDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.monsterTruck`: Exposes CRUD operations for the **MonsterTruck** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MonsterTrucks
    * const monsterTrucks = await prisma.monsterTruck.findMany()
    * ```
    */
  get monsterTruck(): Prisma.MonsterTruckDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.secretClubTrophy`: Exposes CRUD operations for the **SecretClubTrophy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SecretClubTrophies
    * const secretClubTrophies = await prisma.secretClubTrophy.findMany()
    * ```
    */
  get secretClubTrophy(): Prisma.SecretClubTrophyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.voiceChant`: Exposes CRUD operations for the **VoiceChant** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VoiceChants
    * const voiceChants = await prisma.voiceChant.findMany()
    * ```
    */
  get voiceChant(): Prisma.VoiceChantDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.settings`: Exposes CRUD operations for the **Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Settings
    * const settings = await prisma.settings.findMany()
    * ```
    */
  get settings(): Prisma.SettingsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    GameScore: 'GameScore',
    GoalRecord: 'GoalRecord',
    MonsterTruck: 'MonsterTruck',
    SecretClubTrophy: 'SecretClubTrophy',
    VoiceChant: 'VoiceChant',
    Settings: 'Settings'
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
      modelProps: "gameScore" | "goalRecord" | "monsterTruck" | "secretClubTrophy" | "voiceChant" | "settings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      GameScore: {
        payload: Prisma.$GameScorePayload<ExtArgs>
        fields: Prisma.GameScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>
          }
          findFirst: {
            args: Prisma.GameScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>
          }
          findMany: {
            args: Prisma.GameScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>[]
          }
          create: {
            args: Prisma.GameScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>
          }
          createMany: {
            args: Prisma.GameScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GameScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>[]
          }
          delete: {
            args: Prisma.GameScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>
          }
          update: {
            args: Prisma.GameScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>
          }
          deleteMany: {
            args: Prisma.GameScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GameScoreUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>[]
          }
          upsert: {
            args: Prisma.GameScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameScorePayload>
          }
          aggregate: {
            args: Prisma.GameScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameScore>
          }
          groupBy: {
            args: Prisma.GameScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameScoreCountArgs<ExtArgs>
            result: $Utils.Optional<GameScoreCountAggregateOutputType> | number
          }
        }
      }
      GoalRecord: {
        payload: Prisma.$GoalRecordPayload<ExtArgs>
        fields: Prisma.GoalRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GoalRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GoalRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalRecordPayload>
          }
          findFirst: {
            args: Prisma.GoalRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GoalRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalRecordPayload>
          }
          findMany: {
            args: Prisma.GoalRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalRecordPayload>[]
          }
          create: {
            args: Prisma.GoalRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalRecordPayload>
          }
          createMany: {
            args: Prisma.GoalRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GoalRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalRecordPayload>[]
          }
          delete: {
            args: Prisma.GoalRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalRecordPayload>
          }
          update: {
            args: Prisma.GoalRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalRecordPayload>
          }
          deleteMany: {
            args: Prisma.GoalRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GoalRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GoalRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalRecordPayload>[]
          }
          upsert: {
            args: Prisma.GoalRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GoalRecordPayload>
          }
          aggregate: {
            args: Prisma.GoalRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGoalRecord>
          }
          groupBy: {
            args: Prisma.GoalRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<GoalRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.GoalRecordCountArgs<ExtArgs>
            result: $Utils.Optional<GoalRecordCountAggregateOutputType> | number
          }
        }
      }
      MonsterTruck: {
        payload: Prisma.$MonsterTruckPayload<ExtArgs>
        fields: Prisma.MonsterTruckFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MonsterTruckFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTruckPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MonsterTruckFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTruckPayload>
          }
          findFirst: {
            args: Prisma.MonsterTruckFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTruckPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MonsterTruckFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTruckPayload>
          }
          findMany: {
            args: Prisma.MonsterTruckFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTruckPayload>[]
          }
          create: {
            args: Prisma.MonsterTruckCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTruckPayload>
          }
          createMany: {
            args: Prisma.MonsterTruckCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MonsterTruckCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTruckPayload>[]
          }
          delete: {
            args: Prisma.MonsterTruckDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTruckPayload>
          }
          update: {
            args: Prisma.MonsterTruckUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTruckPayload>
          }
          deleteMany: {
            args: Prisma.MonsterTruckDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MonsterTruckUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MonsterTruckUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTruckPayload>[]
          }
          upsert: {
            args: Prisma.MonsterTruckUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MonsterTruckPayload>
          }
          aggregate: {
            args: Prisma.MonsterTruckAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMonsterTruck>
          }
          groupBy: {
            args: Prisma.MonsterTruckGroupByArgs<ExtArgs>
            result: $Utils.Optional<MonsterTruckGroupByOutputType>[]
          }
          count: {
            args: Prisma.MonsterTruckCountArgs<ExtArgs>
            result: $Utils.Optional<MonsterTruckCountAggregateOutputType> | number
          }
        }
      }
      SecretClubTrophy: {
        payload: Prisma.$SecretClubTrophyPayload<ExtArgs>
        fields: Prisma.SecretClubTrophyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SecretClubTrophyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubTrophyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SecretClubTrophyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubTrophyPayload>
          }
          findFirst: {
            args: Prisma.SecretClubTrophyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubTrophyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SecretClubTrophyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubTrophyPayload>
          }
          findMany: {
            args: Prisma.SecretClubTrophyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubTrophyPayload>[]
          }
          create: {
            args: Prisma.SecretClubTrophyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubTrophyPayload>
          }
          createMany: {
            args: Prisma.SecretClubTrophyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SecretClubTrophyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubTrophyPayload>[]
          }
          delete: {
            args: Prisma.SecretClubTrophyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubTrophyPayload>
          }
          update: {
            args: Prisma.SecretClubTrophyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubTrophyPayload>
          }
          deleteMany: {
            args: Prisma.SecretClubTrophyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SecretClubTrophyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SecretClubTrophyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubTrophyPayload>[]
          }
          upsert: {
            args: Prisma.SecretClubTrophyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SecretClubTrophyPayload>
          }
          aggregate: {
            args: Prisma.SecretClubTrophyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSecretClubTrophy>
          }
          groupBy: {
            args: Prisma.SecretClubTrophyGroupByArgs<ExtArgs>
            result: $Utils.Optional<SecretClubTrophyGroupByOutputType>[]
          }
          count: {
            args: Prisma.SecretClubTrophyCountArgs<ExtArgs>
            result: $Utils.Optional<SecretClubTrophyCountAggregateOutputType> | number
          }
        }
      }
      VoiceChant: {
        payload: Prisma.$VoiceChantPayload<ExtArgs>
        fields: Prisma.VoiceChantFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VoiceChantFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceChantPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VoiceChantFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceChantPayload>
          }
          findFirst: {
            args: Prisma.VoiceChantFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceChantPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VoiceChantFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceChantPayload>
          }
          findMany: {
            args: Prisma.VoiceChantFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceChantPayload>[]
          }
          create: {
            args: Prisma.VoiceChantCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceChantPayload>
          }
          createMany: {
            args: Prisma.VoiceChantCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VoiceChantCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceChantPayload>[]
          }
          delete: {
            args: Prisma.VoiceChantDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceChantPayload>
          }
          update: {
            args: Prisma.VoiceChantUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceChantPayload>
          }
          deleteMany: {
            args: Prisma.VoiceChantDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VoiceChantUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VoiceChantUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceChantPayload>[]
          }
          upsert: {
            args: Prisma.VoiceChantUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VoiceChantPayload>
          }
          aggregate: {
            args: Prisma.VoiceChantAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVoiceChant>
          }
          groupBy: {
            args: Prisma.VoiceChantGroupByArgs<ExtArgs>
            result: $Utils.Optional<VoiceChantGroupByOutputType>[]
          }
          count: {
            args: Prisma.VoiceChantCountArgs<ExtArgs>
            result: $Utils.Optional<VoiceChantCountAggregateOutputType> | number
          }
        }
      }
      Settings: {
        payload: Prisma.$SettingsPayload<ExtArgs>
        fields: Prisma.SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findFirst: {
            args: Prisma.SettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          findMany: {
            args: Prisma.SettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          create: {
            args: Prisma.SettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          createMany: {
            args: Prisma.SettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          delete: {
            args: Prisma.SettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          update: {
            args: Prisma.SettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          deleteMany: {
            args: Prisma.SettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>[]
          }
          upsert: {
            args: Prisma.SettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SettingsPayload>
          }
          aggregate: {
            args: Prisma.SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSettings>
          }
          groupBy: {
            args: Prisma.SettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SettingsCountArgs<ExtArgs>
            result: $Utils.Optional<SettingsCountAggregateOutputType> | number
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
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
    gameScore?: GameScoreOmit
    goalRecord?: GoalRecordOmit
    monsterTruck?: MonsterTruckOmit
    secretClubTrophy?: SecretClubTrophyOmit
    voiceChant?: VoiceChantOmit
    settings?: SettingsOmit
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
   * Model GameScore
   */

  export type AggregateGameScore = {
    _count: GameScoreCountAggregateOutputType | null
    _avg: GameScoreAvgAggregateOutputType | null
    _sum: GameScoreSumAggregateOutputType | null
    _min: GameScoreMinAggregateOutputType | null
    _max: GameScoreMaxAggregateOutputType | null
  }

  export type GameScoreAvgAggregateOutputType = {
    score: number | null
    stars: number | null
    level: number | null
  }

  export type GameScoreSumAggregateOutputType = {
    score: number | null
    stars: number | null
    level: number | null
  }

  export type GameScoreMinAggregateOutputType = {
    id: string | null
    playerName: string | null
    gameType: string | null
    score: number | null
    stars: number | null
    level: number | null
    details: string | null
    createdAt: Date | null
  }

  export type GameScoreMaxAggregateOutputType = {
    id: string | null
    playerName: string | null
    gameType: string | null
    score: number | null
    stars: number | null
    level: number | null
    details: string | null
    createdAt: Date | null
  }

  export type GameScoreCountAggregateOutputType = {
    id: number
    playerName: number
    gameType: number
    score: number
    stars: number
    level: number
    details: number
    createdAt: number
    _all: number
  }


  export type GameScoreAvgAggregateInputType = {
    score?: true
    stars?: true
    level?: true
  }

  export type GameScoreSumAggregateInputType = {
    score?: true
    stars?: true
    level?: true
  }

  export type GameScoreMinAggregateInputType = {
    id?: true
    playerName?: true
    gameType?: true
    score?: true
    stars?: true
    level?: true
    details?: true
    createdAt?: true
  }

  export type GameScoreMaxAggregateInputType = {
    id?: true
    playerName?: true
    gameType?: true
    score?: true
    stars?: true
    level?: true
    details?: true
    createdAt?: true
  }

  export type GameScoreCountAggregateInputType = {
    id?: true
    playerName?: true
    gameType?: true
    score?: true
    stars?: true
    level?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type GameScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameScore to aggregate.
     */
    where?: GameScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameScores to fetch.
     */
    orderBy?: GameScoreOrderByWithRelationInput | GameScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameScores
    **/
    _count?: true | GameScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameScoreMaxAggregateInputType
  }

  export type GetGameScoreAggregateType<T extends GameScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateGameScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameScore[P]>
      : GetScalarType<T[P], AggregateGameScore[P]>
  }




  export type GameScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameScoreWhereInput
    orderBy?: GameScoreOrderByWithAggregationInput | GameScoreOrderByWithAggregationInput[]
    by: GameScoreScalarFieldEnum[] | GameScoreScalarFieldEnum
    having?: GameScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameScoreCountAggregateInputType | true
    _avg?: GameScoreAvgAggregateInputType
    _sum?: GameScoreSumAggregateInputType
    _min?: GameScoreMinAggregateInputType
    _max?: GameScoreMaxAggregateInputType
  }

  export type GameScoreGroupByOutputType = {
    id: string
    playerName: string
    gameType: string
    score: number
    stars: number
    level: number
    details: string | null
    createdAt: Date
    _count: GameScoreCountAggregateOutputType | null
    _avg: GameScoreAvgAggregateOutputType | null
    _sum: GameScoreSumAggregateOutputType | null
    _min: GameScoreMinAggregateOutputType | null
    _max: GameScoreMaxAggregateOutputType | null
  }

  type GetGameScoreGroupByPayload<T extends GameScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameScoreGroupByOutputType[P]>
            : GetScalarType<T[P], GameScoreGroupByOutputType[P]>
        }
      >
    >


  export type GameScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerName?: boolean
    gameType?: boolean
    score?: boolean
    stars?: boolean
    level?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["gameScore"]>

  export type GameScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerName?: boolean
    gameType?: boolean
    score?: boolean
    stars?: boolean
    level?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["gameScore"]>

  export type GameScoreSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playerName?: boolean
    gameType?: boolean
    score?: boolean
    stars?: boolean
    level?: boolean
    details?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["gameScore"]>

  export type GameScoreSelectScalar = {
    id?: boolean
    playerName?: boolean
    gameType?: boolean
    score?: boolean
    stars?: boolean
    level?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type GameScoreOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "playerName" | "gameType" | "score" | "stars" | "level" | "details" | "createdAt", ExtArgs["result"]["gameScore"]>

  export type $GameScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameScore"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playerName: string
      gameType: string
      score: number
      stars: number
      level: number
      details: string | null
      createdAt: Date
    }, ExtArgs["result"]["gameScore"]>
    composites: {}
  }

  type GameScoreGetPayload<S extends boolean | null | undefined | GameScoreDefaultArgs> = $Result.GetResult<Prisma.$GameScorePayload, S>

  type GameScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameScoreFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameScoreCountAggregateInputType | true
    }

  export interface GameScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameScore'], meta: { name: 'GameScore' } }
    /**
     * Find zero or one GameScore that matches the filter.
     * @param {GameScoreFindUniqueArgs} args - Arguments to find a GameScore
     * @example
     * // Get one GameScore
     * const gameScore = await prisma.gameScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameScoreFindUniqueArgs>(args: SelectSubset<T, GameScoreFindUniqueArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameScore that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameScoreFindUniqueOrThrowArgs} args - Arguments to find a GameScore
     * @example
     * // Get one GameScore
     * const gameScore = await prisma.gameScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, GameScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoreFindFirstArgs} args - Arguments to find a GameScore
     * @example
     * // Get one GameScore
     * const gameScore = await prisma.gameScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameScoreFindFirstArgs>(args?: SelectSubset<T, GameScoreFindFirstArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoreFindFirstOrThrowArgs} args - Arguments to find a GameScore
     * @example
     * // Get one GameScore
     * const gameScore = await prisma.gameScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, GameScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameScores
     * const gameScores = await prisma.gameScore.findMany()
     * 
     * // Get first 10 GameScores
     * const gameScores = await prisma.gameScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameScoreWithIdOnly = await prisma.gameScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameScoreFindManyArgs>(args?: SelectSubset<T, GameScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameScore.
     * @param {GameScoreCreateArgs} args - Arguments to create a GameScore.
     * @example
     * // Create one GameScore
     * const GameScore = await prisma.gameScore.create({
     *   data: {
     *     // ... data to create a GameScore
     *   }
     * })
     * 
     */
    create<T extends GameScoreCreateArgs>(args: SelectSubset<T, GameScoreCreateArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameScores.
     * @param {GameScoreCreateManyArgs} args - Arguments to create many GameScores.
     * @example
     * // Create many GameScores
     * const gameScore = await prisma.gameScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameScoreCreateManyArgs>(args?: SelectSubset<T, GameScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GameScores and returns the data saved in the database.
     * @param {GameScoreCreateManyAndReturnArgs} args - Arguments to create many GameScores.
     * @example
     * // Create many GameScores
     * const gameScore = await prisma.gameScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GameScores and only return the `id`
     * const gameScoreWithIdOnly = await prisma.gameScore.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GameScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, GameScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GameScore.
     * @param {GameScoreDeleteArgs} args - Arguments to delete one GameScore.
     * @example
     * // Delete one GameScore
     * const GameScore = await prisma.gameScore.delete({
     *   where: {
     *     // ... filter to delete one GameScore
     *   }
     * })
     * 
     */
    delete<T extends GameScoreDeleteArgs>(args: SelectSubset<T, GameScoreDeleteArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameScore.
     * @param {GameScoreUpdateArgs} args - Arguments to update one GameScore.
     * @example
     * // Update one GameScore
     * const gameScore = await prisma.gameScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameScoreUpdateArgs>(args: SelectSubset<T, GameScoreUpdateArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameScores.
     * @param {GameScoreDeleteManyArgs} args - Arguments to filter GameScores to delete.
     * @example
     * // Delete a few GameScores
     * const { count } = await prisma.gameScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameScoreDeleteManyArgs>(args?: SelectSubset<T, GameScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameScores
     * const gameScore = await prisma.gameScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameScoreUpdateManyArgs>(args: SelectSubset<T, GameScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameScores and returns the data updated in the database.
     * @param {GameScoreUpdateManyAndReturnArgs} args - Arguments to update many GameScores.
     * @example
     * // Update many GameScores
     * const gameScore = await prisma.gameScore.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GameScores and only return the `id`
     * const gameScoreWithIdOnly = await prisma.gameScore.updateManyAndReturn({
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
    updateManyAndReturn<T extends GameScoreUpdateManyAndReturnArgs>(args: SelectSubset<T, GameScoreUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GameScore.
     * @param {GameScoreUpsertArgs} args - Arguments to update or create a GameScore.
     * @example
     * // Update or create a GameScore
     * const gameScore = await prisma.gameScore.upsert({
     *   create: {
     *     // ... data to create a GameScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameScore we want to update
     *   }
     * })
     */
    upsert<T extends GameScoreUpsertArgs>(args: SelectSubset<T, GameScoreUpsertArgs<ExtArgs>>): Prisma__GameScoreClient<$Result.GetResult<Prisma.$GameScorePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoreCountArgs} args - Arguments to filter GameScores to count.
     * @example
     * // Count the number of GameScores
     * const count = await prisma.gameScore.count({
     *   where: {
     *     // ... the filter for the GameScores we want to count
     *   }
     * })
    **/
    count<T extends GameScoreCountArgs>(
      args?: Subset<T, GameScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GameScoreAggregateArgs>(args: Subset<T, GameScoreAggregateArgs>): Prisma.PrismaPromise<GetGameScoreAggregateType<T>>

    /**
     * Group by GameScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameScoreGroupByArgs} args - Group by arguments.
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
      T extends GameScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameScoreGroupByArgs['orderBy'] }
        : { orderBy?: GameScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GameScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameScore model
   */
  readonly fields: GameScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GameScore model
   */
  interface GameScoreFieldRefs {
    readonly id: FieldRef<"GameScore", 'String'>
    readonly playerName: FieldRef<"GameScore", 'String'>
    readonly gameType: FieldRef<"GameScore", 'String'>
    readonly score: FieldRef<"GameScore", 'Int'>
    readonly stars: FieldRef<"GameScore", 'Int'>
    readonly level: FieldRef<"GameScore", 'Int'>
    readonly details: FieldRef<"GameScore", 'String'>
    readonly createdAt: FieldRef<"GameScore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameScore findUnique
   */
  export type GameScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Filter, which GameScore to fetch.
     */
    where: GameScoreWhereUniqueInput
  }

  /**
   * GameScore findUniqueOrThrow
   */
  export type GameScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Filter, which GameScore to fetch.
     */
    where: GameScoreWhereUniqueInput
  }

  /**
   * GameScore findFirst
   */
  export type GameScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Filter, which GameScore to fetch.
     */
    where?: GameScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameScores to fetch.
     */
    orderBy?: GameScoreOrderByWithRelationInput | GameScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameScores.
     */
    cursor?: GameScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameScores.
     */
    distinct?: GameScoreScalarFieldEnum | GameScoreScalarFieldEnum[]
  }

  /**
   * GameScore findFirstOrThrow
   */
  export type GameScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Filter, which GameScore to fetch.
     */
    where?: GameScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameScores to fetch.
     */
    orderBy?: GameScoreOrderByWithRelationInput | GameScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameScores.
     */
    cursor?: GameScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameScores.
     */
    distinct?: GameScoreScalarFieldEnum | GameScoreScalarFieldEnum[]
  }

  /**
   * GameScore findMany
   */
  export type GameScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Filter, which GameScores to fetch.
     */
    where?: GameScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameScores to fetch.
     */
    orderBy?: GameScoreOrderByWithRelationInput | GameScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameScores.
     */
    cursor?: GameScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameScores.
     */
    distinct?: GameScoreScalarFieldEnum | GameScoreScalarFieldEnum[]
  }

  /**
   * GameScore create
   */
  export type GameScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * The data needed to create a GameScore.
     */
    data: XOR<GameScoreCreateInput, GameScoreUncheckedCreateInput>
  }

  /**
   * GameScore createMany
   */
  export type GameScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameScores.
     */
    data: GameScoreCreateManyInput | GameScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameScore createManyAndReturn
   */
  export type GameScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * The data used to create many GameScores.
     */
    data: GameScoreCreateManyInput | GameScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameScore update
   */
  export type GameScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * The data needed to update a GameScore.
     */
    data: XOR<GameScoreUpdateInput, GameScoreUncheckedUpdateInput>
    /**
     * Choose, which GameScore to update.
     */
    where: GameScoreWhereUniqueInput
  }

  /**
   * GameScore updateMany
   */
  export type GameScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameScores.
     */
    data: XOR<GameScoreUpdateManyMutationInput, GameScoreUncheckedUpdateManyInput>
    /**
     * Filter which GameScores to update
     */
    where?: GameScoreWhereInput
    /**
     * Limit how many GameScores to update.
     */
    limit?: number
  }

  /**
   * GameScore updateManyAndReturn
   */
  export type GameScoreUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * The data used to update GameScores.
     */
    data: XOR<GameScoreUpdateManyMutationInput, GameScoreUncheckedUpdateManyInput>
    /**
     * Filter which GameScores to update
     */
    where?: GameScoreWhereInput
    /**
     * Limit how many GameScores to update.
     */
    limit?: number
  }

  /**
   * GameScore upsert
   */
  export type GameScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * The filter to search for the GameScore to update in case it exists.
     */
    where: GameScoreWhereUniqueInput
    /**
     * In case the GameScore found by the `where` argument doesn't exist, create a new GameScore with this data.
     */
    create: XOR<GameScoreCreateInput, GameScoreUncheckedCreateInput>
    /**
     * In case the GameScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameScoreUpdateInput, GameScoreUncheckedUpdateInput>
  }

  /**
   * GameScore delete
   */
  export type GameScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
    /**
     * Filter which GameScore to delete.
     */
    where: GameScoreWhereUniqueInput
  }

  /**
   * GameScore deleteMany
   */
  export type GameScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameScores to delete
     */
    where?: GameScoreWhereInput
    /**
     * Limit how many GameScores to delete.
     */
    limit?: number
  }

  /**
   * GameScore without action
   */
  export type GameScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameScore
     */
    select?: GameScoreSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameScore
     */
    omit?: GameScoreOmit<ExtArgs> | null
  }


  /**
   * Model GoalRecord
   */

  export type AggregateGoalRecord = {
    _count: GoalRecordCountAggregateOutputType | null
    _avg: GoalRecordAvgAggregateOutputType | null
    _sum: GoalRecordSumAggregateOutputType | null
    _min: GoalRecordMinAggregateOutputType | null
    _max: GoalRecordMaxAggregateOutputType | null
  }

  export type GoalRecordAvgAggregateOutputType = {
    speedKmh: number | null
  }

  export type GoalRecordSumAggregateOutputType = {
    speedKmh: number | null
  }

  export type GoalRecordMinAggregateOutputType = {
    id: string | null
    strikerName: string | null
    goalType: string | null
    speedKmh: number | null
    stadium: string | null
    createdAt: Date | null
  }

  export type GoalRecordMaxAggregateOutputType = {
    id: string | null
    strikerName: string | null
    goalType: string | null
    speedKmh: number | null
    stadium: string | null
    createdAt: Date | null
  }

  export type GoalRecordCountAggregateOutputType = {
    id: number
    strikerName: number
    goalType: number
    speedKmh: number
    stadium: number
    createdAt: number
    _all: number
  }


  export type GoalRecordAvgAggregateInputType = {
    speedKmh?: true
  }

  export type GoalRecordSumAggregateInputType = {
    speedKmh?: true
  }

  export type GoalRecordMinAggregateInputType = {
    id?: true
    strikerName?: true
    goalType?: true
    speedKmh?: true
    stadium?: true
    createdAt?: true
  }

  export type GoalRecordMaxAggregateInputType = {
    id?: true
    strikerName?: true
    goalType?: true
    speedKmh?: true
    stadium?: true
    createdAt?: true
  }

  export type GoalRecordCountAggregateInputType = {
    id?: true
    strikerName?: true
    goalType?: true
    speedKmh?: true
    stadium?: true
    createdAt?: true
    _all?: true
  }

  export type GoalRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoalRecord to aggregate.
     */
    where?: GoalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoalRecords to fetch.
     */
    orderBy?: GoalRecordOrderByWithRelationInput | GoalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GoalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GoalRecords
    **/
    _count?: true | GoalRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GoalRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GoalRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GoalRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GoalRecordMaxAggregateInputType
  }

  export type GetGoalRecordAggregateType<T extends GoalRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateGoalRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGoalRecord[P]>
      : GetScalarType<T[P], AggregateGoalRecord[P]>
  }




  export type GoalRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GoalRecordWhereInput
    orderBy?: GoalRecordOrderByWithAggregationInput | GoalRecordOrderByWithAggregationInput[]
    by: GoalRecordScalarFieldEnum[] | GoalRecordScalarFieldEnum
    having?: GoalRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GoalRecordCountAggregateInputType | true
    _avg?: GoalRecordAvgAggregateInputType
    _sum?: GoalRecordSumAggregateInputType
    _min?: GoalRecordMinAggregateInputType
    _max?: GoalRecordMaxAggregateInputType
  }

  export type GoalRecordGroupByOutputType = {
    id: string
    strikerName: string
    goalType: string
    speedKmh: number
    stadium: string
    createdAt: Date
    _count: GoalRecordCountAggregateOutputType | null
    _avg: GoalRecordAvgAggregateOutputType | null
    _sum: GoalRecordSumAggregateOutputType | null
    _min: GoalRecordMinAggregateOutputType | null
    _max: GoalRecordMaxAggregateOutputType | null
  }

  type GetGoalRecordGroupByPayload<T extends GoalRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GoalRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GoalRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GoalRecordGroupByOutputType[P]>
            : GetScalarType<T[P], GoalRecordGroupByOutputType[P]>
        }
      >
    >


  export type GoalRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    strikerName?: boolean
    goalType?: boolean
    speedKmh?: boolean
    stadium?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["goalRecord"]>

  export type GoalRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    strikerName?: boolean
    goalType?: boolean
    speedKmh?: boolean
    stadium?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["goalRecord"]>

  export type GoalRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    strikerName?: boolean
    goalType?: boolean
    speedKmh?: boolean
    stadium?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["goalRecord"]>

  export type GoalRecordSelectScalar = {
    id?: boolean
    strikerName?: boolean
    goalType?: boolean
    speedKmh?: boolean
    stadium?: boolean
    createdAt?: boolean
  }

  export type GoalRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "strikerName" | "goalType" | "speedKmh" | "stadium" | "createdAt", ExtArgs["result"]["goalRecord"]>

  export type $GoalRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GoalRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      strikerName: string
      goalType: string
      speedKmh: number
      stadium: string
      createdAt: Date
    }, ExtArgs["result"]["goalRecord"]>
    composites: {}
  }

  type GoalRecordGetPayload<S extends boolean | null | undefined | GoalRecordDefaultArgs> = $Result.GetResult<Prisma.$GoalRecordPayload, S>

  type GoalRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GoalRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GoalRecordCountAggregateInputType | true
    }

  export interface GoalRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GoalRecord'], meta: { name: 'GoalRecord' } }
    /**
     * Find zero or one GoalRecord that matches the filter.
     * @param {GoalRecordFindUniqueArgs} args - Arguments to find a GoalRecord
     * @example
     * // Get one GoalRecord
     * const goalRecord = await prisma.goalRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GoalRecordFindUniqueArgs>(args: SelectSubset<T, GoalRecordFindUniqueArgs<ExtArgs>>): Prisma__GoalRecordClient<$Result.GetResult<Prisma.$GoalRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GoalRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GoalRecordFindUniqueOrThrowArgs} args - Arguments to find a GoalRecord
     * @example
     * // Get one GoalRecord
     * const goalRecord = await prisma.goalRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GoalRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, GoalRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GoalRecordClient<$Result.GetResult<Prisma.$GoalRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoalRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalRecordFindFirstArgs} args - Arguments to find a GoalRecord
     * @example
     * // Get one GoalRecord
     * const goalRecord = await prisma.goalRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GoalRecordFindFirstArgs>(args?: SelectSubset<T, GoalRecordFindFirstArgs<ExtArgs>>): Prisma__GoalRecordClient<$Result.GetResult<Prisma.$GoalRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GoalRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalRecordFindFirstOrThrowArgs} args - Arguments to find a GoalRecord
     * @example
     * // Get one GoalRecord
     * const goalRecord = await prisma.goalRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GoalRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, GoalRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__GoalRecordClient<$Result.GetResult<Prisma.$GoalRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GoalRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GoalRecords
     * const goalRecords = await prisma.goalRecord.findMany()
     * 
     * // Get first 10 GoalRecords
     * const goalRecords = await prisma.goalRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const goalRecordWithIdOnly = await prisma.goalRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GoalRecordFindManyArgs>(args?: SelectSubset<T, GoalRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GoalRecord.
     * @param {GoalRecordCreateArgs} args - Arguments to create a GoalRecord.
     * @example
     * // Create one GoalRecord
     * const GoalRecord = await prisma.goalRecord.create({
     *   data: {
     *     // ... data to create a GoalRecord
     *   }
     * })
     * 
     */
    create<T extends GoalRecordCreateArgs>(args: SelectSubset<T, GoalRecordCreateArgs<ExtArgs>>): Prisma__GoalRecordClient<$Result.GetResult<Prisma.$GoalRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GoalRecords.
     * @param {GoalRecordCreateManyArgs} args - Arguments to create many GoalRecords.
     * @example
     * // Create many GoalRecords
     * const goalRecord = await prisma.goalRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GoalRecordCreateManyArgs>(args?: SelectSubset<T, GoalRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GoalRecords and returns the data saved in the database.
     * @param {GoalRecordCreateManyAndReturnArgs} args - Arguments to create many GoalRecords.
     * @example
     * // Create many GoalRecords
     * const goalRecord = await prisma.goalRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GoalRecords and only return the `id`
     * const goalRecordWithIdOnly = await prisma.goalRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GoalRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, GoalRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GoalRecord.
     * @param {GoalRecordDeleteArgs} args - Arguments to delete one GoalRecord.
     * @example
     * // Delete one GoalRecord
     * const GoalRecord = await prisma.goalRecord.delete({
     *   where: {
     *     // ... filter to delete one GoalRecord
     *   }
     * })
     * 
     */
    delete<T extends GoalRecordDeleteArgs>(args: SelectSubset<T, GoalRecordDeleteArgs<ExtArgs>>): Prisma__GoalRecordClient<$Result.GetResult<Prisma.$GoalRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GoalRecord.
     * @param {GoalRecordUpdateArgs} args - Arguments to update one GoalRecord.
     * @example
     * // Update one GoalRecord
     * const goalRecord = await prisma.goalRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GoalRecordUpdateArgs>(args: SelectSubset<T, GoalRecordUpdateArgs<ExtArgs>>): Prisma__GoalRecordClient<$Result.GetResult<Prisma.$GoalRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GoalRecords.
     * @param {GoalRecordDeleteManyArgs} args - Arguments to filter GoalRecords to delete.
     * @example
     * // Delete a few GoalRecords
     * const { count } = await prisma.goalRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GoalRecordDeleteManyArgs>(args?: SelectSubset<T, GoalRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GoalRecords
     * const goalRecord = await prisma.goalRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GoalRecordUpdateManyArgs>(args: SelectSubset<T, GoalRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GoalRecords and returns the data updated in the database.
     * @param {GoalRecordUpdateManyAndReturnArgs} args - Arguments to update many GoalRecords.
     * @example
     * // Update many GoalRecords
     * const goalRecord = await prisma.goalRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GoalRecords and only return the `id`
     * const goalRecordWithIdOnly = await prisma.goalRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends GoalRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, GoalRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GoalRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GoalRecord.
     * @param {GoalRecordUpsertArgs} args - Arguments to update or create a GoalRecord.
     * @example
     * // Update or create a GoalRecord
     * const goalRecord = await prisma.goalRecord.upsert({
     *   create: {
     *     // ... data to create a GoalRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GoalRecord we want to update
     *   }
     * })
     */
    upsert<T extends GoalRecordUpsertArgs>(args: SelectSubset<T, GoalRecordUpsertArgs<ExtArgs>>): Prisma__GoalRecordClient<$Result.GetResult<Prisma.$GoalRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GoalRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalRecordCountArgs} args - Arguments to filter GoalRecords to count.
     * @example
     * // Count the number of GoalRecords
     * const count = await prisma.goalRecord.count({
     *   where: {
     *     // ... the filter for the GoalRecords we want to count
     *   }
     * })
    **/
    count<T extends GoalRecordCountArgs>(
      args?: Subset<T, GoalRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GoalRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GoalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GoalRecordAggregateArgs>(args: Subset<T, GoalRecordAggregateArgs>): Prisma.PrismaPromise<GetGoalRecordAggregateType<T>>

    /**
     * Group by GoalRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GoalRecordGroupByArgs} args - Group by arguments.
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
      T extends GoalRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GoalRecordGroupByArgs['orderBy'] }
        : { orderBy?: GoalRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GoalRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGoalRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GoalRecord model
   */
  readonly fields: GoalRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GoalRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GoalRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the GoalRecord model
   */
  interface GoalRecordFieldRefs {
    readonly id: FieldRef<"GoalRecord", 'String'>
    readonly strikerName: FieldRef<"GoalRecord", 'String'>
    readonly goalType: FieldRef<"GoalRecord", 'String'>
    readonly speedKmh: FieldRef<"GoalRecord", 'Int'>
    readonly stadium: FieldRef<"GoalRecord", 'String'>
    readonly createdAt: FieldRef<"GoalRecord", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GoalRecord findUnique
   */
  export type GoalRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalRecord
     */
    select?: GoalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalRecord
     */
    omit?: GoalRecordOmit<ExtArgs> | null
    /**
     * Filter, which GoalRecord to fetch.
     */
    where: GoalRecordWhereUniqueInput
  }

  /**
   * GoalRecord findUniqueOrThrow
   */
  export type GoalRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalRecord
     */
    select?: GoalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalRecord
     */
    omit?: GoalRecordOmit<ExtArgs> | null
    /**
     * Filter, which GoalRecord to fetch.
     */
    where: GoalRecordWhereUniqueInput
  }

  /**
   * GoalRecord findFirst
   */
  export type GoalRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalRecord
     */
    select?: GoalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalRecord
     */
    omit?: GoalRecordOmit<ExtArgs> | null
    /**
     * Filter, which GoalRecord to fetch.
     */
    where?: GoalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoalRecords to fetch.
     */
    orderBy?: GoalRecordOrderByWithRelationInput | GoalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoalRecords.
     */
    cursor?: GoalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoalRecords.
     */
    distinct?: GoalRecordScalarFieldEnum | GoalRecordScalarFieldEnum[]
  }

  /**
   * GoalRecord findFirstOrThrow
   */
  export type GoalRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalRecord
     */
    select?: GoalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalRecord
     */
    omit?: GoalRecordOmit<ExtArgs> | null
    /**
     * Filter, which GoalRecord to fetch.
     */
    where?: GoalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoalRecords to fetch.
     */
    orderBy?: GoalRecordOrderByWithRelationInput | GoalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GoalRecords.
     */
    cursor?: GoalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoalRecords.
     */
    distinct?: GoalRecordScalarFieldEnum | GoalRecordScalarFieldEnum[]
  }

  /**
   * GoalRecord findMany
   */
  export type GoalRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalRecord
     */
    select?: GoalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalRecord
     */
    omit?: GoalRecordOmit<ExtArgs> | null
    /**
     * Filter, which GoalRecords to fetch.
     */
    where?: GoalRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GoalRecords to fetch.
     */
    orderBy?: GoalRecordOrderByWithRelationInput | GoalRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GoalRecords.
     */
    cursor?: GoalRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GoalRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GoalRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GoalRecords.
     */
    distinct?: GoalRecordScalarFieldEnum | GoalRecordScalarFieldEnum[]
  }

  /**
   * GoalRecord create
   */
  export type GoalRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalRecord
     */
    select?: GoalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalRecord
     */
    omit?: GoalRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a GoalRecord.
     */
    data?: XOR<GoalRecordCreateInput, GoalRecordUncheckedCreateInput>
  }

  /**
   * GoalRecord createMany
   */
  export type GoalRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GoalRecords.
     */
    data: GoalRecordCreateManyInput | GoalRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GoalRecord createManyAndReturn
   */
  export type GoalRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalRecord
     */
    select?: GoalRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoalRecord
     */
    omit?: GoalRecordOmit<ExtArgs> | null
    /**
     * The data used to create many GoalRecords.
     */
    data: GoalRecordCreateManyInput | GoalRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GoalRecord update
   */
  export type GoalRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalRecord
     */
    select?: GoalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalRecord
     */
    omit?: GoalRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a GoalRecord.
     */
    data: XOR<GoalRecordUpdateInput, GoalRecordUncheckedUpdateInput>
    /**
     * Choose, which GoalRecord to update.
     */
    where: GoalRecordWhereUniqueInput
  }

  /**
   * GoalRecord updateMany
   */
  export type GoalRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GoalRecords.
     */
    data: XOR<GoalRecordUpdateManyMutationInput, GoalRecordUncheckedUpdateManyInput>
    /**
     * Filter which GoalRecords to update
     */
    where?: GoalRecordWhereInput
    /**
     * Limit how many GoalRecords to update.
     */
    limit?: number
  }

  /**
   * GoalRecord updateManyAndReturn
   */
  export type GoalRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalRecord
     */
    select?: GoalRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GoalRecord
     */
    omit?: GoalRecordOmit<ExtArgs> | null
    /**
     * The data used to update GoalRecords.
     */
    data: XOR<GoalRecordUpdateManyMutationInput, GoalRecordUncheckedUpdateManyInput>
    /**
     * Filter which GoalRecords to update
     */
    where?: GoalRecordWhereInput
    /**
     * Limit how many GoalRecords to update.
     */
    limit?: number
  }

  /**
   * GoalRecord upsert
   */
  export type GoalRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalRecord
     */
    select?: GoalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalRecord
     */
    omit?: GoalRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the GoalRecord to update in case it exists.
     */
    where: GoalRecordWhereUniqueInput
    /**
     * In case the GoalRecord found by the `where` argument doesn't exist, create a new GoalRecord with this data.
     */
    create: XOR<GoalRecordCreateInput, GoalRecordUncheckedCreateInput>
    /**
     * In case the GoalRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GoalRecordUpdateInput, GoalRecordUncheckedUpdateInput>
  }

  /**
   * GoalRecord delete
   */
  export type GoalRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalRecord
     */
    select?: GoalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalRecord
     */
    omit?: GoalRecordOmit<ExtArgs> | null
    /**
     * Filter which GoalRecord to delete.
     */
    where: GoalRecordWhereUniqueInput
  }

  /**
   * GoalRecord deleteMany
   */
  export type GoalRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GoalRecords to delete
     */
    where?: GoalRecordWhereInput
    /**
     * Limit how many GoalRecords to delete.
     */
    limit?: number
  }

  /**
   * GoalRecord without action
   */
  export type GoalRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GoalRecord
     */
    select?: GoalRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GoalRecord
     */
    omit?: GoalRecordOmit<ExtArgs> | null
  }


  /**
   * Model MonsterTruck
   */

  export type AggregateMonsterTruck = {
    _count: MonsterTruckCountAggregateOutputType | null
    _avg: MonsterTruckAvgAggregateOutputType | null
    _sum: MonsterTruckSumAggregateOutputType | null
    _min: MonsterTruckMinAggregateOutputType | null
    _max: MonsterTruckMaxAggregateOutputType | null
  }

  export type MonsterTruckAvgAggregateOutputType = {
    smashPower: number | null
    speed: number | null
    armor: number | null
  }

  export type MonsterTruckSumAggregateOutputType = {
    smashPower: number | null
    speed: number | null
    armor: number | null
  }

  export type MonsterTruckMinAggregateOutputType = {
    id: string | null
    name: string | null
    smashPower: number | null
    speed: number | null
    armor: number | null
    isUnlocked: boolean | null
    icon: string | null
    style: string | null
  }

  export type MonsterTruckMaxAggregateOutputType = {
    id: string | null
    name: string | null
    smashPower: number | null
    speed: number | null
    armor: number | null
    isUnlocked: boolean | null
    icon: string | null
    style: string | null
  }

  export type MonsterTruckCountAggregateOutputType = {
    id: number
    name: number
    smashPower: number
    speed: number
    armor: number
    isUnlocked: number
    icon: number
    style: number
    _all: number
  }


  export type MonsterTruckAvgAggregateInputType = {
    smashPower?: true
    speed?: true
    armor?: true
  }

  export type MonsterTruckSumAggregateInputType = {
    smashPower?: true
    speed?: true
    armor?: true
  }

  export type MonsterTruckMinAggregateInputType = {
    id?: true
    name?: true
    smashPower?: true
    speed?: true
    armor?: true
    isUnlocked?: true
    icon?: true
    style?: true
  }

  export type MonsterTruckMaxAggregateInputType = {
    id?: true
    name?: true
    smashPower?: true
    speed?: true
    armor?: true
    isUnlocked?: true
    icon?: true
    style?: true
  }

  export type MonsterTruckCountAggregateInputType = {
    id?: true
    name?: true
    smashPower?: true
    speed?: true
    armor?: true
    isUnlocked?: true
    icon?: true
    style?: true
    _all?: true
  }

  export type MonsterTruckAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonsterTruck to aggregate.
     */
    where?: MonsterTruckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonsterTrucks to fetch.
     */
    orderBy?: MonsterTruckOrderByWithRelationInput | MonsterTruckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MonsterTruckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonsterTrucks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonsterTrucks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MonsterTrucks
    **/
    _count?: true | MonsterTruckCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MonsterTruckAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MonsterTruckSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MonsterTruckMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MonsterTruckMaxAggregateInputType
  }

  export type GetMonsterTruckAggregateType<T extends MonsterTruckAggregateArgs> = {
        [P in keyof T & keyof AggregateMonsterTruck]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMonsterTruck[P]>
      : GetScalarType<T[P], AggregateMonsterTruck[P]>
  }




  export type MonsterTruckGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MonsterTruckWhereInput
    orderBy?: MonsterTruckOrderByWithAggregationInput | MonsterTruckOrderByWithAggregationInput[]
    by: MonsterTruckScalarFieldEnum[] | MonsterTruckScalarFieldEnum
    having?: MonsterTruckScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MonsterTruckCountAggregateInputType | true
    _avg?: MonsterTruckAvgAggregateInputType
    _sum?: MonsterTruckSumAggregateInputType
    _min?: MonsterTruckMinAggregateInputType
    _max?: MonsterTruckMaxAggregateInputType
  }

  export type MonsterTruckGroupByOutputType = {
    id: string
    name: string
    smashPower: number
    speed: number
    armor: number
    isUnlocked: boolean
    icon: string
    style: string
    _count: MonsterTruckCountAggregateOutputType | null
    _avg: MonsterTruckAvgAggregateOutputType | null
    _sum: MonsterTruckSumAggregateOutputType | null
    _min: MonsterTruckMinAggregateOutputType | null
    _max: MonsterTruckMaxAggregateOutputType | null
  }

  type GetMonsterTruckGroupByPayload<T extends MonsterTruckGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MonsterTruckGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MonsterTruckGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MonsterTruckGroupByOutputType[P]>
            : GetScalarType<T[P], MonsterTruckGroupByOutputType[P]>
        }
      >
    >


  export type MonsterTruckSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    smashPower?: boolean
    speed?: boolean
    armor?: boolean
    isUnlocked?: boolean
    icon?: boolean
    style?: boolean
  }, ExtArgs["result"]["monsterTruck"]>

  export type MonsterTruckSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    smashPower?: boolean
    speed?: boolean
    armor?: boolean
    isUnlocked?: boolean
    icon?: boolean
    style?: boolean
  }, ExtArgs["result"]["monsterTruck"]>

  export type MonsterTruckSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    smashPower?: boolean
    speed?: boolean
    armor?: boolean
    isUnlocked?: boolean
    icon?: boolean
    style?: boolean
  }, ExtArgs["result"]["monsterTruck"]>

  export type MonsterTruckSelectScalar = {
    id?: boolean
    name?: boolean
    smashPower?: boolean
    speed?: boolean
    armor?: boolean
    isUnlocked?: boolean
    icon?: boolean
    style?: boolean
  }

  export type MonsterTruckOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "smashPower" | "speed" | "armor" | "isUnlocked" | "icon" | "style", ExtArgs["result"]["monsterTruck"]>

  export type $MonsterTruckPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MonsterTruck"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      smashPower: number
      speed: number
      armor: number
      isUnlocked: boolean
      icon: string
      style: string
    }, ExtArgs["result"]["monsterTruck"]>
    composites: {}
  }

  type MonsterTruckGetPayload<S extends boolean | null | undefined | MonsterTruckDefaultArgs> = $Result.GetResult<Prisma.$MonsterTruckPayload, S>

  type MonsterTruckCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MonsterTruckFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MonsterTruckCountAggregateInputType | true
    }

  export interface MonsterTruckDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MonsterTruck'], meta: { name: 'MonsterTruck' } }
    /**
     * Find zero or one MonsterTruck that matches the filter.
     * @param {MonsterTruckFindUniqueArgs} args - Arguments to find a MonsterTruck
     * @example
     * // Get one MonsterTruck
     * const monsterTruck = await prisma.monsterTruck.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MonsterTruckFindUniqueArgs>(args: SelectSubset<T, MonsterTruckFindUniqueArgs<ExtArgs>>): Prisma__MonsterTruckClient<$Result.GetResult<Prisma.$MonsterTruckPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MonsterTruck that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MonsterTruckFindUniqueOrThrowArgs} args - Arguments to find a MonsterTruck
     * @example
     * // Get one MonsterTruck
     * const monsterTruck = await prisma.monsterTruck.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MonsterTruckFindUniqueOrThrowArgs>(args: SelectSubset<T, MonsterTruckFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MonsterTruckClient<$Result.GetResult<Prisma.$MonsterTruckPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonsterTruck that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterTruckFindFirstArgs} args - Arguments to find a MonsterTruck
     * @example
     * // Get one MonsterTruck
     * const monsterTruck = await prisma.monsterTruck.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MonsterTruckFindFirstArgs>(args?: SelectSubset<T, MonsterTruckFindFirstArgs<ExtArgs>>): Prisma__MonsterTruckClient<$Result.GetResult<Prisma.$MonsterTruckPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MonsterTruck that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterTruckFindFirstOrThrowArgs} args - Arguments to find a MonsterTruck
     * @example
     * // Get one MonsterTruck
     * const monsterTruck = await prisma.monsterTruck.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MonsterTruckFindFirstOrThrowArgs>(args?: SelectSubset<T, MonsterTruckFindFirstOrThrowArgs<ExtArgs>>): Prisma__MonsterTruckClient<$Result.GetResult<Prisma.$MonsterTruckPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MonsterTrucks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterTruckFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MonsterTrucks
     * const monsterTrucks = await prisma.monsterTruck.findMany()
     * 
     * // Get first 10 MonsterTrucks
     * const monsterTrucks = await prisma.monsterTruck.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const monsterTruckWithIdOnly = await prisma.monsterTruck.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MonsterTruckFindManyArgs>(args?: SelectSubset<T, MonsterTruckFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterTruckPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MonsterTruck.
     * @param {MonsterTruckCreateArgs} args - Arguments to create a MonsterTruck.
     * @example
     * // Create one MonsterTruck
     * const MonsterTruck = await prisma.monsterTruck.create({
     *   data: {
     *     // ... data to create a MonsterTruck
     *   }
     * })
     * 
     */
    create<T extends MonsterTruckCreateArgs>(args: SelectSubset<T, MonsterTruckCreateArgs<ExtArgs>>): Prisma__MonsterTruckClient<$Result.GetResult<Prisma.$MonsterTruckPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MonsterTrucks.
     * @param {MonsterTruckCreateManyArgs} args - Arguments to create many MonsterTrucks.
     * @example
     * // Create many MonsterTrucks
     * const monsterTruck = await prisma.monsterTruck.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MonsterTruckCreateManyArgs>(args?: SelectSubset<T, MonsterTruckCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MonsterTrucks and returns the data saved in the database.
     * @param {MonsterTruckCreateManyAndReturnArgs} args - Arguments to create many MonsterTrucks.
     * @example
     * // Create many MonsterTrucks
     * const monsterTruck = await prisma.monsterTruck.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MonsterTrucks and only return the `id`
     * const monsterTruckWithIdOnly = await prisma.monsterTruck.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MonsterTruckCreateManyAndReturnArgs>(args?: SelectSubset<T, MonsterTruckCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterTruckPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MonsterTruck.
     * @param {MonsterTruckDeleteArgs} args - Arguments to delete one MonsterTruck.
     * @example
     * // Delete one MonsterTruck
     * const MonsterTruck = await prisma.monsterTruck.delete({
     *   where: {
     *     // ... filter to delete one MonsterTruck
     *   }
     * })
     * 
     */
    delete<T extends MonsterTruckDeleteArgs>(args: SelectSubset<T, MonsterTruckDeleteArgs<ExtArgs>>): Prisma__MonsterTruckClient<$Result.GetResult<Prisma.$MonsterTruckPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MonsterTruck.
     * @param {MonsterTruckUpdateArgs} args - Arguments to update one MonsterTruck.
     * @example
     * // Update one MonsterTruck
     * const monsterTruck = await prisma.monsterTruck.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MonsterTruckUpdateArgs>(args: SelectSubset<T, MonsterTruckUpdateArgs<ExtArgs>>): Prisma__MonsterTruckClient<$Result.GetResult<Prisma.$MonsterTruckPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MonsterTrucks.
     * @param {MonsterTruckDeleteManyArgs} args - Arguments to filter MonsterTrucks to delete.
     * @example
     * // Delete a few MonsterTrucks
     * const { count } = await prisma.monsterTruck.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MonsterTruckDeleteManyArgs>(args?: SelectSubset<T, MonsterTruckDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonsterTrucks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterTruckUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MonsterTrucks
     * const monsterTruck = await prisma.monsterTruck.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MonsterTruckUpdateManyArgs>(args: SelectSubset<T, MonsterTruckUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MonsterTrucks and returns the data updated in the database.
     * @param {MonsterTruckUpdateManyAndReturnArgs} args - Arguments to update many MonsterTrucks.
     * @example
     * // Update many MonsterTrucks
     * const monsterTruck = await prisma.monsterTruck.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MonsterTrucks and only return the `id`
     * const monsterTruckWithIdOnly = await prisma.monsterTruck.updateManyAndReturn({
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
    updateManyAndReturn<T extends MonsterTruckUpdateManyAndReturnArgs>(args: SelectSubset<T, MonsterTruckUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MonsterTruckPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MonsterTruck.
     * @param {MonsterTruckUpsertArgs} args - Arguments to update or create a MonsterTruck.
     * @example
     * // Update or create a MonsterTruck
     * const monsterTruck = await prisma.monsterTruck.upsert({
     *   create: {
     *     // ... data to create a MonsterTruck
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MonsterTruck we want to update
     *   }
     * })
     */
    upsert<T extends MonsterTruckUpsertArgs>(args: SelectSubset<T, MonsterTruckUpsertArgs<ExtArgs>>): Prisma__MonsterTruckClient<$Result.GetResult<Prisma.$MonsterTruckPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MonsterTrucks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterTruckCountArgs} args - Arguments to filter MonsterTrucks to count.
     * @example
     * // Count the number of MonsterTrucks
     * const count = await prisma.monsterTruck.count({
     *   where: {
     *     // ... the filter for the MonsterTrucks we want to count
     *   }
     * })
    **/
    count<T extends MonsterTruckCountArgs>(
      args?: Subset<T, MonsterTruckCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MonsterTruckCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MonsterTruck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterTruckAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MonsterTruckAggregateArgs>(args: Subset<T, MonsterTruckAggregateArgs>): Prisma.PrismaPromise<GetMonsterTruckAggregateType<T>>

    /**
     * Group by MonsterTruck.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MonsterTruckGroupByArgs} args - Group by arguments.
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
      T extends MonsterTruckGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MonsterTruckGroupByArgs['orderBy'] }
        : { orderBy?: MonsterTruckGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MonsterTruckGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMonsterTruckGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MonsterTruck model
   */
  readonly fields: MonsterTruckFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MonsterTruck.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MonsterTruckClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the MonsterTruck model
   */
  interface MonsterTruckFieldRefs {
    readonly id: FieldRef<"MonsterTruck", 'String'>
    readonly name: FieldRef<"MonsterTruck", 'String'>
    readonly smashPower: FieldRef<"MonsterTruck", 'Int'>
    readonly speed: FieldRef<"MonsterTruck", 'Int'>
    readonly armor: FieldRef<"MonsterTruck", 'Int'>
    readonly isUnlocked: FieldRef<"MonsterTruck", 'Boolean'>
    readonly icon: FieldRef<"MonsterTruck", 'String'>
    readonly style: FieldRef<"MonsterTruck", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MonsterTruck findUnique
   */
  export type MonsterTruckFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterTruck
     */
    select?: MonsterTruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterTruck
     */
    omit?: MonsterTruckOmit<ExtArgs> | null
    /**
     * Filter, which MonsterTruck to fetch.
     */
    where: MonsterTruckWhereUniqueInput
  }

  /**
   * MonsterTruck findUniqueOrThrow
   */
  export type MonsterTruckFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterTruck
     */
    select?: MonsterTruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterTruck
     */
    omit?: MonsterTruckOmit<ExtArgs> | null
    /**
     * Filter, which MonsterTruck to fetch.
     */
    where: MonsterTruckWhereUniqueInput
  }

  /**
   * MonsterTruck findFirst
   */
  export type MonsterTruckFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterTruck
     */
    select?: MonsterTruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterTruck
     */
    omit?: MonsterTruckOmit<ExtArgs> | null
    /**
     * Filter, which MonsterTruck to fetch.
     */
    where?: MonsterTruckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonsterTrucks to fetch.
     */
    orderBy?: MonsterTruckOrderByWithRelationInput | MonsterTruckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonsterTrucks.
     */
    cursor?: MonsterTruckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonsterTrucks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonsterTrucks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonsterTrucks.
     */
    distinct?: MonsterTruckScalarFieldEnum | MonsterTruckScalarFieldEnum[]
  }

  /**
   * MonsterTruck findFirstOrThrow
   */
  export type MonsterTruckFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterTruck
     */
    select?: MonsterTruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterTruck
     */
    omit?: MonsterTruckOmit<ExtArgs> | null
    /**
     * Filter, which MonsterTruck to fetch.
     */
    where?: MonsterTruckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonsterTrucks to fetch.
     */
    orderBy?: MonsterTruckOrderByWithRelationInput | MonsterTruckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MonsterTrucks.
     */
    cursor?: MonsterTruckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonsterTrucks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonsterTrucks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonsterTrucks.
     */
    distinct?: MonsterTruckScalarFieldEnum | MonsterTruckScalarFieldEnum[]
  }

  /**
   * MonsterTruck findMany
   */
  export type MonsterTruckFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterTruck
     */
    select?: MonsterTruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterTruck
     */
    omit?: MonsterTruckOmit<ExtArgs> | null
    /**
     * Filter, which MonsterTrucks to fetch.
     */
    where?: MonsterTruckWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MonsterTrucks to fetch.
     */
    orderBy?: MonsterTruckOrderByWithRelationInput | MonsterTruckOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MonsterTrucks.
     */
    cursor?: MonsterTruckWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MonsterTrucks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MonsterTrucks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MonsterTrucks.
     */
    distinct?: MonsterTruckScalarFieldEnum | MonsterTruckScalarFieldEnum[]
  }

  /**
   * MonsterTruck create
   */
  export type MonsterTruckCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterTruck
     */
    select?: MonsterTruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterTruck
     */
    omit?: MonsterTruckOmit<ExtArgs> | null
    /**
     * The data needed to create a MonsterTruck.
     */
    data: XOR<MonsterTruckCreateInput, MonsterTruckUncheckedCreateInput>
  }

  /**
   * MonsterTruck createMany
   */
  export type MonsterTruckCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MonsterTrucks.
     */
    data: MonsterTruckCreateManyInput | MonsterTruckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonsterTruck createManyAndReturn
   */
  export type MonsterTruckCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterTruck
     */
    select?: MonsterTruckSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterTruck
     */
    omit?: MonsterTruckOmit<ExtArgs> | null
    /**
     * The data used to create many MonsterTrucks.
     */
    data: MonsterTruckCreateManyInput | MonsterTruckCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MonsterTruck update
   */
  export type MonsterTruckUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterTruck
     */
    select?: MonsterTruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterTruck
     */
    omit?: MonsterTruckOmit<ExtArgs> | null
    /**
     * The data needed to update a MonsterTruck.
     */
    data: XOR<MonsterTruckUpdateInput, MonsterTruckUncheckedUpdateInput>
    /**
     * Choose, which MonsterTruck to update.
     */
    where: MonsterTruckWhereUniqueInput
  }

  /**
   * MonsterTruck updateMany
   */
  export type MonsterTruckUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MonsterTrucks.
     */
    data: XOR<MonsterTruckUpdateManyMutationInput, MonsterTruckUncheckedUpdateManyInput>
    /**
     * Filter which MonsterTrucks to update
     */
    where?: MonsterTruckWhereInput
    /**
     * Limit how many MonsterTrucks to update.
     */
    limit?: number
  }

  /**
   * MonsterTruck updateManyAndReturn
   */
  export type MonsterTruckUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterTruck
     */
    select?: MonsterTruckSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterTruck
     */
    omit?: MonsterTruckOmit<ExtArgs> | null
    /**
     * The data used to update MonsterTrucks.
     */
    data: XOR<MonsterTruckUpdateManyMutationInput, MonsterTruckUncheckedUpdateManyInput>
    /**
     * Filter which MonsterTrucks to update
     */
    where?: MonsterTruckWhereInput
    /**
     * Limit how many MonsterTrucks to update.
     */
    limit?: number
  }

  /**
   * MonsterTruck upsert
   */
  export type MonsterTruckUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterTruck
     */
    select?: MonsterTruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterTruck
     */
    omit?: MonsterTruckOmit<ExtArgs> | null
    /**
     * The filter to search for the MonsterTruck to update in case it exists.
     */
    where: MonsterTruckWhereUniqueInput
    /**
     * In case the MonsterTruck found by the `where` argument doesn't exist, create a new MonsterTruck with this data.
     */
    create: XOR<MonsterTruckCreateInput, MonsterTruckUncheckedCreateInput>
    /**
     * In case the MonsterTruck was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MonsterTruckUpdateInput, MonsterTruckUncheckedUpdateInput>
  }

  /**
   * MonsterTruck delete
   */
  export type MonsterTruckDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterTruck
     */
    select?: MonsterTruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterTruck
     */
    omit?: MonsterTruckOmit<ExtArgs> | null
    /**
     * Filter which MonsterTruck to delete.
     */
    where: MonsterTruckWhereUniqueInput
  }

  /**
   * MonsterTruck deleteMany
   */
  export type MonsterTruckDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MonsterTrucks to delete
     */
    where?: MonsterTruckWhereInput
    /**
     * Limit how many MonsterTrucks to delete.
     */
    limit?: number
  }

  /**
   * MonsterTruck without action
   */
  export type MonsterTruckDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MonsterTruck
     */
    select?: MonsterTruckSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MonsterTruck
     */
    omit?: MonsterTruckOmit<ExtArgs> | null
  }


  /**
   * Model SecretClubTrophy
   */

  export type AggregateSecretClubTrophy = {
    _count: SecretClubTrophyCountAggregateOutputType | null
    _min: SecretClubTrophyMinAggregateOutputType | null
    _max: SecretClubTrophyMaxAggregateOutputType | null
  }

  export type SecretClubTrophyMinAggregateOutputType = {
    id: string | null
    trophyCode: string | null
    title: string | null
    description: string | null
    icon: string | null
    isUnlocked: boolean | null
    unlockedAt: Date | null
  }

  export type SecretClubTrophyMaxAggregateOutputType = {
    id: string | null
    trophyCode: string | null
    title: string | null
    description: string | null
    icon: string | null
    isUnlocked: boolean | null
    unlockedAt: Date | null
  }

  export type SecretClubTrophyCountAggregateOutputType = {
    id: number
    trophyCode: number
    title: number
    description: number
    icon: number
    isUnlocked: number
    unlockedAt: number
    _all: number
  }


  export type SecretClubTrophyMinAggregateInputType = {
    id?: true
    trophyCode?: true
    title?: true
    description?: true
    icon?: true
    isUnlocked?: true
    unlockedAt?: true
  }

  export type SecretClubTrophyMaxAggregateInputType = {
    id?: true
    trophyCode?: true
    title?: true
    description?: true
    icon?: true
    isUnlocked?: true
    unlockedAt?: true
  }

  export type SecretClubTrophyCountAggregateInputType = {
    id?: true
    trophyCode?: true
    title?: true
    description?: true
    icon?: true
    isUnlocked?: true
    unlockedAt?: true
    _all?: true
  }

  export type SecretClubTrophyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecretClubTrophy to aggregate.
     */
    where?: SecretClubTrophyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecretClubTrophies to fetch.
     */
    orderBy?: SecretClubTrophyOrderByWithRelationInput | SecretClubTrophyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SecretClubTrophyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecretClubTrophies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecretClubTrophies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SecretClubTrophies
    **/
    _count?: true | SecretClubTrophyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SecretClubTrophyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SecretClubTrophyMaxAggregateInputType
  }

  export type GetSecretClubTrophyAggregateType<T extends SecretClubTrophyAggregateArgs> = {
        [P in keyof T & keyof AggregateSecretClubTrophy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSecretClubTrophy[P]>
      : GetScalarType<T[P], AggregateSecretClubTrophy[P]>
  }




  export type SecretClubTrophyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SecretClubTrophyWhereInput
    orderBy?: SecretClubTrophyOrderByWithAggregationInput | SecretClubTrophyOrderByWithAggregationInput[]
    by: SecretClubTrophyScalarFieldEnum[] | SecretClubTrophyScalarFieldEnum
    having?: SecretClubTrophyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SecretClubTrophyCountAggregateInputType | true
    _min?: SecretClubTrophyMinAggregateInputType
    _max?: SecretClubTrophyMaxAggregateInputType
  }

  export type SecretClubTrophyGroupByOutputType = {
    id: string
    trophyCode: string
    title: string
    description: string
    icon: string
    isUnlocked: boolean
    unlockedAt: Date | null
    _count: SecretClubTrophyCountAggregateOutputType | null
    _min: SecretClubTrophyMinAggregateOutputType | null
    _max: SecretClubTrophyMaxAggregateOutputType | null
  }

  type GetSecretClubTrophyGroupByPayload<T extends SecretClubTrophyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SecretClubTrophyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SecretClubTrophyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SecretClubTrophyGroupByOutputType[P]>
            : GetScalarType<T[P], SecretClubTrophyGroupByOutputType[P]>
        }
      >
    >


  export type SecretClubTrophySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trophyCode?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    isUnlocked?: boolean
    unlockedAt?: boolean
  }, ExtArgs["result"]["secretClubTrophy"]>

  export type SecretClubTrophySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trophyCode?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    isUnlocked?: boolean
    unlockedAt?: boolean
  }, ExtArgs["result"]["secretClubTrophy"]>

  export type SecretClubTrophySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trophyCode?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    isUnlocked?: boolean
    unlockedAt?: boolean
  }, ExtArgs["result"]["secretClubTrophy"]>

  export type SecretClubTrophySelectScalar = {
    id?: boolean
    trophyCode?: boolean
    title?: boolean
    description?: boolean
    icon?: boolean
    isUnlocked?: boolean
    unlockedAt?: boolean
  }

  export type SecretClubTrophyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trophyCode" | "title" | "description" | "icon" | "isUnlocked" | "unlockedAt", ExtArgs["result"]["secretClubTrophy"]>

  export type $SecretClubTrophyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SecretClubTrophy"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      trophyCode: string
      title: string
      description: string
      icon: string
      isUnlocked: boolean
      unlockedAt: Date | null
    }, ExtArgs["result"]["secretClubTrophy"]>
    composites: {}
  }

  type SecretClubTrophyGetPayload<S extends boolean | null | undefined | SecretClubTrophyDefaultArgs> = $Result.GetResult<Prisma.$SecretClubTrophyPayload, S>

  type SecretClubTrophyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SecretClubTrophyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SecretClubTrophyCountAggregateInputType | true
    }

  export interface SecretClubTrophyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SecretClubTrophy'], meta: { name: 'SecretClubTrophy' } }
    /**
     * Find zero or one SecretClubTrophy that matches the filter.
     * @param {SecretClubTrophyFindUniqueArgs} args - Arguments to find a SecretClubTrophy
     * @example
     * // Get one SecretClubTrophy
     * const secretClubTrophy = await prisma.secretClubTrophy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SecretClubTrophyFindUniqueArgs>(args: SelectSubset<T, SecretClubTrophyFindUniqueArgs<ExtArgs>>): Prisma__SecretClubTrophyClient<$Result.GetResult<Prisma.$SecretClubTrophyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SecretClubTrophy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SecretClubTrophyFindUniqueOrThrowArgs} args - Arguments to find a SecretClubTrophy
     * @example
     * // Get one SecretClubTrophy
     * const secretClubTrophy = await prisma.secretClubTrophy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SecretClubTrophyFindUniqueOrThrowArgs>(args: SelectSubset<T, SecretClubTrophyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SecretClubTrophyClient<$Result.GetResult<Prisma.$SecretClubTrophyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecretClubTrophy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretClubTrophyFindFirstArgs} args - Arguments to find a SecretClubTrophy
     * @example
     * // Get one SecretClubTrophy
     * const secretClubTrophy = await prisma.secretClubTrophy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SecretClubTrophyFindFirstArgs>(args?: SelectSubset<T, SecretClubTrophyFindFirstArgs<ExtArgs>>): Prisma__SecretClubTrophyClient<$Result.GetResult<Prisma.$SecretClubTrophyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SecretClubTrophy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretClubTrophyFindFirstOrThrowArgs} args - Arguments to find a SecretClubTrophy
     * @example
     * // Get one SecretClubTrophy
     * const secretClubTrophy = await prisma.secretClubTrophy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SecretClubTrophyFindFirstOrThrowArgs>(args?: SelectSubset<T, SecretClubTrophyFindFirstOrThrowArgs<ExtArgs>>): Prisma__SecretClubTrophyClient<$Result.GetResult<Prisma.$SecretClubTrophyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SecretClubTrophies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretClubTrophyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SecretClubTrophies
     * const secretClubTrophies = await prisma.secretClubTrophy.findMany()
     * 
     * // Get first 10 SecretClubTrophies
     * const secretClubTrophies = await prisma.secretClubTrophy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const secretClubTrophyWithIdOnly = await prisma.secretClubTrophy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SecretClubTrophyFindManyArgs>(args?: SelectSubset<T, SecretClubTrophyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretClubTrophyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SecretClubTrophy.
     * @param {SecretClubTrophyCreateArgs} args - Arguments to create a SecretClubTrophy.
     * @example
     * // Create one SecretClubTrophy
     * const SecretClubTrophy = await prisma.secretClubTrophy.create({
     *   data: {
     *     // ... data to create a SecretClubTrophy
     *   }
     * })
     * 
     */
    create<T extends SecretClubTrophyCreateArgs>(args: SelectSubset<T, SecretClubTrophyCreateArgs<ExtArgs>>): Prisma__SecretClubTrophyClient<$Result.GetResult<Prisma.$SecretClubTrophyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SecretClubTrophies.
     * @param {SecretClubTrophyCreateManyArgs} args - Arguments to create many SecretClubTrophies.
     * @example
     * // Create many SecretClubTrophies
     * const secretClubTrophy = await prisma.secretClubTrophy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SecretClubTrophyCreateManyArgs>(args?: SelectSubset<T, SecretClubTrophyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SecretClubTrophies and returns the data saved in the database.
     * @param {SecretClubTrophyCreateManyAndReturnArgs} args - Arguments to create many SecretClubTrophies.
     * @example
     * // Create many SecretClubTrophies
     * const secretClubTrophy = await prisma.secretClubTrophy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SecretClubTrophies and only return the `id`
     * const secretClubTrophyWithIdOnly = await prisma.secretClubTrophy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SecretClubTrophyCreateManyAndReturnArgs>(args?: SelectSubset<T, SecretClubTrophyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretClubTrophyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SecretClubTrophy.
     * @param {SecretClubTrophyDeleteArgs} args - Arguments to delete one SecretClubTrophy.
     * @example
     * // Delete one SecretClubTrophy
     * const SecretClubTrophy = await prisma.secretClubTrophy.delete({
     *   where: {
     *     // ... filter to delete one SecretClubTrophy
     *   }
     * })
     * 
     */
    delete<T extends SecretClubTrophyDeleteArgs>(args: SelectSubset<T, SecretClubTrophyDeleteArgs<ExtArgs>>): Prisma__SecretClubTrophyClient<$Result.GetResult<Prisma.$SecretClubTrophyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SecretClubTrophy.
     * @param {SecretClubTrophyUpdateArgs} args - Arguments to update one SecretClubTrophy.
     * @example
     * // Update one SecretClubTrophy
     * const secretClubTrophy = await prisma.secretClubTrophy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SecretClubTrophyUpdateArgs>(args: SelectSubset<T, SecretClubTrophyUpdateArgs<ExtArgs>>): Prisma__SecretClubTrophyClient<$Result.GetResult<Prisma.$SecretClubTrophyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SecretClubTrophies.
     * @param {SecretClubTrophyDeleteManyArgs} args - Arguments to filter SecretClubTrophies to delete.
     * @example
     * // Delete a few SecretClubTrophies
     * const { count } = await prisma.secretClubTrophy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SecretClubTrophyDeleteManyArgs>(args?: SelectSubset<T, SecretClubTrophyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecretClubTrophies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretClubTrophyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SecretClubTrophies
     * const secretClubTrophy = await prisma.secretClubTrophy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SecretClubTrophyUpdateManyArgs>(args: SelectSubset<T, SecretClubTrophyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SecretClubTrophies and returns the data updated in the database.
     * @param {SecretClubTrophyUpdateManyAndReturnArgs} args - Arguments to update many SecretClubTrophies.
     * @example
     * // Update many SecretClubTrophies
     * const secretClubTrophy = await prisma.secretClubTrophy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SecretClubTrophies and only return the `id`
     * const secretClubTrophyWithIdOnly = await prisma.secretClubTrophy.updateManyAndReturn({
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
    updateManyAndReturn<T extends SecretClubTrophyUpdateManyAndReturnArgs>(args: SelectSubset<T, SecretClubTrophyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SecretClubTrophyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SecretClubTrophy.
     * @param {SecretClubTrophyUpsertArgs} args - Arguments to update or create a SecretClubTrophy.
     * @example
     * // Update or create a SecretClubTrophy
     * const secretClubTrophy = await prisma.secretClubTrophy.upsert({
     *   create: {
     *     // ... data to create a SecretClubTrophy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SecretClubTrophy we want to update
     *   }
     * })
     */
    upsert<T extends SecretClubTrophyUpsertArgs>(args: SelectSubset<T, SecretClubTrophyUpsertArgs<ExtArgs>>): Prisma__SecretClubTrophyClient<$Result.GetResult<Prisma.$SecretClubTrophyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SecretClubTrophies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretClubTrophyCountArgs} args - Arguments to filter SecretClubTrophies to count.
     * @example
     * // Count the number of SecretClubTrophies
     * const count = await prisma.secretClubTrophy.count({
     *   where: {
     *     // ... the filter for the SecretClubTrophies we want to count
     *   }
     * })
    **/
    count<T extends SecretClubTrophyCountArgs>(
      args?: Subset<T, SecretClubTrophyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SecretClubTrophyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SecretClubTrophy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretClubTrophyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SecretClubTrophyAggregateArgs>(args: Subset<T, SecretClubTrophyAggregateArgs>): Prisma.PrismaPromise<GetSecretClubTrophyAggregateType<T>>

    /**
     * Group by SecretClubTrophy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SecretClubTrophyGroupByArgs} args - Group by arguments.
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
      T extends SecretClubTrophyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SecretClubTrophyGroupByArgs['orderBy'] }
        : { orderBy?: SecretClubTrophyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SecretClubTrophyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSecretClubTrophyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SecretClubTrophy model
   */
  readonly fields: SecretClubTrophyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SecretClubTrophy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SecretClubTrophyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the SecretClubTrophy model
   */
  interface SecretClubTrophyFieldRefs {
    readonly id: FieldRef<"SecretClubTrophy", 'String'>
    readonly trophyCode: FieldRef<"SecretClubTrophy", 'String'>
    readonly title: FieldRef<"SecretClubTrophy", 'String'>
    readonly description: FieldRef<"SecretClubTrophy", 'String'>
    readonly icon: FieldRef<"SecretClubTrophy", 'String'>
    readonly isUnlocked: FieldRef<"SecretClubTrophy", 'Boolean'>
    readonly unlockedAt: FieldRef<"SecretClubTrophy", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SecretClubTrophy findUnique
   */
  export type SecretClubTrophyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubTrophy
     */
    select?: SecretClubTrophySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubTrophy
     */
    omit?: SecretClubTrophyOmit<ExtArgs> | null
    /**
     * Filter, which SecretClubTrophy to fetch.
     */
    where: SecretClubTrophyWhereUniqueInput
  }

  /**
   * SecretClubTrophy findUniqueOrThrow
   */
  export type SecretClubTrophyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubTrophy
     */
    select?: SecretClubTrophySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubTrophy
     */
    omit?: SecretClubTrophyOmit<ExtArgs> | null
    /**
     * Filter, which SecretClubTrophy to fetch.
     */
    where: SecretClubTrophyWhereUniqueInput
  }

  /**
   * SecretClubTrophy findFirst
   */
  export type SecretClubTrophyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubTrophy
     */
    select?: SecretClubTrophySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubTrophy
     */
    omit?: SecretClubTrophyOmit<ExtArgs> | null
    /**
     * Filter, which SecretClubTrophy to fetch.
     */
    where?: SecretClubTrophyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecretClubTrophies to fetch.
     */
    orderBy?: SecretClubTrophyOrderByWithRelationInput | SecretClubTrophyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecretClubTrophies.
     */
    cursor?: SecretClubTrophyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecretClubTrophies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecretClubTrophies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecretClubTrophies.
     */
    distinct?: SecretClubTrophyScalarFieldEnum | SecretClubTrophyScalarFieldEnum[]
  }

  /**
   * SecretClubTrophy findFirstOrThrow
   */
  export type SecretClubTrophyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubTrophy
     */
    select?: SecretClubTrophySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubTrophy
     */
    omit?: SecretClubTrophyOmit<ExtArgs> | null
    /**
     * Filter, which SecretClubTrophy to fetch.
     */
    where?: SecretClubTrophyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecretClubTrophies to fetch.
     */
    orderBy?: SecretClubTrophyOrderByWithRelationInput | SecretClubTrophyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SecretClubTrophies.
     */
    cursor?: SecretClubTrophyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecretClubTrophies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecretClubTrophies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecretClubTrophies.
     */
    distinct?: SecretClubTrophyScalarFieldEnum | SecretClubTrophyScalarFieldEnum[]
  }

  /**
   * SecretClubTrophy findMany
   */
  export type SecretClubTrophyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubTrophy
     */
    select?: SecretClubTrophySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubTrophy
     */
    omit?: SecretClubTrophyOmit<ExtArgs> | null
    /**
     * Filter, which SecretClubTrophies to fetch.
     */
    where?: SecretClubTrophyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SecretClubTrophies to fetch.
     */
    orderBy?: SecretClubTrophyOrderByWithRelationInput | SecretClubTrophyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SecretClubTrophies.
     */
    cursor?: SecretClubTrophyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SecretClubTrophies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SecretClubTrophies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SecretClubTrophies.
     */
    distinct?: SecretClubTrophyScalarFieldEnum | SecretClubTrophyScalarFieldEnum[]
  }

  /**
   * SecretClubTrophy create
   */
  export type SecretClubTrophyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubTrophy
     */
    select?: SecretClubTrophySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubTrophy
     */
    omit?: SecretClubTrophyOmit<ExtArgs> | null
    /**
     * The data needed to create a SecretClubTrophy.
     */
    data: XOR<SecretClubTrophyCreateInput, SecretClubTrophyUncheckedCreateInput>
  }

  /**
   * SecretClubTrophy createMany
   */
  export type SecretClubTrophyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SecretClubTrophies.
     */
    data: SecretClubTrophyCreateManyInput | SecretClubTrophyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecretClubTrophy createManyAndReturn
   */
  export type SecretClubTrophyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubTrophy
     */
    select?: SecretClubTrophySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubTrophy
     */
    omit?: SecretClubTrophyOmit<ExtArgs> | null
    /**
     * The data used to create many SecretClubTrophies.
     */
    data: SecretClubTrophyCreateManyInput | SecretClubTrophyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SecretClubTrophy update
   */
  export type SecretClubTrophyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubTrophy
     */
    select?: SecretClubTrophySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubTrophy
     */
    omit?: SecretClubTrophyOmit<ExtArgs> | null
    /**
     * The data needed to update a SecretClubTrophy.
     */
    data: XOR<SecretClubTrophyUpdateInput, SecretClubTrophyUncheckedUpdateInput>
    /**
     * Choose, which SecretClubTrophy to update.
     */
    where: SecretClubTrophyWhereUniqueInput
  }

  /**
   * SecretClubTrophy updateMany
   */
  export type SecretClubTrophyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SecretClubTrophies.
     */
    data: XOR<SecretClubTrophyUpdateManyMutationInput, SecretClubTrophyUncheckedUpdateManyInput>
    /**
     * Filter which SecretClubTrophies to update
     */
    where?: SecretClubTrophyWhereInput
    /**
     * Limit how many SecretClubTrophies to update.
     */
    limit?: number
  }

  /**
   * SecretClubTrophy updateManyAndReturn
   */
  export type SecretClubTrophyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubTrophy
     */
    select?: SecretClubTrophySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubTrophy
     */
    omit?: SecretClubTrophyOmit<ExtArgs> | null
    /**
     * The data used to update SecretClubTrophies.
     */
    data: XOR<SecretClubTrophyUpdateManyMutationInput, SecretClubTrophyUncheckedUpdateManyInput>
    /**
     * Filter which SecretClubTrophies to update
     */
    where?: SecretClubTrophyWhereInput
    /**
     * Limit how many SecretClubTrophies to update.
     */
    limit?: number
  }

  /**
   * SecretClubTrophy upsert
   */
  export type SecretClubTrophyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubTrophy
     */
    select?: SecretClubTrophySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubTrophy
     */
    omit?: SecretClubTrophyOmit<ExtArgs> | null
    /**
     * The filter to search for the SecretClubTrophy to update in case it exists.
     */
    where: SecretClubTrophyWhereUniqueInput
    /**
     * In case the SecretClubTrophy found by the `where` argument doesn't exist, create a new SecretClubTrophy with this data.
     */
    create: XOR<SecretClubTrophyCreateInput, SecretClubTrophyUncheckedCreateInput>
    /**
     * In case the SecretClubTrophy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SecretClubTrophyUpdateInput, SecretClubTrophyUncheckedUpdateInput>
  }

  /**
   * SecretClubTrophy delete
   */
  export type SecretClubTrophyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubTrophy
     */
    select?: SecretClubTrophySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubTrophy
     */
    omit?: SecretClubTrophyOmit<ExtArgs> | null
    /**
     * Filter which SecretClubTrophy to delete.
     */
    where: SecretClubTrophyWhereUniqueInput
  }

  /**
   * SecretClubTrophy deleteMany
   */
  export type SecretClubTrophyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SecretClubTrophies to delete
     */
    where?: SecretClubTrophyWhereInput
    /**
     * Limit how many SecretClubTrophies to delete.
     */
    limit?: number
  }

  /**
   * SecretClubTrophy without action
   */
  export type SecretClubTrophyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SecretClubTrophy
     */
    select?: SecretClubTrophySelect<ExtArgs> | null
    /**
     * Omit specific fields from the SecretClubTrophy
     */
    omit?: SecretClubTrophyOmit<ExtArgs> | null
  }


  /**
   * Model VoiceChant
   */

  export type AggregateVoiceChant = {
    _count: VoiceChantCountAggregateOutputType | null
    _min: VoiceChantMinAggregateOutputType | null
    _max: VoiceChantMaxAggregateOutputType | null
  }

  export type VoiceChantMinAggregateOutputType = {
    id: string | null
    title: string | null
    chantAr: string | null
    chantEn: string | null
    soundType: string | null
    createdAt: Date | null
  }

  export type VoiceChantMaxAggregateOutputType = {
    id: string | null
    title: string | null
    chantAr: string | null
    chantEn: string | null
    soundType: string | null
    createdAt: Date | null
  }

  export type VoiceChantCountAggregateOutputType = {
    id: number
    title: number
    chantAr: number
    chantEn: number
    soundType: number
    createdAt: number
    _all: number
  }


  export type VoiceChantMinAggregateInputType = {
    id?: true
    title?: true
    chantAr?: true
    chantEn?: true
    soundType?: true
    createdAt?: true
  }

  export type VoiceChantMaxAggregateInputType = {
    id?: true
    title?: true
    chantAr?: true
    chantEn?: true
    soundType?: true
    createdAt?: true
  }

  export type VoiceChantCountAggregateInputType = {
    id?: true
    title?: true
    chantAr?: true
    chantEn?: true
    soundType?: true
    createdAt?: true
    _all?: true
  }

  export type VoiceChantAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoiceChant to aggregate.
     */
    where?: VoiceChantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceChants to fetch.
     */
    orderBy?: VoiceChantOrderByWithRelationInput | VoiceChantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VoiceChantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceChants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceChants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VoiceChants
    **/
    _count?: true | VoiceChantCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VoiceChantMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VoiceChantMaxAggregateInputType
  }

  export type GetVoiceChantAggregateType<T extends VoiceChantAggregateArgs> = {
        [P in keyof T & keyof AggregateVoiceChant]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVoiceChant[P]>
      : GetScalarType<T[P], AggregateVoiceChant[P]>
  }




  export type VoiceChantGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VoiceChantWhereInput
    orderBy?: VoiceChantOrderByWithAggregationInput | VoiceChantOrderByWithAggregationInput[]
    by: VoiceChantScalarFieldEnum[] | VoiceChantScalarFieldEnum
    having?: VoiceChantScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VoiceChantCountAggregateInputType | true
    _min?: VoiceChantMinAggregateInputType
    _max?: VoiceChantMaxAggregateInputType
  }

  export type VoiceChantGroupByOutputType = {
    id: string
    title: string
    chantAr: string
    chantEn: string
    soundType: string
    createdAt: Date
    _count: VoiceChantCountAggregateOutputType | null
    _min: VoiceChantMinAggregateOutputType | null
    _max: VoiceChantMaxAggregateOutputType | null
  }

  type GetVoiceChantGroupByPayload<T extends VoiceChantGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VoiceChantGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VoiceChantGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VoiceChantGroupByOutputType[P]>
            : GetScalarType<T[P], VoiceChantGroupByOutputType[P]>
        }
      >
    >


  export type VoiceChantSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    chantAr?: boolean
    chantEn?: boolean
    soundType?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["voiceChant"]>

  export type VoiceChantSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    chantAr?: boolean
    chantEn?: boolean
    soundType?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["voiceChant"]>

  export type VoiceChantSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    chantAr?: boolean
    chantEn?: boolean
    soundType?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["voiceChant"]>

  export type VoiceChantSelectScalar = {
    id?: boolean
    title?: boolean
    chantAr?: boolean
    chantEn?: boolean
    soundType?: boolean
    createdAt?: boolean
  }

  export type VoiceChantOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "chantAr" | "chantEn" | "soundType" | "createdAt", ExtArgs["result"]["voiceChant"]>

  export type $VoiceChantPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VoiceChant"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      chantAr: string
      chantEn: string
      soundType: string
      createdAt: Date
    }, ExtArgs["result"]["voiceChant"]>
    composites: {}
  }

  type VoiceChantGetPayload<S extends boolean | null | undefined | VoiceChantDefaultArgs> = $Result.GetResult<Prisma.$VoiceChantPayload, S>

  type VoiceChantCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VoiceChantFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VoiceChantCountAggregateInputType | true
    }

  export interface VoiceChantDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VoiceChant'], meta: { name: 'VoiceChant' } }
    /**
     * Find zero or one VoiceChant that matches the filter.
     * @param {VoiceChantFindUniqueArgs} args - Arguments to find a VoiceChant
     * @example
     * // Get one VoiceChant
     * const voiceChant = await prisma.voiceChant.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VoiceChantFindUniqueArgs>(args: SelectSubset<T, VoiceChantFindUniqueArgs<ExtArgs>>): Prisma__VoiceChantClient<$Result.GetResult<Prisma.$VoiceChantPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VoiceChant that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VoiceChantFindUniqueOrThrowArgs} args - Arguments to find a VoiceChant
     * @example
     * // Get one VoiceChant
     * const voiceChant = await prisma.voiceChant.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VoiceChantFindUniqueOrThrowArgs>(args: SelectSubset<T, VoiceChantFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VoiceChantClient<$Result.GetResult<Prisma.$VoiceChantPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VoiceChant that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceChantFindFirstArgs} args - Arguments to find a VoiceChant
     * @example
     * // Get one VoiceChant
     * const voiceChant = await prisma.voiceChant.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VoiceChantFindFirstArgs>(args?: SelectSubset<T, VoiceChantFindFirstArgs<ExtArgs>>): Prisma__VoiceChantClient<$Result.GetResult<Prisma.$VoiceChantPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VoiceChant that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceChantFindFirstOrThrowArgs} args - Arguments to find a VoiceChant
     * @example
     * // Get one VoiceChant
     * const voiceChant = await prisma.voiceChant.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VoiceChantFindFirstOrThrowArgs>(args?: SelectSubset<T, VoiceChantFindFirstOrThrowArgs<ExtArgs>>): Prisma__VoiceChantClient<$Result.GetResult<Prisma.$VoiceChantPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VoiceChants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceChantFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VoiceChants
     * const voiceChants = await prisma.voiceChant.findMany()
     * 
     * // Get first 10 VoiceChants
     * const voiceChants = await prisma.voiceChant.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const voiceChantWithIdOnly = await prisma.voiceChant.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VoiceChantFindManyArgs>(args?: SelectSubset<T, VoiceChantFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceChantPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VoiceChant.
     * @param {VoiceChantCreateArgs} args - Arguments to create a VoiceChant.
     * @example
     * // Create one VoiceChant
     * const VoiceChant = await prisma.voiceChant.create({
     *   data: {
     *     // ... data to create a VoiceChant
     *   }
     * })
     * 
     */
    create<T extends VoiceChantCreateArgs>(args: SelectSubset<T, VoiceChantCreateArgs<ExtArgs>>): Prisma__VoiceChantClient<$Result.GetResult<Prisma.$VoiceChantPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VoiceChants.
     * @param {VoiceChantCreateManyArgs} args - Arguments to create many VoiceChants.
     * @example
     * // Create many VoiceChants
     * const voiceChant = await prisma.voiceChant.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VoiceChantCreateManyArgs>(args?: SelectSubset<T, VoiceChantCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VoiceChants and returns the data saved in the database.
     * @param {VoiceChantCreateManyAndReturnArgs} args - Arguments to create many VoiceChants.
     * @example
     * // Create many VoiceChants
     * const voiceChant = await prisma.voiceChant.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VoiceChants and only return the `id`
     * const voiceChantWithIdOnly = await prisma.voiceChant.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VoiceChantCreateManyAndReturnArgs>(args?: SelectSubset<T, VoiceChantCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceChantPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VoiceChant.
     * @param {VoiceChantDeleteArgs} args - Arguments to delete one VoiceChant.
     * @example
     * // Delete one VoiceChant
     * const VoiceChant = await prisma.voiceChant.delete({
     *   where: {
     *     // ... filter to delete one VoiceChant
     *   }
     * })
     * 
     */
    delete<T extends VoiceChantDeleteArgs>(args: SelectSubset<T, VoiceChantDeleteArgs<ExtArgs>>): Prisma__VoiceChantClient<$Result.GetResult<Prisma.$VoiceChantPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VoiceChant.
     * @param {VoiceChantUpdateArgs} args - Arguments to update one VoiceChant.
     * @example
     * // Update one VoiceChant
     * const voiceChant = await prisma.voiceChant.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VoiceChantUpdateArgs>(args: SelectSubset<T, VoiceChantUpdateArgs<ExtArgs>>): Prisma__VoiceChantClient<$Result.GetResult<Prisma.$VoiceChantPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VoiceChants.
     * @param {VoiceChantDeleteManyArgs} args - Arguments to filter VoiceChants to delete.
     * @example
     * // Delete a few VoiceChants
     * const { count } = await prisma.voiceChant.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VoiceChantDeleteManyArgs>(args?: SelectSubset<T, VoiceChantDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VoiceChants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceChantUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VoiceChants
     * const voiceChant = await prisma.voiceChant.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VoiceChantUpdateManyArgs>(args: SelectSubset<T, VoiceChantUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VoiceChants and returns the data updated in the database.
     * @param {VoiceChantUpdateManyAndReturnArgs} args - Arguments to update many VoiceChants.
     * @example
     * // Update many VoiceChants
     * const voiceChant = await prisma.voiceChant.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VoiceChants and only return the `id`
     * const voiceChantWithIdOnly = await prisma.voiceChant.updateManyAndReturn({
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
    updateManyAndReturn<T extends VoiceChantUpdateManyAndReturnArgs>(args: SelectSubset<T, VoiceChantUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VoiceChantPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VoiceChant.
     * @param {VoiceChantUpsertArgs} args - Arguments to update or create a VoiceChant.
     * @example
     * // Update or create a VoiceChant
     * const voiceChant = await prisma.voiceChant.upsert({
     *   create: {
     *     // ... data to create a VoiceChant
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VoiceChant we want to update
     *   }
     * })
     */
    upsert<T extends VoiceChantUpsertArgs>(args: SelectSubset<T, VoiceChantUpsertArgs<ExtArgs>>): Prisma__VoiceChantClient<$Result.GetResult<Prisma.$VoiceChantPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VoiceChants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceChantCountArgs} args - Arguments to filter VoiceChants to count.
     * @example
     * // Count the number of VoiceChants
     * const count = await prisma.voiceChant.count({
     *   where: {
     *     // ... the filter for the VoiceChants we want to count
     *   }
     * })
    **/
    count<T extends VoiceChantCountArgs>(
      args?: Subset<T, VoiceChantCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VoiceChantCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VoiceChant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceChantAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VoiceChantAggregateArgs>(args: Subset<T, VoiceChantAggregateArgs>): Prisma.PrismaPromise<GetVoiceChantAggregateType<T>>

    /**
     * Group by VoiceChant.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VoiceChantGroupByArgs} args - Group by arguments.
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
      T extends VoiceChantGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VoiceChantGroupByArgs['orderBy'] }
        : { orderBy?: VoiceChantGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VoiceChantGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVoiceChantGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VoiceChant model
   */
  readonly fields: VoiceChantFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VoiceChant.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VoiceChantClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the VoiceChant model
   */
  interface VoiceChantFieldRefs {
    readonly id: FieldRef<"VoiceChant", 'String'>
    readonly title: FieldRef<"VoiceChant", 'String'>
    readonly chantAr: FieldRef<"VoiceChant", 'String'>
    readonly chantEn: FieldRef<"VoiceChant", 'String'>
    readonly soundType: FieldRef<"VoiceChant", 'String'>
    readonly createdAt: FieldRef<"VoiceChant", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VoiceChant findUnique
   */
  export type VoiceChantFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceChant
     */
    select?: VoiceChantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceChant
     */
    omit?: VoiceChantOmit<ExtArgs> | null
    /**
     * Filter, which VoiceChant to fetch.
     */
    where: VoiceChantWhereUniqueInput
  }

  /**
   * VoiceChant findUniqueOrThrow
   */
  export type VoiceChantFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceChant
     */
    select?: VoiceChantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceChant
     */
    omit?: VoiceChantOmit<ExtArgs> | null
    /**
     * Filter, which VoiceChant to fetch.
     */
    where: VoiceChantWhereUniqueInput
  }

  /**
   * VoiceChant findFirst
   */
  export type VoiceChantFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceChant
     */
    select?: VoiceChantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceChant
     */
    omit?: VoiceChantOmit<ExtArgs> | null
    /**
     * Filter, which VoiceChant to fetch.
     */
    where?: VoiceChantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceChants to fetch.
     */
    orderBy?: VoiceChantOrderByWithRelationInput | VoiceChantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoiceChants.
     */
    cursor?: VoiceChantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceChants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceChants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoiceChants.
     */
    distinct?: VoiceChantScalarFieldEnum | VoiceChantScalarFieldEnum[]
  }

  /**
   * VoiceChant findFirstOrThrow
   */
  export type VoiceChantFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceChant
     */
    select?: VoiceChantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceChant
     */
    omit?: VoiceChantOmit<ExtArgs> | null
    /**
     * Filter, which VoiceChant to fetch.
     */
    where?: VoiceChantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceChants to fetch.
     */
    orderBy?: VoiceChantOrderByWithRelationInput | VoiceChantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VoiceChants.
     */
    cursor?: VoiceChantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceChants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceChants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoiceChants.
     */
    distinct?: VoiceChantScalarFieldEnum | VoiceChantScalarFieldEnum[]
  }

  /**
   * VoiceChant findMany
   */
  export type VoiceChantFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceChant
     */
    select?: VoiceChantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceChant
     */
    omit?: VoiceChantOmit<ExtArgs> | null
    /**
     * Filter, which VoiceChants to fetch.
     */
    where?: VoiceChantWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VoiceChants to fetch.
     */
    orderBy?: VoiceChantOrderByWithRelationInput | VoiceChantOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VoiceChants.
     */
    cursor?: VoiceChantWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VoiceChants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VoiceChants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VoiceChants.
     */
    distinct?: VoiceChantScalarFieldEnum | VoiceChantScalarFieldEnum[]
  }

  /**
   * VoiceChant create
   */
  export type VoiceChantCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceChant
     */
    select?: VoiceChantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceChant
     */
    omit?: VoiceChantOmit<ExtArgs> | null
    /**
     * The data needed to create a VoiceChant.
     */
    data: XOR<VoiceChantCreateInput, VoiceChantUncheckedCreateInput>
  }

  /**
   * VoiceChant createMany
   */
  export type VoiceChantCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VoiceChants.
     */
    data: VoiceChantCreateManyInput | VoiceChantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VoiceChant createManyAndReturn
   */
  export type VoiceChantCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceChant
     */
    select?: VoiceChantSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceChant
     */
    omit?: VoiceChantOmit<ExtArgs> | null
    /**
     * The data used to create many VoiceChants.
     */
    data: VoiceChantCreateManyInput | VoiceChantCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VoiceChant update
   */
  export type VoiceChantUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceChant
     */
    select?: VoiceChantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceChant
     */
    omit?: VoiceChantOmit<ExtArgs> | null
    /**
     * The data needed to update a VoiceChant.
     */
    data: XOR<VoiceChantUpdateInput, VoiceChantUncheckedUpdateInput>
    /**
     * Choose, which VoiceChant to update.
     */
    where: VoiceChantWhereUniqueInput
  }

  /**
   * VoiceChant updateMany
   */
  export type VoiceChantUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VoiceChants.
     */
    data: XOR<VoiceChantUpdateManyMutationInput, VoiceChantUncheckedUpdateManyInput>
    /**
     * Filter which VoiceChants to update
     */
    where?: VoiceChantWhereInput
    /**
     * Limit how many VoiceChants to update.
     */
    limit?: number
  }

  /**
   * VoiceChant updateManyAndReturn
   */
  export type VoiceChantUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceChant
     */
    select?: VoiceChantSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceChant
     */
    omit?: VoiceChantOmit<ExtArgs> | null
    /**
     * The data used to update VoiceChants.
     */
    data: XOR<VoiceChantUpdateManyMutationInput, VoiceChantUncheckedUpdateManyInput>
    /**
     * Filter which VoiceChants to update
     */
    where?: VoiceChantWhereInput
    /**
     * Limit how many VoiceChants to update.
     */
    limit?: number
  }

  /**
   * VoiceChant upsert
   */
  export type VoiceChantUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceChant
     */
    select?: VoiceChantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceChant
     */
    omit?: VoiceChantOmit<ExtArgs> | null
    /**
     * The filter to search for the VoiceChant to update in case it exists.
     */
    where: VoiceChantWhereUniqueInput
    /**
     * In case the VoiceChant found by the `where` argument doesn't exist, create a new VoiceChant with this data.
     */
    create: XOR<VoiceChantCreateInput, VoiceChantUncheckedCreateInput>
    /**
     * In case the VoiceChant was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VoiceChantUpdateInput, VoiceChantUncheckedUpdateInput>
  }

  /**
   * VoiceChant delete
   */
  export type VoiceChantDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceChant
     */
    select?: VoiceChantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceChant
     */
    omit?: VoiceChantOmit<ExtArgs> | null
    /**
     * Filter which VoiceChant to delete.
     */
    where: VoiceChantWhereUniqueInput
  }

  /**
   * VoiceChant deleteMany
   */
  export type VoiceChantDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VoiceChants to delete
     */
    where?: VoiceChantWhereInput
    /**
     * Limit how many VoiceChants to delete.
     */
    limit?: number
  }

  /**
   * VoiceChant without action
   */
  export type VoiceChantDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VoiceChant
     */
    select?: VoiceChantSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VoiceChant
     */
    omit?: VoiceChantOmit<ExtArgs> | null
  }


  /**
   * Model Settings
   */

  export type AggregateSettings = {
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  export type SettingsAvgAggregateOutputType = {
    heroAge: number | null
  }

  export type SettingsSumAggregateOutputType = {
    heroAge: number | null
  }

  export type SettingsMinAggregateOutputType = {
    id: string | null
    heroName: string | null
    heroAge: number | null
    pinCode: string | null
    favoriteSport: string | null
    soundEnabled: boolean | null
    updatedAt: Date | null
  }

  export type SettingsMaxAggregateOutputType = {
    id: string | null
    heroName: string | null
    heroAge: number | null
    pinCode: string | null
    favoriteSport: string | null
    soundEnabled: boolean | null
    updatedAt: Date | null
  }

  export type SettingsCountAggregateOutputType = {
    id: number
    heroName: number
    heroAge: number
    pinCode: number
    favoriteSport: number
    soundEnabled: number
    updatedAt: number
    _all: number
  }


  export type SettingsAvgAggregateInputType = {
    heroAge?: true
  }

  export type SettingsSumAggregateInputType = {
    heroAge?: true
  }

  export type SettingsMinAggregateInputType = {
    id?: true
    heroName?: true
    heroAge?: true
    pinCode?: true
    favoriteSport?: true
    soundEnabled?: true
    updatedAt?: true
  }

  export type SettingsMaxAggregateInputType = {
    id?: true
    heroName?: true
    heroAge?: true
    pinCode?: true
    favoriteSport?: true
    soundEnabled?: true
    updatedAt?: true
  }

  export type SettingsCountAggregateInputType = {
    id?: true
    heroName?: true
    heroAge?: true
    pinCode?: true
    favoriteSport?: true
    soundEnabled?: true
    updatedAt?: true
    _all?: true
  }

  export type SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to aggregate.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Settings
    **/
    _count?: true | SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SettingsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SettingsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SettingsMaxAggregateInputType
  }

  export type GetSettingsAggregateType<T extends SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSettings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSettings[P]>
      : GetScalarType<T[P], AggregateSettings[P]>
  }




  export type SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SettingsWhereInput
    orderBy?: SettingsOrderByWithAggregationInput | SettingsOrderByWithAggregationInput[]
    by: SettingsScalarFieldEnum[] | SettingsScalarFieldEnum
    having?: SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SettingsCountAggregateInputType | true
    _avg?: SettingsAvgAggregateInputType
    _sum?: SettingsSumAggregateInputType
    _min?: SettingsMinAggregateInputType
    _max?: SettingsMaxAggregateInputType
  }

  export type SettingsGroupByOutputType = {
    id: string
    heroName: string
    heroAge: number
    pinCode: string
    favoriteSport: string
    soundEnabled: boolean
    updatedAt: Date
    _count: SettingsCountAggregateOutputType | null
    _avg: SettingsAvgAggregateOutputType | null
    _sum: SettingsSumAggregateOutputType | null
    _min: SettingsMinAggregateOutputType | null
    _max: SettingsMaxAggregateOutputType | null
  }

  type GetSettingsGroupByPayload<T extends SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], SettingsGroupByOutputType[P]>
        }
      >
    >


  export type SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heroName?: boolean
    heroAge?: boolean
    pinCode?: boolean
    favoriteSport?: boolean
    soundEnabled?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heroName?: boolean
    heroAge?: boolean
    pinCode?: boolean
    favoriteSport?: boolean
    soundEnabled?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    heroName?: boolean
    heroAge?: boolean
    pinCode?: boolean
    favoriteSport?: boolean
    soundEnabled?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["settings"]>

  export type SettingsSelectScalar = {
    id?: boolean
    heroName?: boolean
    heroAge?: boolean
    pinCode?: boolean
    favoriteSport?: boolean
    soundEnabled?: boolean
    updatedAt?: boolean
  }

  export type SettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "heroName" | "heroAge" | "pinCode" | "favoriteSport" | "soundEnabled" | "updatedAt", ExtArgs["result"]["settings"]>

  export type $SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      heroName: string
      heroAge: number
      pinCode: string
      favoriteSport: string
      soundEnabled: boolean
      updatedAt: Date
    }, ExtArgs["result"]["settings"]>
    composites: {}
  }

  type SettingsGetPayload<S extends boolean | null | undefined | SettingsDefaultArgs> = $Result.GetResult<Prisma.$SettingsPayload, S>

  type SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SettingsCountAggregateInputType | true
    }

  export interface SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Settings'], meta: { name: 'Settings' } }
    /**
     * Find zero or one Settings that matches the filter.
     * @param {SettingsFindUniqueArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SettingsFindUniqueArgs>(args: SelectSubset<T, SettingsFindUniqueArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SettingsFindUniqueOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, SettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SettingsFindFirstArgs>(args?: SelectSubset<T, SettingsFindFirstArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindFirstOrThrowArgs} args - Arguments to find a Settings
     * @example
     * // Get one Settings
     * const settings = await prisma.settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, SettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Settings
     * const settings = await prisma.settings.findMany()
     * 
     * // Get first 10 Settings
     * const settings = await prisma.settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const settingsWithIdOnly = await prisma.settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SettingsFindManyArgs>(args?: SelectSubset<T, SettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Settings.
     * @param {SettingsCreateArgs} args - Arguments to create a Settings.
     * @example
     * // Create one Settings
     * const Settings = await prisma.settings.create({
     *   data: {
     *     // ... data to create a Settings
     *   }
     * })
     * 
     */
    create<T extends SettingsCreateArgs>(args: SelectSubset<T, SettingsCreateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Settings.
     * @param {SettingsCreateManyArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SettingsCreateManyArgs>(args?: SelectSubset<T, SettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Settings and returns the data saved in the database.
     * @param {SettingsCreateManyAndReturnArgs} args - Arguments to create many Settings.
     * @example
     * // Create many Settings
     * const settings = await prisma.settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, SettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Settings.
     * @param {SettingsDeleteArgs} args - Arguments to delete one Settings.
     * @example
     * // Delete one Settings
     * const Settings = await prisma.settings.delete({
     *   where: {
     *     // ... filter to delete one Settings
     *   }
     * })
     * 
     */
    delete<T extends SettingsDeleteArgs>(args: SelectSubset<T, SettingsDeleteArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Settings.
     * @param {SettingsUpdateArgs} args - Arguments to update one Settings.
     * @example
     * // Update one Settings
     * const settings = await prisma.settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SettingsUpdateArgs>(args: SelectSubset<T, SettingsUpdateArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Settings.
     * @param {SettingsDeleteManyArgs} args - Arguments to filter Settings to delete.
     * @example
     * // Delete a few Settings
     * const { count } = await prisma.settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SettingsDeleteManyArgs>(args?: SelectSubset<T, SettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SettingsUpdateManyArgs>(args: SelectSubset<T, SettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Settings and returns the data updated in the database.
     * @param {SettingsUpdateManyAndReturnArgs} args - Arguments to update many Settings.
     * @example
     * // Update many Settings
     * const settings = await prisma.settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Settings and only return the `id`
     * const settingsWithIdOnly = await prisma.settings.updateManyAndReturn({
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
    updateManyAndReturn<T extends SettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, SettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Settings.
     * @param {SettingsUpsertArgs} args - Arguments to update or create a Settings.
     * @example
     * // Update or create a Settings
     * const settings = await prisma.settings.upsert({
     *   create: {
     *     // ... data to create a Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Settings we want to update
     *   }
     * })
     */
    upsert<T extends SettingsUpsertArgs>(args: SelectSubset<T, SettingsUpsertArgs<ExtArgs>>): Prisma__SettingsClient<$Result.GetResult<Prisma.$SettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsCountArgs} args - Arguments to filter Settings to count.
     * @example
     * // Count the number of Settings
     * const count = await prisma.settings.count({
     *   where: {
     *     // ... the filter for the Settings we want to count
     *   }
     * })
    **/
    count<T extends SettingsCountArgs>(
      args?: Subset<T, SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SettingsAggregateArgs>(args: Subset<T, SettingsAggregateArgs>): Prisma.PrismaPromise<GetSettingsAggregateType<T>>

    /**
     * Group by Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SettingsGroupByArgs} args - Group by arguments.
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
      T extends SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SettingsGroupByArgs['orderBy'] }
        : { orderBy?: SettingsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Settings model
   */
  readonly fields: SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Settings model
   */
  interface SettingsFieldRefs {
    readonly id: FieldRef<"Settings", 'String'>
    readonly heroName: FieldRef<"Settings", 'String'>
    readonly heroAge: FieldRef<"Settings", 'Int'>
    readonly pinCode: FieldRef<"Settings", 'String'>
    readonly favoriteSport: FieldRef<"Settings", 'String'>
    readonly soundEnabled: FieldRef<"Settings", 'Boolean'>
    readonly updatedAt: FieldRef<"Settings", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Settings findUnique
   */
  export type SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findUniqueOrThrow
   */
  export type SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings findFirst
   */
  export type SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findFirstOrThrow
   */
  export type SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings findMany
   */
  export type SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter, which Settings to fetch.
     */
    where?: SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Settings to fetch.
     */
    orderBy?: SettingsOrderByWithRelationInput | SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Settings.
     */
    cursor?: SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Settings.
     */
    distinct?: SettingsScalarFieldEnum | SettingsScalarFieldEnum[]
  }

  /**
   * Settings create
   */
  export type SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a Settings.
     */
    data: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
  }

  /**
   * Settings createMany
   */
  export type SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings createManyAndReturn
   */
  export type SettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to create many Settings.
     */
    data: SettingsCreateManyInput | SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Settings update
   */
  export type SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a Settings.
     */
    data: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
    /**
     * Choose, which Settings to update.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings updateMany
   */
  export type SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings updateManyAndReturn
   */
  export type SettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The data used to update Settings.
     */
    data: XOR<SettingsUpdateManyMutationInput, SettingsUncheckedUpdateManyInput>
    /**
     * Filter which Settings to update
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to update.
     */
    limit?: number
  }

  /**
   * Settings upsert
   */
  export type SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the Settings to update in case it exists.
     */
    where: SettingsWhereUniqueInput
    /**
     * In case the Settings found by the `where` argument doesn't exist, create a new Settings with this data.
     */
    create: XOR<SettingsCreateInput, SettingsUncheckedCreateInput>
    /**
     * In case the Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SettingsUpdateInput, SettingsUncheckedUpdateInput>
  }

  /**
   * Settings delete
   */
  export type SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
    /**
     * Filter which Settings to delete.
     */
    where: SettingsWhereUniqueInput
  }

  /**
   * Settings deleteMany
   */
  export type SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Settings to delete
     */
    where?: SettingsWhereInput
    /**
     * Limit how many Settings to delete.
     */
    limit?: number
  }

  /**
   * Settings without action
   */
  export type SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Settings
     */
    select?: SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Settings
     */
    omit?: SettingsOmit<ExtArgs> | null
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


  export const GameScoreScalarFieldEnum: {
    id: 'id',
    playerName: 'playerName',
    gameType: 'gameType',
    score: 'score',
    stars: 'stars',
    level: 'level',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type GameScoreScalarFieldEnum = (typeof GameScoreScalarFieldEnum)[keyof typeof GameScoreScalarFieldEnum]


  export const GoalRecordScalarFieldEnum: {
    id: 'id',
    strikerName: 'strikerName',
    goalType: 'goalType',
    speedKmh: 'speedKmh',
    stadium: 'stadium',
    createdAt: 'createdAt'
  };

  export type GoalRecordScalarFieldEnum = (typeof GoalRecordScalarFieldEnum)[keyof typeof GoalRecordScalarFieldEnum]


  export const MonsterTruckScalarFieldEnum: {
    id: 'id',
    name: 'name',
    smashPower: 'smashPower',
    speed: 'speed',
    armor: 'armor',
    isUnlocked: 'isUnlocked',
    icon: 'icon',
    style: 'style'
  };

  export type MonsterTruckScalarFieldEnum = (typeof MonsterTruckScalarFieldEnum)[keyof typeof MonsterTruckScalarFieldEnum]


  export const SecretClubTrophyScalarFieldEnum: {
    id: 'id',
    trophyCode: 'trophyCode',
    title: 'title',
    description: 'description',
    icon: 'icon',
    isUnlocked: 'isUnlocked',
    unlockedAt: 'unlockedAt'
  };

  export type SecretClubTrophyScalarFieldEnum = (typeof SecretClubTrophyScalarFieldEnum)[keyof typeof SecretClubTrophyScalarFieldEnum]


  export const VoiceChantScalarFieldEnum: {
    id: 'id',
    title: 'title',
    chantAr: 'chantAr',
    chantEn: 'chantEn',
    soundType: 'soundType',
    createdAt: 'createdAt'
  };

  export type VoiceChantScalarFieldEnum = (typeof VoiceChantScalarFieldEnum)[keyof typeof VoiceChantScalarFieldEnum]


  export const SettingsScalarFieldEnum: {
    id: 'id',
    heroName: 'heroName',
    heroAge: 'heroAge',
    pinCode: 'pinCode',
    favoriteSport: 'favoriteSport',
    soundEnabled: 'soundEnabled',
    updatedAt: 'updatedAt'
  };

  export type SettingsScalarFieldEnum = (typeof SettingsScalarFieldEnum)[keyof typeof SettingsScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type GameScoreWhereInput = {
    AND?: GameScoreWhereInput | GameScoreWhereInput[]
    OR?: GameScoreWhereInput[]
    NOT?: GameScoreWhereInput | GameScoreWhereInput[]
    id?: StringFilter<"GameScore"> | string
    playerName?: StringFilter<"GameScore"> | string
    gameType?: StringFilter<"GameScore"> | string
    score?: IntFilter<"GameScore"> | number
    stars?: IntFilter<"GameScore"> | number
    level?: IntFilter<"GameScore"> | number
    details?: StringNullableFilter<"GameScore"> | string | null
    createdAt?: DateTimeFilter<"GameScore"> | Date | string
  }

  export type GameScoreOrderByWithRelationInput = {
    id?: SortOrder
    playerName?: SortOrder
    gameType?: SortOrder
    score?: SortOrder
    stars?: SortOrder
    level?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type GameScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GameScoreWhereInput | GameScoreWhereInput[]
    OR?: GameScoreWhereInput[]
    NOT?: GameScoreWhereInput | GameScoreWhereInput[]
    playerName?: StringFilter<"GameScore"> | string
    gameType?: StringFilter<"GameScore"> | string
    score?: IntFilter<"GameScore"> | number
    stars?: IntFilter<"GameScore"> | number
    level?: IntFilter<"GameScore"> | number
    details?: StringNullableFilter<"GameScore"> | string | null
    createdAt?: DateTimeFilter<"GameScore"> | Date | string
  }, "id">

  export type GameScoreOrderByWithAggregationInput = {
    id?: SortOrder
    playerName?: SortOrder
    gameType?: SortOrder
    score?: SortOrder
    stars?: SortOrder
    level?: SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: GameScoreCountOrderByAggregateInput
    _avg?: GameScoreAvgOrderByAggregateInput
    _max?: GameScoreMaxOrderByAggregateInput
    _min?: GameScoreMinOrderByAggregateInput
    _sum?: GameScoreSumOrderByAggregateInput
  }

  export type GameScoreScalarWhereWithAggregatesInput = {
    AND?: GameScoreScalarWhereWithAggregatesInput | GameScoreScalarWhereWithAggregatesInput[]
    OR?: GameScoreScalarWhereWithAggregatesInput[]
    NOT?: GameScoreScalarWhereWithAggregatesInput | GameScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GameScore"> | string
    playerName?: StringWithAggregatesFilter<"GameScore"> | string
    gameType?: StringWithAggregatesFilter<"GameScore"> | string
    score?: IntWithAggregatesFilter<"GameScore"> | number
    stars?: IntWithAggregatesFilter<"GameScore"> | number
    level?: IntWithAggregatesFilter<"GameScore"> | number
    details?: StringNullableWithAggregatesFilter<"GameScore"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"GameScore"> | Date | string
  }

  export type GoalRecordWhereInput = {
    AND?: GoalRecordWhereInput | GoalRecordWhereInput[]
    OR?: GoalRecordWhereInput[]
    NOT?: GoalRecordWhereInput | GoalRecordWhereInput[]
    id?: StringFilter<"GoalRecord"> | string
    strikerName?: StringFilter<"GoalRecord"> | string
    goalType?: StringFilter<"GoalRecord"> | string
    speedKmh?: IntFilter<"GoalRecord"> | number
    stadium?: StringFilter<"GoalRecord"> | string
    createdAt?: DateTimeFilter<"GoalRecord"> | Date | string
  }

  export type GoalRecordOrderByWithRelationInput = {
    id?: SortOrder
    strikerName?: SortOrder
    goalType?: SortOrder
    speedKmh?: SortOrder
    stadium?: SortOrder
    createdAt?: SortOrder
  }

  export type GoalRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GoalRecordWhereInput | GoalRecordWhereInput[]
    OR?: GoalRecordWhereInput[]
    NOT?: GoalRecordWhereInput | GoalRecordWhereInput[]
    strikerName?: StringFilter<"GoalRecord"> | string
    goalType?: StringFilter<"GoalRecord"> | string
    speedKmh?: IntFilter<"GoalRecord"> | number
    stadium?: StringFilter<"GoalRecord"> | string
    createdAt?: DateTimeFilter<"GoalRecord"> | Date | string
  }, "id">

  export type GoalRecordOrderByWithAggregationInput = {
    id?: SortOrder
    strikerName?: SortOrder
    goalType?: SortOrder
    speedKmh?: SortOrder
    stadium?: SortOrder
    createdAt?: SortOrder
    _count?: GoalRecordCountOrderByAggregateInput
    _avg?: GoalRecordAvgOrderByAggregateInput
    _max?: GoalRecordMaxOrderByAggregateInput
    _min?: GoalRecordMinOrderByAggregateInput
    _sum?: GoalRecordSumOrderByAggregateInput
  }

  export type GoalRecordScalarWhereWithAggregatesInput = {
    AND?: GoalRecordScalarWhereWithAggregatesInput | GoalRecordScalarWhereWithAggregatesInput[]
    OR?: GoalRecordScalarWhereWithAggregatesInput[]
    NOT?: GoalRecordScalarWhereWithAggregatesInput | GoalRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GoalRecord"> | string
    strikerName?: StringWithAggregatesFilter<"GoalRecord"> | string
    goalType?: StringWithAggregatesFilter<"GoalRecord"> | string
    speedKmh?: IntWithAggregatesFilter<"GoalRecord"> | number
    stadium?: StringWithAggregatesFilter<"GoalRecord"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GoalRecord"> | Date | string
  }

  export type MonsterTruckWhereInput = {
    AND?: MonsterTruckWhereInput | MonsterTruckWhereInput[]
    OR?: MonsterTruckWhereInput[]
    NOT?: MonsterTruckWhereInput | MonsterTruckWhereInput[]
    id?: StringFilter<"MonsterTruck"> | string
    name?: StringFilter<"MonsterTruck"> | string
    smashPower?: IntFilter<"MonsterTruck"> | number
    speed?: IntFilter<"MonsterTruck"> | number
    armor?: IntFilter<"MonsterTruck"> | number
    isUnlocked?: BoolFilter<"MonsterTruck"> | boolean
    icon?: StringFilter<"MonsterTruck"> | string
    style?: StringFilter<"MonsterTruck"> | string
  }

  export type MonsterTruckOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    smashPower?: SortOrder
    speed?: SortOrder
    armor?: SortOrder
    isUnlocked?: SortOrder
    icon?: SortOrder
    style?: SortOrder
  }

  export type MonsterTruckWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MonsterTruckWhereInput | MonsterTruckWhereInput[]
    OR?: MonsterTruckWhereInput[]
    NOT?: MonsterTruckWhereInput | MonsterTruckWhereInput[]
    name?: StringFilter<"MonsterTruck"> | string
    smashPower?: IntFilter<"MonsterTruck"> | number
    speed?: IntFilter<"MonsterTruck"> | number
    armor?: IntFilter<"MonsterTruck"> | number
    isUnlocked?: BoolFilter<"MonsterTruck"> | boolean
    icon?: StringFilter<"MonsterTruck"> | string
    style?: StringFilter<"MonsterTruck"> | string
  }, "id">

  export type MonsterTruckOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    smashPower?: SortOrder
    speed?: SortOrder
    armor?: SortOrder
    isUnlocked?: SortOrder
    icon?: SortOrder
    style?: SortOrder
    _count?: MonsterTruckCountOrderByAggregateInput
    _avg?: MonsterTruckAvgOrderByAggregateInput
    _max?: MonsterTruckMaxOrderByAggregateInput
    _min?: MonsterTruckMinOrderByAggregateInput
    _sum?: MonsterTruckSumOrderByAggregateInput
  }

  export type MonsterTruckScalarWhereWithAggregatesInput = {
    AND?: MonsterTruckScalarWhereWithAggregatesInput | MonsterTruckScalarWhereWithAggregatesInput[]
    OR?: MonsterTruckScalarWhereWithAggregatesInput[]
    NOT?: MonsterTruckScalarWhereWithAggregatesInput | MonsterTruckScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MonsterTruck"> | string
    name?: StringWithAggregatesFilter<"MonsterTruck"> | string
    smashPower?: IntWithAggregatesFilter<"MonsterTruck"> | number
    speed?: IntWithAggregatesFilter<"MonsterTruck"> | number
    armor?: IntWithAggregatesFilter<"MonsterTruck"> | number
    isUnlocked?: BoolWithAggregatesFilter<"MonsterTruck"> | boolean
    icon?: StringWithAggregatesFilter<"MonsterTruck"> | string
    style?: StringWithAggregatesFilter<"MonsterTruck"> | string
  }

  export type SecretClubTrophyWhereInput = {
    AND?: SecretClubTrophyWhereInput | SecretClubTrophyWhereInput[]
    OR?: SecretClubTrophyWhereInput[]
    NOT?: SecretClubTrophyWhereInput | SecretClubTrophyWhereInput[]
    id?: StringFilter<"SecretClubTrophy"> | string
    trophyCode?: StringFilter<"SecretClubTrophy"> | string
    title?: StringFilter<"SecretClubTrophy"> | string
    description?: StringFilter<"SecretClubTrophy"> | string
    icon?: StringFilter<"SecretClubTrophy"> | string
    isUnlocked?: BoolFilter<"SecretClubTrophy"> | boolean
    unlockedAt?: DateTimeNullableFilter<"SecretClubTrophy"> | Date | string | null
  }

  export type SecretClubTrophyOrderByWithRelationInput = {
    id?: SortOrder
    trophyCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    isUnlocked?: SortOrder
    unlockedAt?: SortOrderInput | SortOrder
  }

  export type SecretClubTrophyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    trophyCode?: string
    AND?: SecretClubTrophyWhereInput | SecretClubTrophyWhereInput[]
    OR?: SecretClubTrophyWhereInput[]
    NOT?: SecretClubTrophyWhereInput | SecretClubTrophyWhereInput[]
    title?: StringFilter<"SecretClubTrophy"> | string
    description?: StringFilter<"SecretClubTrophy"> | string
    icon?: StringFilter<"SecretClubTrophy"> | string
    isUnlocked?: BoolFilter<"SecretClubTrophy"> | boolean
    unlockedAt?: DateTimeNullableFilter<"SecretClubTrophy"> | Date | string | null
  }, "id" | "trophyCode">

  export type SecretClubTrophyOrderByWithAggregationInput = {
    id?: SortOrder
    trophyCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    isUnlocked?: SortOrder
    unlockedAt?: SortOrderInput | SortOrder
    _count?: SecretClubTrophyCountOrderByAggregateInput
    _max?: SecretClubTrophyMaxOrderByAggregateInput
    _min?: SecretClubTrophyMinOrderByAggregateInput
  }

  export type SecretClubTrophyScalarWhereWithAggregatesInput = {
    AND?: SecretClubTrophyScalarWhereWithAggregatesInput | SecretClubTrophyScalarWhereWithAggregatesInput[]
    OR?: SecretClubTrophyScalarWhereWithAggregatesInput[]
    NOT?: SecretClubTrophyScalarWhereWithAggregatesInput | SecretClubTrophyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SecretClubTrophy"> | string
    trophyCode?: StringWithAggregatesFilter<"SecretClubTrophy"> | string
    title?: StringWithAggregatesFilter<"SecretClubTrophy"> | string
    description?: StringWithAggregatesFilter<"SecretClubTrophy"> | string
    icon?: StringWithAggregatesFilter<"SecretClubTrophy"> | string
    isUnlocked?: BoolWithAggregatesFilter<"SecretClubTrophy"> | boolean
    unlockedAt?: DateTimeNullableWithAggregatesFilter<"SecretClubTrophy"> | Date | string | null
  }

  export type VoiceChantWhereInput = {
    AND?: VoiceChantWhereInput | VoiceChantWhereInput[]
    OR?: VoiceChantWhereInput[]
    NOT?: VoiceChantWhereInput | VoiceChantWhereInput[]
    id?: StringFilter<"VoiceChant"> | string
    title?: StringFilter<"VoiceChant"> | string
    chantAr?: StringFilter<"VoiceChant"> | string
    chantEn?: StringFilter<"VoiceChant"> | string
    soundType?: StringFilter<"VoiceChant"> | string
    createdAt?: DateTimeFilter<"VoiceChant"> | Date | string
  }

  export type VoiceChantOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    chantAr?: SortOrder
    chantEn?: SortOrder
    soundType?: SortOrder
    createdAt?: SortOrder
  }

  export type VoiceChantWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VoiceChantWhereInput | VoiceChantWhereInput[]
    OR?: VoiceChantWhereInput[]
    NOT?: VoiceChantWhereInput | VoiceChantWhereInput[]
    title?: StringFilter<"VoiceChant"> | string
    chantAr?: StringFilter<"VoiceChant"> | string
    chantEn?: StringFilter<"VoiceChant"> | string
    soundType?: StringFilter<"VoiceChant"> | string
    createdAt?: DateTimeFilter<"VoiceChant"> | Date | string
  }, "id">

  export type VoiceChantOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    chantAr?: SortOrder
    chantEn?: SortOrder
    soundType?: SortOrder
    createdAt?: SortOrder
    _count?: VoiceChantCountOrderByAggregateInput
    _max?: VoiceChantMaxOrderByAggregateInput
    _min?: VoiceChantMinOrderByAggregateInput
  }

  export type VoiceChantScalarWhereWithAggregatesInput = {
    AND?: VoiceChantScalarWhereWithAggregatesInput | VoiceChantScalarWhereWithAggregatesInput[]
    OR?: VoiceChantScalarWhereWithAggregatesInput[]
    NOT?: VoiceChantScalarWhereWithAggregatesInput | VoiceChantScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VoiceChant"> | string
    title?: StringWithAggregatesFilter<"VoiceChant"> | string
    chantAr?: StringWithAggregatesFilter<"VoiceChant"> | string
    chantEn?: StringWithAggregatesFilter<"VoiceChant"> | string
    soundType?: StringWithAggregatesFilter<"VoiceChant"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VoiceChant"> | Date | string
  }

  export type SettingsWhereInput = {
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    id?: StringFilter<"Settings"> | string
    heroName?: StringFilter<"Settings"> | string
    heroAge?: IntFilter<"Settings"> | number
    pinCode?: StringFilter<"Settings"> | string
    favoriteSport?: StringFilter<"Settings"> | string
    soundEnabled?: BoolFilter<"Settings"> | boolean
    updatedAt?: DateTimeFilter<"Settings"> | Date | string
  }

  export type SettingsOrderByWithRelationInput = {
    id?: SortOrder
    heroName?: SortOrder
    heroAge?: SortOrder
    pinCode?: SortOrder
    favoriteSport?: SortOrder
    soundEnabled?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SettingsWhereInput | SettingsWhereInput[]
    OR?: SettingsWhereInput[]
    NOT?: SettingsWhereInput | SettingsWhereInput[]
    heroName?: StringFilter<"Settings"> | string
    heroAge?: IntFilter<"Settings"> | number
    pinCode?: StringFilter<"Settings"> | string
    favoriteSport?: StringFilter<"Settings"> | string
    soundEnabled?: BoolFilter<"Settings"> | boolean
    updatedAt?: DateTimeFilter<"Settings"> | Date | string
  }, "id">

  export type SettingsOrderByWithAggregationInput = {
    id?: SortOrder
    heroName?: SortOrder
    heroAge?: SortOrder
    pinCode?: SortOrder
    favoriteSport?: SortOrder
    soundEnabled?: SortOrder
    updatedAt?: SortOrder
    _count?: SettingsCountOrderByAggregateInput
    _avg?: SettingsAvgOrderByAggregateInput
    _max?: SettingsMaxOrderByAggregateInput
    _min?: SettingsMinOrderByAggregateInput
    _sum?: SettingsSumOrderByAggregateInput
  }

  export type SettingsScalarWhereWithAggregatesInput = {
    AND?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    OR?: SettingsScalarWhereWithAggregatesInput[]
    NOT?: SettingsScalarWhereWithAggregatesInput | SettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Settings"> | string
    heroName?: StringWithAggregatesFilter<"Settings"> | string
    heroAge?: IntWithAggregatesFilter<"Settings"> | number
    pinCode?: StringWithAggregatesFilter<"Settings"> | string
    favoriteSport?: StringWithAggregatesFilter<"Settings"> | string
    soundEnabled?: BoolWithAggregatesFilter<"Settings"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"Settings"> | Date | string
  }

  export type GameScoreCreateInput = {
    id?: string
    playerName?: string
    gameType: string
    score?: number
    stars?: number
    level?: number
    details?: string | null
    createdAt?: Date | string
  }

  export type GameScoreUncheckedCreateInput = {
    id?: string
    playerName?: string
    gameType: string
    score?: number
    stars?: number
    level?: number
    details?: string | null
    createdAt?: Date | string
  }

  export type GameScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerName?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    stars?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerName?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    stars?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameScoreCreateManyInput = {
    id?: string
    playerName?: string
    gameType: string
    score?: number
    stars?: number
    level?: number
    details?: string | null
    createdAt?: Date | string
  }

  export type GameScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerName?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    stars?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    playerName?: StringFieldUpdateOperationsInput | string
    gameType?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    stars?: IntFieldUpdateOperationsInput | number
    level?: IntFieldUpdateOperationsInput | number
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalRecordCreateInput = {
    id?: string
    strikerName?: string
    goalType?: string
    speedKmh?: number
    stadium?: string
    createdAt?: Date | string
  }

  export type GoalRecordUncheckedCreateInput = {
    id?: string
    strikerName?: string
    goalType?: string
    speedKmh?: number
    stadium?: string
    createdAt?: Date | string
  }

  export type GoalRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    strikerName?: StringFieldUpdateOperationsInput | string
    goalType?: StringFieldUpdateOperationsInput | string
    speedKmh?: IntFieldUpdateOperationsInput | number
    stadium?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    strikerName?: StringFieldUpdateOperationsInput | string
    goalType?: StringFieldUpdateOperationsInput | string
    speedKmh?: IntFieldUpdateOperationsInput | number
    stadium?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalRecordCreateManyInput = {
    id?: string
    strikerName?: string
    goalType?: string
    speedKmh?: number
    stadium?: string
    createdAt?: Date | string
  }

  export type GoalRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    strikerName?: StringFieldUpdateOperationsInput | string
    goalType?: StringFieldUpdateOperationsInput | string
    speedKmh?: IntFieldUpdateOperationsInput | number
    stadium?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GoalRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    strikerName?: StringFieldUpdateOperationsInput | string
    goalType?: StringFieldUpdateOperationsInput | string
    speedKmh?: IntFieldUpdateOperationsInput | number
    stadium?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MonsterTruckCreateInput = {
    id?: string
    name: string
    smashPower?: number
    speed?: number
    armor?: number
    isUnlocked?: boolean
    icon: string
    style?: string
  }

  export type MonsterTruckUncheckedCreateInput = {
    id?: string
    name: string
    smashPower?: number
    speed?: number
    armor?: number
    isUnlocked?: boolean
    icon: string
    style?: string
  }

  export type MonsterTruckUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    smashPower?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    armor?: IntFieldUpdateOperationsInput | number
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
  }

  export type MonsterTruckUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    smashPower?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    armor?: IntFieldUpdateOperationsInput | number
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
  }

  export type MonsterTruckCreateManyInput = {
    id?: string
    name: string
    smashPower?: number
    speed?: number
    armor?: number
    isUnlocked?: boolean
    icon: string
    style?: string
  }

  export type MonsterTruckUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    smashPower?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    armor?: IntFieldUpdateOperationsInput | number
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
  }

  export type MonsterTruckUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    smashPower?: IntFieldUpdateOperationsInput | number
    speed?: IntFieldUpdateOperationsInput | number
    armor?: IntFieldUpdateOperationsInput | number
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    icon?: StringFieldUpdateOperationsInput | string
    style?: StringFieldUpdateOperationsInput | string
  }

  export type SecretClubTrophyCreateInput = {
    id?: string
    trophyCode: string
    title: string
    description: string
    icon: string
    isUnlocked?: boolean
    unlockedAt?: Date | string | null
  }

  export type SecretClubTrophyUncheckedCreateInput = {
    id?: string
    trophyCode: string
    title: string
    description: string
    icon: string
    isUnlocked?: boolean
    unlockedAt?: Date | string | null
  }

  export type SecretClubTrophyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trophyCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SecretClubTrophyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trophyCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SecretClubTrophyCreateManyInput = {
    id?: string
    trophyCode: string
    title: string
    description: string
    icon: string
    isUnlocked?: boolean
    unlockedAt?: Date | string | null
  }

  export type SecretClubTrophyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    trophyCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SecretClubTrophyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    trophyCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
    isUnlocked?: BoolFieldUpdateOperationsInput | boolean
    unlockedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type VoiceChantCreateInput = {
    id?: string
    title: string
    chantAr: string
    chantEn: string
    soundType?: string
    createdAt?: Date | string
  }

  export type VoiceChantUncheckedCreateInput = {
    id?: string
    title: string
    chantAr: string
    chantEn: string
    soundType?: string
    createdAt?: Date | string
  }

  export type VoiceChantUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chantAr?: StringFieldUpdateOperationsInput | string
    chantEn?: StringFieldUpdateOperationsInput | string
    soundType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoiceChantUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chantAr?: StringFieldUpdateOperationsInput | string
    chantEn?: StringFieldUpdateOperationsInput | string
    soundType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoiceChantCreateManyInput = {
    id?: string
    title: string
    chantAr: string
    chantEn: string
    soundType?: string
    createdAt?: Date | string
  }

  export type VoiceChantUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chantAr?: StringFieldUpdateOperationsInput | string
    chantEn?: StringFieldUpdateOperationsInput | string
    soundType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VoiceChantUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    chantAr?: StringFieldUpdateOperationsInput | string
    chantEn?: StringFieldUpdateOperationsInput | string
    soundType?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsCreateInput = {
    id?: string
    heroName?: string
    heroAge?: number
    pinCode?: string
    favoriteSport?: string
    soundEnabled?: boolean
    updatedAt?: Date | string
  }

  export type SettingsUncheckedCreateInput = {
    id?: string
    heroName?: string
    heroAge?: number
    pinCode?: string
    favoriteSport?: string
    soundEnabled?: boolean
    updatedAt?: Date | string
  }

  export type SettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    heroName?: StringFieldUpdateOperationsInput | string
    heroAge?: IntFieldUpdateOperationsInput | number
    pinCode?: StringFieldUpdateOperationsInput | string
    favoriteSport?: StringFieldUpdateOperationsInput | string
    soundEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    heroName?: StringFieldUpdateOperationsInput | string
    heroAge?: IntFieldUpdateOperationsInput | number
    pinCode?: StringFieldUpdateOperationsInput | string
    favoriteSport?: StringFieldUpdateOperationsInput | string
    soundEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsCreateManyInput = {
    id?: string
    heroName?: string
    heroAge?: number
    pinCode?: string
    favoriteSport?: string
    soundEnabled?: boolean
    updatedAt?: Date | string
  }

  export type SettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    heroName?: StringFieldUpdateOperationsInput | string
    heroAge?: IntFieldUpdateOperationsInput | number
    pinCode?: StringFieldUpdateOperationsInput | string
    favoriteSport?: StringFieldUpdateOperationsInput | string
    soundEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    heroName?: StringFieldUpdateOperationsInput | string
    heroAge?: IntFieldUpdateOperationsInput | number
    pinCode?: StringFieldUpdateOperationsInput | string
    favoriteSport?: StringFieldUpdateOperationsInput | string
    soundEnabled?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GameScoreCountOrderByAggregateInput = {
    id?: SortOrder
    playerName?: SortOrder
    gameType?: SortOrder
    score?: SortOrder
    stars?: SortOrder
    level?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type GameScoreAvgOrderByAggregateInput = {
    score?: SortOrder
    stars?: SortOrder
    level?: SortOrder
  }

  export type GameScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    playerName?: SortOrder
    gameType?: SortOrder
    score?: SortOrder
    stars?: SortOrder
    level?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type GameScoreMinOrderByAggregateInput = {
    id?: SortOrder
    playerName?: SortOrder
    gameType?: SortOrder
    score?: SortOrder
    stars?: SortOrder
    level?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type GameScoreSumOrderByAggregateInput = {
    score?: SortOrder
    stars?: SortOrder
    level?: SortOrder
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

  export type GoalRecordCountOrderByAggregateInput = {
    id?: SortOrder
    strikerName?: SortOrder
    goalType?: SortOrder
    speedKmh?: SortOrder
    stadium?: SortOrder
    createdAt?: SortOrder
  }

  export type GoalRecordAvgOrderByAggregateInput = {
    speedKmh?: SortOrder
  }

  export type GoalRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    strikerName?: SortOrder
    goalType?: SortOrder
    speedKmh?: SortOrder
    stadium?: SortOrder
    createdAt?: SortOrder
  }

  export type GoalRecordMinOrderByAggregateInput = {
    id?: SortOrder
    strikerName?: SortOrder
    goalType?: SortOrder
    speedKmh?: SortOrder
    stadium?: SortOrder
    createdAt?: SortOrder
  }

  export type GoalRecordSumOrderByAggregateInput = {
    speedKmh?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type MonsterTruckCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    smashPower?: SortOrder
    speed?: SortOrder
    armor?: SortOrder
    isUnlocked?: SortOrder
    icon?: SortOrder
    style?: SortOrder
  }

  export type MonsterTruckAvgOrderByAggregateInput = {
    smashPower?: SortOrder
    speed?: SortOrder
    armor?: SortOrder
  }

  export type MonsterTruckMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    smashPower?: SortOrder
    speed?: SortOrder
    armor?: SortOrder
    isUnlocked?: SortOrder
    icon?: SortOrder
    style?: SortOrder
  }

  export type MonsterTruckMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    smashPower?: SortOrder
    speed?: SortOrder
    armor?: SortOrder
    isUnlocked?: SortOrder
    icon?: SortOrder
    style?: SortOrder
  }

  export type MonsterTruckSumOrderByAggregateInput = {
    smashPower?: SortOrder
    speed?: SortOrder
    armor?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type SecretClubTrophyCountOrderByAggregateInput = {
    id?: SortOrder
    trophyCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    isUnlocked?: SortOrder
    unlockedAt?: SortOrder
  }

  export type SecretClubTrophyMaxOrderByAggregateInput = {
    id?: SortOrder
    trophyCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    isUnlocked?: SortOrder
    unlockedAt?: SortOrder
  }

  export type SecretClubTrophyMinOrderByAggregateInput = {
    id?: SortOrder
    trophyCode?: SortOrder
    title?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    isUnlocked?: SortOrder
    unlockedAt?: SortOrder
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

  export type VoiceChantCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    chantAr?: SortOrder
    chantEn?: SortOrder
    soundType?: SortOrder
    createdAt?: SortOrder
  }

  export type VoiceChantMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    chantAr?: SortOrder
    chantEn?: SortOrder
    soundType?: SortOrder
    createdAt?: SortOrder
  }

  export type VoiceChantMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    chantAr?: SortOrder
    chantEn?: SortOrder
    soundType?: SortOrder
    createdAt?: SortOrder
  }

  export type SettingsCountOrderByAggregateInput = {
    id?: SortOrder
    heroName?: SortOrder
    heroAge?: SortOrder
    pinCode?: SortOrder
    favoriteSport?: SortOrder
    soundEnabled?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsAvgOrderByAggregateInput = {
    heroAge?: SortOrder
  }

  export type SettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    heroName?: SortOrder
    heroAge?: SortOrder
    pinCode?: SortOrder
    favoriteSport?: SortOrder
    soundEnabled?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsMinOrderByAggregateInput = {
    id?: SortOrder
    heroName?: SortOrder
    heroAge?: SortOrder
    pinCode?: SortOrder
    favoriteSport?: SortOrder
    soundEnabled?: SortOrder
    updatedAt?: SortOrder
  }

  export type SettingsSumOrderByAggregateInput = {
    heroAge?: SortOrder
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

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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