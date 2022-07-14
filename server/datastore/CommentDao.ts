import { Comment } from '../types';

export interface CommentDao {
    createComment(comment: Comment): Promise<Comment>;
    listComments(postId: string): Comment[] | undefined;
    deleteCommentById(id: string): void;
}