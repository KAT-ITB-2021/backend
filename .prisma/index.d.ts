
/**
 * Client
**/

import * as runtime from './runtime';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model DetailMentorings
 */

export type DetailMentorings = {
  id: number
  day: number | null
  judul: string | null
  deskripsi: string | null
  start: Date | null
  end: Date | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Files
 */

export type Files = {
  id: number
  materi: number | null
  name: string | null
  path: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model JadwalPresensis
 */

export type JadwalPresensis = {
  id: number
  judul: string | null
  start: Date | null
  end: Date | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Materis
 */

export type Materis = {
  id: number
  bagian: string | null
  judul: string | null
  deskripsi: string | null
  embed: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Mentorings
 */

export type Mentorings = {
  id: number
  kelompok: string | null
  link: string | null
  detail: number | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model PresensiPeserta
 */

export type PresensiPeserta = {
  id: number
  hadir: boolean | null
  user: number | null
  jadwal: number | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model SequelizeMeta
 */

export type SequelizeMeta = {
  name: string
}

/**
 * Model SubmisiTugas
 */

export type SubmisiTugas = {
  id: number
  pemilik: number | null
  tugas: number | null
  nama: string | null
  path: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model Tugas
 */

export type Tugas = {
  id: number
  bagian: string | null
  judul: string | null
  deskripsi: string | null
  createdAt: Date
  updatedAt: Date
  deadline: Date | null
}

/**
 * Model Users
 */

export type Users = {
  id: number
  nama: string | null
  nim: string | null
  email: string | null
  kelompok: number | null
  hashedPassword: string | null
  salt: string | null
  role: string | null
  createdAt: Date
  updatedAt: Date
}

/**
 * Model webinars
 */

export type webinars = {
  id: number
  ytid: string | null
  judul: string | null
  deskripsi: string | null
  start: Date | null
  end: Date | null
  createdAt: Date
  updatedAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more DetailMentorings
 * const detailMentorings = await prisma.detailMentorings.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more DetailMentorings
   * const detailMentorings = await prisma.detailMentorings.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.$executeRaw``, values will be escaped automatically
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.$executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.$queryRaw``, values will be escaped automatically
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.$queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw < T = any > (query: string | TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

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
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P]): Promise<UnwrapTuple<P>>

      /**
   * `prisma.detailMentorings`: Exposes CRUD operations for the **DetailMentorings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DetailMentorings
    * const detailMentorings = await prisma.detailMentorings.findMany()
    * ```
    */
  get detailMentorings(): Prisma.DetailMentoringsDelegate<GlobalReject>;

  /**
   * `prisma.files`: Exposes CRUD operations for the **Files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.files.findMany()
    * ```
    */
  get files(): Prisma.FilesDelegate<GlobalReject>;

  /**
   * `prisma.jadwalPresensis`: Exposes CRUD operations for the **JadwalPresensis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more JadwalPresenses
    * const jadwalPresenses = await prisma.jadwalPresensis.findMany()
    * ```
    */
  get jadwalPresensis(): Prisma.JadwalPresensisDelegate<GlobalReject>;

  /**
   * `prisma.materis`: Exposes CRUD operations for the **Materis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materises
    * const materises = await prisma.materis.findMany()
    * ```
    */
  get materis(): Prisma.MaterisDelegate<GlobalReject>;

  /**
   * `prisma.mentorings`: Exposes CRUD operations for the **Mentorings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Mentorings
    * const mentorings = await prisma.mentorings.findMany()
    * ```
    */
  get mentorings(): Prisma.MentoringsDelegate<GlobalReject>;

  /**
   * `prisma.presensiPeserta`: Exposes CRUD operations for the **PresensiPeserta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PresensiPesertas
    * const presensiPesertas = await prisma.presensiPeserta.findMany()
    * ```
    */
  get presensiPeserta(): Prisma.PresensiPesertaDelegate<GlobalReject>;

  /**
   * `prisma.sequelizeMeta`: Exposes CRUD operations for the **SequelizeMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SequelizeMetas
    * const sequelizeMetas = await prisma.sequelizeMeta.findMany()
    * ```
    */
  get sequelizeMeta(): Prisma.SequelizeMetaDelegate<GlobalReject>;

  /**
   * `prisma.submisiTugas`: Exposes CRUD operations for the **SubmisiTugas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubmisiTugases
    * const submisiTugases = await prisma.submisiTugas.findMany()
    * ```
    */
  get submisiTugas(): Prisma.SubmisiTugasDelegate<GlobalReject>;

  /**
   * `prisma.tugas`: Exposes CRUD operations for the **Tugas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tugases
    * const tugases = await prisma.tugas.findMany()
    * ```
    */
  get tugas(): Prisma.TugasDelegate<GlobalReject>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<GlobalReject>;

  /**
   * `prisma.webinars`: Exposes CRUD operations for the **webinars** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Webinars
    * const webinars = await prisma.webinars.findMany()
    * ```
    */
  get webinars(): Prisma.webinarsDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

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

  /**
   * Prisma Client JS version: 2.28.0
   * Query Engine version: 89facabd0366f63911d089156a7a70125bfbcd27
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}
 
  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | null | JsonObject | JsonArray

  /**
   * Same as JsonObject, but allows undefined
   */
  export type InputJsonObject = {[Key in string]?: JsonValue}
 
  export interface InputJsonArray extends Array<JsonValue> {}
 
  export type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray
   type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

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
  type XOR<T, U> = (T | U) extends object ? (Without<T, U> & U) | (Without<U, T> & T) : T | U;


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Buffer
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

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    DetailMentorings: 'DetailMentorings',
    Files: 'Files',
    JadwalPresensis: 'JadwalPresensis',
    Materis: 'Materis',
    Mentorings: 'Mentorings',
    PresensiPeserta: 'PresensiPeserta',
    SequelizeMeta: 'SequelizeMeta',
    SubmisiTugas: 'SubmisiTugas',
    Tugas: 'Tugas',
    Users: 'Users',
    webinars: 'webinars'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends boolean
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     *  * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your prisma.schema file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined; 
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
   * Model DetailMentorings
   */


  export type AggregateDetailMentorings = {
    _count: DetailMentoringsCountAggregateOutputType | null
    count: DetailMentoringsCountAggregateOutputType | null
    _avg: DetailMentoringsAvgAggregateOutputType | null
    avg: DetailMentoringsAvgAggregateOutputType | null
    _sum: DetailMentoringsSumAggregateOutputType | null
    sum: DetailMentoringsSumAggregateOutputType | null
    _min: DetailMentoringsMinAggregateOutputType | null
    min: DetailMentoringsMinAggregateOutputType | null
    _max: DetailMentoringsMaxAggregateOutputType | null
    max: DetailMentoringsMaxAggregateOutputType | null
  }

  export type DetailMentoringsAvgAggregateOutputType = {
    id: number | null
    day: number | null
  }

  export type DetailMentoringsSumAggregateOutputType = {
    id: number | null
    day: number | null
  }

  export type DetailMentoringsMinAggregateOutputType = {
    id: number | null
    day: number | null
    judul: string | null
    deskripsi: string | null
    start: Date | null
    end: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DetailMentoringsMaxAggregateOutputType = {
    id: number | null
    day: number | null
    judul: string | null
    deskripsi: string | null
    start: Date | null
    end: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DetailMentoringsCountAggregateOutputType = {
    id: number
    day: number
    judul: number
    deskripsi: number
    start: number
    end: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DetailMentoringsAvgAggregateInputType = {
    id?: true
    day?: true
  }

  export type DetailMentoringsSumAggregateInputType = {
    id?: true
    day?: true
  }

  export type DetailMentoringsMinAggregateInputType = {
    id?: true
    day?: true
    judul?: true
    deskripsi?: true
    start?: true
    end?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DetailMentoringsMaxAggregateInputType = {
    id?: true
    day?: true
    judul?: true
    deskripsi?: true
    start?: true
    end?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DetailMentoringsCountAggregateInputType = {
    id?: true
    day?: true
    judul?: true
    deskripsi?: true
    start?: true
    end?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DetailMentoringsAggregateArgs = {
    /**
     * Filter which DetailMentorings to aggregate.
     * 
    **/
    where?: DetailMentoringsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailMentorings to fetch.
     * 
    **/
    orderBy?: Enumerable<DetailMentoringsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: DetailMentoringsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailMentorings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailMentorings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DetailMentorings
    **/
    _count?: true | DetailMentoringsCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | DetailMentoringsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DetailMentoringsAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: DetailMentoringsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DetailMentoringsSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: DetailMentoringsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DetailMentoringsMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: DetailMentoringsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DetailMentoringsMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: DetailMentoringsMaxAggregateInputType
  }

  export type GetDetailMentoringsAggregateType<T extends DetailMentoringsAggregateArgs> = {
        [P in keyof T & keyof AggregateDetailMentorings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDetailMentorings[P]>
      : GetScalarType<T[P], AggregateDetailMentorings[P]>
  }


    
    
  export type DetailMentoringsGroupByArgs = {
    where?: DetailMentoringsWhereInput
    orderBy?: Enumerable<DetailMentoringsOrderByInput>
    by: Array<DetailMentoringsScalarFieldEnum>
    having?: DetailMentoringsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DetailMentoringsCountAggregateInputType | true
    _avg?: DetailMentoringsAvgAggregateInputType
    _sum?: DetailMentoringsSumAggregateInputType
    _min?: DetailMentoringsMinAggregateInputType
    _max?: DetailMentoringsMaxAggregateInputType
  }


  export type DetailMentoringsGroupByOutputType = {
    id: number
    day: number | null
    judul: string | null
    deskripsi: string | null
    start: Date | null
    end: Date | null
    createdAt: Date
    updatedAt: Date
    _count: DetailMentoringsCountAggregateOutputType | null
    _avg: DetailMentoringsAvgAggregateOutputType | null
    _sum: DetailMentoringsSumAggregateOutputType | null
    _min: DetailMentoringsMinAggregateOutputType | null
    _max: DetailMentoringsMaxAggregateOutputType | null
  }

  type GetDetailMentoringsGroupByPayload<T extends DetailMentoringsGroupByArgs> = Promise<
    Array<
      PickArray<DetailMentoringsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof DetailMentoringsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], DetailMentoringsGroupByOutputType[P]> 
            : GetScalarType<T[P], DetailMentoringsGroupByOutputType[P]>
        }
      > 
    >


  export type DetailMentoringsSelect = {
    id?: boolean
    day?: boolean
    judul?: boolean
    deskripsi?: boolean
    start?: boolean
    end?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Mentorings?: boolean | MentoringsFindManyArgs
  }

  export type DetailMentoringsInclude = {
    Mentorings?: boolean | MentoringsFindManyArgs
  }

  export type DetailMentoringsGetPayload<
    S extends boolean | null | undefined | DetailMentoringsArgs,
    U = keyof S
      > = S extends true
        ? DetailMentorings
    : S extends undefined
    ? never
    : S extends DetailMentoringsArgs | DetailMentoringsFindManyArgs
    ?'include' extends U
    ? DetailMentorings  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Mentorings'
        ? Array < MentoringsGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof DetailMentorings ?DetailMentorings [P]
  : 
          P extends 'Mentorings'
        ? Array < MentoringsGetPayload<S['select'][P]>>  : never
  } 
    : DetailMentorings
  : DetailMentorings


  type DetailMentoringsCountArgs = Merge<
    Omit<DetailMentoringsFindManyArgs, 'select' | 'include'> & {
      select?: DetailMentoringsCountAggregateInputType | true
    }
  >

  export interface DetailMentoringsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one DetailMentorings that matches the filter.
     * @param {DetailMentoringsFindUniqueArgs} args - Arguments to find a DetailMentorings
     * @example
     * // Get one DetailMentorings
     * const detailMentorings = await prisma.detailMentorings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DetailMentoringsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DetailMentoringsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DetailMentorings'> extends True ? CheckSelect<T, Prisma__DetailMentoringsClient<DetailMentorings>, Prisma__DetailMentoringsClient<DetailMentoringsGetPayload<T>>> : CheckSelect<T, Prisma__DetailMentoringsClient<DetailMentorings | null >, Prisma__DetailMentoringsClient<DetailMentoringsGetPayload<T> | null >>

    /**
     * Find the first DetailMentorings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailMentoringsFindFirstArgs} args - Arguments to find a DetailMentorings
     * @example
     * // Get one DetailMentorings
     * const detailMentorings = await prisma.detailMentorings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DetailMentoringsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DetailMentoringsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DetailMentorings'> extends True ? CheckSelect<T, Prisma__DetailMentoringsClient<DetailMentorings>, Prisma__DetailMentoringsClient<DetailMentoringsGetPayload<T>>> : CheckSelect<T, Prisma__DetailMentoringsClient<DetailMentorings | null >, Prisma__DetailMentoringsClient<DetailMentoringsGetPayload<T> | null >>

    /**
     * Find zero or more DetailMentorings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailMentoringsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DetailMentorings
     * const detailMentorings = await prisma.detailMentorings.findMany()
     * 
     * // Get first 10 DetailMentorings
     * const detailMentorings = await prisma.detailMentorings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const detailMentoringsWithIdOnly = await prisma.detailMentorings.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DetailMentoringsFindManyArgs>(
      args?: SelectSubset<T, DetailMentoringsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<DetailMentorings>>, PrismaPromise<Array<DetailMentoringsGetPayload<T>>>>

    /**
     * Create a DetailMentorings.
     * @param {DetailMentoringsCreateArgs} args - Arguments to create a DetailMentorings.
     * @example
     * // Create one DetailMentorings
     * const DetailMentorings = await prisma.detailMentorings.create({
     *   data: {
     *     // ... data to create a DetailMentorings
     *   }
     * })
     * 
    **/
    create<T extends DetailMentoringsCreateArgs>(
      args: SelectSubset<T, DetailMentoringsCreateArgs>
    ): CheckSelect<T, Prisma__DetailMentoringsClient<DetailMentorings>, Prisma__DetailMentoringsClient<DetailMentoringsGetPayload<T>>>

    /**
     * Create many DetailMentorings.
     *     @param {DetailMentoringsCreateManyArgs} args - Arguments to create many DetailMentorings.
     *     @example
     *     // Create many DetailMentorings
     *     const detailMentorings = await prisma.detailMentorings.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DetailMentoringsCreateManyArgs>(
      args?: SelectSubset<T, DetailMentoringsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a DetailMentorings.
     * @param {DetailMentoringsDeleteArgs} args - Arguments to delete one DetailMentorings.
     * @example
     * // Delete one DetailMentorings
     * const DetailMentorings = await prisma.detailMentorings.delete({
     *   where: {
     *     // ... filter to delete one DetailMentorings
     *   }
     * })
     * 
    **/
    delete<T extends DetailMentoringsDeleteArgs>(
      args: SelectSubset<T, DetailMentoringsDeleteArgs>
    ): CheckSelect<T, Prisma__DetailMentoringsClient<DetailMentorings>, Prisma__DetailMentoringsClient<DetailMentoringsGetPayload<T>>>

    /**
     * Update one DetailMentorings.
     * @param {DetailMentoringsUpdateArgs} args - Arguments to update one DetailMentorings.
     * @example
     * // Update one DetailMentorings
     * const detailMentorings = await prisma.detailMentorings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DetailMentoringsUpdateArgs>(
      args: SelectSubset<T, DetailMentoringsUpdateArgs>
    ): CheckSelect<T, Prisma__DetailMentoringsClient<DetailMentorings>, Prisma__DetailMentoringsClient<DetailMentoringsGetPayload<T>>>

    /**
     * Delete zero or more DetailMentorings.
     * @param {DetailMentoringsDeleteManyArgs} args - Arguments to filter DetailMentorings to delete.
     * @example
     * // Delete a few DetailMentorings
     * const { count } = await prisma.detailMentorings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DetailMentoringsDeleteManyArgs>(
      args?: SelectSubset<T, DetailMentoringsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more DetailMentorings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailMentoringsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DetailMentorings
     * const detailMentorings = await prisma.detailMentorings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DetailMentoringsUpdateManyArgs>(
      args: SelectSubset<T, DetailMentoringsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one DetailMentorings.
     * @param {DetailMentoringsUpsertArgs} args - Arguments to update or create a DetailMentorings.
     * @example
     * // Update or create a DetailMentorings
     * const detailMentorings = await prisma.detailMentorings.upsert({
     *   create: {
     *     // ... data to create a DetailMentorings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DetailMentorings we want to update
     *   }
     * })
    **/
    upsert<T extends DetailMentoringsUpsertArgs>(
      args: SelectSubset<T, DetailMentoringsUpsertArgs>
    ): CheckSelect<T, Prisma__DetailMentoringsClient<DetailMentorings>, Prisma__DetailMentoringsClient<DetailMentoringsGetPayload<T>>>

    /**
     * Count the number of DetailMentorings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailMentoringsCountArgs} args - Arguments to filter DetailMentorings to count.
     * @example
     * // Count the number of DetailMentorings
     * const count = await prisma.detailMentorings.count({
     *   where: {
     *     // ... the filter for the DetailMentorings we want to count
     *   }
     * })
    **/
    count<T extends DetailMentoringsCountArgs>(
      args?: Subset<T, DetailMentoringsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DetailMentoringsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DetailMentorings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailMentoringsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DetailMentoringsAggregateArgs>(args: Subset<T, DetailMentoringsAggregateArgs>): PrismaPromise<GetDetailMentoringsAggregateType<T>>

    /**
     * Group by DetailMentorings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DetailMentoringsGroupByArgs} args - Group by arguments.
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
      T extends DetailMentoringsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DetailMentoringsGroupByArgs['orderBy'] }
        : { orderBy?: DetailMentoringsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, DetailMentoringsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetailMentoringsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for DetailMentorings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DetailMentoringsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Mentorings<T extends MentoringsFindManyArgs = {}>(args?: Subset<T, MentoringsFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Mentorings>>, PrismaPromise<Array<MentoringsGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * DetailMentorings findUnique
   */
  export type DetailMentoringsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the DetailMentorings
     * 
    **/
    select?: DetailMentoringsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DetailMentoringsInclude | null
    /**
     * Throw an Error if a DetailMentorings can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which DetailMentorings to fetch.
     * 
    **/
    where: DetailMentoringsWhereUniqueInput
  }


  /**
   * DetailMentorings findFirst
   */
  export type DetailMentoringsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the DetailMentorings
     * 
    **/
    select?: DetailMentoringsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DetailMentoringsInclude | null
    /**
     * Throw an Error if a DetailMentorings can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which DetailMentorings to fetch.
     * 
    **/
    where?: DetailMentoringsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailMentorings to fetch.
     * 
    **/
    orderBy?: Enumerable<DetailMentoringsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DetailMentorings.
     * 
    **/
    cursor?: DetailMentoringsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailMentorings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailMentorings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DetailMentorings.
     * 
    **/
    distinct?: Enumerable<DetailMentoringsScalarFieldEnum>
  }


  /**
   * DetailMentorings findMany
   */
  export type DetailMentoringsFindManyArgs = {
    /**
     * Select specific fields to fetch from the DetailMentorings
     * 
    **/
    select?: DetailMentoringsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DetailMentoringsInclude | null
    /**
     * Filter, which DetailMentorings to fetch.
     * 
    **/
    where?: DetailMentoringsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DetailMentorings to fetch.
     * 
    **/
    orderBy?: Enumerable<DetailMentoringsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DetailMentorings.
     * 
    **/
    cursor?: DetailMentoringsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DetailMentorings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DetailMentorings.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DetailMentoringsScalarFieldEnum>
  }


  /**
   * DetailMentorings create
   */
  export type DetailMentoringsCreateArgs = {
    /**
     * Select specific fields to fetch from the DetailMentorings
     * 
    **/
    select?: DetailMentoringsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DetailMentoringsInclude | null
    /**
     * The data needed to create a DetailMentorings.
     * 
    **/
    data: XOR<DetailMentoringsCreateInput, DetailMentoringsUncheckedCreateInput>
  }


  /**
   * DetailMentorings createMany
   */
  export type DetailMentoringsCreateManyArgs = {
    data: Enumerable<DetailMentoringsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DetailMentorings update
   */
  export type DetailMentoringsUpdateArgs = {
    /**
     * Select specific fields to fetch from the DetailMentorings
     * 
    **/
    select?: DetailMentoringsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DetailMentoringsInclude | null
    /**
     * The data needed to update a DetailMentorings.
     * 
    **/
    data: XOR<DetailMentoringsUpdateInput, DetailMentoringsUncheckedUpdateInput>
    /**
     * Choose, which DetailMentorings to update.
     * 
    **/
    where: DetailMentoringsWhereUniqueInput
  }


  /**
   * DetailMentorings updateMany
   */
  export type DetailMentoringsUpdateManyArgs = {
    data: XOR<DetailMentoringsUpdateManyMutationInput, DetailMentoringsUncheckedUpdateManyInput>
    where?: DetailMentoringsWhereInput
  }


  /**
   * DetailMentorings upsert
   */
  export type DetailMentoringsUpsertArgs = {
    /**
     * Select specific fields to fetch from the DetailMentorings
     * 
    **/
    select?: DetailMentoringsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DetailMentoringsInclude | null
    /**
     * The filter to search for the DetailMentorings to update in case it exists.
     * 
    **/
    where: DetailMentoringsWhereUniqueInput
    /**
     * In case the DetailMentorings found by the `where` argument doesn't exist, create a new DetailMentorings with this data.
     * 
    **/
    create: XOR<DetailMentoringsCreateInput, DetailMentoringsUncheckedCreateInput>
    /**
     * In case the DetailMentorings was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<DetailMentoringsUpdateInput, DetailMentoringsUncheckedUpdateInput>
  }


  /**
   * DetailMentorings delete
   */
  export type DetailMentoringsDeleteArgs = {
    /**
     * Select specific fields to fetch from the DetailMentorings
     * 
    **/
    select?: DetailMentoringsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DetailMentoringsInclude | null
    /**
     * Filter which DetailMentorings to delete.
     * 
    **/
    where: DetailMentoringsWhereUniqueInput
  }


  /**
   * DetailMentorings deleteMany
   */
  export type DetailMentoringsDeleteManyArgs = {
    where?: DetailMentoringsWhereInput
  }


  /**
   * DetailMentorings without action
   */
  export type DetailMentoringsArgs = {
    /**
     * Select specific fields to fetch from the DetailMentorings
     * 
    **/
    select?: DetailMentoringsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: DetailMentoringsInclude | null
  }



  /**
   * Model Files
   */


  export type AggregateFiles = {
    _count: FilesCountAggregateOutputType | null
    count: FilesCountAggregateOutputType | null
    _avg: FilesAvgAggregateOutputType | null
    avg: FilesAvgAggregateOutputType | null
    _sum: FilesSumAggregateOutputType | null
    sum: FilesSumAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
    max: FilesMaxAggregateOutputType | null
  }

  export type FilesAvgAggregateOutputType = {
    id: number | null
    materi: number | null
  }

  export type FilesSumAggregateOutputType = {
    id: number | null
    materi: number | null
  }

  export type FilesMinAggregateOutputType = {
    id: number | null
    materi: number | null
    name: string | null
    path: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FilesMaxAggregateOutputType = {
    id: number | null
    materi: number | null
    name: string | null
    path: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FilesCountAggregateOutputType = {
    id: number
    materi: number
    name: number
    path: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FilesAvgAggregateInputType = {
    id?: true
    materi?: true
  }

  export type FilesSumAggregateInputType = {
    id?: true
    materi?: true
  }

  export type FilesMinAggregateInputType = {
    id?: true
    materi?: true
    name?: true
    path?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FilesMaxAggregateInputType = {
    id?: true
    materi?: true
    name?: true
    path?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FilesCountAggregateInputType = {
    id?: true
    materi?: true
    name?: true
    path?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FilesAggregateArgs = {
    /**
     * Filter which Files to aggregate.
     * 
    **/
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     * 
    **/
    orderBy?: Enumerable<FilesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FilesCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | FilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilesAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: FilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilesSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: FilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilesMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: FilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilesMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: FilesMaxAggregateInputType
  }

  export type GetFilesAggregateType<T extends FilesAggregateArgs> = {
        [P in keyof T & keyof AggregateFiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFiles[P]>
      : GetScalarType<T[P], AggregateFiles[P]>
  }


    
    
  export type FilesGroupByArgs = {
    where?: FilesWhereInput
    orderBy?: Enumerable<FilesOrderByInput>
    by: Array<FilesScalarFieldEnum>
    having?: FilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilesCountAggregateInputType | true
    _avg?: FilesAvgAggregateInputType
    _sum?: FilesSumAggregateInputType
    _min?: FilesMinAggregateInputType
    _max?: FilesMaxAggregateInputType
  }


  export type FilesGroupByOutputType = {
    id: number
    materi: number | null
    name: string | null
    path: string | null
    createdAt: Date
    updatedAt: Date
    _count: FilesCountAggregateOutputType | null
    _avg: FilesAvgAggregateOutputType | null
    _sum: FilesSumAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  type GetFilesGroupByPayload<T extends FilesGroupByArgs> = Promise<
    Array<
      PickArray<FilesGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof FilesGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], FilesGroupByOutputType[P]> 
            : GetScalarType<T[P], FilesGroupByOutputType[P]>
        }
      > 
    >


  export type FilesSelect = {
    id?: boolean
    materi?: boolean
    name?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Materis?: boolean | MaterisArgs
  }

  export type FilesInclude = {
    Materis?: boolean | MaterisArgs
  }

  export type FilesGetPayload<
    S extends boolean | null | undefined | FilesArgs,
    U = keyof S
      > = S extends true
        ? Files
    : S extends undefined
    ? never
    : S extends FilesArgs | FilesFindManyArgs
    ?'include' extends U
    ? Files  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Materis'
        ? MaterisGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Files ?Files [P]
  : 
          P extends 'Materis'
        ? MaterisGetPayload<S['select'][P]> | null : never
  } 
    : Files
  : Files


  type FilesCountArgs = Merge<
    Omit<FilesFindManyArgs, 'select' | 'include'> & {
      select?: FilesCountAggregateInputType | true
    }
  >

  export interface FilesDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Files that matches the filter.
     * @param {FilesFindUniqueArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FilesFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FilesFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Files'> extends True ? CheckSelect<T, Prisma__FilesClient<Files>, Prisma__FilesClient<FilesGetPayload<T>>> : CheckSelect<T, Prisma__FilesClient<Files | null >, Prisma__FilesClient<FilesGetPayload<T> | null >>

    /**
     * Find the first Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesFindFirstArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FilesFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FilesFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Files'> extends True ? CheckSelect<T, Prisma__FilesClient<Files>, Prisma__FilesClient<FilesGetPayload<T>>> : CheckSelect<T, Prisma__FilesClient<Files | null >, Prisma__FilesClient<FilesGetPayload<T> | null >>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.files.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.files.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filesWithIdOnly = await prisma.files.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FilesFindManyArgs>(
      args?: SelectSubset<T, FilesFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Files>>, PrismaPromise<Array<FilesGetPayload<T>>>>

    /**
     * Create a Files.
     * @param {FilesCreateArgs} args - Arguments to create a Files.
     * @example
     * // Create one Files
     * const Files = await prisma.files.create({
     *   data: {
     *     // ... data to create a Files
     *   }
     * })
     * 
    **/
    create<T extends FilesCreateArgs>(
      args: SelectSubset<T, FilesCreateArgs>
    ): CheckSelect<T, Prisma__FilesClient<Files>, Prisma__FilesClient<FilesGetPayload<T>>>

    /**
     * Create many Files.
     *     @param {FilesCreateManyArgs} args - Arguments to create many Files.
     *     @example
     *     // Create many Files
     *     const files = await prisma.files.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FilesCreateManyArgs>(
      args?: SelectSubset<T, FilesCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Files.
     * @param {FilesDeleteArgs} args - Arguments to delete one Files.
     * @example
     * // Delete one Files
     * const Files = await prisma.files.delete({
     *   where: {
     *     // ... filter to delete one Files
     *   }
     * })
     * 
    **/
    delete<T extends FilesDeleteArgs>(
      args: SelectSubset<T, FilesDeleteArgs>
    ): CheckSelect<T, Prisma__FilesClient<Files>, Prisma__FilesClient<FilesGetPayload<T>>>

    /**
     * Update one Files.
     * @param {FilesUpdateArgs} args - Arguments to update one Files.
     * @example
     * // Update one Files
     * const files = await prisma.files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FilesUpdateArgs>(
      args: SelectSubset<T, FilesUpdateArgs>
    ): CheckSelect<T, Prisma__FilesClient<Files>, Prisma__FilesClient<FilesGetPayload<T>>>

    /**
     * Delete zero or more Files.
     * @param {FilesDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FilesDeleteManyArgs>(
      args?: SelectSubset<T, FilesDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FilesUpdateManyArgs>(
      args: SelectSubset<T, FilesUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Files.
     * @param {FilesUpsertArgs} args - Arguments to update or create a Files.
     * @example
     * // Update or create a Files
     * const files = await prisma.files.upsert({
     *   create: {
     *     // ... data to create a Files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Files we want to update
     *   }
     * })
    **/
    upsert<T extends FilesUpsertArgs>(
      args: SelectSubset<T, FilesUpsertArgs>
    ): CheckSelect<T, Prisma__FilesClient<Files>, Prisma__FilesClient<FilesGetPayload<T>>>

    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.files.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FilesCountArgs>(
      args?: Subset<T, FilesCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FilesAggregateArgs>(args: Subset<T, FilesAggregateArgs>): PrismaPromise<GetFilesAggregateType<T>>

    /**
     * Group by Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesGroupByArgs} args - Group by arguments.
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
      T extends FilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilesGroupByArgs['orderBy'] }
        : { orderBy?: FilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilesGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FilesClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Materis<T extends MaterisArgs = {}>(args?: Subset<T, MaterisArgs>): CheckSelect<T, Prisma__MaterisClient<Materis | null >, Prisma__MaterisClient<MaterisGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Files findUnique
   */
  export type FilesFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Files
     * 
    **/
    select?: FilesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FilesInclude | null
    /**
     * Throw an Error if a Files can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Files to fetch.
     * 
    **/
    where: FilesWhereUniqueInput
  }


  /**
   * Files findFirst
   */
  export type FilesFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Files
     * 
    **/
    select?: FilesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FilesInclude | null
    /**
     * Throw an Error if a Files can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Files to fetch.
     * 
    **/
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     * 
    **/
    orderBy?: Enumerable<FilesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     * 
    **/
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     * 
    **/
    distinct?: Enumerable<FilesScalarFieldEnum>
  }


  /**
   * Files findMany
   */
  export type FilesFindManyArgs = {
    /**
     * Select specific fields to fetch from the Files
     * 
    **/
    select?: FilesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FilesInclude | null
    /**
     * Filter, which Files to fetch.
     * 
    **/
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     * 
    **/
    orderBy?: Enumerable<FilesOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     * 
    **/
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     * 
    **/
    skip?: number
    distinct?: Enumerable<FilesScalarFieldEnum>
  }


  /**
   * Files create
   */
  export type FilesCreateArgs = {
    /**
     * Select specific fields to fetch from the Files
     * 
    **/
    select?: FilesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FilesInclude | null
    /**
     * The data needed to create a Files.
     * 
    **/
    data: XOR<FilesCreateInput, FilesUncheckedCreateInput>
  }


  /**
   * Files createMany
   */
  export type FilesCreateManyArgs = {
    data: Enumerable<FilesCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Files update
   */
  export type FilesUpdateArgs = {
    /**
     * Select specific fields to fetch from the Files
     * 
    **/
    select?: FilesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FilesInclude | null
    /**
     * The data needed to update a Files.
     * 
    **/
    data: XOR<FilesUpdateInput, FilesUncheckedUpdateInput>
    /**
     * Choose, which Files to update.
     * 
    **/
    where: FilesWhereUniqueInput
  }


  /**
   * Files updateMany
   */
  export type FilesUpdateManyArgs = {
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyInput>
    where?: FilesWhereInput
  }


  /**
   * Files upsert
   */
  export type FilesUpsertArgs = {
    /**
     * Select specific fields to fetch from the Files
     * 
    **/
    select?: FilesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FilesInclude | null
    /**
     * The filter to search for the Files to update in case it exists.
     * 
    **/
    where: FilesWhereUniqueInput
    /**
     * In case the Files found by the `where` argument doesn't exist, create a new Files with this data.
     * 
    **/
    create: XOR<FilesCreateInput, FilesUncheckedCreateInput>
    /**
     * In case the Files was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<FilesUpdateInput, FilesUncheckedUpdateInput>
  }


  /**
   * Files delete
   */
  export type FilesDeleteArgs = {
    /**
     * Select specific fields to fetch from the Files
     * 
    **/
    select?: FilesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FilesInclude | null
    /**
     * Filter which Files to delete.
     * 
    **/
    where: FilesWhereUniqueInput
  }


  /**
   * Files deleteMany
   */
  export type FilesDeleteManyArgs = {
    where?: FilesWhereInput
  }


  /**
   * Files without action
   */
  export type FilesArgs = {
    /**
     * Select specific fields to fetch from the Files
     * 
    **/
    select?: FilesSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: FilesInclude | null
  }



  /**
   * Model JadwalPresensis
   */


  export type AggregateJadwalPresensis = {
    _count: JadwalPresensisCountAggregateOutputType | null
    count: JadwalPresensisCountAggregateOutputType | null
    _avg: JadwalPresensisAvgAggregateOutputType | null
    avg: JadwalPresensisAvgAggregateOutputType | null
    _sum: JadwalPresensisSumAggregateOutputType | null
    sum: JadwalPresensisSumAggregateOutputType | null
    _min: JadwalPresensisMinAggregateOutputType | null
    min: JadwalPresensisMinAggregateOutputType | null
    _max: JadwalPresensisMaxAggregateOutputType | null
    max: JadwalPresensisMaxAggregateOutputType | null
  }

  export type JadwalPresensisAvgAggregateOutputType = {
    id: number | null
  }

  export type JadwalPresensisSumAggregateOutputType = {
    id: number | null
  }

  export type JadwalPresensisMinAggregateOutputType = {
    id: number | null
    judul: string | null
    start: Date | null
    end: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JadwalPresensisMaxAggregateOutputType = {
    id: number | null
    judul: string | null
    start: Date | null
    end: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type JadwalPresensisCountAggregateOutputType = {
    id: number
    judul: number
    start: number
    end: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type JadwalPresensisAvgAggregateInputType = {
    id?: true
  }

  export type JadwalPresensisSumAggregateInputType = {
    id?: true
  }

  export type JadwalPresensisMinAggregateInputType = {
    id?: true
    judul?: true
    start?: true
    end?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JadwalPresensisMaxAggregateInputType = {
    id?: true
    judul?: true
    start?: true
    end?: true
    createdAt?: true
    updatedAt?: true
  }

  export type JadwalPresensisCountAggregateInputType = {
    id?: true
    judul?: true
    start?: true
    end?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type JadwalPresensisAggregateArgs = {
    /**
     * Filter which JadwalPresensis to aggregate.
     * 
    **/
    where?: JadwalPresensisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalPresenses to fetch.
     * 
    **/
    orderBy?: Enumerable<JadwalPresensisOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: JadwalPresensisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalPresenses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalPresenses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned JadwalPresenses
    **/
    _count?: true | JadwalPresensisCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | JadwalPresensisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: JadwalPresensisAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: JadwalPresensisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: JadwalPresensisSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: JadwalPresensisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: JadwalPresensisMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: JadwalPresensisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: JadwalPresensisMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: JadwalPresensisMaxAggregateInputType
  }

  export type GetJadwalPresensisAggregateType<T extends JadwalPresensisAggregateArgs> = {
        [P in keyof T & keyof AggregateJadwalPresensis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateJadwalPresensis[P]>
      : GetScalarType<T[P], AggregateJadwalPresensis[P]>
  }


    
    
  export type JadwalPresensisGroupByArgs = {
    where?: JadwalPresensisWhereInput
    orderBy?: Enumerable<JadwalPresensisOrderByInput>
    by: Array<JadwalPresensisScalarFieldEnum>
    having?: JadwalPresensisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: JadwalPresensisCountAggregateInputType | true
    _avg?: JadwalPresensisAvgAggregateInputType
    _sum?: JadwalPresensisSumAggregateInputType
    _min?: JadwalPresensisMinAggregateInputType
    _max?: JadwalPresensisMaxAggregateInputType
  }


  export type JadwalPresensisGroupByOutputType = {
    id: number
    judul: string | null
    start: Date | null
    end: Date | null
    createdAt: Date
    updatedAt: Date
    _count: JadwalPresensisCountAggregateOutputType | null
    _avg: JadwalPresensisAvgAggregateOutputType | null
    _sum: JadwalPresensisSumAggregateOutputType | null
    _min: JadwalPresensisMinAggregateOutputType | null
    _max: JadwalPresensisMaxAggregateOutputType | null
  }

  type GetJadwalPresensisGroupByPayload<T extends JadwalPresensisGroupByArgs> = Promise<
    Array<
      PickArray<JadwalPresensisGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof JadwalPresensisGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], JadwalPresensisGroupByOutputType[P]> 
            : GetScalarType<T[P], JadwalPresensisGroupByOutputType[P]>
        }
      > 
    >


  export type JadwalPresensisSelect = {
    id?: boolean
    judul?: boolean
    start?: boolean
    end?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    PresensiPeserta?: boolean | PresensiPesertaFindManyArgs
  }

  export type JadwalPresensisInclude = {
    PresensiPeserta?: boolean | PresensiPesertaFindManyArgs
  }

  export type JadwalPresensisGetPayload<
    S extends boolean | null | undefined | JadwalPresensisArgs,
    U = keyof S
      > = S extends true
        ? JadwalPresensis
    : S extends undefined
    ? never
    : S extends JadwalPresensisArgs | JadwalPresensisFindManyArgs
    ?'include' extends U
    ? JadwalPresensis  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'PresensiPeserta'
        ? Array < PresensiPesertaGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof JadwalPresensis ?JadwalPresensis [P]
  : 
          P extends 'PresensiPeserta'
        ? Array < PresensiPesertaGetPayload<S['select'][P]>>  : never
  } 
    : JadwalPresensis
  : JadwalPresensis


  type JadwalPresensisCountArgs = Merge<
    Omit<JadwalPresensisFindManyArgs, 'select' | 'include'> & {
      select?: JadwalPresensisCountAggregateInputType | true
    }
  >

  export interface JadwalPresensisDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one JadwalPresensis that matches the filter.
     * @param {JadwalPresensisFindUniqueArgs} args - Arguments to find a JadwalPresensis
     * @example
     * // Get one JadwalPresensis
     * const jadwalPresensis = await prisma.jadwalPresensis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends JadwalPresensisFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, JadwalPresensisFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'JadwalPresensis'> extends True ? CheckSelect<T, Prisma__JadwalPresensisClient<JadwalPresensis>, Prisma__JadwalPresensisClient<JadwalPresensisGetPayload<T>>> : CheckSelect<T, Prisma__JadwalPresensisClient<JadwalPresensis | null >, Prisma__JadwalPresensisClient<JadwalPresensisGetPayload<T> | null >>

    /**
     * Find the first JadwalPresensis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalPresensisFindFirstArgs} args - Arguments to find a JadwalPresensis
     * @example
     * // Get one JadwalPresensis
     * const jadwalPresensis = await prisma.jadwalPresensis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends JadwalPresensisFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, JadwalPresensisFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'JadwalPresensis'> extends True ? CheckSelect<T, Prisma__JadwalPresensisClient<JadwalPresensis>, Prisma__JadwalPresensisClient<JadwalPresensisGetPayload<T>>> : CheckSelect<T, Prisma__JadwalPresensisClient<JadwalPresensis | null >, Prisma__JadwalPresensisClient<JadwalPresensisGetPayload<T> | null >>

    /**
     * Find zero or more JadwalPresenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalPresensisFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all JadwalPresenses
     * const jadwalPresenses = await prisma.jadwalPresensis.findMany()
     * 
     * // Get first 10 JadwalPresenses
     * const jadwalPresenses = await prisma.jadwalPresensis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const jadwalPresensisWithIdOnly = await prisma.jadwalPresensis.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends JadwalPresensisFindManyArgs>(
      args?: SelectSubset<T, JadwalPresensisFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<JadwalPresensis>>, PrismaPromise<Array<JadwalPresensisGetPayload<T>>>>

    /**
     * Create a JadwalPresensis.
     * @param {JadwalPresensisCreateArgs} args - Arguments to create a JadwalPresensis.
     * @example
     * // Create one JadwalPresensis
     * const JadwalPresensis = await prisma.jadwalPresensis.create({
     *   data: {
     *     // ... data to create a JadwalPresensis
     *   }
     * })
     * 
    **/
    create<T extends JadwalPresensisCreateArgs>(
      args: SelectSubset<T, JadwalPresensisCreateArgs>
    ): CheckSelect<T, Prisma__JadwalPresensisClient<JadwalPresensis>, Prisma__JadwalPresensisClient<JadwalPresensisGetPayload<T>>>

    /**
     * Create many JadwalPresenses.
     *     @param {JadwalPresensisCreateManyArgs} args - Arguments to create many JadwalPresenses.
     *     @example
     *     // Create many JadwalPresenses
     *     const jadwalPresensis = await prisma.jadwalPresensis.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends JadwalPresensisCreateManyArgs>(
      args?: SelectSubset<T, JadwalPresensisCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a JadwalPresensis.
     * @param {JadwalPresensisDeleteArgs} args - Arguments to delete one JadwalPresensis.
     * @example
     * // Delete one JadwalPresensis
     * const JadwalPresensis = await prisma.jadwalPresensis.delete({
     *   where: {
     *     // ... filter to delete one JadwalPresensis
     *   }
     * })
     * 
    **/
    delete<T extends JadwalPresensisDeleteArgs>(
      args: SelectSubset<T, JadwalPresensisDeleteArgs>
    ): CheckSelect<T, Prisma__JadwalPresensisClient<JadwalPresensis>, Prisma__JadwalPresensisClient<JadwalPresensisGetPayload<T>>>

    /**
     * Update one JadwalPresensis.
     * @param {JadwalPresensisUpdateArgs} args - Arguments to update one JadwalPresensis.
     * @example
     * // Update one JadwalPresensis
     * const jadwalPresensis = await prisma.jadwalPresensis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends JadwalPresensisUpdateArgs>(
      args: SelectSubset<T, JadwalPresensisUpdateArgs>
    ): CheckSelect<T, Prisma__JadwalPresensisClient<JadwalPresensis>, Prisma__JadwalPresensisClient<JadwalPresensisGetPayload<T>>>

    /**
     * Delete zero or more JadwalPresenses.
     * @param {JadwalPresensisDeleteManyArgs} args - Arguments to filter JadwalPresenses to delete.
     * @example
     * // Delete a few JadwalPresenses
     * const { count } = await prisma.jadwalPresensis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends JadwalPresensisDeleteManyArgs>(
      args?: SelectSubset<T, JadwalPresensisDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more JadwalPresenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalPresensisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many JadwalPresenses
     * const jadwalPresensis = await prisma.jadwalPresensis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends JadwalPresensisUpdateManyArgs>(
      args: SelectSubset<T, JadwalPresensisUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one JadwalPresensis.
     * @param {JadwalPresensisUpsertArgs} args - Arguments to update or create a JadwalPresensis.
     * @example
     * // Update or create a JadwalPresensis
     * const jadwalPresensis = await prisma.jadwalPresensis.upsert({
     *   create: {
     *     // ... data to create a JadwalPresensis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the JadwalPresensis we want to update
     *   }
     * })
    **/
    upsert<T extends JadwalPresensisUpsertArgs>(
      args: SelectSubset<T, JadwalPresensisUpsertArgs>
    ): CheckSelect<T, Prisma__JadwalPresensisClient<JadwalPresensis>, Prisma__JadwalPresensisClient<JadwalPresensisGetPayload<T>>>

    /**
     * Count the number of JadwalPresenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalPresensisCountArgs} args - Arguments to filter JadwalPresenses to count.
     * @example
     * // Count the number of JadwalPresenses
     * const count = await prisma.jadwalPresensis.count({
     *   where: {
     *     // ... the filter for the JadwalPresenses we want to count
     *   }
     * })
    **/
    count<T extends JadwalPresensisCountArgs>(
      args?: Subset<T, JadwalPresensisCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], JadwalPresensisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a JadwalPresensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalPresensisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends JadwalPresensisAggregateArgs>(args: Subset<T, JadwalPresensisAggregateArgs>): PrismaPromise<GetJadwalPresensisAggregateType<T>>

    /**
     * Group by JadwalPresensis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {JadwalPresensisGroupByArgs} args - Group by arguments.
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
      T extends JadwalPresensisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: JadwalPresensisGroupByArgs['orderBy'] }
        : { orderBy?: JadwalPresensisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, JadwalPresensisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetJadwalPresensisGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for JadwalPresensis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__JadwalPresensisClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    PresensiPeserta<T extends PresensiPesertaFindManyArgs = {}>(args?: Subset<T, PresensiPesertaFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PresensiPeserta>>, PrismaPromise<Array<PresensiPesertaGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * JadwalPresensis findUnique
   */
  export type JadwalPresensisFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the JadwalPresensis
     * 
    **/
    select?: JadwalPresensisSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JadwalPresensisInclude | null
    /**
     * Throw an Error if a JadwalPresensis can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which JadwalPresensis to fetch.
     * 
    **/
    where: JadwalPresensisWhereUniqueInput
  }


  /**
   * JadwalPresensis findFirst
   */
  export type JadwalPresensisFindFirstArgs = {
    /**
     * Select specific fields to fetch from the JadwalPresensis
     * 
    **/
    select?: JadwalPresensisSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JadwalPresensisInclude | null
    /**
     * Throw an Error if a JadwalPresensis can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which JadwalPresensis to fetch.
     * 
    **/
    where?: JadwalPresensisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalPresenses to fetch.
     * 
    **/
    orderBy?: Enumerable<JadwalPresensisOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for JadwalPresenses.
     * 
    **/
    cursor?: JadwalPresensisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalPresenses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalPresenses.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of JadwalPresenses.
     * 
    **/
    distinct?: Enumerable<JadwalPresensisScalarFieldEnum>
  }


  /**
   * JadwalPresensis findMany
   */
  export type JadwalPresensisFindManyArgs = {
    /**
     * Select specific fields to fetch from the JadwalPresensis
     * 
    **/
    select?: JadwalPresensisSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JadwalPresensisInclude | null
    /**
     * Filter, which JadwalPresenses to fetch.
     * 
    **/
    where?: JadwalPresensisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of JadwalPresenses to fetch.
     * 
    **/
    orderBy?: Enumerable<JadwalPresensisOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing JadwalPresenses.
     * 
    **/
    cursor?: JadwalPresensisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` JadwalPresenses from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` JadwalPresenses.
     * 
    **/
    skip?: number
    distinct?: Enumerable<JadwalPresensisScalarFieldEnum>
  }


  /**
   * JadwalPresensis create
   */
  export type JadwalPresensisCreateArgs = {
    /**
     * Select specific fields to fetch from the JadwalPresensis
     * 
    **/
    select?: JadwalPresensisSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JadwalPresensisInclude | null
    /**
     * The data needed to create a JadwalPresensis.
     * 
    **/
    data: XOR<JadwalPresensisCreateInput, JadwalPresensisUncheckedCreateInput>
  }


  /**
   * JadwalPresensis createMany
   */
  export type JadwalPresensisCreateManyArgs = {
    data: Enumerable<JadwalPresensisCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * JadwalPresensis update
   */
  export type JadwalPresensisUpdateArgs = {
    /**
     * Select specific fields to fetch from the JadwalPresensis
     * 
    **/
    select?: JadwalPresensisSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JadwalPresensisInclude | null
    /**
     * The data needed to update a JadwalPresensis.
     * 
    **/
    data: XOR<JadwalPresensisUpdateInput, JadwalPresensisUncheckedUpdateInput>
    /**
     * Choose, which JadwalPresensis to update.
     * 
    **/
    where: JadwalPresensisWhereUniqueInput
  }


  /**
   * JadwalPresensis updateMany
   */
  export type JadwalPresensisUpdateManyArgs = {
    data: XOR<JadwalPresensisUpdateManyMutationInput, JadwalPresensisUncheckedUpdateManyInput>
    where?: JadwalPresensisWhereInput
  }


  /**
   * JadwalPresensis upsert
   */
  export type JadwalPresensisUpsertArgs = {
    /**
     * Select specific fields to fetch from the JadwalPresensis
     * 
    **/
    select?: JadwalPresensisSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JadwalPresensisInclude | null
    /**
     * The filter to search for the JadwalPresensis to update in case it exists.
     * 
    **/
    where: JadwalPresensisWhereUniqueInput
    /**
     * In case the JadwalPresensis found by the `where` argument doesn't exist, create a new JadwalPresensis with this data.
     * 
    **/
    create: XOR<JadwalPresensisCreateInput, JadwalPresensisUncheckedCreateInput>
    /**
     * In case the JadwalPresensis was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<JadwalPresensisUpdateInput, JadwalPresensisUncheckedUpdateInput>
  }


  /**
   * JadwalPresensis delete
   */
  export type JadwalPresensisDeleteArgs = {
    /**
     * Select specific fields to fetch from the JadwalPresensis
     * 
    **/
    select?: JadwalPresensisSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JadwalPresensisInclude | null
    /**
     * Filter which JadwalPresensis to delete.
     * 
    **/
    where: JadwalPresensisWhereUniqueInput
  }


  /**
   * JadwalPresensis deleteMany
   */
  export type JadwalPresensisDeleteManyArgs = {
    where?: JadwalPresensisWhereInput
  }


  /**
   * JadwalPresensis without action
   */
  export type JadwalPresensisArgs = {
    /**
     * Select specific fields to fetch from the JadwalPresensis
     * 
    **/
    select?: JadwalPresensisSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: JadwalPresensisInclude | null
  }



  /**
   * Model Materis
   */


  export type AggregateMateris = {
    _count: MaterisCountAggregateOutputType | null
    count: MaterisCountAggregateOutputType | null
    _avg: MaterisAvgAggregateOutputType | null
    avg: MaterisAvgAggregateOutputType | null
    _sum: MaterisSumAggregateOutputType | null
    sum: MaterisSumAggregateOutputType | null
    _min: MaterisMinAggregateOutputType | null
    min: MaterisMinAggregateOutputType | null
    _max: MaterisMaxAggregateOutputType | null
    max: MaterisMaxAggregateOutputType | null
  }

  export type MaterisAvgAggregateOutputType = {
    id: number | null
  }

  export type MaterisSumAggregateOutputType = {
    id: number | null
  }

  export type MaterisMinAggregateOutputType = {
    id: number | null
    bagian: string | null
    judul: string | null
    deskripsi: string | null
    embed: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterisMaxAggregateOutputType = {
    id: number | null
    bagian: string | null
    judul: string | null
    deskripsi: string | null
    embed: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MaterisCountAggregateOutputType = {
    id: number
    bagian: number
    judul: number
    deskripsi: number
    embed: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MaterisAvgAggregateInputType = {
    id?: true
  }

  export type MaterisSumAggregateInputType = {
    id?: true
  }

  export type MaterisMinAggregateInputType = {
    id?: true
    bagian?: true
    judul?: true
    deskripsi?: true
    embed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterisMaxAggregateInputType = {
    id?: true
    bagian?: true
    judul?: true
    deskripsi?: true
    embed?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MaterisCountAggregateInputType = {
    id?: true
    bagian?: true
    judul?: true
    deskripsi?: true
    embed?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MaterisAggregateArgs = {
    /**
     * Filter which Materis to aggregate.
     * 
    **/
    where?: MaterisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materises to fetch.
     * 
    **/
    orderBy?: Enumerable<MaterisOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MaterisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materises from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materises.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materises
    **/
    _count?: true | MaterisCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | MaterisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterisAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: MaterisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterisSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: MaterisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterisMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: MaterisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterisMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: MaterisMaxAggregateInputType
  }

  export type GetMaterisAggregateType<T extends MaterisAggregateArgs> = {
        [P in keyof T & keyof AggregateMateris]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateris[P]>
      : GetScalarType<T[P], AggregateMateris[P]>
  }


    
    
  export type MaterisGroupByArgs = {
    where?: MaterisWhereInput
    orderBy?: Enumerable<MaterisOrderByInput>
    by: Array<MaterisScalarFieldEnum>
    having?: MaterisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterisCountAggregateInputType | true
    _avg?: MaterisAvgAggregateInputType
    _sum?: MaterisSumAggregateInputType
    _min?: MaterisMinAggregateInputType
    _max?: MaterisMaxAggregateInputType
  }


  export type MaterisGroupByOutputType = {
    id: number
    bagian: string | null
    judul: string | null
    deskripsi: string | null
    embed: string | null
    createdAt: Date
    updatedAt: Date
    _count: MaterisCountAggregateOutputType | null
    _avg: MaterisAvgAggregateOutputType | null
    _sum: MaterisSumAggregateOutputType | null
    _min: MaterisMinAggregateOutputType | null
    _max: MaterisMaxAggregateOutputType | null
  }

  type GetMaterisGroupByPayload<T extends MaterisGroupByArgs> = Promise<
    Array<
      PickArray<MaterisGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof MaterisGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], MaterisGroupByOutputType[P]> 
            : GetScalarType<T[P], MaterisGroupByOutputType[P]>
        }
      > 
    >


  export type MaterisSelect = {
    id?: boolean
    bagian?: boolean
    judul?: boolean
    deskripsi?: boolean
    embed?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Files?: boolean | FilesFindManyArgs
  }

  export type MaterisInclude = {
    Files?: boolean | FilesFindManyArgs
  }

  export type MaterisGetPayload<
    S extends boolean | null | undefined | MaterisArgs,
    U = keyof S
      > = S extends true
        ? Materis
    : S extends undefined
    ? never
    : S extends MaterisArgs | MaterisFindManyArgs
    ?'include' extends U
    ? Materis  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Files'
        ? Array < FilesGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Materis ?Materis [P]
  : 
          P extends 'Files'
        ? Array < FilesGetPayload<S['select'][P]>>  : never
  } 
    : Materis
  : Materis


  type MaterisCountArgs = Merge<
    Omit<MaterisFindManyArgs, 'select' | 'include'> & {
      select?: MaterisCountAggregateInputType | true
    }
  >

  export interface MaterisDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Materis that matches the filter.
     * @param {MaterisFindUniqueArgs} args - Arguments to find a Materis
     * @example
     * // Get one Materis
     * const materis = await prisma.materis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MaterisFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MaterisFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Materis'> extends True ? CheckSelect<T, Prisma__MaterisClient<Materis>, Prisma__MaterisClient<MaterisGetPayload<T>>> : CheckSelect<T, Prisma__MaterisClient<Materis | null >, Prisma__MaterisClient<MaterisGetPayload<T> | null >>

    /**
     * Find the first Materis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterisFindFirstArgs} args - Arguments to find a Materis
     * @example
     * // Get one Materis
     * const materis = await prisma.materis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MaterisFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MaterisFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Materis'> extends True ? CheckSelect<T, Prisma__MaterisClient<Materis>, Prisma__MaterisClient<MaterisGetPayload<T>>> : CheckSelect<T, Prisma__MaterisClient<Materis | null >, Prisma__MaterisClient<MaterisGetPayload<T> | null >>

    /**
     * Find zero or more Materises that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterisFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materises
     * const materises = await prisma.materis.findMany()
     * 
     * // Get first 10 Materises
     * const materises = await prisma.materis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materisWithIdOnly = await prisma.materis.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MaterisFindManyArgs>(
      args?: SelectSubset<T, MaterisFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Materis>>, PrismaPromise<Array<MaterisGetPayload<T>>>>

    /**
     * Create a Materis.
     * @param {MaterisCreateArgs} args - Arguments to create a Materis.
     * @example
     * // Create one Materis
     * const Materis = await prisma.materis.create({
     *   data: {
     *     // ... data to create a Materis
     *   }
     * })
     * 
    **/
    create<T extends MaterisCreateArgs>(
      args: SelectSubset<T, MaterisCreateArgs>
    ): CheckSelect<T, Prisma__MaterisClient<Materis>, Prisma__MaterisClient<MaterisGetPayload<T>>>

    /**
     * Create many Materises.
     *     @param {MaterisCreateManyArgs} args - Arguments to create many Materises.
     *     @example
     *     // Create many Materises
     *     const materis = await prisma.materis.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MaterisCreateManyArgs>(
      args?: SelectSubset<T, MaterisCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Materis.
     * @param {MaterisDeleteArgs} args - Arguments to delete one Materis.
     * @example
     * // Delete one Materis
     * const Materis = await prisma.materis.delete({
     *   where: {
     *     // ... filter to delete one Materis
     *   }
     * })
     * 
    **/
    delete<T extends MaterisDeleteArgs>(
      args: SelectSubset<T, MaterisDeleteArgs>
    ): CheckSelect<T, Prisma__MaterisClient<Materis>, Prisma__MaterisClient<MaterisGetPayload<T>>>

    /**
     * Update one Materis.
     * @param {MaterisUpdateArgs} args - Arguments to update one Materis.
     * @example
     * // Update one Materis
     * const materis = await prisma.materis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MaterisUpdateArgs>(
      args: SelectSubset<T, MaterisUpdateArgs>
    ): CheckSelect<T, Prisma__MaterisClient<Materis>, Prisma__MaterisClient<MaterisGetPayload<T>>>

    /**
     * Delete zero or more Materises.
     * @param {MaterisDeleteManyArgs} args - Arguments to filter Materises to delete.
     * @example
     * // Delete a few Materises
     * const { count } = await prisma.materis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MaterisDeleteManyArgs>(
      args?: SelectSubset<T, MaterisDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materises
     * const materis = await prisma.materis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MaterisUpdateManyArgs>(
      args: SelectSubset<T, MaterisUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Materis.
     * @param {MaterisUpsertArgs} args - Arguments to update or create a Materis.
     * @example
     * // Update or create a Materis
     * const materis = await prisma.materis.upsert({
     *   create: {
     *     // ... data to create a Materis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materis we want to update
     *   }
     * })
    **/
    upsert<T extends MaterisUpsertArgs>(
      args: SelectSubset<T, MaterisUpsertArgs>
    ): CheckSelect<T, Prisma__MaterisClient<Materis>, Prisma__MaterisClient<MaterisGetPayload<T>>>

    /**
     * Count the number of Materises.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterisCountArgs} args - Arguments to filter Materises to count.
     * @example
     * // Count the number of Materises
     * const count = await prisma.materis.count({
     *   where: {
     *     // ... the filter for the Materises we want to count
     *   }
     * })
    **/
    count<T extends MaterisCountArgs>(
      args?: Subset<T, MaterisCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MaterisAggregateArgs>(args: Subset<T, MaterisAggregateArgs>): PrismaPromise<GetMaterisAggregateType<T>>

    /**
     * Group by Materis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterisGroupByArgs} args - Group by arguments.
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
      T extends MaterisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterisGroupByArgs['orderBy'] }
        : { orderBy?: MaterisGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MaterisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterisGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MaterisClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Files<T extends FilesFindManyArgs = {}>(args?: Subset<T, FilesFindManyArgs>): CheckSelect<T, PrismaPromise<Array<Files>>, PrismaPromise<Array<FilesGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Materis findUnique
   */
  export type MaterisFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Materis
     * 
    **/
    select?: MaterisSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MaterisInclude | null
    /**
     * Throw an Error if a Materis can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Materis to fetch.
     * 
    **/
    where: MaterisWhereUniqueInput
  }


  /**
   * Materis findFirst
   */
  export type MaterisFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Materis
     * 
    **/
    select?: MaterisSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MaterisInclude | null
    /**
     * Throw an Error if a Materis can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Materis to fetch.
     * 
    **/
    where?: MaterisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materises to fetch.
     * 
    **/
    orderBy?: Enumerable<MaterisOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materises.
     * 
    **/
    cursor?: MaterisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materises from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materises.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materises.
     * 
    **/
    distinct?: Enumerable<MaterisScalarFieldEnum>
  }


  /**
   * Materis findMany
   */
  export type MaterisFindManyArgs = {
    /**
     * Select specific fields to fetch from the Materis
     * 
    **/
    select?: MaterisSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MaterisInclude | null
    /**
     * Filter, which Materises to fetch.
     * 
    **/
    where?: MaterisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materises to fetch.
     * 
    **/
    orderBy?: Enumerable<MaterisOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materises.
     * 
    **/
    cursor?: MaterisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materises from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materises.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MaterisScalarFieldEnum>
  }


  /**
   * Materis create
   */
  export type MaterisCreateArgs = {
    /**
     * Select specific fields to fetch from the Materis
     * 
    **/
    select?: MaterisSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MaterisInclude | null
    /**
     * The data needed to create a Materis.
     * 
    **/
    data: XOR<MaterisCreateInput, MaterisUncheckedCreateInput>
  }


  /**
   * Materis createMany
   */
  export type MaterisCreateManyArgs = {
    data: Enumerable<MaterisCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Materis update
   */
  export type MaterisUpdateArgs = {
    /**
     * Select specific fields to fetch from the Materis
     * 
    **/
    select?: MaterisSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MaterisInclude | null
    /**
     * The data needed to update a Materis.
     * 
    **/
    data: XOR<MaterisUpdateInput, MaterisUncheckedUpdateInput>
    /**
     * Choose, which Materis to update.
     * 
    **/
    where: MaterisWhereUniqueInput
  }


  /**
   * Materis updateMany
   */
  export type MaterisUpdateManyArgs = {
    data: XOR<MaterisUpdateManyMutationInput, MaterisUncheckedUpdateManyInput>
    where?: MaterisWhereInput
  }


  /**
   * Materis upsert
   */
  export type MaterisUpsertArgs = {
    /**
     * Select specific fields to fetch from the Materis
     * 
    **/
    select?: MaterisSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MaterisInclude | null
    /**
     * The filter to search for the Materis to update in case it exists.
     * 
    **/
    where: MaterisWhereUniqueInput
    /**
     * In case the Materis found by the `where` argument doesn't exist, create a new Materis with this data.
     * 
    **/
    create: XOR<MaterisCreateInput, MaterisUncheckedCreateInput>
    /**
     * In case the Materis was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MaterisUpdateInput, MaterisUncheckedUpdateInput>
  }


  /**
   * Materis delete
   */
  export type MaterisDeleteArgs = {
    /**
     * Select specific fields to fetch from the Materis
     * 
    **/
    select?: MaterisSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MaterisInclude | null
    /**
     * Filter which Materis to delete.
     * 
    **/
    where: MaterisWhereUniqueInput
  }


  /**
   * Materis deleteMany
   */
  export type MaterisDeleteManyArgs = {
    where?: MaterisWhereInput
  }


  /**
   * Materis without action
   */
  export type MaterisArgs = {
    /**
     * Select specific fields to fetch from the Materis
     * 
    **/
    select?: MaterisSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MaterisInclude | null
  }



  /**
   * Model Mentorings
   */


  export type AggregateMentorings = {
    _count: MentoringsCountAggregateOutputType | null
    count: MentoringsCountAggregateOutputType | null
    _avg: MentoringsAvgAggregateOutputType | null
    avg: MentoringsAvgAggregateOutputType | null
    _sum: MentoringsSumAggregateOutputType | null
    sum: MentoringsSumAggregateOutputType | null
    _min: MentoringsMinAggregateOutputType | null
    min: MentoringsMinAggregateOutputType | null
    _max: MentoringsMaxAggregateOutputType | null
    max: MentoringsMaxAggregateOutputType | null
  }

  export type MentoringsAvgAggregateOutputType = {
    id: number | null
    detail: number | null
  }

  export type MentoringsSumAggregateOutputType = {
    id: number | null
    detail: number | null
  }

  export type MentoringsMinAggregateOutputType = {
    id: number | null
    kelompok: string | null
    link: string | null
    detail: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MentoringsMaxAggregateOutputType = {
    id: number | null
    kelompok: string | null
    link: string | null
    detail: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MentoringsCountAggregateOutputType = {
    id: number
    kelompok: number
    link: number
    detail: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MentoringsAvgAggregateInputType = {
    id?: true
    detail?: true
  }

  export type MentoringsSumAggregateInputType = {
    id?: true
    detail?: true
  }

  export type MentoringsMinAggregateInputType = {
    id?: true
    kelompok?: true
    link?: true
    detail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MentoringsMaxAggregateInputType = {
    id?: true
    kelompok?: true
    link?: true
    detail?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MentoringsCountAggregateInputType = {
    id?: true
    kelompok?: true
    link?: true
    detail?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MentoringsAggregateArgs = {
    /**
     * Filter which Mentorings to aggregate.
     * 
    **/
    where?: MentoringsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentorings to fetch.
     * 
    **/
    orderBy?: Enumerable<MentoringsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: MentoringsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentorings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentorings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Mentorings
    **/
    _count?: true | MentoringsCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | MentoringsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MentoringsAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: MentoringsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MentoringsSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: MentoringsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MentoringsMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: MentoringsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MentoringsMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: MentoringsMaxAggregateInputType
  }

  export type GetMentoringsAggregateType<T extends MentoringsAggregateArgs> = {
        [P in keyof T & keyof AggregateMentorings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMentorings[P]>
      : GetScalarType<T[P], AggregateMentorings[P]>
  }


    
    
  export type MentoringsGroupByArgs = {
    where?: MentoringsWhereInput
    orderBy?: Enumerable<MentoringsOrderByInput>
    by: Array<MentoringsScalarFieldEnum>
    having?: MentoringsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MentoringsCountAggregateInputType | true
    _avg?: MentoringsAvgAggregateInputType
    _sum?: MentoringsSumAggregateInputType
    _min?: MentoringsMinAggregateInputType
    _max?: MentoringsMaxAggregateInputType
  }


  export type MentoringsGroupByOutputType = {
    id: number
    kelompok: string | null
    link: string | null
    detail: number | null
    createdAt: Date
    updatedAt: Date
    _count: MentoringsCountAggregateOutputType | null
    _avg: MentoringsAvgAggregateOutputType | null
    _sum: MentoringsSumAggregateOutputType | null
    _min: MentoringsMinAggregateOutputType | null
    _max: MentoringsMaxAggregateOutputType | null
  }

  type GetMentoringsGroupByPayload<T extends MentoringsGroupByArgs> = Promise<
    Array<
      PickArray<MentoringsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof MentoringsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], MentoringsGroupByOutputType[P]> 
            : GetScalarType<T[P], MentoringsGroupByOutputType[P]>
        }
      > 
    >


  export type MentoringsSelect = {
    id?: boolean
    kelompok?: boolean
    link?: boolean
    detail?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    DetailMentorings?: boolean | DetailMentoringsArgs
  }

  export type MentoringsInclude = {
    DetailMentorings?: boolean | DetailMentoringsArgs
  }

  export type MentoringsGetPayload<
    S extends boolean | null | undefined | MentoringsArgs,
    U = keyof S
      > = S extends true
        ? Mentorings
    : S extends undefined
    ? never
    : S extends MentoringsArgs | MentoringsFindManyArgs
    ?'include' extends U
    ? Mentorings  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'DetailMentorings'
        ? DetailMentoringsGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Mentorings ?Mentorings [P]
  : 
          P extends 'DetailMentorings'
        ? DetailMentoringsGetPayload<S['select'][P]> | null : never
  } 
    : Mentorings
  : Mentorings


  type MentoringsCountArgs = Merge<
    Omit<MentoringsFindManyArgs, 'select' | 'include'> & {
      select?: MentoringsCountAggregateInputType | true
    }
  >

  export interface MentoringsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Mentorings that matches the filter.
     * @param {MentoringsFindUniqueArgs} args - Arguments to find a Mentorings
     * @example
     * // Get one Mentorings
     * const mentorings = await prisma.mentorings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MentoringsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, MentoringsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Mentorings'> extends True ? CheckSelect<T, Prisma__MentoringsClient<Mentorings>, Prisma__MentoringsClient<MentoringsGetPayload<T>>> : CheckSelect<T, Prisma__MentoringsClient<Mentorings | null >, Prisma__MentoringsClient<MentoringsGetPayload<T> | null >>

    /**
     * Find the first Mentorings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentoringsFindFirstArgs} args - Arguments to find a Mentorings
     * @example
     * // Get one Mentorings
     * const mentorings = await prisma.mentorings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MentoringsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, MentoringsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Mentorings'> extends True ? CheckSelect<T, Prisma__MentoringsClient<Mentorings>, Prisma__MentoringsClient<MentoringsGetPayload<T>>> : CheckSelect<T, Prisma__MentoringsClient<Mentorings | null >, Prisma__MentoringsClient<MentoringsGetPayload<T> | null >>

    /**
     * Find zero or more Mentorings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentoringsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Mentorings
     * const mentorings = await prisma.mentorings.findMany()
     * 
     * // Get first 10 Mentorings
     * const mentorings = await prisma.mentorings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mentoringsWithIdOnly = await prisma.mentorings.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MentoringsFindManyArgs>(
      args?: SelectSubset<T, MentoringsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Mentorings>>, PrismaPromise<Array<MentoringsGetPayload<T>>>>

    /**
     * Create a Mentorings.
     * @param {MentoringsCreateArgs} args - Arguments to create a Mentorings.
     * @example
     * // Create one Mentorings
     * const Mentorings = await prisma.mentorings.create({
     *   data: {
     *     // ... data to create a Mentorings
     *   }
     * })
     * 
    **/
    create<T extends MentoringsCreateArgs>(
      args: SelectSubset<T, MentoringsCreateArgs>
    ): CheckSelect<T, Prisma__MentoringsClient<Mentorings>, Prisma__MentoringsClient<MentoringsGetPayload<T>>>

    /**
     * Create many Mentorings.
     *     @param {MentoringsCreateManyArgs} args - Arguments to create many Mentorings.
     *     @example
     *     // Create many Mentorings
     *     const mentorings = await prisma.mentorings.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MentoringsCreateManyArgs>(
      args?: SelectSubset<T, MentoringsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Mentorings.
     * @param {MentoringsDeleteArgs} args - Arguments to delete one Mentorings.
     * @example
     * // Delete one Mentorings
     * const Mentorings = await prisma.mentorings.delete({
     *   where: {
     *     // ... filter to delete one Mentorings
     *   }
     * })
     * 
    **/
    delete<T extends MentoringsDeleteArgs>(
      args: SelectSubset<T, MentoringsDeleteArgs>
    ): CheckSelect<T, Prisma__MentoringsClient<Mentorings>, Prisma__MentoringsClient<MentoringsGetPayload<T>>>

    /**
     * Update one Mentorings.
     * @param {MentoringsUpdateArgs} args - Arguments to update one Mentorings.
     * @example
     * // Update one Mentorings
     * const mentorings = await prisma.mentorings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MentoringsUpdateArgs>(
      args: SelectSubset<T, MentoringsUpdateArgs>
    ): CheckSelect<T, Prisma__MentoringsClient<Mentorings>, Prisma__MentoringsClient<MentoringsGetPayload<T>>>

    /**
     * Delete zero or more Mentorings.
     * @param {MentoringsDeleteManyArgs} args - Arguments to filter Mentorings to delete.
     * @example
     * // Delete a few Mentorings
     * const { count } = await prisma.mentorings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MentoringsDeleteManyArgs>(
      args?: SelectSubset<T, MentoringsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Mentorings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentoringsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Mentorings
     * const mentorings = await prisma.mentorings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MentoringsUpdateManyArgs>(
      args: SelectSubset<T, MentoringsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Mentorings.
     * @param {MentoringsUpsertArgs} args - Arguments to update or create a Mentorings.
     * @example
     * // Update or create a Mentorings
     * const mentorings = await prisma.mentorings.upsert({
     *   create: {
     *     // ... data to create a Mentorings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Mentorings we want to update
     *   }
     * })
    **/
    upsert<T extends MentoringsUpsertArgs>(
      args: SelectSubset<T, MentoringsUpsertArgs>
    ): CheckSelect<T, Prisma__MentoringsClient<Mentorings>, Prisma__MentoringsClient<MentoringsGetPayload<T>>>

    /**
     * Count the number of Mentorings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentoringsCountArgs} args - Arguments to filter Mentorings to count.
     * @example
     * // Count the number of Mentorings
     * const count = await prisma.mentorings.count({
     *   where: {
     *     // ... the filter for the Mentorings we want to count
     *   }
     * })
    **/
    count<T extends MentoringsCountArgs>(
      args?: Subset<T, MentoringsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MentoringsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Mentorings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentoringsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MentoringsAggregateArgs>(args: Subset<T, MentoringsAggregateArgs>): PrismaPromise<GetMentoringsAggregateType<T>>

    /**
     * Group by Mentorings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MentoringsGroupByArgs} args - Group by arguments.
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
      T extends MentoringsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MentoringsGroupByArgs['orderBy'] }
        : { orderBy?: MentoringsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MentoringsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMentoringsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Mentorings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__MentoringsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    DetailMentorings<T extends DetailMentoringsArgs = {}>(args?: Subset<T, DetailMentoringsArgs>): CheckSelect<T, Prisma__DetailMentoringsClient<DetailMentorings | null >, Prisma__DetailMentoringsClient<DetailMentoringsGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Mentorings findUnique
   */
  export type MentoringsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Mentorings
     * 
    **/
    select?: MentoringsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MentoringsInclude | null
    /**
     * Throw an Error if a Mentorings can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mentorings to fetch.
     * 
    **/
    where: MentoringsWhereUniqueInput
  }


  /**
   * Mentorings findFirst
   */
  export type MentoringsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Mentorings
     * 
    **/
    select?: MentoringsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MentoringsInclude | null
    /**
     * Throw an Error if a Mentorings can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Mentorings to fetch.
     * 
    **/
    where?: MentoringsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentorings to fetch.
     * 
    **/
    orderBy?: Enumerable<MentoringsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Mentorings.
     * 
    **/
    cursor?: MentoringsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentorings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentorings.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Mentorings.
     * 
    **/
    distinct?: Enumerable<MentoringsScalarFieldEnum>
  }


  /**
   * Mentorings findMany
   */
  export type MentoringsFindManyArgs = {
    /**
     * Select specific fields to fetch from the Mentorings
     * 
    **/
    select?: MentoringsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MentoringsInclude | null
    /**
     * Filter, which Mentorings to fetch.
     * 
    **/
    where?: MentoringsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Mentorings to fetch.
     * 
    **/
    orderBy?: Enumerable<MentoringsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Mentorings.
     * 
    **/
    cursor?: MentoringsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Mentorings from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Mentorings.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MentoringsScalarFieldEnum>
  }


  /**
   * Mentorings create
   */
  export type MentoringsCreateArgs = {
    /**
     * Select specific fields to fetch from the Mentorings
     * 
    **/
    select?: MentoringsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MentoringsInclude | null
    /**
     * The data needed to create a Mentorings.
     * 
    **/
    data: XOR<MentoringsCreateInput, MentoringsUncheckedCreateInput>
  }


  /**
   * Mentorings createMany
   */
  export type MentoringsCreateManyArgs = {
    data: Enumerable<MentoringsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Mentorings update
   */
  export type MentoringsUpdateArgs = {
    /**
     * Select specific fields to fetch from the Mentorings
     * 
    **/
    select?: MentoringsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MentoringsInclude | null
    /**
     * The data needed to update a Mentorings.
     * 
    **/
    data: XOR<MentoringsUpdateInput, MentoringsUncheckedUpdateInput>
    /**
     * Choose, which Mentorings to update.
     * 
    **/
    where: MentoringsWhereUniqueInput
  }


  /**
   * Mentorings updateMany
   */
  export type MentoringsUpdateManyArgs = {
    data: XOR<MentoringsUpdateManyMutationInput, MentoringsUncheckedUpdateManyInput>
    where?: MentoringsWhereInput
  }


  /**
   * Mentorings upsert
   */
  export type MentoringsUpsertArgs = {
    /**
     * Select specific fields to fetch from the Mentorings
     * 
    **/
    select?: MentoringsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MentoringsInclude | null
    /**
     * The filter to search for the Mentorings to update in case it exists.
     * 
    **/
    where: MentoringsWhereUniqueInput
    /**
     * In case the Mentorings found by the `where` argument doesn't exist, create a new Mentorings with this data.
     * 
    **/
    create: XOR<MentoringsCreateInput, MentoringsUncheckedCreateInput>
    /**
     * In case the Mentorings was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<MentoringsUpdateInput, MentoringsUncheckedUpdateInput>
  }


  /**
   * Mentorings delete
   */
  export type MentoringsDeleteArgs = {
    /**
     * Select specific fields to fetch from the Mentorings
     * 
    **/
    select?: MentoringsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MentoringsInclude | null
    /**
     * Filter which Mentorings to delete.
     * 
    **/
    where: MentoringsWhereUniqueInput
  }


  /**
   * Mentorings deleteMany
   */
  export type MentoringsDeleteManyArgs = {
    where?: MentoringsWhereInput
  }


  /**
   * Mentorings without action
   */
  export type MentoringsArgs = {
    /**
     * Select specific fields to fetch from the Mentorings
     * 
    **/
    select?: MentoringsSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: MentoringsInclude | null
  }



  /**
   * Model PresensiPeserta
   */


  export type AggregatePresensiPeserta = {
    _count: PresensiPesertaCountAggregateOutputType | null
    count: PresensiPesertaCountAggregateOutputType | null
    _avg: PresensiPesertaAvgAggregateOutputType | null
    avg: PresensiPesertaAvgAggregateOutputType | null
    _sum: PresensiPesertaSumAggregateOutputType | null
    sum: PresensiPesertaSumAggregateOutputType | null
    _min: PresensiPesertaMinAggregateOutputType | null
    min: PresensiPesertaMinAggregateOutputType | null
    _max: PresensiPesertaMaxAggregateOutputType | null
    max: PresensiPesertaMaxAggregateOutputType | null
  }

  export type PresensiPesertaAvgAggregateOutputType = {
    id: number | null
    user: number | null
    jadwal: number | null
  }

  export type PresensiPesertaSumAggregateOutputType = {
    id: number | null
    user: number | null
    jadwal: number | null
  }

  export type PresensiPesertaMinAggregateOutputType = {
    id: number | null
    hadir: boolean | null
    user: number | null
    jadwal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PresensiPesertaMaxAggregateOutputType = {
    id: number | null
    hadir: boolean | null
    user: number | null
    jadwal: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PresensiPesertaCountAggregateOutputType = {
    id: number
    hadir: number
    user: number
    jadwal: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PresensiPesertaAvgAggregateInputType = {
    id?: true
    user?: true
    jadwal?: true
  }

  export type PresensiPesertaSumAggregateInputType = {
    id?: true
    user?: true
    jadwal?: true
  }

  export type PresensiPesertaMinAggregateInputType = {
    id?: true
    hadir?: true
    user?: true
    jadwal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PresensiPesertaMaxAggregateInputType = {
    id?: true
    hadir?: true
    user?: true
    jadwal?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PresensiPesertaCountAggregateInputType = {
    id?: true
    hadir?: true
    user?: true
    jadwal?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PresensiPesertaAggregateArgs = {
    /**
     * Filter which PresensiPeserta to aggregate.
     * 
    **/
    where?: PresensiPesertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresensiPesertas to fetch.
     * 
    **/
    orderBy?: Enumerable<PresensiPesertaOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: PresensiPesertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresensiPesertas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresensiPesertas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PresensiPesertas
    **/
    _count?: true | PresensiPesertaCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | PresensiPesertaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PresensiPesertaAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: PresensiPesertaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PresensiPesertaSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: PresensiPesertaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PresensiPesertaMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: PresensiPesertaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PresensiPesertaMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: PresensiPesertaMaxAggregateInputType
  }

  export type GetPresensiPesertaAggregateType<T extends PresensiPesertaAggregateArgs> = {
        [P in keyof T & keyof AggregatePresensiPeserta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePresensiPeserta[P]>
      : GetScalarType<T[P], AggregatePresensiPeserta[P]>
  }


    
    
  export type PresensiPesertaGroupByArgs = {
    where?: PresensiPesertaWhereInput
    orderBy?: Enumerable<PresensiPesertaOrderByInput>
    by: Array<PresensiPesertaScalarFieldEnum>
    having?: PresensiPesertaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PresensiPesertaCountAggregateInputType | true
    _avg?: PresensiPesertaAvgAggregateInputType
    _sum?: PresensiPesertaSumAggregateInputType
    _min?: PresensiPesertaMinAggregateInputType
    _max?: PresensiPesertaMaxAggregateInputType
  }


  export type PresensiPesertaGroupByOutputType = {
    id: number
    hadir: boolean | null
    user: number | null
    jadwal: number | null
    createdAt: Date
    updatedAt: Date
    _count: PresensiPesertaCountAggregateOutputType | null
    _avg: PresensiPesertaAvgAggregateOutputType | null
    _sum: PresensiPesertaSumAggregateOutputType | null
    _min: PresensiPesertaMinAggregateOutputType | null
    _max: PresensiPesertaMaxAggregateOutputType | null
  }

  type GetPresensiPesertaGroupByPayload<T extends PresensiPesertaGroupByArgs> = Promise<
    Array<
      PickArray<PresensiPesertaGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof PresensiPesertaGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], PresensiPesertaGroupByOutputType[P]> 
            : GetScalarType<T[P], PresensiPesertaGroupByOutputType[P]>
        }
      > 
    >


  export type PresensiPesertaSelect = {
    id?: boolean
    hadir?: boolean
    user?: boolean
    jadwal?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    JadwalPresensis?: boolean | JadwalPresensisArgs
    Users?: boolean | UsersArgs
  }

  export type PresensiPesertaInclude = {
    JadwalPresensis?: boolean | JadwalPresensisArgs
    Users?: boolean | UsersArgs
  }

  export type PresensiPesertaGetPayload<
    S extends boolean | null | undefined | PresensiPesertaArgs,
    U = keyof S
      > = S extends true
        ? PresensiPeserta
    : S extends undefined
    ? never
    : S extends PresensiPesertaArgs | PresensiPesertaFindManyArgs
    ?'include' extends U
    ? PresensiPeserta  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'JadwalPresensis'
        ? JadwalPresensisGetPayload<S['include'][P]> | null :
        P extends 'Users'
        ? UsersGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof PresensiPeserta ?PresensiPeserta [P]
  : 
          P extends 'JadwalPresensis'
        ? JadwalPresensisGetPayload<S['select'][P]> | null :
        P extends 'Users'
        ? UsersGetPayload<S['select'][P]> | null : never
  } 
    : PresensiPeserta
  : PresensiPeserta


  type PresensiPesertaCountArgs = Merge<
    Omit<PresensiPesertaFindManyArgs, 'select' | 'include'> & {
      select?: PresensiPesertaCountAggregateInputType | true
    }
  >

  export interface PresensiPesertaDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one PresensiPeserta that matches the filter.
     * @param {PresensiPesertaFindUniqueArgs} args - Arguments to find a PresensiPeserta
     * @example
     * // Get one PresensiPeserta
     * const presensiPeserta = await prisma.presensiPeserta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PresensiPesertaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PresensiPesertaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PresensiPeserta'> extends True ? CheckSelect<T, Prisma__PresensiPesertaClient<PresensiPeserta>, Prisma__PresensiPesertaClient<PresensiPesertaGetPayload<T>>> : CheckSelect<T, Prisma__PresensiPesertaClient<PresensiPeserta | null >, Prisma__PresensiPesertaClient<PresensiPesertaGetPayload<T> | null >>

    /**
     * Find the first PresensiPeserta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresensiPesertaFindFirstArgs} args - Arguments to find a PresensiPeserta
     * @example
     * // Get one PresensiPeserta
     * const presensiPeserta = await prisma.presensiPeserta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PresensiPesertaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PresensiPesertaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PresensiPeserta'> extends True ? CheckSelect<T, Prisma__PresensiPesertaClient<PresensiPeserta>, Prisma__PresensiPesertaClient<PresensiPesertaGetPayload<T>>> : CheckSelect<T, Prisma__PresensiPesertaClient<PresensiPeserta | null >, Prisma__PresensiPesertaClient<PresensiPesertaGetPayload<T> | null >>

    /**
     * Find zero or more PresensiPesertas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresensiPesertaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PresensiPesertas
     * const presensiPesertas = await prisma.presensiPeserta.findMany()
     * 
     * // Get first 10 PresensiPesertas
     * const presensiPesertas = await prisma.presensiPeserta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const presensiPesertaWithIdOnly = await prisma.presensiPeserta.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PresensiPesertaFindManyArgs>(
      args?: SelectSubset<T, PresensiPesertaFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<PresensiPeserta>>, PrismaPromise<Array<PresensiPesertaGetPayload<T>>>>

    /**
     * Create a PresensiPeserta.
     * @param {PresensiPesertaCreateArgs} args - Arguments to create a PresensiPeserta.
     * @example
     * // Create one PresensiPeserta
     * const PresensiPeserta = await prisma.presensiPeserta.create({
     *   data: {
     *     // ... data to create a PresensiPeserta
     *   }
     * })
     * 
    **/
    create<T extends PresensiPesertaCreateArgs>(
      args: SelectSubset<T, PresensiPesertaCreateArgs>
    ): CheckSelect<T, Prisma__PresensiPesertaClient<PresensiPeserta>, Prisma__PresensiPesertaClient<PresensiPesertaGetPayload<T>>>

    /**
     * Create many PresensiPesertas.
     *     @param {PresensiPesertaCreateManyArgs} args - Arguments to create many PresensiPesertas.
     *     @example
     *     // Create many PresensiPesertas
     *     const presensiPeserta = await prisma.presensiPeserta.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PresensiPesertaCreateManyArgs>(
      args?: SelectSubset<T, PresensiPesertaCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a PresensiPeserta.
     * @param {PresensiPesertaDeleteArgs} args - Arguments to delete one PresensiPeserta.
     * @example
     * // Delete one PresensiPeserta
     * const PresensiPeserta = await prisma.presensiPeserta.delete({
     *   where: {
     *     // ... filter to delete one PresensiPeserta
     *   }
     * })
     * 
    **/
    delete<T extends PresensiPesertaDeleteArgs>(
      args: SelectSubset<T, PresensiPesertaDeleteArgs>
    ): CheckSelect<T, Prisma__PresensiPesertaClient<PresensiPeserta>, Prisma__PresensiPesertaClient<PresensiPesertaGetPayload<T>>>

    /**
     * Update one PresensiPeserta.
     * @param {PresensiPesertaUpdateArgs} args - Arguments to update one PresensiPeserta.
     * @example
     * // Update one PresensiPeserta
     * const presensiPeserta = await prisma.presensiPeserta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PresensiPesertaUpdateArgs>(
      args: SelectSubset<T, PresensiPesertaUpdateArgs>
    ): CheckSelect<T, Prisma__PresensiPesertaClient<PresensiPeserta>, Prisma__PresensiPesertaClient<PresensiPesertaGetPayload<T>>>

    /**
     * Delete zero or more PresensiPesertas.
     * @param {PresensiPesertaDeleteManyArgs} args - Arguments to filter PresensiPesertas to delete.
     * @example
     * // Delete a few PresensiPesertas
     * const { count } = await prisma.presensiPeserta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PresensiPesertaDeleteManyArgs>(
      args?: SelectSubset<T, PresensiPesertaDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more PresensiPesertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresensiPesertaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PresensiPesertas
     * const presensiPeserta = await prisma.presensiPeserta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PresensiPesertaUpdateManyArgs>(
      args: SelectSubset<T, PresensiPesertaUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one PresensiPeserta.
     * @param {PresensiPesertaUpsertArgs} args - Arguments to update or create a PresensiPeserta.
     * @example
     * // Update or create a PresensiPeserta
     * const presensiPeserta = await prisma.presensiPeserta.upsert({
     *   create: {
     *     // ... data to create a PresensiPeserta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PresensiPeserta we want to update
     *   }
     * })
    **/
    upsert<T extends PresensiPesertaUpsertArgs>(
      args: SelectSubset<T, PresensiPesertaUpsertArgs>
    ): CheckSelect<T, Prisma__PresensiPesertaClient<PresensiPeserta>, Prisma__PresensiPesertaClient<PresensiPesertaGetPayload<T>>>

    /**
     * Count the number of PresensiPesertas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresensiPesertaCountArgs} args - Arguments to filter PresensiPesertas to count.
     * @example
     * // Count the number of PresensiPesertas
     * const count = await prisma.presensiPeserta.count({
     *   where: {
     *     // ... the filter for the PresensiPesertas we want to count
     *   }
     * })
    **/
    count<T extends PresensiPesertaCountArgs>(
      args?: Subset<T, PresensiPesertaCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PresensiPesertaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PresensiPeserta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresensiPesertaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PresensiPesertaAggregateArgs>(args: Subset<T, PresensiPesertaAggregateArgs>): PrismaPromise<GetPresensiPesertaAggregateType<T>>

    /**
     * Group by PresensiPeserta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PresensiPesertaGroupByArgs} args - Group by arguments.
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
      T extends PresensiPesertaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PresensiPesertaGroupByArgs['orderBy'] }
        : { orderBy?: PresensiPesertaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, PresensiPesertaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPresensiPesertaGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for PresensiPeserta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PresensiPesertaClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    JadwalPresensis<T extends JadwalPresensisArgs = {}>(args?: Subset<T, JadwalPresensisArgs>): CheckSelect<T, Prisma__JadwalPresensisClient<JadwalPresensis | null >, Prisma__JadwalPresensisClient<JadwalPresensisGetPayload<T> | null >>;

    Users<T extends UsersArgs = {}>(args?: Subset<T, UsersArgs>): CheckSelect<T, Prisma__UsersClient<Users | null >, Prisma__UsersClient<UsersGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * PresensiPeserta findUnique
   */
  export type PresensiPesertaFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the PresensiPeserta
     * 
    **/
    select?: PresensiPesertaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PresensiPesertaInclude | null
    /**
     * Throw an Error if a PresensiPeserta can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PresensiPeserta to fetch.
     * 
    **/
    where: PresensiPesertaWhereUniqueInput
  }


  /**
   * PresensiPeserta findFirst
   */
  export type PresensiPesertaFindFirstArgs = {
    /**
     * Select specific fields to fetch from the PresensiPeserta
     * 
    **/
    select?: PresensiPesertaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PresensiPesertaInclude | null
    /**
     * Throw an Error if a PresensiPeserta can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which PresensiPeserta to fetch.
     * 
    **/
    where?: PresensiPesertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresensiPesertas to fetch.
     * 
    **/
    orderBy?: Enumerable<PresensiPesertaOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PresensiPesertas.
     * 
    **/
    cursor?: PresensiPesertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresensiPesertas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresensiPesertas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PresensiPesertas.
     * 
    **/
    distinct?: Enumerable<PresensiPesertaScalarFieldEnum>
  }


  /**
   * PresensiPeserta findMany
   */
  export type PresensiPesertaFindManyArgs = {
    /**
     * Select specific fields to fetch from the PresensiPeserta
     * 
    **/
    select?: PresensiPesertaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PresensiPesertaInclude | null
    /**
     * Filter, which PresensiPesertas to fetch.
     * 
    **/
    where?: PresensiPesertaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PresensiPesertas to fetch.
     * 
    **/
    orderBy?: Enumerable<PresensiPesertaOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PresensiPesertas.
     * 
    **/
    cursor?: PresensiPesertaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PresensiPesertas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PresensiPesertas.
     * 
    **/
    skip?: number
    distinct?: Enumerable<PresensiPesertaScalarFieldEnum>
  }


  /**
   * PresensiPeserta create
   */
  export type PresensiPesertaCreateArgs = {
    /**
     * Select specific fields to fetch from the PresensiPeserta
     * 
    **/
    select?: PresensiPesertaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PresensiPesertaInclude | null
    /**
     * The data needed to create a PresensiPeserta.
     * 
    **/
    data: XOR<PresensiPesertaCreateInput, PresensiPesertaUncheckedCreateInput>
  }


  /**
   * PresensiPeserta createMany
   */
  export type PresensiPesertaCreateManyArgs = {
    data: Enumerable<PresensiPesertaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PresensiPeserta update
   */
  export type PresensiPesertaUpdateArgs = {
    /**
     * Select specific fields to fetch from the PresensiPeserta
     * 
    **/
    select?: PresensiPesertaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PresensiPesertaInclude | null
    /**
     * The data needed to update a PresensiPeserta.
     * 
    **/
    data: XOR<PresensiPesertaUpdateInput, PresensiPesertaUncheckedUpdateInput>
    /**
     * Choose, which PresensiPeserta to update.
     * 
    **/
    where: PresensiPesertaWhereUniqueInput
  }


  /**
   * PresensiPeserta updateMany
   */
  export type PresensiPesertaUpdateManyArgs = {
    data: XOR<PresensiPesertaUpdateManyMutationInput, PresensiPesertaUncheckedUpdateManyInput>
    where?: PresensiPesertaWhereInput
  }


  /**
   * PresensiPeserta upsert
   */
  export type PresensiPesertaUpsertArgs = {
    /**
     * Select specific fields to fetch from the PresensiPeserta
     * 
    **/
    select?: PresensiPesertaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PresensiPesertaInclude | null
    /**
     * The filter to search for the PresensiPeserta to update in case it exists.
     * 
    **/
    where: PresensiPesertaWhereUniqueInput
    /**
     * In case the PresensiPeserta found by the `where` argument doesn't exist, create a new PresensiPeserta with this data.
     * 
    **/
    create: XOR<PresensiPesertaCreateInput, PresensiPesertaUncheckedCreateInput>
    /**
     * In case the PresensiPeserta was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<PresensiPesertaUpdateInput, PresensiPesertaUncheckedUpdateInput>
  }


  /**
   * PresensiPeserta delete
   */
  export type PresensiPesertaDeleteArgs = {
    /**
     * Select specific fields to fetch from the PresensiPeserta
     * 
    **/
    select?: PresensiPesertaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PresensiPesertaInclude | null
    /**
     * Filter which PresensiPeserta to delete.
     * 
    **/
    where: PresensiPesertaWhereUniqueInput
  }


  /**
   * PresensiPeserta deleteMany
   */
  export type PresensiPesertaDeleteManyArgs = {
    where?: PresensiPesertaWhereInput
  }


  /**
   * PresensiPeserta without action
   */
  export type PresensiPesertaArgs = {
    /**
     * Select specific fields to fetch from the PresensiPeserta
     * 
    **/
    select?: PresensiPesertaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: PresensiPesertaInclude | null
  }



  /**
   * Model SequelizeMeta
   */


  export type AggregateSequelizeMeta = {
    _count: SequelizeMetaCountAggregateOutputType | null
    count: SequelizeMetaCountAggregateOutputType | null
    _min: SequelizeMetaMinAggregateOutputType | null
    min: SequelizeMetaMinAggregateOutputType | null
    _max: SequelizeMetaMaxAggregateOutputType | null
    max: SequelizeMetaMaxAggregateOutputType | null
  }

  export type SequelizeMetaMinAggregateOutputType = {
    name: string | null
  }

  export type SequelizeMetaMaxAggregateOutputType = {
    name: string | null
  }

  export type SequelizeMetaCountAggregateOutputType = {
    name: number
    _all: number
  }


  export type SequelizeMetaMinAggregateInputType = {
    name?: true
  }

  export type SequelizeMetaMaxAggregateInputType = {
    name?: true
  }

  export type SequelizeMetaCountAggregateInputType = {
    name?: true
    _all?: true
  }

  export type SequelizeMetaAggregateArgs = {
    /**
     * Filter which SequelizeMeta to aggregate.
     * 
    **/
    where?: SequelizeMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequelizeMetas to fetch.
     * 
    **/
    orderBy?: Enumerable<SequelizeMetaOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SequelizeMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequelizeMetas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequelizeMetas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SequelizeMetas
    **/
    _count?: true | SequelizeMetaCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | SequelizeMetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SequelizeMetaMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: SequelizeMetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SequelizeMetaMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: SequelizeMetaMaxAggregateInputType
  }

  export type GetSequelizeMetaAggregateType<T extends SequelizeMetaAggregateArgs> = {
        [P in keyof T & keyof AggregateSequelizeMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSequelizeMeta[P]>
      : GetScalarType<T[P], AggregateSequelizeMeta[P]>
  }


    
    
  export type SequelizeMetaGroupByArgs = {
    where?: SequelizeMetaWhereInput
    orderBy?: Enumerable<SequelizeMetaOrderByInput>
    by: Array<SequelizeMetaScalarFieldEnum>
    having?: SequelizeMetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SequelizeMetaCountAggregateInputType | true
    _min?: SequelizeMetaMinAggregateInputType
    _max?: SequelizeMetaMaxAggregateInputType
  }


  export type SequelizeMetaGroupByOutputType = {
    name: string
    _count: SequelizeMetaCountAggregateOutputType | null
    _min: SequelizeMetaMinAggregateOutputType | null
    _max: SequelizeMetaMaxAggregateOutputType | null
  }

  type GetSequelizeMetaGroupByPayload<T extends SequelizeMetaGroupByArgs> = Promise<
    Array<
      PickArray<SequelizeMetaGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof SequelizeMetaGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], SequelizeMetaGroupByOutputType[P]> 
            : GetScalarType<T[P], SequelizeMetaGroupByOutputType[P]>
        }
      > 
    >


  export type SequelizeMetaSelect = {
    name?: boolean
  }

  export type SequelizeMetaGetPayload<
    S extends boolean | null | undefined | SequelizeMetaArgs,
    U = keyof S
      > = S extends true
        ? SequelizeMeta
    : S extends undefined
    ? never
    : S extends SequelizeMetaArgs | SequelizeMetaFindManyArgs
    ?'include' extends U
    ? SequelizeMeta 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof SequelizeMeta ?SequelizeMeta [P]
  : 
     never
  } 
    : SequelizeMeta
  : SequelizeMeta


  type SequelizeMetaCountArgs = Merge<
    Omit<SequelizeMetaFindManyArgs, 'select' | 'include'> & {
      select?: SequelizeMetaCountAggregateInputType | true
    }
  >

  export interface SequelizeMetaDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one SequelizeMeta that matches the filter.
     * @param {SequelizeMetaFindUniqueArgs} args - Arguments to find a SequelizeMeta
     * @example
     * // Get one SequelizeMeta
     * const sequelizeMeta = await prisma.sequelizeMeta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SequelizeMetaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SequelizeMetaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SequelizeMeta'> extends True ? CheckSelect<T, Prisma__SequelizeMetaClient<SequelizeMeta>, Prisma__SequelizeMetaClient<SequelizeMetaGetPayload<T>>> : CheckSelect<T, Prisma__SequelizeMetaClient<SequelizeMeta | null >, Prisma__SequelizeMetaClient<SequelizeMetaGetPayload<T> | null >>

    /**
     * Find the first SequelizeMeta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequelizeMetaFindFirstArgs} args - Arguments to find a SequelizeMeta
     * @example
     * // Get one SequelizeMeta
     * const sequelizeMeta = await prisma.sequelizeMeta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SequelizeMetaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SequelizeMetaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SequelizeMeta'> extends True ? CheckSelect<T, Prisma__SequelizeMetaClient<SequelizeMeta>, Prisma__SequelizeMetaClient<SequelizeMetaGetPayload<T>>> : CheckSelect<T, Prisma__SequelizeMetaClient<SequelizeMeta | null >, Prisma__SequelizeMetaClient<SequelizeMetaGetPayload<T> | null >>

    /**
     * Find zero or more SequelizeMetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequelizeMetaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SequelizeMetas
     * const sequelizeMetas = await prisma.sequelizeMeta.findMany()
     * 
     * // Get first 10 SequelizeMetas
     * const sequelizeMetas = await prisma.sequelizeMeta.findMany({ take: 10 })
     * 
     * // Only select the `name`
     * const sequelizeMetaWithNameOnly = await prisma.sequelizeMeta.findMany({ select: { name: true } })
     * 
    **/
    findMany<T extends SequelizeMetaFindManyArgs>(
      args?: SelectSubset<T, SequelizeMetaFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<SequelizeMeta>>, PrismaPromise<Array<SequelizeMetaGetPayload<T>>>>

    /**
     * Create a SequelizeMeta.
     * @param {SequelizeMetaCreateArgs} args - Arguments to create a SequelizeMeta.
     * @example
     * // Create one SequelizeMeta
     * const SequelizeMeta = await prisma.sequelizeMeta.create({
     *   data: {
     *     // ... data to create a SequelizeMeta
     *   }
     * })
     * 
    **/
    create<T extends SequelizeMetaCreateArgs>(
      args: SelectSubset<T, SequelizeMetaCreateArgs>
    ): CheckSelect<T, Prisma__SequelizeMetaClient<SequelizeMeta>, Prisma__SequelizeMetaClient<SequelizeMetaGetPayload<T>>>

    /**
     * Create many SequelizeMetas.
     *     @param {SequelizeMetaCreateManyArgs} args - Arguments to create many SequelizeMetas.
     *     @example
     *     // Create many SequelizeMetas
     *     const sequelizeMeta = await prisma.sequelizeMeta.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SequelizeMetaCreateManyArgs>(
      args?: SelectSubset<T, SequelizeMetaCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a SequelizeMeta.
     * @param {SequelizeMetaDeleteArgs} args - Arguments to delete one SequelizeMeta.
     * @example
     * // Delete one SequelizeMeta
     * const SequelizeMeta = await prisma.sequelizeMeta.delete({
     *   where: {
     *     // ... filter to delete one SequelizeMeta
     *   }
     * })
     * 
    **/
    delete<T extends SequelizeMetaDeleteArgs>(
      args: SelectSubset<T, SequelizeMetaDeleteArgs>
    ): CheckSelect<T, Prisma__SequelizeMetaClient<SequelizeMeta>, Prisma__SequelizeMetaClient<SequelizeMetaGetPayload<T>>>

    /**
     * Update one SequelizeMeta.
     * @param {SequelizeMetaUpdateArgs} args - Arguments to update one SequelizeMeta.
     * @example
     * // Update one SequelizeMeta
     * const sequelizeMeta = await prisma.sequelizeMeta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SequelizeMetaUpdateArgs>(
      args: SelectSubset<T, SequelizeMetaUpdateArgs>
    ): CheckSelect<T, Prisma__SequelizeMetaClient<SequelizeMeta>, Prisma__SequelizeMetaClient<SequelizeMetaGetPayload<T>>>

    /**
     * Delete zero or more SequelizeMetas.
     * @param {SequelizeMetaDeleteManyArgs} args - Arguments to filter SequelizeMetas to delete.
     * @example
     * // Delete a few SequelizeMetas
     * const { count } = await prisma.sequelizeMeta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SequelizeMetaDeleteManyArgs>(
      args?: SelectSubset<T, SequelizeMetaDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SequelizeMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequelizeMetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SequelizeMetas
     * const sequelizeMeta = await prisma.sequelizeMeta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SequelizeMetaUpdateManyArgs>(
      args: SelectSubset<T, SequelizeMetaUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SequelizeMeta.
     * @param {SequelizeMetaUpsertArgs} args - Arguments to update or create a SequelizeMeta.
     * @example
     * // Update or create a SequelizeMeta
     * const sequelizeMeta = await prisma.sequelizeMeta.upsert({
     *   create: {
     *     // ... data to create a SequelizeMeta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SequelizeMeta we want to update
     *   }
     * })
    **/
    upsert<T extends SequelizeMetaUpsertArgs>(
      args: SelectSubset<T, SequelizeMetaUpsertArgs>
    ): CheckSelect<T, Prisma__SequelizeMetaClient<SequelizeMeta>, Prisma__SequelizeMetaClient<SequelizeMetaGetPayload<T>>>

    /**
     * Count the number of SequelizeMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequelizeMetaCountArgs} args - Arguments to filter SequelizeMetas to count.
     * @example
     * // Count the number of SequelizeMetas
     * const count = await prisma.sequelizeMeta.count({
     *   where: {
     *     // ... the filter for the SequelizeMetas we want to count
     *   }
     * })
    **/
    count<T extends SequelizeMetaCountArgs>(
      args?: Subset<T, SequelizeMetaCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SequelizeMetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SequelizeMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequelizeMetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SequelizeMetaAggregateArgs>(args: Subset<T, SequelizeMetaAggregateArgs>): PrismaPromise<GetSequelizeMetaAggregateType<T>>

    /**
     * Group by SequelizeMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SequelizeMetaGroupByArgs} args - Group by arguments.
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
      T extends SequelizeMetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SequelizeMetaGroupByArgs['orderBy'] }
        : { orderBy?: SequelizeMetaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SequelizeMetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSequelizeMetaGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for SequelizeMeta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SequelizeMetaClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * SequelizeMeta findUnique
   */
  export type SequelizeMetaFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the SequelizeMeta
     * 
    **/
    select?: SequelizeMetaSelect | null
    /**
     * Throw an Error if a SequelizeMeta can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which SequelizeMeta to fetch.
     * 
    **/
    where: SequelizeMetaWhereUniqueInput
  }


  /**
   * SequelizeMeta findFirst
   */
  export type SequelizeMetaFindFirstArgs = {
    /**
     * Select specific fields to fetch from the SequelizeMeta
     * 
    **/
    select?: SequelizeMetaSelect | null
    /**
     * Throw an Error if a SequelizeMeta can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which SequelizeMeta to fetch.
     * 
    **/
    where?: SequelizeMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequelizeMetas to fetch.
     * 
    **/
    orderBy?: Enumerable<SequelizeMetaOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SequelizeMetas.
     * 
    **/
    cursor?: SequelizeMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequelizeMetas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequelizeMetas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SequelizeMetas.
     * 
    **/
    distinct?: Enumerable<SequelizeMetaScalarFieldEnum>
  }


  /**
   * SequelizeMeta findMany
   */
  export type SequelizeMetaFindManyArgs = {
    /**
     * Select specific fields to fetch from the SequelizeMeta
     * 
    **/
    select?: SequelizeMetaSelect | null
    /**
     * Filter, which SequelizeMetas to fetch.
     * 
    **/
    where?: SequelizeMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SequelizeMetas to fetch.
     * 
    **/
    orderBy?: Enumerable<SequelizeMetaOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SequelizeMetas.
     * 
    **/
    cursor?: SequelizeMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SequelizeMetas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SequelizeMetas.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SequelizeMetaScalarFieldEnum>
  }


  /**
   * SequelizeMeta create
   */
  export type SequelizeMetaCreateArgs = {
    /**
     * Select specific fields to fetch from the SequelizeMeta
     * 
    **/
    select?: SequelizeMetaSelect | null
    /**
     * The data needed to create a SequelizeMeta.
     * 
    **/
    data: XOR<SequelizeMetaCreateInput, SequelizeMetaUncheckedCreateInput>
  }


  /**
   * SequelizeMeta createMany
   */
  export type SequelizeMetaCreateManyArgs = {
    data: Enumerable<SequelizeMetaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SequelizeMeta update
   */
  export type SequelizeMetaUpdateArgs = {
    /**
     * Select specific fields to fetch from the SequelizeMeta
     * 
    **/
    select?: SequelizeMetaSelect | null
    /**
     * The data needed to update a SequelizeMeta.
     * 
    **/
    data: XOR<SequelizeMetaUpdateInput, SequelizeMetaUncheckedUpdateInput>
    /**
     * Choose, which SequelizeMeta to update.
     * 
    **/
    where: SequelizeMetaWhereUniqueInput
  }


  /**
   * SequelizeMeta updateMany
   */
  export type SequelizeMetaUpdateManyArgs = {
    data: XOR<SequelizeMetaUpdateManyMutationInput, SequelizeMetaUncheckedUpdateManyInput>
    where?: SequelizeMetaWhereInput
  }


  /**
   * SequelizeMeta upsert
   */
  export type SequelizeMetaUpsertArgs = {
    /**
     * Select specific fields to fetch from the SequelizeMeta
     * 
    **/
    select?: SequelizeMetaSelect | null
    /**
     * The filter to search for the SequelizeMeta to update in case it exists.
     * 
    **/
    where: SequelizeMetaWhereUniqueInput
    /**
     * In case the SequelizeMeta found by the `where` argument doesn't exist, create a new SequelizeMeta with this data.
     * 
    **/
    create: XOR<SequelizeMetaCreateInput, SequelizeMetaUncheckedCreateInput>
    /**
     * In case the SequelizeMeta was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SequelizeMetaUpdateInput, SequelizeMetaUncheckedUpdateInput>
  }


  /**
   * SequelizeMeta delete
   */
  export type SequelizeMetaDeleteArgs = {
    /**
     * Select specific fields to fetch from the SequelizeMeta
     * 
    **/
    select?: SequelizeMetaSelect | null
    /**
     * Filter which SequelizeMeta to delete.
     * 
    **/
    where: SequelizeMetaWhereUniqueInput
  }


  /**
   * SequelizeMeta deleteMany
   */
  export type SequelizeMetaDeleteManyArgs = {
    where?: SequelizeMetaWhereInput
  }


  /**
   * SequelizeMeta without action
   */
  export type SequelizeMetaArgs = {
    /**
     * Select specific fields to fetch from the SequelizeMeta
     * 
    **/
    select?: SequelizeMetaSelect | null
  }



  /**
   * Model SubmisiTugas
   */


  export type AggregateSubmisiTugas = {
    _count: SubmisiTugasCountAggregateOutputType | null
    count: SubmisiTugasCountAggregateOutputType | null
    _avg: SubmisiTugasAvgAggregateOutputType | null
    avg: SubmisiTugasAvgAggregateOutputType | null
    _sum: SubmisiTugasSumAggregateOutputType | null
    sum: SubmisiTugasSumAggregateOutputType | null
    _min: SubmisiTugasMinAggregateOutputType | null
    min: SubmisiTugasMinAggregateOutputType | null
    _max: SubmisiTugasMaxAggregateOutputType | null
    max: SubmisiTugasMaxAggregateOutputType | null
  }

  export type SubmisiTugasAvgAggregateOutputType = {
    id: number | null
    pemilik: number | null
    tugas: number | null
  }

  export type SubmisiTugasSumAggregateOutputType = {
    id: number | null
    pemilik: number | null
    tugas: number | null
  }

  export type SubmisiTugasMinAggregateOutputType = {
    id: number | null
    pemilik: number | null
    tugas: number | null
    nama: string | null
    path: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmisiTugasMaxAggregateOutputType = {
    id: number | null
    pemilik: number | null
    tugas: number | null
    nama: string | null
    path: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SubmisiTugasCountAggregateOutputType = {
    id: number
    pemilik: number
    tugas: number
    nama: number
    path: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SubmisiTugasAvgAggregateInputType = {
    id?: true
    pemilik?: true
    tugas?: true
  }

  export type SubmisiTugasSumAggregateInputType = {
    id?: true
    pemilik?: true
    tugas?: true
  }

  export type SubmisiTugasMinAggregateInputType = {
    id?: true
    pemilik?: true
    tugas?: true
    nama?: true
    path?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmisiTugasMaxAggregateInputType = {
    id?: true
    pemilik?: true
    tugas?: true
    nama?: true
    path?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SubmisiTugasCountAggregateInputType = {
    id?: true
    pemilik?: true
    tugas?: true
    nama?: true
    path?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SubmisiTugasAggregateArgs = {
    /**
     * Filter which SubmisiTugas to aggregate.
     * 
    **/
    where?: SubmisiTugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubmisiTugases to fetch.
     * 
    **/
    orderBy?: Enumerable<SubmisiTugasOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: SubmisiTugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubmisiTugases from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubmisiTugases.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubmisiTugases
    **/
    _count?: true | SubmisiTugasCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | SubmisiTugasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmisiTugasAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: SubmisiTugasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmisiTugasSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: SubmisiTugasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmisiTugasMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: SubmisiTugasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmisiTugasMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: SubmisiTugasMaxAggregateInputType
  }

  export type GetSubmisiTugasAggregateType<T extends SubmisiTugasAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmisiTugas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmisiTugas[P]>
      : GetScalarType<T[P], AggregateSubmisiTugas[P]>
  }


    
    
  export type SubmisiTugasGroupByArgs = {
    where?: SubmisiTugasWhereInput
    orderBy?: Enumerable<SubmisiTugasOrderByInput>
    by: Array<SubmisiTugasScalarFieldEnum>
    having?: SubmisiTugasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmisiTugasCountAggregateInputType | true
    _avg?: SubmisiTugasAvgAggregateInputType
    _sum?: SubmisiTugasSumAggregateInputType
    _min?: SubmisiTugasMinAggregateInputType
    _max?: SubmisiTugasMaxAggregateInputType
  }


  export type SubmisiTugasGroupByOutputType = {
    id: number
    pemilik: number | null
    tugas: number | null
    nama: string | null
    path: string | null
    createdAt: Date
    updatedAt: Date
    _count: SubmisiTugasCountAggregateOutputType | null
    _avg: SubmisiTugasAvgAggregateOutputType | null
    _sum: SubmisiTugasSumAggregateOutputType | null
    _min: SubmisiTugasMinAggregateOutputType | null
    _max: SubmisiTugasMaxAggregateOutputType | null
  }

  type GetSubmisiTugasGroupByPayload<T extends SubmisiTugasGroupByArgs> = Promise<
    Array<
      PickArray<SubmisiTugasGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof SubmisiTugasGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], SubmisiTugasGroupByOutputType[P]> 
            : GetScalarType<T[P], SubmisiTugasGroupByOutputType[P]>
        }
      > 
    >


  export type SubmisiTugasSelect = {
    id?: boolean
    pemilik?: boolean
    tugas?: boolean
    nama?: boolean
    path?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    Users?: boolean | UsersArgs
    Tugas?: boolean | TugasArgs
  }

  export type SubmisiTugasInclude = {
    Users?: boolean | UsersArgs
    Tugas?: boolean | TugasArgs
  }

  export type SubmisiTugasGetPayload<
    S extends boolean | null | undefined | SubmisiTugasArgs,
    U = keyof S
      > = S extends true
        ? SubmisiTugas
    : S extends undefined
    ? never
    : S extends SubmisiTugasArgs | SubmisiTugasFindManyArgs
    ?'include' extends U
    ? SubmisiTugas  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'Users'
        ? UsersGetPayload<S['include'][P]> | null :
        P extends 'Tugas'
        ? TugasGetPayload<S['include'][P]> | null : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof SubmisiTugas ?SubmisiTugas [P]
  : 
          P extends 'Users'
        ? UsersGetPayload<S['select'][P]> | null :
        P extends 'Tugas'
        ? TugasGetPayload<S['select'][P]> | null : never
  } 
    : SubmisiTugas
  : SubmisiTugas


  type SubmisiTugasCountArgs = Merge<
    Omit<SubmisiTugasFindManyArgs, 'select' | 'include'> & {
      select?: SubmisiTugasCountAggregateInputType | true
    }
  >

  export interface SubmisiTugasDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one SubmisiTugas that matches the filter.
     * @param {SubmisiTugasFindUniqueArgs} args - Arguments to find a SubmisiTugas
     * @example
     * // Get one SubmisiTugas
     * const submisiTugas = await prisma.submisiTugas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SubmisiTugasFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SubmisiTugasFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'SubmisiTugas'> extends True ? CheckSelect<T, Prisma__SubmisiTugasClient<SubmisiTugas>, Prisma__SubmisiTugasClient<SubmisiTugasGetPayload<T>>> : CheckSelect<T, Prisma__SubmisiTugasClient<SubmisiTugas | null >, Prisma__SubmisiTugasClient<SubmisiTugasGetPayload<T> | null >>

    /**
     * Find the first SubmisiTugas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmisiTugasFindFirstArgs} args - Arguments to find a SubmisiTugas
     * @example
     * // Get one SubmisiTugas
     * const submisiTugas = await prisma.submisiTugas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SubmisiTugasFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SubmisiTugasFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'SubmisiTugas'> extends True ? CheckSelect<T, Prisma__SubmisiTugasClient<SubmisiTugas>, Prisma__SubmisiTugasClient<SubmisiTugasGetPayload<T>>> : CheckSelect<T, Prisma__SubmisiTugasClient<SubmisiTugas | null >, Prisma__SubmisiTugasClient<SubmisiTugasGetPayload<T> | null >>

    /**
     * Find zero or more SubmisiTugases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmisiTugasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubmisiTugases
     * const submisiTugases = await prisma.submisiTugas.findMany()
     * 
     * // Get first 10 SubmisiTugases
     * const submisiTugases = await prisma.submisiTugas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submisiTugasWithIdOnly = await prisma.submisiTugas.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SubmisiTugasFindManyArgs>(
      args?: SelectSubset<T, SubmisiTugasFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<SubmisiTugas>>, PrismaPromise<Array<SubmisiTugasGetPayload<T>>>>

    /**
     * Create a SubmisiTugas.
     * @param {SubmisiTugasCreateArgs} args - Arguments to create a SubmisiTugas.
     * @example
     * // Create one SubmisiTugas
     * const SubmisiTugas = await prisma.submisiTugas.create({
     *   data: {
     *     // ... data to create a SubmisiTugas
     *   }
     * })
     * 
    **/
    create<T extends SubmisiTugasCreateArgs>(
      args: SelectSubset<T, SubmisiTugasCreateArgs>
    ): CheckSelect<T, Prisma__SubmisiTugasClient<SubmisiTugas>, Prisma__SubmisiTugasClient<SubmisiTugasGetPayload<T>>>

    /**
     * Create many SubmisiTugases.
     *     @param {SubmisiTugasCreateManyArgs} args - Arguments to create many SubmisiTugases.
     *     @example
     *     // Create many SubmisiTugases
     *     const submisiTugas = await prisma.submisiTugas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SubmisiTugasCreateManyArgs>(
      args?: SelectSubset<T, SubmisiTugasCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a SubmisiTugas.
     * @param {SubmisiTugasDeleteArgs} args - Arguments to delete one SubmisiTugas.
     * @example
     * // Delete one SubmisiTugas
     * const SubmisiTugas = await prisma.submisiTugas.delete({
     *   where: {
     *     // ... filter to delete one SubmisiTugas
     *   }
     * })
     * 
    **/
    delete<T extends SubmisiTugasDeleteArgs>(
      args: SelectSubset<T, SubmisiTugasDeleteArgs>
    ): CheckSelect<T, Prisma__SubmisiTugasClient<SubmisiTugas>, Prisma__SubmisiTugasClient<SubmisiTugasGetPayload<T>>>

    /**
     * Update one SubmisiTugas.
     * @param {SubmisiTugasUpdateArgs} args - Arguments to update one SubmisiTugas.
     * @example
     * // Update one SubmisiTugas
     * const submisiTugas = await prisma.submisiTugas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SubmisiTugasUpdateArgs>(
      args: SelectSubset<T, SubmisiTugasUpdateArgs>
    ): CheckSelect<T, Prisma__SubmisiTugasClient<SubmisiTugas>, Prisma__SubmisiTugasClient<SubmisiTugasGetPayload<T>>>

    /**
     * Delete zero or more SubmisiTugases.
     * @param {SubmisiTugasDeleteManyArgs} args - Arguments to filter SubmisiTugases to delete.
     * @example
     * // Delete a few SubmisiTugases
     * const { count } = await prisma.submisiTugas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SubmisiTugasDeleteManyArgs>(
      args?: SelectSubset<T, SubmisiTugasDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubmisiTugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmisiTugasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubmisiTugases
     * const submisiTugas = await prisma.submisiTugas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SubmisiTugasUpdateManyArgs>(
      args: SelectSubset<T, SubmisiTugasUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one SubmisiTugas.
     * @param {SubmisiTugasUpsertArgs} args - Arguments to update or create a SubmisiTugas.
     * @example
     * // Update or create a SubmisiTugas
     * const submisiTugas = await prisma.submisiTugas.upsert({
     *   create: {
     *     // ... data to create a SubmisiTugas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubmisiTugas we want to update
     *   }
     * })
    **/
    upsert<T extends SubmisiTugasUpsertArgs>(
      args: SelectSubset<T, SubmisiTugasUpsertArgs>
    ): CheckSelect<T, Prisma__SubmisiTugasClient<SubmisiTugas>, Prisma__SubmisiTugasClient<SubmisiTugasGetPayload<T>>>

    /**
     * Count the number of SubmisiTugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmisiTugasCountArgs} args - Arguments to filter SubmisiTugases to count.
     * @example
     * // Count the number of SubmisiTugases
     * const count = await prisma.submisiTugas.count({
     *   where: {
     *     // ... the filter for the SubmisiTugases we want to count
     *   }
     * })
    **/
    count<T extends SubmisiTugasCountArgs>(
      args?: Subset<T, SubmisiTugasCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmisiTugasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubmisiTugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmisiTugasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SubmisiTugasAggregateArgs>(args: Subset<T, SubmisiTugasAggregateArgs>): PrismaPromise<GetSubmisiTugasAggregateType<T>>

    /**
     * Group by SubmisiTugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmisiTugasGroupByArgs} args - Group by arguments.
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
      T extends SubmisiTugasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmisiTugasGroupByArgs['orderBy'] }
        : { orderBy?: SubmisiTugasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, SubmisiTugasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmisiTugasGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubmisiTugas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SubmisiTugasClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    Users<T extends UsersArgs = {}>(args?: Subset<T, UsersArgs>): CheckSelect<T, Prisma__UsersClient<Users | null >, Prisma__UsersClient<UsersGetPayload<T> | null >>;

    Tugas<T extends TugasArgs = {}>(args?: Subset<T, TugasArgs>): CheckSelect<T, Prisma__TugasClient<Tugas | null >, Prisma__TugasClient<TugasGetPayload<T> | null >>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * SubmisiTugas findUnique
   */
  export type SubmisiTugasFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the SubmisiTugas
     * 
    **/
    select?: SubmisiTugasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubmisiTugasInclude | null
    /**
     * Throw an Error if a SubmisiTugas can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which SubmisiTugas to fetch.
     * 
    **/
    where: SubmisiTugasWhereUniqueInput
  }


  /**
   * SubmisiTugas findFirst
   */
  export type SubmisiTugasFindFirstArgs = {
    /**
     * Select specific fields to fetch from the SubmisiTugas
     * 
    **/
    select?: SubmisiTugasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubmisiTugasInclude | null
    /**
     * Throw an Error if a SubmisiTugas can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which SubmisiTugas to fetch.
     * 
    **/
    where?: SubmisiTugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubmisiTugases to fetch.
     * 
    **/
    orderBy?: Enumerable<SubmisiTugasOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubmisiTugases.
     * 
    **/
    cursor?: SubmisiTugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubmisiTugases from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubmisiTugases.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubmisiTugases.
     * 
    **/
    distinct?: Enumerable<SubmisiTugasScalarFieldEnum>
  }


  /**
   * SubmisiTugas findMany
   */
  export type SubmisiTugasFindManyArgs = {
    /**
     * Select specific fields to fetch from the SubmisiTugas
     * 
    **/
    select?: SubmisiTugasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubmisiTugasInclude | null
    /**
     * Filter, which SubmisiTugases to fetch.
     * 
    **/
    where?: SubmisiTugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubmisiTugases to fetch.
     * 
    **/
    orderBy?: Enumerable<SubmisiTugasOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubmisiTugases.
     * 
    **/
    cursor?: SubmisiTugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubmisiTugases from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubmisiTugases.
     * 
    **/
    skip?: number
    distinct?: Enumerable<SubmisiTugasScalarFieldEnum>
  }


  /**
   * SubmisiTugas create
   */
  export type SubmisiTugasCreateArgs = {
    /**
     * Select specific fields to fetch from the SubmisiTugas
     * 
    **/
    select?: SubmisiTugasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubmisiTugasInclude | null
    /**
     * The data needed to create a SubmisiTugas.
     * 
    **/
    data: XOR<SubmisiTugasCreateInput, SubmisiTugasUncheckedCreateInput>
  }


  /**
   * SubmisiTugas createMany
   */
  export type SubmisiTugasCreateManyArgs = {
    data: Enumerable<SubmisiTugasCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * SubmisiTugas update
   */
  export type SubmisiTugasUpdateArgs = {
    /**
     * Select specific fields to fetch from the SubmisiTugas
     * 
    **/
    select?: SubmisiTugasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubmisiTugasInclude | null
    /**
     * The data needed to update a SubmisiTugas.
     * 
    **/
    data: XOR<SubmisiTugasUpdateInput, SubmisiTugasUncheckedUpdateInput>
    /**
     * Choose, which SubmisiTugas to update.
     * 
    **/
    where: SubmisiTugasWhereUniqueInput
  }


  /**
   * SubmisiTugas updateMany
   */
  export type SubmisiTugasUpdateManyArgs = {
    data: XOR<SubmisiTugasUpdateManyMutationInput, SubmisiTugasUncheckedUpdateManyInput>
    where?: SubmisiTugasWhereInput
  }


  /**
   * SubmisiTugas upsert
   */
  export type SubmisiTugasUpsertArgs = {
    /**
     * Select specific fields to fetch from the SubmisiTugas
     * 
    **/
    select?: SubmisiTugasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubmisiTugasInclude | null
    /**
     * The filter to search for the SubmisiTugas to update in case it exists.
     * 
    **/
    where: SubmisiTugasWhereUniqueInput
    /**
     * In case the SubmisiTugas found by the `where` argument doesn't exist, create a new SubmisiTugas with this data.
     * 
    **/
    create: XOR<SubmisiTugasCreateInput, SubmisiTugasUncheckedCreateInput>
    /**
     * In case the SubmisiTugas was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<SubmisiTugasUpdateInput, SubmisiTugasUncheckedUpdateInput>
  }


  /**
   * SubmisiTugas delete
   */
  export type SubmisiTugasDeleteArgs = {
    /**
     * Select specific fields to fetch from the SubmisiTugas
     * 
    **/
    select?: SubmisiTugasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubmisiTugasInclude | null
    /**
     * Filter which SubmisiTugas to delete.
     * 
    **/
    where: SubmisiTugasWhereUniqueInput
  }


  /**
   * SubmisiTugas deleteMany
   */
  export type SubmisiTugasDeleteManyArgs = {
    where?: SubmisiTugasWhereInput
  }


  /**
   * SubmisiTugas without action
   */
  export type SubmisiTugasArgs = {
    /**
     * Select specific fields to fetch from the SubmisiTugas
     * 
    **/
    select?: SubmisiTugasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: SubmisiTugasInclude | null
  }



  /**
   * Model Tugas
   */


  export type AggregateTugas = {
    _count: TugasCountAggregateOutputType | null
    count: TugasCountAggregateOutputType | null
    _avg: TugasAvgAggregateOutputType | null
    avg: TugasAvgAggregateOutputType | null
    _sum: TugasSumAggregateOutputType | null
    sum: TugasSumAggregateOutputType | null
    _min: TugasMinAggregateOutputType | null
    min: TugasMinAggregateOutputType | null
    _max: TugasMaxAggregateOutputType | null
    max: TugasMaxAggregateOutputType | null
  }

  export type TugasAvgAggregateOutputType = {
    id: number | null
  }

  export type TugasSumAggregateOutputType = {
    id: number | null
  }

  export type TugasMinAggregateOutputType = {
    id: number | null
    bagian: string | null
    judul: string | null
    deskripsi: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deadline: Date | null
  }

  export type TugasMaxAggregateOutputType = {
    id: number | null
    bagian: string | null
    judul: string | null
    deskripsi: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deadline: Date | null
  }

  export type TugasCountAggregateOutputType = {
    id: number
    bagian: number
    judul: number
    deskripsi: number
    createdAt: number
    updatedAt: number
    deadline: number
    _all: number
  }


  export type TugasAvgAggregateInputType = {
    id?: true
  }

  export type TugasSumAggregateInputType = {
    id?: true
  }

  export type TugasMinAggregateInputType = {
    id?: true
    bagian?: true
    judul?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
    deadline?: true
  }

  export type TugasMaxAggregateInputType = {
    id?: true
    bagian?: true
    judul?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
    deadline?: true
  }

  export type TugasCountAggregateInputType = {
    id?: true
    bagian?: true
    judul?: true
    deskripsi?: true
    createdAt?: true
    updatedAt?: true
    deadline?: true
    _all?: true
  }

  export type TugasAggregateArgs = {
    /**
     * Filter which Tugas to aggregate.
     * 
    **/
    where?: TugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tugases to fetch.
     * 
    **/
    orderBy?: Enumerable<TugasOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: TugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tugases from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tugases.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tugases
    **/
    _count?: true | TugasCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | TugasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TugasAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: TugasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TugasSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: TugasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TugasMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: TugasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TugasMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: TugasMaxAggregateInputType
  }

  export type GetTugasAggregateType<T extends TugasAggregateArgs> = {
        [P in keyof T & keyof AggregateTugas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTugas[P]>
      : GetScalarType<T[P], AggregateTugas[P]>
  }


    
    
  export type TugasGroupByArgs = {
    where?: TugasWhereInput
    orderBy?: Enumerable<TugasOrderByInput>
    by: Array<TugasScalarFieldEnum>
    having?: TugasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TugasCountAggregateInputType | true
    _avg?: TugasAvgAggregateInputType
    _sum?: TugasSumAggregateInputType
    _min?: TugasMinAggregateInputType
    _max?: TugasMaxAggregateInputType
  }


  export type TugasGroupByOutputType = {
    id: number
    bagian: string | null
    judul: string | null
    deskripsi: string | null
    createdAt: Date
    updatedAt: Date
    deadline: Date | null
    _count: TugasCountAggregateOutputType | null
    _avg: TugasAvgAggregateOutputType | null
    _sum: TugasSumAggregateOutputType | null
    _min: TugasMinAggregateOutputType | null
    _max: TugasMaxAggregateOutputType | null
  }

  type GetTugasGroupByPayload<T extends TugasGroupByArgs> = Promise<
    Array<
      PickArray<TugasGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof TugasGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], TugasGroupByOutputType[P]> 
            : GetScalarType<T[P], TugasGroupByOutputType[P]>
        }
      > 
    >


  export type TugasSelect = {
    id?: boolean
    bagian?: boolean
    judul?: boolean
    deskripsi?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deadline?: boolean
    SubmisiTugas?: boolean | SubmisiTugasFindManyArgs
  }

  export type TugasInclude = {
    SubmisiTugas?: boolean | SubmisiTugasFindManyArgs
  }

  export type TugasGetPayload<
    S extends boolean | null | undefined | TugasArgs,
    U = keyof S
      > = S extends true
        ? Tugas
    : S extends undefined
    ? never
    : S extends TugasArgs | TugasFindManyArgs
    ?'include' extends U
    ? Tugas  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'SubmisiTugas'
        ? Array < SubmisiTugasGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Tugas ?Tugas [P]
  : 
          P extends 'SubmisiTugas'
        ? Array < SubmisiTugasGetPayload<S['select'][P]>>  : never
  } 
    : Tugas
  : Tugas


  type TugasCountArgs = Merge<
    Omit<TugasFindManyArgs, 'select' | 'include'> & {
      select?: TugasCountAggregateInputType | true
    }
  >

  export interface TugasDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Tugas that matches the filter.
     * @param {TugasFindUniqueArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TugasFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TugasFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tugas'> extends True ? CheckSelect<T, Prisma__TugasClient<Tugas>, Prisma__TugasClient<TugasGetPayload<T>>> : CheckSelect<T, Prisma__TugasClient<Tugas | null >, Prisma__TugasClient<TugasGetPayload<T> | null >>

    /**
     * Find the first Tugas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasFindFirstArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TugasFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TugasFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tugas'> extends True ? CheckSelect<T, Prisma__TugasClient<Tugas>, Prisma__TugasClient<TugasGetPayload<T>>> : CheckSelect<T, Prisma__TugasClient<Tugas | null >, Prisma__TugasClient<TugasGetPayload<T> | null >>

    /**
     * Find zero or more Tugases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tugases
     * const tugases = await prisma.tugas.findMany()
     * 
     * // Get first 10 Tugases
     * const tugases = await prisma.tugas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tugasWithIdOnly = await prisma.tugas.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TugasFindManyArgs>(
      args?: SelectSubset<T, TugasFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Tugas>>, PrismaPromise<Array<TugasGetPayload<T>>>>

    /**
     * Create a Tugas.
     * @param {TugasCreateArgs} args - Arguments to create a Tugas.
     * @example
     * // Create one Tugas
     * const Tugas = await prisma.tugas.create({
     *   data: {
     *     // ... data to create a Tugas
     *   }
     * })
     * 
    **/
    create<T extends TugasCreateArgs>(
      args: SelectSubset<T, TugasCreateArgs>
    ): CheckSelect<T, Prisma__TugasClient<Tugas>, Prisma__TugasClient<TugasGetPayload<T>>>

    /**
     * Create many Tugases.
     *     @param {TugasCreateManyArgs} args - Arguments to create many Tugases.
     *     @example
     *     // Create many Tugases
     *     const tugas = await prisma.tugas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TugasCreateManyArgs>(
      args?: SelectSubset<T, TugasCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Tugas.
     * @param {TugasDeleteArgs} args - Arguments to delete one Tugas.
     * @example
     * // Delete one Tugas
     * const Tugas = await prisma.tugas.delete({
     *   where: {
     *     // ... filter to delete one Tugas
     *   }
     * })
     * 
    **/
    delete<T extends TugasDeleteArgs>(
      args: SelectSubset<T, TugasDeleteArgs>
    ): CheckSelect<T, Prisma__TugasClient<Tugas>, Prisma__TugasClient<TugasGetPayload<T>>>

    /**
     * Update one Tugas.
     * @param {TugasUpdateArgs} args - Arguments to update one Tugas.
     * @example
     * // Update one Tugas
     * const tugas = await prisma.tugas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TugasUpdateArgs>(
      args: SelectSubset<T, TugasUpdateArgs>
    ): CheckSelect<T, Prisma__TugasClient<Tugas>, Prisma__TugasClient<TugasGetPayload<T>>>

    /**
     * Delete zero or more Tugases.
     * @param {TugasDeleteManyArgs} args - Arguments to filter Tugases to delete.
     * @example
     * // Delete a few Tugases
     * const { count } = await prisma.tugas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TugasDeleteManyArgs>(
      args?: SelectSubset<T, TugasDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tugases
     * const tugas = await prisma.tugas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TugasUpdateManyArgs>(
      args: SelectSubset<T, TugasUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Tugas.
     * @param {TugasUpsertArgs} args - Arguments to update or create a Tugas.
     * @example
     * // Update or create a Tugas
     * const tugas = await prisma.tugas.upsert({
     *   create: {
     *     // ... data to create a Tugas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tugas we want to update
     *   }
     * })
    **/
    upsert<T extends TugasUpsertArgs>(
      args: SelectSubset<T, TugasUpsertArgs>
    ): CheckSelect<T, Prisma__TugasClient<Tugas>, Prisma__TugasClient<TugasGetPayload<T>>>

    /**
     * Count the number of Tugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasCountArgs} args - Arguments to filter Tugases to count.
     * @example
     * // Count the number of Tugases
     * const count = await prisma.tugas.count({
     *   where: {
     *     // ... the filter for the Tugases we want to count
     *   }
     * })
    **/
    count<T extends TugasCountArgs>(
      args?: Subset<T, TugasCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TugasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TugasAggregateArgs>(args: Subset<T, TugasAggregateArgs>): PrismaPromise<GetTugasAggregateType<T>>

    /**
     * Group by Tugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasGroupByArgs} args - Group by arguments.
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
      T extends TugasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TugasGroupByArgs['orderBy'] }
        : { orderBy?: TugasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, TugasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTugasGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tugas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TugasClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    SubmisiTugas<T extends SubmisiTugasFindManyArgs = {}>(args?: Subset<T, SubmisiTugasFindManyArgs>): CheckSelect<T, PrismaPromise<Array<SubmisiTugas>>, PrismaPromise<Array<SubmisiTugasGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Tugas findUnique
   */
  export type TugasFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Tugas
     * 
    **/
    select?: TugasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TugasInclude | null
    /**
     * Throw an Error if a Tugas can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tugas to fetch.
     * 
    **/
    where: TugasWhereUniqueInput
  }


  /**
   * Tugas findFirst
   */
  export type TugasFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Tugas
     * 
    **/
    select?: TugasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TugasInclude | null
    /**
     * Throw an Error if a Tugas can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Tugas to fetch.
     * 
    **/
    where?: TugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tugases to fetch.
     * 
    **/
    orderBy?: Enumerable<TugasOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tugases.
     * 
    **/
    cursor?: TugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tugases from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tugases.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tugases.
     * 
    **/
    distinct?: Enumerable<TugasScalarFieldEnum>
  }


  /**
   * Tugas findMany
   */
  export type TugasFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tugas
     * 
    **/
    select?: TugasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TugasInclude | null
    /**
     * Filter, which Tugases to fetch.
     * 
    **/
    where?: TugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tugases to fetch.
     * 
    **/
    orderBy?: Enumerable<TugasOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tugases.
     * 
    **/
    cursor?: TugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tugases from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tugases.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TugasScalarFieldEnum>
  }


  /**
   * Tugas create
   */
  export type TugasCreateArgs = {
    /**
     * Select specific fields to fetch from the Tugas
     * 
    **/
    select?: TugasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TugasInclude | null
    /**
     * The data needed to create a Tugas.
     * 
    **/
    data: XOR<TugasCreateInput, TugasUncheckedCreateInput>
  }


  /**
   * Tugas createMany
   */
  export type TugasCreateManyArgs = {
    data: Enumerable<TugasCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Tugas update
   */
  export type TugasUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tugas
     * 
    **/
    select?: TugasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TugasInclude | null
    /**
     * The data needed to update a Tugas.
     * 
    **/
    data: XOR<TugasUpdateInput, TugasUncheckedUpdateInput>
    /**
     * Choose, which Tugas to update.
     * 
    **/
    where: TugasWhereUniqueInput
  }


  /**
   * Tugas updateMany
   */
  export type TugasUpdateManyArgs = {
    data: XOR<TugasUpdateManyMutationInput, TugasUncheckedUpdateManyInput>
    where?: TugasWhereInput
  }


  /**
   * Tugas upsert
   */
  export type TugasUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tugas
     * 
    **/
    select?: TugasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TugasInclude | null
    /**
     * The filter to search for the Tugas to update in case it exists.
     * 
    **/
    where: TugasWhereUniqueInput
    /**
     * In case the Tugas found by the `where` argument doesn't exist, create a new Tugas with this data.
     * 
    **/
    create: XOR<TugasCreateInput, TugasUncheckedCreateInput>
    /**
     * In case the Tugas was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<TugasUpdateInput, TugasUncheckedUpdateInput>
  }


  /**
   * Tugas delete
   */
  export type TugasDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tugas
     * 
    **/
    select?: TugasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TugasInclude | null
    /**
     * Filter which Tugas to delete.
     * 
    **/
    where: TugasWhereUniqueInput
  }


  /**
   * Tugas deleteMany
   */
  export type TugasDeleteManyArgs = {
    where?: TugasWhereInput
  }


  /**
   * Tugas without action
   */
  export type TugasArgs = {
    /**
     * Select specific fields to fetch from the Tugas
     * 
    **/
    select?: TugasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: TugasInclude | null
  }



  /**
   * Model Users
   */


  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
    max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
    kelompok: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
    kelompok: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    nama: string | null
    nim: string | null
    email: string | null
    kelompok: number | null
    hashedPassword: string | null
    salt: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    nim: string | null
    email: string | null
    kelompok: number | null
    hashedPassword: string | null
    salt: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    nama: number
    nim: number
    email: number
    kelompok: number
    hashedPassword: number
    salt: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
    kelompok?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
    kelompok?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    nama?: true
    nim?: true
    email?: true
    kelompok?: true
    hashedPassword?: true
    salt?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    nama?: true
    nim?: true
    email?: true
    kelompok?: true
    hashedPassword?: true
    salt?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    nama?: true
    nim?: true
    email?: true
    kelompok?: true
    hashedPassword?: true
    salt?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsersAggregateArgs = {
    /**
     * Filter which Users to aggregate.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }


    
    
  export type UsersGroupByArgs = {
    where?: UsersWhereInput
    orderBy?: Enumerable<UsersOrderByInput>
    by: Array<UsersScalarFieldEnum>
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }


  export type UsersGroupByOutputType = {
    id: number
    nama: string | null
    nim: string | null
    email: string | null
    kelompok: number | null
    hashedPassword: string | null
    salt: string | null
    role: string | null
    createdAt: Date
    updatedAt: Date
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Promise<
    Array<
      PickArray<UsersGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], UsersGroupByOutputType[P]> 
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      > 
    >


  export type UsersSelect = {
    id?: boolean
    nama?: boolean
    nim?: boolean
    email?: boolean
    kelompok?: boolean
    hashedPassword?: boolean
    salt?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    PresensiPeserta?: boolean | PresensiPesertaFindManyArgs
    SubmisiTugas?: boolean | SubmisiTugasFindManyArgs
  }

  export type UsersInclude = {
    PresensiPeserta?: boolean | PresensiPesertaFindManyArgs
    SubmisiTugas?: boolean | SubmisiTugasFindManyArgs
  }

  export type UsersGetPayload<
    S extends boolean | null | undefined | UsersArgs,
    U = keyof S
      > = S extends true
        ? Users
    : S extends undefined
    ? never
    : S extends UsersArgs | UsersFindManyArgs
    ?'include' extends U
    ? Users  & {
    [P in TrueKeys<S['include']>]: 
          P extends 'PresensiPeserta'
        ? Array < PresensiPesertaGetPayload<S['include'][P]>>  :
        P extends 'SubmisiTugas'
        ? Array < SubmisiTugasGetPayload<S['include'][P]>>  : never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof Users ?Users [P]
  : 
          P extends 'PresensiPeserta'
        ? Array < PresensiPesertaGetPayload<S['select'][P]>>  :
        P extends 'SubmisiTugas'
        ? Array < SubmisiTugasGetPayload<S['select'][P]>>  : never
  } 
    : Users
  : Users


  type UsersCountArgs = Merge<
    Omit<UsersFindManyArgs, 'select' | 'include'> & {
      select?: UsersCountAggregateInputType | true
    }
  >

  export interface UsersDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsersFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UsersFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Users'> extends True ? CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>> : CheckSelect<T, Prisma__UsersClient<Users | null >, Prisma__UsersClient<UsersGetPayload<T> | null >>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsersFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UsersFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Users'> extends True ? CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>> : CheckSelect<T, Prisma__UsersClient<Users | null >, Prisma__UsersClient<UsersGetPayload<T> | null >>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsersFindManyArgs>(
      args?: SelectSubset<T, UsersFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<Users>>, PrismaPromise<Array<UsersGetPayload<T>>>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
    **/
    create<T extends UsersCreateArgs>(
      args: SelectSubset<T, UsersCreateArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Create many Users.
     *     @param {UsersCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const users = await prisma.users.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsersCreateManyArgs>(
      args?: SelectSubset<T, UsersCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
    **/
    delete<T extends UsersDeleteArgs>(
      args: SelectSubset<T, UsersDeleteArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsersUpdateArgs>(
      args: SelectSubset<T, UsersUpdateArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsersDeleteManyArgs>(
      args?: SelectSubset<T, UsersDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsersUpdateManyArgs>(
      args: SelectSubset<T, UsersUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
    **/
    upsert<T extends UsersUpsertArgs>(
      args: SelectSubset<T, UsersUpsertArgs>
    ): CheckSelect<T, Prisma__UsersClient<Users>, Prisma__UsersClient<UsersGetPayload<T>>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UsersClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    PresensiPeserta<T extends PresensiPesertaFindManyArgs = {}>(args?: Subset<T, PresensiPesertaFindManyArgs>): CheckSelect<T, PrismaPromise<Array<PresensiPeserta>>, PrismaPromise<Array<PresensiPesertaGetPayload<T>>>>;

    SubmisiTugas<T extends SubmisiTugasFindManyArgs = {}>(args?: Subset<T, SubmisiTugasFindManyArgs>): CheckSelect<T, PrismaPromise<Array<SubmisiTugas>>, PrismaPromise<Array<SubmisiTugasGetPayload<T>>>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Throw an Error if a Users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Throw an Error if a Users can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     * 
    **/
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users findMany
   */
  export type UsersFindManyArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Filter, which Users to fetch.
     * 
    **/
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     * 
    **/
    orderBy?: Enumerable<UsersOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     * 
    **/
    cursor?: UsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     * 
    **/
    skip?: number
    distinct?: Enumerable<UsersScalarFieldEnum>
  }


  /**
   * Users create
   */
  export type UsersCreateArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * The data needed to create a Users.
     * 
    **/
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }


  /**
   * Users createMany
   */
  export type UsersCreateManyArgs = {
    data: Enumerable<UsersCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Users update
   */
  export type UsersUpdateArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * The data needed to update a Users.
     * 
    **/
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs = {
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    where?: UsersWhereInput
  }


  /**
   * Users upsert
   */
  export type UsersUpsertArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * The filter to search for the Users to update in case it exists.
     * 
    **/
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     * 
    **/
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }


  /**
   * Users delete
   */
  export type UsersDeleteArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
    /**
     * Filter which Users to delete.
     * 
    **/
    where: UsersWhereUniqueInput
  }


  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs = {
    where?: UsersWhereInput
  }


  /**
   * Users without action
   */
  export type UsersArgs = {
    /**
     * Select specific fields to fetch from the Users
     * 
    **/
    select?: UsersSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: UsersInclude | null
  }



  /**
   * Model webinars
   */


  export type AggregateWebinars = {
    _count: WebinarsCountAggregateOutputType | null
    count: WebinarsCountAggregateOutputType | null
    _avg: WebinarsAvgAggregateOutputType | null
    avg: WebinarsAvgAggregateOutputType | null
    _sum: WebinarsSumAggregateOutputType | null
    sum: WebinarsSumAggregateOutputType | null
    _min: WebinarsMinAggregateOutputType | null
    min: WebinarsMinAggregateOutputType | null
    _max: WebinarsMaxAggregateOutputType | null
    max: WebinarsMaxAggregateOutputType | null
  }

  export type WebinarsAvgAggregateOutputType = {
    id: number | null
  }

  export type WebinarsSumAggregateOutputType = {
    id: number | null
  }

  export type WebinarsMinAggregateOutputType = {
    id: number | null
    ytid: string | null
    judul: string | null
    deskripsi: string | null
    start: Date | null
    end: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebinarsMaxAggregateOutputType = {
    id: number | null
    ytid: string | null
    judul: string | null
    deskripsi: string | null
    start: Date | null
    end: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebinarsCountAggregateOutputType = {
    id: number
    ytid: number
    judul: number
    deskripsi: number
    start: number
    end: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WebinarsAvgAggregateInputType = {
    id?: true
  }

  export type WebinarsSumAggregateInputType = {
    id?: true
  }

  export type WebinarsMinAggregateInputType = {
    id?: true
    ytid?: true
    judul?: true
    deskripsi?: true
    start?: true
    end?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebinarsMaxAggregateInputType = {
    id?: true
    ytid?: true
    judul?: true
    deskripsi?: true
    start?: true
    end?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebinarsCountAggregateInputType = {
    id?: true
    ytid?: true
    judul?: true
    deskripsi?: true
    start?: true
    end?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WebinarsAggregateArgs = {
    /**
     * Filter which webinars to aggregate.
     * 
    **/
    where?: webinarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webinars to fetch.
     * 
    **/
    orderBy?: Enumerable<webinarsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: webinarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webinars from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webinars.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned webinars
    **/
    _count?: true | WebinarsCountAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_count`
    **/
    count?: true | WebinarsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebinarsAvgAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_avg`
    **/
    avg?: WebinarsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebinarsSumAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_sum`
    **/
    sum?: WebinarsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebinarsMinAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_min`
    **/
    min?: WebinarsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebinarsMaxAggregateInputType
    /**
     * @deprecated since 2.23.0 please use `_max`
    **/
    max?: WebinarsMaxAggregateInputType
  }

  export type GetWebinarsAggregateType<T extends WebinarsAggregateArgs> = {
        [P in keyof T & keyof AggregateWebinars]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebinars[P]>
      : GetScalarType<T[P], AggregateWebinars[P]>
  }


    
    
  export type WebinarsGroupByArgs = {
    where?: webinarsWhereInput
    orderBy?: Enumerable<webinarsOrderByInput>
    by: Array<WebinarsScalarFieldEnum>
    having?: webinarsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebinarsCountAggregateInputType | true
    _avg?: WebinarsAvgAggregateInputType
    _sum?: WebinarsSumAggregateInputType
    _min?: WebinarsMinAggregateInputType
    _max?: WebinarsMaxAggregateInputType
  }


  export type WebinarsGroupByOutputType = {
    id: number
    ytid: string | null
    judul: string | null
    deskripsi: string | null
    start: Date | null
    end: Date | null
    createdAt: Date
    updatedAt: Date
    _count: WebinarsCountAggregateOutputType | null
    _avg: WebinarsAvgAggregateOutputType | null
    _sum: WebinarsSumAggregateOutputType | null
    _min: WebinarsMinAggregateOutputType | null
    _max: WebinarsMaxAggregateOutputType | null
  }

  type GetWebinarsGroupByPayload<T extends WebinarsGroupByArgs> = Promise<
    Array<
      PickArray<WebinarsGroupByOutputType, T['by']> & 
        {
          [P in ((keyof T) & (keyof WebinarsGroupByOutputType))]: P extends '_count' 
            ? T[P] extends boolean 
              ? number 
              : GetScalarType<T[P], WebinarsGroupByOutputType[P]> 
            : GetScalarType<T[P], WebinarsGroupByOutputType[P]>
        }
      > 
    >


  export type webinarsSelect = {
    id?: boolean
    ytid?: boolean
    judul?: boolean
    deskripsi?: boolean
    start?: boolean
    end?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type webinarsGetPayload<
    S extends boolean | null | undefined | webinarsArgs,
    U = keyof S
      > = S extends true
        ? webinars
    : S extends undefined
    ? never
    : S extends webinarsArgs | webinarsFindManyArgs
    ?'include' extends U
    ? webinars 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]: P extends keyof webinars ?webinars [P]
  : 
     never
  } 
    : webinars
  : webinars


  type webinarsCountArgs = Merge<
    Omit<webinarsFindManyArgs, 'select' | 'include'> & {
      select?: WebinarsCountAggregateInputType | true
    }
  >

  export interface webinarsDelegate<GlobalRejectSettings> {
    /**
     * Find zero or one Webinars that matches the filter.
     * @param {webinarsFindUniqueArgs} args - Arguments to find a Webinars
     * @example
     * // Get one Webinars
     * const webinars = await prisma.webinars.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends webinarsFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, webinarsFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'webinars'> extends True ? CheckSelect<T, Prisma__webinarsClient<webinars>, Prisma__webinarsClient<webinarsGetPayload<T>>> : CheckSelect<T, Prisma__webinarsClient<webinars | null >, Prisma__webinarsClient<webinarsGetPayload<T> | null >>

    /**
     * Find the first Webinars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webinarsFindFirstArgs} args - Arguments to find a Webinars
     * @example
     * // Get one Webinars
     * const webinars = await prisma.webinars.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends webinarsFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, webinarsFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'webinars'> extends True ? CheckSelect<T, Prisma__webinarsClient<webinars>, Prisma__webinarsClient<webinarsGetPayload<T>>> : CheckSelect<T, Prisma__webinarsClient<webinars | null >, Prisma__webinarsClient<webinarsGetPayload<T> | null >>

    /**
     * Find zero or more Webinars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webinarsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Webinars
     * const webinars = await prisma.webinars.findMany()
     * 
     * // Get first 10 Webinars
     * const webinars = await prisma.webinars.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webinarsWithIdOnly = await prisma.webinars.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends webinarsFindManyArgs>(
      args?: SelectSubset<T, webinarsFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<webinars>>, PrismaPromise<Array<webinarsGetPayload<T>>>>

    /**
     * Create a Webinars.
     * @param {webinarsCreateArgs} args - Arguments to create a Webinars.
     * @example
     * // Create one Webinars
     * const Webinars = await prisma.webinars.create({
     *   data: {
     *     // ... data to create a Webinars
     *   }
     * })
     * 
    **/
    create<T extends webinarsCreateArgs>(
      args: SelectSubset<T, webinarsCreateArgs>
    ): CheckSelect<T, Prisma__webinarsClient<webinars>, Prisma__webinarsClient<webinarsGetPayload<T>>>

    /**
     * Create many Webinars.
     *     @param {webinarsCreateManyArgs} args - Arguments to create many Webinars.
     *     @example
     *     // Create many Webinars
     *     const webinars = await prisma.webinars.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends webinarsCreateManyArgs>(
      args?: SelectSubset<T, webinarsCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Webinars.
     * @param {webinarsDeleteArgs} args - Arguments to delete one Webinars.
     * @example
     * // Delete one Webinars
     * const Webinars = await prisma.webinars.delete({
     *   where: {
     *     // ... filter to delete one Webinars
     *   }
     * })
     * 
    **/
    delete<T extends webinarsDeleteArgs>(
      args: SelectSubset<T, webinarsDeleteArgs>
    ): CheckSelect<T, Prisma__webinarsClient<webinars>, Prisma__webinarsClient<webinarsGetPayload<T>>>

    /**
     * Update one Webinars.
     * @param {webinarsUpdateArgs} args - Arguments to update one Webinars.
     * @example
     * // Update one Webinars
     * const webinars = await prisma.webinars.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends webinarsUpdateArgs>(
      args: SelectSubset<T, webinarsUpdateArgs>
    ): CheckSelect<T, Prisma__webinarsClient<webinars>, Prisma__webinarsClient<webinarsGetPayload<T>>>

    /**
     * Delete zero or more Webinars.
     * @param {webinarsDeleteManyArgs} args - Arguments to filter Webinars to delete.
     * @example
     * // Delete a few Webinars
     * const { count } = await prisma.webinars.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends webinarsDeleteManyArgs>(
      args?: SelectSubset<T, webinarsDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webinars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webinarsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Webinars
     * const webinars = await prisma.webinars.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends webinarsUpdateManyArgs>(
      args: SelectSubset<T, webinarsUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Webinars.
     * @param {webinarsUpsertArgs} args - Arguments to update or create a Webinars.
     * @example
     * // Update or create a Webinars
     * const webinars = await prisma.webinars.upsert({
     *   create: {
     *     // ... data to create a Webinars
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Webinars we want to update
     *   }
     * })
    **/
    upsert<T extends webinarsUpsertArgs>(
      args: SelectSubset<T, webinarsUpsertArgs>
    ): CheckSelect<T, Prisma__webinarsClient<webinars>, Prisma__webinarsClient<webinarsGetPayload<T>>>

    /**
     * Count the number of Webinars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webinarsCountArgs} args - Arguments to filter Webinars to count.
     * @example
     * // Count the number of Webinars
     * const count = await prisma.webinars.count({
     *   where: {
     *     // ... the filter for the Webinars we want to count
     *   }
     * })
    **/
    count<T extends webinarsCountArgs>(
      args?: Subset<T, webinarsCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebinarsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Webinars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebinarsAggregateArgs>(args: Subset<T, WebinarsAggregateArgs>): PrismaPromise<GetWebinarsAggregateType<T>>

    /**
     * Group by Webinars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebinarsGroupByArgs} args - Group by arguments.
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
      T extends WebinarsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebinarsGroupByArgs['orderBy'] }
        : { orderBy?: WebinarsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, WebinarsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebinarsGroupByPayload<T> : Promise<InputErrors>
  }

  /**
   * The delegate class that acts as a "Promise-like" for webinars.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in 
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__webinarsClient<T> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }

  // Custom InputTypes

  /**
   * webinars findUnique
   */
  export type webinarsFindUniqueArgs = {
    /**
     * Select specific fields to fetch from the webinars
     * 
    **/
    select?: webinarsSelect | null
    /**
     * Throw an Error if a webinars can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which webinars to fetch.
     * 
    **/
    where: webinarsWhereUniqueInput
  }


  /**
   * webinars findFirst
   */
  export type webinarsFindFirstArgs = {
    /**
     * Select specific fields to fetch from the webinars
     * 
    **/
    select?: webinarsSelect | null
    /**
     * Throw an Error if a webinars can't be found
     * 
    **/
    rejectOnNotFound?: RejectOnNotFound
    /**
     * Filter, which webinars to fetch.
     * 
    **/
    where?: webinarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webinars to fetch.
     * 
    **/
    orderBy?: Enumerable<webinarsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for webinars.
     * 
    **/
    cursor?: webinarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webinars from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webinars.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of webinars.
     * 
    **/
    distinct?: Enumerable<WebinarsScalarFieldEnum>
  }


  /**
   * webinars findMany
   */
  export type webinarsFindManyArgs = {
    /**
     * Select specific fields to fetch from the webinars
     * 
    **/
    select?: webinarsSelect | null
    /**
     * Filter, which webinars to fetch.
     * 
    **/
    where?: webinarsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webinars to fetch.
     * 
    **/
    orderBy?: Enumerable<webinarsOrderByInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing webinars.
     * 
    **/
    cursor?: webinarsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webinars from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webinars.
     * 
    **/
    skip?: number
    distinct?: Enumerable<WebinarsScalarFieldEnum>
  }


  /**
   * webinars create
   */
  export type webinarsCreateArgs = {
    /**
     * Select specific fields to fetch from the webinars
     * 
    **/
    select?: webinarsSelect | null
    /**
     * The data needed to create a webinars.
     * 
    **/
    data: XOR<webinarsCreateInput, webinarsUncheckedCreateInput>
  }


  /**
   * webinars createMany
   */
  export type webinarsCreateManyArgs = {
    data: Enumerable<webinarsCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * webinars update
   */
  export type webinarsUpdateArgs = {
    /**
     * Select specific fields to fetch from the webinars
     * 
    **/
    select?: webinarsSelect | null
    /**
     * The data needed to update a webinars.
     * 
    **/
    data: XOR<webinarsUpdateInput, webinarsUncheckedUpdateInput>
    /**
     * Choose, which webinars to update.
     * 
    **/
    where: webinarsWhereUniqueInput
  }


  /**
   * webinars updateMany
   */
  export type webinarsUpdateManyArgs = {
    data: XOR<webinarsUpdateManyMutationInput, webinarsUncheckedUpdateManyInput>
    where?: webinarsWhereInput
  }


  /**
   * webinars upsert
   */
  export type webinarsUpsertArgs = {
    /**
     * Select specific fields to fetch from the webinars
     * 
    **/
    select?: webinarsSelect | null
    /**
     * The filter to search for the webinars to update in case it exists.
     * 
    **/
    where: webinarsWhereUniqueInput
    /**
     * In case the webinars found by the `where` argument doesn't exist, create a new webinars with this data.
     * 
    **/
    create: XOR<webinarsCreateInput, webinarsUncheckedCreateInput>
    /**
     * In case the webinars was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<webinarsUpdateInput, webinarsUncheckedUpdateInput>
  }


  /**
   * webinars delete
   */
  export type webinarsDeleteArgs = {
    /**
     * Select specific fields to fetch from the webinars
     * 
    **/
    select?: webinarsSelect | null
    /**
     * Filter which webinars to delete.
     * 
    **/
    where: webinarsWhereUniqueInput
  }


  /**
   * webinars deleteMany
   */
  export type webinarsDeleteManyArgs = {
    where?: webinarsWhereInput
  }


  /**
   * webinars without action
   */
  export type webinarsArgs = {
    /**
     * Select specific fields to fetch from the webinars
     * 
    **/
    select?: webinarsSelect | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const DetailMentoringsScalarFieldEnum: {
    id: 'id',
    day: 'day',
    judul: 'judul',
    deskripsi: 'deskripsi',
    start: 'start',
    end: 'end',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DetailMentoringsScalarFieldEnum = (typeof DetailMentoringsScalarFieldEnum)[keyof typeof DetailMentoringsScalarFieldEnum]


  export const FilesScalarFieldEnum: {
    id: 'id',
    materi: 'materi',
    name: 'name',
    path: 'path',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FilesScalarFieldEnum = (typeof FilesScalarFieldEnum)[keyof typeof FilesScalarFieldEnum]


  export const JadwalPresensisScalarFieldEnum: {
    id: 'id',
    judul: 'judul',
    start: 'start',
    end: 'end',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type JadwalPresensisScalarFieldEnum = (typeof JadwalPresensisScalarFieldEnum)[keyof typeof JadwalPresensisScalarFieldEnum]


  export const MaterisScalarFieldEnum: {
    id: 'id',
    bagian: 'bagian',
    judul: 'judul',
    deskripsi: 'deskripsi',
    embed: 'embed',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MaterisScalarFieldEnum = (typeof MaterisScalarFieldEnum)[keyof typeof MaterisScalarFieldEnum]


  export const MentoringsScalarFieldEnum: {
    id: 'id',
    kelompok: 'kelompok',
    link: 'link',
    detail: 'detail',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MentoringsScalarFieldEnum = (typeof MentoringsScalarFieldEnum)[keyof typeof MentoringsScalarFieldEnum]


  export const PresensiPesertaScalarFieldEnum: {
    id: 'id',
    hadir: 'hadir',
    user: 'user',
    jadwal: 'jadwal',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PresensiPesertaScalarFieldEnum = (typeof PresensiPesertaScalarFieldEnum)[keyof typeof PresensiPesertaScalarFieldEnum]


  export const SequelizeMetaScalarFieldEnum: {
    name: 'name'
  };

  export type SequelizeMetaScalarFieldEnum = (typeof SequelizeMetaScalarFieldEnum)[keyof typeof SequelizeMetaScalarFieldEnum]


  export const SubmisiTugasScalarFieldEnum: {
    id: 'id',
    pemilik: 'pemilik',
    tugas: 'tugas',
    nama: 'nama',
    path: 'path',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SubmisiTugasScalarFieldEnum = (typeof SubmisiTugasScalarFieldEnum)[keyof typeof SubmisiTugasScalarFieldEnum]


  export const TugasScalarFieldEnum: {
    id: 'id',
    bagian: 'bagian',
    judul: 'judul',
    deskripsi: 'deskripsi',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deadline: 'deadline'
  };

  export type TugasScalarFieldEnum = (typeof TugasScalarFieldEnum)[keyof typeof TugasScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    nim: 'nim',
    email: 'email',
    kelompok: 'kelompok',
    hashedPassword: 'hashedPassword',
    salt: 'salt',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const WebinarsScalarFieldEnum: {
    id: 'id',
    ytid: 'ytid',
    judul: 'judul',
    deskripsi: 'deskripsi',
    start: 'start',
    end: 'end',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WebinarsScalarFieldEnum = (typeof WebinarsScalarFieldEnum)[keyof typeof WebinarsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Deep Input Types
   */


  export type DetailMentoringsWhereInput = {
    AND?: Enumerable<DetailMentoringsWhereInput>
    OR?: Enumerable<DetailMentoringsWhereInput>
    NOT?: Enumerable<DetailMentoringsWhereInput>
    id?: IntFilter | number
    day?: IntNullableFilter | number | null
    judul?: StringNullableFilter | string | null
    deskripsi?: StringNullableFilter | string | null
    start?: DateTimeNullableFilter | Date | string | null
    end?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Mentorings?: MentoringsListRelationFilter
  }

  export type DetailMentoringsOrderByInput = {
    id?: SortOrder
    day?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DetailMentoringsWhereUniqueInput = {
    id?: number
  }

  export type DetailMentoringsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DetailMentoringsScalarWhereWithAggregatesInput>
    OR?: Enumerable<DetailMentoringsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DetailMentoringsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    day?: IntNullableWithAggregatesFilter | number | null
    judul?: StringNullableWithAggregatesFilter | string | null
    deskripsi?: StringNullableWithAggregatesFilter | string | null
    start?: DateTimeNullableWithAggregatesFilter | Date | string | null
    end?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FilesWhereInput = {
    AND?: Enumerable<FilesWhereInput>
    OR?: Enumerable<FilesWhereInput>
    NOT?: Enumerable<FilesWhereInput>
    id?: IntFilter | number
    materi?: IntNullableFilter | number | null
    name?: StringNullableFilter | string | null
    path?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Materis?: XOR<MaterisRelationFilter, MaterisWhereInput> | null
  }

  export type FilesOrderByInput = {
    id?: SortOrder
    materi?: SortOrder
    name?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FilesWhereUniqueInput = {
    id?: number
  }

  export type FilesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FilesScalarWhereWithAggregatesInput>
    OR?: Enumerable<FilesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FilesScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    materi?: IntNullableWithAggregatesFilter | number | null
    name?: StringNullableWithAggregatesFilter | string | null
    path?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type JadwalPresensisWhereInput = {
    AND?: Enumerable<JadwalPresensisWhereInput>
    OR?: Enumerable<JadwalPresensisWhereInput>
    NOT?: Enumerable<JadwalPresensisWhereInput>
    id?: IntFilter | number
    judul?: StringNullableFilter | string | null
    start?: DateTimeNullableFilter | Date | string | null
    end?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    PresensiPeserta?: PresensiPesertaListRelationFilter
  }

  export type JadwalPresensisOrderByInput = {
    id?: SortOrder
    judul?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type JadwalPresensisWhereUniqueInput = {
    id?: number
  }

  export type JadwalPresensisScalarWhereWithAggregatesInput = {
    AND?: Enumerable<JadwalPresensisScalarWhereWithAggregatesInput>
    OR?: Enumerable<JadwalPresensisScalarWhereWithAggregatesInput>
    NOT?: Enumerable<JadwalPresensisScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    judul?: StringNullableWithAggregatesFilter | string | null
    start?: DateTimeNullableWithAggregatesFilter | Date | string | null
    end?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type MaterisWhereInput = {
    AND?: Enumerable<MaterisWhereInput>
    OR?: Enumerable<MaterisWhereInput>
    NOT?: Enumerable<MaterisWhereInput>
    id?: IntFilter | number
    bagian?: StringNullableFilter | string | null
    judul?: StringNullableFilter | string | null
    deskripsi?: StringNullableFilter | string | null
    embed?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Files?: FilesListRelationFilter
  }

  export type MaterisOrderByInput = {
    id?: SortOrder
    bagian?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    embed?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MaterisWhereUniqueInput = {
    id?: number
  }

  export type MaterisScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MaterisScalarWhereWithAggregatesInput>
    OR?: Enumerable<MaterisScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MaterisScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    bagian?: StringNullableWithAggregatesFilter | string | null
    judul?: StringNullableWithAggregatesFilter | string | null
    deskripsi?: StringNullableWithAggregatesFilter | string | null
    embed?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type MentoringsWhereInput = {
    AND?: Enumerable<MentoringsWhereInput>
    OR?: Enumerable<MentoringsWhereInput>
    NOT?: Enumerable<MentoringsWhereInput>
    id?: IntFilter | number
    kelompok?: StringNullableFilter | string | null
    link?: StringNullableFilter | string | null
    detail?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    DetailMentorings?: XOR<DetailMentoringsRelationFilter, DetailMentoringsWhereInput> | null
  }

  export type MentoringsOrderByInput = {
    id?: SortOrder
    kelompok?: SortOrder
    link?: SortOrder
    detail?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MentoringsWhereUniqueInput = {
    id?: number
  }

  export type MentoringsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<MentoringsScalarWhereWithAggregatesInput>
    OR?: Enumerable<MentoringsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<MentoringsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    kelompok?: StringNullableWithAggregatesFilter | string | null
    link?: StringNullableWithAggregatesFilter | string | null
    detail?: IntNullableWithAggregatesFilter | number | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type PresensiPesertaWhereInput = {
    AND?: Enumerable<PresensiPesertaWhereInput>
    OR?: Enumerable<PresensiPesertaWhereInput>
    NOT?: Enumerable<PresensiPesertaWhereInput>
    id?: IntFilter | number
    hadir?: BoolNullableFilter | boolean | null
    user?: IntNullableFilter | number | null
    jadwal?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    JadwalPresensis?: XOR<JadwalPresensisRelationFilter, JadwalPresensisWhereInput> | null
    Users?: XOR<UsersRelationFilter, UsersWhereInput> | null
  }

  export type PresensiPesertaOrderByInput = {
    id?: SortOrder
    hadir?: SortOrder
    user?: SortOrder
    jadwal?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PresensiPesertaWhereUniqueInput = {
    id?: number
  }

  export type PresensiPesertaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PresensiPesertaScalarWhereWithAggregatesInput>
    OR?: Enumerable<PresensiPesertaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PresensiPesertaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    hadir?: BoolNullableWithAggregatesFilter | boolean | null
    user?: IntNullableWithAggregatesFilter | number | null
    jadwal?: IntNullableWithAggregatesFilter | number | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type SequelizeMetaWhereInput = {
    AND?: Enumerable<SequelizeMetaWhereInput>
    OR?: Enumerable<SequelizeMetaWhereInput>
    NOT?: Enumerable<SequelizeMetaWhereInput>
    name?: StringFilter | string
  }

  export type SequelizeMetaOrderByInput = {
    name?: SortOrder
  }

  export type SequelizeMetaWhereUniqueInput = {
    name?: string
  }

  export type SequelizeMetaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SequelizeMetaScalarWhereWithAggregatesInput>
    OR?: Enumerable<SequelizeMetaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SequelizeMetaScalarWhereWithAggregatesInput>
    name?: StringWithAggregatesFilter | string
  }

  export type SubmisiTugasWhereInput = {
    AND?: Enumerable<SubmisiTugasWhereInput>
    OR?: Enumerable<SubmisiTugasWhereInput>
    NOT?: Enumerable<SubmisiTugasWhereInput>
    id?: IntFilter | number
    pemilik?: IntNullableFilter | number | null
    tugas?: IntNullableFilter | number | null
    nama?: StringNullableFilter | string | null
    path?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    Users?: XOR<UsersRelationFilter, UsersWhereInput> | null
    Tugas?: XOR<TugasRelationFilter, TugasWhereInput> | null
  }

  export type SubmisiTugasOrderByInput = {
    id?: SortOrder
    pemilik?: SortOrder
    tugas?: SortOrder
    nama?: SortOrder
    path?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SubmisiTugasWhereUniqueInput = {
    id?: number
  }

  export type SubmisiTugasScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SubmisiTugasScalarWhereWithAggregatesInput>
    OR?: Enumerable<SubmisiTugasScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SubmisiTugasScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    pemilik?: IntNullableWithAggregatesFilter | number | null
    tugas?: IntNullableWithAggregatesFilter | number | null
    nama?: StringNullableWithAggregatesFilter | string | null
    path?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type TugasWhereInput = {
    AND?: Enumerable<TugasWhereInput>
    OR?: Enumerable<TugasWhereInput>
    NOT?: Enumerable<TugasWhereInput>
    id?: IntFilter | number
    bagian?: StringNullableFilter | string | null
    judul?: StringNullableFilter | string | null
    deskripsi?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    deadline?: DateTimeNullableFilter | Date | string | null
    SubmisiTugas?: SubmisiTugasListRelationFilter
  }

  export type TugasOrderByInput = {
    id?: SortOrder
    bagian?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deadline?: SortOrder
  }

  export type TugasWhereUniqueInput = {
    id?: number
  }

  export type TugasScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TugasScalarWhereWithAggregatesInput>
    OR?: Enumerable<TugasScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TugasScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    bagian?: StringNullableWithAggregatesFilter | string | null
    judul?: StringNullableWithAggregatesFilter | string | null
    deskripsi?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    deadline?: DateTimeNullableWithAggregatesFilter | Date | string | null
  }

  export type UsersWhereInput = {
    AND?: Enumerable<UsersWhereInput>
    OR?: Enumerable<UsersWhereInput>
    NOT?: Enumerable<UsersWhereInput>
    id?: IntFilter | number
    nama?: StringNullableFilter | string | null
    nim?: StringNullableFilter | string | null
    email?: StringNullableFilter | string | null
    kelompok?: IntNullableFilter | number | null
    hashedPassword?: StringNullableFilter | string | null
    salt?: StringNullableFilter | string | null
    role?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    PresensiPeserta?: PresensiPesertaListRelationFilter
    SubmisiTugas?: SubmisiTugasListRelationFilter
  }

  export type UsersOrderByInput = {
    id?: SortOrder
    nama?: SortOrder
    nim?: SortOrder
    email?: SortOrder
    kelompok?: SortOrder
    hashedPassword?: SortOrder
    salt?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsersWhereUniqueInput = {
    id?: number
    email?: string
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UsersScalarWhereWithAggregatesInput>
    OR?: Enumerable<UsersScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UsersScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    nama?: StringNullableWithAggregatesFilter | string | null
    nim?: StringNullableWithAggregatesFilter | string | null
    email?: StringNullableWithAggregatesFilter | string | null
    kelompok?: IntNullableWithAggregatesFilter | number | null
    hashedPassword?: StringNullableWithAggregatesFilter | string | null
    salt?: StringNullableWithAggregatesFilter | string | null
    role?: StringNullableWithAggregatesFilter | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type webinarsWhereInput = {
    AND?: Enumerable<webinarsWhereInput>
    OR?: Enumerable<webinarsWhereInput>
    NOT?: Enumerable<webinarsWhereInput>
    id?: IntFilter | number
    ytid?: StringNullableFilter | string | null
    judul?: StringNullableFilter | string | null
    deskripsi?: StringNullableFilter | string | null
    start?: DateTimeNullableFilter | Date | string | null
    end?: DateTimeNullableFilter | Date | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type webinarsOrderByInput = {
    id?: SortOrder
    ytid?: SortOrder
    judul?: SortOrder
    deskripsi?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type webinarsWhereUniqueInput = {
    id?: number
  }

  export type webinarsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<webinarsScalarWhereWithAggregatesInput>
    OR?: Enumerable<webinarsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<webinarsScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    ytid?: StringNullableWithAggregatesFilter | string | null
    judul?: StringNullableWithAggregatesFilter | string | null
    deskripsi?: StringNullableWithAggregatesFilter | string | null
    start?: DateTimeNullableWithAggregatesFilter | Date | string | null
    end?: DateTimeNullableWithAggregatesFilter | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type DetailMentoringsCreateInput = {
    day?: number | null
    judul?: string | null
    deskripsi?: string | null
    start?: Date | string | null
    end?: Date | string | null
    createdAt: Date | string
    updatedAt: Date | string
    Mentorings?: MentoringsCreateNestedManyWithoutDetailMentoringsInput
  }

  export type DetailMentoringsUncheckedCreateInput = {
    id?: number
    day?: number | null
    judul?: string | null
    deskripsi?: string | null
    start?: Date | string | null
    end?: Date | string | null
    createdAt: Date | string
    updatedAt: Date | string
    Mentorings?: MentoringsUncheckedCreateNestedManyWithoutDetailMentoringsInput
  }

  export type DetailMentoringsUpdateInput = {
    day?: NullableIntFieldUpdateOperationsInput | number | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Mentorings?: MentoringsUpdateManyWithoutDetailMentoringsInput
  }

  export type DetailMentoringsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: NullableIntFieldUpdateOperationsInput | number | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Mentorings?: MentoringsUncheckedUpdateManyWithoutDetailMentoringsInput
  }

  export type DetailMentoringsCreateManyInput = {
    id?: number
    day?: number | null
    judul?: string | null
    deskripsi?: string | null
    start?: Date | string | null
    end?: Date | string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type DetailMentoringsUpdateManyMutationInput = {
    day?: NullableIntFieldUpdateOperationsInput | number | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailMentoringsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: NullableIntFieldUpdateOperationsInput | number | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilesCreateInput = {
    name?: string | null
    path?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    Materis?: MaterisCreateNestedOneWithoutFilesInput
  }

  export type FilesUncheckedCreateInput = {
    id?: number
    materi?: number | null
    name?: string | null
    path?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type FilesUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Materis?: MaterisUpdateOneWithoutFilesInput
  }

  export type FilesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    materi?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilesCreateManyInput = {
    id?: number
    materi?: number | null
    name?: string | null
    path?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type FilesUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    materi?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalPresensisCreateInput = {
    judul?: string | null
    start?: Date | string | null
    end?: Date | string | null
    createdAt: Date | string
    updatedAt: Date | string
    PresensiPeserta?: PresensiPesertaCreateNestedManyWithoutJadwalPresensisInput
  }

  export type JadwalPresensisUncheckedCreateInput = {
    id?: number
    judul?: string | null
    start?: Date | string | null
    end?: Date | string | null
    createdAt: Date | string
    updatedAt: Date | string
    PresensiPeserta?: PresensiPesertaUncheckedCreateNestedManyWithoutJadwalPresensisInput
  }

  export type JadwalPresensisUpdateInput = {
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PresensiPeserta?: PresensiPesertaUpdateManyWithoutJadwalPresensisInput
  }

  export type JadwalPresensisUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PresensiPeserta?: PresensiPesertaUncheckedUpdateManyWithoutJadwalPresensisInput
  }

  export type JadwalPresensisCreateManyInput = {
    id?: number
    judul?: string | null
    start?: Date | string | null
    end?: Date | string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type JadwalPresensisUpdateManyMutationInput = {
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalPresensisUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterisCreateInput = {
    bagian?: string | null
    judul?: string | null
    deskripsi?: string | null
    embed?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    Files?: FilesCreateNestedManyWithoutMaterisInput
  }

  export type MaterisUncheckedCreateInput = {
    id?: number
    bagian?: string | null
    judul?: string | null
    deskripsi?: string | null
    embed?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    Files?: FilesUncheckedCreateNestedManyWithoutMaterisInput
  }

  export type MaterisUpdateInput = {
    bagian?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    embed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Files?: FilesUpdateManyWithoutMaterisInput
  }

  export type MaterisUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bagian?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    embed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Files?: FilesUncheckedUpdateManyWithoutMaterisInput
  }

  export type MaterisCreateManyInput = {
    id?: number
    bagian?: string | null
    judul?: string | null
    deskripsi?: string | null
    embed?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type MaterisUpdateManyMutationInput = {
    bagian?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    embed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterisUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bagian?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    embed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentoringsCreateInput = {
    kelompok?: string | null
    link?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    DetailMentorings?: DetailMentoringsCreateNestedOneWithoutMentoringsInput
  }

  export type MentoringsUncheckedCreateInput = {
    id?: number
    kelompok?: string | null
    link?: string | null
    detail?: number | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type MentoringsUpdateInput = {
    kelompok?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    DetailMentorings?: DetailMentoringsUpdateOneWithoutMentoringsInput
  }

  export type MentoringsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kelompok?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentoringsCreateManyInput = {
    id?: number
    kelompok?: string | null
    link?: string | null
    detail?: number | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type MentoringsUpdateManyMutationInput = {
    kelompok?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentoringsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kelompok?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    detail?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresensiPesertaCreateInput = {
    hadir?: boolean | null
    createdAt: Date | string
    updatedAt: Date | string
    JadwalPresensis?: JadwalPresensisCreateNestedOneWithoutPresensiPesertaInput
    Users?: UsersCreateNestedOneWithoutPresensiPesertaInput
  }

  export type PresensiPesertaUncheckedCreateInput = {
    id?: number
    hadir?: boolean | null
    user?: number | null
    jadwal?: number | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type PresensiPesertaUpdateInput = {
    hadir?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    JadwalPresensis?: JadwalPresensisUpdateOneWithoutPresensiPesertaInput
    Users?: UsersUpdateOneWithoutPresensiPesertaInput
  }

  export type PresensiPesertaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hadir?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: NullableIntFieldUpdateOperationsInput | number | null
    jadwal?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresensiPesertaCreateManyInput = {
    id?: number
    hadir?: boolean | null
    user?: number | null
    jadwal?: number | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type PresensiPesertaUpdateManyMutationInput = {
    hadir?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresensiPesertaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hadir?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: NullableIntFieldUpdateOperationsInput | number | null
    jadwal?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SequelizeMetaCreateInput = {
    name: string
  }

  export type SequelizeMetaUncheckedCreateInput = {
    name: string
  }

  export type SequelizeMetaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SequelizeMetaUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SequelizeMetaCreateManyInput = {
    name: string
  }

  export type SequelizeMetaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SequelizeMetaUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SubmisiTugasCreateInput = {
    nama?: string | null
    path?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    Users?: UsersCreateNestedOneWithoutSubmisiTugasInput
    Tugas?: TugasCreateNestedOneWithoutSubmisiTugasInput
  }

  export type SubmisiTugasUncheckedCreateInput = {
    id?: number
    pemilik?: number | null
    tugas?: number | null
    nama?: string | null
    path?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type SubmisiTugasUpdateInput = {
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutSubmisiTugasInput
    Tugas?: TugasUpdateOneWithoutSubmisiTugasInput
  }

  export type SubmisiTugasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pemilik?: NullableIntFieldUpdateOperationsInput | number | null
    tugas?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmisiTugasCreateManyInput = {
    id?: number
    pemilik?: number | null
    tugas?: number | null
    nama?: string | null
    path?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type SubmisiTugasUpdateManyMutationInput = {
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmisiTugasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pemilik?: NullableIntFieldUpdateOperationsInput | number | null
    tugas?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TugasCreateInput = {
    bagian?: string | null
    judul?: string | null
    deskripsi?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deadline?: Date | string | null
    SubmisiTugas?: SubmisiTugasCreateNestedManyWithoutTugasInput
  }

  export type TugasUncheckedCreateInput = {
    id?: number
    bagian?: string | null
    judul?: string | null
    deskripsi?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deadline?: Date | string | null
    SubmisiTugas?: SubmisiTugasUncheckedCreateNestedManyWithoutTugasInput
  }

  export type TugasUpdateInput = {
    bagian?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SubmisiTugas?: SubmisiTugasUpdateManyWithoutTugasInput
  }

  export type TugasUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    bagian?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    SubmisiTugas?: SubmisiTugasUncheckedUpdateManyWithoutTugasInput
  }

  export type TugasCreateManyInput = {
    id?: number
    bagian?: string | null
    judul?: string | null
    deskripsi?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deadline?: Date | string | null
  }

  export type TugasUpdateManyMutationInput = {
    bagian?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TugasUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    bagian?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersCreateInput = {
    nama?: string | null
    nim?: string | null
    email?: string | null
    kelompok?: number | null
    hashedPassword?: string | null
    salt?: string | null
    role?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    PresensiPeserta?: PresensiPesertaCreateNestedManyWithoutUsersInput
    SubmisiTugas?: SubmisiTugasCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: number
    nama?: string | null
    nim?: string | null
    email?: string | null
    kelompok?: number | null
    hashedPassword?: string | null
    salt?: string | null
    role?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    PresensiPeserta?: PresensiPesertaUncheckedCreateNestedManyWithoutUsersInput
    SubmisiTugas?: SubmisiTugasUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersUpdateInput = {
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    kelompok?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PresensiPeserta?: PresensiPesertaUpdateManyWithoutUsersInput
    SubmisiTugas?: SubmisiTugasUpdateManyWithoutUsersInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    kelompok?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PresensiPeserta?: PresensiPesertaUncheckedUpdateManyWithoutUsersInput
    SubmisiTugas?: SubmisiTugasUncheckedUpdateManyWithoutUsersInput
  }

  export type UsersCreateManyInput = {
    id?: number
    nama?: string | null
    nim?: string | null
    email?: string | null
    kelompok?: number | null
    hashedPassword?: string | null
    salt?: string | null
    role?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type UsersUpdateManyMutationInput = {
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    kelompok?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    kelompok?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webinarsCreateInput = {
    ytid?: string | null
    judul?: string | null
    deskripsi?: string | null
    start?: Date | string | null
    end?: Date | string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type webinarsUncheckedCreateInput = {
    id?: number
    ytid?: string | null
    judul?: string | null
    deskripsi?: string | null
    start?: Date | string | null
    end?: Date | string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type webinarsUpdateInput = {
    ytid?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webinarsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    ytid?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webinarsCreateManyInput = {
    id?: number
    ytid?: string | null
    judul?: string | null
    deskripsi?: string | null
    start?: Date | string | null
    end?: Date | string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type webinarsUpdateManyMutationInput = {
    ytid?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webinarsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    ytid?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type DateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type MentoringsListRelationFilter = {
    every?: MentoringsWhereInput
    some?: MentoringsWhereInput
    none?: MentoringsWhereInput
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntNullableFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type DateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type MaterisRelationFilter = {
    is?: MaterisWhereInput | null
    isNot?: MaterisWhereInput | null
  }

  export type PresensiPesertaListRelationFilter = {
    every?: PresensiPesertaWhereInput
    some?: PresensiPesertaWhereInput
    none?: PresensiPesertaWhereInput
  }

  export type FilesListRelationFilter = {
    every?: FilesWhereInput
    some?: FilesWhereInput
    none?: FilesWhereInput
  }

  export type DetailMentoringsRelationFilter = {
    is?: DetailMentoringsWhereInput | null
    isNot?: DetailMentoringsWhereInput | null
  }

  export type BoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type JadwalPresensisRelationFilter = {
    is?: JadwalPresensisWhereInput | null
    isNot?: JadwalPresensisWhereInput | null
  }

  export type UsersRelationFilter = {
    is?: UsersWhereInput | null
    isNot?: UsersWhereInput | null
  }

  export type BoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBoolNullableFilter
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type TugasRelationFilter = {
    is?: TugasWhereInput | null
    isNot?: TugasWhereInput | null
  }

  export type SubmisiTugasListRelationFilter = {
    every?: SubmisiTugasWhereInput
    some?: SubmisiTugasWhereInput
    none?: SubmisiTugasWhereInput
  }

  export type MentoringsCreateNestedManyWithoutDetailMentoringsInput = {
    create?: XOR<Enumerable<MentoringsCreateWithoutDetailMentoringsInput>, Enumerable<MentoringsUncheckedCreateWithoutDetailMentoringsInput>>
    connectOrCreate?: Enumerable<MentoringsCreateOrConnectWithoutDetailMentoringsInput>
    createMany?: MentoringsCreateManyDetailMentoringsInputEnvelope
    connect?: Enumerable<MentoringsWhereUniqueInput>
  }

  export type MentoringsUncheckedCreateNestedManyWithoutDetailMentoringsInput = {
    create?: XOR<Enumerable<MentoringsCreateWithoutDetailMentoringsInput>, Enumerable<MentoringsUncheckedCreateWithoutDetailMentoringsInput>>
    connectOrCreate?: Enumerable<MentoringsCreateOrConnectWithoutDetailMentoringsInput>
    createMany?: MentoringsCreateManyDetailMentoringsInputEnvelope
    connect?: Enumerable<MentoringsWhereUniqueInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MentoringsUpdateManyWithoutDetailMentoringsInput = {
    create?: XOR<Enumerable<MentoringsCreateWithoutDetailMentoringsInput>, Enumerable<MentoringsUncheckedCreateWithoutDetailMentoringsInput>>
    connectOrCreate?: Enumerable<MentoringsCreateOrConnectWithoutDetailMentoringsInput>
    upsert?: Enumerable<MentoringsUpsertWithWhereUniqueWithoutDetailMentoringsInput>
    createMany?: MentoringsCreateManyDetailMentoringsInputEnvelope
    connect?: Enumerable<MentoringsWhereUniqueInput>
    set?: Enumerable<MentoringsWhereUniqueInput>
    disconnect?: Enumerable<MentoringsWhereUniqueInput>
    delete?: Enumerable<MentoringsWhereUniqueInput>
    update?: Enumerable<MentoringsUpdateWithWhereUniqueWithoutDetailMentoringsInput>
    updateMany?: Enumerable<MentoringsUpdateManyWithWhereWithoutDetailMentoringsInput>
    deleteMany?: Enumerable<MentoringsScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MentoringsUncheckedUpdateManyWithoutDetailMentoringsInput = {
    create?: XOR<Enumerable<MentoringsCreateWithoutDetailMentoringsInput>, Enumerable<MentoringsUncheckedCreateWithoutDetailMentoringsInput>>
    connectOrCreate?: Enumerable<MentoringsCreateOrConnectWithoutDetailMentoringsInput>
    upsert?: Enumerable<MentoringsUpsertWithWhereUniqueWithoutDetailMentoringsInput>
    createMany?: MentoringsCreateManyDetailMentoringsInputEnvelope
    connect?: Enumerable<MentoringsWhereUniqueInput>
    set?: Enumerable<MentoringsWhereUniqueInput>
    disconnect?: Enumerable<MentoringsWhereUniqueInput>
    delete?: Enumerable<MentoringsWhereUniqueInput>
    update?: Enumerable<MentoringsUpdateWithWhereUniqueWithoutDetailMentoringsInput>
    updateMany?: Enumerable<MentoringsUpdateManyWithWhereWithoutDetailMentoringsInput>
    deleteMany?: Enumerable<MentoringsScalarWhereInput>
  }

  export type MaterisCreateNestedOneWithoutFilesInput = {
    create?: XOR<MaterisCreateWithoutFilesInput, MaterisUncheckedCreateWithoutFilesInput>
    connectOrCreate?: MaterisCreateOrConnectWithoutFilesInput
    connect?: MaterisWhereUniqueInput
  }

  export type MaterisUpdateOneWithoutFilesInput = {
    create?: XOR<MaterisCreateWithoutFilesInput, MaterisUncheckedCreateWithoutFilesInput>
    connectOrCreate?: MaterisCreateOrConnectWithoutFilesInput
    upsert?: MaterisUpsertWithoutFilesInput
    connect?: MaterisWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<MaterisUpdateWithoutFilesInput, MaterisUncheckedUpdateWithoutFilesInput>
  }

  export type PresensiPesertaCreateNestedManyWithoutJadwalPresensisInput = {
    create?: XOR<Enumerable<PresensiPesertaCreateWithoutJadwalPresensisInput>, Enumerable<PresensiPesertaUncheckedCreateWithoutJadwalPresensisInput>>
    connectOrCreate?: Enumerable<PresensiPesertaCreateOrConnectWithoutJadwalPresensisInput>
    createMany?: PresensiPesertaCreateManyJadwalPresensisInputEnvelope
    connect?: Enumerable<PresensiPesertaWhereUniqueInput>
  }

  export type PresensiPesertaUncheckedCreateNestedManyWithoutJadwalPresensisInput = {
    create?: XOR<Enumerable<PresensiPesertaCreateWithoutJadwalPresensisInput>, Enumerable<PresensiPesertaUncheckedCreateWithoutJadwalPresensisInput>>
    connectOrCreate?: Enumerable<PresensiPesertaCreateOrConnectWithoutJadwalPresensisInput>
    createMany?: PresensiPesertaCreateManyJadwalPresensisInputEnvelope
    connect?: Enumerable<PresensiPesertaWhereUniqueInput>
  }

  export type PresensiPesertaUpdateManyWithoutJadwalPresensisInput = {
    create?: XOR<Enumerable<PresensiPesertaCreateWithoutJadwalPresensisInput>, Enumerable<PresensiPesertaUncheckedCreateWithoutJadwalPresensisInput>>
    connectOrCreate?: Enumerable<PresensiPesertaCreateOrConnectWithoutJadwalPresensisInput>
    upsert?: Enumerable<PresensiPesertaUpsertWithWhereUniqueWithoutJadwalPresensisInput>
    createMany?: PresensiPesertaCreateManyJadwalPresensisInputEnvelope
    connect?: Enumerable<PresensiPesertaWhereUniqueInput>
    set?: Enumerable<PresensiPesertaWhereUniqueInput>
    disconnect?: Enumerable<PresensiPesertaWhereUniqueInput>
    delete?: Enumerable<PresensiPesertaWhereUniqueInput>
    update?: Enumerable<PresensiPesertaUpdateWithWhereUniqueWithoutJadwalPresensisInput>
    updateMany?: Enumerable<PresensiPesertaUpdateManyWithWhereWithoutJadwalPresensisInput>
    deleteMany?: Enumerable<PresensiPesertaScalarWhereInput>
  }

  export type PresensiPesertaUncheckedUpdateManyWithoutJadwalPresensisInput = {
    create?: XOR<Enumerable<PresensiPesertaCreateWithoutJadwalPresensisInput>, Enumerable<PresensiPesertaUncheckedCreateWithoutJadwalPresensisInput>>
    connectOrCreate?: Enumerable<PresensiPesertaCreateOrConnectWithoutJadwalPresensisInput>
    upsert?: Enumerable<PresensiPesertaUpsertWithWhereUniqueWithoutJadwalPresensisInput>
    createMany?: PresensiPesertaCreateManyJadwalPresensisInputEnvelope
    connect?: Enumerable<PresensiPesertaWhereUniqueInput>
    set?: Enumerable<PresensiPesertaWhereUniqueInput>
    disconnect?: Enumerable<PresensiPesertaWhereUniqueInput>
    delete?: Enumerable<PresensiPesertaWhereUniqueInput>
    update?: Enumerable<PresensiPesertaUpdateWithWhereUniqueWithoutJadwalPresensisInput>
    updateMany?: Enumerable<PresensiPesertaUpdateManyWithWhereWithoutJadwalPresensisInput>
    deleteMany?: Enumerable<PresensiPesertaScalarWhereInput>
  }

  export type FilesCreateNestedManyWithoutMaterisInput = {
    create?: XOR<Enumerable<FilesCreateWithoutMaterisInput>, Enumerable<FilesUncheckedCreateWithoutMaterisInput>>
    connectOrCreate?: Enumerable<FilesCreateOrConnectWithoutMaterisInput>
    createMany?: FilesCreateManyMaterisInputEnvelope
    connect?: Enumerable<FilesWhereUniqueInput>
  }

  export type FilesUncheckedCreateNestedManyWithoutMaterisInput = {
    create?: XOR<Enumerable<FilesCreateWithoutMaterisInput>, Enumerable<FilesUncheckedCreateWithoutMaterisInput>>
    connectOrCreate?: Enumerable<FilesCreateOrConnectWithoutMaterisInput>
    createMany?: FilesCreateManyMaterisInputEnvelope
    connect?: Enumerable<FilesWhereUniqueInput>
  }

  export type FilesUpdateManyWithoutMaterisInput = {
    create?: XOR<Enumerable<FilesCreateWithoutMaterisInput>, Enumerable<FilesUncheckedCreateWithoutMaterisInput>>
    connectOrCreate?: Enumerable<FilesCreateOrConnectWithoutMaterisInput>
    upsert?: Enumerable<FilesUpsertWithWhereUniqueWithoutMaterisInput>
    createMany?: FilesCreateManyMaterisInputEnvelope
    connect?: Enumerable<FilesWhereUniqueInput>
    set?: Enumerable<FilesWhereUniqueInput>
    disconnect?: Enumerable<FilesWhereUniqueInput>
    delete?: Enumerable<FilesWhereUniqueInput>
    update?: Enumerable<FilesUpdateWithWhereUniqueWithoutMaterisInput>
    updateMany?: Enumerable<FilesUpdateManyWithWhereWithoutMaterisInput>
    deleteMany?: Enumerable<FilesScalarWhereInput>
  }

  export type FilesUncheckedUpdateManyWithoutMaterisInput = {
    create?: XOR<Enumerable<FilesCreateWithoutMaterisInput>, Enumerable<FilesUncheckedCreateWithoutMaterisInput>>
    connectOrCreate?: Enumerable<FilesCreateOrConnectWithoutMaterisInput>
    upsert?: Enumerable<FilesUpsertWithWhereUniqueWithoutMaterisInput>
    createMany?: FilesCreateManyMaterisInputEnvelope
    connect?: Enumerable<FilesWhereUniqueInput>
    set?: Enumerable<FilesWhereUniqueInput>
    disconnect?: Enumerable<FilesWhereUniqueInput>
    delete?: Enumerable<FilesWhereUniqueInput>
    update?: Enumerable<FilesUpdateWithWhereUniqueWithoutMaterisInput>
    updateMany?: Enumerable<FilesUpdateManyWithWhereWithoutMaterisInput>
    deleteMany?: Enumerable<FilesScalarWhereInput>
  }

  export type DetailMentoringsCreateNestedOneWithoutMentoringsInput = {
    create?: XOR<DetailMentoringsCreateWithoutMentoringsInput, DetailMentoringsUncheckedCreateWithoutMentoringsInput>
    connectOrCreate?: DetailMentoringsCreateOrConnectWithoutMentoringsInput
    connect?: DetailMentoringsWhereUniqueInput
  }

  export type DetailMentoringsUpdateOneWithoutMentoringsInput = {
    create?: XOR<DetailMentoringsCreateWithoutMentoringsInput, DetailMentoringsUncheckedCreateWithoutMentoringsInput>
    connectOrCreate?: DetailMentoringsCreateOrConnectWithoutMentoringsInput
    upsert?: DetailMentoringsUpsertWithoutMentoringsInput
    connect?: DetailMentoringsWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<DetailMentoringsUpdateWithoutMentoringsInput, DetailMentoringsUncheckedUpdateWithoutMentoringsInput>
  }

  export type JadwalPresensisCreateNestedOneWithoutPresensiPesertaInput = {
    create?: XOR<JadwalPresensisCreateWithoutPresensiPesertaInput, JadwalPresensisUncheckedCreateWithoutPresensiPesertaInput>
    connectOrCreate?: JadwalPresensisCreateOrConnectWithoutPresensiPesertaInput
    connect?: JadwalPresensisWhereUniqueInput
  }

  export type UsersCreateNestedOneWithoutPresensiPesertaInput = {
    create?: XOR<UsersCreateWithoutPresensiPesertaInput, UsersUncheckedCreateWithoutPresensiPesertaInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPresensiPesertaInput
    connect?: UsersWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type JadwalPresensisUpdateOneWithoutPresensiPesertaInput = {
    create?: XOR<JadwalPresensisCreateWithoutPresensiPesertaInput, JadwalPresensisUncheckedCreateWithoutPresensiPesertaInput>
    connectOrCreate?: JadwalPresensisCreateOrConnectWithoutPresensiPesertaInput
    upsert?: JadwalPresensisUpsertWithoutPresensiPesertaInput
    connect?: JadwalPresensisWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<JadwalPresensisUpdateWithoutPresensiPesertaInput, JadwalPresensisUncheckedUpdateWithoutPresensiPesertaInput>
  }

  export type UsersUpdateOneWithoutPresensiPesertaInput = {
    create?: XOR<UsersCreateWithoutPresensiPesertaInput, UsersUncheckedCreateWithoutPresensiPesertaInput>
    connectOrCreate?: UsersCreateOrConnectWithoutPresensiPesertaInput
    upsert?: UsersUpsertWithoutPresensiPesertaInput
    connect?: UsersWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<UsersUpdateWithoutPresensiPesertaInput, UsersUncheckedUpdateWithoutPresensiPesertaInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UsersCreateNestedOneWithoutSubmisiTugasInput = {
    create?: XOR<UsersCreateWithoutSubmisiTugasInput, UsersUncheckedCreateWithoutSubmisiTugasInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSubmisiTugasInput
    connect?: UsersWhereUniqueInput
  }

  export type TugasCreateNestedOneWithoutSubmisiTugasInput = {
    create?: XOR<TugasCreateWithoutSubmisiTugasInput, TugasUncheckedCreateWithoutSubmisiTugasInput>
    connectOrCreate?: TugasCreateOrConnectWithoutSubmisiTugasInput
    connect?: TugasWhereUniqueInput
  }

  export type UsersUpdateOneWithoutSubmisiTugasInput = {
    create?: XOR<UsersCreateWithoutSubmisiTugasInput, UsersUncheckedCreateWithoutSubmisiTugasInput>
    connectOrCreate?: UsersCreateOrConnectWithoutSubmisiTugasInput
    upsert?: UsersUpsertWithoutSubmisiTugasInput
    connect?: UsersWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<UsersUpdateWithoutSubmisiTugasInput, UsersUncheckedUpdateWithoutSubmisiTugasInput>
  }

  export type TugasUpdateOneWithoutSubmisiTugasInput = {
    create?: XOR<TugasCreateWithoutSubmisiTugasInput, TugasUncheckedCreateWithoutSubmisiTugasInput>
    connectOrCreate?: TugasCreateOrConnectWithoutSubmisiTugasInput
    upsert?: TugasUpsertWithoutSubmisiTugasInput
    connect?: TugasWhereUniqueInput
    disconnect?: boolean
    delete?: boolean
    update?: XOR<TugasUpdateWithoutSubmisiTugasInput, TugasUncheckedUpdateWithoutSubmisiTugasInput>
  }

  export type SubmisiTugasCreateNestedManyWithoutTugasInput = {
    create?: XOR<Enumerable<SubmisiTugasCreateWithoutTugasInput>, Enumerable<SubmisiTugasUncheckedCreateWithoutTugasInput>>
    connectOrCreate?: Enumerable<SubmisiTugasCreateOrConnectWithoutTugasInput>
    createMany?: SubmisiTugasCreateManyTugasInputEnvelope
    connect?: Enumerable<SubmisiTugasWhereUniqueInput>
  }

  export type SubmisiTugasUncheckedCreateNestedManyWithoutTugasInput = {
    create?: XOR<Enumerable<SubmisiTugasCreateWithoutTugasInput>, Enumerable<SubmisiTugasUncheckedCreateWithoutTugasInput>>
    connectOrCreate?: Enumerable<SubmisiTugasCreateOrConnectWithoutTugasInput>
    createMany?: SubmisiTugasCreateManyTugasInputEnvelope
    connect?: Enumerable<SubmisiTugasWhereUniqueInput>
  }

  export type SubmisiTugasUpdateManyWithoutTugasInput = {
    create?: XOR<Enumerable<SubmisiTugasCreateWithoutTugasInput>, Enumerable<SubmisiTugasUncheckedCreateWithoutTugasInput>>
    connectOrCreate?: Enumerable<SubmisiTugasCreateOrConnectWithoutTugasInput>
    upsert?: Enumerable<SubmisiTugasUpsertWithWhereUniqueWithoutTugasInput>
    createMany?: SubmisiTugasCreateManyTugasInputEnvelope
    connect?: Enumerable<SubmisiTugasWhereUniqueInput>
    set?: Enumerable<SubmisiTugasWhereUniqueInput>
    disconnect?: Enumerable<SubmisiTugasWhereUniqueInput>
    delete?: Enumerable<SubmisiTugasWhereUniqueInput>
    update?: Enumerable<SubmisiTugasUpdateWithWhereUniqueWithoutTugasInput>
    updateMany?: Enumerable<SubmisiTugasUpdateManyWithWhereWithoutTugasInput>
    deleteMany?: Enumerable<SubmisiTugasScalarWhereInput>
  }

  export type SubmisiTugasUncheckedUpdateManyWithoutTugasInput = {
    create?: XOR<Enumerable<SubmisiTugasCreateWithoutTugasInput>, Enumerable<SubmisiTugasUncheckedCreateWithoutTugasInput>>
    connectOrCreate?: Enumerable<SubmisiTugasCreateOrConnectWithoutTugasInput>
    upsert?: Enumerable<SubmisiTugasUpsertWithWhereUniqueWithoutTugasInput>
    createMany?: SubmisiTugasCreateManyTugasInputEnvelope
    connect?: Enumerable<SubmisiTugasWhereUniqueInput>
    set?: Enumerable<SubmisiTugasWhereUniqueInput>
    disconnect?: Enumerable<SubmisiTugasWhereUniqueInput>
    delete?: Enumerable<SubmisiTugasWhereUniqueInput>
    update?: Enumerable<SubmisiTugasUpdateWithWhereUniqueWithoutTugasInput>
    updateMany?: Enumerable<SubmisiTugasUpdateManyWithWhereWithoutTugasInput>
    deleteMany?: Enumerable<SubmisiTugasScalarWhereInput>
  }

  export type PresensiPesertaCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<PresensiPesertaCreateWithoutUsersInput>, Enumerable<PresensiPesertaUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<PresensiPesertaCreateOrConnectWithoutUsersInput>
    createMany?: PresensiPesertaCreateManyUsersInputEnvelope
    connect?: Enumerable<PresensiPesertaWhereUniqueInput>
  }

  export type SubmisiTugasCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<SubmisiTugasCreateWithoutUsersInput>, Enumerable<SubmisiTugasUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<SubmisiTugasCreateOrConnectWithoutUsersInput>
    createMany?: SubmisiTugasCreateManyUsersInputEnvelope
    connect?: Enumerable<SubmisiTugasWhereUniqueInput>
  }

  export type PresensiPesertaUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<PresensiPesertaCreateWithoutUsersInput>, Enumerable<PresensiPesertaUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<PresensiPesertaCreateOrConnectWithoutUsersInput>
    createMany?: PresensiPesertaCreateManyUsersInputEnvelope
    connect?: Enumerable<PresensiPesertaWhereUniqueInput>
  }

  export type SubmisiTugasUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<Enumerable<SubmisiTugasCreateWithoutUsersInput>, Enumerable<SubmisiTugasUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<SubmisiTugasCreateOrConnectWithoutUsersInput>
    createMany?: SubmisiTugasCreateManyUsersInputEnvelope
    connect?: Enumerable<SubmisiTugasWhereUniqueInput>
  }

  export type PresensiPesertaUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<PresensiPesertaCreateWithoutUsersInput>, Enumerable<PresensiPesertaUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<PresensiPesertaCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<PresensiPesertaUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: PresensiPesertaCreateManyUsersInputEnvelope
    connect?: Enumerable<PresensiPesertaWhereUniqueInput>
    set?: Enumerable<PresensiPesertaWhereUniqueInput>
    disconnect?: Enumerable<PresensiPesertaWhereUniqueInput>
    delete?: Enumerable<PresensiPesertaWhereUniqueInput>
    update?: Enumerable<PresensiPesertaUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<PresensiPesertaUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<PresensiPesertaScalarWhereInput>
  }

  export type SubmisiTugasUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<SubmisiTugasCreateWithoutUsersInput>, Enumerable<SubmisiTugasUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<SubmisiTugasCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<SubmisiTugasUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: SubmisiTugasCreateManyUsersInputEnvelope
    connect?: Enumerable<SubmisiTugasWhereUniqueInput>
    set?: Enumerable<SubmisiTugasWhereUniqueInput>
    disconnect?: Enumerable<SubmisiTugasWhereUniqueInput>
    delete?: Enumerable<SubmisiTugasWhereUniqueInput>
    update?: Enumerable<SubmisiTugasUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<SubmisiTugasUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<SubmisiTugasScalarWhereInput>
  }

  export type PresensiPesertaUncheckedUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<PresensiPesertaCreateWithoutUsersInput>, Enumerable<PresensiPesertaUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<PresensiPesertaCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<PresensiPesertaUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: PresensiPesertaCreateManyUsersInputEnvelope
    connect?: Enumerable<PresensiPesertaWhereUniqueInput>
    set?: Enumerable<PresensiPesertaWhereUniqueInput>
    disconnect?: Enumerable<PresensiPesertaWhereUniqueInput>
    delete?: Enumerable<PresensiPesertaWhereUniqueInput>
    update?: Enumerable<PresensiPesertaUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<PresensiPesertaUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<PresensiPesertaScalarWhereInput>
  }

  export type SubmisiTugasUncheckedUpdateManyWithoutUsersInput = {
    create?: XOR<Enumerable<SubmisiTugasCreateWithoutUsersInput>, Enumerable<SubmisiTugasUncheckedCreateWithoutUsersInput>>
    connectOrCreate?: Enumerable<SubmisiTugasCreateOrConnectWithoutUsersInput>
    upsert?: Enumerable<SubmisiTugasUpsertWithWhereUniqueWithoutUsersInput>
    createMany?: SubmisiTugasCreateManyUsersInputEnvelope
    connect?: Enumerable<SubmisiTugasWhereUniqueInput>
    set?: Enumerable<SubmisiTugasWhereUniqueInput>
    disconnect?: Enumerable<SubmisiTugasWhereUniqueInput>
    delete?: Enumerable<SubmisiTugasWhereUniqueInput>
    update?: Enumerable<SubmisiTugasUpdateWithWhereUniqueWithoutUsersInput>
    updateMany?: Enumerable<SubmisiTugasUpdateManyWithWhereWithoutUsersInput>
    deleteMany?: Enumerable<SubmisiTugasScalarWhereInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedDateTimeNullableFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableFilter | Date | string | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _avg?: NestedFloatFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntFilter
    _min?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntFilter
    _max?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringNullableFilter
  }

  export type NestedDateTimeNullableWithAggregatesFilter = {
    equals?: Date | string | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeNullableWithAggregatesFilter | Date | string | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeNullableFilter
    _max?: NestedDateTimeNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeNullableFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedDateTimeFilter
  }

  export type NestedBoolNullableFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableFilter | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter = {
    equals?: boolean | null
    not?: NestedBoolNullableWithAggregatesFilter | boolean | null
    _count?: NestedIntNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntNullableFilter
    _min?: NestedBoolNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedBoolNullableFilter
    _max?: NestedBoolNullableFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedBoolNullableFilter
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    count?: NestedIntFilter
    _min?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    min?: NestedStringFilter
    _max?: NestedStringFilter
    /**
     * @deprecated since 2.23 because Aggregation keywords got unified to use underscore as prefix to prevent field clashes.
     * 
    **/
    max?: NestedStringFilter
  }

  export type MentoringsCreateWithoutDetailMentoringsInput = {
    kelompok?: string | null
    link?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type MentoringsUncheckedCreateWithoutDetailMentoringsInput = {
    id?: number
    kelompok?: string | null
    link?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type MentoringsCreateOrConnectWithoutDetailMentoringsInput = {
    where: MentoringsWhereUniqueInput
    create: XOR<MentoringsCreateWithoutDetailMentoringsInput, MentoringsUncheckedCreateWithoutDetailMentoringsInput>
  }

  export type MentoringsCreateManyDetailMentoringsInputEnvelope = {
    data: Enumerable<MentoringsCreateManyDetailMentoringsInput>
    skipDuplicates?: boolean
  }

  export type MentoringsUpsertWithWhereUniqueWithoutDetailMentoringsInput = {
    where: MentoringsWhereUniqueInput
    update: XOR<MentoringsUpdateWithoutDetailMentoringsInput, MentoringsUncheckedUpdateWithoutDetailMentoringsInput>
    create: XOR<MentoringsCreateWithoutDetailMentoringsInput, MentoringsUncheckedCreateWithoutDetailMentoringsInput>
  }

  export type MentoringsUpdateWithWhereUniqueWithoutDetailMentoringsInput = {
    where: MentoringsWhereUniqueInput
    data: XOR<MentoringsUpdateWithoutDetailMentoringsInput, MentoringsUncheckedUpdateWithoutDetailMentoringsInput>
  }

  export type MentoringsUpdateManyWithWhereWithoutDetailMentoringsInput = {
    where: MentoringsScalarWhereInput
    data: XOR<MentoringsUpdateManyMutationInput, MentoringsUncheckedUpdateManyWithoutMentoringsInput>
  }

  export type MentoringsScalarWhereInput = {
    AND?: Enumerable<MentoringsScalarWhereInput>
    OR?: Enumerable<MentoringsScalarWhereInput>
    NOT?: Enumerable<MentoringsScalarWhereInput>
    id?: IntFilter | number
    kelompok?: StringNullableFilter | string | null
    link?: StringNullableFilter | string | null
    detail?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type MaterisCreateWithoutFilesInput = {
    bagian?: string | null
    judul?: string | null
    deskripsi?: string | null
    embed?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type MaterisUncheckedCreateWithoutFilesInput = {
    id?: number
    bagian?: string | null
    judul?: string | null
    deskripsi?: string | null
    embed?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type MaterisCreateOrConnectWithoutFilesInput = {
    where: MaterisWhereUniqueInput
    create: XOR<MaterisCreateWithoutFilesInput, MaterisUncheckedCreateWithoutFilesInput>
  }

  export type MaterisUpsertWithoutFilesInput = {
    update: XOR<MaterisUpdateWithoutFilesInput, MaterisUncheckedUpdateWithoutFilesInput>
    create: XOR<MaterisCreateWithoutFilesInput, MaterisUncheckedCreateWithoutFilesInput>
  }

  export type MaterisUpdateWithoutFilesInput = {
    bagian?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    embed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterisUncheckedUpdateWithoutFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    bagian?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    embed?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresensiPesertaCreateWithoutJadwalPresensisInput = {
    hadir?: boolean | null
    createdAt: Date | string
    updatedAt: Date | string
    Users?: UsersCreateNestedOneWithoutPresensiPesertaInput
  }

  export type PresensiPesertaUncheckedCreateWithoutJadwalPresensisInput = {
    id?: number
    hadir?: boolean | null
    user?: number | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type PresensiPesertaCreateOrConnectWithoutJadwalPresensisInput = {
    where: PresensiPesertaWhereUniqueInput
    create: XOR<PresensiPesertaCreateWithoutJadwalPresensisInput, PresensiPesertaUncheckedCreateWithoutJadwalPresensisInput>
  }

  export type PresensiPesertaCreateManyJadwalPresensisInputEnvelope = {
    data: Enumerable<PresensiPesertaCreateManyJadwalPresensisInput>
    skipDuplicates?: boolean
  }

  export type PresensiPesertaUpsertWithWhereUniqueWithoutJadwalPresensisInput = {
    where: PresensiPesertaWhereUniqueInput
    update: XOR<PresensiPesertaUpdateWithoutJadwalPresensisInput, PresensiPesertaUncheckedUpdateWithoutJadwalPresensisInput>
    create: XOR<PresensiPesertaCreateWithoutJadwalPresensisInput, PresensiPesertaUncheckedCreateWithoutJadwalPresensisInput>
  }

  export type PresensiPesertaUpdateWithWhereUniqueWithoutJadwalPresensisInput = {
    where: PresensiPesertaWhereUniqueInput
    data: XOR<PresensiPesertaUpdateWithoutJadwalPresensisInput, PresensiPesertaUncheckedUpdateWithoutJadwalPresensisInput>
  }

  export type PresensiPesertaUpdateManyWithWhereWithoutJadwalPresensisInput = {
    where: PresensiPesertaScalarWhereInput
    data: XOR<PresensiPesertaUpdateManyMutationInput, PresensiPesertaUncheckedUpdateManyWithoutPresensiPesertaInput>
  }

  export type PresensiPesertaScalarWhereInput = {
    AND?: Enumerable<PresensiPesertaScalarWhereInput>
    OR?: Enumerable<PresensiPesertaScalarWhereInput>
    NOT?: Enumerable<PresensiPesertaScalarWhereInput>
    id?: IntFilter | number
    hadir?: BoolNullableFilter | boolean | null
    user?: IntNullableFilter | number | null
    jadwal?: IntNullableFilter | number | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type FilesCreateWithoutMaterisInput = {
    name?: string | null
    path?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type FilesUncheckedCreateWithoutMaterisInput = {
    id?: number
    name?: string | null
    path?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type FilesCreateOrConnectWithoutMaterisInput = {
    where: FilesWhereUniqueInput
    create: XOR<FilesCreateWithoutMaterisInput, FilesUncheckedCreateWithoutMaterisInput>
  }

  export type FilesCreateManyMaterisInputEnvelope = {
    data: Enumerable<FilesCreateManyMaterisInput>
    skipDuplicates?: boolean
  }

  export type FilesUpsertWithWhereUniqueWithoutMaterisInput = {
    where: FilesWhereUniqueInput
    update: XOR<FilesUpdateWithoutMaterisInput, FilesUncheckedUpdateWithoutMaterisInput>
    create: XOR<FilesCreateWithoutMaterisInput, FilesUncheckedCreateWithoutMaterisInput>
  }

  export type FilesUpdateWithWhereUniqueWithoutMaterisInput = {
    where: FilesWhereUniqueInput
    data: XOR<FilesUpdateWithoutMaterisInput, FilesUncheckedUpdateWithoutMaterisInput>
  }

  export type FilesUpdateManyWithWhereWithoutMaterisInput = {
    where: FilesScalarWhereInput
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyWithoutFilesInput>
  }

  export type FilesScalarWhereInput = {
    AND?: Enumerable<FilesScalarWhereInput>
    OR?: Enumerable<FilesScalarWhereInput>
    NOT?: Enumerable<FilesScalarWhereInput>
    id?: IntFilter | number
    materi?: IntNullableFilter | number | null
    name?: StringNullableFilter | string | null
    path?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type DetailMentoringsCreateWithoutMentoringsInput = {
    day?: number | null
    judul?: string | null
    deskripsi?: string | null
    start?: Date | string | null
    end?: Date | string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type DetailMentoringsUncheckedCreateWithoutMentoringsInput = {
    id?: number
    day?: number | null
    judul?: string | null
    deskripsi?: string | null
    start?: Date | string | null
    end?: Date | string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type DetailMentoringsCreateOrConnectWithoutMentoringsInput = {
    where: DetailMentoringsWhereUniqueInput
    create: XOR<DetailMentoringsCreateWithoutMentoringsInput, DetailMentoringsUncheckedCreateWithoutMentoringsInput>
  }

  export type DetailMentoringsUpsertWithoutMentoringsInput = {
    update: XOR<DetailMentoringsUpdateWithoutMentoringsInput, DetailMentoringsUncheckedUpdateWithoutMentoringsInput>
    create: XOR<DetailMentoringsCreateWithoutMentoringsInput, DetailMentoringsUncheckedCreateWithoutMentoringsInput>
  }

  export type DetailMentoringsUpdateWithoutMentoringsInput = {
    day?: NullableIntFieldUpdateOperationsInput | number | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DetailMentoringsUncheckedUpdateWithoutMentoringsInput = {
    id?: IntFieldUpdateOperationsInput | number
    day?: NullableIntFieldUpdateOperationsInput | number | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalPresensisCreateWithoutPresensiPesertaInput = {
    judul?: string | null
    start?: Date | string | null
    end?: Date | string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type JadwalPresensisUncheckedCreateWithoutPresensiPesertaInput = {
    id?: number
    judul?: string | null
    start?: Date | string | null
    end?: Date | string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type JadwalPresensisCreateOrConnectWithoutPresensiPesertaInput = {
    where: JadwalPresensisWhereUniqueInput
    create: XOR<JadwalPresensisCreateWithoutPresensiPesertaInput, JadwalPresensisUncheckedCreateWithoutPresensiPesertaInput>
  }

  export type UsersCreateWithoutPresensiPesertaInput = {
    nama?: string | null
    nim?: string | null
    email?: string | null
    kelompok?: number | null
    hashedPassword?: string | null
    salt?: string | null
    role?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    SubmisiTugas?: SubmisiTugasCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutPresensiPesertaInput = {
    id?: number
    nama?: string | null
    nim?: string | null
    email?: string | null
    kelompok?: number | null
    hashedPassword?: string | null
    salt?: string | null
    role?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    SubmisiTugas?: SubmisiTugasUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutPresensiPesertaInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutPresensiPesertaInput, UsersUncheckedCreateWithoutPresensiPesertaInput>
  }

  export type JadwalPresensisUpsertWithoutPresensiPesertaInput = {
    update: XOR<JadwalPresensisUpdateWithoutPresensiPesertaInput, JadwalPresensisUncheckedUpdateWithoutPresensiPesertaInput>
    create: XOR<JadwalPresensisCreateWithoutPresensiPesertaInput, JadwalPresensisUncheckedCreateWithoutPresensiPesertaInput>
  }

  export type JadwalPresensisUpdateWithoutPresensiPesertaInput = {
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type JadwalPresensisUncheckedUpdateWithoutPresensiPesertaInput = {
    id?: IntFieldUpdateOperationsInput | number
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    start?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsersUpsertWithoutPresensiPesertaInput = {
    update: XOR<UsersUpdateWithoutPresensiPesertaInput, UsersUncheckedUpdateWithoutPresensiPesertaInput>
    create: XOR<UsersCreateWithoutPresensiPesertaInput, UsersUncheckedCreateWithoutPresensiPesertaInput>
  }

  export type UsersUpdateWithoutPresensiPesertaInput = {
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    kelompok?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SubmisiTugas?: SubmisiTugasUpdateManyWithoutUsersInput
  }

  export type UsersUncheckedUpdateWithoutPresensiPesertaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    kelompok?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    SubmisiTugas?: SubmisiTugasUncheckedUpdateManyWithoutUsersInput
  }

  export type UsersCreateWithoutSubmisiTugasInput = {
    nama?: string | null
    nim?: string | null
    email?: string | null
    kelompok?: number | null
    hashedPassword?: string | null
    salt?: string | null
    role?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    PresensiPeserta?: PresensiPesertaCreateNestedManyWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutSubmisiTugasInput = {
    id?: number
    nama?: string | null
    nim?: string | null
    email?: string | null
    kelompok?: number | null
    hashedPassword?: string | null
    salt?: string | null
    role?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    PresensiPeserta?: PresensiPesertaUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UsersCreateOrConnectWithoutSubmisiTugasInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutSubmisiTugasInput, UsersUncheckedCreateWithoutSubmisiTugasInput>
  }

  export type TugasCreateWithoutSubmisiTugasInput = {
    bagian?: string | null
    judul?: string | null
    deskripsi?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deadline?: Date | string | null
  }

  export type TugasUncheckedCreateWithoutSubmisiTugasInput = {
    id?: number
    bagian?: string | null
    judul?: string | null
    deskripsi?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    deadline?: Date | string | null
  }

  export type TugasCreateOrConnectWithoutSubmisiTugasInput = {
    where: TugasWhereUniqueInput
    create: XOR<TugasCreateWithoutSubmisiTugasInput, TugasUncheckedCreateWithoutSubmisiTugasInput>
  }

  export type UsersUpsertWithoutSubmisiTugasInput = {
    update: XOR<UsersUpdateWithoutSubmisiTugasInput, UsersUncheckedUpdateWithoutSubmisiTugasInput>
    create: XOR<UsersCreateWithoutSubmisiTugasInput, UsersUncheckedCreateWithoutSubmisiTugasInput>
  }

  export type UsersUpdateWithoutSubmisiTugasInput = {
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    kelompok?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PresensiPeserta?: PresensiPesertaUpdateManyWithoutUsersInput
  }

  export type UsersUncheckedUpdateWithoutSubmisiTugasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    nim?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    kelompok?: NullableIntFieldUpdateOperationsInput | number | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    salt?: NullableStringFieldUpdateOperationsInput | string | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    PresensiPeserta?: PresensiPesertaUncheckedUpdateManyWithoutUsersInput
  }

  export type TugasUpsertWithoutSubmisiTugasInput = {
    update: XOR<TugasUpdateWithoutSubmisiTugasInput, TugasUncheckedUpdateWithoutSubmisiTugasInput>
    create: XOR<TugasCreateWithoutSubmisiTugasInput, TugasUncheckedCreateWithoutSubmisiTugasInput>
  }

  export type TugasUpdateWithoutSubmisiTugasInput = {
    bagian?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type TugasUncheckedUpdateWithoutSubmisiTugasInput = {
    id?: IntFieldUpdateOperationsInput | number
    bagian?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SubmisiTugasCreateWithoutTugasInput = {
    nama?: string | null
    path?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    Users?: UsersCreateNestedOneWithoutSubmisiTugasInput
  }

  export type SubmisiTugasUncheckedCreateWithoutTugasInput = {
    id?: number
    pemilik?: number | null
    nama?: string | null
    path?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type SubmisiTugasCreateOrConnectWithoutTugasInput = {
    where: SubmisiTugasWhereUniqueInput
    create: XOR<SubmisiTugasCreateWithoutTugasInput, SubmisiTugasUncheckedCreateWithoutTugasInput>
  }

  export type SubmisiTugasCreateManyTugasInputEnvelope = {
    data: Enumerable<SubmisiTugasCreateManyTugasInput>
    skipDuplicates?: boolean
  }

  export type SubmisiTugasUpsertWithWhereUniqueWithoutTugasInput = {
    where: SubmisiTugasWhereUniqueInput
    update: XOR<SubmisiTugasUpdateWithoutTugasInput, SubmisiTugasUncheckedUpdateWithoutTugasInput>
    create: XOR<SubmisiTugasCreateWithoutTugasInput, SubmisiTugasUncheckedCreateWithoutTugasInput>
  }

  export type SubmisiTugasUpdateWithWhereUniqueWithoutTugasInput = {
    where: SubmisiTugasWhereUniqueInput
    data: XOR<SubmisiTugasUpdateWithoutTugasInput, SubmisiTugasUncheckedUpdateWithoutTugasInput>
  }

  export type SubmisiTugasUpdateManyWithWhereWithoutTugasInput = {
    where: SubmisiTugasScalarWhereInput
    data: XOR<SubmisiTugasUpdateManyMutationInput, SubmisiTugasUncheckedUpdateManyWithoutSubmisiTugasInput>
  }

  export type SubmisiTugasScalarWhereInput = {
    AND?: Enumerable<SubmisiTugasScalarWhereInput>
    OR?: Enumerable<SubmisiTugasScalarWhereInput>
    NOT?: Enumerable<SubmisiTugasScalarWhereInput>
    id?: IntFilter | number
    pemilik?: IntNullableFilter | number | null
    tugas?: IntNullableFilter | number | null
    nama?: StringNullableFilter | string | null
    path?: StringNullableFilter | string | null
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
  }

  export type PresensiPesertaCreateWithoutUsersInput = {
    hadir?: boolean | null
    createdAt: Date | string
    updatedAt: Date | string
    JadwalPresensis?: JadwalPresensisCreateNestedOneWithoutPresensiPesertaInput
  }

  export type PresensiPesertaUncheckedCreateWithoutUsersInput = {
    id?: number
    hadir?: boolean | null
    jadwal?: number | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type PresensiPesertaCreateOrConnectWithoutUsersInput = {
    where: PresensiPesertaWhereUniqueInput
    create: XOR<PresensiPesertaCreateWithoutUsersInput, PresensiPesertaUncheckedCreateWithoutUsersInput>
  }

  export type PresensiPesertaCreateManyUsersInputEnvelope = {
    data: Enumerable<PresensiPesertaCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type SubmisiTugasCreateWithoutUsersInput = {
    nama?: string | null
    path?: string | null
    createdAt: Date | string
    updatedAt: Date | string
    Tugas?: TugasCreateNestedOneWithoutSubmisiTugasInput
  }

  export type SubmisiTugasUncheckedCreateWithoutUsersInput = {
    id?: number
    tugas?: number | null
    nama?: string | null
    path?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type SubmisiTugasCreateOrConnectWithoutUsersInput = {
    where: SubmisiTugasWhereUniqueInput
    create: XOR<SubmisiTugasCreateWithoutUsersInput, SubmisiTugasUncheckedCreateWithoutUsersInput>
  }

  export type SubmisiTugasCreateManyUsersInputEnvelope = {
    data: Enumerable<SubmisiTugasCreateManyUsersInput>
    skipDuplicates?: boolean
  }

  export type PresensiPesertaUpsertWithWhereUniqueWithoutUsersInput = {
    where: PresensiPesertaWhereUniqueInput
    update: XOR<PresensiPesertaUpdateWithoutUsersInput, PresensiPesertaUncheckedUpdateWithoutUsersInput>
    create: XOR<PresensiPesertaCreateWithoutUsersInput, PresensiPesertaUncheckedCreateWithoutUsersInput>
  }

  export type PresensiPesertaUpdateWithWhereUniqueWithoutUsersInput = {
    where: PresensiPesertaWhereUniqueInput
    data: XOR<PresensiPesertaUpdateWithoutUsersInput, PresensiPesertaUncheckedUpdateWithoutUsersInput>
  }

  export type PresensiPesertaUpdateManyWithWhereWithoutUsersInput = {
    where: PresensiPesertaScalarWhereInput
    data: XOR<PresensiPesertaUpdateManyMutationInput, PresensiPesertaUncheckedUpdateManyWithoutPresensiPesertaInput>
  }

  export type SubmisiTugasUpsertWithWhereUniqueWithoutUsersInput = {
    where: SubmisiTugasWhereUniqueInput
    update: XOR<SubmisiTugasUpdateWithoutUsersInput, SubmisiTugasUncheckedUpdateWithoutUsersInput>
    create: XOR<SubmisiTugasCreateWithoutUsersInput, SubmisiTugasUncheckedCreateWithoutUsersInput>
  }

  export type SubmisiTugasUpdateWithWhereUniqueWithoutUsersInput = {
    where: SubmisiTugasWhereUniqueInput
    data: XOR<SubmisiTugasUpdateWithoutUsersInput, SubmisiTugasUncheckedUpdateWithoutUsersInput>
  }

  export type SubmisiTugasUpdateManyWithWhereWithoutUsersInput = {
    where: SubmisiTugasScalarWhereInput
    data: XOR<SubmisiTugasUpdateManyMutationInput, SubmisiTugasUncheckedUpdateManyWithoutSubmisiTugasInput>
  }

  export type MentoringsCreateManyDetailMentoringsInput = {
    id?: number
    kelompok?: string | null
    link?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type MentoringsUpdateWithoutDetailMentoringsInput = {
    kelompok?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentoringsUncheckedUpdateWithoutDetailMentoringsInput = {
    id?: IntFieldUpdateOperationsInput | number
    kelompok?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MentoringsUncheckedUpdateManyWithoutMentoringsInput = {
    id?: IntFieldUpdateOperationsInput | number
    kelompok?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresensiPesertaCreateManyJadwalPresensisInput = {
    id?: number
    hadir?: boolean | null
    user?: number | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type PresensiPesertaUpdateWithoutJadwalPresensisInput = {
    hadir?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutPresensiPesertaInput
  }

  export type PresensiPesertaUncheckedUpdateWithoutJadwalPresensisInput = {
    id?: IntFieldUpdateOperationsInput | number
    hadir?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresensiPesertaUncheckedUpdateManyWithoutPresensiPesertaInput = {
    id?: IntFieldUpdateOperationsInput | number
    hadir?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilesCreateManyMaterisInput = {
    id?: number
    name?: string | null
    path?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type FilesUpdateWithoutMaterisInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilesUncheckedUpdateWithoutMaterisInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilesUncheckedUpdateManyWithoutFilesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmisiTugasCreateManyTugasInput = {
    id?: number
    pemilik?: number | null
    nama?: string | null
    path?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type SubmisiTugasUpdateWithoutTugasInput = {
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Users?: UsersUpdateOneWithoutSubmisiTugasInput
  }

  export type SubmisiTugasUncheckedUpdateWithoutTugasInput = {
    id?: IntFieldUpdateOperationsInput | number
    pemilik?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmisiTugasUncheckedUpdateManyWithoutSubmisiTugasInput = {
    id?: IntFieldUpdateOperationsInput | number
    pemilik?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PresensiPesertaCreateManyUsersInput = {
    id?: number
    hadir?: boolean | null
    jadwal?: number | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type SubmisiTugasCreateManyUsersInput = {
    id?: number
    tugas?: number | null
    nama?: string | null
    path?: string | null
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type PresensiPesertaUpdateWithoutUsersInput = {
    hadir?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    JadwalPresensis?: JadwalPresensisUpdateOneWithoutPresensiPesertaInput
  }

  export type PresensiPesertaUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    hadir?: NullableBoolFieldUpdateOperationsInput | boolean | null
    jadwal?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmisiTugasUpdateWithoutUsersInput = {
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Tugas?: TugasUpdateOneWithoutSubmisiTugasInput
  }

  export type SubmisiTugasUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    tugas?: NullableIntFieldUpdateOperationsInput | number | null
    nama?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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
  export const dmmf: runtime.DMMF.Document;
}