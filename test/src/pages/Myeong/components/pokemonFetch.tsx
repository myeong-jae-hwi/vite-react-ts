import { use } from 'react';
import { fetchPokemon } from '../api/fetch-pokemon';

function PokemonFetch() {
  // const myeong = fetchPokemon(311);
  // console.log('명', myeong);

  const pokemon = use(fetchPokemon(311));

  return (
    <img
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png`}
      alt=""
      title=""
      loading="lazy"
      className="size-28"
    />
  );
}

export default PokemonFetch;
