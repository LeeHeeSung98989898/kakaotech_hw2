import { useNavigate } from 'react-router-dom';

function PokemonCard({ pokemon, addPokemon }) {
  const navigate = useNavigate();

  return (
    <div style={{ border: '1px solid #ccc', padding: '8px', width: '150px' }}>
      <img
        src={pokemon.img_url}
        alt={pokemon.korean_name}
        onClick={() => navigate(`/detail/${pokemon.id}`)}
        style={{ width: '100px', cursor: 'pointer' }}
      />
      <p>{pokemon.korean_name}</p>
      <p>{pokemon.types.join(', ')}</p>
      <button onClick={() => addPokemon(pokemon)}>추가</button>
    </div>
  );
}

export default PokemonCard;
