import {
  Link,
  Outlet,
  useParams
} from "@remix-run/react";
export default function Detail() {
  const params = useParams();
  return (
    <div>
      <h2>资产清单: {params.assetNo}</h2>
      <div>
       
        <ul>
          <li>
            <Link to={`/project/asset/${params.assetNo}/cashFlow`}>资金流水</Link>
          </li>
          <li>
            <Link to={`/project/asset/${params.assetNo}/analysis`}>资产分析</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
