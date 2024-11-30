"use client"
import { CheckCircle, XCircle, AlertTriangle, Info } from 'lucide-react'
import { EligibilityStatus } from '../types'

interface EligibilityBannerProps {
  eligibility: EligibilityStatus | null;
}

export const EligibilityBanner = ({ eligibility }: EligibilityBannerProps) => {
  if (!eligibility) return null;

  const bannerStyles = {
    eligible: 'bg-green-100 border-green-400 text-green-800',
    ineligible: 'bg-red-100 border-red-400 text-red-800',
    error: 'bg-yellow-100 border-yellow-400 text-yellow-800',
    pending: 'bg-blue-100 border-blue-400 text-blue-800'
  }

  const icons = {
    eligible: <CheckCircle className="w-6 h-6 text-green-600 mr-2" />,
    ineligible: <XCircle className="w-6 h-6 text-red-600 mr-2" />,
    error: <AlertTriangle className="w-6 h-6 text-yellow-600 mr-2" />,
    pending: <Info className="w-6 h-6 text-blue-600 mr-2" />
  }

  return (
    <div className={`flex items-center p-4 mb-4 rounded-lg border ${bannerStyles[eligibility.status]}`}>
      {icons[eligibility.status]}
      <p className="font-medium">{eligibility.message}</p>
    </div>
  )
}