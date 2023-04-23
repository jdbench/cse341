const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const homeRoutes = require('./routes');

app.use('/', homeRoutes);

app.listen(port, () => {
    console.log('Server is runing on port ' + port);
});