export class AddRemoveElementsPage {

  private headerTitle: string;
  private addElementButton: string;
  private deleteNewElementButton: string;

  constructor () {
    this.headerTitle = '#content h3';
    this.addElementButton = '.example button';
    this.deleteNewElementButton = '.added-manually';
  }

  public getHeaderTitle() {
    return cy.get(this.headerTitle);
  }

  public getAddElementButton() {
    return cy.get(this.addElementButton);
  }

  public getDeleteNewElementButton() {
    return cy.get(this.deleteNewElementButton);
  }

  public isOpen() {
    this.getHeaderTitle().contains("Add/Remove Elements");
    this.getAddElementButton().should("be.visible");
    this.getDeleteNewElementButton().should("not.exist");
  }
}
