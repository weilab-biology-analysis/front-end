import { inject, observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import './home.css';
import HomePage from './home/homePage';
import ServerHome from './server-home/serverHome';
import JobHome from './job-home/jobHome';
import About from './about/about';

const { Header, Content, Footer } = Layout;

function Home(store) {
  useEffect(() => {
    console.log(store);
  }, []);
  const headerCon = {
    1: 'WeiLab',
    2: 'Server',
    3: 'Job list',
    4: 'Contact',
  };
  const [page, setPage] = useState(1);

  const PageCon = () => {
    switch (page) {
      case 1:
        return <HomePage />;
      case 2:
        return <ServerHome />;
      case 3:
        return <JobHome />;
      default:
        return <About />;
    }
  };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          {new Array(4).fill(null).map((_, index) => {
            const key = index + 1;
            return (
              <Menu.Item
                key={key}
                onClick={() => {
                  setPage(key);
                }}
              >
                {headerCon[key]}
              </Menu.Item>
            );
          })}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <PageCon />
      </Content>
      <Footer style={{ textAlign: 'center' }}>Created by WeiLab</Footer>
    </Layout>
  );
}

export default inject('store')(observer(Home));
