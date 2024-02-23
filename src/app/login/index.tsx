import * as React from 'react';
import { View, StyleSheet, Text, Image, ScrollView} from 'react-native';
import {Button, Input} from '@rneui/themed';
import { router } from 'expo-router';

export interface LoginScreenProps {
}

export default function LoginScreen (props: LoginScreenProps){
    return (
        <ScrollView>
            <View style={styles.background}>
                <View style={{alignItems: 'center', marginTop: '30%'}}>
                    <View style={styles.boxLogin}>
                        <Image style={styles.logo} source={require('./../../assets/imgs/TH2.png')}/>
                        <Text style= {styles.subtitle}>Bem vindo de volta a TechHub, faça seu login e vamos as compras!</Text>
                    </View>
                </View>            

                <Input style={styles.input}
                    placeholder='Digite seu Email' 
                    leftIcon={{name:'person', color:'white'}} 
                    inputStyle={{color: 'white'}}/>

                <Input style={styles.input}
                    keyboardType='numeric'
                    placeholder='Digite sua senha' 
                    leftIcon={{name:'lock', color:'white'}}
                    inputStyle={{color: 'white'}}/>


                <View style={{alignItems: 'center'}}> 
                    <Button onPress={() => router.push('')} buttonStyle={styles.button} type='clear' titleStyle={{color: 'white', backgroundColor: ''}} title="Entrar"/>
                </View>
                <Text style={styles.register}>Cadastre-se</Text>
                <Text style={styles.register}>Esqueceu sua senha?</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create ({
   background: {
    backgroundColor: '#222',
    width: '100%',
    height: '100%',
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
   },

   button:{
    backgroundColor: '#0059A7',
    borderRadius: 20,
    marginTop: 5,
    width: 200,
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
   }
})