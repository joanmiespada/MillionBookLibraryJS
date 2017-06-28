import BookService from '../services/bookservice'
import Book from '../entities/book'


class Seed{
    
    GenerateOneMillionBooks()
    {

        let bookservice = new BookService();

        let book = null;
        let books = [];
        for(let i=0; i<10; i++)
        {
            book = new Book();

            book.name="sdfsdf"

            books.push(book);
        }

        bookservice.save(books); 

    }
    
}

const aux = new Seed();    
aux.GenerateOneMillionBooks()