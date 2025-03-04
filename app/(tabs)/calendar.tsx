import {StyleSheet} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import {Card, Icon, SegmentedButtons} from 'react-native-paper';
import {ThemedCard} from '@/components/ThemedCard';
import {DarkTheme, DefaultTheme} from "@react-navigation/native";
import React, {useEffect, useState} from "react";
import {Event} from '@/types/event';
import {Attendance, AttendanceStatus} from "@/types/attendance";
import {getEvents} from "@/hooks/getEvents";
import {getAttendance} from "@/hooks/getAttendance";

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
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [events, setEvents] = useState<Event[]>();
    const [attendance, setAttendance] = useState<Attendance[]>([]);
    const [eventAttendance, setEventAttendance] = useState<[Event, Attendance][]>([]);

    useEffect(() => {
        const eventsData = getEvents('', '');
        setEvents(eventsData);
    }, []);

    useEffect(() => {
        if (events && events.length > 0) {
            const tempAttendanceList: Attendance[] = [];
            try {
                events.forEach(event => {
                    const tempAttendance: Attendance = getAttendance(event);
                    tempAttendanceList.push(tempAttendance);
                })
            } finally {
                setAttendance(tempAttendanceList);
            }
        }
    }, [events]);

    useEffect(() => {
        if (attendance) {
            if (events && events.length > 0) {
                let mappedList: [Event, Attendance][] = [];
                try {
                    mappedList = events.map((event, index) => [
                        event,
                        attendance.find(attendanceItem => attendanceItem.eventId === event.id)!
                    ]);
                } finally {
                    setEventAttendance(mappedList);
                    setIsDataLoaded(true);
                }
            }
        }
    }, [attendance]);

    if (!isDataLoaded) {
        return (
            <ParallaxScrollView>
                <ThemedView style={styles.titleContainer}>
                    <ThemedText type='title'>Loading...</ThemedText>
                </ThemedView>
            </ParallaxScrollView>
        )
    }

    const handleAttendanceChange = (value: AttendanceStatus, attendanceId: any) => {
        console.log('Attendance changed to:', value);
        const updatedAttendance: Attendance[] = attendance.map((item) => {
            if (item.id === attendanceId) {
                return {...item, status: value};
            }
            return item;
        });
        setAttendance(updatedAttendance);
    }

    return (
        <ParallaxScrollView>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type='title'>Calendar</ThemedText>
            </ThemedView>

            {eventAttendance.length > 0 ? eventAttendance.map(([event, attendance]) => (
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
                                    density='medium'
                                    style={styles.segmentedButton}
                                    value={attendance.status}
                                    onValueChange={(value: string) => handleAttendanceChange(value as AttendanceStatus, attendance?.id)}
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
            ) : (<></>)
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
