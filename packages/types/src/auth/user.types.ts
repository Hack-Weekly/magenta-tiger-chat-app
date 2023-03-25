export interface User {
  _id: string;
  username: string;
  password: string;
}

export interface Users {
  users: User[] | undefined;
}
