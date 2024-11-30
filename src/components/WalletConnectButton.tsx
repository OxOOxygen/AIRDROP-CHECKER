"use client"
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'

export const WalletConnectButton = () => {
  return (
    <WalletMultiButton 
      className="w-full !bg-blue-500 hover:!bg-blue-600 transition-colors duration-300 rounded-lg py-3 text-white"
    />
  )
}