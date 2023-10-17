it("adds todos", () => {
  // visit homepage
  cy.visit("/");
  // fill the input
  cy.get('[data-cy="new-todo"]').type("write code");
  // submit
  cy.get('[data-cy="submit"]').click().wait(1000);
  // fill the input
  cy.get('[data-cy="new-todo"]').type("write tests");
  // submit
  cy.get('[data-cy="submit"]').click();

  // should be visible 2 tasks
  cy.get('[data-cy="todos"]').should("have.length", 2);
});
