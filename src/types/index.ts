export interface EligibilityStatus {
    status: 'pending' | 'eligible' | 'ineligible' | 'error';
    message: string;
  }
  
  export interface WalletEligibilityProps {
    publicKey: string;
  }