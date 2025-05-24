import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';

function Dex({ selected, addPokemon, removePokemon, list }) {
  return (
    <div>
      <h2>포켓몬 도감</h2>
      <Dashboard selected={selected} removePokemon={removePokemon} />
      <PokemonList list={list} addPokemon={addPokemon} />
    </div>
  );
}

export default Dex;
