import { Tabs } from 'antd';

import {
  Outlet,
  useParams,
  useNavigate,
  useLocation
} from "@remix-run/react";

const { TabPane } = Tabs;

export default function Detail() {
  const params = useParams();  
  const navigate = useNavigate();
  const location = useLocation();
  const { assetNo } = params;
  const tabList = [
    {
      key: 'cashFlow',
      tab: '资金流水',
    },
    {
      key: 'analysis',
      tab: '资产分析',
    },
  ];
  const onTab = (tabKey: string) => {
    navigate(`/project/asset/${assetNo}/${tabKey}`);
  };

  return (
    <div>
      <h2>资产清单: {assetNo}</h2>

      <Tabs
        activeKey={location.pathname.replace(`/project/asset/${assetNo}/`, '')}
        onChange={onTab}
        type="card"
      >
        {tabList.map(item => (
          <TabPane tab={<span>{item.tab}</span>} key={item.key} />
        ))}
      </Tabs>
      <Outlet />

    </div>
  );
}
