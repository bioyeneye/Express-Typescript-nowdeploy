import IControllerBase from "./abstract/icontrollerbase.abstract";
import * as express from 'express'
import { Request, Response } from 'express'

class HomeController implements IControllerBase {
    public path = '/home'
    public router = express.Router()
    

    constructor() {
        this.initRoutes();
        //this.postService = new PostService();
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