# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: features\smoke.feature.spec.js >> Authentication Checks >> Verify error message for locked out user
- Location: .features-gen\features\smoke.feature.spec.js:6:7

# Error details

```
Error: Missing step: Then I see the authentication error message
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]: locked_out_user
      - textbox "Password" [ref=e15]: secret_sauce
      - alert [ref=e19]:
        - button "Dismiss error" [ref=e20] [cursor=pointer]
        - text: "Epic sadface: Sorry, this user has been locked out."
      - button "Login" [active] [ref=e23] [cursor=pointer]
    - generic [ref=e25]:
      - generic [ref=e26]:
        - heading "Accepted usernames are:" [level=4] [ref=e27]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e28]:
        - heading "Password for all users:" [level=4] [ref=e29]
        - text: secret_sauce
```

# Test source

```ts
  1  | // Generated from: features\smoke.feature
  2  | import { test } from "../../src/fixtures/bdd-fixtures.ts";
  3  | 
  4  | test.describe('Authentication Checks', () => {
  5  | 
  6  |   test('Verify error message for locked out user', { tag: ['@smoke'] }, async ({ Given, When, Then, loginPage }) => { 
  7  |     await Given('I navigate to the login view', null, { loginPage }); 
  8  |     await When('I execute login with "locked_out_user" and "secret_sauce"', null, { loginPage }); 
> 9  |     await Then('I see the authentication error message', null, { loginPage }); 
     |           ^ Error: Missing step: Then I see the authentication error message
  10 |   });
  11 | 
  12 | });
  13 | 
  14 | // == technical section ==
  15 | 
  16 | test.use({
  17 |   $test: [({}, use) => use(test), { scope: 'test', box: true }],
  18 |   $uri: [({}, use) => use('features\\smoke.feature'), { scope: 'test', box: true }],
  19 |   $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
  20 | });
  21 | 
  22 | const bddFileData = [ // bdd-data-start
  23 |   {"pwTestLine":6,"pickleLine":3,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given I navigate to the login view","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When I execute login with \"locked_out_user\" and \"secret_sauce\"","stepMatchArguments":[{"group":{"start":21,"value":"\"locked_out_user\"","children":[{"start":22,"value":"locked_out_user","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"},{"group":{"start":43,"value":"\"secret_sauce\"","children":[{"start":44,"value":"secret_sauce","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then I see the authentication error message","stepMatchArguments":[]}]},
  24 | ]; // bdd-data-end
```