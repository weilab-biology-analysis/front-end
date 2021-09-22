import { useEffect } from 'react';

function Home(store) {
  useEffect(() => {
    console.log(store);
  }, []);
  return <div></div>;
}

export default Home;
