import { User } from '../types';

export interface UserDao {
    createUser(user: User): Promise<User>;
    getUserByEmail(email: string): User |undefined;
    getUserByUsername(username: string): User | undefined;
}
