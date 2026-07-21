import { CompanyInfo, ServiceItem, ClientItem, AccountingProposal } from '@/types';

export const siteConfig = {
  name: "Estudio Contable & Auditoría Sánchez",
  contact: {
    whatsapp: "+51942902585",
    phone: "+51 942 902 585",
    facebook: "https://www.facebook.com/profile.php?id=100088066835082"
  }
};

export const companyData: CompanyInfo = {
  name: "Estudio Contable & Auditoría Sánchez",
  tagline: "Seguridad tributaria y contable para potenciar el crecimiento de tu empresa",
  phone: "+51 942 902 585",
  whatsapp: "51942902585",
  facebook: "https://www.facebook.com/profile.php?id=100088066835082",
  email: "contacto@estudiocontablesanchez.com",
  address: "Chiclayo / Lambayeque, Perú",
  heroTitle: "Evita multas de SUNAT y toma el control total del dinero de tu empresa",
  heroSubtitle: "Brindamos asesoría integral contable, tributaria y financiera con la máxima confidencialidad y respaldo profesional que tu negocio necesita."
};

export const servicesData: ServiceItem[] = [
  {
    id: '1',
    title: 'Asesoría Contable Gerencial',
    category: 'CONTABLE',
    description: 'Contabilidades internas, externas y mixtas. Elaboración, análisis e interpretación de Estados Financieros proyectados para la toma de decisiones.',
    imageUrl: '/images/services/contable.jpg',
    details: [
      'Contabilidad computarizada de última generación',
      'Elaboración de plan contable general empresarial',
      'Análisis de costos, gastos y reestructuración contable'
    ]
  },
  {
    id: '2',
    title: 'Planeamiento y Auditoría Tributaria',
    category: 'TRIBUTARIO',
    description: 'Protegemos tu patrimonio maximizando beneficios tributarios, prevención de contingencias y defensa en fiscalizaciones de SUNAT.',
    imageUrl: '/images/services/tributario.jpg',
    details: [
      'Devolución de impuestos y recuperación de bienes comisados',
      'Determinación exacta de obligaciones tributarias',
      'Auditoría preventiva ante la SUNAT'
    ]
  },
  {
    id: '3',
    title: 'Soporte Legal Empresarial',
    category: 'LEGAL',
    description: 'Constitución, formalización, licencias de funcionamiento, contratos civiles/empresariales y reorganización de sociedades.',
    imageUrl: '/images/services/legal.jpg',
    details: [
      'Constitución, fusión, disolución y liquidación de empresas',
      'Elaboración de contratos civiles y comerciales',
      'Gestión integral de licencias municipales'
    ]
  },
  {
    id: '4',
    title: 'Gestión Financiera & Créditos',
    category: 'FINANCIERO',
    description: 'Elaboración de Estados Financieros optimizados para solicitudes de crédito bancario, leasing y planes de inversión.',
    imageUrl: '/images/services/financiero.jpg',
    details: [
      'Asesoría en créditos financieros y leasing empresarial',
      'Auditoría y planeamiento de flujo de caja',
      'Soporte directo para la obtención de capital de trabajo'
    ]
  },
  {
    id: '5',
    title: 'Recursos Humanos y Planillas',
    category: 'RECURSOS_HUMANOS',
    description: 'Selección de personal clave, cálculo de liquidaciones, contratos laborales y gestión de planillas con emisión de PDT.',
    imageUrl: '/images/services/rrhh.jpg',
    details: [
      'Búsqueda y selección de talento especializado',
      'Elaboración de contratos laborales según legislación vigente',
      'Asesoría en procesos de liquidación e inspecciones SUNAFIL'
    ]
  }
];

export const clientsData: ClientItem[] = [
  { id: '1', name: 'Santeón', category: 'Gastronomía & Coctelería', logo: "/images/clients/1.jpg" },
  { id: '2', name: 'SERENA', category: 'Gastronomía & Coctelería', logo: "/images/clients/2.jpg" },
  { id: '3', name: 'Oh! Baby', category: 'Confecciones Uniformes', logo: "/images/clients/3.jpg" },
  { id: '4', name: 'Cix Pizzas & Hamburguesas', category: 'Alimentos y Bebidas', logo: "/images/clients/4.jpg" },
  { id: '5', name: 'AGRO ABASTOS SAC', category: 'Insumos Agrícolas', logo: "/images/clients/5.jpg" },
  { id: '6', name: 'Confecciones Mark', category: 'Fábrica Textil', logo: "/images/clients/6.jpg" },
  { id: '7', name: 'El Transportista (Grupo PECSA)', category: 'Estación de Servicios', logo: "/images/clients/7.jpg" },
  { id: '8', name: 'Punto Textil', category: 'Bordados y Tejidos', logo: "/images/clients/8.jpg" },
  { id: '9', name: 'VICUS', category: 'Agua Tratada', logo: "/images/clients/9.jpg" },
  { id: '10', name: 'BIO ZAP', category: 'Laboratorio Clínico', logo: "/images/clients/10.jpg" },
  { id: '11', name: 'Comercializadora JUANY', category: 'Distribuidora Alicorp', logo: "/images/clients/11.jpg" },
  { id: '12', name: 'Hermanos Saavedra', category: 'Distribuidor Agua y Gas', logo: "/images/clients/12.jpg" },
  { id: '13', name: 'Inversiones Salazar DLT', category: 'Carrocerías Mototaxi', logo: "/images/clients/13.jpg" },
  { id: '14', name: 'Planet Motor\'s', category: 'Carrocerías Mototaxi', logo: "/images/clients/14.jpg" },
  { id: '15', name: 'Sembrío Fortuna', category: 'Cultivo Caña de Azúcar', logo: "/images/clients/15.jpg" },
  { id: '16', name: 'Iluminaciones Lesly', category: 'Eventos & Luces LED', logo: "/images/clients/16.jpg" },
  { id: '17', name: 'NESAAP', category: 'Empresa de Transportes', logo: "/images/clients/17.jpg" },
  { id: '18', name: 'SOLVEX', category: 'Servicios Tecnológicos', logo: "/images/clients/18.jpg" }
];

export const proposalsData: AccountingProposal[] = [
  {
    id: '1',
    title: 'Contabilidad Externa',
    description: 'Ideal para empresas que prefieren delegar el 100% del procesamiento contable y declaraciones tributarias en nuestras instalaciones.',
    features: [
      'Elaboración de impuestos vía PDT / SUNAT Operaciones en Línea',
      'Entrega mensual de Boletas de Pago e impresos',
      'Balance Situacional y Proyectado al 31 de diciembre',
      'Asesor/especialista asignado con visitas constantes a su empresa'
    ]
  },
  {
    id: '2',
    title: 'Contabilidad Mixta',
    description: 'Para negocios con asistente contable interno que requieran supervisión gerencial, auditoría de cierres y validación de PDTs.',
    recommended: true,
    features: [
      'Supervisión presencial y remota del equipo contable interno',
      'Validación de cierres mensuales antes de la declaración',
      'Elaboración y presentación de la Declaración Jurada Anual',
      'Atención prioritaria para trámites bancarios y crediticios'
    ]
  },
  {
    id: '3',
    title: 'Contabilidad Interna',
    description: 'Implementación directa de sistemas contables computarizados en las oficinas de su empresa con monitoreo continuo.',
    features: [
      'Manejo completo de sistemas contables en sus instalaciones',
      'Auditoría financiera continua e informes gerenciales',
      'Diagnóstico situacional, de funciones y políticas de control',
      'Acompañamiento en la toma de decisiones estratégicas'
    ]
  }
];