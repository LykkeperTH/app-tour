import { path } from "../../route";
import Layout from "../../layout";
import CardHome from "../../views/home/card";

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

  return (
    <Layout selectedKey={path.home}>
      {cards.map((card) => (
        <CardHome key={card.id} card={card} />
      ))}
    </Layout>
  );
};
export default HomePage;
