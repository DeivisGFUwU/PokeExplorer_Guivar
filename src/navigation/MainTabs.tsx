import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeList from '../screens/Home/HomeList';
import PokemonDetail from '../screens/Home/PokemonDetail';
import FavoritesScreen from '../screens/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {TabsParamList} from './types';

const Tab = createBottomTabNavigator<TabsParamList>();
const HomeStack = createNativeStackNavigator();

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeList" component={HomeList} options={{title: 'Pokémon'}}/>
      <HomeStack.Screen name="PokemonDetail" component={PokemonDetail} options={{title: 'Detalle'}}/>
    </HomeStack.Navigator>
  );
}

export default function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={HomeStackNavigator}/>
      <Tab.Screen name="Favoritos" component={FavoritesScreen}/>
      <Tab.Screen name="Perfil" component={ProfileScreen} options={{title: 'Mi Perfil'}}/>
    </Tab.Navigator>
  );
}
