import { path } from "../../route";
import Layout from "../../layout";
import CardHome from "../../views/home/card";
import Carousel from "react-elastic-carousel";
import CardRetaurant from "../../views/restaurant/card";
import { Col, Row } from "antd";
const HomePage = () => {
  const cards = [
    {
      id: 1,
      title: "ชื่อ",
      discription: "ที่เที่ยว",
    },
    {
      id: 2,
      title: "ชื่อ1",
      discription: "ที่เที่ยว",
    },
    {
      id: 3,
      title: "ชื่อ2",
      discription: "ที่เที่ยว",
    },
    {
      id: 4,
      title: "ชื่อ3",
      discription: "ที่เที่ยว",
    },
    {
      id: 5,
      title: "ชื่อ4",
      discription: "ที่เที่ยว",
    },
  ];

  const cardRetaurant = [
    {
      id: 1,
      name: "name1",
      title: "type1",
      description: "description1",
    },
    {
      id: 2,
      name: "name2",
      title: "type2",
      description: "description2",
    },
    {
      id: 3,
      name: "name3",
      title: "type3",
      description: "description3",
    },
    {
      id: 4,
      name: "name4",
      title: "type4",
      description: "description4",
    },
    {
      id: 5,
      name: "name5",
      title: "type5",
      description: "description5",
    },
  ];
  return (
    <Layout selectedKey={path.home}>
      <Carousel itemsToShow={3}>
        {cards.map((card) => (
          <CardHome key={card.id} card={card} />
        ))}
      </Carousel>
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
    </Layout>
  );
};
export default HomePage;
