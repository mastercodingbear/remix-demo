
import { useParams } from "@remix-run/react";
export default function AddPlan() {
  const params = useParams();
  return (
    <>计划详情: {params.planId}</>
  )
}