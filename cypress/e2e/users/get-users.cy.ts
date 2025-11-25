import { getUsersAction } from "../actions/users/get-users.action";
import { getUsersAssert } from "../asserts/users/get-users.assert";

describe("GET /users - Pega todos os usuários", () => {
    it("deve pegar todos os usuários", () => {
                getUsersAction.getAllUsers().then((getResponse) => {
                    getUsersAssert.assertStatusCode(getResponse, 200);
                })
            })
        })