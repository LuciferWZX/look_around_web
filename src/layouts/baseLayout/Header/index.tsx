import { FC } from "react";
import { StyledHeader } from "@/layouts/baseLayout/Header/style";
import AvatarBlock from "@/layouts/baseLayout/Header/AvatarBlock";

const BaseHeader:FC = () => {
  return(
    <StyledHeader>
      <div>logo</div>
      <AvatarBlock />
    </StyledHeader>
  )
}
export default BaseHeader
