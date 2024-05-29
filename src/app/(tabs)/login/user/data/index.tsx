import { Icon } from '@rneui/base';
import { Input } from '@rneui/themed';
import { router } from 'expo-router';
import * as React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Bar from '../../../../../components/searchBar';

export default function App() {
    return (
        <View style={{ flex: 1, paddingTop: 40, backgroundColor: '#222'}}>
            <Bar></Bar>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.data}>
                    <Text style={styles.title}>Meus dados</Text>
                    <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => router.back()}>
                        <Icon name='chevron-left' color={'white'} size={17} style={{ marginTop: 7 }} />
                        <Text style={styles.voltar}>Voltar</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', paddingTop: 20 }}>
                    <View style={styles.container}>
                        <View style={{ marginTop: 15 }}>
                            <Text style={styles.text}>Nome</Text>
                            <Input placeholder='João Victor' inputStyle={{ color: 'white', fontSize: 15 }}></Input>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={styles.text}>Sobrenome</Text>
                            <Input placeholder='Pimentel' inputStyle={{ color: 'white', fontSize: 15 }}></Input>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={styles.text}>CPF</Text>
                            <Input placeholder='321.321.321-32' inputStyle={{ color: 'white', fontSize: 15 }}></Input>
                        </View>
                        <View style={{ marginTop: 15 }}>
                            <Text style={styles.text}>E-mail</Text>
                            <Input placeholder='teste@gmail.com' inputStyle={{ color: 'white', fontSize: 15 }}></Input>
                        </View>
                    </View>
                </View>

                <View style={{ alignItems: 'center', paddingTop: 20 }}>
                    <TouchableOpacity style={styles.container2}>
                        <Icon name='lock' type='font-awesome' color='white' />
                        <Text style={styles.text}>Redefinir senha</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems: 'center', paddingTop: 20 }}>
                    <TouchableOpacity style={styles.container3}>
                        <Icon name='reload1' type='antdesign' color='white' />
                        <Text style={styles.text}>Atualizar dados</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 23,
        marginLeft: 7
    },
    data: {
        marginTop: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginLeft: 9,
    },
    voltar: {
        color: 'white',
        fontSize: 15,
        marginTop: 7
    },
    container: {
        backgroundColor: '#111',
        width: '95%',
        height: 420,
        borderRadius: 10
    },
    container2: {
        backgroundColor: '#222',
        width: '95%',
        height: 55,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'gray'
    },
    container3: {
        backgroundColor: '#0059A7',
        width: '95%',
        height: 55,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'gray'
    },
    text: {
        color: 'white',
        fontSize: 17,
        marginLeft: 13
    },

})