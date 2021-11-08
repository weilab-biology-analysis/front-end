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
  return <div className="tutorial-body">

      <div className="tutorial-connect-text_title">The tutorial for web server of DeepBIO:</div>
        <div className="tutorial-connect-text_timeline">
        <Timeline>
    <Timeline.Item>
      <div>
      Step1: Move the cursor to the server button, two drop-down boxes will appear automatically, you can see “Train” and “Prediction” options as shown in Figure 1, click the module you want to use.
      </div>
      <div className="graph-tutor"><img src={tutor_1}/></div></Timeline.Item>
    <Timeline.Item><div className="graph-tutor">
      <div>
      Step2: As Figure 2 illustrates, you can see three options, including DNA, RNA, and Protein. Click on the corresponding button according to the data type.
      </div>
      <img src={tutor_2}/></div></Timeline.Item>
    <Timeline.Item>
      <div>
      Step3: Figure 3, 4, 5 illustrate what you need to upload or select for one analysis task, including five sections: “Input dataset”, “Advance options”, “Selecting deep learning models”, “Input your E-Mail”, and “Submit”. Finally, you can click the submit button to complete the task submission.
      </div>
      <div className="graph-tutor"><img src={tutor_3}/></div></Timeline.Item>
    <Timeline.Item><div className="graph-tutor"><img src={tutor_4}/></div></Timeline.Item>
    <Timeline.Item><div className="graph-tutor"><img src={tutor_5}/></div></Timeline.Item>
    <Timeline.Item>
      <div>
      Step4: When the job is completed we will send an email for you, and you can see the result in the joblist page as shown in Figure 6.
      </div>
    </Timeline.Item>
  </Timeline>,
        </div>

  </div>;
}

export default inject('store')(observer(Tutorial));
