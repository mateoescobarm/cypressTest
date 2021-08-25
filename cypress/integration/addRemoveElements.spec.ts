/// <reference types="node" />
/// <reference types="cypress" />

import { AddRemoveElementsPage } from "../page";

const addRemoveElementsPage: AddRemoveElementsPage = new  AddRemoveElementsPage();

context('Add/Remove Element Page', () => {
  beforeEach(() => {
    cy.visit('http://the-internet.herokuapp.com/add_remove_elements/');
  })

  it('user should be able to see the Add/Remove Elements Page', () => {
    addRemoveElementsPage.isOpen();
  })

  it('User should be able to add a new element (1) to the page and delete it', () => {
    addRemoveElementsPage.getAddElementButton().click();
    addRemoveElementsPage.getDeleteNewElementButton().should("be.visible");
    addRemoveElementsPage.getDeleteNewElementButton().click()
    addRemoveElementsPage.getDeleteNewElementButton().should('not.exist')
  })
})
