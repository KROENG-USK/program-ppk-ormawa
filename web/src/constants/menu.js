import { adminRoot } from './defaultValues';

const data = [
  {
    id: 'Dashboards',
    icon: 'iconsminds-dashboard',
    label: 'menu.dashboards',
    to: `${adminRoot}/dashboards`,
  },
  {
    id: 'Monitoring',
    icon: 'iconsminds-monitor-analytics',
    label: 'menu.monitoring',
    to: `${adminRoot}/monitoring`,
    subs: [
      {
        icon: 'iconsminds-plant',
        label: 'menu.awp',
        to: `${adminRoot}/monitoring/awp`,
      },
      {
        icon: 'simple-icon-energy',
        label: 'menu.listrik',
        to: `${adminRoot}/monitoring/listrik`,
      },
    ],
  },
  {
    id: 'Market',
    icon: 'iconsminds-shop',
    label: 'menu.market',
    to: `${adminRoot}/market`,
    subs: [
      {
        icon: 'iconsminds-remove-cart',
        label: 'menu.jual',
        to: `${adminRoot}/market/jual`,
      },
      {
        icon: 'iconsminds-add-cart',
        label: 'menu.beli',
        to: `${adminRoot}/market/beli`,
      },
      {
        icon: 'iconsminds-shopping-basket',
        label: 'menu.stok',
        to: `${adminRoot}/market/stok`,
      },
    ],
  },
];
export default data;
