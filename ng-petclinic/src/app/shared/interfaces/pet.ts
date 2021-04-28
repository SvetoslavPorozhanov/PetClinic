import { IOwner } from './owner';
import { IBase } from './base';

export interface IPet extends IBase {
    ownerId: IOwner;
    fullName: string;
    kind: string;
    imageUrl: string;
    appointmentTime: string;
}
