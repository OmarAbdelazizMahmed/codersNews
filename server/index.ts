import express from 'express';
import { createPostHandler, listPostsHandler } from './handlers/postHandler';

const app = express();
app.use(express.json());
const posts: any[] = [];

const requestLoggerMiddleware: express.RequestHandler = (req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
}
app.use(requestLoggerMiddleware);


app.get('/posts', listPostsHandler);

app.post('/posts', createPostHandler);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);

