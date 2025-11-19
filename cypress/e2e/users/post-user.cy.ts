import { postUserAction } from "../actions/users/post-user.action";
import { postUserAsserts } from "../asserts/users/post-user.assert";

describe("POST /users - Create user", () => {
  it("deve criar um usuário válido", () => {
    cy.fixture("users/valid-user.json").then((validUser) => {
      postUserAction.createUser(validUser).then((response) => {
        postUserAsserts.validateStatusCode(response, 201);
        postUserAsserts.validateResponseSchema(response);
        postUserAsserts.validateReturnedData(response, validUser);
        postUserAsserts.validateIdIsString(response);
        postUserAsserts.validateResponseTime(response);
      });
    });
  });
});
