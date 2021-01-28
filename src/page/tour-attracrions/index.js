import Layout from "../../layout";
import { path } from "../../route";
import { Card, Col, Row } from "antd";
import { Carousel } from "react-responsive-carousel";
const TourPage = () => {
  return (
    <Layout selectedKey={path.tour}>
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
          <Card title="สถานที่:ABC" bordered={false}>
            <p>
              ถึงเวลาแล้ว!
              ที่คุณจะได้ยลโฉมเมืองไทยในช่วงที่นักท่องเที่ยวต่างชาติบางตา จะเดิน
              จะกิน จะช้อป จะแชะ จะถ่ายรูปช็อตไหน ก็ไม่มีใครมาติดเฟรม
              กับทริปสุดยูนีคในราคาสุดพิเศษหาที่ไหนไม่ได้แล้วนอกจากที่เทคมีทัวร์ที่นี่ที่เดียว
              ไม่ไปตอนนี้แล้วจะไปตอนไหน?
              ถ้าพร้อมแล้วเลือกกิจกรรมที่สนใจด้านล่างได้เลย!
            </p>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};
export default TourPage;
