import React, { useMemo } from 'react'
import styled from 'styled-components'
import { isAddress } from 'utils'
import Logo from '../Logo'
import { useActiveNetworkVersion } from 'state/application/hooks'
import { ChainId } from '@uniswap/sdk-core'
import { WETH_ADDRESSES } from '../../constants'

export function chainIdToNetworkName(networkId: ChainId) {
  switch (networkId) {
    case 253368190 as ChainId:
      return 'flame'
    default:
      return 'flame'
  }
}

const getTokenLogoURL = ({ address, chainId }: { address: string; chainId: ChainId }) => {
  // Check if address is WETH
  if (WETH_ADDRESSES.includes(address.toLowerCase())) {
    return 'https://raw.githubusercontent.com/astriaorg/uniswap-v3-interface/refs/heads/astria/src/assets/images/celestia-logo.png'
  }

  return (
    `https://raw.githubusercontent.com/astriaorg/uniswap-v3-interface/refs/heads/astria/src/assets/token-logos/` +
    `${chainIdToNetworkName(chainId)}/${address}.png`
  )
}

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ size }) => size};
  background-color: rgba(255, 255, 255, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.75);
  color: ${({ theme }) => theme.text4};
`

export default function CurrencyLogo({
  address,
  size = '24px',
  style,
  ...rest
}: {
  address?: string
  size?: string
  style?: React.CSSProperties
}) {
  const [activeNetwork] = useActiveNetworkVersion()

  const checkSummed = isAddress(address)

  const srcs: string[] = useMemo(() => {
    const checkSummed = isAddress(address)
    if (checkSummed && address) {
      return [getTokenLogoURL({ address: checkSummed, chainId: activeNetwork.chainId })]
    }
    return []
  }, [checkSummed, address, activeNetwork.chainId])

  return <StyledLogo size={size} srcs={srcs} alt={'token logo'} style={style} {...rest} />
}
