 import  express  from 'express';
import dotenv from 'dotenv';
import Connection from './database/db.js';
import DefaultData from './default.js';
import cors from 'cors';
import Routes from './routes/routes.js';

const app=express();


app.use(express.json({extended:true})); 
app.use(express.urlencoded({extended:true}));

app.use(cors({
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
    methods:['GET','POST','PUT']
    
    
    
}));
dotenv.config();
const port=8000;
const username=process.env.DB_USERNAME; 
const password=process.env.DB_PASSWORD;



console.log(username);
Connection(username,password);
app.use('/',Routes);


// default data to database 
DefaultData();
app.listen(port,()=>console.log(`server is succesfully running on ${port}`))
