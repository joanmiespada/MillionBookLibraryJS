import exception from '../exceptions/exception';
import Immutable from 'immutable';
class service
{

    constructor()
    {
        this.list=[];
    }
    Save(xs)
    {
       this.list = [...xs];
    }

    Add(item)
    {
        this.list.push(item);
    }

    GetAt(index)
    {
        if(index > this.list.length) throw exception('no enought items');
        return this.list[index];
    }

    Count()
    {
        return this.list.length;
    }

    GetAll(pageinit=1, pagesize=10)
    {
        --pageinit;
        const aux= this.list.slice(pageinit * pagesize, (pageinit + 1) * pagesize);

        const items = Immutable.fromJS(aux);

        return { totalSize: this.list.length, items: items};
    }


}

export default service;