import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import MyButton from '../../../components/button';

export interface ProductProps {
}

export default function Product(props: ProductProps) {
    return (
        <ScrollView>
            <View style={{ alignItems: 'center' }}>
                <View style={styles.card}>
                    <Image style={styles.itemImage} source={require('./../../../assets/imgs/g733.png')} />
                </View>
            </View>

            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <Text style={styles.title}>Logitech G733 Wireless</Text>
                <Text style={styles.value}>R$899,99</Text>
            </View>

            <View style={{ alignItems: 'center' }}>
                <View style={styles.infoView}>
                    <View style={styles.info}>
                        <Text style={styles.titleInfo}>Marca: </Text>
                        <Text style={styles.subInfo}>Logitech</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.titleInfo}>Modelo: </Text>
                        <Text style={styles.subInfo}>G733</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.titleInfo}>Cor: </Text>
                        <Text style={styles.subInfo}>Preto</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.titleInfo}>Conectividade: </Text>
                        <Text style={styles.subInfo}>Wireless</Text>
                    </View>
                </View>
            </View>

            <View style={{ marginTop: 40 }}>
                <MyButton></MyButton>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#111',
        width: '90%',
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
    },

    itemImage: {
        width: 400,
        height: 400
    },

    title: {
        color: 'white',
        fontSize: 30,
        marginTop: 20
    },

    value: {
        color: 'white',
        fontSize: 30,
        marginTop: 20
    },

    infoView: {
        backgroundColor: '#111',
        width: '90%',
        height: 300,
        padding: 10,
        alignItems: 'stretch',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        marginTop: 20,
    },

    info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },

    titleInfo: {
        color: 'white',
        fontSize: 20
    },

    subInfo: {
        color: 'white',
        fontSize: 15,
        padding: 15
    }
})