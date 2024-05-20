import * as React from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Input, Button } from '@rneui/themed';
import { router } from 'expo-router';
import { Formik } from 'formik';
import { auth } from './../../../../../src/config/firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Toast from 'react-native-toast-message';
import * as Yup from 'yup';

export default function RegisterScreen() {
    const showToast = () => {
        Toast.show({
            type: 'sucess',
            text1: 'Cadastrado com sucesso',
            text1Style: {fontSize: 15},            
        });
    }
    const handleCadastro = async({email, senha, nome, idade}:any) => {
        await createUserWithEmailAndPassword(auth, email, senha)
             .then(() => router.back())
             .catch(erro => showToast())
    }
    
    return (
        <View style={{ flex: 1, backgroundColor: '#222' }}>

            <ScrollView style={{ flex: 1 }}>
                <View style={styles.background}>
                    <View style={{ alignItems: 'center', marginTop: '30%' }}>
                        <View style={styles.boxLogin}>
                            <Image style={styles.logo} source={require('./../../../../assets/imgs/TH2.png')} />
                            <Text style={styles.subtitle}>Bem vindo de volta a TechHub, cadastre-se para poder adquirir os melhores produtos do mercado!</Text>
                        </View>
                    </View>

                    <Formik
                        initialValues={{ email: '', senha: '', nome: ''}}
                        onSubmit={handleCadastro}
                        validationSchema={Yup.object({
                            email: Yup.string().required('O campo email precisa existir').email('O campo precisa ser um email'),
                            nome: Yup.string().required('O campo nome precisa existir'),
                            senha: Yup.string().required('O campo senha precisa existir').min(8, 'O campo senha precisa ter no mínimo 8 caracteres')
                        })}
                    >
                        {({ handleChange, errors, touched, handleBlur, isSubmitting, handleSubmit }) => (
                            <View style={{ marginTop: 20 }}>
                                
                                <Input style={styles.input}
                                    placeholder='Digite seu Email' 
                                    leftIcon={{name:'person', color: (errors.email ? '#df361c' : 'white')}} 
                                    inputStyle={{color: (errors.email ? '#df361c' : 'white')}}
                                    onBlur={handleBlur('email')}
                                    onChangeText={handleChange('email')}/>
                                { errors.email && touched.email && <Text style={styles.fail}>{errors.email}</Text>}
                                
                                <Input style={styles.input}
                                    placeholder='Digite seu nome' 
                                    leftIcon={{name:'person', color: (errors.nome ? '#df361c' : 'white')}} 
                                    inputStyle={{color: (errors.nome ? '#df361c' : 'white')}}
                                    onBlur={handleBlur('email')}
                                    onChangeText={handleChange('email')}/>
                                { errors.nome && touched.nome && <Text style={styles.fail}>{errors.nome}</Text>}

                                <Input style={styles.input}
                                    secureTextEntry
                                    placeholder='Digite sua senha' 
                                    leftIcon={{name:'lock', color: (errors.senha ? '#df361c' : 'white')}}
                                    inputStyle={{color: (errors.senha ? '#df361c' : 'white')}}
                                    onBlur={handleBlur('senha')}
                                    onChangeText={handleChange('senha')}/>
                                { errors.senha && touched.senha && <Text style={styles.fail}>{errors.senha}</Text>}

                                <View style={{alignItems: 'center'}}> 
                                    <Button
                                        buttonStyle={styles.button} 
                                        type='clear' 
                                        titleStyle={{color: 'white'}} 
                                        title="Entrar"
                                        onPress={() => handleSubmit()} 
                                        disabled={isSubmitting}/>
                                </View>
                            </View>
                        )}
                    </Formik>

                    <View style={{ alignItems: 'center' }}>
                        <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}>
                            <Text style={{ color: 'white', fontSize: 16 }}>Criar conta</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => router.push('/login')}>
                        <Text style={styles.register}>Já possui uma conta? Entrar</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
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
    
    fail: {
        textAlign:'center',
        color: '#df361c',
        fontSize: 15,
      },
})
