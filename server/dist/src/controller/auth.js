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
exports.Auth = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
class Auth {
    // Create a User
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, email, password } = req.body;
                let user = yield user_model_1.User.findOne({ email: email });
                if (user) {
                    return res.json({ status: 401, message: "email already in use" });
                }
                user = new user_model_1.User({
                    username: username,
                    email: email,
                    password: password,
                });
                yield user.save();
                return res
                    .status(200)
                    .json({ message: "user created succesfully", user: user });
            }
            catch (error) {
                console.log(error);
                return res.status(200).json({ message: "failed to create a new user" });
            }
        });
    }
    // Login a user
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { email, password } = req.body;
            const user = yield user_model_1.User.findOne({ email: email });
            if (user) {
                const compare = yield bcrypt_1.default.compare(password, user.password);
                if (compare) {
                    const token = jsonwebtoken_1.default.sign({ user }, "secrete", { expiresIn: "30d" });
                    return res.json({ status: 200, token: token });
                }
                return res.json({ message: "wrong password" });
            }
            else {
                return res.json({ status: 401, message: "user not found" });
            }
        });
    }
}
exports.Auth = Auth;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb250cm9sbGVyL2F1dGgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQTRCO0FBRTVCLGdFQUErQjtBQUMvQixxREFBNEM7QUFHNUMsTUFBYSxJQUFJO0lBQ2YsZ0JBQWdCO0lBQ1YsVUFBVSxDQUFDLEdBQVksRUFBRSxHQUFhOztZQUMxQyxJQUFJO2dCQUNGLE1BQU0sRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7Z0JBQy9DLElBQUksSUFBSSxHQUFHLE1BQU0saUJBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDaEQsSUFBSSxJQUFJLEVBQUU7b0JBQ1IsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsQ0FBQyxDQUFDO2lCQUNuRTtnQkFDRCxJQUFJLEdBQUcsSUFBSSxpQkFBSSxDQUFDO29CQUNkLFFBQVEsRUFBRSxRQUFRO29CQUNsQixLQUFLLEVBQUUsS0FBSztvQkFDWixRQUFRLEVBQUUsUUFBUTtpQkFDbkIsQ0FBQyxDQUFDO2dCQUNILE1BQU0sSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNsQixPQUFPLEdBQUc7cUJBQ1AsTUFBTSxDQUFDLEdBQUcsQ0FBQztxQkFDWCxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7YUFDOUQ7WUFBQyxPQUFPLEtBQUssRUFBRTtnQkFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLDZCQUE2QixFQUFFLENBQUMsQ0FBQzthQUN6RTtRQUNILENBQUM7S0FBQTtJQUVELGVBQWU7SUFDVCxLQUFLLENBQUMsR0FBWSxFQUFFLEdBQWE7O1lBQ3JDLE1BQU0sRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNyQyxNQUFNLElBQUksR0FBRyxNQUFNLGlCQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7WUFDbEQsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsTUFBTSxPQUFPLEdBQUcsTUFBTSxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLE9BQU8sRUFBRTtvQkFDWCxNQUFNLEtBQUssR0FBRyxzQkFBRyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUNsRSxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2lCQUNoRDtnQkFDRCxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDO2FBQ2hEO2lCQUFNO2dCQUNMLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQzthQUM3RDtRQUNILENBQUM7S0FBQTtDQUNGO0FBdkNELG9CQXVDQyJ9