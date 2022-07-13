export interface User {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    username: string,
    password: string,
}

export interface Post {
    id: string,
    title: string,
    url: string,
    userId: string,
    createdAt: Date, 
}

export interface Like {
    id: string,
    userId: string,
    postId: string,
}

export interface Comment {
    id: string,
    userId: string,
    postId: string,
    text: string,
    createdAt: Date,
}