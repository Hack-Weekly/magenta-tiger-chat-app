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
import { createServer } from 'http';
import io from './socket.io'

const app: Application = express();

export const router: Router = express.Router();

app.use(cors({}));

app.use(express.json());

app.get('/', (req: Request, res: Response, next: NextFunction) => {
    return res.send({
        message: 'magenta-tiger-chat-app server is up and running',
        code: 200
    });
})

// Added a simple html page for socket.io client connection testing 
// To be removed when UI client is fully implemented
app.get('/client', (req: Request, res: Response) => { return res.sendFile(__dirname + '/index.html') });

app.use(routes);

const server = createServer(app);
// create socket.io connection
io(server);

// connect to database                                                                                                                                                                                      
connect(config.dbUrl)
    .then(() => {
        console.log('Connected to database successfully...');

        // start server
        server.listen(config.port, () => {
            console.log(`Magenta-tiger-chat-app server is running on port ${config.port} `);
        });
    })
    .catch((e) => console.log('Could not connect to the database', e))
