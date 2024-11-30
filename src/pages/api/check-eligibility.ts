import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { wallet } = req.body

    // Example eligibility criteria
    const isEligible = wallet && 
      wallet.length > 0 && 
      // Add your specific eligibility checks here
      true

    res.status(200).json({ 
      eligible: isEligible,
      wallet: wallet
    })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}