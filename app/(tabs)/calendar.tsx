import {StyleSheet} from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import React, {useEffect, useState} from "react";
import {Event} from '@/types/event';
import {Attendance, AttendanceStatus} from "@/types/attendance";
import {getEvents} from "@/hooks/getEvents";
import {getAttendance} from "@/hooks/getAttendance";
import {EventCard} from "@/components/EventCard";

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
        console.log('Attendance changed to: ' + value + 'for ID: ' + attendanceId);
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

            {eventAttendance.length > 0
                ? eventAttendance.map(([event, attendance]) => (
                    <EventCard key={event.id} event={event} attendance={attendance}
                               onDataChange={handleAttendanceChange}/>))
                : (<></>)
            }
        </ParallaxScrollView>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        marginTop: 10
    }
});
