import { useHistory } from "react-router-dom";
import { Layout as AntLayout, Menu, Row } from "antd";
import { path } from "../route";
import { getUrlKey } from "../utils";
const { Header, Content } = AntLayout;
const Layout = ({ children, selectedKey }) => {
  const history = useHistory();
  const onClickMenu = ({ key }) => {
    history.push(path[key]);
    console.log(path[key]);
  };
  return (
    <AntLayout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={getUrlKey(selectedKey)}
          onClick={(e) => onClickMenu(e)}
        >
          <Menu.Item key={getUrlKey(path.home)}>หน้าแรก</Menu.Item>
          <Menu.Item key={getUrlKey(path.createTour)}>สร้าง</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: "25px 50px" }}>
        <div
          className="site-layout-content"
          style={{ padding: 40, minHeight: "100vh" }}
        >
          <Row style={{ display: "flex", width: "100%" }}> {children}</Row>
        </div>
      </Content>
    </AntLayout>
  );
};

export default Layout;
