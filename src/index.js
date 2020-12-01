/**
 * Initialisation de express
 */
const express = require("express");
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const { connect } = require('./database')

app.use(morgan('dev'));
app.use(cors());

app.use(require('./routes/users'));

const port = 4000;
async function main() {
    /**
     * DATABASE CONNECTION
     */
    await connect();
    
    await app.listen(port, () => console.log(`Serveur lancé sur le port ${port}.`)); 

}
main()