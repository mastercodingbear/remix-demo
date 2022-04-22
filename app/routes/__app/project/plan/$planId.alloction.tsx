import { Link, useParams } from "@remix-run/react";

export default function AssignPlan() {
  const parms = useParams();

  return (
    <>
      <h2>分配计划页面</h2>

      <p><Link to={`/project/plan/${parms.planId}/alloction/455666`}>分配计划详情</Link></p>
    </>
  )
}