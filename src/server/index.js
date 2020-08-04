const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

const bodyParser =  require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const cors = require('cors')
app.use(cors())
app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// Require the Aylien npm package
var aylien = require("aylien_textapi");

// You could call it aylienapi, or anything else
var textapi = new aylien({
   application_id: process.env.API_ID,
   application_key: process.env.API_KEY
});

// app.post("/sentiment", (req, res) => {
//     const newData = {
//       polarity: req.body.polarity,
//       subjectivity: req.body.subjectivity,
//       text: req.body.text,
//       polarity_confidence: req.body.polarity_confidence,
//       subjectivity_confidence: req.body.subjectivity_confidence
//     };
//     textapi.sentiment({
//             url: req.body.url
//     }, (error, response) => {
//         if (error) {
// 	    console.log('api error', error, response)
//             return;
//         }
//         projectData = newData;
//         console.log(projectData);
//         // console.log(url);
//         // console.log(response);
//         res.send(response);
//     });
// });

const request = require('./request')
app.post("/sentiment",request.validateInputRequest,request.PostHandler );
