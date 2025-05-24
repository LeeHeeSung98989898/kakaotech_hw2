import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addPokemon, removePokemon } from '../redux/pokemonSlice';
import styled from 'styled-components';
import { toast } from 'react-toastify';

const Card = styled.div`
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  padding: 12px;
  width: 140px;
  text-align: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const Image = styled.img`
  width: 80px;
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

const ActionButton = styled.button`
  background: ${({ isRemove }) => (isRemove ? '#777' : '#ff3b3b')};
  color: white;
  border: none;
  border-radius: 6px;
  padding: 5px 10px;
  margin-top: 8px;
  font-size: 12px;
  cursor: pointer;

  &:hover {
    background: ${({ isRemove }) => (isRemove ? '#555' : '#d32f2f')};
  }
`;

function PokemonCard({ pokemon }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.pokemon.selected);

  const isSelected = selected.some((p) => p.id === pokemon.id);

  const handleClick = () => {
    if (isSelected) {
      dispatch(removePokemon(pokemon.id));
      toast.info(`${pokemon.korean_name}을(를) 삭제했습니다.`);
    } else {
      if (selected.length >= 6) {
        toast.warn('더 이상 선택할 수 없습니다.');
        return;
      }
      dispatch(addPokemon(pokemon));
      toast.success(`${pokemon.korean_name}을(를) 추가했습니다!`);
    }
  };

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
      <ActionButton onClick={handleClick} isRemove={isSelected}>
        {isSelected ? '삭제' : '추가'}
      </ActionButton>
    </Card>
  );
}

export default PokemonCard;
