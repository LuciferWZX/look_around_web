import styled from "styled-components";

export const StyledFieldCard = styled.li`
  list-style: none;
  border-radius: 2px;
  box-shadow: 1px 0 #0000000f, 0 1px #0000000f, 1px 1px #0000000f, 1px 0 #0000000f inset, 0 1px #0000000f inset;
  background-color: #ffffff;
  padding:10px;
  display: flex;

`
export const ItemBriefInfo = styled.div`
  flex: 1;
`
export const BriefTop = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  max-width: 100%;
  margin-bottom: 16px;
  .author-avatar{
    margin-right: 16px;
  }
  .field-brief{
    flex: 1;
    .field-title{
      margin-bottom: 12px;
      color: #000000d9;
      font-size: 16px;
      line-height: 24px;
      cursor:pointer;
      :hover{
        color: #3498db;
      }
    }
    .field-description{
      color: #00000073;
      font-size: 14px;
      line-height: 1.5715;
      .release-datetime{
        font-weight: bold;
        font-size: 14px;
        color: #3498db;
      }
    }
  }
`
export const BriefCenter = styled.div`

`
export const BriefBottom = styled.ul`
  padding:0;
  display: flex;
  margin-top: 16px;
  li{
    list-style: none;
    position: relative;
    display: inline-block;
    padding: 0 8px;
    color: #00000073;
    font-size: 14px;
    line-height: 1.5715;
    text-align: center;
    cursor:pointer;
    :hover{
      color: red;
    }
  }
  .split{
    position: absolute;
    top: 50%;
    right: 0;
    width: 1px;
    height: 14px;
    margin-top: -7px;
    background-color: #0000000f;
  }
`
export const ItemExtra = styled.div`
`
export const ItemBriefImg = styled.div`
  margin-left:40px;
  .brief-img{
    max-height: 200px;
    border-radius: 4px;
    object-fit: contain;
  }
`
