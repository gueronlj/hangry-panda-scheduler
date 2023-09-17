const express = require('express');
const app = express();
const cors = require('cors')

const PORT = process.env.PORT || 3000;

app.get('/', (request, response) => {
   response.send('Hello, this is a Bun 1.0 server')
})

app.listen( PORT, () => {
   console.log(`DnDScheduler server running on port ${PORT}`);
})
