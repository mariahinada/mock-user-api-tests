import { getUserByIdAction } from "../actions/users/get-user-id.action";
import { getUserByIdAssert } from "../asserts/users/get-user-id.assert";
import { postUserAction } from "../actions/users/post-user.action";

describe("GET /users/:id - Pega usuário por ID", () => {
  it("deve pegar um usuário válido por ID", () => {
    cy.fixture("users/valid-user.json").then((validUser) => {
      postUserAction.createUser(validUser).then((postResponse) => {
        const userId = postResponse.body.id;

        getUserByIdAction.getValidUserById(userId).then((getResponse) => {
          getUserByIdAssert.assertStatusCode(getResponse, 200);
        });
      });
    });
  });
});
