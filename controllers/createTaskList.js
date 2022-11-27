const TaskList = require("../models/taskListSchema");


const createTask = async(req, res, next) => {
   const listName= req.body.name;
        try {
            const list = await TaskList.findOne({ name: listName });
            if (!list)
                res.status(404).json("Task List with the same name already exists");
            else {
                const name = req.body.name;
                const description = req.body.description;
                const active = req.body.active;

                if (!listName)
                    res.status(404).json({ message: "List Title missing." });

                const currentTask = await TaskList.create({
                    name:name,
                    description: description,
                    active:active
                });
                res.status(200).json({ currentTask });
            }
        } catch (err) {
            return next(err);
        }
    
    
};

module.exports = createTask;