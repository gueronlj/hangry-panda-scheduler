const mongoose = require('mongoose')
const Schema = mongoose.Schema

const scheduleSchema = new Schema({
   appointments: Array
})

const Schedule = mongoose.model('Schedule', scheduleSchema)

module.exports = Schedule