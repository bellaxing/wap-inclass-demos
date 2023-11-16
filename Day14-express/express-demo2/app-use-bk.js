const express = require('express');
const urlencoded = require('./my-body-parser');
const path = require('path');

// 2. instantiation
const app = express();


// 3. configuration
// app.set('case sensitive routing', true);
app.disable('case sensitive routing');

app.set('port', process.env.PORT || 3000);

// app.use(urlencoded);
app.use(express.urlencoded());

// 4. middlewares
app.use('/add-product', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'add-product.html'));
})
// app.use('/add-product', (req, res) => {
//     const html = `
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <meta charset="UTF-8">
//         <meta name="viewport" content="width=device-width, initial-scale=1.0">
//         <title>Document</title>
//     </head>
//     <body>
//         <form action="/save-product" method="post">
//             <p>Title: <input name="title"></p>
//             <p>Price: <input type="number" min="1" name="price"></p>
//             <p>Description: <textarea name="description"></textarea></p>
//             <button>Add</button>
//         </form>
//     </body>
//     </html>
//     `;
//     res.send(html);
// });

app.use('/save-product', (req, res) => {
    console.log(req.body);

    res.send('Save successfully');
});





// 7. bootup
app.listen(app.get('port'), () => console.log(`listening on ${app.get('port')}`));