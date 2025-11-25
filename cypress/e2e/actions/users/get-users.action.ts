import { getUserService } from "../../services/users/get-user.service";
import { getUsersAssert } from "../../asserts/users/get-users.assert";

class GetUsersAction {
  getAllUsers() {
    return getUserService.getUsers().then((response) => {
      getUsersAssert.assertStatusCode(response);

      getUsersAssert.assertIsArray(response);

      getUsersAssert.assertArrayNotEmpty(response);

      response.body.forEach((user) => {
        getUsersAssert.assertUserSchema(user);
        getUsersAssert.assertIdIsValid(user.id);
      })

      return response;
    });
  }
}

export const getUsersAction = new GetUsersAction();
