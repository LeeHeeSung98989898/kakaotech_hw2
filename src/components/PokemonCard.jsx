import { useNavigate } from 'react-router-dom';
import { usePokemon } from '../context/PokemonContext';
import styled from 'styled-components';

const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 12px;
  width: 140px; /* ✅ 카드 폭 줄이기 */
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Image = styled.img`
  width: 80px; /* ✅ 이미지 크기 조정 */
  height: auto;
  cursor: pointer;
`;

const Name = styled.h4`
  margin: 10px 0 4px;
  font-size: 14px;
  font-weight: 600;
`;

const Type = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0;
`;

const AddButton = styled.button`
  background: #ff3b3b;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 5px 10px;
  margin-top: 8px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: #d32f2f;
  }
`;

function PokemonCard({ pokemon }) {
  const navigate = useNavigate();
  const { addPokemon } = usePokemon();

  if (!pokemon) return null;

  return (
    <Card>
      <Image
        src={pokemon.img_url}
        alt={pokemon.korean_name}
        onClick={() => navigate(`/detail/${pokemon.id}`)}
      />
      <Name>{pokemon.korean_name}</Name>
      <Type>{pokemon.types.join(', ')}</Type>
      <AddButton onClick={() => addPokemon(pokemon)}>추가</AddButton>
    </Card>
  );
}

export default PokemonCard;
