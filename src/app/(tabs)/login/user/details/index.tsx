import * as React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import Bar from '../../../../../components/searchBar';
import { Icon } from '@rneui/base';
import { router } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function App(props: AppProps) {
    return (
        <View style={{ flex: 1, paddingTop: 40, backgroundColor: '#222' }}>
            <Bar></Bar>

            <ScrollView>
                <View style={styles.order}>
                    <Text style={styles.title}>Detalhes do pedido</Text>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => router.push('/login/user/requests')}>
                        <Icon name='chevron-left' color={'white'} size={17} style={{ marginTop: 7 }} />
                        <Text style={styles.voltar}>Voltar</Text>
                    </TouchableOpacity>
                </View>

                <Text style={styles.title2}>Endereço de entrega</Text>
                <View style={{ alignItems: 'center', paddingTop: 20 }}>
                    <View style={styles.container}>
                        <Text style={styles.text}>João Victor Pimentel</Text>
                        <Text style={styles.text}>Avenida Clovis Torres, Rui Palmeira, 744</Text>
                        <Text style={styles.text}>57245-318</Text>
                        <Text style={styles.text}>Alagoas</Text>
                    </View>
                </View>

                <Text style={styles.title2}>Método de entrega</Text>
                <View style={{ alignItems: 'center', paddingTop: 20 }}>
                    <View style={styles.container2}>
                        <Text style={styles.text}>Sedex - 1 a 7 dias úteis</Text>
                    </View>
                </View>

                <Text style={styles.title2}>Produto</Text>
                <View style={{ alignItems: 'center', paddingTop: 20 }}>
                    <View style={styles.container2}>
                        <Text style={styles.text}>HeadSet Logitech g733</Text>
                        <Text style={styles.text2}>R$899,99</Text>
                    </View>
                </View>

                <Text style={styles.title2}>Resumo</Text>
                <View style={{ alignItems: 'center', paddingTop: 20 }}>
                    <View style={styles.containerResumo}>
                        <View style={styles.itemResumo}>
                            <Text style={styles.textResumo}>Subtotal</Text>
                            <Text style={styles.text}>R$900,00</Text>
                        </View>
                        <View style={styles.itemResumo}>
                            <Text style={styles.textResumo}>Desconto</Text>
                            <Text style={styles.text}>R$00,00</Text>
                        </View>
                        <View style={styles.itemResumo}>
                            <Text style={styles.textResumo}>Entrega</Text>
                            <Text style={styles.text}>R$40,00</Text>
                        </View>
                        <View style={styles.totalResumo}>
                            <Text style={styles.textResumo2}>Valor total</Text>
                            <Text style={styles.text}>R$940,00</Text>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={{ alignItems: 'center', marginTop: 30, paddingBottom: 30}}>
                    <View style={styles.add}>
                        <FontAwesome name='truck' size={23} color={'white'}/>
                        <Text style={{ color: 'white', fontSize: 18, marginLeft: 13 }}>
                            Rastrear pedido
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
        fontSize: 20,
        marginLeft: 7
    },
    title2: {
        color: 'white',
        fontSize: 20,
        marginLeft: 16,
        paddingTop: 30
    },
    order: {
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
        height: 200,
        borderRadius: 10,
    },
    containerResumo: {
        backgroundColor: '#111',
        width: '95%',
        height: 330,
        borderRadius: 10,
        alignItems: 'center'
    },
    container2: {
        backgroundColor: '#111',
        width: '95%',
        height: 70,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    text: {
        color: 'white',
        fontSize: 18,
        paddingTop: 25,
        marginLeft: 25
    },
    text2: {
        color: 'white',
        fontSize: 18,
        paddingTop: 25,
        marginRight: 13
    },
    textResumo: {
        color: 'gray',
        fontSize: 20,
        paddingTop: 25,
    },
    textResumo2: {
        color: 'white',
        fontSize: 23,
        paddingTop: 25,
    },
    itemResumo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: '90%',
    },
    totalResumo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        width: '90%',
    },
    add: {
        backgroundColor: '#111',
        width: '85%',
        height: 50,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }
})