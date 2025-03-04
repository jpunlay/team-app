import {Attendance, AttendanceStatus} from "@/types/attendance";

const mockedAttendance: Attendance[] = [
    {
        id: '1',
        playerId: '1',
        eventId: '11',
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
]

export const getAttendance = (event: any) => {
    const attendance = mockedAttendance.find(item => event.id === item?.eventId);
    return attendance || {id: undefined, eventId: event.id, playerId: event.playerId, status: AttendanceStatus.Maybe};
}
