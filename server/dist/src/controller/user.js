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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const user_model_1 = require("../models/user.model");
class Users {
    // Get all users
    getAllUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = yield user_model_1.User.find();
            if (!data) {
                return res.json({ status: 401, message: "user not found" });
            }
            return res.json(data);
        });
    }
}
exports.Users = Users;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL3VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0EscURBQTRDO0FBRzVDLE1BQWEsS0FBSztJQUNoQixnQkFBZ0I7SUFDVixVQUFVLENBQUMsR0FBWSxFQUFFLEdBQWE7O1lBQzFDLE1BQU0sSUFBSSxHQUFHLE1BQU0saUJBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUUvQixJQUFJLENBQUMsSUFBSSxFQUFFO2dCQUNULE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQzthQUM3RDtZQUVELE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QixDQUFDO0tBQUE7Q0FDRjtBQVhELHNCQVdDIn0=