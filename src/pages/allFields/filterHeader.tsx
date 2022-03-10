import { FC } from "react";
import { RadioButtonGroup } from "@/components";
// import { RadioButtonGroupOption } from "@/components/radioButtonGroup/type";

const FilterHeader:FC=() => {
  // const [options,setOptions]=useState<RadioButtonGroupOption[]>([
  //   {value:'all',label:"全部"}
  // ])
  return(
    <div>
      <RadioButtonGroup options={[]} />
    </div>
  )
}
export default FilterHeader
