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
const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;

function Home(store) {
  useEffect(() => {
    setPage(store.store.servers.homeStatus);
  }, [store.store.servers.homeStatus]);
  const headerCon = {
    1: "WeiLab",
    2: "Server",
    3: "Job list",
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
            <TabPane tab="Peptide" key="3" className="ServerPage-tabs-TabPane">
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
            <TabPane tab="Peptide" key="3" className="ServerPage-tabs-TabPane">
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
            <TabPane tab="Peptide" key="3" className="ServerPage-tabs-TabPane">
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
    <Layout className="layout">
      <Header className="home-head">
        <div className="home-head-binary">
          <div className="home-head-binary-title">
            Wei Lab
            <div className="home-head-introduction">
              developing an automated computational pipeline for peptide drug
              design and discovery
            </div>
          </div>
          <div className="home-head-memu">
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              className="home-head-memu-bar"
            >
              {new Array(4).fill(null).map((_, index) => {
                const key = index + 1;
                return (
                  <Menu.Item
                    key={key}
                    onClick={() => {
                      ///setPage(key);
                      store.store.servers.changeHomeStatue(key);
                    }}
                  >
                    {headerCon[key]}
                  </Menu.Item>
                );
              })}
            </Menu>
          </div>{" "}
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
