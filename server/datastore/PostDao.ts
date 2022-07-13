import { Post } from "../types";

export interface PostDao {
    listPosts(): Promise<Post[]>;
    createPost(post: Post): Promise<Post>;
    getPostById(id: string): Post | undefined;
    deletePostById(id: string): void;
}