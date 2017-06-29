Feature: Authors
	As a user of Books
	I want to create/update/read/delete authors
	So that I can manage authors

	Scenario: Filtering author
		Given An authorservice with testdata loaded 
		When I want filter authors by gender male 
		Then I should get a list of authors of 2 elements  