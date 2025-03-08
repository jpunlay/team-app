import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { Avatar } from 'react-native-paper';
import {ThemedCard} from "@/components/ThemedCard";
import {DarkTheme, DefaultTheme} from "@react-navigation/native";

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
    return (
        <ParallaxScrollView
            headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
            >
            <ThemedCard style={styles.card} darkColor={theme.colors.primary}>
                <Avatar.Image
                    style={styles.image}
                    size={200}
                    source={{uri: 'https://static.wikia.nocookie.net/rickandmorty/images/3/30/Glootie.png/revision/latest/thumbnail/width/360/height/360?cb=20190720005839'}}
                />
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
            <Collapsible title="Android, iOS, and web support">
                <ThemedText>
                    You can open this project on Android, iOS, and the web. To open the web version, press{' '}
                    <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
                </ThemedText>
            </Collapsible>
            <Collapsible title="Images">
                <ThemedText>
                    For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
                    <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
                    different screen densities
                </ThemedText>
                <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
                <ExternalLink href="https://reactnative.dev/docs/images">
                    <ThemedText type="link">Learn more</ThemedText>
                </ExternalLink>
            </Collapsible>
            <Collapsible title="Custom fonts">
                <ThemedText>
                    Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
                    <ThemedText style={{ fontFamily: 'SpaceMono' }}>
                        custom fonts such as this one.
                    </ThemedText>
                </ThemedText>
                <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
                    <ThemedText type="link">Learn more</ThemedText>
                </ExternalLink>
            </Collapsible>
            <Collapsible title="Light and dark mode components">
                <ThemedText>
                    This template has light and dark mode support. The{' '}
                    <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
                    what the user's current color scheme is, and so you can adjust UI colors accordingly.
                </ThemedText>
                <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
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
    }
});
