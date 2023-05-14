const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection; 
// provides information about our connection to our database
// included in the form of an object

db.on('connected', () => {
    // the connection.on method allows us to register event listeners
    // for various mongoose related events
    console.log(`Connected to MongoDB using ${db.name} at ${db.host}:${db.port}`);
});