const express= require('express');
const router = express.Router();

const Task = require('../models/Task');




/// LISTADO DE TAREAS DE NUESTRO SERVER
router.get('/', async (req,res)=> {
     const tasks= await Task.find();
     res.json(tasks);
});

router.post('/', async (req,res)=>{
   const task = new Task(req.body);
   await task.save();
   res.json({
       status: 'Tarea Guardada'
   });
});

module.exports= router;