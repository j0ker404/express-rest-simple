const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


// start server
app.listen(port, () => {
    console.log(`Listening at: http://localhost:${port}`);
});