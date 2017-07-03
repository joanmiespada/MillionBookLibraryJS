import bbl from '../../buisnessLayer/lib/businesslayer.js'

class request
{
    constructor(bl)
    {
        this.businesslayer = bl;
        //request.bind(this);
    }

    request(req, res) {

        let businesslayer = new bbl();
        let authors= businesslayer.Authors.GetAuthorByGender('male',0,10 );
        //res.send('Hello World!');
        res.send(authors);

        }
}

export default request;