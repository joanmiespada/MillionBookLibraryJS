import service from './service'

class authorservice extends service
{

    constructor()
    {
        super();
    }

    GetAllAuthors(pageinit, pagesize)
    {
        return { totalize:this.list.length, items:this.list}; 
    }

    GetAuthorByGender(gender, pageinit, pagesize)
    {
        return { totalize:0, items:[]}; 
    }
    
    


    



}

export default authorservice