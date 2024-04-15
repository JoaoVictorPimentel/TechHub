import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Bar from '../../../../components/searchBar';
import { Icon } from '@rneui/themed';
import { router } from 'expo-router';

export interface AppProps {
}

export default function App(props: AppProps) {
  return (
    <View style={{ flex: 1, paddingTop: 40, backgroundColor: '#222' }}>

      <ScrollView style={{backgroundColor: '#222'}}>
        <View style={styles.main}>
          <Bar></Bar>

          <Text style={styles.title}>Categorias</Text>

          <View style={styles.categoria}>
            <Text style={styles.title2}>Hardwares</Text>
            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => router.push('/categories')}>
              <Icon name='chevron-left' color={'white'} size={17} style={{marginTop: 7}}/>
              <Text style={styles.voltar}>Voltar</Text>
            </TouchableOpacity>
          </View>

          <View style={{alignItems: 'center'}}>
            <View style={styles.categories}>
              <View style={styles.itemCategorie}>
                <TouchableOpacity onPress={() => router.push('/categories/hardware/placas')} style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
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
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#222',
    flex: 1
  },
  title: {
    color: 'gray',
    fontSize: 23,
    marginTop: '5%',
    marginLeft: 15
  },
  title2: {
    color: 'white',
    fontSize: 23
  },
  categoria: {
    marginTop: '3%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginLeft: 15
  },
  voltar: {
    color: 'white',
    fontSize: 15,
    marginTop: 7
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