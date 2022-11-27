const mongoose = require("mongoose");

const taskListSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Username Missing"],
    },
    description: {
        type: String,
    },
    active: {
        type: Boolean,
    },
    subTask:{
        type:[mongoose.Types.ObjectId]
    }  
});

taskListSchema.pre('save', async function () {
    db.taskListSchema.aggregate({$project:
        {date:{$concat:[
            {$substr:[{$year:"$CreatedDate"},0,4]},
            "/",
            {$substr:[{$month:"$CreatedDate"},0,4]},
            "/",
            {$substr:[{$dayOfMonth:"$CreatedDate"},0,4]}
        ]}}})
})



const TaskList = mongoose.model("Lists", taskListSchema);

module.exports = TaskList;