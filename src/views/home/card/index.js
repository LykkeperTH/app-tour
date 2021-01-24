import { Card } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Carousel from "react-elastic-carousel";
const CardHome = ({ card }) => {
  console.log(card);
  const { Meta } = Card;
  return (
    <Card
      style={{
        width: 300,
        marginLeft: "14px",
        marginRight: "14px",
        height: 295,
      }}
      cover={
        <img
          alt="example"
          src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/high-falls-dusk-mark-papke.jpg"
        />
      }
      actions={[
        <SettingOutlined key="setting" />,
        <EditOutlined key="edit" />,
        <EllipsisOutlined key="ellipsis" />,
      ]}
    >
      <Meta title={card.title} description={card.discription} />
    </Card>
  );
};
export default CardHome;
