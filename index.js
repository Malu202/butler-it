let express = require('express');
let bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const fetch = require('node-fetch');

let app = express();
app.use(bodyParser.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.post('/', function (req, res) {
    forwardRequest(req, res);
})

let server = app.listen(process.env.PORT || 3000, () => {
    let host = server.address().address
    let port = server.address().port
    console.log("App listening at http://%s:%s", host, port)
})

async function forwardRequest(req, res) {
    console.log("received request: " + req);
    let url = req.query.url;
    console.log("url: " + url);
    let bodyString = JSON.stringify(req.body);
    console.log("body: " + bodyString);
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: bodyString
    });
    res.status(200).send("sending to '" + url + "' the following request: \n" + bodyString);
}