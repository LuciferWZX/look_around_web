import {FC, useEffect} from "react";
import {StyledChild, StyledUserLayout} from "@/layouts/userLayout/style";
import { useModel,history } from "umi";

const UserLayout:FC=({children})=>{
  const { user } = useModel('@@initialState',model => ({
    user:model.initialState
  }));
  //当用户登录之后这边检测到用户登录就跳转到首页
  useEffect(()=>{
    if(user){
      history.replace('/base/home')
    }
  },[user])
  return(
    <StyledUserLayout>
      <h1>Look Around</h1>
      <StyledChild>
        {children}
      </StyledChild>

    </StyledUserLayout>
  )
}
export default UserLayout
