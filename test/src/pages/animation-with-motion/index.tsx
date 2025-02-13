import { Box, Redo } from '@mynaui/icons-react';
import AnimationBox from './components/animation-box';
import { useState } from 'react';

function AnimationWithMotion() {
  const [replayKey, setReplayKey] = useState(0);

  const handleReplay = () => {
    setReplayKey((r) => r + 1);
  };

  return (
    <section>
      <h2 className="text-2xl font-medium">애니메이션</h2>
      <AnimationBox key={replayKey}>
        <Box size="24" />
      </AnimationBox>

      <button
        type="button"
        className="flex gap-1 items-center bg-react text-white text-sm rounded-lg p-2 active:scale-95"
        onClick={handleReplay}
      >
        <Redo size="16" />
        Replay
      </button>
    </section>
  );
}

export default AnimationWithMotion;
