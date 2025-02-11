import { useEffect, useState } from 'react';
import { getView } from '@/router/manage-view';
import ReactPingIcon from '@/components/react-ping-icon';
import Nav from '@/components/nav';
import Router from '@/router';

function Playground() {
  const [route, setRoute] = useState(getView);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(location.search); // webAPI React 관리 X
      const nextRoute = params.get('view');
      console.log(params.get('view'));

      if (nextRoute) {
        setRoute(nextRoute);
      }
    };
    window.addEventListener('popstate', handlePopState); // 마운트 되었을 때, count가 변경되었을 때
    console.log('update');

    return () => {
      // clean up
      window.removeEventListener('popstate', handlePopState);
      console.log('clean up');
    };
  }, [count]);

  const handleCount = () => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <section className="Playground bg-euid-gray-200 wrapper">
      <h1 lang="en" className="flex items-center gap-2 font-normal text-react">
        <ReactPingIcon size={24} /> Playground
      </h1>
      <Nav onChangeRoute={setRoute} />
      <button
        type="button"
        className="mt-4 px-4 py-2 bg-react text-white rounded-md"
        onClick={handleCount}
      >
        땡쥬
      </button>

      <Router route={route} />
    </section>
  );
}

export default Playground;
