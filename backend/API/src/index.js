import express from 'express'

class API
{
    constructor()
    {
        this.app = new express();
    }

    setup()
    {
        this.app.get('/', function (req, res) {
            res.send('Hello World!');
            });
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
