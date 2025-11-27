import { deleteUserService } from "../../services/users/delete-user.service";

class DeleteUserAction {
    deleteUser(userId: string) {
        return deleteUserService.deleteUser(userId);
    }
}

export const deleteUserAction = new DeleteUserAction();