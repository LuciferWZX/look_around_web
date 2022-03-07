import {FC} from "react";
import {useMount} from "ahooks";

const Layouts:FC=({children,...props})=>{
  useMount(()=>{
    console.log("进入Layouts")
  })
  return(
    <div>
      {children}
    </div>
  )
}
export default Layouts
