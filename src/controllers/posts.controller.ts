import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from './abstract/icontrollerbase.abstract'
import {IPostService, PostService} from "../core/service/post.service";


class PostController implements IControllerBase {
    public path = '/posts'
    public router = express.Router()

    constructor() {
        this.initRoutes();
    }

    public initRoutes() {
        this.router.get(`${this.path}`, this.posts);
    }

    public async posts(req: Request, res: Response){
        try {
            let postService = new PostService();
            let posts = await postService.getPosts().toPromise();
            res.json(posts);
        }catch (e) {
            res.status(400)
                .json({
                    message: "No posts"
                });
        }
    }
}

export default PostController