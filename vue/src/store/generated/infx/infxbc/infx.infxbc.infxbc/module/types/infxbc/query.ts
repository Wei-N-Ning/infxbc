/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { UserV01 } from '../infxbc/userV01'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'

export const protobufPackage = 'infx.infxbc.infxbc'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetUserV01Request {
  id: number
}

export interface QueryGetUserV01Response {
  UserV01: UserV01 | undefined
}

export interface QueryAllUserV01Request {
  pagination: PageRequest | undefined
}

export interface QueryAllUserV01Response {
  UserV01: UserV01[]
  pagination: PageResponse | undefined
}

const baseQueryGetUserV01Request: object = { id: 0 }

export const QueryGetUserV01Request = {
  encode(message: QueryGetUserV01Request, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetUserV01Request {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetUserV01Request } as QueryGetUserV01Request
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetUserV01Request {
    const message = { ...baseQueryGetUserV01Request } as QueryGetUserV01Request
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetUserV01Request): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetUserV01Request>): QueryGetUserV01Request {
    const message = { ...baseQueryGetUserV01Request } as QueryGetUserV01Request
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetUserV01Response: object = {}

export const QueryGetUserV01Response = {
  encode(message: QueryGetUserV01Response, writer: Writer = Writer.create()): Writer {
    if (message.UserV01 !== undefined) {
      UserV01.encode(message.UserV01, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetUserV01Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetUserV01Response } as QueryGetUserV01Response
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.UserV01 = UserV01.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetUserV01Response {
    const message = { ...baseQueryGetUserV01Response } as QueryGetUserV01Response
    if (object.UserV01 !== undefined && object.UserV01 !== null) {
      message.UserV01 = UserV01.fromJSON(object.UserV01)
    } else {
      message.UserV01 = undefined
    }
    return message
  },

  toJSON(message: QueryGetUserV01Response): unknown {
    const obj: any = {}
    message.UserV01 !== undefined && (obj.UserV01 = message.UserV01 ? UserV01.toJSON(message.UserV01) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetUserV01Response>): QueryGetUserV01Response {
    const message = { ...baseQueryGetUserV01Response } as QueryGetUserV01Response
    if (object.UserV01 !== undefined && object.UserV01 !== null) {
      message.UserV01 = UserV01.fromPartial(object.UserV01)
    } else {
      message.UserV01 = undefined
    }
    return message
  }
}

const baseQueryAllUserV01Request: object = {}

export const QueryAllUserV01Request = {
  encode(message: QueryAllUserV01Request, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllUserV01Request {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllUserV01Request } as QueryAllUserV01Request
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllUserV01Request {
    const message = { ...baseQueryAllUserV01Request } as QueryAllUserV01Request
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllUserV01Request): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllUserV01Request>): QueryAllUserV01Request {
    const message = { ...baseQueryAllUserV01Request } as QueryAllUserV01Request
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllUserV01Response: object = {}

export const QueryAllUserV01Response = {
  encode(message: QueryAllUserV01Response, writer: Writer = Writer.create()): Writer {
    for (const v of message.UserV01) {
      UserV01.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllUserV01Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllUserV01Response } as QueryAllUserV01Response
    message.UserV01 = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.UserV01.push(UserV01.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAllUserV01Response {
    const message = { ...baseQueryAllUserV01Response } as QueryAllUserV01Response
    message.UserV01 = []
    if (object.UserV01 !== undefined && object.UserV01 !== null) {
      for (const e of object.UserV01) {
        message.UserV01.push(UserV01.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllUserV01Response): unknown {
    const obj: any = {}
    if (message.UserV01) {
      obj.UserV01 = message.UserV01.map((e) => (e ? UserV01.toJSON(e) : undefined))
    } else {
      obj.UserV01 = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllUserV01Response>): QueryAllUserV01Response {
    const message = { ...baseQueryAllUserV01Response } as QueryAllUserV01Response
    message.UserV01 = []
    if (object.UserV01 !== undefined && object.UserV01 !== null) {
      for (const e of object.UserV01) {
        message.UserV01.push(UserV01.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Queries a userV01 by id. */
  UserV01(request: QueryGetUserV01Request): Promise<QueryGetUserV01Response>
  /** Queries a list of userV01 items. */
  UserV01All(request: QueryAllUserV01Request): Promise<QueryAllUserV01Response>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  UserV01(request: QueryGetUserV01Request): Promise<QueryGetUserV01Response> {
    const data = QueryGetUserV01Request.encode(request).finish()
    const promise = this.rpc.request('infx.infxbc.infxbc.Query', 'UserV01', data)
    return promise.then((data) => QueryGetUserV01Response.decode(new Reader(data)))
  }

  UserV01All(request: QueryAllUserV01Request): Promise<QueryAllUserV01Response> {
    const data = QueryAllUserV01Request.encode(request).finish()
    const promise = this.rpc.request('infx.infxbc.infxbc.Query', 'UserV01All', data)
    return promise.then((data) => QueryAllUserV01Response.decode(new Reader(data)))
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

type Builtin = Date | Function | Uint8Array | string | number | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
