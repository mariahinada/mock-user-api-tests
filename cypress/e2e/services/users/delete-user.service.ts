class DeleteUserService {
  deleteUser(userId: string) {
    return cy.request({
      method: "DELETE",
      url: `/users/${userId}`,
      failOnStatusCode: false,
    });
  }
}

export const deleteUserService = new DeleteUserService();