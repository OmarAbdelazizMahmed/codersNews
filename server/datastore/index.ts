import { UserDao } from './UserDao';
import { PostDao } from './PostDao';
import { CommentDao } from './CommentDao';
import { LikeDao } from './LikeDao';

export interface DataStore extends PostDao, CommentDao, UserDao, LikeDao { }