import * as React from 'react';
import {Tabs} from 'expo-router/tabs'
import {FontAwesome} from '@expo/vector-icons';


export interface LayoutProps {
}

export default function Layout (props: LayoutProps) {
    return (
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name='(main)/Index' options={{
          tabBarIcon: () => <FontAwesome name='home'/>
        }}/>
        <Tabs.Screen name='categories/Index' options={{
          tabBarIcon: () => <FontAwesome name='navicon'/>
        }}/>
        <Tabs.Screen name='cart/Index' options={{
          tabBarIcon: () => <FontAwesome name='shopping-cart'/>
        }}/>
        <Tabs.Screen name='login/Index' options={{
          tabBarIcon: () => <FontAwesome name='user'/>
        }}/>
      </Tabs>
    );
}
