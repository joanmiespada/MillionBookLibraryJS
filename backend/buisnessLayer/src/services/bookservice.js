import service from './service'

class bookservice extends service
{

    static get ONEMILLION(){
        return 1000000;
    }


    GetBooksByName(name,pageinit=1,pagesize=10)
    {
        --pageinit;
        let result = this.list.filter(x=>x.name === name).slice(pageinit * pagesize, (pageinit + 1) * pagesize);
        return { totalSize: result.length, items: result  }

    }

    GetBooksByAuthorName(name, pageinit=1,pagesize=10)
    {
        --pageinit;
        let result = this.list.filter(x=>x.author.name === name).slice(pageinit * pagesize, (pageinit + 1) * pagesize);
        return { totalSize: result.length, items: result  }
    }

    GetBooksByGenre(genre, pageinit,pagesize)
    {
        --pageinit;
        let result = this.list.filter(x=>x.genre === genre).slice(pageinit * pagesize, (pageinit + 1) * pagesize);
        return { totalSize: result.length, items: result  }
    }

    GetBooksByGenreAndPublishedDate(genre,publishdate, pageinit,pagesize)
    {
        --pageinit;
        let result = this.list.
                        filter(x=>x.genre === genre).
                        filter(d=>d.publishdate === publishdate).
                        slice(pageinit * pagesize, (pageinit + 1) * pagesize);
        return { totalSize: result.length, items: result  }
    }



    



}

export default bookservice