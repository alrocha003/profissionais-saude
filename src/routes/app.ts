import express from 'express';

export class App {
    public server: express.Application;
    public router: any;

    constructor() {
        this.server = express();
        this.server.use(express.json);
        this.server.use();
    }

    private CreateRoutes(): any {
        this.router = express.Router();

        this.router.get("/", () => {

        });
    }
}