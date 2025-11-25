import { postUserAction } from "../actions/users/post-user.action";
import { putUserAction } from "../actions/users/put-user.action";
import { putUserAssert } from "../asserts/users/put-user.assert";

describe("PUT /users/:id - Atualiza um usuário", () => {
  it("deve atualizar um usuário existente", () => {
    cy.fixture("users/valid-user.json").then((userData) => {
      postUserAction.createUser(userData).then((postResponse) => {
        const userId = postResponse.body.id;

        const updatedPayload = {
          name: "Nome Atualizado",
          company: "Compania Atualizada",
          email: "E-mail Atualizado",
          isActive: false,
        };

        putUserAction.updateUser(userId, updatedPayload).then((putResponse) => {
          putUserAssert.assertStatusCode(putResponse, 200);
          putUserAssert.assertIsJson(putResponse);
          putUserAssert.assertNotEmpty(putResponse);
          putUserAssert.assertUpdatedFields(putResponse, updatedPayload);
          putUserAssert.assertUserSchema(putResponse.body.user);
          putUserAssert.assertIdIsValid(putResponse.body.user.id);
        });
      });
    });
  });
});
