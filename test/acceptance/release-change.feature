Feature: Release Change

  As a customer,
  I want to release the money not spent buying products
  So that I do not overpay.

  Scenario: Simple Release
    Given I have done nothing
    When I press the release button
    Then 0 cents are released