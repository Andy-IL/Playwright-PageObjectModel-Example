import { Page } from "@playwright/test";
import ComputerActions from "../sections/computerActions.section";
import ComputerDetails from "../sections/computerDetails.section";
// let computerDetails: string[][] = [
//   ["01", "nameInAddComputer", "1999-01-01", "2000-12-12","Apple Inc."], 
//   ["02", "SecondNameInAddComputer", "1995-05-05", "2005-11-12", "ASUS" ]
// ] ;

export default class AddComputerPage {
  page: Page;
  computerDetails: ComputerDetails;
  computerActions: ComputerActions;

  constructor(page: Page) {
    this.page = page;
    this.computerActions = new ComputerActions(this.page);
    this.computerDetails = new ComputerDetails(this.page);
  }

  // I like to add a goto method into each page I create
  public async goto() {
    await this.page.goto("https://computer-database.gatling.io/computers");
  }

  // Locators here
  addComputerButton = () => this.page.getByText("Add a new computer");

  // Actions
  public async clickAddNewComputer() {
    await this.addComputerButton().click();
  }

  public async addNewComputer(name,introDate,discDate,company) {
    // await this.computerActions.enterComputerDetails(computerDetails[0][1],computerDetails[0][2],computerDetails[0][3],computerDetails[0][4]);
    await this.computerActions.enterComputerDetails(name,introDate,discDate,company) ;
    await this.computerDetails.createComputer();
  }
}
