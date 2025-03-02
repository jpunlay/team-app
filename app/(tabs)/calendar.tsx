import {StyleSheet} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {Card, Icon, SegmentedButtons} from 'react-native-paper';
import {ThemedCard} from '@/components/ThemedCard';
import {DarkTheme, DefaultTheme} from "@react-navigation/native";
import React, {useState} from "react";
import {Event} from '@/types/event';
import {Attendance, AttendanceStatus} from "@/types/attendance";

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

export default function CalendarTab() {
    let [events, setEvents] = useState<Event[]>([
        {
            id: '1',
            title: 'vs Liverpool FC',
            time: 'April 20th @ 10:00am',
            location: 'WRAL Soccer Complex',
            teamId: '1234567890'
        },
        {
            id: '2',
            title: 'vs Barcelona FC',
            time: 'July 4th @ 08:00am',
            location: 'WRAL Soccer Complex',
            teamId: '1234567890'
        },
        {
            id: '3',
            title: 'vs Real Madrid',
            time: 'December 25th @ 12:00pm',
            location: 'WRAL Soccer Complex',
            teamId: '1234567890'
        },
        {
            id: '4',
            title: 'vs Manchester United',
            time: 'March 30th @ 03:00pm',
            location: 'WRAL Soccer Complex',
            teamId: '1234567890'
        },
        {
            id: '5',
            title: 'vs Chelsea FC',
            time: 'June 10th @ 06:00pm',
            location: 'WRAL Soccer Complex',
            teamId: '1234567890'
        },
        {
            id: '6',
            title: 'vs Arsenal FC',
            time: 'October 15th @ 09:00am',
            location: 'WRAL Soccer Complex',
            teamId: '1234567890'
        },
        {
            id: '7',
            title: 'vs Tottenham FC',
            time: 'February 5th @ 11:00am',
            location: 'WRAL Soccer Complex',
            teamId: '1234567890'
        },
        {
            id: '8',
            title: 'vs Manchester City',
            time: 'May 20th @ 02:00pm',
            location: 'WRAL Soccer Complex',
            teamId: '1234567890'
        },
    ]);
    let [attendance, setAttendance] = useState<Attendance[]>([
        {
            id: '1',
            playerId: '1',
            eventId: '1',
            status: AttendanceStatus.Going
        },
        {
            id: '2',
            playerId: '1',
            eventId: '2',
            status: AttendanceStatus.Maybe
        },
        {
            id: '3',
            playerId: '1',
            eventId: '3',
            status: AttendanceStatus.Going
        },
        {
            id: '4',
            playerId: '1',
            eventId: '4',
            status: AttendanceStatus.Going
        },
        {
            id: '5',
            playerId: '1',
            eventId: '5',
            status: AttendanceStatus.Maybe
        },
        {
            id: '6',
            playerId: '1',
            eventId: '6',
            status: AttendanceStatus.Away
        },
        {
            id: '7',
            playerId: '1',
            eventId: '7',
            status: AttendanceStatus.Going
        },
        {
            id: '8',
            playerId: '1',
            eventId: '8',
            status: AttendanceStatus.Away
        },
        {
            id: '9',
            playerId: '1',
            eventId: '9',
            status: AttendanceStatus.Going
        },
        {
            id: '10',
            playerId: '1',
            eventId: '10',
            status: AttendanceStatus.Going
        }
    ])

    const handleAttendanceChange = (value: AttendanceStatus, attendanceId: string) => {
        console.log('Attendance changed to:', value);
        const updatedAttendance: Attendance[] = attendance.map((item) => {
            if (item.id === attendanceId) {
                return {...item, status: value};
            }
            return item;
        });
        setAttendance(updatedAttendance);
        console.log('Attendance changed to:', updatedAttendance);
        console.log('Attendance changed to:', attendance.find(item => item.id === attendanceId));
    }

    let mappedList: [Event, Attendance][] = events.map((item1, index) => [item1, attendance[index]]);

    return (
        <ParallaxScrollView>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Calendar</ThemedText>
            </ThemedView>

            {mappedList.map(([event, attendance]) => (
                    <ThemedCard darkColor={theme.colors.primary} key={event.id} style={styles.card}>
                        <Card.Title
                            title={
                                <ThemedText type={'defaultSemiBold'}>{event.title}</ThemedText>
                            }
                            subtitle={
                                <ThemedText type={"default"}>{event.time}</ThemedText>
                            }
                            left={(props) =>
                                <Icon
                                    source={
                                        attendance.status === 'Going' ? 'check' :
                                            attendance.status === 'Maybe' ? 'minus' :
                                                'close'
                                    }
                                    size={30}
                                    color={
                                        attendance.status === 'Going' ? theme.colors.accent :
                                            attendance.status === 'Maybe' ? theme.colors.background :
                                                theme.colors.close
                                    }
                                />
                            }
                        />
                        <Card.Content>
                            <ThemedView
                                darkColor={theme.colors.primary}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    width: '100%'
                                }}>
                                <Icon source={'map-marker'} size={20} color={theme.colors.accent}/>
                                <ThemedText style={{
                                    marginLeft: 10,
                                    overflow: 'hidden'
                                }}>{event.location}</ThemedText>
                            </ThemedView>
                            <ThemedView
                                darkColor={theme.colors.primary}
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginBottom: 0
                                }}>
                                <SegmentedButtons
                                    density='high'
                                    style={styles.segmentedButton}
                                    value={attendance.status}
                                    onValueChange={(value: string) => handleAttendanceChange(value as AttendanceStatus, attendance.id)}
                                    buttons={[
                                        {
                                            value: 'Going',
                                            label: 'Going',
                                            style: {
                                                backgroundColor: attendance.status === 'Going' ? theme.colors.accent : theme.colors.background,
                                                borderColor: attendance.status === 'Going' ? theme.colors.accent : theme.colors.background
                                            },
                                            labelStyle: {
                                                color: attendance.status === 'Going' ? theme.colors.text : theme.colors.primary
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
                                                backgroundColor: attendance.status === 'Away' ? theme.colors.close : theme.colors.background,
                                                borderColor: attendance.status === 'Away' ? theme.colors.close : theme.colors.background
                                            },
                                            labelStyle: {
                                                color: attendance.status === 'Away' ? theme.colors.text : theme.colors.primary
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
        marginTop: 10
    },
    card: {
        // height: '10%',
    },
    segmentedButton: {
        marginTop: 10,
    }
});
