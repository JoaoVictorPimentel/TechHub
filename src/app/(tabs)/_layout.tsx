import * as React from 'react';
import {Tabs} from 'expo-router/tabs'
import {FontAwesome} from '@expo/vector-icons';

export interface LayoutProps {
}

export default function Layout () {
    return (
      <Tabs screenOptions={{ headerShown: false, 
        tabBarStyle: {backgroundColor: '#111'}
      }}>
        <Tabs.Screen name='(main)/Index' options={{
          title: 'Home',
          tabBarIcon: (button) => <FontAwesome name='home' color={(button.focused ? '#0059A7' : 'white')}/>
        }}/>
        <Tabs.Screen name='categories/Index' options={{
          title: 'Categorias',
          tabBarIcon: (button) => <FontAwesome name='navicon' color={(button.focused ? '#0059A7' : 'white')}/>
        }}/>
        <Tabs.Screen name='cart/Index' options={{
          title: 'Carrinho',
          tabBarIcon: (button) => <FontAwesome name='shopping-cart' color={(button.focused ? '#0059A7' : 'white')}/>
        }}/>
        <Tabs.Screen name='login/Index' options={{
          title: 'Conta',
          tabBarIcon: (button) => <FontAwesome name='user' color={(button.focused ? '#0059A7' : 'white')}/>
        }}/>
      </Tabs>
    );
}
