import { Reducer } from "umi"


export interface UserModelState {
  user:null
}
export interface UserModelType {
  namespace:'user',
  state:UserModelState
  effects:{

  },
  reducers:{
    save:Reducer<UserModelState>
  }
}
const initState:UserModelState={
  user:null
}
const userModel:UserModelType={
  namespace:"user",
  state:initState,
  effects:{},
  reducers:{
    save(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    }
  }
}
export default userModel
