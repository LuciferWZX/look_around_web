import { FC } from "react";
import { StyledHorizonMenusBlock, StyledMenuItem } from "@/layouts/baseLayout/Header/style";

const HorizonMenusBlock:FC = () => {
  return(
    <StyledHorizonMenusBlock mode="horizontal" className={'horizon-menu'}>
      <StyledMenuItem>
        首页
      </StyledMenuItem>
      <StyledMenuItem>
        首页
      </StyledMenuItem>
      <StyledMenuItem>
        首页
      </StyledMenuItem>
    </StyledHorizonMenusBlock>
  )
}
export default HorizonMenusBlock
