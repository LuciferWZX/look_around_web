import React, { FC, memo } from "react";
import { useModel } from "@@/plugin-model/useModel";
import { Avatar, Dropdown, Menu, message, Modal } from "antd";
import { StyledAvatarBlock } from "@/layouts/baseLayout/Header/style";
import { IconFont } from "@/components";
import styled from "styled-components";
import { MenuInfo } from "rc-menu/lib/interface";
import { removeUserInfo } from "@/utils/store";

const StyledMenu = styled(Menu)`
  .user-info{
    max-width:150px;
    font-size: 12px;
    .nickname{
      font-weight: bold;
      color: #1890ff;
    }
    .username{
      color:orange;
    }
  }
  .menu-item{
    :hover{
      color: #1890ff;
      font-weight: bold;
    }
  }
  .center-text{
    text-align: center;
  }
`
const AvatarBlock:FC = () => {
  const { user,setUser } = useModel('@@initialState',model => ({
    user:model.initialState,
    setUser:model.setInitialState
  }));
  const clickMenu=(info: MenuInfo)=>{
    switch (info.key) {
      case 'logout':{
        openConfirmModal()
        break;
      }
      default:{
        message.warn({content:"尚未完成",key:'menu'})
      }
    }
  }
  const openConfirmModal=()=>{
    Modal.confirm({
      title: '确定退出登录吗？',
      icon: <IconFont type={'icon-warning'} />,
      content: '主动退出将不会保存您的任何信息，下次需要重新登录即可',
      transitionName:'ant-move-up',
      onOk:async ()=> {
        console.log('已退出登录');
        removeUserInfo()
        await setUser(null)
      },
      okButtonProps:{
        type: 'default',
        danger:true
      },
      onCancel() {
        console.log('Cancel');
      },
      cancelButtonProps:{
        type: 'primary',
      }
    });
  }
  const renderDropdown=():React.ReactElement=>{
    return (
      <StyledMenu onClick={clickMenu}>
        <Menu.Item className={'user-info'} key={'user-info'}>
          <div className={'nickname'}>{user?.nickname}</div>
          <div className={'username'}>{user?.username}</div>
        </Menu.Item>
        <Menu.Item className={'menu-item center-text'} key={"setting"} icon={<IconFont type={'icon-setting'}/>}>
          系统设置
        </Menu.Item>
        <Menu.Item className={'menu-item center-text'} key={"user-setting"} icon={<IconFont type={'icon-UserSettings'}/>}>
          用户设置
        </Menu.Item>
        <Menu.Divider/>
        <Menu.Item className={'center-text'} danger={true} icon={<IconFont type={'icon-logout-'}/>} key={"logout"}>
          退出登录
        </Menu.Item>
      </StyledMenu>
    )
  }
  return(
    <StyledAvatarBlock>
      <Dropdown trigger={['click']} overlay={renderDropdown()}>
        <Avatar className={'user-avatar'} src={user?.avatar} icon={<IconFont type={'icon-21'}/>} />
      </Dropdown>
    </StyledAvatarBlock>
  )
}
export default memo(AvatarBlock)
