import {IUser} from "@/types/user.interface";
import { get } from "@/utils/store";
import { StoreKey } from "@/types/store.enum";
import { queryUserInfo } from "@/services/user";
import { ResCode, ResResult } from "@/types/response.interface";

export async function getInitialState():Promise<IUser | null>{
  console.log("%c初始化数据:start",'color:#7bed9f')
  console.log("%c初始化数据:done",'color:#7bed9f')
  const id = get(StoreKey.ID)
  const token = get(StoreKey.TOKEN)
  if(id && token){
    const result:ResResult<IUser> =await queryUserInfo(id)
    console.log('查询到用户:', result );
    if(result.code === ResCode.SUCCESS){
      return result.data
    }
  }
  console.log('%c未查询到用户','color:red;' );
  return null
}
