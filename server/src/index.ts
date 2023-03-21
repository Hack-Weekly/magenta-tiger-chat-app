import express, {
    Application,
    NextFunction,
    Request,
    Response,
    Router
} from 'express';
import cors from 'cors';
import { routes } from './routes/routes';
import { config } from './config';
import { connect } from 'mongoose';

const app: Application = express();

export const router: Router = express.Router();

console.log(app.use)

app.use(cors({}));

app.use(express.json());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    return res.send({
        message: 'magenta-tiger-chat-app server is up and running',
        code: 200
    });
})

app.use(routes);

// connect to database                                                                                                                                                                                      
connect(config.dbUrl)
    .then(() => {
        console.log('Connected to database successfully...');
        // start server
        app.listen(config.port, () => {
            console.log(`Magenta-tiger-chat-app server is running on port ${config.port} `);
        });
    })
    .catch((e) => console.log('Could not connect to the database', e))
