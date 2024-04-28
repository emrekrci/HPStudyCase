import { expect, request } from "@playwright/test";
import playwrightConfig from "../../playwright.config";

class BaseAPI {
    constructor(){
    }

    async postRequest(path, reqData){
        const context = await request.newContext({baseURL: playwrightConfig.use.baseURL})
        const response = await context.post(path, {data : reqData})
        return response;
    }

    async getRequest(path){
        const context = await request.newContext({baseURL: playwrightConfig.use.baseURL});
        const response = await context.get(path);
        return response;
    }

}

export default BaseAPI