// Generated from: features\smoke.feature
import { test } from "../../src/fixtures/bdd-fixtures.ts";

test.describe('Authentication Checks', () => {

  test('Verify successful login', { tag: ['@smoke'] }, async ({ Given, When, Then, loginPage }) => { 
    await Given('I navigate to the login view', null, { loginPage }); 
    await When('I execute login with "standard_user" and "secret_sauce"', null, { loginPage }); 
    await Then('I see the login is successfull', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('features\\smoke.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to the login view","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I execute login with \"standard_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":21,"value":"\"standard_user\"","children":[{"start":22,"value":"standard_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":41,"value":"\"secret_sauce\"","children":[{"start":42,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I see the login is successfull","stepMatchArguments":[]}]},
]; // bdd-data-end