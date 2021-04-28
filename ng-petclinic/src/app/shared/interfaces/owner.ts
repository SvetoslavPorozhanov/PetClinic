import { IBase } from './base';

export interface IOwner extends IBase {
    pets: string[];
    tel: string;
    email: string;
    fullName: string;
    imageUrl: string;
}
