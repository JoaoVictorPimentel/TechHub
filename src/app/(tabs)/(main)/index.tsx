import { collection, getDocs } from 'firebase/firestore';
import * as React from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import Banner from '../../../components/banner';
import BannerPromo from '../../../components/bannerPromo';
import Card from '../../../components/card';
import Card2 from '../../../components/card2';
import Bar from '../../../components/searchBar';
import { db } from '../../../config/firebase-config';

export default function Main() {

    const [ vetor, setVetor ] = React.useState([])
    const [ vetor2, setVetor2 ] = React.useState([])


    const buscarDados = async () => {
        const snapshots  = await getDocs(collection(db, 'produtos'))
        const dados: any = []
        snapshots.forEach(snapshot => {
            dados.push(snapshot.data())
        })
        setVetor(dados)
    }

    const buscarDados2 = async () => {
        const snapshots = await getDocs(collection(db, 'produtosPromo'))
        const dados: any = []
        snapshots.forEach(snapshot => {
            dados.push(snapshot.data())
        })
        setVetor2(dados)
    }

    React.useEffect(() => {
        buscarDados()
    }, [])
    
    React.useEffect(() => {
        buscarDados2()
    }, [])

  
    return (
        <View style={{ flex: 1, paddingTop: 40, backgroundColor: '#222' }}>
            <ScrollView style={styles.main} showsVerticalScrollIndicator={false}>
                {/* PESQUISA */}
                <Bar></Bar>

                {/* MAIN */}
                <Banner></Banner>

                <Text style={styles.title}>Lançamentos</Text>

                <View style={{marginRight: 10}}>
                    <ScrollView>
                        <FlatList
                            data={vetor}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item, index }) => (
                                <Card valor={item} key={index} />
                            )}
                        />
                    </ScrollView>
                </View>

                <BannerPromo></BannerPromo>

                <Text style={styles.title}>Promoções</Text>

                <View style={{ marginLeft: '3%' }}>
                    {vetor2.map((item, index) => (
                        <Card2 valor={item} key={index} />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#222',
        flex: 1,
        marginBottom: 20
    },
    title: {
        color: '#fff',
        marginTop: '7%',
        fontSize: 20,
        marginLeft: '3%'
    }
})