import express, { Application } from 'express';
import cors from 'cors';
import ClimateRoutes from '../routes/Climate.routes';

export class Server {
    private app: Application;
    private port: string;
    private apiPaths = {
        climate: '/api/climate',
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3000';

        this.middlewares();
        this.routes();
    }

    routes = () => {
        this.app.use(this.apiPaths.climate, ClimateRoutes);
    };

    middlewares = () => {
        this.app.use(cors());
        this.app.use(express.json());
    };

    init = () => {
        this.app.listen(this.port, () => {
            console.log('app running on port', this.port);
        });
    };
}
