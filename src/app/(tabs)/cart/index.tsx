import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Bar from '../../../components/searchBar';

export default function App() {
  return (
    <View style={styles.main}>
      <Bar></Bar>

      <View style={styles.cart}>
        <FontAwesome name='shopping-cart' size={40} color={'gray'} />
        <Text style={styles.text}>Seu carrinho está vazio</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#222',
    flex: 1
  },
  cart: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '60%'
  },
  text: {
    color: 'gray',
    fontSize: 30
  }
})