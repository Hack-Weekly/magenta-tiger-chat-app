import { io, Socket } from 'socket.io-client';
let socket: Socket;

export const initiateSocket = () => {
  socket = io('ws://localhost:8089', {
    autoConnect: false,
  });
};

export const getSocket = () => {
  return socket;
};
