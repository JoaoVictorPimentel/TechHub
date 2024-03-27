import * as React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import {Button} from '@rneui/themed';
import MyButton from './button';
import MyButtonPromo from './buttonPromo';


export interface CardPromoProps {
    image: 'string'
}

export default function CardPromo (props: CardPromoProps) {
    return (
    <View style={{alignItems: 'center'}}>
        <View style={styles.card}>
            <Image style={styles.itemImage} source={require('./../assets/imgs/akko.png')}/>
        
            <View style={styles.valueView}>
                <Text style={styles.title}>Akko 5075b plus</Text>
                <Text style={styles.valuePromo}>R$549,99</Text>
                <Text style={styles.value}>R$449,99</Text>
            </View>
            <View style={{marginTop: 15}}>
                <MyButtonPromo></MyButtonPromo>
            </View>
        </View>       
    </View>
    );
}

const styles = StyleSheet.create ({
    card: {
        backgroundColor: '#111',
        width: '90%',
        height: 370,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
    },

    itemImage: {
        width: 290,
        height: 145
    },

    valueView:{
        backgroundColor: '#222',
        width: 280,
        height: 95,
        padding: 3,
        borderRadius: 10,
        justifyContent: 'center',
        marginTop: 15
    },

    title: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        marginTop: 3
    },
    
    value: {
        color: 'white',
        textAlign: 'center',
        fontSize: 17,
        padding: 3
    },

    valuePromo: {
        color: '#0059A7',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 8,
        textDecorationLine: 'line-through',
    },

    buttonStyle: {
        padding: 5
    }
})
