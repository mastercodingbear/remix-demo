

import { Outlet, Link } from "@remix-run/react";

import { Layout, Menu } from 'antd';

import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,

  VideoCameraOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

export default function AppLayout() {

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
        <div className="layot-logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['home']}>
          <Menu.Item key="home" icon={<CloudOutlined />}>
            <Link to='/home'>home</Link>
          </Menu.Item>
         
          <SubMenu key="project" icon={<ShopOutlined />} title="项目管理">
            <Menu.Item key="plan">
             <Link to='/project/plan/list'>计划</Link>
            </Menu.Item>

            <Menu.Item key="assets">资产</Menu.Item>
          </SubMenu>
          <Menu.Item key="" icon={<BarChartOutlined />}>
            <Link to='/dashboard'>dashboard</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: 200 }}>
        <Header className="site-layout-background" style={{ padding: 0 }} />
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