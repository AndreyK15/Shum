const Counter={
    data(){
        return{
            counter: 0
                         }
    },
    mounted(){
        setInterval(()=>{this.counter++},1000)
    }
}
Vue.createApp(Counter).mount('#counter')
const AttributeBinding={
    data(){
        return{
            message:'Страница загружена' + new Date().toLocaleString()
                            }
    }
}
Vue.createApp(AttributeBinding).mount('#bind-attribute')
const EventHandling={
    data(){
        return{
            message:'Привет Vue.js !'
        }
    },
    methods:{
        reverseMessage(){
            this.message=this.message
            .split('')
            .reverse()
            .join('')
        }
    }
}
Vue.createApp(EventHandling).mount('#event-handling')
const TwoWayBinding={
    data(){
        return{
            message:"Привет Vue.js !"
        }
    }
}
Vue.createApp(TwoWayBinding).mount('#two-way-binding')
const ConditionalRendering={
data(){
    return{
        seen:true
    }
}
}
Vue.createApp(ConditionalRendering).mount('#conditional-rendering')
const ListRendering={
    data(){
        return{
            todos:[
                {text:'Я учу Java Script!',level:'3'},
{text:'Я учу Vue!',level:'5'},
{text:'Я учу Frontend!',level:'6'},
{text:'Я учу Java Script!',level:'7'},
                {text:'Я учу Java Script!',level:'9'}
            ]
        }
    }
}
Vue.createApp(ListRendering).mount('#list-rendering')



