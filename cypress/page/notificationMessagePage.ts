export class NotificationMessagePage {

  private headerTitle: string;
  private loadNewMessageButton: string;
  private notificationPopUp: string;

  constructor () {
    this.headerTitle = '.example h3';
    this.loadNewMessageButton = '.example p > a';
    this.notificationPopUp = '#flash';
  }

  public getHeaderTitle() {
    return cy.get(this.headerTitle);
  }

  public getLoadNewMessageButton() {
    return cy.get(this.loadNewMessageButton);
  }

  public getNotificationPopUp() {
    return cy.get(this.notificationPopUp);
  }

  public isOpen() {
    this.getHeaderTitle().contains("Notification Message");
    this.getLoadNewMessageButton().should("be.visible");
    this.getNotificationPopUp().should("not.exist");
  }
}
