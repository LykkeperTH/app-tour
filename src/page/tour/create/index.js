import { path } from "../../../route";
import { useState } from "react";
import { TourService } from "../../../services";
import { useHistory } from "react-router-dom";
import { TourForm } from "../../../views";
import Modal from "antd/lib/modal/Modal";
import Layout from "../../../layout";
const CreateTourPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const onFinish = async (data) => {
    setIsLoading(true);
    try {
      const res = await TourService.createTour(data);
      console.log(res);
      Modal.success({
        content: "สร้างสำเร็จ",
        onOk: () => {
          history.push(path.home);
        },
      });
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  return (
    <Layout selectedKey={path.createTour}>
      <TourForm isLoading={isLoading} onFinish={onFinish} />;
    </Layout>
  );
};
export default CreateTourPage;
