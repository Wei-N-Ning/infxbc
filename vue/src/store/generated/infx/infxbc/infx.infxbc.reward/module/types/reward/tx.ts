/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'infx.infxbc.reward'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateRewardV01 {
  creator: string
  userId: string
  amount: string
}

export interface MsgCreateRewardV01Response {
  id: number
}

export interface MsgUpdateRewardV01 {
  creator: string
  id: number
  userId: string
  amount: string
}

export interface MsgUpdateRewardV01Response {}

export interface MsgDeleteRewardV01 {
  creator: string
  id: number
}

export interface MsgDeleteRewardV01Response {}

const baseMsgCreateRewardV01: object = { creator: '', userId: '', amount: '' }

export const MsgCreateRewardV01 = {
  encode(message: MsgCreateRewardV01, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.userId !== '') {
      writer.uint32(18).string(message.userId)
    }
    if (message.amount !== '') {
      writer.uint32(26).string(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateRewardV01 {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateRewardV01 } as MsgCreateRewardV01
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.userId = reader.string()
          break
        case 3:
          message.amount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateRewardV01 {
    const message = { ...baseMsgCreateRewardV01 } as MsgCreateRewardV01
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId)
    } else {
      message.userId = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    return message
  },

  toJSON(message: MsgCreateRewardV01): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.userId !== undefined && (obj.userId = message.userId)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateRewardV01>): MsgCreateRewardV01 {
    const message = { ...baseMsgCreateRewardV01 } as MsgCreateRewardV01
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId
    } else {
      message.userId = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    return message
  }
}

const baseMsgCreateRewardV01Response: object = { id: 0 }

export const MsgCreateRewardV01Response = {
  encode(message: MsgCreateRewardV01Response, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateRewardV01Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateRewardV01Response } as MsgCreateRewardV01Response
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

  fromJSON(object: any): MsgCreateRewardV01Response {
    const message = { ...baseMsgCreateRewardV01Response } as MsgCreateRewardV01Response
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateRewardV01Response): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateRewardV01Response>): MsgCreateRewardV01Response {
    const message = { ...baseMsgCreateRewardV01Response } as MsgCreateRewardV01Response
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateRewardV01: object = { creator: '', id: 0, userId: '', amount: '' }

export const MsgUpdateRewardV01 = {
  encode(message: MsgUpdateRewardV01, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.userId !== '') {
      writer.uint32(26).string(message.userId)
    }
    if (message.amount !== '') {
      writer.uint32(34).string(message.amount)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateRewardV01 {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateRewardV01 } as MsgUpdateRewardV01
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.userId = reader.string()
          break
        case 4:
          message.amount = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateRewardV01 {
    const message = { ...baseMsgUpdateRewardV01 } as MsgUpdateRewardV01
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = String(object.userId)
    } else {
      message.userId = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = String(object.amount)
    } else {
      message.amount = ''
    }
    return message
  },

  toJSON(message: MsgUpdateRewardV01): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.userId !== undefined && (obj.userId = message.userId)
    message.amount !== undefined && (obj.amount = message.amount)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateRewardV01>): MsgUpdateRewardV01 {
    const message = { ...baseMsgUpdateRewardV01 } as MsgUpdateRewardV01
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    if (object.userId !== undefined && object.userId !== null) {
      message.userId = object.userId
    } else {
      message.userId = ''
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = object.amount
    } else {
      message.amount = ''
    }
    return message
  }
}

const baseMsgUpdateRewardV01Response: object = {}

export const MsgUpdateRewardV01Response = {
  encode(_: MsgUpdateRewardV01Response, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateRewardV01Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateRewardV01Response } as MsgUpdateRewardV01Response
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgUpdateRewardV01Response {
    const message = { ...baseMsgUpdateRewardV01Response } as MsgUpdateRewardV01Response
    return message
  },

  toJSON(_: MsgUpdateRewardV01Response): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateRewardV01Response>): MsgUpdateRewardV01Response {
    const message = { ...baseMsgUpdateRewardV01Response } as MsgUpdateRewardV01Response
    return message
  }
}

const baseMsgDeleteRewardV01: object = { creator: '', id: 0 }

export const MsgDeleteRewardV01 = {
  encode(message: MsgDeleteRewardV01, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteRewardV01 {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteRewardV01 } as MsgDeleteRewardV01
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.id = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteRewardV01 {
    const message = { ...baseMsgDeleteRewardV01 } as MsgDeleteRewardV01
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgDeleteRewardV01): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteRewardV01>): MsgDeleteRewardV01 {
    const message = { ...baseMsgDeleteRewardV01 } as MsgDeleteRewardV01
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgDeleteRewardV01Response: object = {}

export const MsgDeleteRewardV01Response = {
  encode(_: MsgDeleteRewardV01Response, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteRewardV01Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteRewardV01Response } as MsgDeleteRewardV01Response
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): MsgDeleteRewardV01Response {
    const message = { ...baseMsgDeleteRewardV01Response } as MsgDeleteRewardV01Response
    return message
  },

  toJSON(_: MsgDeleteRewardV01Response): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteRewardV01Response>): MsgDeleteRewardV01Response {
    const message = { ...baseMsgDeleteRewardV01Response } as MsgDeleteRewardV01Response
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateRewardV01(request: MsgCreateRewardV01): Promise<MsgCreateRewardV01Response>
  UpdateRewardV01(request: MsgUpdateRewardV01): Promise<MsgUpdateRewardV01Response>
  DeleteRewardV01(request: MsgDeleteRewardV01): Promise<MsgDeleteRewardV01Response>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateRewardV01(request: MsgCreateRewardV01): Promise<MsgCreateRewardV01Response> {
    const data = MsgCreateRewardV01.encode(request).finish()
    const promise = this.rpc.request('infx.infxbc.reward.Msg', 'CreateRewardV01', data)
    return promise.then((data) => MsgCreateRewardV01Response.decode(new Reader(data)))
  }

  UpdateRewardV01(request: MsgUpdateRewardV01): Promise<MsgUpdateRewardV01Response> {
    const data = MsgUpdateRewardV01.encode(request).finish()
    const promise = this.rpc.request('infx.infxbc.reward.Msg', 'UpdateRewardV01', data)
    return promise.then((data) => MsgUpdateRewardV01Response.decode(new Reader(data)))
  }

  DeleteRewardV01(request: MsgDeleteRewardV01): Promise<MsgDeleteRewardV01Response> {
    const data = MsgDeleteRewardV01.encode(request).finish()
    const promise = this.rpc.request('infx.infxbc.reward.Msg', 'DeleteRewardV01', data)
    return promise.then((data) => MsgDeleteRewardV01Response.decode(new Reader(data)))
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
