import { Router } from "express";

/**
 * Base controller for express controllers
 */
interface IControllerBase {
    path: string;
    router: Router;
    initRoutes(): any;
}

export default IControllerBase