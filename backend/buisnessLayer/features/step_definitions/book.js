'use strict';

import {defineSupportCode, setWorldConstructor} from 'cucumber'
import assert from 'assert'
//var {defineSupportCode} = require('cucumber');
import Book from '../../src/entities/book'

defineSupportCode(function({Given, When, Then}) {
    //setWorldConstructor(CustomWorld)
    let book;

  Given('I want to create a book', function(callback) {
    
    this.book = null;// new Book();
    callback();
  });

  When('I create new instance', function (callback) {
    this.book = new Book();
    callback();  
  });

  Then('I should get an empty book instance ready for use', function (callback) {
    assert.equal(1,1,'ssdff')
    callback();  
  });
});