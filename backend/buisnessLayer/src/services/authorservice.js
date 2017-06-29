import service from './service'
import exception from '../exceptions/exception'


class authorservice extends service
{

    constructor()
    {
        super();
    }

    GetAllAuthors(pageinit=0, pagesize=10)
    {
        throw new exception('Not yet implemented')
        //return { totalize:this.list.length, items:this.list}; 
    }

    GetAuthorByGender(gender, pageinit=0, pagesize=10)
    {

        let result = this.list.filter(x=>x.gender === gender)

        return { totalSize: result.length, items: result  }; 
    }
    

}

export default authorservice