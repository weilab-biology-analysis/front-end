import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import "./about.css"
function About(store) {
  useEffect(() => {
  }, []);
  return <div className="about-body">
    <div className="about-connect-text"> 
      <div className="about-connect-text_title">Connect us!</div>
        <div>
        Room 105, Adminstrator Bld. Shandong University, Jinan, Shandong, China
        </div>
    </div>
  </div>;
}

export default inject('store')(observer(About));
