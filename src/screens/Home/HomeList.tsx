import React, {useCallback} from 'react';
import {ActivityIndicator, FlatList, StyleSheet} from 'react-native';
import Screen from '../../components/Screen';
import PokemonCard from '../../components/PokemonCard';
import usePokemonList from './usePokemonList';
import {useNavigation} from '@react-navigation/native';

export default function HomeList() {
  const {rows, load, loading, hasMore} = usePokemonList();
  const nav = useNavigation<any>();

  const renderFooter = useCallback(() => (
    loading ? <ActivityIndicator style={styles.loading}/> : null
  ), [loading]);

  return (
    <Screen>
      <FlatList
        data={rows}
        keyExtractor={(item) => item.key}
        renderItem={({item}) => (
          <PokemonCard
            name={item.name}
            image={item.image}
            types={item.types}
            onPress={() => nav.navigate('PokemonDetail', { name: item.name })}
          />
        )}
        onEndReached={() => hasMore && !loading && load()}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  loading: {marginVertical: 16},
});
