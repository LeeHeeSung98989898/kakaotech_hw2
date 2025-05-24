import { useParams, useNavigate } from 'react-router-dom';
import MOCK_DATA from '../data/MOCK_DATA';

function PokemonDetail({ selected, addPokemon, removePokemon }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const pokemon = MOCK_DATA.find((p) => p.id === Number(id));
  const isSelected = selected.some((p) => p.id === pokemon?.id);

  if (!pokemon) return <p>포켓몬을 찾을 수 없습니다.</p>;

  const handleClick = () => {
    if (isSelected) {
      removePokemon(pokemon.id);
    } else {
      addPokemon(pokemon);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>{pokemon.korean_name}</h2>
      <img src={pokemon.img_url} alt={pokemon.korean_name} width="150" />
      <p>타입: {pokemon.types.join(', ')}</p>
      <p>{pokemon.description}</p>
      <button onClick={handleClick}>{isSelected ? '삭제' : '추가'}</button>
      <button onClick={() => navigate(-1)}>뒤로 가기</button>
    </div>
  );
}

export default PokemonDetail;
