import { test } from "./fixtures/basePage";
let computerDetails: string[][] = [
  ["01", "ComputerNameInFixtures_Test", "1999-01-01", "2000-12-12","Apple Inc."], 
  ["02", "SecondNameInPOM_Test", "1995-05-25", "2005-11-12", "ASUS" ]
] ;

test("basic test POM with fixtures", async ({
  computersPage,
  addComputerPage,
}) => {
  await computersPage.goto();
  await computersPage.clickAddNewComputer();

  await addComputerPage.addNewComputer(computerDetails[0][1],computerDetails[0][2],computerDetails[0][3],computerDetails[0][4]);

  await computersPage.assertNewComputerAdded();
});
