import {circleContainer}  from "../../src/utils/constants"
describe("Проверьте, что если в инпуте пусто, то кнопка добавления недоступна, кнопки добавления по индексу и удаления по индексу недоступны тоже.", function () {
  beforeEach(function () {
    cy.visit("/list");
  });


  it("Проверьте, что если в инпуте пусто, то кнопка добавления недоступна, кнопки добавления по индексу и удаления по индексу недоступны тоже.", function () {
    cy.get("input").should("have.value", "");
    cy.contains("Добавить в tail").should("have.disabled", "true");
    cy.contains("Добавить в head").should("have.disabled", "true");
    cy.contains("Добавить по индексу").should("have.disabled", "true");
  });
  
  it("отрисовки дефолтного списка", function () {
    cy.get(circleContainer).as("circle-content");
    cy.get("@circle-content").each((item, index) => {
      if (index === 0) {
        expect(item).to.contain("head");
      }
      if (index ===  5) {
        expect(item).to.contain("tail");
      } 
    });
  });
  
  it("добавления элемента в head.", function () {
    cy.get('input[placeholder*="введите значение"]').type("11").should("have.value", "11");
    
    cy.contains("Добавить в head").click();
    cy.wait(1000)
    cy.get(circleContainer).as("circle-content");
    cy.get("@circle-content").should("have.length", 6).each((item, index) => {
      if (index === 0) {
        expect(item).to.contain("head")
        expect(item).to.contain("11")
      }
    });
  });
  it("добавить в tail.", function () {
    cy.get('input[placeholder*="введите значение"]').type("11").should("have.value", "11");
    cy.contains("Добавить в tail").click();
    cy.wait(1000)
    cy.get(circleContainer).as("circle-content");
    cy.get("@circle-content").should("have.length", 6).each((item, index) => {
      if (index === 5) {
        expect(item).to.contain("tail")
        expect(item).to.contain("11")
      }
    });
  });
  it("добавить по индексу.", function () {
    cy.get('input[placeholder*="введите значение"]').type("11").should("have.value", "11");
    cy.get('input[value*="0"]').type("3").should("have.value", "03");
    cy.contains("Добавить по индексу").click();
    cy.wait(3000)
    cy.get(circleContainer).as("circle-content");
    cy.get("@circle-content").should("have.length", 6).each((item, index) => {
      if (index === 3) {
        expect(item).to.contain("11")
      }
    });
  });
  it("удалить элемента в head.", function () {
    cy.contains("Удалить из head").click();
    cy.wait(1000)
    cy.get(circleContainer).as("circle-content");
    cy.get("@circle-content").should("have.length", 4).each((item, index) => {
      if (index === 0) {
        expect(item).to.contain("head")
      }
    });
  });
  it("удалить в tail.", function () {
    cy.contains("Удалить из tail").click();
    cy.wait(1000)
    cy.get(circleContainer).as("circle-content");
    cy.get("@circle-content").should("have.length", 4).each((item, index) => {
      if (index === 3) {
        expect(item).to.contain("tail")
      }
    });
  });
  it("удалить по индексу.", function () {
    cy.get('input[value*="0"]').type("3").should("have.value", "03");
    cy.contains("Удалить по индексу").click();
    cy.wait(3000)
    cy.get(circleContainer).as("circle-content");
    cy.get("@circle-content").should("have.length", 4).each((item, index) => {
    });
  });
});
