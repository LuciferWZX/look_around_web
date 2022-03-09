import styled, { css } from "styled-components";
import { Menu } from "antd";


export const StyledBasicSider = styled.div`
  background-color: white;
  user-select: none;
  .sider-menu{
    height: calc(100vh - 46px);
  }
`
//左侧头像部分
export const StyledSiderAvatar = styled.div`

`
//左侧菜单组件
export const StyledMenuBox = styled(Menu)<{selectedKeys?:string[]}>`
  ${({selectedKeys})=>{
    if(selectedKeys && selectedKeys?.length>0 && selectedKeys[0]==="/base/friends-fields"){
      return css`
        .ant-menu-item-selected{
          color:#be2edd;
          ::after{
            border-right-color:#be2edd;
          }
        }
      `
    }
    if(selectedKeys && selectedKeys?.length>0 && selectedKeys[0]==="/base/around-people"){
      return css`
        .ant-menu-item-selected{
          color:orange;
          ::after{
            border-right-color:orange ;
          }
        }
      `
    }
  }}
  //.friends-fields{
  //  .ant-menu-title-content{
  //    color:#be2edd;
  //  }
  //}
  //.around-people{
  //  .ant-menu-title-content{
  //    color:orange;
  //  }
  //}
`
export const StyledMenuItem = styled(Menu.Item)`
  padding: 0 10px;
`
