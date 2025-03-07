import {Button, Text} from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {router} from "expo-router";
import {ThemedView} from "@/components/ThemedView";
import {StyleSheet} from 'react-native';

/**
 * Login screen for App. Should handle provider login
 */
export default function Login() {
    const userData = {
        firstName: 'Bob',
        lastName: 'Belcher'
    }

    const handleGoogleLogin = async () => {
        await AsyncStorage.setItem('firstName', userData.firstName);
        await AsyncStorage.setItem('lastName', userData.lastName);
        await AsyncStorage.setItem('isLoggedIn', 'true');
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
                onPress={handleGoogleLogin}
            >
                <Text> Login with Apple </Text>
            </Button>
            <Button
                style={styles.button}
                icon="google"
                mode="contained-tonal"
                buttonColor={"#eeeeee"}
                onPress={handleGoogleLogin}
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
