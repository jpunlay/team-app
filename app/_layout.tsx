import {useFonts} from 'expo-font';
import {router, Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect, useState} from 'react';
import 'react-native-reanimated';

SplashScreen.preventAutoHideAsync();

/**
 * Root layout for the app. This is the main entry point for the app.
 */
const RootLayout = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({
        firstName: '',
        lastName: ''
    });
    const [loaded] = useFonts({
        SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    useEffect(() => {
        if (isLoggedIn) {
            router.push({
                pathname: "/(tabs)/home",
                params: {
                    firstName: userData.firstName,
                    lastName: userData.lastName
                }
            });
        } else if (!isLoggedIn) {
            router.replace('/(auth)/login')
        }
    }, [isLoggedIn]);

    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="(tabs)"/>
        </Stack>
    );
}

export default RootLayout;
