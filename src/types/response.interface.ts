export interface ResResult<T> {
  code:number,
  msg:string,
  data:T
}
export enum ResCode{
  SUCCESS=0
}
export enum Method {
  POST='post',
  GET='get',
}
