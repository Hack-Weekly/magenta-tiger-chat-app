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
exports.User = exports.UserSchema = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: [true, "please provide a valid email address"],
        index: { unique: true },
    },
    password: { type: String, required: true },
    username: { type: String },
});
exports.UserSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        const salt_work_factor = 10;
        if (!user.isModified("password")) {
            return next();
        }
        try {
            const salt = yield bcrypt_1.default.genSalt(Number(salt_work_factor));
            const hashPassword = yield bcrypt_1.default.hash(user.password, salt);
            user.password = hashPassword;
            next();
        }
        catch (error) {
            return next(error);
        }
    });
});
exports.User = (0, mongoose_1.model)("User", exports.UserSchema);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHMvdXNlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBNEI7QUFDNUIsdUNBQXlDO0FBRzVCLFFBQUEsVUFBVSxHQUFHLElBQUksaUJBQU0sQ0FBUTtJQUMxQyxLQUFLLEVBQUU7UUFDTCxJQUFJLEVBQUUsTUFBTTtRQUNaLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxzQ0FBc0MsQ0FBQztRQUN4RCxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO0tBQ3hCO0lBQ0QsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO0lBQzFDLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7Q0FDM0IsQ0FBQyxDQUFDO0FBRUgsa0JBQVUsQ0FBQyxHQUFHLENBQVEsTUFBTSxFQUFFLFVBQWdCLElBQVM7O1FBQ3JELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQztRQUNsQixNQUFNLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUNoQyxPQUFPLElBQUksRUFBRSxDQUFDO1NBQ2Y7UUFDRCxJQUFJO1lBQ0YsTUFBTSxJQUFJLEdBQUcsTUFBTSxnQkFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1lBQzVELE1BQU0sWUFBWSxHQUFHLE1BQU0sZ0JBQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsUUFBUSxHQUFHLFlBQVksQ0FBQztZQUM3QixJQUFJLEVBQUUsQ0FBQztTQUNSO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQjtJQUNILENBQUM7Q0FBQSxDQUFDLENBQUM7QUFFVSxRQUFBLElBQUksR0FBRyxJQUFBLGdCQUFLLEVBQVEsTUFBTSxFQUFFLGtCQUFVLENBQUMsQ0FBQyJ9