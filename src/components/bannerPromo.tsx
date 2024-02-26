import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export interface BannerPromoProps {
}

export default function BannerPromo (props: BannerPromoProps) {
    return (
        <View style={{alignItems: 'center'}}> 
            <Image style={styles.banner} source={require('./../assets/imgs/promo.png')}/>
        </View>
    );
}

const styles = StyleSheet.create ({
    banner: {
        width: '98%',
        height: 220,
        borderRadius: 10,
        alignItems: 'center',
    },
})
