import {Tabs} from 'expo-router';
import React from 'react';
import {Platform} from 'react-native';

import {HapticTab} from '@/components/HapticTab';
import {IconSymbol} from '@/components/ui/IconSymbol';
import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {useColorScheme} from "@/hooks/useColorScheme";
import {Appbar, Avatar} from "react-native-paper";

export default function TabLayout() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Appbar.Header
                theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
                style={{
                    height: 10,
                    backgroundColor: (colorScheme === 'dark' ? DarkTheme.colors.card : DefaultTheme.colors.card)
                }}
                mode={'small'}>
                <Appbar.Content title=""/>
            </Appbar.Header>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: '#343a40',//Colors[colorScheme ?? 'light'].tint,
                    headerShown: false,
                    tabBarButton: HapticTab,
                    tabBarStyle: Platform.select({
                        ios: {
                            // Use a transparent background on iOS to show the blur effect
                            position: 'absolute',
                            paddingTop: 5
                        },
                        default: {},
                    }),
                }}>
                <Tabs.Screen
                    name="home"
                    options={{
                        tabBarIcon: ({color}) => <IconSymbol size={30} name="house.fill" color={color}/>,
                    }}
                />
                <Tabs.Screen
                    name="calendar"
                    options={{
                        tabBarIcon: ({color}) => <IconSymbol size={30} name="calendar" color={color}/>,
                    }}
                />
                <Tabs.Screen
                    name="squad"
                    options={{
                        tabBarIcon: ({color}) => <IconSymbol size={30} name="person.3.fill" color={color}/>,
                    }}
                />
                <Tabs.Screen
                    name="chat"
                    options={{
                        tabBarIcon: ({color}) => <IconSymbol size={30} name="bubble" color={color}/>,
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        tabBarIcon: ({color}) => <Avatar.Image size={30}
                                                               source={{uri: 'https://static.wikia.nocookie.net/rickandmorty/images/3/30/Glootie.png/revision/latest/thumbnail/width/360/height/360?cb=20190720005839'}}/>
                    }}
                />
            </Tabs>
        </ThemeProvider>
    );
}
