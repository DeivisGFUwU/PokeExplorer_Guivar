import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, Text, View, StyleSheet, ScrollView} from 'react-native';
import Screen from '../../components/Screen';
import {fetchPokemon, Pokemon} from '../../api/pokeapi';
import Button from '../../components/Button';
import {useAppStore} from '../../store/useAppStore';

export default function PokemonDetail({ route }: any) {
  const { name } = route.params;
  const [data, setData] = useState<Pokemon | null>(null);
  const [loading, setLoading] = useState(true);

  const toggleFavorite = useAppStore(s => s.toggleFavorite);
  const isFavorite = useAppStore(s => s.isFavorite(name));

  useEffect(() => {
    (async () => {
      try {
        const p = await fetchPokemon(name);
        setData(p);
      } finally {
        setLoading(false);
      }
    })();
  }, [name]);

  if (loading || !data) {
  return <Screen><ActivityIndicator style={styles.loading}/></Screen>;
  }

  const img = data.sprites.other?.['official-artwork']?.front_default ?? '';
  return (
    <Screen>
  <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={{uri: img}} style={styles.hero}/>
        <Text style={styles.title}>{data.name}</Text>

        <Text style={styles.section}>Tipos</Text>
        <Text style={styles.text}>{data.types.map(t => t.type.name).join(' / ')}</Text>

        <Text style={styles.section}>Estadísticas</Text>
        {data.stats.map(s => (
          <Text key={s.stat.name} style={styles.text}>
            {s.stat.name.toUpperCase()}: {s.base_stat}
          </Text>
        ))}

        <Text style={styles.section}>Habilidades</Text>
        <Text style={styles.text}>
          {data.abilities.map(a => a.ability.name).join(', ')}
        </Text>

  <View style={styles.spacer}/>
        <Button
          title={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          onPress={() => toggleFavorite(data.name)}
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: {width: '100%', height: 220, resizeMode: 'contain', marginBottom: 12},
  title: {fontSize: 22, fontWeight: '800', textTransform: 'capitalize', marginBottom: 12},
  section: {fontWeight: '700', marginTop: 12, marginBottom: 4},
  text: {textTransform: 'capitalize'},
  loading: {marginTop: 24},
  scrollContent: {paddingBottom: 24},
  spacer: {height: 12},
});
