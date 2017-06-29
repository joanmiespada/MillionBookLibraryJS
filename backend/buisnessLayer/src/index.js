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

    }

    /*test()
    {
        
        let res = this.authorservice.GetAuthorByGender('male')
        console.log(res)
        res = this.authorservice.GetAuthorByGender('female')
        console.log(res)
    }*/

}

var businesslibrary = new _businesslibrary()
//businesslibrary.test()

export default businesslibrary