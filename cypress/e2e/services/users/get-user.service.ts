class GetUserService {
    getUsers() {
        return cy.request({
            method: "GET",
            url: "/users",
            failOnStatusCode: false,
        })
    }

    getUserById(userId) {
        return cy.request({
            method: "GET",
            url: `/users/${userId}`,
            failOnStatusCode: false,
        })
    }
}

export const getUserService = new GetUserService();
