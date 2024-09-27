import request from "supertest";
import { baseUrl } from "../../data/config.js";

export async function deleteUser(userId, token) {
    const response = await request(baseUrl)
        .delete(`/users/${userId}`)
        .set("Authorization", `Bearer ${token}`);

    if (response.status === 200) {
        return response.body;  // Mengembalikan pesan hasil delete
    } else {
        throw new Error(`Failed to delete user, status: ${response.status}`);
    }
}
