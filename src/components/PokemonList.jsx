import PokemonCard from './PokemonCard';

function PokemonList({ list, addPokemon }) {
  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {list.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} addPokemon={addPokemon} />
        ))}
      </div>
    </div>
  );
}

export default PokemonList;
