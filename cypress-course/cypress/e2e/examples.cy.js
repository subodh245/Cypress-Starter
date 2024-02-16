describe("Various examples", () => {
  beforeEach(() => {
    cy.visit("/examples");
  });
  it("multi-page testing", () => {
    cy.getDataTest("nav-why-cypress").click();
    cy.location("pathname").should("equal", "/");

    cy.getDataTest("nav-overview").click();
    cy.location("pathname").should("equal", "/overview");

    cy.getDataTest("nav-fundamentals").click();
    cy.location("pathname").should("equal", "/fundamentals");

    // cy.getDataTest("nav-examples").click();
    // cy.location("pathname").should("equal", "/examples");
  });
  it.only("intercepts", () => {
    cy.intercept("POST", "http://localhost:3000/examples", {
      fixture: "example.json",
    });
    cy.getDataTest("post-button").click();
  });
  it.only("grudges", () => {
    cy.contains(/add some grudges/i);
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 0); //to check list item length
    });
    cy.getDataTest("clear-grudge").should("not.exist"); //to check if clear button is existing or not cause without grudges there is no point to have clear button
    cy.getDataTest("grudge-list-title").should("have.text", "Add Some Grudges");
    cy.getDataTest("grudge-input").within(() => {
      cy.get("input").type("Hey I LOVE CODING"); //to add the grudge to grudge list
    });
    cy.getDataTest("add-grudge-button").click(); //to check the click button
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 1); // to check after adding 1 gurdge there should be 1 grudge in list length
    });
    cy.getDataTest("grudge-list-title").should("have.text", "Grudges");

    cy.getDataTest("grudge-input").within(() => {
      cy.get("input").type("Hey I LOVE singing"); //to add the grudge to grudge list
    });
    cy.getDataTest("add-grudge-button").click(); //to check the click button
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 2); // to check after adding 1 gurdge there should be 2 grudge in list length
      cy.get("li").its(0).should("contains.text", "Hey I LOVE CODING");
    });
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li")
        .its(0)
        .within(() => {
          cy.get("button").click();
        });
    });
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 1); // to check after adding 1 gurdge there should be 2 grudge in list length
    });
    cy.getDataTest("clear-button").click();
    cy.getDataTest("grudge-list").within(() => {
      cy.get("li").should("have.length", 0); // to check after adding 1 gurdge there should be 2 grudge in list length
    });
  });
});
