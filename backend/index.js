const express = require('express');
const app=express();
const database=require("./config/database");
// var cors = require('cors')
const cors = require('cors');


const allowedOrigins = ['http://localhost:3000', 'http://192.168.1.2:3000'];
require("dotenv").config();
const PORT = process.env.PORT || 8000

app.use(express.json());
app.use(cors({
    origin: function (origin, callback) {
        // Check if the origin is in the allowedOrigins array
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
}));

// app.use(cors);
// app.use(cors( {
//     origin: " http://192.168.1.2:3000"
// }))

database.connect();

const user=require("./routes/user");
app.use("/api/v1",user);

// Activate
app.listen(PORT,() => {
    console.log("Server Run at ",PORT);
})

app.post("/", (req,res) => {
    res.send(`<h1> My Notes </h1>`)
})
