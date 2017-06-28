Feature: Books
	As a user of Books
	I want to create a book entity
	So that I can modify it

	Scenario: Creating a book entity
		Given I want to create a new book
		When I create new instance with name Pepe, author Manolo, genre Love and publish date today
		Then I should get a book instance ready for use

	Scenario: Modifing a book entity
		Given I have a book entity with name Pepe
		When I update the name to Jose
		Then I should get a book with name attribute Jose instead of Pepe

