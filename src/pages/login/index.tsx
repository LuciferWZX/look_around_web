import {FC} from "react";
import { Tabs, Tooltip } from "antd";
import { StyledLogin } from "@/pages/login/style";
import UsePasswordForm from "@/pages/login/UsePasswordForm";
const { TabPane } = Tabs;
const LoginPage:FC=()=>{
  return(
    <StyledLogin>
      <Tabs defaultActiveKey={'use-password'}>
        <TabPane disabled={true} tab={<Tooltip title={'尽情期待'} color="black">免密码登录</Tooltip>} key="no-password">
          免密码登录
        </TabPane>
        <TabPane tab="密码登录" key="use-password">
          <UsePasswordForm />
        </TabPane>
      </Tabs>
    </StyledLogin>
  )
}
export default LoginPage
