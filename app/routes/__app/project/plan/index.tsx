import { Link } from '@remix-run/react';
export default function Plan() {
  return (
    <>
      <h2>计划列表页面</h2>
      <p><Link to='/project/plan/addPlan'>新增计划</Link></p>
      <p><Link to='/project/plan/1234344/edit'>编辑计划</Link></p>
      <p><Link to='/project/plan/1234344'>查看计划详情</Link></p>
      <p><Link to='/project/plan/1234344/alloction'>分配计划</Link></p>
    </>
  )
}