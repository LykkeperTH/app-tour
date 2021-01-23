import { useHistory } from "react-router-dom";
import { Layout as AntLayout, Menu } from "antd";
import { path } from "../route";

const { Header, Content } = AntLayout;
const Layout = ({ children }) => {
  const history = useHistory();
  const onClickMenu = ({ key }) => {
    history.push(key);
  };
  return (
    <div>
      <AntLayout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            onClick={(e) => onClickMenu(e)}
          >
            <Menu.Item key="">1</Menu.Item>
            <Menu.Item key={path.home}>Home</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          {children}
          <div className="site-layout-content">Content</div>
        </Content>
        {/* <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer> */}
      </AntLayout>
    </div>
  );
};

export default Layout;
