import * as React from 'react';
import { View, Text, Image, StyleSheet} from 'react-native';
import {Button} from '@rneui/themed';
import MyButton from './button';


export interface CardProps {
    image: 'string'
}

export default function Card (props: CardProps) {
    return (
    <View style={{alignItems: 'center'}}>
        <View style={styles.card}>
            <Image style={styles.itemImage} source={require('./../assets/imgs/g733.png')}/>
        
            <View style={styles.valueView}>
                <Text style={styles.title}>Logitech G733 Wireless</Text>
                <Text style={styles.value}>R$899,99</Text>
            </View>
            <View style={{marginTop: 15}}>
                <MyButton></MyButton>
            </View>
        </View>       
    </View>
    );
}

const styles = StyleSheet.create ({
    card: {
        backgroundColor: '#111',
        width: '90%',
        height: 360,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
    },

    itemImage: {
        width: 200,
        height: 200
    },

    valueView:{
        backgroundColor: '#222',
        width: 280,
        height: 65,
        padding: 3,
        borderRadius: 10
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
        padding: 10
    },

    buttonStyle: {
        padding: 5
    }
})
