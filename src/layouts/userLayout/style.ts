import styled from "styled-components";
import loginSvg from 'public/svgs/login_2.svg'
export const StyledUserLayout = styled.div`
  height:100vh;
  display: flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background-image: url(${loginSvg});
  background-repeat: no-repeat;
  background-color: #b8e5f8;
  background-size: cover;
`
export const StyledChild = styled.div`
  box-shadow: 0 1px 3px rgb(18 18 18 / 10%);
  border-radius: 2px;
  background-color: #FFFFFF;
  width: 400px;
  min-height:300px;

`
