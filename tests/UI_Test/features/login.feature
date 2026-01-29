@test
Feature: Login Verification of the E-Commerce LambdaTest

  Background:
    Given the user navigates to the application

  Scenario: Login with valid credentials
    Given the user is on the login page
    When the user enters valid username and password
    Then the user should be logged in successfully

  Scenario Outline: Login in with invalid credentials "<username>" and "<password>"
    Given the user is on the login page
    When the user enter invalid "<username>" and "<password>"
    Then the user should see an error message

    Examples:
      | username          | password |
      | Automation_tester | test1234 |
      | Jack_Sparrow      | sauce    |
      | Terminator        | arnold   |
