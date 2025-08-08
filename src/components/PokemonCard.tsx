import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';

type Props = {
  name: string;
  image: string;
  types: string[];
  onPress?: () => void;
  right?: React.ReactNode;
};

const PokemonCard = React.memo(function PokemonCard({name, image, types, onPress, right}: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.8}>
      <Image source={{uri: image}} style={styles.img}/>
      <View style={styles.flex1}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.types}>{types.join(' / ')}</Text>
      </View>
      {right}
    </TouchableOpacity>
  );
});

export default PokemonCard;

const styles = StyleSheet.create({
  card: {flexDirection: 'row', alignItems: 'center', gap: 12, padding: 12, borderRadius: 14, borderWidth: 1, borderColor: '#e6e6e6', marginBottom: 10},
  img: {width: 64, height: 64},
  title: {fontWeight: '700', fontSize: 16, textTransform: 'capitalize'},
  types: {color: '#666', textTransform: 'capitalize'},
  flex1: {flex: 1}
});
