/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { RewardV01 } from '../reward/rewardV01'
import { PageRequest, PageResponse } from '../cosmos/base/query/v1beta1/pagination'

export const protobufPackage = 'infx.infxbc.reward'

/** this line is used by starport scaffolding # 3 */
export interface QueryGetRewardRequest {
  userId: string
}

export interface QueryGetRewardResponse {
  reward: RewardV01 | undefined
}

export interface QueryGetRewardV01Request {
  id: number
}

export interface QueryGetRewardV01Response {
  RewardV01: RewardV01 | undefined
}

export interface QueryAllRewardV01Request {
  pagination: PageRequest | undefined
}

export interface QueryAllRewardV01Response {
  RewardV01: RewardV01[]
  pagination: PageResponse | undefined
}

const baseQueryGetRewardRequest: object = { userId: '' }

export const QueryGetRewardRequest = {
  encode(message: QueryGetRewardRequest, writer: Writer = Writer.create()): Writer {
    if (message.userId !== '') {
      writer.uint32(10).string(message.userId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRewardRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetRewardRequest } as QueryGetRewardRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.userId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetRewardRequest {
    const message = { ...baseQueryGetRewardRequest } as QueryGetRewardRequest
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId)
    } else {
      message.userId = ''
    }
    return message
  },

  toJSON(message: QueryGetRewardRequest): unknown {
    const obj: any = {}
    message.userId !== undefined && (obj.userId = message.userId)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetRewardRequest>): QueryGetRewardRequest {
    const message = { ...baseQueryGetRewardRequest } as QueryGetRewardRequest
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId
    } else {
      message.userId = ''
    }
    return message
  }
}

const baseQueryGetRewardResponse: object = {}

