import store from 'storejs';
import { StoreKey } from "@/types/store.enum";
export const setAll=(data:any)=>{
  store.set(data)
}
export const set=(key:string,value:any)=>{
  store.set(key,value)
}
export const get=(key:string):any=>{
  return store.get(key)
}
export const removeUserInfo=()=>{
  store.remove(StoreKey.ID)
  store.remove(StoreKey.TOKEN)
}
