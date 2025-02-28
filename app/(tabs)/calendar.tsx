import {StyleSheet} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {Card, Icon, SegmentedButtons} from 'react-native-paper';
import {ThemedCard} from '@/components/ThemedCard';
import {DarkTheme, DefaultTheme} from "@react-navigation/native";
import React, {useState} from "react";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DarkTheme.colors,
        primary: '#6c757d',
        accent: '#0e7862',
        close: '#ca3134',
        background: '#ced4da',
        text: '#f8f9fa',
    }
};

export default function CalendarTab() {
    let [calenderElements, setCalendarElements] = useState([
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
        {
            id: '5',
            title: 'vs Chelsea FC',
            time: 'June 10th @ 06:00pm',
            location: 'WRAL Soccer Complex',
            attendance: 'Away'
        },
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
    ]);

    const handleAttendanceChange = (value: string, calendarElementId: string) => {
        console.log('Attendance changed to:', value);
        const updatedCalendarElements = calenderElements.map((item) => {
            if (item.id === calendarElementId) {
                return {...item, attendance: value};
            }
            return item;
        });
        setCalendarElements(updatedCalendarElements);
    }

    return (
        <ParallaxScrollView>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Calendar</ThemedText>
            </ThemedView>

            {calenderElements.map((item) => (
                    <ThemedCard style={styles.card} key={item.id} theme={DarkTheme}>
                        <Card.Title
                            title={
                                <ThemedText type={"defaultSemiBold"}>{item.title}</ThemedText>
                            }
                            subtitle={
                                <ThemedText type={"default"}>{item.time}</ThemedText>
                            }
                            left={(props) =>
                                <Icon
                                    source={
                                        item.attendance === 'Going' ? 'check' :
                                            item.attendance === 'Maybe' ? 'minus' :
                                                'close'
                                    }
                                    size={30}
                                    color={
                                        item.attendance === 'Going' ? theme.colors.accent :
                                            item.attendance === 'Maybe' ? theme.colors.primary :
                                                theme.colors.close
                                    }
                                />
                            }
                        />
                        <Card.Content>
                            <ThemedView style={{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
                                <Icon source={'map-marker'} size={20} color={theme.colors.primary}/>
                                <ThemedText style={{
                                    marginLeft: 10,
                                    overflow: 'hidden'
                                }}>{item.location}</ThemedText>
                            </ThemedView>
                            <ThemedView
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    width: '100%',
                                    marginBottom: 0
                                }}>
                                <SegmentedButtons
                                    theme={theme}
                                    density='high'
                                    style={styles.segmentedButton}
                                    value={item.attendance}
                                    onValueChange={(value) => handleAttendanceChange(value, item.id)}
                                    buttons={[
                                        {
                                            value: 'Going',
                                            label: 'Going',
                                            style: {
                                                backgroundColor: item.attendance === 'Going' ? theme.colors.accent : theme.colors.background,
                                                borderColor: item.attendance === 'Going' ? theme.colors.accent : theme.colors.background
                                            },
                                            labelStyle: {
                                                color: item.attendance === 'Going' ? theme.colors.text : theme.colors.primary
                                            }
                                        },
                                        {
                                            value: 'Maybe',
                                            label: 'Maybe',
                                            style: {
                                                backgroundColor: theme.colors.background,
                                                borderColor: theme.colors.background
                                            },
                                            labelStyle: {
                                                color: theme.colors.primary
                                            }
                                        },
                                        {
                                            value: 'Away',
                                            label: 'Away',
                                            style: {
                                                backgroundColor: item.attendance === 'Away' ? theme.colors.close : theme.colors.background,
                                                borderColor: item.attendance === 'Away' ? theme.colors.close : theme.colors.background
                                            },
                                            labelStyle: {
                                                color: item.attendance === 'Away' ? theme.colors.text : theme.colors.primary
                                            }
                                        }
                                    ]}
                                />
                            </ThemedView>
                        </Card.Content>
                    </ThemedCard>
                )
            )
            }
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        margin: 10
    },
    icon: {
        backgroundColor: theme.colors.background,
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
        marginHorizontal: 10
    }
});
