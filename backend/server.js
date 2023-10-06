import { log } from "console";

const express = require('express');
const app = express();
const mongoose = require('mongoose')
const db = mongoose.connection;
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;
const Appointment = require('./models/appointment.js')

app.use(express.json());

app.get('/', (request, response) => {
   response.send('Hello, this is a Bun 1.0 server')
})

//================= Find all appointments
app.get('/schedule', async (req, res) => {
   try{
      const appointments = await Appointment.find({})
      res.json(appointments)
      console.log(appointments);
   } catch (error) {
      res.send(error.message)
   }  
})

//================= Create new appointment
app.post('/schedule', (req, res) => {
   const newAppointment = new Appointment(req.body);
   newAppointment.save().then((document) => {
      res.json(document)
   }).catch((error) => {
      res.send(error.message)
   })
})

//================= update one by ID
app.put('/schedule/:id', (req, res) => {
   const newData = req.body;
   const oldData = Appointment.findById(req.params.id);
   oldData.updateOne(newData).then((document) => {
      res.json(document);
   }).catch((error) => {
      res.send(error.message)
   })
})

//================= Delete by ID
app.delete('/schedule/:id', (req, res) => {
   const targetDoc = Appointment.findById(req.params.id);
   targetDoc.deleteOne().then((document) => {
      res.json(document);
   }).catch((error) => {
      res.send(error.message)
   })
})

//================= Find by ID
app.get(`/appointment/:id`, (req, res) => {
   Appointment.findById(req.params.id).then((document) => {
      res.json(document);
   }).catch((error) => {
      res.send(error.message)
   })
})

mongoose.connect(MONGODB_URI)

db.on('error', (error) => console.log(error.message + ' is Mongod not running?'));

db.on('connected', () => console.log('connected to MongoDB'));

db.on('disconnected', () => console.log('disconnected from MongoDB'));

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