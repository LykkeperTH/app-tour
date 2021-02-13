import Layout from "../../layout";
import { path } from "../../route";
import { useEffect, useState } from "react";
import { TourService } from "../../services";
import { useParams } from "react-router-dom";
import { VeiwDetailBook } from "../../views";
import { Skeleton } from "antd";
const TourPage = () => {
  const [tour, setTour] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { tourId } = useParams;
  useEffect(() => {
    getTourById();
  }, []);
  const getTourById = async () => {
    const tour = await TourService.getTourById(tourId);
    setTour(tour);
    console.log(tour);
    setIsLoading(false);
  };
  return (
    <Layout selectedKey={path.tour}>
      {isLoading ? <Skeleton active /> : <VeiwDetailBook tour={tour} />}
    </Layout>
  );
};
export default TourPage;
