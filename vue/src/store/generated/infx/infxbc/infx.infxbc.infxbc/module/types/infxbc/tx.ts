/* eslint-disable */
import { Reader, util, configure, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'infx.infxbc.infxbc'

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgCreateUserV01 {
  creator: string
  name: string
  role: string
}

export interface MsgCreateUserV01Response {
  id: number
}

export interface MsgUpdateUserV01 {
  creator: string
  id: number
  name: string
  role: string
}

export interface MsgUpdateUserV01Response {}

export interface MsgDeleteUserV01 {
  creator: string
  id: number
}

export interface MsgDeleteUserV01Response {}

const baseMsgCreateUserV01: object = { creator: '', name: '', role: '' }

export const MsgCreateUserV01 = {
  encode(message: MsgCreateUserV01, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    if (message.role !== '') {
      writer.uint32(26).string(message.role)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateUserV01 {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateUserV01 } as MsgCreateUserV01
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.name = reader.string()
          break
        case 3:
          message.role = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCreateUserV01 {
    const message = { ...baseMsgCreateUserV01 } as MsgCreateUserV01
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = String(object.role)
    } else {
      message.role = ''
    }
    return message
  },

  toJSON(message: MsgCreateUserV01): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.name !== undefined && (obj.name = message.name)
    message.role !== undefined && (obj.role = message.role)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateUserV01>): MsgCreateUserV01 {
    const message = { ...baseMsgCreateUserV01 } as MsgCreateUserV01
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role
    } else {
      message.role = ''
    }
    return message
  }
}

const baseMsgCreateUserV01Response: object = { id: 0 }

export const MsgCreateUserV01Response = {
  encode(message: MsgCreateUserV01Response, writer: Writer = Writer.create()): Writer {
    if (message.id !== 0) {
      writer.uint32(8).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateUserV01Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateUserV01Response } as MsgCreateUserV01Response
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

  fromJSON(object: any): MsgCreateUserV01Response {
    const message = { ...baseMsgCreateUserV01Response } as MsgCreateUserV01Response
    if (object.id !== undefined && object.id !== null) {
      message.id = Number(object.id)
    } else {
      message.id = 0
    }
    return message
  },

  toJSON(message: MsgCreateUserV01Response): unknown {
    const obj: any = {}
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgCreateUserV01Response>): MsgCreateUserV01Response {
    const message = { ...baseMsgCreateUserV01Response } as MsgCreateUserV01Response
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id
    } else {
      message.id = 0
    }
    return message
  }
}

const baseMsgUpdateUserV01: object = { creator: '', id: 0, name: '', role: '' }

export const MsgUpdateUserV01 = {
  encode(message: MsgUpdateUserV01, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    if (message.name !== '') {
      writer.uint32(26).string(message.name)
    }
    if (message.role !== '') {
      writer.uint32(34).string(message.role)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateUserV01 {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateUserV01 } as MsgUpdateUserV01
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
          message.name = reader.string()
          break
        case 4:
          message.role = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgUpdateUserV01 {
    const message = { ...baseMsgUpdateUserV01 } as MsgUpdateUserV01
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
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = String(object.role)
    } else {
      message.role = ''
    }
    return message
  },

  toJSON(message: MsgUpdateUserV01): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    message.name !== undefined && (obj.name = message.name)
    message.role !== undefined && (obj.role = message.role)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUpdateUserV01>): MsgUpdateUserV01 {
    const message = { ...baseMsgUpdateUserV01 } as MsgUpdateUserV01
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
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.role !== undefined && object.role !== null) {
      message.role = object.role
    } else {
      message.role = ''
    }
    return message
  }
}

const baseMsgUpdateUserV01Response: object = {}

export const MsgUpdateUserV01Response = {
  encode(_: MsgUpdateUserV01Response, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUpdateUserV01Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUpdateUserV01Response } as MsgUpdateUserV01Response
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

  fromJSON(_: any): MsgUpdateUserV01Response {
    const message = { ...baseMsgUpdateUserV01Response } as MsgUpdateUserV01Response
    return message
  },

  toJSON(_: MsgUpdateUserV01Response): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgUpdateUserV01Response>): MsgUpdateUserV01Response {
    const message = { ...baseMsgUpdateUserV01Response } as MsgUpdateUserV01Response
    return message
  }
}

const baseMsgDeleteUserV01: object = { creator: '', id: 0 }

export const MsgDeleteUserV01 = {
  encode(message: MsgDeleteUserV01, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.id !== 0) {
      writer.uint32(16).uint64(message.id)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteUserV01 {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteUserV01 } as MsgDeleteUserV01
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

  fromJSON(object: any): MsgDeleteUserV01 {
    const message = { ...baseMsgDeleteUserV01 } as MsgDeleteUserV01
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

  toJSON(message: MsgDeleteUserV01): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.id !== undefined && (obj.id = message.id)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteUserV01>): MsgDeleteUserV01 {
    const message = { ...baseMsgDeleteUserV01 } as MsgDeleteUserV01
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

const baseMsgDeleteUserV01Response: object = {}

export const MsgDeleteUserV01Response = {
  encode(_: MsgDeleteUserV01Response, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteUserV01Response {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteUserV01Response } as MsgDeleteUserV01Response
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

  fromJSON(_: any): MsgDeleteUserV01Response {
    const message = { ...baseMsgDeleteUserV01Response } as MsgDeleteUserV01Response
    return message
  },

  toJSON(_: MsgDeleteUserV01Response): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgDeleteUserV01Response>): MsgDeleteUserV01Response {
    const message = { ...baseMsgDeleteUserV01Response } as MsgDeleteUserV01Response
    return message
  }
}

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  CreateUserV01(request: MsgCreateUserV01): Promise<MsgCreateUserV01Response>
  UpdateUserV01(request: MsgUpdateUserV01): Promise<MsgUpdateUserV01Response>
  DeleteUserV01(request: MsgDeleteUserV01): Promise<MsgDeleteUserV01Response>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
  }
  CreateUserV01(request: MsgCreateUserV01): Promise<MsgCreateUserV01Response> {
    const data = MsgCreateUserV01.encode(request).finish()
    const promise = this.rpc.request('infx.infxbc.infxbc.Msg', 'CreateUserV01', data)
    return promise.then((data) => MsgCreateUserV01Response.decode(new Reader(data)))
  }

  UpdateUserV01(request: MsgUpdateUserV01): Promise<MsgUpdateUserV01Response> {
    const data = MsgUpdateUserV01.encode(request).finish()
    const promise = this.rpc.request('infx.infxbc.infxbc.Msg', 'UpdateUserV01', data)
    return promise.then((data) => MsgUpdateUserV01Response.decode(new Reader(data)))
  }

  DeleteUserV01(request: MsgDeleteUserV01): Promise<MsgDeleteUserV01Response> {
    const data = MsgDeleteUserV01.encode(request).finish()
    const promise = this.rpc.request('infx.infxbc.infxbc.Msg', 'DeleteUserV01', data)
    return promise.then((data) => MsgDeleteUserV01Response.decode(new Reader(data)))
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
