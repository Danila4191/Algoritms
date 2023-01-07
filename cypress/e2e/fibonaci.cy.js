import {circle}  from "../../src/utils/constants"
describe("Проверьте, что числа генерируются корректно", function () {
  beforeEach(function () {
    cy.visit("/fibonacci");
  });
 
  it("Проверьте, что если в инпуте пусто, то кнопка добавления недоступна", function () {
    cy.get("input").should("have.value", "");
    cy.get("button").should("have.disabled", "true");
  });
  it("Проверьте, что числа генерируются корректно", function () {
    cy.get("input").type("19").should("have.value", "19");
    cy.contains("Рассчитать").click();
    cy.get(circle).as("circle");
    cy.get("@circle")
      .should("have.length", 1)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
      });
    cy.wait(500); /////2
    cy.get("@circle")
      .should("have.length", 2)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("1");
      });
    cy.wait(500); /////3
    cy.get("@circle")
      .should("have.length", 3)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("1");
        if (index === 2) expect(item).to.contain("2");
      });
    cy.wait(500); /////4
    cy.get("@circle")
      .should("have.length", 4)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("1");
        if (index === 2) expect(item).to.contain("2");
        if (index === 3) expect(item).to.contain("3");
      });
    cy.wait(500); ////////5
    cy.get("@circle")
      .should("have.length", 5)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("1");
        if (index === 2) expect(item).to.contain("2");
        if (index === 3) expect(item).to.contain("3");
        if (index === 4) expect(item).to.contain("5");
      });
    cy.wait(500); ///////6
    cy.get("@circle")
      .should("have.length", 6)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("1");
        if (index === 2) expect(item).to.contain("2");
        if (index === 3) expect(item).to.contain("3");
        if (index === 4) expect(item).to.contain("5");
        if (index === 5) expect(item).to.contain("8");
      });
    cy.wait(500); ///////7
    cy.get("@circle")
      .should("have.length", 7)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("1");
        if (index === 2) expect(item).to.contain("2");
        if (index === 3) expect(item).to.contain("3");
        if (index === 4) expect(item).to.contain("5");
        if (index === 5) expect(item).to.contain("8");
        if (index === 6) expect(item).to.contain("13");
      });
    cy.wait(500); ///////8
    cy.get("@circle")
      .should("have.length", 8)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("1");
        if (index === 2) expect(item).to.contain("2");
        if (index === 3) expect(item).to.contain("3");
        if (index === 4) expect(item).to.contain("5");
        if (index === 5) expect(item).to.contain("8");
        if (index === 6) expect(item).to.contain("13");
        if (index === 7) expect(item).to.contain("21");
      });
    cy.wait(500); ///////9
    cy.get("@circle")
      .should("have.length", 9)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("1");
        if (index === 2) expect(item).to.contain("2");
        if (index === 3) expect(item).to.contain("3");
        if (index === 4) expect(item).to.contain("5");
        if (index === 5) expect(item).to.contain("8");
        if (index === 6) expect(item).to.contain("13");
        if (index === 7) expect(item).to.contain("21");
        if (index === 8) expect(item).to.contain("34");
      });
    cy.wait(500); ///////10
    cy.get("@circle")
      .should("have.length", 10)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("1");
        if (index === 2) expect(item).to.contain("2");
        if (index === 3) expect(item).to.contain("3");
        if (index === 4) expect(item).to.contain("5");
        if (index === 5) expect(item).to.contain("8");
        if (index === 6) expect(item).to.contain("13");
        if (index === 7) expect(item).to.contain("21");
        if (index === 8) expect(item).to.contain("34");
        if (index === 9) expect(item).to.contain("55");
      });
    cy.wait(500); ///////11
    cy.get("@circle")
      .should("have.length", 11)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("1");
        if (index === 2) expect(item).to.contain("2");
        if (index === 3) expect(item).to.contain("3");
        if (index === 4) expect(item).to.contain("5");
        if (index === 5) expect(item).to.contain("8");
        if (index === 6) expect(item).to.contain("13");
        if (index === 7) expect(item).to.contain("21");
        if (index === 8) expect(item).to.contain("34");
        if (index === 9) expect(item).to.contain("55");
        if (index === 10) expect(item).to.contain("89");
      });
    cy.wait(500); ///////12
    cy.get("@circle")
      .should("have.length", 12)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("1");
        if (index === 2) expect(item).to.contain("2");
        if (index === 3) expect(item).to.contain("3");
        if (index === 4) expect(item).to.contain("5");
        if (index === 5) expect(item).to.contain("8");
        if (index === 6) expect(item).to.contain("13");
        if (index === 7) expect(item).to.contain("21");
        if (index === 8) expect(item).to.contain("34");
        if (index === 9) expect(item).to.contain("55");
        if (index === 10) expect(item).to.contain("89");
        if (index === 11) expect(item).to.contain("144");
      });
    cy.wait(500); ///////13
    cy.get("@circle")
      .should("have.length", 13)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("1");
        if (index === 2) expect(item).to.contain("2");
        if (index === 3) expect(item).to.contain("3");
        if (index === 4) expect(item).to.contain("5");
        if (index === 5) expect(item).to.contain("8");
        if (index === 6) expect(item).to.contain("13");
        if (index === 7) expect(item).to.contain("21");
        if (index === 8) expect(item).to.contain("34");
        if (index === 9) expect(item).to.contain("55");
        if (index === 10) expect(item).to.contain("89");
        if (index === 11) expect(item).to.contain("144");
        if (index === 12) expect(item).to.contain("233");
      });
    cy.wait(500); ///////14
    cy.get("@circle")
      .should("have.length", 14)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("1");
        if (index === 2) expect(item).to.contain("2");
        if (index === 3) expect(item).to.contain("3");
        if (index === 4) expect(item).to.contain("5");
        if (index === 5) expect(item).to.contain("8");
        if (index === 6) expect(item).to.contain("13");
        if (index === 7) expect(item).to.contain("21");
        if (index === 8) expect(item).to.contain("34");
        if (index === 9) expect(item).to.contain("55");
        if (index === 10) expect(item).to.contain("89");
        if (index === 11) expect(item).to.contain("144");
        if (index === 12) expect(item).to.contain("233");
        if (index === 13) expect(item).to.contain("377");
      });
    cy.wait(500); ///////15
    cy.get("@circle")
      .should("have.length", 15)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("1");
        if (index === 2) expect(item).to.contain("2");
        if (index === 3) expect(item).to.contain("3");
        if (index === 4) expect(item).to.contain("5");
        if (index === 5) expect(item).to.contain("8");
        if (index === 6) expect(item).to.contain("13");
        if (index === 7) expect(item).to.contain("21");
        if (index === 8) expect(item).to.contain("34");
        if (index === 9) expect(item).to.contain("55");
        if (index === 10) expect(item).to.contain("89");
        if (index === 11) expect(item).to.contain("144");
        if (index === 12) expect(item).to.contain("233");
        if (index === 13) expect(item).to.contain("377");
        if (index === 14) expect(item).to.contain("610");
      });
    cy.wait(500); ///////16
    cy.get("@circle")
      .should("have.length", 16)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("1");
        if (index === 2) expect(item).to.contain("2");
        if (index === 3) expect(item).to.contain("3");
        if (index === 4) expect(item).to.contain("5");
        if (index === 5) expect(item).to.contain("8");
        if (index === 6) expect(item).to.contain("13");
        if (index === 7) expect(item).to.contain("21");
        if (index === 8) expect(item).to.contain("34");
        if (index === 9) expect(item).to.contain("55");
        if (index === 10) expect(item).to.contain("89");
        if (index === 11) expect(item).to.contain("144");
        if (index === 12) expect(item).to.contain("233");
        if (index === 13) expect(item).to.contain("377");
        if (index === 14) expect(item).to.contain("610");
        if (index === 15) expect(item).to.contain("987");
      });
    cy.wait(500); ///////17
    cy.get("@circle")
      .should("have.length", 17)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("1");
        if (index === 2) expect(item).to.contain("2");
        if (index === 3) expect(item).to.contain("3");
        if (index === 4) expect(item).to.contain("5");
        if (index === 5) expect(item).to.contain("8");
        if (index === 6) expect(item).to.contain("13");
        if (index === 7) expect(item).to.contain("21");
        if (index === 8) expect(item).to.contain("34");
        if (index === 9) expect(item).to.contain("55");
        if (index === 10) expect(item).to.contain("89");
        if (index === 11) expect(item).to.contain("144");
        if (index === 12) expect(item).to.contain("233");
        if (index === 13) expect(item).to.contain("377");
        if (index === 14) expect(item).to.contain("610");
        if (index === 15) expect(item).to.contain("987");
        if (index === 16) expect(item).to.contain("1597");
      });
    cy.wait(500); ///////18
    cy.get("@circle")
      .should("have.length", 18)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("1");
        if (index === 2) expect(item).to.contain("2");
        if (index === 3) expect(item).to.contain("3");
        if (index === 4) expect(item).to.contain("5");
        if (index === 5) expect(item).to.contain("8");
        if (index === 6) expect(item).to.contain("13");
        if (index === 7) expect(item).to.contain("21");
        if (index === 8) expect(item).to.contain("34");
        if (index === 9) expect(item).to.contain("55");
        if (index === 10) expect(item).to.contain("89");
        if (index === 11) expect(item).to.contain("144");
        if (index === 12) expect(item).to.contain("233");
        if (index === 13) expect(item).to.contain("377");
        if (index === 14) expect(item).to.contain("610");
        if (index === 15) expect(item).to.contain("987");
        if (index === 16) expect(item).to.contain("1597");
        if (index === 17) expect(item).to.contain("2584");
      });
    cy.wait(500); ///////19
    cy.get("@circle")
      .should("have.length", 19)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("1");
        if (index === 2) expect(item).to.contain("2");
        if (index === 3) expect(item).to.contain("3");
        if (index === 4) expect(item).to.contain("5");
        if (index === 5) expect(item).to.contain("8");
        if (index === 6) expect(item).to.contain("13");
        if (index === 7) expect(item).to.contain("21");
        if (index === 8) expect(item).to.contain("34");
        if (index === 9) expect(item).to.contain("55");
        if (index === 10) expect(item).to.contain("89");
        if (index === 11) expect(item).to.contain("144");
        if (index === 12) expect(item).to.contain("233");
        if (index === 13) expect(item).to.contain("377");
        if (index === 14) expect(item).to.contain("610");
        if (index === 15) expect(item).to.contain("987");
        if (index === 16) expect(item).to.contain("1597");
        if (index === 17) expect(item).to.contain("2584");
        if (index === 18) expect(item).to.contain("4181");
      });
    cy.wait(500); ///////20
    cy.get("@circle")
      .should("have.length", 20)
      .each((item, index) => {
        if (index === 0) expect(item).to.contain("1");
        if (index === 1) expect(item).to.contain("1");
        if (index === 2) expect(item).to.contain("2");
        if (index === 3) expect(item).to.contain("3");
        if (index === 4) expect(item).to.contain("5");
        if (index === 5) expect(item).to.contain("8");
        if (index === 6) expect(item).to.contain("13");
        if (index === 7) expect(item).to.contain("21");
        if (index === 8) expect(item).to.contain("34");
        if (index === 9) expect(item).to.contain("55");
        if (index === 10) expect(item).to.contain("89");
        if (index === 11) expect(item).to.contain("144");
        if (index === 12) expect(item).to.contain("233");
        if (index === 13) expect(item).to.contain("377");
        if (index === 14) expect(item).to.contain("610");
        if (index === 15) expect(item).to.contain("987");
        if (index === 16) expect(item).to.contain("1597");
        if (index === 17) expect(item).to.contain("2584");
        if (index === 18) expect(item).to.contain("4181");
        if (index === 19) expect(item).to.contain("6765");
      });
  });
});
