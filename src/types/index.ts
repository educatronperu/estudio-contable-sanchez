export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: 'CONTABLE' | 'TRIBUTARIO' | 'LEGAL' | 'FINANCIERO' | 'RECURSOS_HUMANOS';
  imageUrl: string;
  details?: string[];
}

export interface ClientItem {
  id: string;
  name: string;
  category: string;
  logo?: string;
}

export interface AccountingProposal {
  id: string;
  title: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

export interface CompanyInfo {
  name: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  facebook: string;
  email: string;
  address: string;
  heroTitle: string;
  heroSubtitle: string;
}