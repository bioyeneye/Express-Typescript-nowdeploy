import { Router } from "express";

/**
 * Base controller for express controllers
 */
interface IControllerBase {
    path: string;
    router: Router;
    initRoutes(): any;
    isApiController: boolean;
    versionNumber: number;
}

export default IControllerBase