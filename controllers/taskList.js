const TaskList = require("../models/taskListSchema");
const Task = require("../models/taskSchema")


const taskList = async(req, res, ) => {
    const search = req.body.search;
    if(!search){
        try{
     const tasks = await Task.find({});
     res.send({ tasks })
    }catch(err){
        res.status(400).json({msg:"Error occured"})
    }
}else{
    const list = await Task.find({ taskName: search })
    if(!list){
        res.status(404).json({msg:"no list with the name"})
    }else{
        res.status(200).json({ list })
    }
}
}

module.exports= taskList