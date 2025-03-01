import {User} from "@/types/user";

export interface Team {
    id: string;
    name: string;
    abbreviation: string;
    avatar: string;
    members: User[];
}