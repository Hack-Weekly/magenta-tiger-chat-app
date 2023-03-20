import {
    NextFunction,
    Request,
    Response,
    Router
} from 'express';
import { Auth } from '../controller/auth';

export const routes = Router();

// server health check
routes.get('/health', (req: Request, res: Response, next: NextFunction) => {
    return res.send({
        message: 'magenta-tiger-chat-app server is up and running',
        code: 200
    });
});

// Create User
routes.post("/signup", (req: Request, res: Response, next: NextFunction) => new Auth().createUser(req, res));

// User login
routes.post("/login", (req: Request, res: Response, next: NextFunction) => new Auth().login(req, res));