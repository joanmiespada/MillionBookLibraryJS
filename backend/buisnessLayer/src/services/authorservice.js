import service from './service'

class authorservice extends service
{

    GetAllAuthors(pageinit,pagesize)
    {
        return { totalize:0, items:[]}; 
    }

    GetAuthorByGender(gender, pageinit,pagesize)
    {
        return { totalize:0, items:[]}; 
    }
    


    



}

export default authorservice