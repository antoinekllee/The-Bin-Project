require('dotenv').config() // stores all key value pairs in dotenv in process.env

const express = require ('express'); 
const mongoose = require ('mongoose'); 
const session = require('express-session');
const mongoStore = require("connect-mongo"); 

// const routes = require ("./routes"); 

const { PORT=3000, MONGO_URI, SESSION_SECRET } = process.env; // provide default value in case if not available in .env file

const app = express (); 

app.use (express.json()); 
app.use (express.urlencoded({ extended: true })); // replace certain invalid characters for the url // %20 -> space

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: mongoStore.create({
        mongoUrl: MONGO_URI,
    })
}));

// Async app.delete router method which deletes all documents in the wastage collection
app.delete('/yeet', async (req, res) => 
{
    const wastageModel = mongoose.model('wastage', {}, 'wastage');

    // Print how many documents are in the wastage collection
    const count = await wastageModel.countDocuments({});
    console.log(count);

    // Print the first document in the wastage collection
    const first = await wastageModel.findOne({});
    console.log(first);

    try {
        const wastage = await wastageModel.deleteMany({});
        res.status(200).json(wastage);
    } catch (error) {
        res.status(500).json(error);
    }
});

mongoose.set('strictQuery', false);
mongoose.connect (MONGO_URI); 

app.listen (PORT, () => // fire up express server
{
    console.log ("LISTENING ON PORT " + PORT); 
})