import { Card, Col, Row } from "antd";
import { Carousel } from "react-responsive-carousel";

const VeiwDetailBook = ({ tour }) => {
  return (
    <Row style={{ width: "100%" }}>
      <Col span={24}>
        <Carousel>
          <div>
            <img src="https://bit.ly/39piSDD" />
            <p className="legend">Legend 1</p>
          </div>
          <div>
            <img src="https://bit.ly/39piSDD" />
            <p className="legend">Legend 2</p>
          </div>
        </Carousel>
      </Col>
      <Col span={24}>
        <Card title={tour.title} bordered={false}>
          <p>{tour.description}</p>
        </Card>
      </Col>
    </Row>
  );
};
export default VeiwDetailBook;
