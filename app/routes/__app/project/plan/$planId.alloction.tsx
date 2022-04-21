import { useParams } from "@remix-run/react";

export default function AssignPlan() {
  const parms = useParams();

  return (
    <> 分配计划{parms.planId}</>
  )
}