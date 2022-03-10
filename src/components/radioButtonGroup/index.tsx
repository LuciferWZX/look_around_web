import { FC } from "react";
import { RadioButtonGroupOption } from "@/components/radioButtonGroup/type";
import { StyledRadioButtonGroup } from "@/components/radioButtonGroup/style";
interface IProps {
  options:RadioButtonGroupOption[]
}
const RadioButtonGroup:FC<IProps> = () => {
  return(
    <StyledRadioButtonGroup>xxx</StyledRadioButtonGroup>
  )
}
export default RadioButtonGroup
