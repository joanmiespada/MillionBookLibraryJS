import {defineSupportCode} from 'cucumber'
import chai from 'chai'
import Author from '../../src/entities/author'
import AuthorService from '../../src/services/authorservice'
import TestSeedData from '../../src/seeddata/testseed'

defineSupportCode(function({Given, When, Then}) {
    
    

    Given(/^An authorservice with testdata loaded$/, function() {
        
        this.authorservice = new AuthorService()

        this.authorservice.Save( new TestSeedData().GenerateAuthors())
        
    });

    When(/^I want filter authors by gender (.*)$/, 
        function (gender, callback) {

          this.filtered= this.authorservice.GetAuthorByGender(gender).items;
                      
            callback()
          });

    
  Then(/^I should get a list of authors of (.*) elements$/, function (num) {

    chai.expect(this.filtered.length).equal( parseInt(num) )
    
    
  });
});