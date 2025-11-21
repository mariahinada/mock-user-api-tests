class GetUsersAsserts {
  assertStatusCode(response, expectedStatus = 200) {
    expect(response.status).to.eq(expectedStatus);
  }

  assertIsArray(response) {
    expect(response.body).to.be.an("array");
  }

  assertArrayNotEmpty(response) {
    expect(response.body.length).to.be.greaterThan(0);
  }

  assertUserSchema(user) {
    expect(user).to.have.property("id");
    expect(user).to.have.property("name");
    expect(user).to.have.property("company");
    expect(user).to.have.property("email");
    expect(user).to.have.property("isActive");
  }
}

export const getUsersAsserts = new GetUsersAsserts();
