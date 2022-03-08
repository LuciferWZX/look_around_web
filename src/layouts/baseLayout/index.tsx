import {FC} from "react";
import {useMount} from "ahooks";
import BaseHeader from "@/layouts/baseLayout/Header";

const BaseLayout:FC=({children})=>{
  useMount(()=>{
    console.log("进入BaseLayout")
  })
  return(
    <div>
      <BaseHeader />
      {children}
    </div>
  )
}
export default BaseLayout
