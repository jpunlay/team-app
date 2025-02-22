import 'react-native-reanimated';
import React from "react";
import {StatusBar} from "expo-status-bar";
import {PaperProvider} from "react-native-paper";
import {DarkTheme} from "@react-navigation/native";

export const theme = {
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: '#2d3436',
        accent: '#1C1C1C',
        background : '#636e72',
    }
};

const App = () => {
    return (
        <PaperProvider theme={theme}>
            <StatusBar/>
        </PaperProvider>
    );
};

export default App;