import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("I go to {string}", (url) => {
  cy.visit(url);
});

When("I search for {string}", (text) => {
  //cy.visit(url);
});

Then("I see {string}", (text) => {
  //cy.visit(url);
});
