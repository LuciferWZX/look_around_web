import {IUser} from "@/types/user.interface";

export default function (initState:IUser|null) {
    if(initState){
      return {
        isLogin: true
      }
    }
    return {
      isLogin:false
    }
}
