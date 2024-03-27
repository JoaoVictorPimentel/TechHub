import { Input } from '@rneui/base';
import * as React from 'react';
import { View, StyleSheet, Image, } from 'react-native';

export interface BarProps {
}

export default function Bar (props: BarProps) {
    return (
      <View style={styles.inputView}>
         <Input style={styles.inputStyle} placeholder='Pesquise seu produto' rightIcon={{name: 'search', color: 'white'}} inputStyle={{color: 'white'}}/>
      </View>
    );
}

const styles = StyleSheet.create ({
    inputView: {
        backgroundColor: '#333',
        flexDirection: 'row'
    },
    image: {
        width: '25%',
        height: 80,
        borderBottomRightRadius: 30,
        borderTopRightRadius: 30
    },
    inputStyle: {
        width: '50%',
    }
})