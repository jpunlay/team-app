import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import React, {useState} from "react";
import {View} from "react-native";
import {LoginScreen} from "@/app/(auth)/login";
import {useColorScheme} from "@/hooks/useColorScheme";
import {router} from 'expo-router'


SplashScreen.preventAutoHideAsync();

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleDataFromLogin = async (data: any) => {
        setIsLoggedIn(data.isLoggedIn);
        router.push({
            pathname: "/(tabs)/home",
            params: {
                firstName: data.userData.firstName,
                lastName: data.userData.lastName
            }
        });
    };

    return (
        <View>
            {!isLoggedIn ? (
                <LoginScreen onDataChange={handleDataFromLogin}/>
            ) : (
                <></>
            )}
        </View>
    );
};
