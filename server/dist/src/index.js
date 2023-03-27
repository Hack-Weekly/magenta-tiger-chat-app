"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes/routes");
const config_1 = require("./config");
const mongoose_1 = require("mongoose");
const http_1 = require("http");
const socket_io_1 = __importDefault(require("./socket.io"));
const app = (0, express_1.default)();
exports.router = express_1.default.Router();
app.use((0, cors_1.default)({}));
app.use(express_1.default.json());
app.get('/', (req, res, next) => {
    return res.send({
        message: 'magenta-tiger-chat-app server is up and running',
        code: 200
    });
});
// Added a simple html page for socket.io client connection testing 
// To be removed when UI client is fully implemented
app.get('/client', (req, res) => { return res.sendFile(__dirname + '/index.html'); });
app.use(routes_1.routes);
const server = (0, http_1.createServer)(app);
// create socket.io connection
(0, socket_io_1.default)(server);
// connect to database                                                                                                                                                                                      
(0, mongoose_1.connect)(config_1.config.dbUrl)
    .then(() => {
    console.log('Connected to database successfully...');
    // start server
    server.listen(config_1.config.port, () => {
        console.log(`Magenta-tiger-chat-app server is running on port ${config_1.config.port} `);
    });
})
    .catch((e) => console.log('Could not connect to the database', e));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0RBTWlCO0FBQ2pCLGdEQUF3QjtBQUN4Qiw0Q0FBeUM7QUFDekMscUNBQWtDO0FBQ2xDLHVDQUFtQztBQUNuQywrQkFBb0M7QUFDcEMsNERBQTRCO0FBRTVCLE1BQU0sR0FBRyxHQUFnQixJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUV0QixRQUFBLE1BQU0sR0FBVyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRS9DLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxjQUFJLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUVsQixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUV4QixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO0lBQzdELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztRQUNaLE9BQU8sRUFBRSxpREFBaUQ7UUFDMUQsSUFBSSxFQUFFLEdBQUc7S0FDWixDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQTtBQUVGLG9FQUFvRTtBQUNwRSxvREFBb0Q7QUFDcEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxHQUFZLEVBQUUsR0FBYSxFQUFFLEVBQUUsR0FBRyxPQUFPLEdBQUcsQ0FBQyxRQUFRLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFeEcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxlQUFNLENBQUMsQ0FBQztBQUVoQixNQUFNLE1BQU0sR0FBRyxJQUFBLG1CQUFZLEVBQUMsR0FBRyxDQUFDLENBQUM7QUFDakMsOEJBQThCO0FBQzlCLElBQUEsbUJBQUUsRUFBQyxNQUFNLENBQUMsQ0FBQztBQUVYLDRNQUE0TTtBQUM1TSxJQUFBLGtCQUFPLEVBQUMsZUFBTSxDQUFDLEtBQUssQ0FBQztLQUNoQixJQUFJLENBQUMsR0FBRyxFQUFFO0lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0lBRXJELGVBQWU7SUFDZixNQUFNLENBQUMsTUFBTSxDQUFDLGVBQU0sQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0RBQW9ELGVBQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO0lBQ3BGLENBQUMsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDO0tBQ0QsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFtQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUEifQ==