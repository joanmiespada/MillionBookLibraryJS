import service from './service'
import exception from '../exceptions/exception'


class authorservice extends service
{
    constructor() {
        super();
    }

    getAuthorByGender (gender, pageinit=1, pagesize=10) {

        --pageinit;
        let result = this.list.filter(x=>x.gender === gender).slice(pageinit * pagesize, (pageinit + 1) * pagesize);
        return { totalSize: result.length, items: result  }
    }

}

export default authorservice;