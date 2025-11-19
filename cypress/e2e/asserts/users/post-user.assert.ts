class PostUserAsserts {
  validateStatusCode(response, expectedStatus = 201) {
    expect(response.status).to.eq(expectedStatus);
  }

  validateResponseSchema(response) {
    expect(response.body).to.have.all.keys(
      "id",
      "name",
      "company",
      "email",
      "isActive"
    );
  }

  validateReturnedData(response, sentData) {
    expect(response.body.name).to.eq(sentData.name);
    expect(response.body.company).to.eq(sentData.company);
    expect(response.body.email).to.eq(sentData.email);
    expect(response.body.isActive).to.eq(sentData.isActive);
  }

  validateIdIsString(response) {
    expect(response.body.id).to.be.a("string");
  }

  validateResponseTime(response, maxMs = 2000) {
    expect(response.duration).to.be.lessThan(maxMs);
  }
}

export const postUserAsserts = new PostUserAsserts();
