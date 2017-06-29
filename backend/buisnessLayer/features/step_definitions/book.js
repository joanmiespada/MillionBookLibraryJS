import {defineSupportCode} from 'cucumber'
import chai from 'chai'
import Book from '../../src/entities/book'
import Author from '../../src/entities/author'

defineSupportCode(function({Given, When, Then}) {
   

  Given(/^I want to create a new book$/, function() {
    
    this.book = null;
   
  });

  When(/^I create new instance with name (.*), author (.*), genre (.*) and publish date today$/, 
        function (name, author,genre,callback) {

            this.aux={ name: name, author:author,genre:genre, callback:callback  }

            this.book = new Book()
            this.book.name =name
            
            this.book.genre = genre
            this.book.publishdate = Date.now()
            
            let authorNew = new Author()
            authorNew.name= author
            this.book.author = authorNew

            callback()
          });

  Then(/^I should get a book instance ready for use$/, function () {
    chai.expect(this.book.name).to.equal( this.aux.name);
    chai.expect(this.book.author.name).to.equal( this.aux.author);
    chai.expect(this.book.genre).to.equal( this.aux.genre);
    
    
    
  });
});


defineSupportCode(function({Given, When, Then}) {
    //setWorldConstructor(CustomWorld)
    let book;

  Given(/^I have a book entity with name (.*)$/, function(name) {
    
    this.book = new Book()
    this.book.name =name
    //callback();
  });

  When(/^I update the name to (.*)$/, 
        function (newname, callback) {
            this.book.name =newname
            callback()
          });

  Then(/^I should get a book with name attribute (.*) instead of (.*)$/, function (newname, oldame) {
    chai.expect(this.book.name).to.equal( newname)
    
  });
});