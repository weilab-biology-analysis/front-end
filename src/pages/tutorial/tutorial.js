import { Timeline } from 'antd';
import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import "./tutorial.css"
import tutor_1 from '../../constants/img/tutor_1.jpg'
import tutor_2 from '../../constants/img/tutor_2.jpg'
import tutor_3 from '../../constants/img/tutor_3.jpg'
import tutor_4 from '../../constants/img/tutor_4.jpg'
import tutor_5 from '../../constants/img/tutor_5.jpg'
function Tutorial(store) {
  useEffect(() => {
  }, []);
  return <div className="about-body">
    <div className="about-connect-text"> 
      <div className="about-connect-text_title"></div>
        <div>
        <Timeline>
    <Timeline.Item><div className="graph-tutor"><img src={tutor_1}/></div></Timeline.Item>
    <Timeline.Item><div className="graph-tutor"><img src={tutor_2}/></div></Timeline.Item>
    <Timeline.Item><div className="graph-tutor"><img src={tutor_3}/></div></Timeline.Item>
    <Timeline.Item><div className="graph-tutor"><img src={tutor_4}/></div></Timeline.Item>
    <Timeline.Item><div className="graph-tutor"><img src={tutor_5}/></div></Timeline.Item>
  </Timeline>,
        </div>
    </div>
  </div>;
}

export default inject('store')(observer(Tutorial));
