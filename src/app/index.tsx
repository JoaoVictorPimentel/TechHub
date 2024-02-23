import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Template from './template';
import Banner from '../components/banner';
import Card from './../components/card';


export interface MainProps {
}

export default function Main (props: MainProps) {
    return (
        <ScrollView>
            <Template>
                {/* BANNER */}
                <View>
                    <Banner></Banner>
                </View>

                {/* PRODUTOS */}
                <View>
                    <Text style={styles.title}>Mais comprados</Text>
                    
                    <View style={styles.cardSpace}>
                        <Card></Card>
                    </View>
                    <View style={styles.cardSpace}>
                        <Card></Card>
                    </View>
                    <View style={styles.cardSpace}>
                        <Card></Card>
                    </View>
                    
                </View>
            </Template>
        </ScrollView>
    );
}

const styles = StyleSheet.create ({
    title:{
        textAlign:'center',
        color:'white',
        fontSize: 30,
        marginTop: 30
    },
    cardSpace:{
        marginTop: 30
    }
})