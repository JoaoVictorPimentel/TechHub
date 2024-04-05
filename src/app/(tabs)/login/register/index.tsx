import * as React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Button, Input} from '@rneui/themed';
import { router } from 'expo-router';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

export default function RegisterScreen (){
    
    const [ resultado, setResultado ] = useState<null|'falhou'>(null);
    
    const handleLogin = async ({email, senha}:any) => {
        await new Promise((resolve, error) => setTimeout(() => resolve(), 1000))
      
        if (email.trim() == 'admin@gmail.com' && senha.trim() == '12345678') 
            router.push('')
        else
            setResultado('falhou')
    }
    
    return (
        <ScrollView>
            <View style={styles.background}>
                <View style={{alignItems: 'center', marginTop: '30%'}}>
                    <View style={styles.boxLogin}>
                        <Image style={styles.logo} source={require('./../../../../assets/imgs/TH2.png')}/>
                        <Text style= {styles.subtitle}>Bem vindo de volta a TechHub, cadastre-se para poder adquirir os melhores produtos do mercado!</Text>
                    </View>
                </View>            

                <Formik
                    initialValues={{email: '', senha: ''}}
                    validationSchema={Yup.object().shape({
                      email: Yup.string().required('Informe o email').email('E-mail não é válido'),
                      senha: Yup.string().required('Informe a senha').min(8, 'A senha precisa ter 8 caracteres')
                    })}
                    onSubmit={handleLogin}
                >
                    {({errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting}) => (
                        <>
                            <Input style={styles.input}
                                placeholder='Digite seu Email' 
                                leftIcon={{name:'person', color: (errors.email ? '#df361c' : 'white')}} 
                                inputStyle={{color: (errors.email ? '#df361c' : 'white')}}
                                onBlur={handleBlur('email')}
                                onChangeText={handleChange('email')}/>
                            { errors.email && touched.email && <Text style={styles.fail}>{errors.email}</Text>}

                            <Input style={styles.input}
                                secureTextEntry
                                placeholder='Digite sua senha' 
                                leftIcon={{name:'lock', color: (errors.senha ? '#df361c' : 'white')}}
                                inputStyle={{color: (errors.senha ? '#df361c' : 'white')}}
                                onBlur={handleBlur('email')}
                                onChangeText={handleChange('senha')}/>
                            { errors.senha && touched.senha && <Text style={styles.fail}>{errors.senha}</Text>}


                            <View style={{alignItems: 'center'}}> 
                                <Button
                                    buttonStyle={styles.button} 
                                    type='clear' 
                                    titleStyle={{color: 'white', backgroundColor: ''}} 
                                    title="Entrar"
                                    onPress={() => handleSubmit()} 
                                    disabled={isSubmitting}/>
                            </View>

                            { resultado == 'falhou' && <Text style={styles.fail}>Email ou senha incorretos</Text>}
                        </>
                    )}                                      
                </Formik>

                <TouchableOpacity onPress={() => router.push('/login')}>
                    <Text style={styles.register}>Já possui uma conta? Entrar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create ({
   background: {
    backgroundColor: '#222',
    width: '100%',
    height: 1000
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

   button:{
    backgroundColor: '#0059A7',
    borderRadius: 20,
    marginTop: 10,
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
   },

   fail: {
    textAlign:'center',
    color: '#df361c',
    fontSize: 15,
  },
})
