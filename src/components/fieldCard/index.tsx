import { FC } from "react";
import { BriefBottom, BriefCenter, BriefTop, ItemBriefImg, ItemBriefInfo, ItemExtra, StyledFieldCard } from "@/components/fieldCard/style";
import { Space,Image, Avatar } from "antd";
import IconFont from "../IconFont";
import { HeartOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";

const FieldCard:FC = () => {
  return(
    <StyledFieldCard>
      <ItemBriefInfo>
        <BriefTop>
          <Avatar className={'author-avatar'} icon={<IconFont type={'icon-06'}/>} />
          <div className={'field-brief'}>
            <h4 className={'field-title'}>
              ant design part 0
            </h4>
            <div className='field-description'>
              <div className={'release-datetime'}>发布于 5 小时前</div>
              Ant Design, a design language for background applications, is refined by Ant UED Team.
            </div>
          </div>
        </BriefTop>
        <BriefCenter>
          We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.
        </BriefCenter>
        <BriefBottom>
          <li>
           <Space >
             <HeartOutlined />
             156
           </Space>
            <em className={'split'}/>
          </li>
          <li>
            <Space>
              <LikeOutlined />
              233
            </Space>
            <em className={'split'}/>
          </li>
          <li>
            <Space>
              <MessageOutlined />
              443
            </Space>
          </li>



        </BriefBottom>
      </ItemBriefInfo>
      <ItemExtra>
        <ItemBriefImg>
          <Image
            preview={{ visible: false,mask:null}}
            width={272}
            className={'brief-img'}
            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          />
        </ItemBriefImg>
      </ItemExtra>
    </StyledFieldCard>
  )
}
export default FieldCard
