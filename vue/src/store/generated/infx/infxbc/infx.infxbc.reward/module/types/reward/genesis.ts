/* eslint-disable */
import * as Long from 'long'
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import { RewardV01 } from '../reward/rewardV01'

export const protobufPackage = 'infx.infxbc.reward'

/** GenesisState defines the reward module's genesis state. */
export interface GenesisState {
  /** this line is used by starport scaffolding # genesis/proto/state */
  rewardV01List: RewardV01[]
  /** this line is used by starport scaffolding # genesis/proto/stateField */
  rewardV01Count: number
}

const baseGenesisState: object = { rewardV01Count: 0 }

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.rewardV01List) {
      RewardV01.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.rewardV01Count !== 0) {
      writer.uint32(16).uint64(message.rewardV01Count)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.rewardV01List = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.rewardV01List.push(RewardV01.decode(reader, reader.uint32()))
          break
        case 2:
          message.rewardV01Count = longToNumber(reader.uint64() as Long)
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
    message.rewardV01List = []
    if (object.rewardV01List !== undefined && object.rewardV01List !== null) {
      for (const e of object.rewardV01List) {
        message.rewardV01List.push(RewardV01.fromJSON(e))
      }
    }
    if (object.rewardV01Count !== undefined && object.rewardV01Count !== null) {
      message.rewardV01Count = Number(object.rewardV01Count)
    } else {
      message.rewardV01Count = 0
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.rewardV01List) {
      obj.rewardV01List = message.rewardV01List.map((e) => (e ? RewardV01.toJSON(e) : undefined))
    } else {
      obj.rewardV01List = []
    }
    message.rewardV01Count !== undefined && (obj.rewardV01Count = message.rewardV01Count)
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.rewardV01List = []
    if (object.rewardV01List !== undefined && object.rewardV01List !== null) {
      for (const e of object.rewardV01List) {
        message.rewardV01List.push(RewardV01.fromPartial(e))
      }
    }
    if (object.rewardV01Count !== undefined && object.rewardV01Count !== null) {
      message.rewardV01Count = object.rewardV01Count
    } else {
      message.rewardV01Count = 0
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
