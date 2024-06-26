import { Icon } from '@rneui/themed';
import { router } from 'expo-router';
import * as React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import Bar from '../../../../components/searchBar';
import { useCartContext } from './../../../../providers/cart';
import { useShopContext } from './../../../../providers/shop';

export default function Product() {
    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Item adicionado ao carrinho',
            text1Style: { fontSize: 15 },
        });
    }
    const { product } = useShopContext();
    const { addToCart } = useCartContext();

    const handleAddToCart = () => {
        if (product && product.value) {
            addToCart(product);
            showToast();
        } else {
            Toast.show({
                type: 'error',
                text1: 'Erro ao adicionar ao carrinho',
                text1Style: { fontSize: 15 },
            });
        }
    }

    return (
        <View style={{ flex: 1, paddingTop: 40, backgroundColor: '#222' }}>
            <ScrollView>
                <View style={{ paddingBottom: 80 }}>
                    <Bar></Bar>

                    <View style={styles.top}>
                        <View style={{ flexDirection: 'row', padding: 7 }}>
                            <Icon name='external-link' type='font-awesome' color={'white'} size={24} style={{ marginTop: 10 }} />
                            <Icon name='heart-outlined' type='entypo' color={'white'} size={27} style={{ marginTop: 7, marginLeft: 5 }} />
                        </View>
                        <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => router.push('/categories')}>
                            <Icon name='chevron-left' color={'white'} size={17} style={{ marginTop: 17 }} />
                            <Text style={styles.voltar}>Voltar</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.imageView}>
                        <Image style={styles.image} source={{ uri: product?.image }} />
                    </View>
                    <View style={styles.info}>
                        <View style={styles.infoItem}>
                            <Text style={styles.name}>{product?.name}</Text>
                        </View>
                        <View style={styles.infoItem}>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={{ color: 'white' }}>HCL1-223</Text>
                                <Text style={{ color: '#0059A7' }}>Produto disponível</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.valueView}>
                        <View style={styles.values}>
                            <View style={styles.valueItem}>
                                <View>
                                    <Text style={styles.promo}>R${product?.promoValue}</Text>
                                    <Text style={{ color: 'gray', fontSize: 17 }}>No PIX com desconto</Text>
                                </View>
                                <Text style={styles.value}>R$ {product?.value}</Text>
                            </View>
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row', marginTop: 20, width: '90%' }}>
                                <Text style={{ color: 'gray', fontSize: 17 }}>Em 12x sem juros no cartão</Text>
                                <Text style={styles.value}>R$ {product?.valuePortion}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center', marginTop: 20 }}>
                        <TouchableOpacity style={styles.btn} onPress={handleAddToCart}>
                            <Icon name='cart-plus' type='font-awesome' color={'white'} size={24} />
                            <Text style={styles.buy}>Comprar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <Toast />
        </View>
    );
}

const styles = StyleSheet.create({
    top: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '90%',
        marginLeft: 15
    },
    voltar: {
        color: 'white',
        fontSize: 15,
        marginTop: 17
    },
    imageView: {
        alignItems: 'center',
        backgroundColor: '#111'
    },
    image: {
        width: 350,
        height: 350
    },
    info: {
        marginTop: 20,
        alignItems: 'center'
    },
    infoItem: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        height: 50,
        width: '90%',
        justifyContent: 'center'
    },
    name: {
        color: 'white',
        fontSize: 27,
    },
    valueView: {
        alignItems: 'center',
        marginTop: 20
    },
    values: {
        backgroundColor: '#111',
        width: '90%',
        height: 140,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    valueItem: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '90%',
        height: 50
    },
    promo: {
        color: 'gray',
        fontSize: 15,
        textDecorationLine: 'line-through'
    },
    value: {
        color: 'white',
        fontSize: 23
    },
    btn: {
        width: '90%',
        height: 40,
        backgroundColor: '#0059A7',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    buy: {
        fontSize: 24,
        color: 'white',
        marginLeft: 6
    }
});
