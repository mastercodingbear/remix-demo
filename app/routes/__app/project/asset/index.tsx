import { Link } from "@remix-run/react";

export default function List() {
  return (
    <>

      <h2>资产列表页面</h2>
      <p><Link to='/project/asset/12366/cashFlow'>资产详情Tab</Link></p>

    </>
  )
}