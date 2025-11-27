import { postUserAction } from "../actions/users/post-user.action";
import { deleteUserAction } from "../actions/users/delete-user.action";
import { deleteUserAssert } from "../asserts/users/delete-user-assert";

describe("DELETE /users/:id - Deleta um usuário", () => {
  it("deve deletar um usuário existente", () => {
    cy.fixture("users/valid-user.json").then((userData) => {
      
      postUserAction.createUser(userData).then((postResponse) => {
        const userId = postResponse.body.id;

        deleteUserAction.deleteUser(userId).then((deleteResponse) => {
          deleteUserAssert.assertSuccess(deleteResponse);
        });
      });

    });
  });
});
