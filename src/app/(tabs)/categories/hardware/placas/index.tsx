import * as React from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList, Touchable, TouchableOpacity } from 'react-native';
import Bar from '../../../../../components/searchBar';
import Card2 from '../../../../../components/card2';
import { Icon } from '@rneui/base';
import { router } from 'expo-router';

export interface AppProps {
}

export default function App(props: AppProps) {
    const vetor = [
        { image: require('../../../../../assets/imgs/placa.png'), name: 'RTX 4090', promoValue: 3999.99, value: 2499.99, valuePortion: 2999.99 },
        { image: require('../../../../../assets/imgs/6600.png'), name: 'RX 6600', promoValue: 1299.99, value: 1049.99, valuePortion: 1199.99 },
        { image: require('../../../../../assets/imgs/3070.png'), name: 'RTX 3070 TI', promoValue: 1599.99, value: 1299.99, valuePortion: 1399.99 },
        { image: require('../../../../../assets/imgs/7700.png'), name: 'RX 7700 XT', promoValue: 3999.99, value: 2499.99, valuePortion: 2999.99 },
    ]
    return (
        <View style={{ flex: 1, paddingTop: 40, backgroundColor: '#222' }}>

            <View style={styles.main}>
                <Bar></Bar>

                <View style={styles.categoria}>
                    <Text style={styles.title}>Placas de vídeo</Text>
                    <TouchableOpacity style={{ flexDirection: 'row', marginTop: 32 }} onPress={() => router.push('/categories/hardware')}>
                        <Icon name='chevron-left' color={'white'} size={17} style={{ marginTop: 7 }} />
                        <Text style={styles.voltar}>Voltar</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', marginTop: '7%' }}>

                    <FlatList
                        data={vetor}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => (
                            <Card2 valor={item} key={index} />
                        )}
                    />

                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#222',
        flex: 1,
        marginBottom: 180
    },
    title: {
        color: 'white',
        fontSize: 23,
        marginTop: '10%',
        marginLeft: 15
    },
    categoria: {
        marginTop: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginLeft: 9
    },
    voltar: {
        color: 'white',
        fontSize: 15,
        marginTop: 7
    },
})