import { Icon } from '@rneui/base';
import { router } from 'expo-router';
import * as React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Bar from '../../../../../components/searchBar';

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 40, backgroundColor: '#222' }}>
      <Bar></Bar>

      <ScrollView showsVerticalScrollIndicator={false}>

        <Text style={styles.title}>Meus pedidos</Text>
        <View style={styles.request}>
          <Text style={styles.title2}>Pedidos recentes</Text>
          <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => router.back()}>
            <Icon name='chevron-left' color={'white'} size={17} style={{ marginTop: 7 }} />
            <Text style={styles.voltar}>Voltar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={{ alignItems: 'center', paddingTop: 20 }} onPress={() => router.push('/login/user/details')}>
          <View style={styles.container}>
            <Text style={styles.titleOrder}>#103215</Text>
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
              <Text style={styles.text}>Data:</Text>
              <Text style={styles.text2}>06/03/2024</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
              <Text style={styles.text}>Valor total:</Text>
              <Text style={styles.text2}>R$390,00</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
              <Text style={styles.text}>Data:</Text>
              <Text style={styles.text2}>06/03/2024</Text>
            </View>
            <View style={{ flexDirection: 'row', marginLeft: 10 }}>
              <Text style={styles.text}>Status:</Text>
              <Text style={styles.text2}>Pedido entregue</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'gray',
    fontSize: 23,
    marginTop: '5%',
    marginLeft: 15
  },
  title2: {
    color: 'white',
    fontSize: 20,
    marginLeft: 7
  },
  titleOrder: {
    color: 'gray',
    fontSize: 20,
    marginTop: '5%',
    marginLeft: 15
  },
  request: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginLeft: 9,
  },
  voltar: {
    color: 'white',
    fontSize: 15,
    marginTop: 7
  },
  container: {
    backgroundColor: '#111',
    width: '95%',
    height: '90%',
    borderRadius: 10
  },
  text: {
    color: 'white',
    fontSize: 18,
    paddingTop: 25,
    marginLeft: 5
  },
  text2: {
    color: 'white',
    fontSize: 18,
    paddingTop: 25,
    marginLeft: 5,
    fontWeight: 'bold',
  }
})