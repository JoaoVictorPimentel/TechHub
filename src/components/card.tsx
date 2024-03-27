import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from '@rneui/themed';
import MyButton from './button';


export interface CardProps {
    image: 'string'
}

export default function Card(props: CardProps) {
    return (
        <View style={styles.card}>
            <Image style={styles.imageCard} source={require('./../assets/imgs/g733.png')} />
            
            <View style={{flexDirection: 'column', padding: 6}}> 
                <Text style={styles.titleCard}>Logitech g733</Text>
                <Text style={styles.promoValue}>R$999,99</Text>
                <Text style={styles.value}>799,99 no PIX</Text>
                <View style={{flexDirection: 'row', marginTop: 8,}}>
                    <Text style={styles.portion}>899,99</Text>
                    <Text style={styles.portionText}>Em até 12x</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#111',
        width: 300,
        height: 170,
        flexDirection: 'row',
        alignItems: 'center'
    },
    imageCard: {
        width: 120,
        height: 120
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
        marginTop: 5
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
