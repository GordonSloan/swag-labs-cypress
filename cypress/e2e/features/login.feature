Feature: User login
    As a user 
    I want to log in to the swag labs site
    So that I can shop for items

  Background: 
    Given I am on the Swag Labs login page

  Scenario: Valid login credentials
    When I enter "valid" credentials
    And I click the login button
    Then I should see the "Products" page

  Scenario: Invalid login credentials
    When I enter "invalid" credentials
    And I click the login button
    Then I should not see the "Products" page
    And I should see the "invalid_user" login error message

  Scenario: Locked out credentials
    When I enter "locked_out" credentials
    And I click the login button
    Then I should not see the "Products" page
    And I should see the "locked_out_user" login error message

  Scenario: Missing credentials
    When I click the login button
    Then I should not see the "Products" page
    And I should see the "missing_username" login error message

  Scenario: Missing username
    When I enter "valid" password credentials
    And I click the login button
    Then I should not see the "Products" page
    And I should see the "missing_username" login error message

  Scenario: Missing password
    When I enter "valid" username credentials
    And I click the login button
    Then I should not see the "Products" page
    And I should see the "missing_password" login error message
