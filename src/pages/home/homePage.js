import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';
import './homePage.css';
function HomePage(store) {
  useEffect(() => {
    console.log(store);
  }, []);
  return <div>homepage</div>;
}

export default inject('store')(observer(HomePage));
