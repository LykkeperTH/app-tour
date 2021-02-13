import { Card } from "antd";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { path } from "../../../route";

const CardHome = ({ tour }) => {
  // console.log(tour);
  const { Meta } = Card;
  return (
    <Link to={`${path.tour}/${tour.id}`}>
      <Card
        style={{
          width: 250,
          marginLeft: "14px",
          marginRight: "14px",
          height: 315,
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
        <Meta title={tour.title} description={tour.description} />
      </Card>
    </Link>
  );
};
export default CardHome;
