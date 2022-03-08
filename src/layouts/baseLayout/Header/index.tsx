import { FC } from "react";
import { StyledHeader } from "@/layouts/baseLayout/Header/style";
import AvatarBlock from "@/layouts/baseLayout/Header/AvatarBlock";
import HorizonMenusBlock from "@/layouts/baseLayout/Header/HorizonMenusBlock";

const BaseHeader:FC = () => {
  return(
    <StyledHeader>
      <HorizonMenusBlock />
      <AvatarBlock />
    </StyledHeader>
  )
}
export default BaseHeader
