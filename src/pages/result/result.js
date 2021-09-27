import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import './result.css';
import { Statistic, Row, Col } from 'antd';
import { LikeOutlined } from '@ant-design/icons';
function Result(store) {
  useEffect(() => {
    console.log(store);
  }, []);
  return (
    <div className="Result-body">
      {' '}
      <div className="Result-row">
        <Row>
          <Col span={24}>
            <Statistic title="Job Id" value={store.store.results.data.jobId} />
          </Col>
        </Row>
      </div>
      <Row gutter={24}>
        <Col span={12}>
          <Statistic
            title="Create Time"
            value={store.store.results.data.createTime}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="completeTime"
            value={store.store.results.data.completeTime}
          />
        </Col>
      </Row>
    </div>
  );
}
export default inject('store')(observer(Result));
