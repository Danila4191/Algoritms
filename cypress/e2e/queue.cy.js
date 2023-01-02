

describe("Проверьте, правильность добавления элемента в очередь", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000/queue");
  });
  it("Проверка блокировки кнопки при пустом инпуте", function () {
    cy.get("input").should("have.value", "");
    cy.contains("Добавить").should("have.disabled", "true");
  });
  it("Проверьте, правильность добавления элемента в очередь", function () {
    cy.get("input").type("11").should("have.value", "11");
    cy.contains("Добавить").click();
    cy.get("[class*=circle_content]").as("circle-content");
    cy.get("@circle-content")
      .should("have.length", 7)
      .each((item, index) => {
        if (index === 0) {
          expect(item).to.contain("11");
          expect(item).to.contain("head");
          expect(item).to.contain("tail");
          cy.get(item)
            .find("[class*=circle_circle]")
            .should("have.css", "border", "4px solid rgb(210, 82, 225)");
        }
      });
    cy.wait(1000);
    cy.get("@circle-content")
      .should("have.length", 7)
      .each((item, index) => {
        if (index === 0) {
          expect(item).to.contain("11");
          expect(item).to.contain("head");
          expect(item).to.contain("tail");

          cy.get(item)
            .find("[class*=circle_circle]")
            .should("have.css", "border", "4px solid rgb(0, 50, 255)");
        }
      });
    cy.get("input").should("have.value", "");
    ////////////////////////первый добавлен
    cy.get("input").type("22").should("have.value", "22");
    cy.contains("Добавить").click();
    cy.get("[class*=circle_content]").as("circle-content");
    cy.get("@circle-content")
      .should("have.length", 7)
      .each((item, index) => {
        if (index === 0) {
          expect(item).to.contain("11");
          expect(item).to.contain("head");
        }
        if (index === 1) {
          expect(item).to.contain("22");
          expect(item).to.contain("tail");
          cy.get(item)
            .find("[class*=circle_circle]")
            .should("have.css", "border", "4px solid rgb(210, 82, 225)");
        }
      });
    cy.wait(1000);
    cy.get("@circle-content")
      .should("have.length", 7)
      .each((item, index) => {
        if (index === 0) {
          expect(item).to.contain("11");
          expect(item).to.contain("head");
        }
        if (index === 1) {
          expect(item).to.contain("22");
          expect(item).to.contain("tail");
          cy.get(item)
            .find("[class*=circle_circle]")
            .should("have.css", "border", "4px solid rgb(0, 50, 255)");
        }
      });
    cy.get("input").should("have.value", "");
    //////////////////////// второй добавлен
    cy.get("input").type("33").should("have.value", "33");
    cy.contains("Добавить").click();
    cy.get("[class*=circle_content]").as("circle-content");
    cy.get("@circle-content")
      .should("have.length", 7)
      .each((item, index) => {
        if (index === 0) {
          expect(item).to.contain("11");
          expect(item).to.contain("head");
        }
        if (index === 1) {
          expect(item).to.contain("22");
        }
        if (index === 2) {
          expect(item).to.contain("33");
          expect(item).to.contain("tail");
          cy.get(item)
            .find("[class*=circle_circle]")
            .should("have.css", "border", "4px solid rgb(210, 82, 225)");
        }
      });
    cy.wait(1000);
    cy.get("@circle-content")
      .should("have.length", 7)
      .each((item, index) => {
        if (index === 0) {
          expect(item).to.contain("11");
          expect(item).to.contain("head");
        }
        if (index === 1) {
          expect(item).to.contain("22");
        }
        if (index === 2) {
          expect(item).to.contain("33");
          expect(item).to.contain("tail");
          cy.get(item)
            .find("[class*=circle_circle]")
            .should("have.css", "border", "4px solid rgb(0, 50, 255)");
        }
      });
    cy.get("input").should("have.value", "");
    ////////////////////////третий добавлен
  });
  it("Проверить правильность удаления элемента из очереди", function () {
    cy.get("input").type("11").should("have.value", "11");
    cy.contains("Добавить").click();
    cy.wait(1000)
    cy.get("input").type("22").should("have.value", "22");
    cy.contains("Добавить").click();
    cy.wait(1000)
    cy.get("input").type("33").should("have.value", "33");
    cy.contains("Добавить").click();
    cy.wait(1000)
    cy.contains("Удалить").click();
    cy.get("[class*=circle_content]").as("circle-content");
    cy.get("@circle-content")
      .should("have.length", 7)
      .each((item, index) => {
        if (index === 0) {
          expect(item).to.contain("11");
          expect(item).to.contain("head");
          cy.get(item)
            .find("[class*=circle_circle]")
            .should("have.css", "border", "4px solid rgb(210, 82, 225)");
        }
        if (index === 1) {
          expect(item).to.contain("22");
        }
        if (index === 2) {
          expect(item).to.contain("33");
          expect(item).to.contain("tail");
        }
      });
    cy.wait(1000);
    cy.get("@circle-content")
      .should("have.length", 7)
      .each((item, index) => {
        if (index === 0) {
          expect(item).to.contain("");
          cy.get(item)
            .find("[class*=circle_circle]")
            .should("have.css", "border", "4px solid rgb(0, 50, 255)");
        }
        if (index === 1) {
          expect(item).to.contain("22");
          expect(item).to.contain("head");
        }
        if (index === 2) {
          expect(item).to.contain("33");
          expect(item).to.contain("tail");
        }
      });
    cy.get("input").should("have.value", "");
    ///////////////////первый удален
    cy.contains("Удалить").click();
    cy.get("[class*=circle_content]").as("circle-content");
    cy.get("@circle-content")
      .should("have.length", 7)
      .each((item, index) => {
        if (index === 1) {
          expect(item).to.contain("22");
          expect(item).to.contain("head");
          cy.get(item)
            .find("[class*=circle_circle]")
            .should("have.css", "border", "4px solid rgb(210, 82, 225)");
        }
        if (index === 2) {
          expect(item).to.contain("33");
          expect(item).to.contain("tail");
        }
      });
    cy.wait(1000);
    cy.get("@circle-content")
      .should("have.length", 7)
      .each((item, index) => {
        if (index === 1) {
          expect(item).to.contain("");
          cy.get(item)
            .find("[class*=circle_circle]")
            .should("have.css", "border", "4px solid rgb(0, 50, 255)");
        }
        if (index === 2) {
          expect(item).to.contain("head");
          expect(item).to.contain("33");
          expect(item).to.contain("tail");
        }
      });
    cy.get("input").should("have.value", "");
    ////////////////второй удален
  });
  it("Проверьте поведение кнопки «Очистить».", function () {
    cy.get("input").type("11").should("have.value", "11");
    cy.contains("Добавить").click();
    cy.wait(1000)
    cy.get("input").type("22").should("have.value", "22");
    cy.contains("Добавить").click();
    cy.wait(1000)
    cy.get("input").type("33").should("have.value", "33");
    cy.contains("Добавить").click();
    cy.wait(1000)

    cy.contains("Очистить").click();
    cy.get("[class*=circle_content]").as("circle-content");
    cy.get("@circle-content")
      .should("have.length", 7)
      .each((item) => {   
          expect(item).to.contain(""); 
      });
  });
});




  