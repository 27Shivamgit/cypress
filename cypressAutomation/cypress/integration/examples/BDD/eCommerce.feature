Feature: E2E eCommerece validation

    Application Regression

    Scenario: eCommerece products delivery
    Given Open eCommerce Page
    When add items to cart
    And validate total price
    Then select country, submit and verify Success
