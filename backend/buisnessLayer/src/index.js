import book from './entities/book'
import author from './entities/author'
import authorservice from './services/authorservice'
import bookservice from './services/bookservice'
import RandomSeed from './seeddata/randomseed'


class _businesslibrary
{
    constructor()
    {
        this.bookservice =null;
        this.authorservice = null;

        const aux = new RandomSeed()
        this.authorservice = aux.GenerateHundredAuthors()
        this.bookservice = aux.GenerateBooks( this.authorservice, bookservice.ONEMILLION )

        let bookfirst = this.bookservice.GetAt(0);
        
    }

}

var businesslibrary = new _businesslibrary();

export default businesslibrary