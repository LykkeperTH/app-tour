import { useState } from "react";
import TourForm from "../../form";
import { TourService } from "../../../services";
import Modal from "antd/lib/modal/Modal";
import { path } from "../../../route";
import { useHistory } from "react-router-dom";

const ViewUpdateTour = ({ tour }) => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const res = await TourService.updateDetailTour(tour.id, values);
      console.log(res);
      Modal.success({
        content: "แก้ไขสำเร็จ",
        onOk: () => {
          history.push(path.home);
        },
      });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  return <TourForm onFinish={onFinish} isLoading={isLoading} tour={tour} />;
};
export default ViewUpdateTour;
