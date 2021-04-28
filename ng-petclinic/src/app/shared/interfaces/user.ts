import { IBase } from './base';

export interface IUser extends IBase {
  tel: string;
  email: string;
  fullName: string;
  password: string;
}
