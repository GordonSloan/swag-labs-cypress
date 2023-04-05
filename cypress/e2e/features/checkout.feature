Feature: Checkout process
  As a user
  I want to be able to checkout my items
  So that I can complete my purchase

  Background: 
    Given I am logged in
    And I am on the "Products" page

  Scenario: Verify Checkout Overview
    Given the following items are in my cart:
      | product                  |
      | Sauce Labs Backpack      |
      | Sauce Labs Fleece Jacket |
    When I click the shopping cart icon
    And I click the "Checkout" button
    And I enter the billing information:
      | firstName | lastName    | postcode |
      | Testy     | McTesterson | BT7 1SW  |
    And I click the "Continue" button
    Then I should see the "Checkout: Overview" page
    And the overview should contain the following items:
      | product                  | qty |
      | Sauce Labs Backpack      |   1 |
      | Sauce Labs Fleece Jacket |   1 |
    And the price totals should be:
      | itemTotal | tax   | total  |
      | $79.98    | $6.40 | $86.38 |

  Scenario: Verify billing information
    Given the following items are in my cart:
      | product                  |
      | Sauce Labs Backpack      |
      | Sauce Labs Fleece Jacket |
    When I click the shopping cart icon
    And I click the "Checkout" button
    And I enter the billing information:
      | firstName | lastName    | postcode |
      | Testy     | McTesterson | BT7 1SW  |
    And I click the "Continue" button
    Then I should see the "Checkout: Overview" page

  Scenario: Complete checkout successfully
    Given the following items are in my cart:
      | product                  |
      | Sauce Labs Backpack      |
      | Sauce Labs Fleece Jacket |
    When I click the shopping cart icon
    When I click the "Checkout" button
    And I enter the billing information:
      | firstName | lastName    | postcode |
      | Testy     | McTesterson | BT7 1SW  |
    And I click the "Continue" button
    And I click the "Finish" button
    Then I should see the "Checkout: Complete!" page
    And the checkout complete message should be displayed:
      | title                     | text                                                                                    |
      | Thank you for your order! | Your order has been dispatched, and will arrive just as fast as the pony can get there! |

  Scenario: Missing billing information
    Given the following items are in my cart:
      | product                  |
      | Sauce Labs Backpack      |
      | Sauce Labs Fleece Jacket |
    When I click the shopping cart icon
    And I click the "Checkout" button
    And I click the "Continue" button
    Then I should not see the "Checkout: Overview" page
    And I should see the "missing_first_name" billing error message

  Scenario: Missing first name from billing information
    Given the following items are in my cart:
      | product                  |
      | Sauce Labs Backpack      |
      | Sauce Labs Fleece Jacket |
    When I click the shopping cart icon
    And I click the "Checkout" button
    And I enter the billing information:
      | firstName | lastName    | postcode |
      |           | McTesterson | BT7 1SW  |
    And I click the "Continue" button
    Then I should not see the "Checkout: Overview" page
    And I should see the "missing_first_name" billing error message

  Scenario: Missing last name from billing information
    Given the following items are in my cart:
      | product                  |
      | Sauce Labs Backpack      |
      | Sauce Labs Fleece Jacket |
    When I click the shopping cart icon
    And I click the "Checkout" button
    And I enter the billing information:
      | firstName | lastName | postcode |
      | Testy     |          | BT7 1SW  |
    And I click the "Continue" button
    Then I should not see the "Checkout: Overview" page
    And I should see the "missing_last_name" billing error message

  Scenario: Missing postcode from billing information
    Given the following items are in my cart:
      | product                  |
      | Sauce Labs Backpack      |
      | Sauce Labs Fleece Jacket |
    When I click the shopping cart icon
    And I click the "Checkout" button
    And I enter the billing information:
      | firstName | lastName    | postcode |
      | Testy     | McTesterson |          |
    And I click the "Continue" button
    Then I should not see the "Checkout: Overview" page
    And I should see the "missing_postcode" billing error message
