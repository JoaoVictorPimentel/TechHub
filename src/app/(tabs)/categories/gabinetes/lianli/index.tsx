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
        { image: require('../../../../../assets/imgs/o11-vision.png'), name: 'O11 Vision', promoValue: 1199.99, value: 899.99, valuePortion: 999.99 },
        { image: require('../../../../../assets/imgs/o11-dynamic.png'), name: 'O11 Dynamic', promoValue: 999.99, value: 749.99, valuePortion: 849.99 },
        { image: require('../../../../../assets/imgs/dynamic-mini.png'), name: 'Dynamic Mini', promoValue: 949.99, value: 699.99, valuePortion: 799.99 },
        { image: require('../../../../../assets/imgs/o11-vision-branco.png'), name: 'O11 Vision Branco', promoValue: 1199.99, value: 899.99, valuePortion: 999.99 },
    ]
    return (

        <View style={styles.main}>
            <Bar></Bar>

            <View style={styles.categoria}>
                <Text style={styles.title}>Gabinetes</Text>
                <TouchableOpacity style={{ flexDirection: 'row', marginTop: 32 }} onPress={() => router.push('/categories/gabinetes')}>
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
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#222',
        flex: 1
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