import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Bar from '../../../../components/searchBar';
import { Icon } from '@rneui/base';
import { router } from 'expo-router';

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 40, backgroundColor: '#222' }}>
      <Bar></Bar>

      <Text style={styles.title}>Bem-vindo de volta, João</Text>

      <TouchableOpacity style={{ height: 100 }}>
        <View style={{ alignItems: 'center', paddingTop: 20 }}>
          <View style={styles.item}>
            <View style={{ flexDirection: 'row', marginLeft: 20 }}>
              <Icon name='user' type='font-awesome' color='white' />
              <Text style={styles.text}>Meus dados</Text>
            </View>
            <View style={{ marginRight: 20 }}>
              <Icon name='arrow-right' type='font-awesome' color='white' size={17} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{ height: 100 }} onPress={() => router.push('/cart')}>
        <View style={{ alignItems: 'center', paddingTop: 20 }}>
          <View style={styles.item}>
            <View style={{ flexDirection: 'row', marginLeft: 20 }}>
              <Icon name='shopping-bag' type='font-awesome' color='white' />
              <Text style={styles.text}>Meus pedidos</Text>
            </View>
            <View style={{ marginRight: 20 }}>
              <Icon name='arrow-right' type='font-awesome' color='white' size={17} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={{ height: 100 }}>
        <View style={{ alignItems: 'center', paddingTop: 20 }}>
          <View style={styles.item}>
            <View style={{ flexDirection: 'row', marginLeft: 20 }}>
              <Icon name='location-arrow' type='font-awesome' color='white' />
              <Text style={styles.text}>Meus Endereços</Text>
            </View>
            <View style={{ marginRight: 20 }}>
              <Icon name='arrow-right' type='font-awesome' color='white' size={17} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={{alignItems: 'center', marginTop: 200}} onPress={() => router.push('/login')}>
        <View style={styles.exit}>
          <Icon name='logout' type='MaterialCommunityIcons' color='white' />
          <Text style={{ color: 'white', fontSize: 18 }}>
            Sair
          </Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 23,
    paddingTop: 25,
    marginLeft: 20
  },
  item: {
    backgroundColor: '#111',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: 90,
    borderRadius: 10
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginTop: 5,
    marginLeft: 7
  },

  exit: {
    backgroundColor: '#222',
    width: '70%',
    height: 50,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }

})
