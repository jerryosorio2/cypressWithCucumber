import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I go to {string}", (url) => {
  cy.visit(url);
});

When("I search for {string}", (text) => {
  cy.get('input[name="q"]').type(`${text}{enter}`);
});

Then("I see {string}", (text) => {
  cy.xpath(`//h3[contains(text(),"${text}")]`).should("have.text", text);
});
