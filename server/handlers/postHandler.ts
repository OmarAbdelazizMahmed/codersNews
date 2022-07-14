import { db } from '../datastore';
import { RequestHandler } from 'express-serve-static-core';
import { ExpressHandler, Post } from '../types';
import crypto from 'crypto';


type CreatePostRequest = Pick<Post, 'title' | 'url' | 'userId'>;



interface CreatePostResponse {
    post: Post;
}

export const createPostHandler: ExpressHandler<CreatePostRequest, CreatePostResponse>  = (req, res) => {
    const post = req.body;
    if (!post.title || !post.url || !post.userId) {
        res.sendStatus(400);
        return;
    }

    const newPost: Post = {
        id: crypto.randomUUID(),
        title: post.title,
        url: post.url,
        userId: post.userId,
        createdAt: new Date(),
    }
    db.createPost(newPost);
    res.json({ post: newPost });
}


export const listPostsHandler: RequestHandler = (req, res) => {
    const posts = db.listPosts();
    res.send({ posts });
}