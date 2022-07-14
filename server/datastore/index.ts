import { UserDao } from './UserDao';
import { PostDao } from './PostDao';
import { CommentDao } from './CommentDao';
import { LikeDao } from './LikeDao';
import { InMemoryDataStore } from './memorydb';

export interface DataStore extends PostDao, CommentDao, UserDao, LikeDao { }


export const db = InMemoryDataStore.getInstance();