import { test , expect } from "@playwright/test";
import clientsData from "../data/test-data/clientsData";
const { default: ClientsPath } = require("../paths/ClientPath");

test.describe("Clients Test Cases", async () => {

    test("Get All Clients", async () => {
        const clientApi = new ClientsPath();

        const response = await clientApi.getAllClients();
        expect(response.status()).toEqual(200);
    })

    test("Generate Client Language" , async () => {
        const clientApi = new ClientsPath();
        const response = await clientApi.genClientLib("csharp", clientsData.csharp);
        expect(response.status()).toEqual(200);
    })
})
