import { getUserService } from "../../services/users/get-user.service";
import { getUserByIdAssert } from "../../asserts/users/get-user-id.assert";

class GetUserByIdAction {
  getValidUserById(userId: string) {
    return getUserService.getUserById(userId).then((response) => {
      getUserByIdAssert.assertStatusCode(response);

      getUserByIdAssert.assertIsJson(response);

      getUserByIdAssert.assertJsonIsNotEmpty(response);

      getUserByIdAssert.assertUserSchema(response.body);

      getUserByIdAssert.assertIdIsValid(response.body.id);

      return response;
    });
  }
}

export const getUserByIdAction = new GetUserByIdAction();
