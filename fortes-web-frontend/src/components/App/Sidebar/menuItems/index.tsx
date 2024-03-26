import { businessOutline, cashOutline, homeOutline, peopleOutline } from "ionicons/icons";


export const menuItems = [
  {
    icon: homeOutline,
    label: 'INÍCIO',
    url: '/',
    isActive: '',
  },
  {
    icon: businessOutline,
    label: 'PRODUTOS',
    url: '/products',
  },
  {
    icon: peopleOutline,
    label: 'FORNECEDORES',
    url: '/suppliers',
  },
  {
    icon: cashOutline,
    label: 'PEDIDOS',
    url: '/orders',
  },
];
