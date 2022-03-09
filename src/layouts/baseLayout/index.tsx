import {FC} from "react";
import {useMount} from "ahooks";
import BaseHeader from "@/layouts/baseLayout/Header";
import { BodyBox, StyledBaseLayout, StyledContent } from "@/layouts/baseLayout/style";
import BasicSider from "@/layouts/baseLayout/Sider";

const BaseLayout:FC=({children})=>{
  useMount(()=>{
    console.log("进入BaseLayout")
  })
  return(
    <StyledBaseLayout>
      <BaseHeader />
      <StyledContent>
        <BasicSider/>
        <BodyBox>
          {children}
        </BodyBox>
      </StyledContent>

    </StyledBaseLayout>
  )
}
export default BaseLayout
