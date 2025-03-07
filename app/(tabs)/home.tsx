import {StyleSheet, Platform} from 'react-native';

import {HelloWave} from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useEffect, useState} from "react";
import {getEvents} from "@/hooks/getEvents";
import {ThemedCard} from "@/components/ThemedCard";
import {Card, Icon, SegmentedButtons} from "react-native-paper";
import {Attendance, AttendanceStatus} from "@/types/attendance";
import {Event} from "@/types/event";
import {DarkTheme, DefaultTheme} from "@react-navigation/native";
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

export default function HomeTab() {
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [event, setEvent] = useState<Event>();
    const [attendance, setAttendance] = useState<Attendance>();

    useEffect(() => {
        const fetchData = async () => {
            const first = await AsyncStorage.getItem('firstName');
            const last = await AsyncStorage.getItem('lastName');
            if (first && last) {
                setFirstName(first);
                setLastName(last);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const eventsData: Event[] = getEvents('', '');
        setEvent(eventsData[0]);
    }, []);

    useEffect(() => {
        if (event) {
            const tempAttendance: Attendance = getAttendance(event);
            setAttendance(tempAttendance);
            setIsDataLoaded(true);
        }
    }, [event]);

    const handleAttendanceChange = (value: AttendanceStatus) => {
        setAttendance({...attendance, status: value});
        // call API to update attendance or save
    }

    return (
        <ParallaxScrollView>
            <ThemedView style={styles.titleContainer}>
                <ThemedText type="title">Welcome, {firstName}!</ThemedText>
                <HelloWave/>
            </ThemedView>
            <ThemedView style={styles.stepContainer}>
                <ThemedText style={styles.subtitle} type="subtitle">Upcoming Event</ThemedText>
                {event && attendance ? (
                    <ThemedCard darkColor={theme.colors.primary} key={event.id}>
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
                                    onValueChange={(value: string) => handleAttendanceChange(value as AttendanceStatus)}
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

                ) : (<></>)
                }
            </ThemedView>
        </ParallaxScrollView>
    );
};


const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
    subtitle: {
        marginBottom: 8,
    },
    segmentedButton: {
        marginTop: 10,
    }
});
