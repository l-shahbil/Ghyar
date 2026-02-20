
import express,{ Application } from "express"
import morgan from 'morgan';
import cors from 'cors'
import corsOption from './Config/corsOptions.js'


const app :Application = express();

app.use(morgan('dev'));
app.use(cors(corsOption));

app.use(express.json());
// app.use('/api',routes)
app.get('/api',(req,res)=>{
    res.send("Hello")
})


export default app;
