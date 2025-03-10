import {Tabs} from 'expo-router';
import React from 'react';
import {HapticTab} from '@/components/HapticTab';
import {IconSymbol} from '@/components/ui/IconSymbol';
import {Appbar, Avatar} from "react-native-paper";
import {useThemeColor} from "@/hooks/useThemeColor";


export default function TabLayout() {
    return (
        <>
            <Appbar.Header
                style={{
                    height: 20,
                    backgroundColor: useThemeColor({}, 'background')
                }}
                mode={'small'}>
                <Appbar.Content
                    title="Team"
                    titleStyle={{
                        fontSize: 18,
                        fontFamily: 'Avenir',
                        fontStyle: 'italic',
                        color: useThemeColor({}, "icon"),
                        height: 40,
                        textAlignVertical: 'center',
                        textAlign: 'center',
                    }}/>
            </Appbar.Header>
            <Tabs
                screenOptions={{
                    tabBarStyle: {
                        height: 70,
                        borderWidth: 1,
                        borderColor: useThemeColor({}, 'background'),
                        borderTopColor: useThemeColor({}, 'card'),
                        backgroundColor: useThemeColor({}, 'background'),
                    },
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: useThemeColor({}, 'text'),
                    headerShown: false,
                    tabBarButton: HapticTab
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
        </>
    );
}
