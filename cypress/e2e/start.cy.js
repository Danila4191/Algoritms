describe("Приложение запущенно", function () {
  it("Подключились localhost:3000", function () {
    cy.visit(".");
  });
  it("Проверка роутинга", function () {
    cy.visit("/fibonacci");
    cy.visit("/recursion");
    cy.visit("/sorting");
    cy.visit("/stack");
    cy.visit("/queue");
    cy.visit("/list");
  });
});
