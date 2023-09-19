const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (request, response) => {
   response.send('Hello, this is a Bun 1.0 server')
})

app.get('/data', (req, res) => {
   res.json({
      data: "data here"
   })
})

app.listen( PORT, () => {
   console.log(`DnDScheduler server running on port ${PORT}`);
})

app.use((req, res) => {
   res.status(404).send('Error: 404 - No route found (Insert custom 404 page here)');
});


///======== Built in Bun.server()==========
// Bun.serve({
//    port: PORT, // defaults to $BUN_PORT, $PORT, $NODE_PORT otherwise 3000
//    fetch(req) {
//       const url = req.url
//       console.log(url);
//       if ( url === `http://localhost:3000/message`){
//          return Response.json({
//             message:"This is a Bun 1.0 server",
//          });
//       } else {
//          return new Response("404 - Endpoint not found on this server!")
//       }
//     }
// })