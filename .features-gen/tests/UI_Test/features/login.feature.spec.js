// Generated from: tests\UI_Test\features\login.feature
import { test } from "../../../../tests/UI_Test/fixture/fixtures.ts";

test.describe('Login Verification of the E-Commerce LambdaTest', () => {

  test.beforeEach('Background', async ({ Given, logInPage }, testInfo) => { if (testInfo.error) return;
    await Given('the user navigates to the application', null, { logInPage }); 
  });
  
  test('Login with valid credentials', async ({ Given, When, Then, logInPage, page }) => { 
    await Given('the user is on the login page', null, { logInPage }); 
    await When('the user enters valid username and password', null, { logInPage }); 
    await Then('the user should be logged in successfully', null, { page }); 
  });

  test.describe('Login in with invalid credentials "<username>" and "<password>"', () => {

    test('Login in with invalid credentials "Automation_tester" and "test1234"', async ({ Given, When, Then, logInPage }) => { 
      await Given('the user is on the login page', null, { logInPage }); 
      await When('the user enter invalid "Automation_tester" and "test1234"', null, { logInPage }); 
      await Then('the user should see an error message', null, { logInPage }); 
    });

    test('Login in with invalid credentials "Jack_Sparrow" and "sauce"', async ({ Given, When, Then, logInPage }) => { 
      await Given('the user is on the login page', null, { logInPage }); 
      await When('the user enter invalid "Jack_Sparrow" and "sauce"', null, { logInPage }); 
      await Then('the user should see an error message', null, { logInPage }); 
    });

    test('Login in with invalid credentials "Terminator" and "arnold"', async ({ Given, When, Then, logInPage }) => { 
      await Given('the user is on the login page', null, { logInPage }); 
      await When('the user enter invalid "Terminator" and "arnold"', null, { logInPage }); 
      await Then('the user should see an error message', null, { logInPage }); 
    });

  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\UI_Test\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":6,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user navigates to the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":7,"keywordType":"Context","textWithKeyword":"Given the user is on the login page","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"When the user enters valid username and password","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the user should be logged in successfully","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":18,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user navigates to the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given the user is on the login page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user enter invalid \"Automation_tester\" and \"test1234\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Automation_tester\"","children":[{"start":24,"value":"Automation_tester","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"\"test1234\"","children":[{"start":48,"value":"test1234","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the user should see an error message","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user navigates to the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given the user is on the login page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user enter invalid \"Jack_Sparrow\" and \"sauce\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Jack_Sparrow\"","children":[{"start":24,"value":"Jack_Sparrow","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":42,"value":"\"sauce\"","children":[{"start":43,"value":"sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the user should see an error message","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given the user navigates to the application","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given the user is on the login page","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user enter invalid \"Terminator\" and \"arnold\"","stepMatchArguments":[{"group":{"start":23,"value":"\"Terminator\"","children":[{"start":24,"value":"Terminator","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":40,"value":"\"arnold\"","children":[{"start":41,"value":"arnold","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then the user should see an error message","stepMatchArguments":[]}]},
]; // bdd-data-end