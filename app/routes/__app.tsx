

import { Outlet, Link, useLocation } from "@remix-run/react";
import { Layout, Menu } from 'antd';
import type { MenuItem } from '~/const/menuConfig';
import menuData from '~/const/menuConfig';
import { urlToList } from '~/utils';

const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

export default function AppLayout() {
  const location = useLocation();
  const currnetMenuKeys = urlToList(location.pathname);
  console.log(currnetMenuKeys)
  /**
 * get SubMenu or Item
 */
  const getSubMenuOrItem = (item: MenuItem) => {
    if (item.children && item.children.some(child => child.name)) {
      const childrenItems = getNavMenuItems(item.children);
      // 当无子菜单时就不展示菜单
      if (childrenItems?.length > 0) {
        return (
          <SubMenu
            title={item.name}
            key={item.path}
            icon={item.icon}
          >
            {childrenItems}
          </SubMenu>
        );
      }
      return null;
    } else {
      return (
        <Menu.Item key={item.path}>
          <Link to={item.path} >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        </Menu.Item>
      );
    }
  };

  /**
   * 获得菜单子节点
   * @memberof SiderMenu
   */
  const getNavMenuItems = (menusData: MenuItem[]) => {
 
    return menusData
      .filter(item => item.name && !item.hideInMenu)
      .map(item => {
        // make dom
        return getSubMenuOrItem(item);
      })
      .filter(item => item);
  };

  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div className="layout-logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={currnetMenuKeys} defaultOpenKeys={currnetMenuKeys}>
          {getNavMenuItems(menuData)}
        </Menu>

      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} >
          <div className="header-left"></div>
          <div className="header-right">
            <Link to='/login'>登录</Link>
          </div>
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>

          <div className="site-layout-background" style={{ minHeight: '78vh', textAlign: 'center' }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>杭州决对科技 ©2022 Created by kang ding</Footer>
      </Layout>
    </Layout>
  )
}

