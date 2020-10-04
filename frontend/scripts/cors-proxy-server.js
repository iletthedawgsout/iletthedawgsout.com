const express = require('express');
const request = require('request');

const app = express();

app.use(express.json()) // for parsing application/json

app.use((req, res, next) => {
    console.log(`Appending CORS header to ${req.baseUrl}`);
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/posts', (req, res) => {
    console.log(`Making request on behalf of ${req.baseUrl}`);
    request({ url: 'https://api.iletthedawgsout.com/posts' }, (error, response, body) => {
        if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: 'error', message: err.message });
        }

        console.log(`Passing request through to ${req.baseUrl}`);
        res.json(JSON.parse(body));
    });
});

app.get('/api/posts', (req, res) => {
    console.log(`Making GET request on behalf of ${req.baseUrl}`);
    request({ url: 'http://localhost:7071/api/posts' }, (error, response, body) => {
        if (error || response.statusCode !== 200) {
            return res.status(500).json({ type: 'error', message: err.message });
        }

        console.log(`Passing request through to ${req.baseUrl}`);
        res.json(JSON.parse(body));
    });
});

app.post('/api/posts', (req, res) => {
    console.log(`Making POST request on behalf of ${req.baseUrl}`);
    console.log(req.body);

    request.post(
        'http://localhost:7071/api/posts',
        {
          json: req.body,
        },
        (error, res2, body) => {
          if (error) {
            console.error(error)
            return
          }
          console.log(`statusCode: ${res.statusCode}`)
          console.log(body)
          res.json(body);
        }
      )
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));
