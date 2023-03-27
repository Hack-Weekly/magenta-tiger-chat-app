export interface ServerEvents {
  authenticated: (callback: () => string) => void;
  partners: (partners: ConnectedUsers[]) => void;
  user_connected: ({}: ConnectedUsers) => void;
  private_chat: ({}: PrivateChat) => void;
  private_message: ({}: PrivateMessage) => void;
}

export interface SocketData {
  email: string;
  password: string;
  username: string;
}

export interface ConnectedUsers {
  userConnectionId: string;
  username: string;
}

export interface PrivateChat {
  message: string;
  to: string;
}

export interface PrivateMessage {
  message: string;
  from: string;
}
