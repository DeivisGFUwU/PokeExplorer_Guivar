import axios from 'axios';
export const pokeapi = axios.create({ baseURL: 'https://pokeapi.co/api/v2/', timeout: 10000 });

export type PokeListItem = { name: string; url: string };
export type PokeListResponse = { count: number; next: string | null; previous: string | null; results: PokeListItem };

export type Pokemon = {
  id: number;
  name: string;
  sprites: {
    other?: { ['official-artwork']?: { front_default?: string } }
  };
  types: { slot: number; type: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
  abilities: { ability: { name: string } }[];
};

export async function fetchPagedPokemon(offset = 0, limit = 20) {
  const {data} = await pokeapi.get<PokeListResponse>('pokemon', { params: { offset, limit }});
  return data;
}

export async function fetchPokemon(nameOrId: string | number) {
  const {data} = await pokeapi.get<Pokemon>(`pokemon/${nameOrId}`);
  return data;
}

export function getOfficialImage(p: Pokemon) {
  return p.sprites.other?.['official-artwork']?.front_default ?? '';
}
