const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
   allDay: Boolean,
   text: String,
   ownerId: Array,
   startDate: String,
   endDate: String,
   details: String,
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

module.exports = Appointment;