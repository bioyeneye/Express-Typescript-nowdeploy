import * as express from 'express'
import { Application } from 'express'
import IControllerBase from 'controllers/abstract/icontrollerbase.abstract'

class App {
    public app: Application
    public port: number;
    public api_base_url: string = "/api";

    constructor(appInit: { port: number; middleWares: any; controllers: IControllerBase[]; }) {
        this.app = express();
        this.port = appInit.port;

        this.middlewares(appInit.middleWares);
        this.routes(appInit.controllers)
    }

    private middlewares(middleWares: { forEach: (arg: (middleWare: any) => void) => void; }) {
        middleWares.forEach(middleWare => {
            this.app.use(middleWare)
        })
    }

    private routes(controllers: { forEach: (arg: (controller: IControllerBase ) => void) => void; }) {
        controllers.forEach(controller => {
            if (controller.isApiController) {
                if (controller.versionNumber > 0) {
                    this.app.use(`${this.api_base_url}/v${controller.versionNumber}`, controller.router);
                }else{
                    this.app.use(`${this.api_base_url}/`, controller.router);
                }
            }else{
                this.app.use(`/`, controller.router);
            }
        })
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the http://localhost:${this.port}`)
        })
    }
}

export default App