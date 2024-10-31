import { ChainId } from '@uniswap/sdk-core'
import FLAME_LOGO_URL from '../assets/images/flame-logo.png'

export enum SupportedNetwork {
  FLAME,
}

export type NetworkInfo = {
  chainId: ChainId
  id: SupportedNetwork
  route: string
  name: string
  imageURL: string
  bgColor: string
  primaryColor: string
  secondaryColor: string
}

export const FlameNetworkInfo: NetworkInfo = {
  chainId: 253368190 as ChainId,
  id: SupportedNetwork.FLAME,
  route: '',
  name: 'Flame',
  bgColor: '#050A0D',
  primaryColor: '#F19727',
  secondaryColor: '#2172E5',
  imageURL: FLAME_LOGO_URL,
}

export const SUPPORTED_NETWORK_VERSIONS: NetworkInfo[] = [FlameNetworkInfo]
