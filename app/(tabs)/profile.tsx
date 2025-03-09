import {StyleSheet, Platform} from 'react-native';

import {Collapsible} from '@/components/Collapsible';
import {ExternalLink} from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {Avatar} from 'react-native-paper';
import {ThemedCard} from "@/components/ThemedCard";
import {DarkTheme, DefaultTheme} from "@react-navigation/native";
import React, {useContext} from "react";
import AuthContext from "@/context/AuthContext";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DarkTheme.colors,
        primary: '#212529',
        accent: '#0e7862',
        close: '#ca3134',
        background: '#ced4da',
        text: '#f8f9fa',
    }
};

export default function ProfileTab() {
    const {user, logout}: any = useContext(AuthContext);

    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: '#D0D0D0', dark: '#353636'}}
        >
            <ThemedCard style={styles.card} darkColor={theme.colors.primary}>
                <Avatar.Image
                    style={styles.image}
                    size={200}
                    source={{uri: 'https://static.wikia.nocookie.net/rickandmorty/images/3/30/Glootie.png/revision/latest/thumbnail/width/360/height/360?cb=20190720005839'}}
                />
                <ThemedText style={styles.name} type={'title'}>{user?.firstName} {user?.lastName}</ThemedText>
            </ThemedCard>
            <ThemedText>This app includes example code to help you get started.</ThemedText>
            <Collapsible title="File-based routing">
                <ThemedText>
                    This app has two screens:{' '}
                    <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
                    <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
                </ThemedText>
                <ThemedText>
                    The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
                    sets up the tab navigator.
                </ThemedText>
                <ExternalLink href="https://docs.expo.dev/router/introduction">
                    <ThemedText type="link">Learn more</ThemedText>
                </ExternalLink>
            </Collapsible>
            <Collapsible title="Animations">
                <ThemedText>
                    This template includes an example of an animated component. The{' '}
                    <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
                    the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
                    library to create a waving hand animation.
                </ThemedText>
                {Platform.select({
                    ios: (
                        <ThemedText>
                            The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
                            component provides a parallax effect for the header image.
                        </ThemedText>
                    ),
                })}
            </Collapsible>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 400,
        flex: 1,
        alignItems: 'center',
        // justifyContent: "center",
        display: "flex"
    },
    image: {
        marginTop: 50,
        marginBottom: 20,
    },
    name: {
        textAlign: 'center',
    }
});
