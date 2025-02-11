import throttle from '@/utils/throttle';
import { useEffect, useState } from 'react';

function SideEffectDemo() {
  // const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [val, setVal] = useState(0);

  useEffect(() => {
    const handleMove = throttle((e: PointerEvent) => {
      // setMouse({ x: +e.clientX.toFixed(0), y: +e.clientY.toFixed(0) });
    }, 20);

    globalThis.addEventListener('pointermove', handleMove);

    return () => {
      globalThis.removeEventListener('pointermove', handleMove);
    };
  }, []);

  const handleChangeCount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(+e.currentTarget.value);
    console.log(val);
  };

  return (
    <section className="*:text-slate-800 flex flex-col space-y-10">
      <h2 className="text-2xl font-medium mb-2">React.useEffect 훅 함수</h2>
      <input type="range" onChange={handleChangeCount} />

      <output className="inline-flex my-5 py-3 px-5 border-6 text-2xl">
        {/* x = {mouse.x} / y = {mouse.y} */}
        {val}
      </output>
    </section>
  );
}

export default SideEffectDemo;
