import {IUser} from "@/types/user.interface";
import { get } from "@/utils/store";
import { StoreKey } from "@/types/store.enum";
import { queryUserInfo } from "@/services/user";
import { ResCode, ResResult } from "@/types/response.interface";

export async function getInitialState():Promise<IUser | null>{
  console.log("%c[初始化数据:开始]",'color:#7bed9f;font-weight:bold;')

  const id = get(StoreKey.ID)
  const token = get(StoreKey.TOKEN)
  if(id && token){
    const result:ResResult<IUser>|undefined =await queryUserInfo(id)
    if(result?.code === ResCode.SUCCESS){
      console.log("%c[查询到用户]",'color:#7bed9f;font-weight:bold;')
      console.log("%c[初始化数据:结束]",'color:#7bed9f;font-weight:bold;')
      return result.data
    }
  }
  console.log('%c[未查询到用户]','color:red;font-weight:bold;' );
  console.log("%c[初始化数据:结束]",'color:#7bed9f;font-weight:bold;')
  return null
}
