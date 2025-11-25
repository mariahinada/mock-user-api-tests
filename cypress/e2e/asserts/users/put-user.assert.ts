class PutUserAssert {
  assertStatusCode(response, expectedStatusCode = 200) {
    expect(response.status).to.eq(expectedStatusCode);
  }

  assertIsJson(response) {
    expect(response.headers["content-type"]).to.include("application/json");
  }

  assertNotEmpty(response) {
    expect(response.body).to.not.be.empty;
  }

  assertUpdatedFields(response, payload) {
    const user = response.body.user; 

    Object.keys(payload).forEach((field) => {
      expect(user[field]).to.eq(payload[field]);
    });
  }

  assertUserSchema(user) {
    expect(user).to.have.property("id");
    expect(user).to.have.property("name");
    expect(user).to.have.property("company");
    expect(user).to.have.property("email");
    expect(user).to.have.property("isActive");
  }

  assertIdIsValid(uuid) {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    expect(uuid).to.match(uuidRegex);
  }
}

export const putUserAssert = new PutUserAssert();
