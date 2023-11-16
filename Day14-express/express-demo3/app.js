const express = require('express');
const urlencoded = require('./my-body-parser');

// 2. instantiation
const app = express();


// 3. configuration
// app.set('case sensitive routing', true);
app.disable('case sensitive routing');

app.set('port', process.env.PORT || 3000);

app.use('/search', (req, res)=> {
    console.log(req.query);
    res.send('Search result here');
});
// /users/:uid/posts/:pid => /users/:uid/posts/:pid/*
app.use('/users/:uid/posts/:pid', (req, res) => {
    res.send(`uid: ${req.params.uid}, pid: ${req.params.pid}, cid: ${req.params.cid}`)
});


// 7. bootup
app.listen(app.get('port'), () => console.log(`listening on ${app.get('port')}`));