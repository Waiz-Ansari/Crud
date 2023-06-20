// const taskModel = require("../models/taskModel")
const TaskModel = require("../models/taskModel")

module.exports.getTasks = async (req, res)=>{
    const task = await TaskModel.find()
    res.send(task)
    //  res.send("hi ok task")
}



module.exports.saveTasks = async (req, res)=>{
    const {task} = req.body
   await TaskModel.create({task})
    .then((data)=>{
        console.log("save successfull")
        res.status(201).send(data)
    })
    .catch((error)=>{
        console.log(error)
        res.send({error: error,   msg:"somthing went wrong! in save"})
    })
}
// module.exports.saveTasks = async (req, res) => { 
//     const { task } = req.body;
  
//     if (!task || task.trim() === '') {
//       console.log("Task : "+task)
//       return res.status(400).send({ error: "Task is required" });
//     }
  
//     TaskModel.create({ task }) // Assuming the field in the schema is named 'task'
//       .then((data) => {
//         console.log("Save successful");
//         res.status(201).send(data);
//       })
//       .catch((error) => {
//         console.log(error);
//         res.status(400).send({ error: error, msg: "Something went wrong in save" });
//       });
//   };
  
  


module.exports.updateTasks = async (req, res)=>{
    const {id} = req.params
    console.log(id)
    const {task} = req.body
    await TaskModel.findByIdAndUpdate(id, {task})
    .then(()=>res.send("updated succcess fully"))

    // taskModel.creat({Task})
    // .then((data)=>{
    //     console.log("save sucessfull")
    //     res.status(201).send(data)
    // })
    .catch((error)=>{
        console.log(error)
        res.send({error: error,   msg:"somthing went wrong! in update"})
    })
}


module.exports.deleteTasks =  (req, res)=>{
    const {id} = req.params
    // const {task} = req.body
   TaskModel.findByIdAndDelete(id)//, {task}
    .then(()=>res.send("delete succcess fully"))

    // taskModel.creat({Task})
    // .then((data)=>{
    //     console.log("save sucessfull")
    //     res.status(201).send(data)
    // })
    .catch((error)=>{
        console.log(error)
        res.send({error: error,   msg:"somthing went wrong! in delete"})
    })
}