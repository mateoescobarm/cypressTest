/// <reference types="node" />
/// <reference types="cypress" />

import { NotificationMessagePage } from "../page";

const notificationsPage: NotificationMessagePage = new  NotificationMessagePage();

context('Notification Message Page', () => {
  beforeEach(() => {
    cy.visit('http://the-internet.herokuapp.com/notification_message_rendered');
  })

  it('user should be able to see the Notification Messag Pagee', () => {
    notificationsPage.isOpen();
  })

  it('User should be able to add a new element (1) to the page and delete it', () => {
    notificationsPage.getLoadNewMessageButton().click();
    notificationsPage.getNotificationPopUp().should("be.visible");
  })
})
