import * as React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Button, Input } from '@rneui/themed';
import { router } from 'expo-router';
import { date } from 'yup';

export default function RegisterScreen() {
    return (
        <ScrollView style={{flex: 1}}>
            <View style={styles.background}>
                <View style={{ alignItems: 'center', marginTop: '30%' }}>
                    <View style={styles.boxLogin}>
                        <Image style={styles.logo} source={require('./../../../../assets/imgs/TH2.png')} />
                        <Text style={styles.subtitle}>Bem vindo de volta a TechHub, cadastre-se para poder adquirir os melhores produtos do mercado!</Text>
                    </View>
                </View>

                <Input style={styles.input}
                    placeholder='Informe seu nome completo'
                    leftIcon={{ name: 'person', color: 'white'}}/>

                <Input style={styles.input}
                    placeholder='Informe seu CPF'
                    leftIcon={{ name: 'person', color: 'white'}}/>
                
                <Input style={styles.input}
                    placeholder='Data de Nascimento'
                    leftIcon={{ name: 'cake', type: 'materialIcons', color: 'white'}}/>
            
                <Input style={styles.input}
                    placeholder='Digite seu Email'
                    leftIcon={{ name: 'email',type: 'fontisto', color: 'white'}}/>
                
                <Input style={styles.input}
                    secureTextEntry
                    placeholder='Digite sua senha'
                    leftIcon={{ name: 'lock', color: 'white'}}/>
                
                <Input style={styles.input}
                    secureTextEntry
                    placeholder='Confirme sua senha'
                    leftIcon={{ name: 'lock', color: 'white'}}/>
  
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
                        <Text style={{color: 'white', fontSize: 16}}>Criar conta</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => router.push('/login')}>
                    <Text style={styles.register}>Já possui uma conta? Entrar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#222',
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

    fail: {
        textAlign: 'center',
        color: '#df361c',
        fontSize: 15,
    },
})
