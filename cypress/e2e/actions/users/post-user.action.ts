import { postUserService } from "../../services/users/post-user.service";

class PostUserAction {
  createUser(user) {
    return postUserService.createUser(user);
  }
}

export const postUserAction = new PostUserAction();
