function Dashboard({ selected, removePokemon }) {
  return (
    <div>
      <h3>나만의 포켓몬</h3>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {selected.map((pokemon) => (
          <div key={pokemon.id}>
            <img src={pokemon.img_url} alt={pokemon.korean_name} width="80" />
            <p>{pokemon.korean_name}</p>
            <button onClick={() => removePokemon(pokemon.id)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
