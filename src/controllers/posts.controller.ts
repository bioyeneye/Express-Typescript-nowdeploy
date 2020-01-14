import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBase from './abstract/icontrollerbase.abstract'
import PostService from '../../src/core/service/post.service'


class PostController implements IControllerBase {
    public path = '/api'
    public router = express.Router()
    

    constructor() {
        this.initRoutes();
        //this.postService = new PostService();
    }

    public initRoutes() {
        this.router.get(`${this.path}/posts`, this.posts);
    }

    public posts(req: Request, res: Response){
        const users = [
            {
                id: 1,
                name: 'Ali'
            },
            {
                id: 2,
                name: 'Can'
            },
            {
                id: 3,
                name: 'Ahmet'
            }
        ]

        var posts = null;
        var postService = new PostService();
        postService.getPosts().subscribe((result) => {
            posts = result
            res.json(posts)
        }, (error) => {
            res.json(posts)
        });
    }
}

export default PostController