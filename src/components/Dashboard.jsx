import { usePokemon } from '../context/PokemonContext';
import styled from 'styled-components';

const Wrapper = styled.div`
  background-color: #fafafa;
  padding: 24px;
  border-radius: 12px;
  margin: 24px auto;
  max-width: 900px;
`;

const Title = styled.h2`
  color: #e53935;
  text-align: center;
  margin-bottom: 16px;
`;

const Line = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

const Card = styled.div`
  width: 120px;
  height: 160px;
  background: white;
  border-radius: 10px;
  padding: 12px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 80px;
  height: auto;
`;

const Name = styled.h4`
  font-size: 14px;
  margin: 8px 0 4px;
`;

const IdText = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0;
`;

const DeleteButton = styled.button`
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

function Dashboard() {
  const { selected, removePokemon } = usePokemon();
  
  const cards = [];
  for (let i = 0; i < 6; i++) {
    const pokemon = selected[i];
    if (pokemon) {
      cards.push(
        <Card key={pokemon.id}>
          <Image src={pokemon.img_url} alt={pokemon.korean_name} />
          <Name>{pokemon.korean_name}</Name>
          <IdText>No. {pokemon.id.toString().padStart(3, '0')}</IdText>
          <DeleteButton onClick={() => removePokemon(pokemon.id)}>삭제</DeleteButton>
        </Card>
      );
    } else {
      cards.push(
        <Card key={`empty-${i}`}>
          <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
            alt="빈 슬롯"
          />
        </Card>
      );
    }
  }

  return (
    <Wrapper>
      <Title>나만의 포켓몬</Title>
      <Line>{cards}</Line>
    </Wrapper>
  );
}

export default Dashboard;
