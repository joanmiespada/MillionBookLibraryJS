import {defineSupportCode} from 'cucumber'
import chai from 'chai'
import Author from '../../src/entities/author'
import AuthorService from '../../src/services/authorservice'
import TestSeedData from '../../src/seeddata/testseed'

defineSupportCode(function({Given, When, Then}) {

    let authorservice=null;
    

    Given(/^An authorservice with testdata loaded$/, function() {
        


        authorservice = new TestSeedData().GenerateAuthors()
        
    });

    When(/^I want filter authors by gender (.*)$/, 
        function (gender, callback) {

          this.filtered= authorservice.getAuthorByGender(gender).items;
                      
            callback()
          });

    
  Then(/^I should get a list of authors of (.*) elements$/, function (num) {

    chai.expect(this.filtered.length).equal( parseInt(num) )
    
    
  });
});