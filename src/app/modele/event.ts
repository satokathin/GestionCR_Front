import { EvenType } from './even-type';

export class Event {
    id: number;
    moderator: string;
    speaker: string;
    theme: string;
    summary: string;
    remark: String;
    begining: Date;
    ending: Date;
    nbOfMember: number;
    nbOfGuest: number;
    // eventypeId: number;
}
