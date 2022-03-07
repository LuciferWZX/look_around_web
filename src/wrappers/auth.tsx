import {FC, Fragment} from "react";
import {Redirect, useAccess } from "umi";

const AuthWrapper:FC=({children})=>{
  const {isLogin}=useAccess()
  if(isLogin){
    return (
      <Fragment>
        {children}
      </Fragment>
    )
  }
  return (
    <Redirect to="/user/login" />
  )
}
export default AuthWrapper
