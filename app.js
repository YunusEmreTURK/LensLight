import express from "express"
import dotenv from "dotenv"
import conn from './db.js'
import mongoose from "mongoose"
import pageRoute from "./routes/pageRoute.js" // * as kullanmadım çünkü tek ögeyi default olarak export ettik


dotenv.config();

//connection to the db
mongoose.set('strictQuery',false);
conn();

const app = express()
const port = process.env.PORT

// html dosyalarının içine js yazabilmek için template engine ler ile "ejs tercih ettih" yapıcaz
//ejs template  engine
app.set("view engine", "ejs")

//static files middleware
app.use(express.static('public'))

// routes
app.use('/', pageRoute)


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`Application listen on port: ${port}`);
});

