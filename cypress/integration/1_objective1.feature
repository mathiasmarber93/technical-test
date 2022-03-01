Feature: User stories for the “Menu Themes” demo component

    Write a set of tests to verify the Menu Theme behavior components
    Background:
        Given I am on the antdv website

    Scenario: Switch from Dark to Ligth Theme
        And the default theme is the dark theme
        When I click the theme switch, the selected theme changes to light

    Scenario: Switch Menu Navigation
        And the default selected menu item is Navigation One
        When I click any other menu item like Navigation Two, that menu item is selected

    Scenario: Navigation sub-menu expanded
        And the Navigation Three submenu is open by default
        And the Navigation Four submenu is closed by default
        When I click any closed submenu, it opens
        And when I click any open submenu, it closes