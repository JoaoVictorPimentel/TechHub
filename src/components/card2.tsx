import { router } from 'expo-router';
import * as React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Float } from 'react-native/Libraries/Types/CodegenTypes';
import { useShopContext } from '../providers/shop';

export interface Card2Props {
    valor: {image: any, name: string, promoValue: Float, value: Float, valuePortion: Float}
}

export default function Card2({valor}: Card2Props) {
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
                <Image style={styles.imageCard} source={{ uri: valor.image }} />
                
                <View style={{flexDirection: 'column', padding: 10}}> 
                    <Text style={styles.titleCard}>{valor.name}</Text>
                    <View style={{flexDirection: 'row', marginTop: 8,}}>
                        <Text style={styles.promo}>De R$</Text>
                        <Text style={styles.promoValue}>{valor.promoValue}</Text>
                        <Text style={styles.promo}> por: </Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 8,}}>
                        <Text style={styles.value}>R$</Text>
                        <Text style={styles.value}>{valor.value}</Text>
                        <Text style={styles.pix}>no PIX</Text>
                    </View>
                    <View style={{flexDirection: 'row', marginTop: 8,}}>
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
        width: 370,
        height: 250,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 5
    },
    imageCard: {
        width: 160,
        height: 160,
        marginLeft: 15
    },
    titleCard: {
        fontSize: 25,
        color: 'white'
    },
    promo: {
        fontSize: 13,
        color: '#0059A7',
        marginTop: 8
    },
    promoValue: {
        fontSize: 13,
        textDecorationLine: 'line-through',
        color: '#0059A7',
        marginTop: 8
    },
    value: {
        color: 'white',
        fontSize: 17, 
    }, 
    pix: {
        color: 'white',
        fontSize: 15, 
        marginTop: 1,
        marginLeft: 3
    }, 
    portion: {
        fontSize: 14,
        color: '#0059A7',
    },
    portionText: {
        fontSize: 13,
        color: 'grey',
        marginLeft: 4
    }
})