export const QueryGetRewardResponse = {
  encode(message: QueryGetRewardResponse, writer: Writer = Writer.create()): Writer {
    if (message.reward !== undefined) {
      RewardV01.encode(message.reward, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRewardResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetRewardResponse } as QueryGetRewardResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.reward = RewardV01.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetRewardResponse {
    const message = { ...baseQueryGetRewardResponse } as QueryGetRewardResponse
    if (object.reward !== undefined && object.reward !== null) {
      message.reward = RewardV01.fromJSON(object.reward)
    } else {
      message.reward = undefined
    }
    return message
  },

  toJSON(message: QueryGetRewardResponse): unknown {
    const obj: any = {}
    message.reward !== undefined && (obj.reward = message.reward ? RewardV01.toJSON(message.reward) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetRewardResponse>): QueryGetRewardResponse {
    const message = { ...baseQueryGetRewardResponse } as QueryGetRewardResponse
    if (object.reward !== undefined && object.reward !== null) {
      message.reward = RewardV01.fromPartial(object.reward)
    } else {
      message.reward = undefined
    }
    return message
  }
}

const baseQueryGetRewardV01Request: object = { id: 0 }

export const QueryGetRewardV01Request = {
  encode(message: QueryGetRewardV01Request, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRewardV01Request {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetRewardV01Request } as QueryGetRewardV01Request
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

  fromJSON(object: any): QueryGetRewardV01Request {
    const message = { ...baseQueryGetRewardV01Request } as QueryGetRewardV01Request
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: QueryGetRewardV01Request): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetRewardV01Request>): QueryGetRewardV01Request {
    const message = { ...baseQueryGetRewardV01Request } as QueryGetRewardV01Request
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseQueryGetRewardV01Response: object = {}

export const QueryGetRewardV01Response = {
  encode(message: QueryGetRewardV01Response, writer: Writer = Writer.create()): Writer {
    if (message.RewardV01 !== undefined) {
      RewardV01.encode(message.RewardV01, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryGetRewardV01Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryGetRewardV01Response } as QueryGetRewardV01Response
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.RewardV01 = RewardV01.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryGetRewardV01Response {
    const message = { ...baseQueryGetRewardV01Response } as QueryGetRewardV01Response
    if (object.RewardV01 !== undefined && object.RewardV01 !== null) {
      message.RewardV01 = RewardV01.fromJSON(object.RewardV01)
    } else {
      message.RewardV01 = undefined
    }
    return message
  },

  toJSON(message: QueryGetRewardV01Response): unknown {
    const obj: any = {}
    message.RewardV01 !== undefined && (obj.RewardV01 = message.RewardV01 ? RewardV01.toJSON(message.RewardV01) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryGetRewardV01Response>): QueryGetRewardV01Response {
    const message = { ...baseQueryGetRewardV01Response } as QueryGetRewardV01Response
    if (object.RewardV01 !== undefined && object.RewardV01 !== null) {
      message.RewardV01 = RewardV01.fromPartial(object.RewardV01)
    } else {
      message.RewardV01 = undefined
    }
    return message
  }
}

const baseQueryAllRewardV01Request: object = {}

export const QueryAllRewardV01Request = {
  encode(message: QueryAllRewardV01Request, writer: Writer = Writer.create()): Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllRewardV01Request {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllRewardV01Request } as QueryAllRewardV01Request
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

  fromJSON(object: any): QueryAllRewardV01Request {
    const message = { ...baseQueryAllRewardV01Request } as QueryAllRewardV01Request
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllRewardV01Request): unknown {
    const obj: any = {}
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllRewardV01Request>): QueryAllRewardV01Request {
    const message = { ...baseQueryAllRewardV01Request } as QueryAllRewardV01Request
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  }
}

const baseQueryAllRewardV01Response: object = {}

export const QueryAllRewardV01Response = {
  encode(message: QueryAllRewardV01Response, writer: Writer = Writer.create()): Writer {
    for (const v of message.RewardV01) {
      RewardV01.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAllRewardV01Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryAllRewardV01Response } as QueryAllRewardV01Response
    message.RewardV01 = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.RewardV01.push(RewardV01.decode(reader, reader.uint32()))
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

  fromJSON(object: any): QueryAllRewardV01Response {
    const message = { ...baseQueryAllRewardV01Response } as QueryAllRewardV01Response
    message.RewardV01 = []
    if (object.RewardV01 !== undefined && object.RewardV01 !== null) {
      for (const e of object.RewardV01) {
        message.RewardV01.push(RewardV01.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryAllRewardV01Response): unknown {
    const obj: any = {}
    if (message.RewardV01) {
      obj.RewardV01 = message.RewardV01.map((e) => (e ? RewardV01.toJSON(e) : undefined))
    } else {
      obj.RewardV01 = []
    }
    message.pagination !== undefined && (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryAllRewardV01Response>): QueryAllRewardV01Response {
    const message = { ...baseQueryAllRewardV01Response } as QueryAllRewardV01Response
    message.RewardV01 = []
    if (object.RewardV01 !== undefined && object.RewardV01 !== null) {
      for (const e of object.RewardV01) {
        message.RewardV01.push(RewardV01.fromPartial(e))
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
  /** Queries a list of getReward items. */
  GetReward(request: QueryGetRewardRequest): Promise<QueryGetRewardResponse>
  /** Queries a rewardV01 by id. */
  RewardV01(request: QueryGetRewardV01Request): Promise<QueryGetRewardV01Response>
  /** Queries a list of rewardV01 items. */
  RewardV01All(request: QueryAllRewardV01Request): Promise<QueryAllRewardV01Response>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  GetReward(request: QueryGetRewardRequest): Promise<QueryGetRewardResponse> {
    const data = QueryGetRewardRequest.encode(request).finish()
    const promise = this.rpc.request('infx.infxbc.reward.Query', 'GetReward', data)
    return promise.then((data) => QueryGetRewardResponse.decode(new Reader(data)))
  }

  RewardV01(request: QueryGetRewardV01Request): Promise<QueryGetRewardV01Response> {
    const data = QueryGetRewardV01Request.encode(request).finish()
    const promise = this.rpc.request('infx.infxbc.reward.Query', 'RewardV01', data)
    return promise.then((data) => QueryGetRewardV01Response.decode(new Reader(data)))
  }

  RewardV01All(request: QueryAllRewardV01Request): Promise<QueryAllRewardV01Response> {
    const data = QueryAllRewardV01Request.encode(request).finish()
    const promise = this.rpc.request('infx.infxbc.reward.Query', 'RewardV01All', data)
    return promise.then((data) => QueryAllRewardV01Response.decode(new Reader(data)))
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
