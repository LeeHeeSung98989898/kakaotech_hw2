import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dex from './pages/Dex';
import PokemonDetail from './pages/PokemonDetail';
import MOCK_DATA from './data/MOCK_DATA';

function App() {
  const [selected, setSelected] = useState(() => {
    const stored = localStorage.getItem('selectedPokemons');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('selectedPokemons', JSON.stringify(selected));
  }, [selected]);

  const addPokemon = (pokemon) => {
    if (selected.find((p) => p.id === pokemon.id)) {
      alert('이미 선택된 포켓몬입니다.');
      return;
    }
    if (selected.length >= 6) {
      alert('더 이상 선택할 수 없습니다.');
      return;
    }
    setSelected((prev) => [...prev, pokemon]);
  };

  const removePokemon = (id) => {
    setSelected((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/dex"
        element={
          <Dex
            selected={selected}
            addPokemon={addPokemon}
            removePokemon={removePokemon}
            list={MOCK_DATA}
          />
        }
      />
      <Route
        path="/detail/:id"
        element={
          <PokemonDetail
            selected={selected}
            addPokemon={addPokemon}
            removePokemon={removePokemon}
          />
        }
      />
    </Routes>
  );
}

export default App;
