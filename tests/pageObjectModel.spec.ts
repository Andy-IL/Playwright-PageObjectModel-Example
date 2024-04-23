import { test, expect } from "@playwright/test";
import AddComputerPage from "./support/pageobjectmodel/pages/addComputer.page";
import ComputersPage from "./support/pageobjectmodel/pages/computers.page";
let computerDetails: string[][] = [
  ["01", "ComputerNameInPOM_Test", "1999-01-01", "2000-12-12","Apple Inc."], 
  ["02", "SecondNameInPOM_Test", "1995-05-25", "2005-11-12", "ASUS" ]
] ;


test("basic test", async ({ page }) => {
  await page.goto("https://computer-database.gatling.io/computers");
  await page.getByText("Add a new computer").click();
  await page.locator("#name").fill(computerDetails[0][1]);
  await page.locator("#introduced").fill(computerDetails[0][2]);
  await page.locator("#discontinued").fill(computerDetails[0][3]);
  await page.locator("#company").selectOption({ label: computerDetails[0][4] });
  await page.getByText("Create this computer").click();
  await expect(
    page.getByText("Done ! Computer " + computerDetails[0][1] + " has been created")
  ).toBeVisible();
});

test("basic test with POM", async ({ page }) => {
  const computersPage = new ComputersPage(page);
  const addComputerPage = new AddComputerPage(page);
  await computersPage.goto();
  await computersPage.clickAddNewComputer();

  await addComputerPage.addNewComputer(computerDetails[0][1],computerDetails[0][2],computerDetails[0][3],computerDetails[0][4]);

  await computersPage.assertNewComputerAdded();
});
