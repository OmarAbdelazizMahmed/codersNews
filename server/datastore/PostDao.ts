import { Post } from "../types";

export interface PostDao {
    listPosts(): Post[];
    createPost(post: Post): Post;
    getPostById(id: string): Post | undefined;
    deletePostById(id: string): void;
}