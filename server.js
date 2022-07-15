const express = require('express');
const cors = require('cors');
const cookiesSession = require('cookie-session');

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({extended:true}));

app.use(
    cookiesSession({
        name:"bezkoder-session",
        secret:"COOKIE_SECRET",
        httpOnly:true
    })
);

/*
const db = require("./models");
const Role = db.role;
db.sequelize.sync({force:true}).then(() =>{
    console.log("drop and resync db");
    initial();
});
*/


app.get("/",(req,res) =>{
    res.json({
        message:"bezkoder application "
    });
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>{
    console.log(`server is running on port${PORT}`)
})

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
require('./routes/calendar.routers')(app);


/*
function initial(){
    Role.create({
        id:1,
        name:"user"
    });
    Role.create({
        id:2,
        name:"organizer"
    });
    Role.create({
        id:3,
        name:"admin"
    });
}
*/

