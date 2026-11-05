import axios from 'axios';

import { Pokemon, PokemonSummary } from '@/types/PokeApiTypes';

const QUERY_POKEMONS = `
  query GetPokemons($limit: Int!, $offset: Int!) {
    pokemon(
      limit: $limit
      offset: $offset
      order_by: { id: asc }
      where: { is_default: { _eq: true } }
    ) {
      id
      name
      pokemontypes { type { name } }
    }
  }
`

const getPokemons = (page: number): Promise<PokemonSummary[]> => {
  return axios.post('https://graphql.pokeapi.co/v1beta2', {
    query: QUERY_POKEMONS,
    variables: { limit: 30, offset: page * 30 },
    operationName: 'GetPokemons',
  }).then((response) => {
    const { data } = response.data;
    const pokemons = data.pokemon.map((p: any) => ({
      id: p.id,
      name: p.name,
      types: p.pokemontypes.map((t: any) => t.type.name),
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`,
    }));
    return pokemons;
  });
}

const getPokemonDetails = (id: number) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then((response) => response.data as Pokemon);

export default {
  getPokemons,
  getPokemonDetails,
};

