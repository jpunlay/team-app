import {StyleSheet} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {Avatar, Card, SegmentedButtons} from 'react-native-paper';
import {ThemedCard} from '@/components/ThemedCard';
import {DarkTheme, DefaultTheme} from "@react-navigation/native";

const mockedCalendarElements = [
    {
        id: '1',
        title: 'vs Liverpool FC',
        time: 'April 20th @ 10:00am',
        location: 'WRAL Soccer Complex',
        attendance: 'Going'
    },
    {
        id: '2',
        title: 'vs Barcelona FC',
        time: 'July 4th @ 08:00am',
        location: 'WRAL Soccer Complex',
        attendance: 'Away'
    },
    {
        id: '3',
        title: 'vs Real Madrid',
        time: 'December 25th @ 12:00pm',
        location: 'WRAL Soccer Complex',
        attendance: 'Maybe'
    },
    {
        id: '4',
        title: 'vs Manchester United',
        time: 'March 30th @ 03:00pm',
        location: 'WRAL Soccer Complex',
        attendance: 'Going'
    },
    {id: '5', title: 'vs Chelsea FC', time: 'June 10th @ 06:00pm', location: 'WRAL Soccer Complex', attendance: 'Away'},
    {
        id: '6',
        title: 'vs Arsenal FC',
        time: 'October 15th @ 09:00am',
        location: 'WRAL Soccer Complex',
        attendance: 'Maybe'
    },
    {
        id: '7',
        title: 'vs Tottenham FC',
        time: 'February 5th @ 11:00am',
        location: 'WRAL Soccer Complex',
        attendance: 'Going'
    },
    {
        id: '8',
        title: 'vs Manchester City',
        time: 'May 20th @ 02:00pm',
        location: 'WRAL Soccer Complex',
        attendance: 'Going'
    },
];

const theme = {
    ...DefaultTheme,
    colors: {
        ...DarkTheme.colors,
        primary: '#2d3436',
        accent: '#007869',
        background: '#eeeeee',
    }
};


export default function CalendarTab() {
    // @ts-ignore
    return (
        <ParallaxScrollView>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Calendar</ThemedText>
            </ThemedView>
            {mockedCalendarElements.map((item) => (
                <ThemedCard style={styles.card} key={item.id} theme={DarkTheme}>
                    <Card.Title
                        title={
                            <ThemedText type={"defaultSemiBold"}>{item.title}</ThemedText>
                        }
                        subtitle={
                            <ThemedText type={"default"}>{item.time}</ThemedText>
                        }
                        left={(props) => <Avatar.Icon {...props} icon='calendar' size={35} style={styles.icon}/>}
                    />
                    <Card.Content>
                        <ThemedView style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
                            <Avatar.Icon theme={theme} size={20} icon='map-marker' style={styles.icon}/>
                            <ThemedText style={{marginLeft: 10, overflow: 'hidden'}}>{item.location}</ThemedText>
                        </ThemedView>
                        <ThemedView
                            style={{flexDirection: 'row', alignItems: 'center', width: '100%', marginBottom: 0}}>
                            <SegmentedButtons
                                theme={theme}
                                density='high'
                                style={styles.segmentedButton}
                                value={item.attendance}
                                onValueChange={console.log}
                                buttons={[
                                    {
                                        value: 'Going',
                                        label: 'Going',
                                        icon: 'check',
                                        style: {
                                            backgroundColor: item.attendance === 'Going' ? '#007869' : theme.colors.text,
                                            borderColor: item.attendance === 'Going' ? '#007869' : theme.colors.background
                                        }
                                    },
                                    {
                                        value: 'Maybe',
                                        label: 'Maybe',
                                        style: {
                                            backgroundColor: item.attendance === 'Maybe' ? '#FF980E' : theme.colors.text,
                                            borderColor: item.attendance === 'Maybe' ? '#FF980E' : theme.colors.background
                                        }
                                    },
                                    {
                                        value: 'Away',
                                        label: 'Away',
                                        style: {
                                            backgroundColor: item.attendance === 'Away' ? '#ba2b2b' : theme.colors.text,
                                            borderColor: item.attendance === 'Away' ? '#ba2b2b' : theme.colors.background
                                        }
                                    }
                                ]}
                            />
                        </ThemedView>
                    </Card.Content>
                </ThemedCard>
            ))}
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        margin: 10
    },
    icon: {
        backgroundColor: '#eeeeee'
    },
    card: {
        // Android shadow
        elevation: 5,
        // iOS shadow
        shadowColor: theme.colors.text,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    segmentedButton: {
        marginTop: 10,
        marginHorizontal: 10,
    }
});
