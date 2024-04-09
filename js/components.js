const TodoItem={
props:['todo'],
template:`<li>{{ todo.text }}</li>`
}
const TodoList={
    data(){
        return{
            groceryList:[
                {text:'овощи'},
                {text:'фрукты'},
                {text:'чай'}
            ]
        }
    },
    components:{
        TodoItem
    }
}
const app= Vue.createApp(TodoList)
app.mount('#todo-list-app')



