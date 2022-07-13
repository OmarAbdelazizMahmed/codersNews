import { DataStore } from "../";
import { User, Post, Comment, Like } from "../../types";

export class MemoryDataStore implements DataStore {
    private users: User[] = [];
    private posts: Post[] = [];
    private comments: Comment[] = [];
    private likes: Like[] = [];

    createUser(user: User): Promise<User> {
        this.users.push(user);
        return Promise.resolve(user);
    }

    getUserByEmail(email: string): User | undefined {
        return this.users.find(user => user.email === email);
    }

    getUserByUsername(username: string): User | undefined {
        return this.users.find(user => user.username === username);
    }

    listPosts(): Promise<Post[]> {
        return Promise.resolve(this.posts);
    }

    createPost(post: Post): Promise<Post> {
        this.posts.push(post);
        return Promise.resolve(post);
    }

    getPostById(id: string): Post | undefined {
        return this.posts.find(post => post.id === id);
    }

    deletePostById(id: string): void {
        const post = this.posts.find(post => post.id === id);
        if (post) {
            this.posts = this.posts.filter(post => post.id !== id);
            
            this.comments = this.comments.filter(comment => comment.postId !== id);
            this.likes = this.likes.filter(like => like.postId !== id);

            console.log(`Deleted post ${post.title}`);
        }
    }

    createComment(comment: Comment): Promise<Comment> {
        this.comments.push(comment);
        return Promise.resolve(comment);
    }

    getCommentById(id: string): Comment | undefined {
        return this.comments.find(comment => comment.id === id);
    }

    deleteCommentById(id: string): void {
        const comment = this.comments.find(comment => comment.id === id);
        if (comment) {
            this.comments = this.comments.filter(comment => comment.id !== id);
            console.log(`Deleted comment ${comment.text}`);
        }
    }

    listComments(postId: string): Comment[] | undefined {
        return this.comments.filter(comment => comment.postId === postId);
    }

    createLike(like: Like): Promise<Like> {
        this.likes.push(like);
        return Promise.resolve(like);
    }

}
    

        
    




