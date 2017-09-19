import * as bbl from '../../buisnessLayer/lib/businesslayer'

class request
{

    request(req, res) {

        console.log(bbl);

        let businesslayer =  bbl.authorservice();
        let randomdata =  RandomSeed();

        const authorsService = randomdata.GenerateHundredAuthors();
        const booksService = randomdata.GenerateBooks(authors);

        let authors= authorsService.getAuthorByGender('male',0,10 );
        //res.send('Hello World!');
        res.send(authors);

        }
}

export default request;