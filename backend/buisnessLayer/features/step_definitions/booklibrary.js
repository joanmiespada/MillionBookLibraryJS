import {defineSupportCode} from 'cucumber'
import chai from 'chai'
import Author from '../../src/entities/author'
import BookService from '../../src/services/bookservice'
import SeedData from '../../src/seeddata/randomseed'
import Immutable from 'immutable'


defineSupportCode(function({Given, When, Then}) {
    
    const BOOKS=10000; 

    Given(/^An empty book libray$/, function() {
        
        this.booklib = new BookService()
        
    });

    When(/^I want create hundred of authors$/, 
        function (callback) {

            let seeder = new SeedData();
            this.authorstore = seeder.GenerateHundredAuthors();
            callback()
          });

    When(/^I want create one million of books$/, 
        function (callback) {

            let seeder = new SeedData();
            this.booklib = seeder.GenerateBooks(this.authorstore, BOOKS)
            callback()
          });

      Then(/^I should get a book randomly with one author$/, function () {

        let r = Math.floor(Math.random() * BOOKS);
        let book = this.booklib.GetAt(r);
        chai.expect(book.author).be.instanceOf( Author  );

      });

      Then(/^I get all books$/, function () {

            let books = this.booklib.GetAll(1,BOOKS);
            const leng= books.items.valueSeq().count();
            chai.expect(leng).equal( BOOKS  );

      });

});