import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import questionRoutes from './routes/questions.js'
import helpRoutes from './routes/help.js'
import answerRoutes from './routes/answers.js'
import communityRoutes from './routes/community.js'
import userRoutes from'./routes/user.js'


const app = express();

app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));
app.use(cors());

app.use('/questions',questionRoutes);
app.use('/help',helpRoutes);
app.use('/answers',answerRoutes);
app.use('/communities',communityRoutes);
app.use('/user',userRoutes);

// app.use('/bknd/questions',questionRoutes);
// app.use('/bknd/help',helpRoutes);
// app.use('/bknd/answers',answerRoutes);
// app.use('/bknd/communities',communityRoutes);
// app.use('/bknd/user',userRoutes);


const connectionURL ='mongodb+srv://solvokit2:i6BNcAmEm2xicmim@cluster0.a63tg.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.port || 5000;

mongoose.connect(connectionURL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`)))
.catch((error)=>console.log(error.message));




