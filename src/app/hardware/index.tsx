import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Bar from '../../components/searchBar';
import { Icon } from '@rneui/themed';

export interface AppProps {
}

export default function App(props: AppProps) {
  return (
    <ScrollView>
      <View style={styles.main}>
        <Bar></Bar>

        <Text style={styles.title}>Categorias</Text>

        <View style={styles.categories}>
          <View style={styles.itemCategorie}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
              <Text style={styles.textCategorie}>Placas de vídeo</Text>
              <Icon name='arrow-right' type='font-awesome' color='white' />
            </TouchableOpacity>
          </View>
          <View style={styles.itemCategorie}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
              <Text style={styles.textCategorie}>Processadores</Text>
              <Icon name='arrow-right' type='font-awesome' color='white' />
            </TouchableOpacity>
          </View>
          <View style={styles.itemCategorie}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
              <Text style={styles.textCategorie}>Memória Ram</Text>
              <Icon name='arrow-right' type='font-awesome' color='white' />
            </TouchableOpacity>
          </View>
          <View style={styles.itemCategorie}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
              <Text style={styles.textCategorie}>Placa mãe</Text>
              <Icon name='arrow-right' type='font-awesome' color='white' />
            </TouchableOpacity>
          </View>
          <View style={styles.itemCategorie}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
              <Text style={styles.textCategorie}>Fonte</Text>
              <Icon name='arrow-right' type='font-awesome' color='white' />
            </TouchableOpacity>
          </View>
          <View style={styles.itemCategorie}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
              <Text style={styles.textCategorie}>WaterCooler e coolers</Text>
              <Icon name='arrow-right' type='font-awesome' color='white' />
            </TouchableOpacity>
          </View>
          <View style={styles.itemCategorie}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
              <Text style={styles.textCategorie}>SSD e HD</Text>
              <Icon name='arrow-right' type='font-awesome' color='white' />
            </TouchableOpacity>
          </View>
          <View style={{ padding: 5 }}>
            <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
              <Text style={styles.textCategorie}>Fans</Text>
              <Icon name='arrow-right' type='font-awesome' color='white' />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#222',
    alignItems: 'center',
    height: '100%'
  },
  title: {
    color: 'white',
    fontSize: 23,
    marginTop: '10%'
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