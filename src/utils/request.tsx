import { extend, ResponseError } from "umi-request";
import { message, notification } from "antd";
import { get, removeUserInfo } from "@/utils/store";
import { StoreKey } from "@/types/store.enum";
import { IconFont } from "@/components";
const errorHandler=(error:ResponseError)=> {
  const {response,data}=error
  if(data){
    switch (response.status) {
      case 401:{
        console.log("error--->401");
        message.error({content:data.msg,key:response.status})
        //401说明token过期，移除老的数据
        removeUserInfo()
        break
      }
      case 404: {
        console.log("error--->404");
        message.error({content:data.msg,key:response.status})
        break
      }
      case 504:{
        if(!response.ok){
          return notification.open({
            message: '服务器未响应',
            description: '请检查您的网络是否连接，如已连接请稍后重试',
            key:'504',
            icon: <IconFont type={"icon-error"} style={{ color: '#e74c3c' }} />,
            closeIcon: <IconFont type={"icon-close"} />
        });
        }
        console.log(1111,response,data);
        message.error({content:data.msg,key:response.status})
        break
      }
      default:{

        console.log(`error--->${response.status}`);
      }
    }
    return data
  }
  return error
}
const request = extend({
  prefix: '/api/v1',
  timeout: 6000,
  errorHandler:errorHandler,
  headers: {
    'Content-Type': 'application/json',
  },
});

// request interceptor, change url or options.
request.interceptors.request.use((url, options) => {
  const token = get(StoreKey.TOKEN)
  if(token){
    // @ts-ignore
    options.headers['Authorization'] = `Bearer ${token}`
  }
  return {
    url: url,
    options: options,
  };
});
// response interceptor, change response
request.interceptors.response.use(async (response) => {
  return response
});

export default request
