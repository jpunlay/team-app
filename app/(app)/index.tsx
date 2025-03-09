import { Text, View } from 'react-native';
import {useContext} from "react";
import AuthContext from "@/context/AuthContext";


export default function Index() {
    const { logout } = useContext(AuthContext);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text
                onPress={() => {
                    // The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
                    logout();
                }}>
                Sign Out
            </Text>
        </View>
    );
}
