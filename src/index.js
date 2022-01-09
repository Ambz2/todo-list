import './style.css';
import * as taskManager from './taskManager.js'


let generalTasks = new taskManager.Project('generalTasks')


console.log(generalTasks)

generalTasks.deleteTask(4)



