import Loading from '@/components/loading';
// import PokemonLayout from './pokemon-layout';

function PokemonSpinner() {
  console.log('재휘 바보');
  return (
    // <PokemonLayout>
    <Loading
      label="포켓몬 데이터 가져오는 중..."
      size={48}
      className="opacity-55"
    />
    // </PokemonLayout>
  );
}

export default PokemonSpinner;
