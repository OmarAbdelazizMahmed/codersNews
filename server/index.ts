import express from 'express';
import { db } from './datastore';

const app = express();
app.use(express.json());
const posts: any[] = [];

const requestLoggerMiddleware: express.RequestHandler = (req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
}
app.use(requestLoggerMiddleware);


app.get('/posts', (req, res) => {
    res.send({ posts: db.listPosts() });
});

app.post('/posts', (req, res) => {
    const post = req.body;
    post.id = Math.random().toString();
    post.createdAt = new Date();
    console.log(`Created post ${post.title}`);
    const newPost = db.createPost(post);
    res.send({ post: newPost });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);

