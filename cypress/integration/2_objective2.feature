Feature: Quadratic Formula Scenarios

    Write a set of test to verify the quadratica formula behavior
    Background:
        Given I navigate to the Quadratic Formula Calculator website

    Scenario Outline: When value A is different to 0
        When I type value A as "<val_a>"
        And I type value B as "<val_b>"
        And I type value C as "<val_c>"
        And I click the button calculate
        Then the website shows the answer

        Examples:
            | val_a | val_b | val_c |
            | 1     | 5     | 3     |

        Scenario Outline: When value A is equal to 0
        When I type value A as "<val_a>"
        And I type value B as "<val_b>"
        And I type value C as "<val_c>"
        And I click the button calculate
        Then the website shows an error answer

        Examples:
            | val_a | val_b | val_c |
            | 0     | 2     | 4     |