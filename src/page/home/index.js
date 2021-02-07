import { path } from "../../route";
import Layout from "../../layout";
import CardHome from "../../views/home/card";
import Carousel from "react-elastic-carousel";
import CardRetaurant from "../../views/restaurant/card";
import { Row } from "antd";
import { useEffect, useState } from "react";
import { TourService } from "../../services";
import { Spin } from "antd";

const HomePage = () => {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getTour();
  }, []);
  const getTour = async () => {
    setIsLoading(true);
    try {
      const response = await TourService.getTours();
      setTours(response);
    } catch (error) {
      console.log(error);
    }

    setIsLoading(false);
  };

  return (
    <Layout selectedKey={path.home}>
      <Row style={{ display: "flex", width: "100%" }}>
        <h1>แนะนำ</h1>
        <Carousel itemsToShow={3}>
          {isLoading ? (
            <Spin spinning={true} />
          ) : (
            tours.map((tour) => <CardHome key={tour.id} tour={tour} />)
          )}
        </Carousel>
      </Row>
      {/* <Row style={{ display: "flex", width: "100%" }}>
        <h1>ทั่วไป</h1>
        <Carousel itemsToShow={3}>
          {cardRetaurant.map((cardrataurant) => {
            return (
              <CardRetaurant
                key={cardrataurant.id}
                cardrataurant={cardrataurant}
              />
            );
          })}
        </Carousel>
      </Row> */}
    </Layout>
  );
};
export default HomePage;
