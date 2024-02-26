import * as React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import Template from './template';
import Banner from '../components/banner';
import Card from './../components/card';
import BannerPromo from '../components/bannerPromo';
import CardPromo from '../components/cardPromo';


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
                   <View style={styles.titleView}>
                        <Text style={styles.title}>Mais comprados</Text>
                   </View>
                    
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

                <View style={{borderBottomColor: 'grey',
                                borderBottomWidth: 1,
                                marginTop: 50}}/>

                {/* PROMOÇÕES */}
                <View style={{marginTop: 50}}>
                    <View>
                        <BannerPromo></BannerPromo>
                    </View>

                    <View style={styles.titleView}>
                        <Text style={styles.title}>Promoções</Text>
                    </View>

                    <View style={styles.cardSpace}>
                        <CardPromo></CardPromo>
                    </View>
                    <View style={styles.cardSpace}>
                        <CardPromo></CardPromo>
                    </View>
                    <View style={styles.cardSpace}>
                        <CardPromo></CardPromo>
                    </View>
                </View>
            </Template>
        </ScrollView>
    );
}

const styles = StyleSheet.create ({
    titleView: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: '100%',
    },

    title:{
        textAlign:'center',
        color:'white',
        fontSize: 25,
        marginTop: 30,
    },
    cardSpace:{
        marginTop: 30
    }
})