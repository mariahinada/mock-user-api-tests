import { postUserAction } from "../actions/users/post-user.action";
import { postUserAssert } from "../asserts/users/post-user.assert";

describe("POST /users - Create user", () => {
  it("deve criar um usuário válido", () => {
    cy.fixture("users/valid-user.json").then((validUser) => {
      postUserAction.createUser(validUser).then((response) => {
        postUserAssert.assertStatusCode(response, 201);
        postUserAssert.assertResponseSchema(response);
        postUserAssert.assertReturnedData(response, validUser);
        postUserAssert.assertIdIsString(response);
        postUserAssert.assertResponseTime(response);
      });
    });
  });
});
