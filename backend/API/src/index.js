import express from 'express'
import request from './request'
import bbl from '../../buisnessLayer/lib/businesslayer.js'
//import businesslayer from 'businesslayer'


class API
{
    constructor(bl)
    {
        this.app = new express();
        this.businesslayer= bl;
    }

    setup()
    {
        let req = new request( this.businesslayer );
        this.app.get('/', req.request );
    }

    start()
    {
        //let rq = new request();
        //rq.pepe();
        this.app.listen(3000, function () {
            console.log('Example app listening on port 3000!');
            });
    }

}


var api = new API( new bbl() ); //dependency injection

api.setup();
api.start();
