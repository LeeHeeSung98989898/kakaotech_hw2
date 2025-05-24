import Dashboard from '../components/Dashboard';
import PokemonList from '../components/PokemonList';
import MOCK_DATA from '../data/MOCK_DATA';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

const Title = styled.h2`
  text-align: center;
  color: red;
`;

function Dex() {
  return (
    <Container>
      <Dashboard />
      <PokemonList list={MOCK_DATA} />
    </Container>
  );
}

export default Dex;
