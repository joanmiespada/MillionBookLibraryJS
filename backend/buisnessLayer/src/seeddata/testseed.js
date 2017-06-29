import BookService from '../services/bookservice'
import AuthorService from '../services/authorservice'
import Book from '../entities/book'
import Author from '../entities/author'

class TestSeed{

        GenerateAuthors ()
        {
           

            let authorservice = new AuthorService();

            let author = null;
            let authors = [];

            
            author = new Author()
            author.name= 'J.K. Rowling'
            author.gender = 'female'
            authors.push(author)

            author = new Author()
            author.name= 'J.R.R. Tolkien'
            author.gender = 'male'
            authors.push(author)

            author = new Author();
            author.name= 'Tom Clancy'
            author.gender = 'male'
            authors.push(author)
            
            authorservice.Save(authors);

            return  authorservice;

        }


        GenerateBooks(authorservice)
        {            

            let bookservice = new BookService();

            let book = null;
            let books = [];
            
            book = new Book()

            book.name= 'Harry Potter I'
            book.publishdate = new Date(2011,10,25)
            book.genre = Book.genreTypes[4]           
            book.author = authorservice.GetAt(0)
            books.push(book);

            book.name= 'Harry Potter II'
            book.publishdate = new Date(2012,10,25)
            book.genre = Book.genreTypes[4]           
            book.author = authorservice.GetAt(0)
            books.push(book);

            book.name= 'Harry Potter III'
            book.publishdate = new Date(2013,10,25)
            book.genre = Book.genreTypes[4]           
            book.author = authorservice.GetAt(0)
            books.push(book);


            book.name= 'Lord of the Rings I'
            book.publishdate = new Date(1981,10,25)
            book.genre = Book.genreTypes[4]           
            book.author = authorservice.GetAt(1)
            books.push(book);

            book.name= 'Lord of the Rings II'
            book.publishdate = new Date(1982,10,25)
            book.genre = Book.genreTypes[4]           
            book.author = authorservice.GetAt(1)
            books.push(book);

            book.name= 'Lord of the Rings III'
            book.publishdate = new Date(1983,10,25)
            book.genre = Book.genreTypes[4]           
            book.author = authorservice.GetAt(1)
            books.push(book);

            book.name= 'Rainbow six'
            book.publishdate = new Date(1983,10,25)
            book.genre = Book.genreTypes[4]           
            book.author = authorservice.GetAt(2)
            books.push(book);



            bookservice.Save(books); 

            return bookservice;
        }
}

export default TestSeed