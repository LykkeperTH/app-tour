import { useHistory } from "react-router-dom";
import { Layout as AntLayout, Menu } from "antd";
import { path } from "../route";
import { getUrlKey } from "../utils";
const { Header, Content, Footer } = AntLayout;
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
          <Menu.Item key={getUrlKey(path.tour)}>ท่องเที่ยว</Menu.Item>
          {/* <Menu.Item key="3">nav 3</Menu.Item> */}
        </Menu>
      </Header>
      <Content style={{ padding: "25px 50px" }}>
        <div
          className="site-layout-content"
          style={{ padding: 40, minHeight: 1200 }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </AntLayout>
  );
};

export default Layout;
