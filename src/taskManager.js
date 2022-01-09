class Project {
    constructor(title) {
        this.title = title
    }

    static initialise({title}) {
        return new Project(title)
    } 
    
    
    checkLocalStorage() {
        if (localStorage.getItem(this.title)) {
            return JSON.parse(localStorage.getItem(this.title))
        } else {
            return []
        }
    }

    taskArray = this.checkLocalStorage()

    generateID() {
        if (this.taskArray.length === 0) {
            return 1
        } else if (this.taskArray.length === 1) {
            return 2
        } else {
            let highestID = this.taskArray.reduce((p, c) => 
                p.id > c.id ? p : c)
            return (highestID.id +1)
        }
    }

    addTaskToArray(title, dueDate, description, completed) {
        let id = this.generateID() 
        let task = {
            title: title, 
            dueDate: dueDate, 
            description:description, 
            id:id, 
            completed:completed
            }
        this.taskArray.push(task)
        this.saveToLocalStorage()
    }

    get showTasks() {
        return this.taskArray
    }

    saveToLocalStorage() {
        localStorage.setItem(this.name, JSON.stringify(this.taskArray))
    }

    deleteTask(id) {
        for (let i= 0; i < this.taskArray.length; i++) {
            if (this.taskArray[i].id == id) {
                this.taskArray.splice(i,1)
            }
        }
    }
}




export {Project};