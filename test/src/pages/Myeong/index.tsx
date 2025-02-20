import { Suspense } from 'react';
import PokemonFetch from './components/pokemonFetch';
// import Loading from './components/loading';
import PokemonSpinner from './components/loading';

function Myeong() {
  return (
    <>
      <h1>Myeong</h1>

      <Suspense fallback={<PokemonSpinner />}>
        <PokemonFetch />
      </Suspense>
    </>
  );
}

export default Myeong;
