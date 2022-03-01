Feature: Upload and post editing features

    Write a set of test to verify the upload image and post editing features
    Background:
        Given I navigate to the Imgur website

    Scenario Outline: When filling all the features
        When I click on new post button
        When I paste image url
        And I add a "<title>" and "<description>"

        Examples:
            | title                | description                |
            | Technical Test Title | Technical Test Description |