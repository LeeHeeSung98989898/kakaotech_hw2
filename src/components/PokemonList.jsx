import PokemonCard from './PokemonCard';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff3e0;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 24px;
  color: #d32f2f;
`;

const Grid = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;
  justify-content: center;
`;

function PokemonList({ list }) {
  return (
    <Wrapper>
      <Grid>
        {list.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid>
    </Wrapper>
  );
}

export default PokemonList;
