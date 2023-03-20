"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
//import { routes } from './src/routes';
const config_1 = require("./config");
const app = (0, express_1.default)();
exports.router = express_1.default.Router();
console.log(app.use);
app.use((0, cors_1.default)({}));
app.use(express_1.default.json());
app.get('/', (req, res, next) => {
    return res.send({
        message: 'magenta-tiger-chat-app server is up and running',
        code: 200
    });
});
//app.use('/', routes);
// start server
app.listen(config_1.config.port, () => {
    console.log(`Magenta-tiger-chat-app server is running on port ${config_1.config.port} `);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsc0RBTWlCO0FBQ2pCLGdEQUF3QjtBQUN4Qix3Q0FBd0M7QUFDeEMscUNBQWtDO0FBR2xDLE1BQU0sR0FBRyxHQUFnQixJQUFBLGlCQUFPLEdBQUUsQ0FBQztBQUV0QixRQUFBLE1BQU0sR0FBVyxpQkFBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBRS9DLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBRXBCLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBQSxjQUFJLEVBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUVsQixHQUFHLENBQUMsR0FBRyxDQUFDLGlCQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUV4QixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQVksRUFBRSxHQUFhLEVBQUUsSUFBa0IsRUFBRSxFQUFFO0lBQzdELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQztRQUNaLE9BQU8sRUFBRSxpREFBaUQ7UUFDMUQsSUFBSSxFQUFFLEdBQUc7S0FDWixDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQTtBQUdGLHVCQUF1QjtBQUV2QixlQUFlO0FBQ2YsR0FBRyxDQUFDLE1BQU0sQ0FBQyxlQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLG9EQUFvRCxlQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUNwRixDQUFDLENBQUMsQ0FBQyJ9