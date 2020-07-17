import IControllerBase from "./abstract/icontrollerbase.abstract";
import * as express from 'express'
import { Request, Response } from 'express'

class HomeController implements IControllerBase {
    path: string = '/';
    versionNumber: number;
    public router = express.Router();
    isApiController: boolean = false;

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get(`${this.path}`, this.index);
    }

    public index(req: Request, res: Response){
        res.json({
            health: 'ma fo mo sounding...'
        })
    }

}

export default HomeController