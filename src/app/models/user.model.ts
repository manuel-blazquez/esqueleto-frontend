import { Role } from './role.model';

export class User {
    id: string;
    email: string;
    password: string;
    role: Role;
    profile: {
        name: string;
        surname: string;
        gender: string;
        location: string;
        picture: string;
    };
    createdAt: Date;
}
