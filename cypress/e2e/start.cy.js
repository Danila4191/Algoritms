describe("Приложение запущенно", function () {
  it("Подключились localhost:3000", function () {
    cy.visit("http://localhost:3000");
  });
  it("Проверка роутинга", function () {
    cy.visit("http://localhost:3000/fibonacci");
    cy.visit("http://localhost:3000/recursion");
    cy.visit("http://localhost:3000/sorting");
    cy.visit("http://localhost:3000/stack");
    cy.visit("http://localhost:3000/queue");
    cy.visit("http://localhost:3000/list");
  });
});
