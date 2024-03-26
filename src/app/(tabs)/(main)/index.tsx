import * as React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Banner from '../../../components/banner';
import { SearchBar } from '@rneui/base';

export interface MainProps {
}

export default function Main (props: MainProps) {
    return (
        <ScrollView style={styles.main}>
            <SearchBar></SearchBar>
        </ScrollView>        
    );
}

const styles = StyleSheet.create ({
    main: {
        backgroundColor: '#222',
    }
})