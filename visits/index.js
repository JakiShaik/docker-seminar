const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
//This is the communication link between two containers. Here in host, we are specifying the hostname as the name of the other 
//container.
const client = redis.createClient({
    host:'redis-server',
    port:6379
});
client.set('visits',0)

app.get('/',(req,res) => {
    client.get('visits',(err,visits) => {
        res.send('Number of visits is '+visits);
        client.set('visits',parseInt(visits)+1);
    });
});

app.listen(8081,() => {
    console.log('Listening on port 8081');
});