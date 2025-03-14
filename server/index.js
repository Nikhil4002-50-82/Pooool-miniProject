import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";

const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

app.listen(port,()=>{
    console.log(`Server running on port ${port}.`);
});