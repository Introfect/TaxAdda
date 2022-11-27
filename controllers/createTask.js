const Task = require("../models/taskSchema");
const TaskList = require("../models/taskListSchema");
const months = require("../months")
const createTask = async(req, res, next) => {
   const ListID = req.body.taskListId
        try {
            const taskList = await TaskList.findOne({ _id : ListID  },);
            if (!taskList){
                res.status(404).json("Task List with the given id does not exists");
            }
            else {
                const taskName = req.body.name;
                const description = req.body.description;
                const Date= req.body.dueDate;
                const period= req.body.period;
                const periodType =req.body.periodType; 
                

                if (periodType=="monthly")
                {
                    for(i=0;i<10;i++){
                        if (months[i]==period){
                            var due= `1 ${months[i+1]}`
                        }
                    }
                        if(period=="Dec"){
                            var due="1 Jan"
                        }
                    
                }
                if (periodType=="quaterly")
                {
                    for(i=0;i<8;i++){
                        if (months[i]==period){
                            var due= `1 ${months[i+3]}`
                        }
                    }
                    if(period=="Ocf"){
                        var due="1 Jan"
                    }
                        if(period=="Nov"){
                            var due="1 Feb"
                        }
                        if(period=="Dec"){
                            var due="1 Mar"
                        }
                }
                if (periodType=="yearly")
                {
                    const myArray = period.split(" ");
                    let year = myArray[1];
                    year=parseInt(year)+1;
                    var due= `${myArray[0]} ${year}`
                }

                const currentTask = await Task.create({
                    taskName: taskName,
                    description: description,
                    Date:Date,
                    period:period,
                    periodType:periodType,
                    dueDate:due,
                    taskListId: ListID,
                    listName: taskList.name
                });
                res.status(200).json({ currentTask });
            }
        } catch (err) {
            return next(err);
        }
    
};

module.exports = createTask;