import {StyleSheet} from 'react-native';

import {HelloWave} from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import {ThemedText} from '@/components/ThemedText';
import {ThemedView} from '@/components/ThemedView';
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useEffect, useState} from "react";
import {getEvents} from "@/hooks/getEvents";
import {Attendance, AttendanceStatus} from "@/types/attendance";
import {Event} from "@/types/event";
import {getAttendance} from "@/hooks/getAttendance";
import {EventCard} from "@/components/EventCard";


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
                {event && attendance
                    ? (<EventCard event={event} attendance={attendance} onDataChange={handleAttendanceChange}/>)
                    : (<></>)
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
