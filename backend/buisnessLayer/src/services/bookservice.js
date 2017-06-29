import service from './service'

class bookservice extends service
{

    static get ONEMILLION(){
        return 1000000;
    }

    GetAllBooks(pageinit,pagesize)
    {
        return { totalize:0, items:[]}; 
    }

    GetBooksByName(name,pageinit,pagesize)
    {
        return { totalize:0, items:[]};
    }

    GetBooksByAuthorName(name, pageinit,pagesize)
    {
        return { totalize:0, items:[]};
    }

    GetBooksByGenre(genre, pageinit,pagesize)
    {
        return { totalize:0, items:[]};
    }

    GetBooksByGenreAndPublishedDate(genre,publishdate, pageinit,pagesize)
    {
        return { totalize:0, items:[]};
    }



    



}

export default bookservice