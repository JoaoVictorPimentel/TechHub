import { Icon } from '@rneui/base';
import { router } from 'expo-router';
import { collection, getDocs } from 'firebase/firestore';
import * as React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Card2 from '../../../../../components/card2';
import Bar from '../../../../../components/searchBar';
import { db } from '../../../../../config/firebase-config';

export interface AppProps {
}

export default function App(props: AppProps) {
    const [vetor, setVetor] = React.useState([])
    const buscarDados = async () => {
        const snapshots = await getDocs(collection(db, 'gabinetes'))
        const dados: any = []
        snapshots.forEach(snapshot => {
            dados.push(snapshot.data())
        })
        setVetor(dados)
    }
    React.useEffect(() => {
        buscarDados()
    }, [])

    return (
        <View style={{ flex: 1, paddingTop: 40, backgroundColor: '#222' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.main}>
                    <Bar></Bar>

                    <View style={styles.categoria}>
                        <Text style={styles.title}>Gabinetes</Text>
                        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 32 }} onPress={() => router.back()}>
                            <Icon name='chevron-left' color={'white'} size={17} style={{ marginTop: 7 }} />
                            <Text style={styles.voltar}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        {vetor.map((item, index) => (
                            <Card2 valor={item} key={index} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>

    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: '#222',
        flex: 1,
        marginBottom: 180
    },
    title: {
        color: 'white',
        fontSize: 23,
        marginTop: '10%',
        marginLeft: 15
    },
    categoria: {
        marginTop: '3%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginLeft: 9
    },
    voltar: {
        color: 'white',
        fontSize: 15,
        marginTop: 7
    },
})