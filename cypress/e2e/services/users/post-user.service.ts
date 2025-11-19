class PostUserService {
  createUser(user) {
    return cy.request({
      method: "POST",
      url: "/users",
      body: user,
      failOnStatusCode: false,
    });
  }
}

export const postUserService = new PostUserService();
