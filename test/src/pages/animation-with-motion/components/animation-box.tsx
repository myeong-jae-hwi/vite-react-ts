import { tm } from '@/utils/tw-merge';
import { animate } from 'motion';
import { useEffect, useRef } from 'react';

function AnimationBox({
  className,
  ...restProps
}: React.ComponentProps<'div'>) {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const boxEle = boxRef.current;
    if (boxEle) {
      animate(
        boxEle,
        {
          // x: 240,
          rotate: 360,
          scale: 0.8,
        },
        {
          type: 'spring',
        }
      );
    }
  }, []);

  return (
    <div
      ref={boxRef}
      className={tm(
        'flex justify-center items-center',
        'size-30',
        'bg-react text-white text-lg font-medium',
        'rounded-lg',
        'm-4',
        className
      )}
      {...restProps}
    />
  );
}

export default AnimationBox;
