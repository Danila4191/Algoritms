describe("Проверка блокировки кнопки при пустом инпуте", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/recursion");
  });

  it("Проверка блокировки кнопки при пустом инпуте", function () {
    cy.get("input").should("have.value", "");
    cy.get("button").should("have.disabled", "true");
  });
  it("Проверьте, что строка разворачивается корректно", function () {
    cy.get("input").type("misterZ").should("have.value", "misterZ");
    cy.contains("Развернуть").click();
    cy.get("[class*=circle_circle]").as("circle");
    ///////////////////////////первый
    cy.get("@circle")
      .should("have.length", 7)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("m");
        if (index === 1) expect(item).to.contain("i");
        if (index === 2) expect(item).to.contain("s");
        if (index === 3) expect(item).to.contain("t");
        if (index === 4) expect(item).to.contain("e");
        if (index === 5) expect(item).to.contain("r");
        if (index === 6) expect(item).to.contain("Z");

        if (index === 0 || index === 6) {
          cy.wrap(item).should(
            "have.css",
            "border",
            "4px solid rgb(210, 82, 225)"
          );
        }
      });

    cy.wait(1000);
    cy.get("@circle").each((item, index) => {
      if (index === 0) expect(item).to.contain("Z");
      if (index === 6) expect(item).to.contain("m");
      if (index === 0 || index === 6) {
        cy.wrap(item).should(
          "have.css",
          "border",
          "4px solid rgb(127, 224, 81)"
        );
      }
    });
    //////////////////// второй
    cy.get("@circle").each((item, index) => {
      if (index === 1) expect(item).to.contain("r");
      if (index === 5) expect(item).to.contain("i");
      if (index === 1 || index === 5) {
        cy.wrap(item).should(
          "have.css",
          "border",
          "4px solid rgb(210, 82, 225)"
        );
      }
    });
    cy.wait(1000);
    cy.get("@circle").each((item, index) => {
      if (index === 1) expect(item).to.contain("r");
      if (index === 5) expect(item).to.contain("i");
      if (index === 1 || index === 5) {
        cy.wrap(item).should(
          "have.css",
          "border",
          "4px solid rgb(127, 224, 81)"
        );
      }
    });
    //////////////////// трейтий
    cy.get("@circle").each((item, index) => {
      if (index === 2) expect(item).to.contain("e");
      if (index === 4) expect(item).to.contain("s");
      if (index === 2 || index === 4) {
        cy.wrap(item).should(
          "have.css",
          "border",
          "4px solid rgb(210, 82, 225)"
        );
      }
    });
    cy.wait(1000);
    cy.get("@circle").each((item, index) => {
      if (index === 2) expect(item).to.contain("e");
      if (index === 4) expect(item).to.contain("s");
      if (index === 2 || index === 4) {
        cy.wrap(item).should(
          "have.css",
          "border",
          "4px solid rgb(127, 224, 81)"
        );
      }
    });
    //////////////////// четвертый
    cy.get("@circle").each((item, index) => {
      if (index === 3) expect(item).to.contain("t");
      if (index === 3) {
        cy.wrap(item).should(
          "have.css",
          "border",
          "4px solid rgb(127, 224, 81)"
        );
      }
    });
  });
});

