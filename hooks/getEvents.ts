import {useEffect, useState} from 'react';
import {Event} from '@/types/event';

const mockedEvents = [
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
];


export const getEvents = (attribute: any, value: any) => {
    return mockedEvents || [];
};
