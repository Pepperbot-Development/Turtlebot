const mongoose = require('mongoose');

const brSchema = new mongoose.Schema({
    mid: String,
    role1: String,
    role2: String,
    role3: String,
    role4: String,
    role5: String,
    button1: String,
    button2: String,
    button3: String,
    button4: String,
    button5: String,
    guild: String,
    id: String
});

const brModel = module.exports = mongoose.model('buttonroles', brSchema);