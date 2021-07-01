/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { UserV01 } from '../infxbc/userV01'

export const protobufPackage = 'infx.infxbc.infxbc'

/** GenesisState defines the infxbc module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  userV01List: UserV01[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  userV01Count: number
}

const baseGenesisState: object = { userV01Count: 0 }

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.userV01List) {
      UserV01.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.userV01Count !== 0) {
      writer.uint32(16).uint64(message.userV01Count)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.userV01List = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.userV01List.push(UserV01.decode(reader, reader.uint32()))
          break
        case 2:
          message.userV01Count = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.userV01List = []
    if (object.userV01List !== undefined && object.userV01List !== null) {
      for (const e of object.userV01List) {
        message.userV01List.push(UserV01.fromJSON(e))
      }
    }
    if (object.userV01Count !== undefined && object.userV01Count !== null) {
      message.userV01Count = Number(object.userV01Count)
    } else {
      message.userV01Count = 0
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.userV01List) {
      obj.userV01List = message.userV01List.map((e) => (e ? UserV01.toJSON(e) : undefined))
    } else {
      obj.userV01List = []
    }
    message.userV01Count !== undefined && (obj.userV01Count = message.userV01Count)
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.userV01List = []
    if (object.userV01List !== undefined && object.userV01List !== null) {
      for (const e of object.userV01List) {
        message.userV01List.push(UserV01.fromPartial(e))
      }
    }
    if (object.userV01Count !== undefined && object.userV01Count !== null) {
      message.userV01Count = object.userV01Count
    } else {
      message.userV01Count = 0
    }
    return message
  }
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
