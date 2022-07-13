import express from 'express';

const app = express();
app.use(express.json());
const posts: any[] = [];

const requestLoggerMiddleware: express.RequestHandler = (req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
}
app.use(requestLoggerMiddleware);

app.use((req, res, next) => {
    console.log(Date.now());
    next();
});

app.get('/posts', (req, res) => {
    res.send({ posts });
});

app.post('/posts', (req, res) => {
    const post = req.body;
    posts.push(post);
    res.send({ posts });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);

