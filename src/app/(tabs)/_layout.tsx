import * as React from 'react';
import { Tabs } from 'expo-router/tabs'
import { FontAwesome } from '@expo/vector-icons';
import { View } from 'react-native';

export interface LayoutProps {
}

export default function Layout() {
  return (
    <View style={{flex:1, backgroundColor:'#222'}}>
      <Tabs screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#111',
        }
      }}>
        <Tabs.Screen name='(main)/index' options={{
          title: 'Home',
          tabBarIcon: (button) => <FontAwesome name='home' size={25} color={(button.focused ? '#0059A7' : 'white')} />
        }} />
        <Tabs.Screen name='categories' options={{
          title: 'Categorias',
          tabBarIcon: (button) => <FontAwesome name='navicon' size={25} color={(button.focused ? '#0059A7' : 'white')} />
        }} />
        <Tabs.Screen name='favorites/index' options={{
          title: 'Favoritos',
          tabBarIcon: (button) => <FontAwesome name='heart' size={25} color={(button.focused ? '#0059A7' : 'white')} />
        }} />
        <Tabs.Screen name='cart/index' options={{
          title: 'Carrinho',
          tabBarIcon: (button) => <FontAwesome name='shopping-cart' size={25} color={(button.focused ? '#0059A7' : 'white')} />
        }} />
        <Tabs.Screen name='login' options={{
          title: 'Conta',
          tabBarIcon: (button) => <FontAwesome name='user' size={25} color={(button.focused ? '#0059A7' : 'white')} />
        }} />
      </Tabs>
    </View>
  );
}
