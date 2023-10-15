const express = require('express'); //library import
const productRoutes = require('./routes/productRoutes')
const userRoutes = require('./routes/userRoutes')
const bodyParser = require('body-parser')
require('./utils/db');
const cors = require('cors')
const app = express(); //library ka object create kia
const port = 3005;

//middle ware
app.use(bodyParser.json());
app.use(cors());

//APIs
app.use('/api',productRoutes);
app.use('/api',userRoutes);

// app.get('/welcome', (req, res)=> { // arrow/callback function
//     res.send('Welcome Ayesha')
// });

app.listen(port, () => {
    console.log('server is listening on port ' + port);
});