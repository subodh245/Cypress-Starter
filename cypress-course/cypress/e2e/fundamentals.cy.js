// describe("Fundamentals test", () => {
//   it("Contains correct header text", () => {
//     cy.visit("/fundamentals");
//     cy.get('[data-test="fundamntals-header"]').should(
//       "contain.text",
//       "Testing Fundamentals"
//     );
//   });
//   it("Accordion works correctly", () => {
//     cy.visit("/fundamentals");
//     cy.contains(/Your tests will exist in a describe block/i).should(
//       "not.be.visible"
//     );
//     cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
//     cy.contains(/Your tests will exist in a describe block/i).should(
//       "be.visible"
//     );
//     cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
//     cy.contains(/Your tests will exist in a describe block/i).should(
//       "not.be.visible"
//     );
//   });
// });

// Before each method

// describe("Fundamentals test", () => {
//   beforeEach(() => {
//     cy.visit("/fundamentals");
//   });

//   it("Contains correct header text", () => {
//     cy.get('[data-test="fundamentals-header"]').should(
//       "contain.text",
//       "Testing Fundamentals"
//     );
//   });

//   it("Accordion works correctly", () => {
//     cy.contains(/Your tests will exist in a describe block/i).should(
//       "not.be.visible"
//     );
//     cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
//     cy.contains(/Your tests will exist in a describe block/i).should(
//       "be.visible"
//     );
//     cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
//     cy.contains(/Your tests will exist in a describe block/i).should(
//       "not.be.visible"
//     );
//   });
// });

// Custom commands

describe("Fundamentals test", () => {
  beforeEach(() => {
    cy.visit("/fundamentals");
  });

  it("Contains correct header text", () => {
    cy.getDataTest("fundamentals-header").should(
      "contain.text",
      "Testing Fundamentals"
    );
  });

  it("Accordion works correctly", () => {
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "be.visible"
    );
    cy.get('[data-test="accordion-item-1"] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
  });
});
