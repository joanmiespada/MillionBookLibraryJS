import express from 'express'
import request from './request'

class API
{
    constructor()
    {
        this.app = new express();
    }

    setup()
    {
        let req = new request( );
        this.app.get('/', req.request );
    }

    start()
    {
        this.app.listen(3000, function () {
            console.log('Example app listening on port 3000!');
            });
    }

}


var api = new API();

api.setup();
api.start();
