import {FC} from "react";
import {useMount} from "ahooks";

const BaseLayout:FC=({children})=>{
  useMount(()=>{
    console.log("进入BaseLayout")
  })
  return(
    <div>
      BaseLayout
      {children}
    </div>
  )
}
export default BaseLayout
