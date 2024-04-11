import { Stack } from "expo-router";
import { ShopProvider } from "../providers/shop";

export default function Layout() {

    return (
        <ShopProvider>
            <Stack screenOptions={{headerShown: false}} />
        </ShopProvider>
    )
}