"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const auth_1 = require("../controller/auth");
const user_1 = require("../controller/user");
exports.routes = (0, express_1.Router)();
// server health check
exports.routes.get("/health", (req, res, next) => {
    return res.send({
        message: "magenta-tiger-chat-app server is up and running",
        code: 200,
    });
});
// Create User
exports.routes.post("/signup", (req, res, next) => new auth_1.Auth().createUser(req, res));
// User login
exports.routes.post("/login", (req, res, next) => new auth_1.Auth().login(req, res));
// Get all users
exports.routes.get("/users", (req, res, next) => new user_1.Users().getAllUser(req, res));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3JvdXRlcy9yb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUNBQWtFO0FBQ2xFLDZDQUEwQztBQUMxQyw2Q0FBMkM7QUFFOUIsUUFBQSxNQUFNLEdBQUcsSUFBQSxnQkFBTSxHQUFFLENBQUM7QUFFL0Isc0JBQXNCO0FBQ3RCLGNBQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUU7SUFDeEUsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2QsT0FBTyxFQUFFLGlEQUFpRDtRQUMxRCxJQUFJLEVBQUUsR0FBRztLQUNWLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsY0FBYztBQUNkLGNBQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUUsQ0FDekUsSUFBSSxXQUFJLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUNoQyxDQUFDO0FBRUYsYUFBYTtBQUNiLGNBQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUUsQ0FDeEUsSUFBSSxXQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUMzQixDQUFDO0FBRUYsZ0JBQWdCO0FBQ2hCLGNBQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBWSxFQUFFLEdBQWEsRUFBRSxJQUFrQixFQUFFLEVBQUUsQ0FDdkUsSUFBSSxZQUFLLEVBQUUsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUNqQyxDQUFDIn0=