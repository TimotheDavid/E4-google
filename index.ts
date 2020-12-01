import routes from "./routes";
const express = require('express');

const app = express();

app.use('/',routes);

app.listen(3000, () => {
    console.log(`listen on http://localhost:3000`)
})
