Feature: Products page
    As a user
    I want to view available products
    So that I can add them to my shopping cart for purchase

  Background: 
    Given I am logged in
    And I am on the "Products" page

  Scenario: Sort items on "Name (A to Z)"
    When I select "Name (A to Z)" from the sort by dropdown
    Then products are displayed in the following order
      | sortOrder | product                           | price  |
      |         1 | Sauce Labs Backpack               | $29.99 |
      |         2 | Sauce Labs Bike Light             | $9.99  |
      |         3 | Sauce Labs Bolt T-Shirt           | $15.99 |
      |         4 | Sauce Labs Fleece Jacket          | $49.99 |
      |         5 | Sauce Labs Onesie                 | $7.99  |
      |         6 | Test.allTheThings() T-Shirt (Red) | $15.99 |

  Scenario: Sort items on "Name (Z to A)"
    When I select "Name (Z to A)" from the sort by dropdown
    Then products are displayed in the following order
      | sortOrder | product                           | price  |
      |         1 | Test.allTheThings() T-Shirt (Red) | $15.99 |
      |         2 | Sauce Labs Onesie                 | $7.99  |
      |         3 | Sauce Labs Fleece Jacket          | $49.99 |
      |         4 | Sauce Labs Bolt T-Shirt           | $15.99 |
      |         5 | Sauce Labs Bike Light             | $9.99  |
      |         6 | Sauce Labs Backpack               | $29.99 |

  Scenario: Sort items on "Price (low to high)"
    When I select "Price (low to high)" from the sort by dropdown
    Then products are displayed in the following order
      | sortOrder | product                           | price  |
      |         1 | Sauce Labs Onesie                 | $7.99  |
      |         2 | Sauce Labs Bike Light             | $9.99  |
      |         3 | Sauce Labs Bolt T-Shirt           | $15.99 |
      |         4 | Test.allTheThings() T-Shirt (Red) | $15.99 |
      |         5 | Sauce Labs Backpack               | $29.99 |
      |         6 | Sauce Labs Fleece Jacket          | $49.99 |

  Scenario: Sort items on "Price (high to low)"
    When I select "Price (high to low)" from the sort by dropdown
    Then products are displayed in the following order
      | sortOrder | product                           | price  |
      |         1 | Sauce Labs Fleece Jacket          | $49.99 |
      |         2 | Sauce Labs Backpack               | $29.99 |
      |         3 | Sauce Labs Bolt T-Shirt           | $15.99 |
      |         4 | Test.allTheThings() T-Shirt (Red) | $15.99 |
      |         5 | Sauce Labs Bike Light             | $9.99  |
      |         6 | Sauce Labs Onesie                 | $7.99  |

  Scenario: View item details
    When I click the "Sauce Labs Bike Light" product
    Then I am on the product details page
    And the product details for "Sauce Labs Bike Light" should be displayed

  Scenario: Return to products from product detail page
    When I click the "Sauce Labs Bolt T-Shirt" product
    And I click the Back to products link
    Then I am on the "Products" page
