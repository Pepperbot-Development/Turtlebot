const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    GUILD: String,
    ENABLED: { type: Boolean, default: false },
    LEVELMESSAGE: { type: String, default: '{{ -d }}'},
    CHANNEL: String|Object
});

const Model = module.exports = mongoose.model('plugin_levels', Schema);