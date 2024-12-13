type Pokemon = {
  number: string;
  name: string;
};

type Poke = {
  pokedex: Pokemon[];
};

export function PokemonList({ pokedex }: Poke) {
  return (
    <ul>
      {pokedex.map((pokemon) => (
        <li key={pokemon.number}> {pokemon.name}</li>
      ))}
    </ul>
  );
}
