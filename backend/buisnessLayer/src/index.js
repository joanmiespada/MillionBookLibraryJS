import book from './entities/book'
import author from './entities/author'
import authorservice from './services/authorservice'
import bookservice from './services/bookservice'
import Seed from './seeddata/seed'


class businesslibrary
{
    constructor()
    {
        this.bookservice =null;
        this.authorservice = null;

        const aux = new Seed()
        this.authorservice = aux.GenerateHundredAuthors()
        this.bookservice = aux.GenerateOneMillionBooks( this.authorservice )
    }

}

export default businesslibrary