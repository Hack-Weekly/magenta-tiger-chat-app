export interface User {
    _id: string
    username: string
    email: string
}

export interface Users {
    users: User[] | undefined
}
