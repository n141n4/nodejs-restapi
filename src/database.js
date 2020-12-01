const mongoose = require('mongoose');

function connect() {
    mongoose.connect("mongodb://localhost/flutter-node-api", {
      useNewUrlParser: true,
    });
    console.log('Database connected');
}

module.exports = { connect };