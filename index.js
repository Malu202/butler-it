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
    fetch('http://antischwitzomat.glitch.me/measurements', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req.body)
    });
    res.status(200).send("sending request: " + JSON.stringify(req.body));
    // .then(res => res.text())
    // .then(body => {
    //     res.write("Glitch response:\n" + body);
    //     res.statusCode = 200
    //     res.end()
    // });
}