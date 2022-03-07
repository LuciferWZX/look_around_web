import request from "@/utils/request";
import { Method } from "@/types/response.interface";

/**
 * 账号密码登录
 * @param data
 */
export const passwordLogin=async (data:{username:string,password:string}):Promise<any>=>{
  return request('/user/login',{
    method:Method.POST,
    data:data
  })
}
/**
 * 根据id和token查询用户信息
 * @param id
 */
export const queryUserInfo=async (id:string):Promise<any>=>{
  return request(`/user/${id}`,{
    method:Method.GET,
  })
}
