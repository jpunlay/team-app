import {StyleSheet, View} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {IconSymbol} from '@/components/ui/IconSymbol';
import {Avatar, Button, Card, Text} from "react-native-paper";

import {ThemedCard} from "@/components/ThemedCard";

export default function CalendarTab() {
    return (
        <ParallaxScrollView
            headerBackgroundColor={{light: '#D0D0D0', dark: '#353636'}}
            >
            <ThemedView>
                <ThemedText type="title">Calendar</ThemedText>
                <ThemedText type="subtitle"> {(new Date()).toDateString()} </ThemedText>
            </ThemedView>
            <ThemedCard style={styles.card}>
                <Card.Title
                    title="vs Liverpool FC"
                    subtitle="April 20th @ 10:00am"
                    left={(props) => <Avatar.Icon {...props} icon="calendar" style={styles.icon}/>}
                />
                <Card.Content>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Avatar.Icon size={20} icon="map-marker" style={styles.icon}/>
                        <Text style={{marginLeft: 5}}>WRAL Soccer Complex</Text>
                    </View>
                </Card.Content>
                <Card.Actions>
                    <Button>Ok</Button>
                </Card.Actions>
            </ThemedCard>
            <ThemedCard>
                <Card.Title
                    title="vs Barcelona FC"
                    subtitle="July 4th @ 08:00am"
                    left={(props) => <Avatar.Icon {...props} icon="calendar" style={styles.icon}/>}
                />
                <Card.Content>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>

                        <Avatar.Icon size={20} icon="map-marker" style={styles.icon}/>
                        <Text style={{marginLeft: 5}}>WRAL Soccer Complex</Text>
                    </View>

                </Card.Content>
                <Card.Actions>
                    <Button>Ok</Button>
                </Card.Actions>
            </ThemedCard>
            <ThemedCard>
                <Card.Title
                    title="vs Real Madrid"
                    subtitle="December 25th @ 12:00pm"
                    left={(props) => <Avatar.Icon {...props} icon="calendar" style={styles.icon}/>}
                />
                <Card.Content>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Avatar.Icon size={20} icon="map-marker" style={styles.icon}/>
                        <Text style={{marginLeft: 15}}>WRAL Soccer Complex</Text>
                    </View>
                </Card.Content>
                <Card.Actions>
                    <Button>Ok</Button>
                </Card.Actions>
            </ThemedCard>
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
        position: 'absolute',
    },
    icon: {
        backgroundColor: '#005147',
    },
    card: {
        // height: '30%',
    }
});
