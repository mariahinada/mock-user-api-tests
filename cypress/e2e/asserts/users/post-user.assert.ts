class PostUserAssert {
  assertStatusCode(response, expectedStatus = 201) {
    expect(response.status).to.eq(expectedStatus);
  }

  assertResponseSchema(response) {
    expect(response.body).to.have.all.keys(
      "id",
      "name",
      "company",
      "email",
      "isActive"
    );
  }

  assertReturnedData(response, sentData) {
    expect(response.body.name).to.eq(sentData.name);
    expect(response.body.company).to.eq(sentData.company);
    expect(response.body.email).to.eq(sentData.email);
    expect(response.body.isActive).to.eq(sentData.isActive);
  }

  assertIdIsString(response) {
    expect(response.body.id).to.be.a("string");
  }

  assertResponseTime(response, maxMs = 2000) {
    expect(response.duration).to.be.lessThan(maxMs);
  }
}

export const postUserAssert = new PostUserAssert();
