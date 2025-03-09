import { Text } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import {useContext} from "react";
import AuthContext from "@/context/AuthContext";

//TODO: handle session from expo https://docs.expo.dev/router/reference/authentication/
export default function AppLayout() {
    const { isLoggedIn } = useContext(AuthContext);

    // You can keep the splash screen open, or render a loading screen like we do here.
    if (!isLoggedIn) {
        // return <Text>Loading...</Text>;
        return <Redirect href="/sign-in" />;
    }

    // Only require authentication within the (app) group's layout as users
    // need to be able to access the (auth) group and sign in again.
    // if (!session) {
    //     // On web, static rendering will stop here as the user is not authenticated
    //     // in the headless Node process that the pages are rendered in.
    //     return <Redirect href="/sign-in" />;
    // }

    // This layout can be deferred because it's not the root layout.
    return <Stack />;
}
