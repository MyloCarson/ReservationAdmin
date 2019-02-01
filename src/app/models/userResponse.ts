import { User } from './user';

export class UserResponse {
    code: number;
    message: string;
    resources: User[];
}
