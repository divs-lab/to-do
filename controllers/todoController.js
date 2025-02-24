const Todo = require('../models/Todo');

const getTodos = async(req, res)=>{
    try{
        const todos = await Todo.find();
        res.status(200).json(todos);
    }catch(error){
        res.status(500).json({message: 'Server Error', error: error.message});
    }
};

const addTodo = async (req,res) => {
    const{title, description} = req.body;
    try{
        const newTodo = new Todo ({title, description});
        await newTodo.save();
        res.status(201).json(newTodo);
    } catch (error) {
        res.status(400).json({message: 'Invalid data', error: error.message});
    }
};

module.exports = {getTodos, addTodo};