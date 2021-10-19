import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Layout, Menu, Tabs, Breadcrumb } from "antd";
import "./home.css";
import HomePage from "./home/homePage";
import ServerHome from "./server-home/serverHome";
import JobHome from "./job-home/jobHome";
import About from "./about/about";
import ServerForm from "./server-page/server-form/serverForm";
import RNAServerForm from "./server-page/RNA-form/serverForm";
import PeptideServerForm from "./server-page/Peptide-form/serverForm";
import Result from "./result/result";
import {
  HomeOutlined,
  CloudServerOutlined,
  UnorderedListOutlined
} from '@ant-design/icons';
import logo from '../constants/img/2.svg'
const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

function Home(store) {
  useEffect(() => {
    setPage(store.store.servers.homeStatus);
  }, [store.store.servers.homeStatus]);
  const headerCon = {
    1: <div ><HomeOutlined className="headerCon-tab" style={{fontSize:"20px"}}/>Home</div>
      ,
    2: <div ><CloudServerOutlined className="headerCon-tab" style={{fontSize:"20px"}}/>Server</div>,
    3: <div ><UnorderedListOutlined className="headerCon-tab" style={{fontSize:"20px"}}/>Job list</div>,
    //4: "Contact",
  };
  const [page, setPage] = useState(1);
  function callback(key) {
    console.log(key);
  }
  const PageCon = () => {
    switch (page) {
      case 1:
        return <HomePage />;
      case 2:
        return <ServerHome />;
      case 3:
        return (
          <div className="JobHome-class">
            <JobHome />
          </div>
        );
      case 4:
        return (
          <Tabs
            type="card"
            defaultActiveKey="1"
            onChange={callback}
            className="ServerPage-tabs"
          >
            <TabPane tab="DNA" key="1" className="ServerPage-tabs-TabPane">
              <ServerForm />
            </TabPane>
            <TabPane tab="RNA" key="2" className="ServerPage-tabs-TabPane">
              <RNAServerForm />
            </TabPane>
            <TabPane tab="Protein" key="3" className="ServerPage-tabs-TabPane">
              <PeptideServerForm />
            </TabPane>
          </Tabs>
        );

      case 5:
        return (
          <Tabs
            type="card"
            defaultActiveKey="2"
            onChange={callback}
            className="ServerPage-tabs"
          >
            <TabPane tab="DNA" key="1" className="ServerPage-tabs-TabPane">
              <ServerForm />
            </TabPane>
            <TabPane tab="RNA" key="2" className="ServerPage-tabs-TabPane">
              <RNAServerForm />
            </TabPane>
            <TabPane tab="Protein" key="3" className="ServerPage-tabs-TabPane">
              <PeptideServerForm />
            </TabPane>
          </Tabs>
        );
      case 6:
        return (
          <Tabs
            defaultActiveKey="3"
            onChange={callback}
            className="ServerPage-tabs"
            type="card"
          >
            <TabPane tab="DNA" key="1" className="ServerPage-tabs-TabPane">
              <ServerForm />
            </TabPane>
            <TabPane tab="RNA" key="2" className="ServerPage-tabs-TabPane">
              <RNAServerForm />
            </TabPane>
            <TabPane tab="Protein" key="3" className="ServerPage-tabs-TabPane">
              <PeptideServerForm />
            </TabPane>
          </Tabs>
        );
      case 7:
        return <Result />;
      default:
        window.location.href = "http://wei-group.net/contact";

        break;
    }
  };

  return (
    <Layout>
      <Header className="Menu-header-home-outer-inite">
        <div className="Menu-header-home-outer-in-item">  
          <div className="logo-welab">Wei Lab<img src={logo} className="logo-welab-img"/></div>
          <div></div>

          <div className="Menu-header-home">
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              className="Menu-header-home-item"
            >
              {new Array(4).fill(null).map((_, index) => {
                const key = index + 1;
                return (
                  <Menu.Item
                    key={key}
                    onClick={() => {
                      store.store.servers.changeHomeStatue(key);
                    }}
                  >
                    {headerCon[key]}
                  </Menu.Item>
                );
              })}
            </Menu>
          </div>
          </div>
      </Header>
      <Content style={{ padding: "0 50px", backgroundColor: "white" }}>
        <PageCon />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        <div>© 2021 Wei Lab | Contact us: mail </div>{" "}
        <div>
          This website is free and open to all users and there is no login
          requirement
        </div>
        <div></div>{" "}
      </Footer>
    </Layout>
  );
}

export default inject("store")(observer(Home));
