Feature: Shopping cart
    As a user
    I want to add items to my shopping cart
    So that they can be purchased through the checkout

  Background: 
    Given I am logged in
    And I am on the "Products" page

  Scenario: Add items to shopping cart
    When I add the following items to my cart:
      | product                  |
      | Sauce Labs Backpack      |
      | Sauce Labs Fleece Jacket |
    Then the shopping cart badge value should be 2

  Scenario: View items added to cart
    When I add the following items to my cart:
      | product                  |
      | Sauce Labs Backpack      |
      | Sauce Labs Fleece Jacket |
    And I click the shopping cart icon
    Then I should see the "Your Cart" page 
    And the following items should be in my cart:
      | product                  | qty |
      | Sauce Labs Backpack      |   1 |
      | Sauce Labs Fleece Jacket |   1 |
    And the shopping cart badge value should be 2

  Scenario: Remove items from shopping cart
    When I add the following items to my cart:
      | product                  |
      | Sauce Labs Backpack      |
      | Sauce Labs Bike Light    |
      | Sauce Labs Fleece Jacket |
      | Sauce Labs Onesie        |
    And I click the shopping cart icon
    And I remove the following items from my cart:
      | product                  |
      | Sauce Labs Fleece Jacket |
    Then the item "Sauce Labs Fleece Jacket" should not be in my shopping cart
    And the following items should be in my cart:
      | product               | qty |
      | Sauce Labs Backpack   |   1 |
      | Sauce Labs Bike Light |   1 |
      | Sauce Labs Onesie     |   1 |
    Then the shopping cart badge value should be 3
