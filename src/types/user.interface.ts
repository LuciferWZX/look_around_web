export interface IUser {
  id:string
  username:string
  nickname:string
  token:string
  avatar:string|null,
  active: boolean
  createTime: string
  email: null|string
  password: string
  permissions: 0
  status: 0
  updateTime: string
}
