@smoke
Feature: Authentication Checks
	Scenario: Verify successful login
	Given I navigate to the login view
	When I execute login with "standard_user" and "secret_sauce"
	Then I see the login is successfull