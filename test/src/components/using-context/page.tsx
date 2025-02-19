import { createContext } from 'react';
import GrandParent from './components/grand-parent';

const GreetingContext = createContext(undefined);
console.log(GreetingContext.Provider);
console.log(GreetingContext.Consumer);

function UsingContextPage() {
  return (
    <div>
      <h1>Using Context API</h1>
      <p>컨텍스트 API를 사용한 상태 공유</p>
      <GrandParent />
    </div>
  );
}

export default UsingContextPage;
