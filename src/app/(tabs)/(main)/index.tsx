import * as React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Banner from '../../../components/banner';
import Bar from '../../../components/searchBar';
import Card from '../../../components/card';

export interface MainProps {
}

export default function Main (props: MainProps) {
    return (
        <ScrollView style={styles.main}>
            {/* PESQUISA */}
            <Bar></Bar>
            
            {/* MAIN */}
            <Banner></Banner>

            <Text style={styles.title}>Lançamentos</Text>

            <View style={{alignItems: 'center', marginTop: '7%'}}>
                <Card></Card>
            </View>
        </ScrollView>        
    );
}

const styles = StyleSheet.create ({
    main: {
        backgroundColor: '#222',
    },
    title: {
        color: '#fff',
        marginTop: '7%',
        fontSize: 20,
        marginLeft: '3%' 
    }
})