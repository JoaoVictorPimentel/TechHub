import * as React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from '@rneui/themed';
import { router } from 'expo-router';

export default function App() {
    return (
        <View style={{ flex: 1, backgroundColor: '#222' }}>

            <ScrollView style={{ flex: 1 }}>
                <View style={styles.background}>
                    <View style={{ alignItems: 'center', marginTop: '30%' }}>
                        <View style={styles.boxLogin}>
                            <Image style={styles.logo} source={require('./../../../../assets/imgs/TH2.png')} />
                            <Text style={styles.subtitle}>Vamos recuperar sua senha, para isso nos informe o email cadastrado e iremos enviar um link para alteração</Text>
                        </View>
                    </View>
                    <Input style={styles.input}
                        placeholder='Informe o email cadastrado'
                        leftIcon={{ name: 'person', color: 'white' }} />

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
                            <Text style={{ color: 'white', fontSize: 16 }}>Recuperar senha</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => router.push('/login')}>
                        <Text style={styles.register}>Já recuperou? Entrar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#222',
        paddingBottom: 80
    },

    boxLogin: {
        backgroundColor: '#111',
        width: 340,
        height: 330,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        borderRadius: 15,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 20,
    },

    subtitle: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        padding: 28,
        marginTop: 10
    },

    input: {
        padding: 15,
        marginTop: 10,
    },

    button: {
        backgroundColor: '#0059A7',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 40,
        borderRadius: 20,
    },

    register: {
        color: 'white',
        fontSize: 15,
        textDecorationLine: 'underline',
        textAlign: 'center',
        marginTop: 15
    },

    logo: {
        width: 200,
        height: 160
    },
})
