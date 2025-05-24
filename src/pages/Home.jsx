import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import pokemonLogo from '../assets/pokemon-logo-RN0wntMB.png';

const Container = styled.div`
  background-color: #fce8c4;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  width: 300px;
  margin-bottom: 30px;
`;

const StartButton = styled.button`
  background-color: #e53935;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #d32f2f;
  }
`;

function Home() {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo
        src={pokemonLogo}
        alt="Pokemon Logo"
      />
      <StartButton onClick={() => navigate('/dex')}>
        포켓몬 도감 시작하기
      </StartButton>
    </Container>
  );
}

export default Home;
