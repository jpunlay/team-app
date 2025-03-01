export interface Attendance {
    id: string;
    playerId: string;
    eventId: string;
    status: AttendanceStatus;
}

export enum AttendanceStatus {
    Going = 'Going',
    Maybe = 'Maybe',
    Away = 'Away'
}