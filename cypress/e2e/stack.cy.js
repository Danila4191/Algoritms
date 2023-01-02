
describe("Проверьте, что если в инпуте пусто, то кнопка добавления недоступна", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/stack");
  });

  it("Проверьте, что если в инпуте пусто, то кнопка добавления недоступна", function () {
    cy.get("input").should("have.value", "");
    cy.contains("Добавить").should("have.disabled", "true");
  });
  it("Проверьте правильность добавления элемента в стек", function () {
    cy.get("input").type("1").should("have.value", "1");
    cy.contains("Добавить").click();
    cy.get("[class*=circle_circle]").as("circle");
    cy.get("@circle")
      .should("have.length", 1)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 0) {
          cy.wrap(item).should(
            "have.css",
            "border",
            "4px solid rgb(210, 82, 225)"
          );
        }
      });

    cy.wait(1000);
    cy.get("@circle").each((item, index) => {
      if (index === 0) expect(item).to.contain("1");
      if (index === 0) {
        cy.wrap(item).should("have.css", "border", "4px solid rgb(0, 50, 255)");
      }
    });
    cy.get("input").should("have.value", "");
    ////////////////////////
    cy.get("input").type("2").should("have.value", "2");
    cy.contains("Добавить").click();
    cy.get("[class*=circle_circle]").as("circle");
    cy.get("@circle")
      .should("have.length", 2)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("2");
        if (index === 1) {
          cy.wrap(item).should(
            "have.css",
            "border",
            "4px solid rgb(210, 82, 225)"
          );
        }
      });

    cy.wait(1000);
    cy.get("@circle").each((item, index) => {
      if (index === 0) expect(item).to.contain("1");
      if (index === 1) expect(item).to.contain("2");
      if (index === 1) {
        cy.wrap(item).should("have.css", "border", "4px solid rgb(0, 50, 255)");
      }
    });
    cy.get("input").should("have.value", "");
    ////////////////////////
    cy.get("input").type("3").should("have.value", "3");
    cy.contains("Добавить").click();
    cy.get("[class*=circle_circle]").as("circle");
    cy.get("@circle")
      .should("have.length", 3)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("2");
        if (index === 2) expect(item).to.contain("3");
        if (index === 2) {
          cy.wrap(item).should(
            "have.css",
            "border",
            "4px solid rgb(210, 82, 225)"
          );
        }
      });

    cy.wait(1000);
    cy.get("@circle").each((item, index) => {
      if (index === 0) expect(item).to.contain("1");
      if (index === 1) expect(item).to.contain("2");
      if (index === 2) expect(item).to.contain("3");
      if (index === 2) {
        cy.wrap(item).should("have.css", "border", "4px solid rgb(0, 50, 255)");
      }
    });

   
  });
  it("Проверьте правильность удаления элемента в стек", function () {
    cy.get("input").type("1").should("have.value", "1");
    cy.contains("Добавить").click();
    cy.get("[class*=circle_circle]").as("circle");
    cy.get("@circle")
      .should("have.length", 1)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 0) {
          cy.wrap(item).should(
            "have.css",
            "border",
            "4px solid rgb(210, 82, 225)"
          );
        }
      });

    cy.wait(1000);
    cy.get("@circle").each((item, index) => {
      if (index === 0) expect(item).to.contain("1");
      if (index === 0) {
        cy.wrap(item).should(
          "have.css",
          "border",
          "4px solid rgb(0, 50, 255)"
        );
      }
    });
    cy.get("input").should("have.value", "");
    ////////////////////////
    cy.get("input").type("2").should("have.value", "2");
    cy.contains("Добавить").click();
    cy.get("[class*=circle_circle]").as("circle");
    cy.get("@circle")
      .should("have.length", 2)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("2");
        if (index === 1) {
          cy.wrap(item).should(
            "have.css",
            "border",
            "4px solid rgb(210, 82, 225)"
          );
        }
      });

    cy.wait(1000);
    cy.get("@circle").each((item, index) => {
      if (index === 0) expect(item).to.contain("1");
      if (index === 1) expect(item).to.contain("2");
      if (index === 1) {
        cy.wrap(item).should(
          "have.css",
          "border",
          "4px solid rgb(0, 50, 255)"
        );
      }
    });
    cy.get("input").should("have.value", "");
    ////////////////////////
    cy.get("input").type("3").should("have.value", "3");
    cy.contains("Добавить").click();
    cy.get("[class*=circle_circle]").as("circle");
    cy.get("@circle")
      .should("have.length", 3)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("2");
        if (index === 2) expect(item).to.contain("3");
        if (index === 2) {
          cy.wrap(item).should(
            "have.css",
            "border",
            "4px solid rgb(210, 82, 225)"
          );
        }
      });

    cy.wait(1000);
    cy.get("@circle").each((item, index) => {
      if (index === 0) expect(item).to.contain("1");
      if (index === 1) expect(item).to.contain("2");
      if (index === 2) expect(item).to.contain("3");
      if (index === 2) {
        cy.wrap(item).should(
          "have.css",
          "border",
          "4px solid rgb(0, 50, 255)"
        );
      }
    });
    ////////////////удаление
    cy.contains("Удалить").click();
    cy.get("@circle")
    .should("have.length", 2)
    .each((item, index) => {
      if (index === 0) expect(item).to.contain("1");
      if (index === 1) expect(item).to.contain("2");
    });
    cy.wait(1000)
    cy.contains("Удалить").click();
    cy.get("@circle")
    .should("have.length", 1)
    .each((item, index) => {
      if (index === 0) expect(item).to.contain("1"); 
    });
  });
  it("Проверьте правильность удаления элемента в стек", function () {
    cy.get("input").type("1").should("have.value", "1");
    cy.contains("Добавить").click();
    cy.get("[class*=circle_circle]").as("circle");
    cy.get("@circle")
      .should("have.length", 1)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 0) {
          cy.wrap(item).should(
            "have.css",
            "border",
            "4px solid rgb(210, 82, 225)"
          );
        }
      });

    cy.wait(1000);
    cy.get("@circle").each((item, index) => {
      if (index === 0) expect(item).to.contain("1");
      if (index === 0) {
        cy.wrap(item).should(
          "have.css",
          "border",
          "4px solid rgb(0, 50, 255)"
        );
      }
    });
    cy.get("input").should("have.value", "");
    ////////////////////////
    cy.get("input").type("2").should("have.value", "2");
    cy.contains("Добавить").click();
    cy.get("[class*=circle_circle]").as("circle");
    cy.get("@circle")
      .should("have.length", 2)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("2");
        if (index === 1) {
          cy.wrap(item).should(
            "have.css",
            "border",
            "4px solid rgb(210, 82, 225)"
          );
        }
      });

    cy.wait(1000);
    cy.get("@circle").each((item, index) => {
      if (index === 0) expect(item).to.contain("1");
      if (index === 1) expect(item).to.contain("2");
      if (index === 1) {
        cy.wrap(item).should(
          "have.css",
          "border",
          "4px solid rgb(0, 50, 255)"
        );
      }
    });
    cy.get("input").should("have.value", "");
    ////////////////////////
    cy.get("input").type("3").should("have.value", "3");
    cy.contains("Добавить").click();
    cy.get("[class*=circle_circle]").as("circle");
    cy.get("@circle")
      .should("have.length", 3)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("2");
        if (index === 2) expect(item).to.contain("3");
        if (index === 2) {
          cy.wrap(item).should(
            "have.css",
            "border",
            "4px solid rgb(210, 82, 225)"
          );
        }
      });

    cy.wait(1000);
    cy.get("@circle").each((item, index) => {
      if (index === 0) expect(item).to.contain("1");
      if (index === 1) expect(item).to.contain("2");
      if (index === 2) expect(item).to.contain("3");
      if (index === 2) {
        cy.wrap(item).should(
          "have.css",
          "border",
          "4px solid rgb(0, 50, 255)"
        );
      }
    });
    ////////////////удаление
    cy.contains("Очистить").click();
    cy.get("@circle")
    .should("have.length", 0)
  });
});


