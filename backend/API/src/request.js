

class request
{
    constructor(bl)
    {
        this.businesslayer = bl.businesslibrary;
    }

    request(req, res) {

        let authors= this.businesslayer.Authors.GetAuthorByGender('male',0,10 );
        //res.send('Hello World!');
        res.send(authors);

        }
}

export default request;