<template>
    <div class="container">
        <h3>Task List</h3>
        <ul v-for="task in todos" :key="task.id">
            <li>
                <Task v-bind='task'></Task>
                <button class='btn btn-danger' @click='deleteTask(task.id)'>Delete</button>
            </li>
        </ul>
        <button class='btn btn-primary' @click='addTask'>Add Task</button>
    </div>
</template>

<script>
import Task from './Task'
import { mapActions, mapState } from 'vuex'
import { GET_TODOS, SAVE_TODO } from '../action-types'

export default {
    components: {
        Task
    },
    computed: {
        ...mapState(['todos'])
    },
    methods: {
        ...mapActions({
            getTodos: GET_TODOS,
            Todo: ADD_TODO
        }),
        addTask(){
            let name = 'New Task'
            let category_id = 1
            let user_id = 1
            let order = 0

            this.addTodo({ name, category_id, user_id, order }).then(response => {
                console.log("addTodo response:", response)
            })
            /*
            this.$http.post('/api/task/', { name, category_id, user_id, order }).then(response => {
                //this.loadTasks()
                console.log("addTask POST:", response)
            })
            */
        },
        deleteTask(id){
            this.$http.delete(`/api/task/${id}`).then(response => {
                console.log(`Task ${id}: deleteTask called`)
            })
        },
        loadTasks(){
            this.$http.get('/api/task/').then(response => {
                this.tasks = response.data
            })
        }

    },
    mounted() {
        Echo.channel('tasks')
            .listen('TasksUpdated', e => {
                console.log("Echo listen on TasksUpdated triggered.")
                this.tasks = e.tasks
            })

        Echo.channel('task.added')
            .listen('TaskAdded', e => {
                console.log("Echo listen on TaskAdded triggered.", e)
            })


        //this.loadTasks()
        this.getTodos()
    }
}
</script>
