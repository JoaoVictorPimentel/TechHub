import { Input } from '@rneui/base';
import * as React from 'react';
import { View, StyleSheet } from 'react-native';

export interface searchBarProps {
}

export default function searchBar (props: searchBarProps) {
    return (
      <View style={styles.inputView}>
         <Input placeholder='Pesquise seu produto' rightIcon={{name: 'search', color: 'white'}} inputStyle={{color: 'white'}}/>
      </View>
    );
}

const styles = StyleSheet.create ({
    inputView: {
        backgroundColor: '#333'
    }
})