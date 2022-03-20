const http = require("http")
const fetch = require('node-fetch');


const server = http.createServer((req, res) => {
    if (req.url == '/') {
        // makeRequest((response) => {
        fetch('http://antischwitzomat.glitch.me/currentroommeasurements?user_id=20')
            .then(res => res.text())
            .then(body => {
                res.write("Glitch response:\n" + body);
                res.statusCode = 200
                res.end()
            });
        // })
    }
})

server.listen(process.env.PORT || 3000, () => {
    console.log("Server is Running")
})


function makeRequest(callback) {
    const options = {
        host: "antischwitzomat.glitch.me",
        path: '/currentroommeasurements?user_id=20',
        method: 'GET'
    }
    http.request(options, (response) => {
        var str = '';
        response.on('data', function (chunk) {
            str += chunk;
        });
        response.on('end', function () {
            callback(str);
        });
    }).end();

}