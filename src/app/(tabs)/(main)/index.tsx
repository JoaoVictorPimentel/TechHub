import * as React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import Banner from '../../../components/banner';
import Bar from '../../../components/searchBar';
import Card from '../../../components/card';
import BannerPromo from '../../../components/bannerPromo';

export default function Main () {
    const vetor = [
        {image: require('../../../assets/imgs/g733.png'), name: 'Logitech G733', promoValue: 999.99, value: 799.99, valuePortion: 849.99},
        {image: require('../../../assets/imgs/superlight.webp'), name: 'Superlight', promoValue: 799.99, value: 549.99, valuePortion: 599.99},
        {image: require('../../../assets/imgs/gpro.png'), name: 'Logitech G PRO', promoValue: 1299.99, value: 1099.99, valuePortion: 1199.99},
        {image: require('../../../assets/imgs/placa.png'), name: 'RTX 4090', promoValue: 3999.99, value: 2499.99, valuePortion: 2999.99}
    ]
    const vetor2 = [
        {image: require('../../../assets/imgs/g733.png'), name: 'Logitech G733', promoValue: 999.99, value: 799.99, valuePortion: 849.99},
        {image: require('../../../assets/imgs/superlight.webp'), name: 'Superlight', promoValue: 799.99, value: 549.99, valuePortion: 599.99},
        {image: require('../../../assets/imgs/gpro.png'), name: 'Logitech G PRO', promoValue: 1299.99, value: 1099.99, valuePortion: 1199.99},
        {image: require('../../../assets/imgs/placa.png'), name: 'RTX 4090', promoValue: 3999.99, value: 2499.99, valuePortion: 2999.99}
    ]
    return (
        <ScrollView style={styles.main}>
            {/* PESQUISA */}
            <Bar></Bar>
            
            {/* MAIN */}
            <Banner></Banner>

            <Text style={styles.title}>Lançamentos</Text>

            <View style={{alignItems: 'center', marginTop: '7%'}}>
                <ScrollView>
                    <FlatList
                        data = {vetor}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item, index}) => (
                            <Card valor={item} key={index}/>
                        )}
                    />        
                </ScrollView>
            </View>

            <BannerPromo></BannerPromo>

            <Text style={styles.title}>Promoções</Text>

            <View style={{alignItems: 'center', marginTop: '7%'}}>
                <ScrollView>
                    <FlatList
                        data = {vetor2}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item, index}) => (
                            <Card valor={item} key={index}/>
                        )}
                    />        
                </ScrollView>
            </View>
        </ScrollView>        
    );
}

const styles = StyleSheet.create ({
    main: {
        backgroundColor: '#222',
        flex: 1
    },
    title: {
        color: '#fff',
        marginTop: '7%',
        fontSize: 20,
        marginLeft: '3%' 
    }
})