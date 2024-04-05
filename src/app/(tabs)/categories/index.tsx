import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Bar from '../../../components/searchBar';
import { Icon } from '@rneui/themed';
import { router } from 'expo-router';

export interface AppProps {
}

export default function App(props: AppProps) {
  return (
    <View style={styles.main}>
      <Bar></Bar>

      <Text style={styles.title}>Categorias</Text>

      <View style={{ alignItems: 'center' }}>
        <View style={styles.categories}>
          <View style={styles.itemCategorie}>
            <TouchableOpacity onPress={() => router.push('/categories/hardware')} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
              <Text style={styles.textCategorie}>Hardware</Text>
              <Icon name='arrow-right' type='font-awesome' color='white' />
            </TouchableOpacity>
          </View>
          <View style={styles.itemCategorie}>
            <TouchableOpacity onPress={() => router.push('/categories/perifericos')} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
              <Text style={styles.textCategorie}>Periféricos</Text>
              <Icon name='arrow-right' type='font-awesome' color='white' />
            </TouchableOpacity>
          </View>
          <View style={styles.itemCategorie}>
            <TouchableOpacity onPress={() => router.push('/categories/gabinetes')} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
              <Text style={styles.textCategorie}>Gabinetes</Text>
              <Icon name='arrow-right' type='font-awesome' color='white' />
            </TouchableOpacity>
          </View>
          <View style={styles.itemCategorie}>
            <TouchableOpacity onPress={() => router.push('/categories/monitores')} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
              <Text style={styles.textCategorie}>Monitores</Text>
              <Icon name='arrow-right' type='font-awesome' color='white' />
            </TouchableOpacity>
          </View>
          <View style={styles.itemCategorie}>
            <TouchableOpacity onPress={() => router.push('/categories/notebooks')} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
              <Text style={styles.textCategorie}>Notebooks</Text>
              <Icon name='arrow-right' type='font-awesome' color='white' />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 5 }}>
            <TouchableOpacity onPress={() => router.push('/categories/acessorios')} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
              <Text style={styles.textCategorie}>Acessórios</Text>
              <Icon name='arrow-right' type='font-awesome' color='white' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#222',
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 23,
    marginTop: '10%',
    marginLeft: 15
  },
  categories: {
    marginTop: '5%',
    backgroundColor: '#111',
    borderRadius: 10,
    width: '95%',
  },
  itemCategorie: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    padding: 5
  },
  textCategorie: {
    color: 'white',
    fontSize: 20
  }
})