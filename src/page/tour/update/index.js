import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { TourService } from "../../../services";
import Layout from "../../../layout";
import { Skeleton } from "antd";
import { ViewUpdateTour } from "../../../views";
import { path } from "../../../route";
const UpdateTourPage = () => {
  const [tour, setTour] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { tourId } = useParams();
  useEffect(() => {
    getTourById();
  }, []);
  const getTourById = async () => {
    const tour = await TourService.getTourById(tourId);
    console.log(tour);
    setTour(tour);
    setIsLoading(false);
  };

  return (
    <Layout selectedKey={path.updateTour}>
      {isLoading ? <Skeleton active /> : <ViewUpdateTour tour={tour} />}
    </Layout>
  );
};
export default UpdateTourPage;
