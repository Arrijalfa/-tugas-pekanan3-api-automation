import request from "supertest"
import Chance from "chance";
import { baseUrl } from "../../data/config.js"

const chance = new Chance();

export async function updateUser(userId, token) {
    const payload = {
        name: chance.name(), // Menghasilkan nama acak
        email: chance.email(), // Menghasilkan email acak
    };

    const response = await request(baseUrl)
        .put(`/users/${userId}`)
        .send(payload)
        .set("Authorization", `Bearer ${token}`)
        .set("Content-Type", "application/json");
        return await response;  // Mengembalikan data user yang diupdate
}
