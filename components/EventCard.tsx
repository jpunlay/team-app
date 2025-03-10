import {ThemedCard} from "@/components/ThemedCard";
import {Card, Icon, SegmentedButtons} from "react-native-paper";
import {ThemedText} from "@/components/ThemedText";
import {ThemedView} from "@/components/ThemedView";
import {Attendance, AttendanceStatus} from "@/types/attendance";
import React, {useEffect, useState} from "react";
import {Event} from "@/types/event";
import {useThemeColor} from "@/hooks/useThemeColor";

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
        <ThemedCard key={eventData.id}>
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
                            attendanceData.status === 'Going' ? useThemeColor({}, "accent")
                                : attendanceData.status === 'Maybe' ? useThemeColor({}, "icon")
                                    : useThemeColor({}, "close")
                        }
                    />
                }
            />
            <Card.Content>
                <ThemedView
                    style={{
                        backgroundColor: useThemeColor({}, 'card'),
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '100%'
                    }}>
                    <Icon source={'map-marker'} size={20} color={useThemeColor({}, "accent")}/>
                    <ThemedText style={{
                        marginLeft: 10,
                        overflow: 'hidden'
                    }}>{event.location}</ThemedText>
                </ThemedView>
                <ThemedView
                    darkColor={useThemeColor({}, "primary")}
                    style={{
                        backgroundColor: useThemeColor({}, 'card'),
                        flexDirection: 'row',
                        alignItems: 'center',
                        marginBottom: 0
                    }}>
                    <SegmentedButtons
                        density='medium'
                        style={{
                            backgroundColor: useThemeColor({}, 'card'),
                            marginTop: 10,
                        }}
                        value={attendanceData.status}
                        onValueChange={(value: string) => onDataChange(value as AttendanceStatus, attendance.id)}
                        buttons={[
                            {
                                value: 'Going',
                                label: 'Going',
                                style: {
                                    backgroundColor: attendanceData.status === 'Going' ? useThemeColor({}, "accent") : useThemeColor({}, "background"),
                                    borderColor: attendanceData.status === 'Going' ? useThemeColor({}, "accent") : useThemeColor({}, "background")
                                },
                                labelStyle: {
                                    color: attendanceData.status === 'Going' ? useThemeColor({}, "text") : useThemeColor({}, "text")
                                }
                            },
                            {
                                value: 'Maybe',
                                label: 'Maybe',
                                style: {
                                    backgroundColor: attendanceData.status === 'Maybe' ? useThemeColor({}, "card") : useThemeColor({}, "background"),
                                    borderColor: attendanceData.status === 'Maybe' ? useThemeColor({}, "card") : useThemeColor({}, "background")
                                },
                                labelStyle: {
                                    color: useThemeColor({}, "text")
                                }
                            },
                            {
                                value: 'Away',
                                label: 'Away',
                                style: {
                                    backgroundColor: attendanceData.status === 'Away' ? useThemeColor({}, "close") : useThemeColor({}, "background"),
                                    borderColor: attendanceData.status === 'Away' ? useThemeColor({}, "close") : useThemeColor({}, "background")
                                },
                                labelStyle: {
                                    color: attendanceData.status === 'Away' ? useThemeColor({}, "text") : useThemeColor({}, "text")
                                }
                            }
                        ]}
                    />
                </ThemedView>
            </Card.Content>
        </ThemedCard>
    )
};