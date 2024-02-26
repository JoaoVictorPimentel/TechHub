import * as React from 'react';
import { View, StyleSheet} from 'react-native';
import {Button} from '@rneui/themed';
import { router } from 'expo-router';

export interface MyButtonPromoProps {

}

export default function MyButtonPromo (props: MyButtonPromoProps) {
    return (
        <View style={{alignItems: 'center'}}> 
            <Button onPress={() => router.push('/productPromo')} buttonStyle={styles.button} type='clear' titleStyle={{color: 'white', backgroundColor: ''}} title="Comprar"/>
        </View>
    );
}

const styles = StyleSheet.create({
    button:{
        backgroundColor: '#0059A7',
        borderRadius: 20,
        width: 130,
    },
})