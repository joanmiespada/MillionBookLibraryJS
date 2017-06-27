Feature: Books
	As a user of Books
	I want to create a book entity
	So that I can modify it

	Scenario: Creating a book entity
		Given I want to create a book
		When I create new instance
		Then I should get an empty book instance ready for use

