import {Button, Text} from "react-native-paper";
import {router} from "expo-router";
import {ThemedView} from "@/components/ThemedView";
import {StyleSheet} from 'react-native';
import React, {useContext} from "react";
import AuthContext from "@/context/AuthContext";


export default function SignIn() {
    const {login}: any = useContext(AuthContext);

    const mockedUserData = {
        id: '123456',
        firstName: 'Bob',
        lastName: 'Belcher',
        email: 'bob@bob.com',
        phoneNumber: '123456',
    }

    const handleLogin = async () => {
        login(mockedUserData);
        // navigate to homepage after user is logged in
        router.push({
            pathname: "/(tabs)/home"
        });
    };

    return (
        <ThemedView style={styles.container}>
            <Button
                style={styles.button}
                icon="apple"
                mode="contained-tonal"
                buttonColor={"#eeeeee"}
                onPress={handleLogin}
            >
                <Text> Login with Apple </Text>
            </Button>
            <Button
                style={styles.button}
                icon="google"
                mode="contained-tonal"
                buttonColor={"#eeeeee"}
                onPress={handleLogin}
            >
                <Text> Login with Google</Text>
            </Button>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    button: {
        marginVertical: 10,
        width: '80%',
        // Android shadow
        elevation: 5,
        // iOS shadow
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    }
});
