import jwt from "jsonwebtoken";
import { Server } from "socket.io";
import {
  ConnectedUsers,
  ServerEvents,
  SocketData,
} from "./type/socketIO.types";

const socketServer = (server) => {
  // init socket connection
  const io = new Server<ServerEvents>(server, {
    pingTimeout: 6000,
    cors: {
      origin: "*", // change to client url
    },
  });

  // Authorise requests
  io.use(async (socket, next) => {
    if (socket.handshake.auth.token) {
      let token = socket.handshake.auth.token as string;
      jwt.verify(token, "secrete", function (err, decoded) {
        if (err) {
          console.log("Authentication error", err);
          return next(new Error("Unauthorised request"));
        }
        socket.emit("authenticated", () => "Athentication successfull");
        const user = decoded as SocketData;
        socket.data = user;
        next();
      });
    } else {
      next(new Error("Request missing authentication token"));
    }
  });

  io.on("connection", (socket) => {
    console.log("connected to socket.io successfully...");
    let users: ConnectedUsers[] = [];
    // console.log(io.sockets.sockets)
    for (let [id, socket] of io.sockets.sockets) {
      users.push({
        userConnectionId: id,
        username: socket.data.user.username,
      });
    }
    console.log(users);
    socket.emit("partners", users);

    // broadcast the newly connected user to all users on the network
    socket.broadcast.emit("user_connected", {
      userConnectionId: socket.id,
      username: socket.data.user.username,
    });

    // On private message
    socket.on("private_chat", ({ message, to }) => {
      socket.to(to).emit("private_message", {
        message,
        from: socket.id,
      });
    });

    // log all events from client on the console for developement purpose only
    socket.onAny((event, ...args) => {
      console.log(event, args);
    });
  });
};

export default socketServer;
