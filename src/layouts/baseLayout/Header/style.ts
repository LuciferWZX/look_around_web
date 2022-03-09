import styled from "styled-components";
import { Menu } from "antd";

export const StyledHeader = styled.header`
  height:46px;
  padding:0 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 8px #f0f1f2;
  display: flex;
  align-items: center;
  justify-content:space-between;
  position: sticky;
  top:0;
  z-index: 1;
`
export const StyledAvatarBlock = styled.div`
  cursor:default;
    .user-avatar{
      cursor:pointer;
      background-color: #1890ff;
      font-size: 24px;
    }
  .nickname{
    font-size: 12px;
    font-weight: bold;
    color: #1890ff;
  }
`
export const StyledHorizonMenusBlock = styled(Menu)`
    border-bottom: unset;
`
export const StyledMenuItem = styled(Menu.Item)`
  padding: 0 10px;
`
