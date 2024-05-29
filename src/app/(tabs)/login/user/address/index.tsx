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
        <Text style={styles.title}>Meus endereços</Text>
        <View style={styles.address}>
          <Text style={styles.title2}>Endereço de entrega padrão</Text>
          <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => router.back()}>
            <Icon name='chevron-left' color={'white'} size={17} style={{ marginTop: 7 }} />
            <Text style={styles.voltar}>Voltar</Text>
          </TouchableOpacity>
        </View>

        <View style={{ alignItems: 'center', paddingTop: 20 }}>
          <View style={styles.container}>
            <Text style={styles.text}>João Victor Pimentel</Text>
            <Text style={styles.text}>Avenida Clovis Torres, Rui Palmeira, 744</Text>
            <Text style={styles.text}>57245-318</Text>
            <Text style={styles.text}>Alagoas</Text>

            <TouchableOpacity style={{ alignItems: 'center', marginTop: 30 }}>
              <View style={styles.remote}>
                <Icon name='close' type='antdesign' color='white' />
                <Text style={{ color: 'white', fontSize: 18, marginLeft: 13 }}>
                  Remover endereço
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity style={{ alignItems: 'center' }}>
          <View style={styles.add}>
            <Icon name='add-box' type='materialicons' color='white' />
            <Text style={{ color: 'white', fontSize: 18, marginLeft: 13 }}>
              Adicionar endereço
            </Text>
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
  address: {
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
    height: '80%',
    borderRadius: 10
  },
  text: {
    color: 'white',
    fontSize: 18,
    paddingTop: 25,
    marginLeft: 25
  },
  remote: {
    backgroundColor: '#222',
    width: '90%',
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
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
  }
})