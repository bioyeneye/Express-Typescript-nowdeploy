import Axios from "axios-observable";

class BaseHttpClientService {

    http: Axios;
    constructor() {
        this.http = this.createHttpClientInstance();
    }

    private createHttpClientInstance() {
        let httpclient = Axios.create({
            baseURL: ""
        });

        return httpclient;
    }

    public getEncodedParams(params: any): string {

        let body: string = "";
        for (let key in params) {
            if (body.length) {
                body += "&";
            }
            body += key + "=";
            body += encodeURIComponent(params[key]);
        }

        return body;
    }
}

export default BaseHttpClientService;