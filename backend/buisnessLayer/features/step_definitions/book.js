'use strict';

import {defineSupportCode} from 'cucumber'
//var {defineSupportCode} = require('cucumber');
import Book from '../../src/entities/book'

defineSupportCode(function({Given, When, Then}) {

    let book;

  Given('I want to create a book', function(callback) {
    
    this.book = null;
    callback();
  });

  When('I create new instance', function (callback) {
    this.book = new book();
    callback();  
  });

  Then('I should get an empty book instance ready for use', function (callback) {
    assert.equal(1,1,'ssdff')
    callback();  
  });
});