import { Icon } from '@rneui/base';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Bar from '../../../components/searchBar';
import { useCartContext } from './../../../providers/cart';

const Cart = () => {
  const { cart, totalValue, removeFromCart } = useCartContext();

  return (
    <View style={{ flex: 1, paddingTop: 40, backgroundColor: '#222' }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Bar></Bar>

        <Text style={styles.carrinho}>Carrinho</Text>

        <View style={styles.container}>
          {cart.map((item, index) => (
            <View key={index.toString()} style={styles.item}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <View style={styles.info}>
                <Text style={styles.itemText}>{item.name}</Text>
                <Text style={styles.itemPrice}>R$ {item.value}</Text>
              </View>
              <TouchableOpacity onPress={() => removeFromCart(index)}>
                <Text style={styles.removeButton}>X</Text>
              </TouchableOpacity>
            </View>
          ))}
          <Text style={styles.total}>Total: R$ {totalValue.toFixed(2)}</Text>

          <TouchableOpacity style={{ alignItems: 'center'}}>
            <View style={styles.remote}>
              <Icon name='shoppingcart' type='antdesign' color='white' />
              <Text style={{ color: 'white', fontSize: 18, marginLeft: 13 }}>
                Finalizar compra
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#222',
  },
  item: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
  },
  itemText: {
    fontSize: 18,
    color: '#fff',
  },
  itemPrice: {
    fontSize: 16,
    color: 'gray',
  },
  removeButton: {
    fontSize: 18,
    color: 'red',
    marginLeft: 10,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    paddingTop: 40,
  },
  carrinho: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  remote: {
    backgroundColor: '#0059A7',
    width: '85%',
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60
  },
});

export default Cart;
