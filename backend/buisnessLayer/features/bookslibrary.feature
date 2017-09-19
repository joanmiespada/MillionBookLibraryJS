Feature: BooksLibrary
	As a user of BooksLibrary
	I want to create a complete book library
	So that I can read that books

	Scenario: Creating a bookLibrary
		Given An empty book libray
		When I want create hundred of authors
        When I want create one million of books
		Then I should get a book randomly with one author
		Then I get all books