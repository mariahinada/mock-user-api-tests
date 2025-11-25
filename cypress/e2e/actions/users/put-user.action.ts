import { putUserService } from "../../services/users/put-user.service";

class PutUserAction {
    updateUser(userId, payload) {
        return putUserService.updateUser(userId, payload);
    }
}

export const putUserAction = new PutUserAction();
