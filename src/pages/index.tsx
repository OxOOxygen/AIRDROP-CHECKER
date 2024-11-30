import { useState } from 'react'
import { useWallet } from '@solana/wallet-adapter-react'
import { AirdropDetails } from '@/components/AirdropDetails'
import { EligibilityBanner } from '@/components/EligibilityBanner'
import { WalletConnectButton } from '@/components/WalletConnectButton'
import { EligibilityStatus } from '@/types'

export default function Home() {
  const { publicKey, connected } = useWallet()
  const [eligibility, setEligibility] = useState<EligibilityStatus | null>(null)
  const [loading, setLoading] = useState(false)

  const checkAirdropEligibility = async () => {
    if (!publicKey) return

    setLoading(true)
    try {
      const response = await fetch('/api/check-eligibility', {
        method: 'POST',
        body: JSON.stringify({ wallet: publicKey.toString() }),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const data = await response.json()
      
      setEligibility(data.eligible ? {
        status: 'eligible',
        message: 'Congratulations! You are eligible for the airdrop.'
      } : {
        status: 'ineligible',
        message: 'Sorry, you do not meet the airdrop eligibility criteria.'
      })
    } catch (error) {
      console.error('Eligibility check failed', error)
      setEligibility({
        status: 'error',
        message: 'Error checking eligibility. Please try again.'
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-6">
          <h1 className="text-3xl font-bold text-white text-center">Solana Airdrop</h1>
          <p className="text-center text-white/80 mt-2">Check Your Eligibility</p>
        </div>

        <div className="p-6">
          <WalletConnectButton />

          <AirdropDetails />

          {connected && (
            <div className="mb-6">
              <div className="bg-gray-100 rounded-lg p-3 flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                    {publicKey?.toString()[0]}
                  </div>
                  <span className="font-medium text-gray-700">
                    {publicKey?.toString().slice(0, 6)}...{publicKey?.toString().slice(-6)}
                  </span>
                </div>
                <button 
                  onClick={checkAirdropEligibility}
                  disabled={loading}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 disabled:opacity-50 transition-colors"
                >
                  {loading ? 'Checking...' : 'Check Eligibility'}
                </button>
              </div>
            </div>
          )}

          <EligibilityBanner eligibility={eligibility} />

          <div className="text-sm text-gray-500 text-center">
            <p>Powered by Solana • Connect Safely • No Gas Fees</p>
          </div>
        </div>
      </div>
    </div>
  )
}