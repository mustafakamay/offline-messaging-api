const express = require('express');
const helmet = require('helmet');
const config = require('./config');
const {UserRoutes,MessageRoutes} = require('./routes');
const sequelize = require('./database/connection')

config();

const app = express();

app.use(express.json());
app.use(helmet());


sequelize.sync({force:true}).then(()=>{
    console.log("Database connection succesfully")
}).catch(err => console.log("ERROOORRRR",err))

app.listen(process.env.PORT,()=> {
    console.log("Server is running");
    app.use('/user',UserRoutes.router);
    app.use('/message',MessageRoutes.router);
})