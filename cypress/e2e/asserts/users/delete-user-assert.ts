class DeleteUserAssert {
    assertSuccess(response, expectedStatus = 200) {
        expect(response.status).to.eq(expectedStatus);
        expect(response.body.message).to.eq("Usuário deletado com sucesso");
    }
}

export const deleteUserAssert = new DeleteUserAssert();