import { BigNumber } from '@ethersproject/bignumber'
import { Connector } from '@web3-react/types'
import ms from 'ms'

import { SupportedNetwork } from './networks'

export const MAX_UINT128 = BigNumber.from(2).pow(128).sub(1)

export const WETH_ADDRESSES = ['0x61b7794b6a0cc383b367c327b91e5ba85915a071']

export const TOKEN_HIDE: { [key: string]: string[] } = {
  [SupportedNetwork.FLAME]: ['0x2b1ddc7057604a44450bdec51810693103c2fe61'],
}

export const POOL_HIDE: { [key: string]: string[] } = {
  [SupportedNetwork.FLAME]: ['0x1b8e6c4946c2779d78ee921fb217b3243c920372'],
}

export const START_BLOCKS: { [key: string]: number } = {
  [SupportedNetwork.FLAME]: 40000,
}

export interface WalletInfo {
  connector?: Connector
  name: string
  iconName: string
  description: string
  href: string | null
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const AVERAGE_L1_BLOCK_TIME = ms(`10s`)

export const NetworkContextName = 'NETWORK'

// SDN OFAC addresses
export const BLOCKED_ADDRESSES: string[] = [
  '0x7F367cC41522cE07553e823bf3be79A889DEbe1B',
  '0xd882cFc20F52f2599D84b8e8D58C7FB62cfE344b',
  '0x901bb9583b24D97e995513C6778dc6888AB6870e',
  '0xA7e5d5A720f06526557c513402f2e6B5fA20b008',
]
