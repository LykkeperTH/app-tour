import { Button, Card } from "antd";
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
          height: 325,
        }}
        cover={
          <img
            alt="example"
            src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/high-falls-dusk-mark-papke.jpg"
          />
        }
        actions={[
          <Link to={`${path.updateTour}/${tour.id}`}>
            <Button>แก้ไข</Button>
          </Link>,
          <Link>รายละเอียด</Link>,
          <Link>
            <Button>ลบ</Button>
          </Link>,
        ]}
      >
        <Meta title={tour.title} description={tour.description} />
      </Card>
    </Link>
  );
};
export default CardHome;
