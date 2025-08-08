import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View, StyleSheet, Text} from 'react-native';
import { Screen } from '../components/Screen';
import PokemonCard from '../components/PokemonCard';
import Button from '../components/Button';
import {useAppStore} from '../store/useAppStore';
import {fetchPokemon, Pokemon} from '../api/pokeapi';

type Row = { key: string; name: string; image: string; types: string[] };

export default function FavoritesScreen() {
  const names = useAppStore(s => s.favorites);
  const toggleFavorite = useAppStore(s => s.toggleFavorite);
  const [rows, setRows] = useState<Row[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      try {
        const list = await Promise.all(names.map(n => fetchPokemon(n)));
        if (mounted) {
          setRows(list.map((p: Pokemon) => ({
            key: String(p.id),
            name: p.name,
            image: p.sprites.other?.['official-artwork']?.front_default ?? '',
            types: p.types.map(t => t.type.name),
          })));
        }
      } finally {
        setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [names]);

  if (loading) return <Screen><ActivityIndicator style={styles.loading}/></Screen>;

  return (
    <Screen>
      <FlatList
        data={rows}
        keyExtractor={(i) => i.key}
        renderItem={({item}) => (
          <PokemonCard
            name={item.name}
            image={item.image}
            types={item.types}
            right={<Button title="Quitar" onPress={() => toggleFavorite(item.name)} />}
          />
        )}
  ListEmptyComponent={<View style={styles.empty}><Text style={styles.emptyText}>No hay favoritos</Text></View>} 
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  loading: {marginTop: 24},
  empty: {height: 20, justifyContent: 'center'},
  emptyText: {textAlign: 'center', color: '#888'},
});
