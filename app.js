const express = require('express');
const keys = require('./config/keys');
const axios = require('axios');
const cors = require('cors');
const path = require('path');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client', 'dist')));

app.post('/api/get-past-weather', (req, res) => {
    const DS_BASE = `https://api.darksky.net/forecast/${keys.DarkSkyAPI}/`;
    // const ds_call = `${DSURL}`;
    axios.get(`https://api.darksky.net/forecast/${keys.DarkSkyAPI}/${req.body.lat},${req.body.lon},${req.body.time}T00:00:00?exclude=minutely,hourly,flags,isd-stations`).then(
        resp => {
            res.send(resp.data);
        }
    ).catch(error => res.send(error))
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
});


app.listen(PORT, () => {
    console.log('Server Running on PORT: ' + PORT);
});
