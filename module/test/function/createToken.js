import request from "supertest";
import { baseUrl } from "../../data/config.js"

export async function createToken () {

    const payload = {
        "email": "abah@ex.com",
        "password": "Abah123@"
    }

    //send request
    const response = await request (baseUrl)
        .post("/authentications") 
        .send(payload) 
        .set("Content-Type","application/json") 
    const token = (await response.body.data.accessToken)
    return token
}