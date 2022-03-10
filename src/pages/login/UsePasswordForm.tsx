import React, { FC } from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import { StyledForm } from "@/pages/login/style";
import { IconFont } from "@/components";
import { useRequest } from "ahooks";
import { passwordLogin } from "@/services/user";
import { ResCode, ResResult } from "@/types/response.interface";
import { IUser } from "@/types/user.interface";
import { useModel } from "umi";
import { setAll } from "@/utils/store";
import { StoreKey } from "@/types/store.enum";
interface Values{
  username:string
  password:string
  agreement:boolean
}
interface IProps {

}
const UsePasswordForm:FC<IProps>=()=>{
  const { refresh } = useModel('@@initialState',model => ({
    refresh:model.refresh
  }));
  const [form] = Form.useForm<Values>()
  const {run:login,loading:loginLoading}=useRequest(passwordLogin,{
    manual:true,
    onSuccess:async (result?:ResResult<IUser>)=>{
      if(result?.code === ResCode.SUCCESS){//登陆成功
        setAll({//设置数据到localstorage
          [StoreKey.ID]:result.data.id,
          [StoreKey.TOKEN]:result.data.token
        })
        message.success(result.msg)
        await refresh()

      }
    },
    debounceWait:300
  })
  const submit=(values:Values)=>{
    login({username:values.username,password:values.password})
  }
  return(
    <StyledForm>
      <Form
        className={'ant-form'}
        onFinish={submit}
        form={form}>
        <Form.Item
          name="username"
          rules={[
            {required:true,message:"请输入用户名或者邮箱"},
            {whitespace:true,message:"请输入用户名或者邮箱"},
          ]}>
          <Input prefix={<IconFont type={'icon-username'}/>} placeholder={"用户名/邮箱"}  />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {required:true,message:"请输入密码"},
          ]}>
          <Input.Password prefix={<IconFont type={'icon-password'}/>} placeholder={"密码"}  />
        </Form.Item>
        {/*<Form.Item extra="我们必须确认您是否是机器人.">*/}
        {/*  <Row gutter={8}>*/}
        {/*    <Col span={14}>*/}
        {/*      <Form.Item*/}
        {/*        name="captcha"*/}
        {/*        noStyle*/}
        {/*        rules={[{ required: true, message: '请输入您收到的验证码' }]}*/}
        {/*      >*/}
        {/*        <Input placeholder={'请输入验证码'}/>*/}
        {/*      </Form.Item>*/}
        {/*    </Col>*/}
        {/*    <Col span={10}>*/}
        {/*      <Button block={true}>获取验证码</Button>*/}
        {/*    </Col>*/}
        {/*  </Row>*/}
        {/*</Form.Item>*/}

        <Form.Item>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            noStyle
            rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('您还为接受协议')),
              },
            ]}
          >
            <Checkbox>我已经阅读 <a href="">用户协议</a></Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            忘记密码
          </a>
        </Form.Item>
        <Form.Item>
          <Button loading={loginLoading} icon={<IconFont type={'icon-login-'}/>} type="primary" htmlType={"submit"} block={true}>登录</Button>
        </Form.Item>
      </Form>
    </StyledForm>
  )
}
export default UsePasswordForm
