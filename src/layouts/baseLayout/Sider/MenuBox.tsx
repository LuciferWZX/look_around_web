import React, { FC, memo } from "react";
import { StyledMenuBox, StyledMenuItem } from "@/layouts/baseLayout/Sider/style";
import { IconFont } from "@/components";
import { useLocation,history } from "umi";
import { MenuInfo } from "rc-menu/lib/interface";

const MenuBox:FC = () => {
  const location = useLocation();
  //点击侧边按钮
  const clickSiderMenu=(info: MenuInfo)=>{
    history.push(info.key)
  }
  return (
    <StyledMenuBox
      selectedKeys={[location.pathname]} mode="inline" onClick={clickSiderMenu}>
      <StyledMenuItem key={'/base/all-fields'} icon={<IconFont type={'icon-quanzi'} />}>
        圈子
      </StyledMenuItem>
      <StyledMenuItem key={'/base/friends-fields'} icon={<IconFont type={'icon-icon_pengyouquan'} />}>
        朋友圈
      </StyledMenuItem>
      <StyledMenuItem key={'/base/around-people'} icon={<IconFont type={'icon-fujin'} />}>
        附近的人
      </StyledMenuItem>
    </StyledMenuBox>
  )
}
export default memo(MenuBox)
