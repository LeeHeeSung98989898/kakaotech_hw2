import { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';

const PokemonContext = createContext();

export function PokemonProvider({ children }) {
  const [selected, setSelected] = useState(() => {
    const stored = localStorage.getItem('selectedPokemons');
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem('selectedPokemons', JSON.stringify(selected));
  }, [selected]);

  const addPokemon = (pokemon) => {
    const isAlready = selected.find((p) => p.id === pokemon.id);
    if (isAlready) {
      toast.error('이미 선택된 포켓몬입니다.');
      return;
    }

    if (selected.length >= 6) {
      toast.warn('더 이상 선택할 수 없습니다.');
      return;
    }

    const newList = [...selected, pokemon];
    setSelected(newList);
    toast.success(`${pokemon.korean_name}을(를) 추가했습니다!`);
  };

  const removePokemon = (id) => {
    const newList = selected.filter((p) => p.id !== id);
    setSelected(newList);
    toast.info('포켓몬이 삭제되었습니다.');
  };

  return (
    <PokemonContext.Provider value={{ selected, addPokemon, removePokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}

export function usePokemon() {
  return useContext(PokemonContext);
}
