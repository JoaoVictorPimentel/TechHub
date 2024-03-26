import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';
import {Button, Icon} from '@rneui/themed';
import { Input } from '@rneui/base';
import { router } from 'expo-router';

export interface TemplateProps {
    children: any;
}

export default function Template (props: TemplateProps) {
    return (
      <ScrollView>
        <View style={styles.main}>
            {/* HEADER */}
            <View style={styles.header}>
                <View style={styles.headerItens}> 
                    <Button onPress={() => router.push('/login')} icon={{name: 'menu', color: 'white'}} type='clear'/>
                    <TouchableOpacity onPress={() => router.push('')}>
                        <Image style={styles.logo} source={require('./../assets/imgs/logo.png')}/>
                    </TouchableOpacity>
                    <Button icon={{name: 'shopping-cart', color: 'white'}} type='clear'/>
                </View>
            </View>
        
            {/* MAIN */}
            <View style={styles.mainView}>
                <View style={styles.inputView}>
                    <Input placeholder='Pesquise seu produto' rightIcon={{name: 'search', color: 'white'}} inputStyle={{color: 'white'}}/>
                    {props.children}
                </View>
            </View>
    
            {/* FOOTER */}
            <View style={styles.footer}>
                <View style={styles.footerTemplate}>
                    {/* INSTITUCIONAL */}
                    <View style={styles.sessionFooter}>
                        <Text style={styles.footerTitle}>Institucional</Text>
                        <TouchableOpacity>
                            <Text style={styles.footerItens}>Quem somos?</Text>                        
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.footerItens}>Política de troca e devoluções</Text>                        
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.footerItens}>Política de segurança</Text>                        
                        </TouchableOpacity>
                    </View>
                    {/* Ajuda */}
                    <View style={styles.sessionFooter}>
                        <Text style={styles.footerTitle}>Ajuda</Text>
                        <TouchableOpacity>
                            <Text style={styles.footerItens}>Como comprar</Text>                        
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.footerItens}>Prazos e entregas</Text>                        
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.footerItens}>Formas de pagamento</Text>                        
                        </TouchableOpacity>
                    </View>
                    
                    {/* CONTA */}
                    <View style={styles.sessionFooter}>
                        <Text style={styles.footerTitle}>Cliente</Text>
                        <TouchableOpacity onPress={() => router.push('/login')}>
                            <Text style={styles.footerItens}>Minha conta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.footerItens}>Meus pedidos</Text>                        
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.footerItens}>Tickets</Text>                        
                        </TouchableOpacity>
                    </View>
                    
                    {/* REDES SOCIAIS*/ }
                    <View style={styles.sessionFooter}>
                        <Text style={styles.footerTitle}>Redes sociais</Text>
                        <View style={styles.sociais}>
                            <TouchableOpacity>
                                <Button icon={{name: 'instagram', color: 'white', type: 'entypo'}} type='clear'/>
                            </TouchableOpacity>           
                            <TouchableOpacity>
                                <Button icon={{name: 'github', color: 'white', type: 'entypo'}} type='clear'/>
                            </TouchableOpacity>           
                            <TouchableOpacity>
                                <Button icon={{name: 'youtube', color: 'white', type: 'entypo'}} type='clear'/>
                            </TouchableOpacity>           
                            <TouchableOpacity>
                                <Button icon={{name: 'discord', color: 'white', type: 'FontAwesome6Brands'}} type='clear'/>
                            </TouchableOpacity>           
                        </View>
                    </View>
                </View>
            </View>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create ({
    main: {
        backgroundColor: '#333',
        width: '100%',
        height: '100%'
    },

    header: {
        backgroundColor: '#111',
        width: '100%',
        height: 80,
        flex: 1,
        justifyContent: 'center'
    },

    headerItens: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    logo: {
        width: 123,
        height: 50
    },

    inputView: {
        backgroundColor: '#333'
    },

    mainView:{
        flex: 1,
    },

    footer: {
        backgroundColor: '#111',
        width: '100%',
        height: 650,
        position: 'relative',
        flex: 1,
        marginTop: 40
    },

    footerTemplate:{
        alignItems: 'center',
    },

    footerItens: {
        color: 'white',
        textAlign: 'center',
        padding: 10,
        marginTop: 5
    },

    footerTitle:{
        color: '#0059A7',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 5
    },

    sessionFooter:{
        marginTop: 25,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        width: '90%',
        alignItems: 'center'
    },

    sociais: {
        flexDirection: 'row',
        marginTop: 10,
    }
})