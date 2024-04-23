import { Page } from "@playwright/test";
export default class ComputerActions {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators here
  nameTextbox = () => this.page.locator("#name");
  introducedTextbox = () => this.page.locator("#introduced");
  discontinuedTextbox = () => this.page.locator("#discontinued");
  companySelect = () => this.page.locator("#company");

  // Actions
  public async enterComputerDetails(name,introDate,discDate,company) {
    await this.nameTextbox().fill(name);
    await this.introducedTextbox().fill(introDate);
    await this.discontinuedTextbox().fill(discDate);
    await this.companySelect().selectOption({ label: company });
  }
  // public async enterComputerDetails(name,introDate,discDate,company) {
  //   await this.nameTextbox().fill("CommitQuality");
  //   await this.introducedTextbox().fill("1999-12-12");
  //   await this.introducedTextbox().fill("2000-12-12");
  //   await this.companySelect().selectOption({ label: "Apple Inc." });
  // }
}
