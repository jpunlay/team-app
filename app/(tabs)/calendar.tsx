import {StyleSheet, View} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {IconSymbol} from '@/components/ui/IconSymbol';
import {Avatar, Button, Card, PaperProvider, Text} from "react-native-paper";

import {useColorScheme} from "@/hooks/useColorScheme";
import {DarkTheme, DefaultTheme, ThemeProvider} from "@react-navigation/native";
import {ThemedCard} from "@/components/ThemedCard";

export default function CalendarTab() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: '#D0D0D0', dark: '#353636'}}
            headerImage={
                <IconSymbol
                    size={350}
                    color="#808080"
                    name="calendar"
                    style={styles.headerImage}
                />
            }>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Calendar</ThemedText>
            </ThemedView>
            <ThemedCard>
                <Card.Title
                    title="vs Liverpool FC"
                    subtitle="10:00am"
                    left={(props) => <Avatar.Icon {...props} icon="calendar" style={styles.icon}/>}
                />
                <Card.Content>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Avatar.Icon size={20} icon="map-marker" style={styles.icon}/>
                        <Text style={{ marginLeft: 5 }}>WRAL Soccer Complex</Text>
                    </View>
                </Card.Content>
                <Card.Actions>
                    <Button>Ok</Button>
                </Card.Actions>
            </ThemedCard>
            <Card>
                <Card.Title
                    title="vs Barcelona FC"
                    subtitle="Card Subtitle"
                    left={(props) => <Avatar.Icon {...props} icon="calendar" />}
                />
                <Card.Content>
                    <Text variant="titleLarge">Card title</Text>
                    <Text variant="bodyMedium">Card content</Text>
                </Card.Content>
                <Card.Actions>
                    <Button>Cancel</Button>
                    <Button>Ok</Button>
                </Card.Actions>
            </Card>
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        padding: 100,

        top: 50,
        width: '100%',
        height: '80%',
        // left: 20,
        position: 'absolute',
    },
    titleContainer: {
        flexDirection: 'row',
        gap: 8,
    },
    icon: {
        backgroundColor: '#005147',
        // borderRadius: 10,
    }
});
