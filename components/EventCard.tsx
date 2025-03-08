import {ThemedCard} from "@/components/ThemedCard";
import {Card, Icon, SegmentedButtons} from "react-native-paper";
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";
import {Attendance, AttendanceStatus} from "@/types/attendance";
import React, {useEffect, useState} from "react";
import {DarkTheme, DefaultTheme} from "@react-navigation/native";
import {Event} from "@/types/event";
import {StyleSheet} from "react-native";

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

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 10,
    },
    segmentedButton: {
        marginTop: 10,
    }
});

export type EventCardProps = {
    event: Event;
    attendance: Attendance;
    onDataChange: any;
};

export const EventCard = ({event, attendance, onDataChange}: EventCardProps) => {
    const [eventData, setEventData] = useState<Event>(event);
    const [attendanceData, setAttendanceData] = useState<Attendance>(attendance);

    useEffect(() => {
        setEventData(event);
    }, [event]);

    useEffect(() => {
        setAttendanceData(attendance);
    }, [attendance]);

    return (
        <ThemedCard darkColor={theme.colors.primary} key={eventData.id}>
            {/*<Card.Cover style={{tintColor: 'blue', backgroundColor: theme.colors.background}} source={{ uri: 'https://1000logos.net/wp-content/uploads/2017/03/Manchester-United-Logo-720x730.png' }} />*/}
            <Card.Title
                title={
                    <ThemedText type={'defaultSemiBold'}>{eventData.title}</ThemedText>
                }
                subtitle={
                    <ThemedText type={"default"}>{eventData.time}</ThemedText>
                }
                left={(props) =>
                    <Icon
                        source={
                            attendanceData.status === 'Going' ? 'check'
                                : attendanceData.status === 'Maybe' ? 'minus'
                                    : 'close'
                        }
                        size={30}
                        color={
                            attendanceData.status === 'Going' ? theme.colors.accent
                                : attendanceData.status === 'Maybe' ? theme.colors.background
                                    : theme.colors.close
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
                        value={attendanceData.status}
                        onValueChange={(value: string) => onDataChange(value as AttendanceStatus, attendance.id)}
                        buttons={[
                            {
                                value: 'Going',
                                label: 'Going',
                                style: {
                                    backgroundColor: attendanceData.status === 'Going' ? theme.colors.accent : theme.colors.background,
                                    borderColor: attendanceData.status === 'Going' ? theme.colors.accent : theme.colors.background
                                },
                                labelStyle: {
                                    color: attendanceData.status === 'Going' ? theme.colors.text : theme.colors.primary
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
                                    backgroundColor: attendanceData.status === 'Away' ? theme.colors.close : theme.colors.background,
                                    borderColor: attendanceData.status === 'Away' ? theme.colors.close : theme.colors.background
                                },
                                labelStyle: {
                                    color: attendanceData.status === 'Away' ? theme.colors.text : theme.colors.primary
                                }
                            }
                        ]}
                    />
                </ThemedView>
            </Card.Content>
        </ThemedCard>

    )
};