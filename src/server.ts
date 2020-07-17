import App from './app'

import * as bodyParser from 'body-parser'
import * as cors from "cors";
import loggerMiddleware from './core/middleware/logger'

import PostController from './controllers/posts.controller'
import HomeController from './controllers/home.controller'

const app = new App({
    port: 5000,
    controllers: [
        new HomeController(),
        new PostController(),
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        cors(),
        loggerMiddleware
    ]
})

app.listen()