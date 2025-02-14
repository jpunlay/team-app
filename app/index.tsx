import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import {Redirect} from "expo-router";
import {useState} from "react";
import {Text, View} from "react-native";
import {LoginScreen} from "@/app/(auth)/login";
import HomeTab from "@/app/(tabs)/home";
import TabLayout from "@/app/(tabs)/_layout";

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userData, setUserData] = useState({});

    const handleDataFromLogin = (data: any) => {
        setIsLoggedIn(data.isLoggedIn);
        setUserData(data.userData);
    };

    return (
        <View>
            {!isLoggedIn ? (
                <LoginScreen onDataChange={handleDataFromLogin}/>
            ) : (
                <TabLayout/>
            )}
        </View>

    );
};
