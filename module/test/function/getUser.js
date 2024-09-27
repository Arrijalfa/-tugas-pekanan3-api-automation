import request from "supertest";
import { baseUrl } from "../../data/config.js"

// Fungsi untuk mendapatkan semua user dengan otorisasi
async function getUserAll(token) {
    let response = await request(baseUrl)
        .get("/users")  // baseUrl.endpoint
        .set("Authorization", `Bearer ${token}`)  // Sertakan token dalam header
        .set("Content-Type", "application/json");  // Tambahkan Content-Type
    return (await response);
}

// Fungsi untuk mendapatkan user berdasarkan ID dengan otorisasi
async function getUserId(userId, token) {
    let response = await request(baseUrl)
        .get(`/users/${userId}`)  // Tambahkan userId ke URL endpoint
        .set("Authorization", `Bearer ${token}`)  // Sertakan token dalam header
        .set("Content-Type", "application/json");  // Tambahkan Content-Type
    return (await response);
}

export const getUser = {
    all: getUserAll,
    id: getUserId,
};
