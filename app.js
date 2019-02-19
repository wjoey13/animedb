const express = require('express');
const app = express();

const port = process.env.PORT || 1389

const cors = require('cors');
const bodyParser = require('body-parser');

app.listen(port, () => {
    console.log(`want to know what port is active? It's port ${port}`);
});