'use strict';

import {defineSupportCode} from 'cucumber'
import chai from 'chai'
//var {defineSupportCode} = require('cucumber');
import Book from '../../src/entities/book'

defineSupportCode(function({Given, When, Then}) {
    //setWorldConstructor(CustomWorld)
    let book;

  Given(/^I want to create a new book$/, function() {
    
    this.book = null;
    //callback();
  });

  When(/^I create new instance with name (.*), author (.*), genre (.*) and publish date today$/, 
        function (name, author,genre,callback) {

            this.aux={ name: name, author:author,genre:genre, callback:callback  }

            this.book = new Book()
            this.book.name =name
            this.book.author = author
            this.book.genre = genre
            this.book.publishdate = Date.now()
            
            callback()
          });

  Then(/^I should get a book instance ready for use$/, function () {
    chai.expect(this.book.name).to.equal( this.aux.name);
    chai.expect(this.book.author).to.equal( this.aux.author);
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