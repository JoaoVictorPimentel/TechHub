import { Stack, useFocusEffect } from "expo-router";
import React from "react";
import { StatusBar } from "react-native";
import { ShopProvider } from "../providers/shop";
import { CartProvider } from './../providers/cart';

export default function Layout() {
    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBarStyle('light-content');
        }, [])
    );

    return (
        <CartProvider>
            <ShopProvider>
                <Stack screenOptions={{ headerShown: false }} />
            </ShopProvider>
        </CartProvider>
    )
}