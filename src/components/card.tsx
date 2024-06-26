import * as React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import { useShopContext } from '../providers/shop';
import { router } from 'expo-router';

export interface CardProps {
    valor: { image: any, name: string, promoValue: Float, value: Float, valuePortion: Float }
}

export default function Card({ valor }: CardProps) {
    const { setProduct } = useShopContext();

    // ===========================================
    const handleOpenProduct = () => {
        setProduct(valor)
        router.push('/categories/products/');
    }
    // ===========================================

    return (
        <TouchableOpacity onPress={handleOpenProduct}>
            <View style={styles.card}>
                <Image style={styles.imageCard} source={{uri:valor.image}} />

                <View style={{ flexDirection: 'column', padding: 10}}>
                    <Text style={styles.titleCard}>{valor.name}</Text>
                    <View style={{ flexDirection: 'row', marginTop: 8, }}>
                        <Text style={styles.promoValue}>R$</Text>
                        <Text style={styles.promoValue}>{valor.promoValue}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 8, }}>
                        <Text style={styles.value}>R$</Text>
                        <Text style={styles.value}>{valor.value}</Text>
                        <Text style={styles.pix}>no PIX</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 8, }}>
                        <Text style={styles.portion}>R$</Text>
                        <Text style={styles.portion}>{valor.valuePortion}</Text>
                        <Text style={styles.portionText}>Em até 12x</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#111',
        width: 350,
        height: 200,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 15,
        borderRadius: 5,
        marginTop: 15
    },
    imageCard: {
        width: 140,
        height: 140,
        marginLeft: 15
    },
    titleCard: {
        fontSize: 21,
        color: 'white'
    },
    promoValue: {
        fontSize: 13,
        textDecorationLine: 'line-through',
        color: '#0059A7',
        marginTop: 8
    },
    value: {
        color: 'white',
        fontSize: 15,
    },
    pix: {
        color: 'white',
        fontSize: 15,
        marginLeft: 3
    },
    portion: {
        fontSize: 13,
        color: '#0059A7',
    },
    portionText: {
        fontSize: 13,
        color: 'grey',
        marginLeft: 4
    }
})
