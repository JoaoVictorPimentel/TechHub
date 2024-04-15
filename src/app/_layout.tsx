import { Stack, useFocusEffect } from "expo-router";
import { ShopProvider } from "../providers/shop";
import React from "react";
import { StatusBar } from "react-native";

export default function Layout() {
    useFocusEffect(
        React.useCallback(() => {
            StatusBar.setBarStyle('light-content');
        }, [])
    );

    return (
        <ShopProvider>
            <Stack screenOptions={{ headerShown: false }} />
        </ShopProvider>
    )
}