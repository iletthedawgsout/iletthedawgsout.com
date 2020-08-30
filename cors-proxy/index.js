const express = require('express');
const request = require('request');

const app = express();

app.use((req, res, next) => {
    console.log(`Appending CORS header to ${req.baseUrl}`);
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get('/posts', (req, res) => {
    console.log(`Making request on behalf of ${req.baseUrl}`);
    request(
        { url: 'https://iletthedawgsout.azurewebsites.net/posts' },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                return res.status(500).json({ type: 'error', message: err.message });
            }

            console.log(`Passing request through to ${req.baseUrl}`);
            res.json(JSON.parse(body));
        }
    )
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`listening on ${PORT}`));