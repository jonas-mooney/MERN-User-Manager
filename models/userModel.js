const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserDataSchema = new Schema({
  id: String,
  first_name: String,
  last_name: String,
  email_address: String,
  age: Number
})

//model
const Youser = mongoose.model('Youser', UserDataSchema);

module.exports = Youser;