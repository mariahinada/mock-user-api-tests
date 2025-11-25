class PutUserService {
  updateUser(userId: string, payload: object) {
    return cy.request({
      method: "PUT",
      url: `/users/${userId}`,
      body: payload,
      failOnStatusCode: false,
    });
  }
}

export const putUserService = new PutUserService();