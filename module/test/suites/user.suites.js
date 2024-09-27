import { expect } from "chai";
import { createToken } from "../function/createToken.js";
import { createUser } from "../function/createUser.js";
import { getUser } from "../function/getUser.js";
import { updateUser } from "../function/updateUser.js";
import { deleteUser } from "../function/deleteUser.js";

describe ("End To End - User KasirAja", () => {
    
    //define global var
    let token;
    let userId;

    //jalankan sebelum test case di eksekusi
    before(async function () {

        // Dapatkan token untuk otentikasi
        token = await createToken();
        this.timeout(10000);
    });

    //Test case create user
    it("Success Create User", async () => {
        const response = await createUser(token);

        // Simpan userId untuk digunakan di test case berikutnya
        userId = response.body.data.userId;

        // Assertion status
        expect((await response).status).to.equal(201)
        ;
        // Assertion bahwa data userId ada di respons
        expect(response.body.data).to.have.property("userId");

        //tampilkan data yang dibuat
        console.log("User berhasil dibuat : ", response.body);
    });

    //Test case read user
    it("Success Get User", async () => {
        const response = await getUser.id(userId, token);

        // Assertion status
        expect((await response).status).to.equal(200);

        // Assertion bahwa nama user ada di respons
        expect(response.body.data.user).to.have.property("name").that.is.a('string');
        
        //Simpan userId untuk digunakan di test case berikutnya
        userId = ((await response).body.data.user.id);

        //tampilkan data
        console.log("Data user : ", response.body.data.user);

    });
    
    //Test case update user
    it("Success Update User", async () => {
        const response = await updateUser(userId, token);
        
        // Assertion status
        expect((await response).status).to.equal(200);

        //tampilkan data
        console.log("User berhasil dirubah menjadi : ",response.body.data.name);
    });

    //Test case delete user
    it('Success Delete User', async function () {
        const response = await deleteUser(userId, token);

        //Assertion bahwa pesan berhasil dihapus
        expect(response).to.have.property('message', 'User berhasil dihapus');
        
        //tampilkan data
        console.log("Hapus user :", response);
    });
})