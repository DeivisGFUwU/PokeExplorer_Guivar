import {useCallback, useEffect, useState} from 'react';
import {fetchPagedPokemon, fetchPokemon, Pokemon, PokeListItem} from '../../api/pokeapi';

type Row = { key: string; name: string; image: string; types: string[] };

export default function usePokemonList() {
  const [rows, setRows] = useState<Row[]>([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const load = useCallback(async () => {
    if (loading || !hasMore) return;
    setLoading(true);
    try {
      const page = await fetchPagedPokemon(offset, 20);

      const items: PokeListItem[] = Array.isArray(page.results)
        ? page.results
        : (page.results ? [page.results as PokeListItem] : []);

      const details = await Promise.all(
        items.map((r: PokeListItem) => fetchPokemon(r.name))
      );

      const mapped: Row[] = details.map((p: Pokemon) => ({
        key: String(p.id),
        name: p.name,
        image: p.sprites.other?.['official-artwork']?.front_default ?? '',
        types: p.types.map(t => t.type.name),
      }));

      setRows(prev => [...prev, ...mapped]);
      setOffset(prev => prev + items.length);
      setHasMore(Boolean(page.next));
    } catch (e) {
      console.warn('[usePokemonList] load error', e);
    } finally {
      setLoading(false);
    }
  }, [offset, loading, hasMore]);

  useEffect(() => {
    if (rows.length === 0 && !loading) {
      load();
    }
  }, [load, rows.length, loading]);

  return {rows, load, loading, hasMore};
}
