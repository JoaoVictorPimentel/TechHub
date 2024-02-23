import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';

export interface BannerProps {
}

export default function Banner (props: BannerProps) {
    return (
        <View style={{alignItems: 'center'}}> 
            <Image style={styles.banner} source={require('./../assets/imgs/banner2.png')}/>
        </View>
    );
}

const styles = StyleSheet.create ({
    banner: {
        width: '95%',
        height: 200,
        borderRadius: 10,
        alignItems: 'center',
    },
})
