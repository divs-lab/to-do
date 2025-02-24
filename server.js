const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./database/db')
const todoRoutes = require('./routes/todoRoutes');

dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use('/api/todos', todoRoutes)

app.get('/', (req,res)=>{
    res.send('API is running');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=> console.log(`Server is running on port ${PORT}`));

