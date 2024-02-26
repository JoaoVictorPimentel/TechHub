import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Template from '../template';
import MyButton from '../../components/button';

export interface ProductProps {
}

export default function Product (props: ProductProps) {
    return (
        <ScrollView>
           <Template>
                <View style={{alignItems: 'center'}}>
                    <View style={styles.card}>
                        <Image style={styles.itemImage} source={require('./../../assets/imgs/akko.png')}/>
                    </View>       
                </View>

                <View style={{alignItems: 'center', marginTop: 20}}>
                    <Text style={styles.title}>Akko 5075b plus</Text>
                    <Text style={styles.valuePromo}>R$549,99</Text>
                    <Text style={styles.value}>R$449,99</Text>
                </View>

                <View style={{alignItems: 'center'}}>
                    <View style={styles.infoView}>
                        <View style={styles.info}>
                            <Text style={styles.titleInfo}>Marca: </Text>
                            <Text style={styles.subInfo}>Akko</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.titleInfo}>Modelo: </Text>
                            <Text style={styles.subInfo}>5075b plus</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.titleInfo}>Cor: </Text>
                            <Text style={styles.subInfo}>Preto</Text>
                        </View>
                        <View style={styles.info}>
                            <Text style={styles.titleInfo}>Conectividade: </Text>
                            <Text style={styles.subInfo}>Wireless / Usb c</Text>
                        </View>
                    </View>
                </View>
                
                <View style={{marginTop: 40}}>
                    <MyButton></MyButton>
                </View>
           </Template>
        </ScrollView>
    );
}

const styles = StyleSheet.create ({
    card: {
        backgroundColor: '#111',
        width: '90%',
        height: 400,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
    },

    itemImage: {
        width: 300,
        height: 150
    },

    title: {
        color: 'white',
        fontSize: 30
    },

    infoView: {
        backgroundColor: '#111',
        width: '90%',
        height: 300,
        padding: 10,
        alignItems: 'stretch',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
        marginTop: 20,
    },

    info: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        borderBottomColor: 'grey',
        borderBottomWidth: 1
    },

    titleInfo:{
        color: 'white',
        fontSize: 20
    },
    
    subInfo: {
        color: 'white',
        fontSize: 15,
        padding: 15
    },

    value: {
        color: 'white',
        fontSize: 30,
        marginTop: 10,
    },

    valuePromo: {
        color: '#0059A7',
        fontSize: 20,
        marginTop: 20,
        textDecorationLine: 'line-through'
    },
})