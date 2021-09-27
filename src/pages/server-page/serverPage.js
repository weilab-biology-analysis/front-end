import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import { Tabs } from 'antd';
import './serverPage.css';
import ServerForm from './server-form/serverForm';
const { TabPane } = Tabs;

function ServerPage(store) {
  function callback(key) {
    console.log(key);
  }
  useEffect(() => {
    console.log(store);
  }, []);
  return (
    <div className="ServerPage-body">
      <Tabs
        defaultActiveKey="1"
        onChange={callback}
        className="ServerPage-tabs"
      >
        <TabPane tab="DNA" key="1">
          <ServerForm />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default inject('store')(observer(ServerPage));
