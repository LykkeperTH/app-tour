import Layout from "../../layout";
import { path } from "../../route";
const TourPage = () => {
  return (
    <Layout selectedKey={path.tour}>
      <div>Test Tour</div>
    </Layout>
  );
};
export default TourPage;
