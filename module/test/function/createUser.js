//function create user
import request from "supertest";
import Chance from "chance";
import { baseUrl } from "../../data/config.js";

const chance = new Chance(); // Membuat instance dari Chance

export async function createUser(token) {
    const payload = {
        name: chance.name(), // Menghasilkan nama acak
        email: chance.email(), // Menghasilkan email acak
        password: chance.string({ length: 8 }), // Menghasilkan string acak sebagai password
    }
    //send request
    const response = await request (baseUrl) //url
        .post("/users") //endpoint
        .send(payload) //request body
        .set("Authorization", `Bearer ${token}`)
        .set("Content-Type","application/json") //header

    return (await response)
}