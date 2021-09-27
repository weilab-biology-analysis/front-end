import { inject, observer } from 'mobx-react';
import { useEffect } from 'react';

function About(store) {
  useEffect(() => {
    console.log(store);
  }, []);
  return <div>about</div>;
}

export default inject('store')(observer(About));
