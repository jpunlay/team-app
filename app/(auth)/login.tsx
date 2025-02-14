import {Button, TextInput, View} from "react-native";
import {GoogleLoginButton} from "@/components/GoogleLoginButton";
import {useState} from "react";

export const LoginScreen = ({onDataChange}: any) => {
    const [userData, setUserData] = useState({
        firstName: 'Pablo',
        lastName: 'Escobar'
    });

    const handleTextChange = (loginObject: any) => {
        setUserData(loginObject);
    };

    const handleSendData = () => {
        onDataChange({
            isLoggedIn: true,
            userData: userData
        });
    };

    return (
        <View>
            <GoogleLoginButton/>
            <Button title="Send to Parent" onPress={handleSendData}/>
        </View>
    );
};

export default LoginScreen;
