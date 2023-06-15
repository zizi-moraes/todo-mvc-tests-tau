/// <reference types = "cypress" />

import * as todoPage from "../page-objects/todo-page-function";

describe("Visual validation", () => {
  before(() => todoPage.navigate());
  beforeEach(() => cy.eyesOpen({appName: "TAU TodoMVC", batchName: "TAU TodoMVC hey!" }));
  afterEach(() => cy.eyesClose());

  it("Should look good", () => {
    cy.eyesCheckWindow("Empty todo list");
    todoPage.addTodo("Clean room");
    todoPage.addTodo("Learn Javascript");
    todoPage.toggleTodo(0);

    cy.eyesCheckWindow("Mark as completed");
  });
});
