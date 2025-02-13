import { useState } from 'react';
import { tm } from '@/utils/tw-merge';
import { Redo } from '@mynaui/icons-react';

function ReplayAnimation({ children }: React.PropsWithChildren) {
  const [replayKey, setReplayKey] = useState(0);

  const handleReplay = () => {
    setReplayKey((r) => r + 1);
  };

  return (
    <div className="flex flex-col gap-4 my-3" key={replayKey}>
      <button
        type="button"
        onClick={handleReplay}
        className={tm(
          'cursor-pointer',
          'grid place-content-center size-7 bg-black text-white rounded-full',
          'hover:rotate-360 transition-normal duration-250 ease-in-out',
          'active:scale-80'
        )}
      >
        <Redo size={16} />
      </button>
      {children}
    </div>
  );
}

export default ReplayAnimation;
