import { path } from "../../route";
import Layout from "../../layout";
const HomePage = () => {
  return (
    <Layout selectedKey={path.home}>
      <div>หน้าแรก</div>
    </Layout>
  );
};
export default HomePage;
