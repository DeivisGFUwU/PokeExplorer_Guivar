import React, { useCallback } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import InfoMessage from '../../components/InfoMessage';
import { Screen } from '../../components/Screen';
import PokemonCard from '../../components/PokemonCard';
import usePokemonList from './usePokemonList';
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button';

const styles = StyleSheet.create({
  loading: { marginVertical: 16 },
  empty: { textAlign: 'center', color: '#888', marginTop: 32 },
  centered: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  error: { color: '#b71c1c', fontWeight: 'bold', fontSize: 16 },
  spacer: { height: 16 },
});

const HomeList: React.FC = () => {
  const { rows, load, loading, hasMore, error } = usePokemonList();
  const nav = useNavigation<any>();

  const renderFooter = useCallback(() => (
    loading ? <ActivityIndicator style={styles.loading} /> : null
  ), [loading]);

  const handlePress = useCallback((name: string) => {
    nav.navigate('PokemonDetail', { name });
  }, [nav]);

  type Row = { key: string; name: string; image: string; types: string[] };
  const renderItem = useCallback(
    ({ item }: { item: Row }) => (
      <PokemonCard
        name={item.name}
        image={item.image}
        types={item.types}
        onPress={() => handlePress(item.name)}
      />
    ),
    [handlePress]
  );

  if (error) {
    return (
      <Screen>
        <View style={styles.centered}>
          <InfoMessage message={error} type="error" />
          <View style={styles.spacer} />
          <Button title="Reintentar" onPress={load} />
        </View>
      </Screen>
    );
  }

  return (
    <Screen>
      <FlatList
        data={rows}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
        onEndReached={() => hasMore && !loading && load()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
  ListEmptyComponent={!loading ? <InfoMessage message="No hay Pokémon para mostrar." type="empty" /> : null}
      />
    </Screen>
  );
};

export default HomeList;
