import BaseAPI from "./BaseAPI"

class ClientsPath extends BaseAPI {
    constructor(){
        super();
    }

    async getAllClients(){
        const clients = await this.getRequest("api/gen/clients");
        return clients;
    }

    async genClientLib(language, bodyData){
        const generatedClient = await this.postRequest(`api/gen/clients/${language}`, bodyData);
        return generatedClient;
    }
}

export default ClientsPath;