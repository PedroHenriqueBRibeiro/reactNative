import api from "./api";


// const dados = {
//   id: id,
//   name: "tarefa 1",
//   description: "descrição da tarefa 1",
//   priority: "alta"
// }


export const storeTask = async (taskData) => {
  try {
      const response = await api.post('/tasks', taskData)
     console.log(response.data.name)
    } catch (err){
      throw "Não foi possível salvar sua tarefa"
    }
  }


export const getAllTasks = async () => {
  try{
    const response = await api.get('/tasks.json')
    console.log(response.data)

    const tasks = []

    for (key in response.data) {
      console.log(response.data[key])
      const task = {
        ...response.data[key],
        id: key,
      }
      task.push(task)
    }
  console.log(task)


  } catch(err) {
    console.log(err)
  }
}






const getTaskbyId = () => {}
const updateTasks = () => {}
const deleteTask = () => {}