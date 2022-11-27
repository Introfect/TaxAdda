const mongoose = require("mongoose");


const taskSchema = new mongoose.Schema({
    taskName:{
        type:String,
        required:[true,"Please enter task name"]

    },
    description:{
        type:String
    },
    Date:{
        type:Date
    },
    dueDate:{
        type:String
    },
    period:{
        type:String,
        
    },
    periodType:{
        type:String,
        enum:["monthly","quaterly","yearly"],
        
    },
    taskListId:{
        type:mongoose.Types.ObjectId,
        required:true
    },
    listName:{
        type:String
    }


});
const Task = mongoose.model("Tasks", taskSchema);

module.exports = Task;