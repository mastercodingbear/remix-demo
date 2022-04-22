import {
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
} from '@ant-design/icons';

export type MenuItem = {
  name: string;
  icon?: JSX.Element | string;
  path: string;
  hideInMenu?: boolean,
  children?: MenuItem[];
} 

const menuData = [
  {
    name: 'home',
    icon: <CloudOutlined />,
    path: '/home'
  },
  {
    name: '项目管理',
    icon: <ShopOutlined />,
    path: '/project',
    children: [
      {
        name: '计划',
        path: '/project/plan'
      },
      {
        name: '资产',
        path: '/project/asset'
      }
    ]
  },
  {
    name: 'dashboard',
    icon: <BarChartOutlined />,
    path: '/dashboard'
  },
];

export default menuData;