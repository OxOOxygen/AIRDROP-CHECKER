"use client"
import { Info, CheckCircle, AlertTriangle } from 'lucide-react'

export const AirdropDetails = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
      <h2 className="text-xl font-semibold mb-3 text-gray-800">Airdrop Details</h2>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-center">
          <Info className="w-5 h-5 mr-2 text-blue-500" />
          Total Airdrop: 1,000,000 $TOKEN
        </li>
        <li className="flex items-center">
          <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
          Eligibility Criteria: Active Solana Wallet
        </li>
        <li className="flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2 text-yellow-500" />
          Snapshot Date: June 15, 2024
        </li>
      </ul>
    </div>
  )
}