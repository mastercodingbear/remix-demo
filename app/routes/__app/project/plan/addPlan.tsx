import { useParams } from "@remix-run/react";

export default function AddPlan() {
  const parms = useParams();
  console.log(parms)
  const isEdit = parms.planId;  
  return (
    <>{isEdit ? '编辑' : '新增'} 计划</>
  )
}