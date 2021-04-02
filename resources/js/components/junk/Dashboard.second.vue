<template>
    <div class="container">
        <TaskList></TaskList>
    </div>
</template>

<style scoped>
</style>

<script>
    import TaskList from './TaskList'

    export default {
        components: {
            TaskList
        },
        data(){
            return {
                categories : [],
                editingTask : null
            }
        },
        methods : {
            addNew(id) {
                let user_id = 1
                let name = "New task"
                let category_id = this.categories[id].id
                let order = this.categories[id].tasks.length

                this.$http.post('api/task', {user_id, name, order, category_id}).then(response => {
                    this.categories[id].tasks.push(response.data.data)
                })
            },
            loadTasks() {
                this.categories.map(category => {
                    this.$http.get(`api/category/${category.id}/tasks`).then(response => {
                        category.tasks = response.data
                    })
                })
            },
            changeOrder(data){
                let toTask = data.to
                let fromTask = data.from
                let task_id = data.item.id
                let category_id = fromTask.id == toTask.id ? null : toTask.id
                let order = data.newIndex == data.oldIndex ? false : data.newIndex

                if (order !== false){
                    this.$http.patch(`api/tasks/${task_id}`, {order, category_id}).then(response => {
                        // DO anything you want here
                    })
                }
            },
            endEditing(task) {
                this.editingTask = null

                this.$http.patch(`api/task/${task.id}`, {name: task.name}).then(response => {
                    // You can do anything you want here
                })
            },
            editTask(task){
                this.editingTask = task
            }
        },
        mounted() {
            this.$http.get('api/category').then(response => {
                response.data.forEach((data) => {
                    this.categories.push({
                        id : data.id,
                        name : data.name,
                        tasks : []
                    })
                })
                this.loadTasks()
            })
        },
        computed: {
            dragOptions () {
                return  {
                animation: 1,
                group: 'description',
                ghostClass: 'ghost'
                };
            },
        },
        beforeRouteEnter (to, from, next) {
            if ( ! localStorage.getItem('jwt')) {
                return next('login')
            }

            next()
        }
}
</script>
