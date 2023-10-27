import axios from 'axios';
import { usersApiURL } from '../constants';
import { User } from '../types/User';

export const getUserById = async (id: number) => {
    const res = await axios.get(usersApiURL);
    const users: User[] = res.data;
    const user: User | undefined = users.find((u: User) => u.id === id);
    return user;
};
