import {View} from "react-native";
import {Button} from "react-native-paper";

export function GoogleLoginButton() {

    function signIn() {
        console.log("signed in")
    }
    return <View>
        <Button icon="camera" mode="contained-tonal" onPress={() => alert('Pressed')}>
            Press me
        </Button>
    </View>
}