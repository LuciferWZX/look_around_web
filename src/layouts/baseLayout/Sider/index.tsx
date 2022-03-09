import { FC, useState } from "react";
import { StyledBasicSider } from "@/layouts/baseLayout/Sider/style";
import MenuBox from "@/layouts/baseLayout/Sider/MenuBox";
import { Affix } from "antd";

const BasicSider:FC = () => {
  const [container, setContainer] = useState<HTMLDivElement | null>(null);
  return (
    <StyledBasicSider ref={setContainer}>
      <Affix target={() => container} offsetTop={1}>
        <div className={'sider-menu'}>
          <MenuBox/>
        </div>
      </Affix>
    </StyledBasicSider>
  )
}
export default BasicSider
