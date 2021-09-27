import { inject, observer } from 'mobx-react';
import { useEffect, useState } from 'react';
import './serverHome.css';
import { useHistory } from 'react-router';
// @ts-ignore
import DNA from '../../constants/img/DNA.png';
function ServerHome(store) {
  useEffect(() => {
    console.log(store);
  }, []);
  const history = useHistory();
  const gotoPage = () => {
    history.push('/serverPage');
  };
  return (
    <div className="serverhome-body">
      <div className="function-select">
        <div className="function-select-left">
          <img src={DNA} />
          <div>DNA sequence</div>
        </div>
        <div
          className="function-select-right"
          onClick={() => {
            gotoPage();
          }}
        >
          <div>DNA</div>
          <div>
            Integrating the functionality of feature calculation/extraction,
            clustering, feature normalization, feature selection, dimension
            reduction, model construction for classification and result
            visualization for DNA sequence.
          </div>
        </div>
      </div>
    </div>
  );
}

export default inject('store')(observer(ServerHome));
