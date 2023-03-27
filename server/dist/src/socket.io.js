"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = require("socket.io");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = (server) => {
    // init socket connection
    const io = new socket_io_1.Server(server, {
        cors: {
            origin: '*' // change to client url
        }
    });
    // Authorise requests
    io.use((socket, next) => __awaiter(void 0, void 0, void 0, function* () {
        if (socket.handshake.auth.token) {
            let token = socket.handshake.auth.token;
            jsonwebtoken_1.default.verify(token, "secrete", function (err, decoded) {
                if (err) {
                    console.log('Authentication error', err);
                    return next(new Error('Unauthorised request'));
                }
                socket.emit('authenticated', () => 'Athentication successfull');
                const user = decoded;
                socket.data = user;
                next();
            });
        }
        else {
            next(new Error('Request missing authentication token'));
        }
    }));
    io.on('connection', (socket) => {
        console.log('connected to socket.io successfully...');
        let users = [];
        // console.log(io.sockets.sockets)
        for (let [id, socket] of io.sockets.sockets) {
            users.push({
                userConnectionId: id,
                username: socket.data.user.username
            });
        }
        console.log(users);
        socket.emit('users', users);
        // broadcast the newly connected user to all users on the network
        socket.broadcast.emit('user_connected', {
            userConnectionId: socket.id,
            username: socket.data.user.username
        });
        // On private message
        socket.on('private_chat', ({ message, to }) => {
            socket.to(to).emit('private_message', {
                message,
                from: socket.id
            });
        });
        // log all events from client on the console for developement purpose only
        socket.onAny((event, ...args) => {
            console.log(event, args);
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ja2V0LmlvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NvY2tldC5pby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFtQztBQUNuQyxnRUFBK0M7QUFPL0Msa0JBQWUsQ0FBQyxNQUFNLEVBQUUsRUFBRTtJQUN0Qix5QkFBeUI7SUFDekIsTUFBTSxFQUFFLEdBQUcsSUFBSSxrQkFBTSxDQUFlLE1BQU0sRUFBRTtRQUN4QyxJQUFJLEVBQUU7WUFDRixNQUFNLEVBQUUsR0FBRyxDQUFDLHVCQUF1QjtTQUN0QztLQUNKLENBQUMsQ0FBQztJQUVILHFCQUFxQjtJQUNyQixFQUFFLENBQUMsR0FBRyxDQUFDLENBQU8sTUFBTSxFQUFFLElBQUksRUFBRSxFQUFFO1FBQzFCLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQzdCLElBQUksS0FBSyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQWUsQ0FBQztZQUNsRCxzQkFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLFVBQVUsR0FBRyxFQUFFLE9BQU87Z0JBQy9DLElBQUksR0FBRyxFQUFFO29CQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsR0FBRyxDQUFDLENBQUE7b0JBQ3hDLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztpQkFDbEQ7Z0JBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsR0FBRyxFQUFFLENBQUMsMkJBQTJCLENBQUMsQ0FBQztnQkFDaEUsTUFBTSxJQUFJLEdBQUksT0FBc0IsQ0FBQztnQkFDckMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUE7Z0JBQ2xCLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUNJO1lBQ0QsSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQztTQUMzRDtJQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRSxFQUFFO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0NBQXdDLENBQUMsQ0FBQztRQUN0RCxJQUFJLEtBQUssR0FBcUIsRUFBRSxDQUFDO1FBQ2pDLGtDQUFrQztRQUNsQyxLQUFLLElBQUksQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUU7WUFDekMsS0FBSyxDQUFDLElBQUksQ0FBQztnQkFDUCxnQkFBZ0IsRUFBRSxFQUFFO2dCQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUTthQUN0QyxDQUFDLENBQUE7U0FDTDtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFNUIsaUVBQWlFO1FBQ2pFLE1BQU0sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3BDLGdCQUFnQixFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQzNCLFFBQVEsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRO1NBQ3RDLENBQUMsQ0FBQTtRQUVGLHFCQUFxQjtRQUNyQixNQUFNLENBQUMsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUU7WUFDMUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ2xDLE9BQU87Z0JBQ1AsSUFBSSxFQUFFLE1BQU0sQ0FBQyxFQUFFO2FBQ2xCLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO1FBRUYsMEVBQTBFO1FBQzFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRTtZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBIn0=