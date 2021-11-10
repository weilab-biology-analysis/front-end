import { inject, observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Layout, Menu, Tabs, Breadcrumb, Button, BackTop } from "antd";
import "./home.css";
import HomePage from "./home/homePage";
import ServerHome from "./server-home/serverHome";
import JobHome from "./job-home/jobHome";
import About from "./about/about";
import ServerForm from "./server-page/server-form/serverForm";
import ServerPredictHome from "./server-predict-home/serverHome";
import RNAServerForm from "./server-page/RNA-form/serverForm";
import ServerPredictForm from "./server-page/server-predict/PridictForm";
import RNAPredictForm from "./server-page/RNA-predict/serverForm";
import PeptidePredictForm from "./server-page/Peptide-predict/serverForm";

import PeptideServerForm from "./server-page/Peptide-form/serverForm";
import Result from "./result/result";
import {
  HomeOutlined,
  CloudServerOutlined,
  UnorderedListOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
  FileSearchOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import logo from "../constants/img/2.svg";
import Tutorial from "./tutorial/tutorial";
const { Header, Content, Footer } = Layout;
const { TabPane } = Tabs;
const { SubMenu } = Menu;

function Home(store) {
  useEffect(() => {
    setPage(store.store.servers.homeStatus);
  }, [store.store.servers.homeStatus]);
  const headerCon = {
    1: (
      <div>
        <HomeOutlined className="headerCon-tab" style={{ fontSize: "20px" }} />
        Home
      </div>
    ),
    2: (
      <div >
        <CloudServerOutlined
          className="headerCon-tab"
          style={{ fontSize: "20px" }}
        />
        Server
      </div>
    ),
    5: (
      <div>
        <UnorderedListOutlined
          className="headerCon-tab"
          style={{ fontSize: "20px" }}
        />
        Job list
      </div>
    ),
    4: (
      <div>
        <ContactsOutlined
          className="headerCon-tab"
          style={{ fontSize: "20px" }}
        />
        Contact
      </div>
    ),
    3: (
      <div>
        <FileSearchOutlined
          className="headerCon-tab"
          style={{ fontSize: "20px" }}
        />
        Tutorial
      </div>
    ),
  };
  const [page, setPage] = useState(1);
  function callback(key) {
    console.log(key);
  }
  const PageCon = () => {
    switch (page) {
      case 1:
        return (
          <div className="submit-depart-pages">
            {/* <div className="Result-Result-body-Breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Related Work
                </Breadcrumb.Item>
              </Breadcrumb>
            </div> */}
            <HomePage />
          </div>
        );

      case 3:
        return (
          <div className="submit-depart-pages">
            <div className="Result-Result-body-Breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Job List
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <JobHome />
          </div>
        );
      case 4:
        return (
          <div className="submit-depart-pages">
            <div className="Result-Result-body-Breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Server Select
                </Breadcrumb.Item>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Submit
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
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
              <TabPane
                tab="Protein"
                key="3"
                className="ServerPage-tabs-TabPane"
              >
                <PeptideServerForm />
              </TabPane>
            </Tabs>
          </div>
        );

      case 5:
        return (
          <div className="submit-depart-pages">
            <div className="Result-Result-body-Breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Server Select
                </Breadcrumb.Item>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Submit
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
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
              <TabPane
                tab="Protein"
                key="3"
                className="ServerPage-tabs-TabPane"
              >
                <PeptideServerForm />
              </TabPane>
            </Tabs>
          </div>
        );
      case 6:
        return (
          <div className="submit-depart-pages">
            <div className="Result-Result-body-Breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Server Select
                </Breadcrumb.Item>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Submit
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
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
              <TabPane
                tab="Protein"
                key="3"
                className="ServerPage-tabs-TabPane"
              >
                <PeptideServerForm />
              </TabPane>
            </Tabs>
          </div>
        );
      case 7:
        return (
          <div className="submit-depart-pages">
            <Result />
          </div>
        );

      case 2:
        return (
          <div className="submit-depart-pages">
            <ServerHome />
          </div>
        );
      case 8:
        return (
          <div className="submit-depart-pages">
            <ServerPredictHome />
          </div>
        );
      case 9:
        return (
          <div className="submit-depart-pages">
            <div className="Result-Result-body-Breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Server Select
                </Breadcrumb.Item>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Submit
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <Tabs
              defaultActiveKey="1"
              onChange={callback}
              className="ServerPage-tabs"
              type="card"
            >
              <TabPane tab="DNA" key="1" className="ServerPage-tabs-TabPane">
                <ServerPredictForm />
              </TabPane>
              <TabPane tab="RNA" key="2" className="ServerPage-tabs-TabPane">
                <RNAPredictForm />
              </TabPane>
              <TabPane
                tab="Protein"
                key="3"
                className="ServerPage-tabs-TabPane"
              >
                <PeptidePredictForm />
              </TabPane>
            </Tabs>
          </div>
        );
      case 10:
        return (
          <div className="submit-depart-pages">
            <div className="Result-Result-body-Breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Server Select
                </Breadcrumb.Item>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Submit
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <Tabs
              defaultActiveKey="2"
              onChange={callback}
              className="ServerPage-tabs"
              type="card"
            >
              <TabPane tab="DNA" key="1" className="ServerPage-tabs-TabPane">
                <ServerPredictForm />
              </TabPane>
              <TabPane tab="RNA" key="2" className="ServerPage-tabs-TabPane">
                <RNAPredictForm />
              </TabPane>
              <TabPane
                tab="Protein"
                key="3"
                className="ServerPage-tabs-TabPane"
              >
                <PeptidePredictForm />
              </TabPane>
            </Tabs>
          </div>
        );
      case 11:
        return (
          <div className="submit-depart-pages">
            <div className="Result-Result-body-Breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Server Select
                </Breadcrumb.Item>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Submit
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <Tabs
              defaultActiveKey="3"
              onChange={callback}
              className="ServerPage-tabs"
              type="card"
            >
              <TabPane tab="DNA" key="1" className="ServerPage-tabs-TabPane">
                <ServerPredictForm />
              </TabPane>
              <TabPane tab="RNA" key="2" className="ServerPage-tabs-TabPane">
                <RNAPredictForm />
              </TabPane>
              <TabPane
                tab="Protein"
                key="3"
                className="ServerPage-tabs-TabPane"
              >
                <PeptidePredictForm />
              </TabPane>
            </Tabs>
          </div>
        );
      case 12:
        return (
          <div className="submit-depart-pages">
            <div className="Result-Result-body-Breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Contact
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <About />
          </div>
        );
      case 13:
        return (
          <div className="submit-depart-pages">
            <div className="Result-Result-body-Breadcrumb">
              <Breadcrumb>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Home
                </Breadcrumb.Item>
                <Breadcrumb.Item className="Breadcrumb-Item-text">
                  Tutorial
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
            <Tutorial />
          </div>
        );
      default:
        window.location.href = "http://wei-group.net/contact";

        break;
    }
  };

  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };

  return (
    <Layout>
      <Header className="Menu-header-home-outer-inite">
        <div className="Menu-header-home-outer-in-item">
          <div className="Menu-header-home">
            <div className="logo-welab">
              DeepBIO
              {/* <img src={logo} className="logo-welab-img" /> */}
            </div>

            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              className="Menu-header-home-item"
              triggerSubMenuAction="click"
            >
              {new Array(5).fill(null).map((_, index) => {
                const keyValue = index + 1;
                if (keyValue === 2) {
                  return (
                    <SubMenu
                      title={
                        <div className="SubMenu-title-text">
                          {headerCon[keyValue]}
                        </div>
                      }
                      key={keyValue}
                      className="Menu-header-home-item-SubMenu"

                    >
                      <Menu.ItemGroup className="My-Menu-ItemGroup">
                        <Menu.Item
                          key={2}
                          className="SubMenu-Menu-ItemGroup-Item-up"
                          onClick={() => {
                            store.store.servers.changeHomeStatue(2);
                          }}
                        >
                          Deep learning based prediction
                        </Menu.Item>
                        <Menu.Item
                          key={8}
                          className="SubMenu-Menu-ItemGroup-Item-down"
                          onClick={() => {
                            store.store.servers.changeHomeStatue(8);
                          }}
                        >
                          Sequence functional annotation
                        </Menu.Item>
                      </Menu.ItemGroup>
                    </SubMenu>
                  );
                } else if (keyValue === 4) {
                  return (
                    <Menu.Item
                      key={keyValue}
                      onClick={() => {
                        store.store.servers.changeHomeStatue(12);
                      }}
                      className="commen-Menu-Item"
                    >
                      {headerCon[keyValue]}
                    </Menu.Item>
                  );
                } else if (keyValue === 5) {
                  return (
                    <Menu.Item
                      key={keyValue}
                      onClick={() => {
                        store.store.servers.changeHomeStatue(3);
                      }}
                      className="commen-Menu-Item"
                    >
                      {headerCon[keyValue]}
                    </Menu.Item>
                  );
                } else if (keyValue === 3) {
                  return (
                    <Menu.Item
                      key={keyValue}
                      onClick={() => {
                        store.store.servers.changeHomeStatue(13);
                      }}
                      className="commen-Menu-Item"
                    >
                      {headerCon[keyValue]}
                    </Menu.Item>
                  );
                } else {
                  return (
                    <Menu.Item
                      key={keyValue}
                      onClick={() => {
                        store.store.servers.changeHomeStatue(keyValue);
                      }}
                      className="commen-Menu-Item"
                    >
                      {headerCon[keyValue]}
                    </Menu.Item>
                  );
                }
              })}
            </Menu>
          </div>
          {/* <Menu
            onClick={e=>{setCurrent(e.target)}}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="mail" icon={<MailOutlined />}>
              Navigation One
            </Menu.Item>
            <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
              Navigation Two
            </Menu.Item>
            <SubMenu
              key="SubMenu"
              icon={<SettingOutlined />}
              title="Navigation Three - Submenu"
            >
              <Menu.ItemGroup title="Item 1">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
              </Menu.ItemGroup>
              <Menu.ItemGroup title="Item 2">
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
              </Menu.ItemGroup>
            </SubMenu>
            <Menu.Item key="alipay">
              <a
                href="https://ant.design"
                target="_blank"
                rel="noopener noreferrer"
              >
                Navigation Four - Link
              </a>
            </Menu.Item>
          </Menu> */}
        </div>
      </Header>
      <Content style={{ padding: "0 50px", backgroundColor: "white" }}>
      <BackTop/>
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
