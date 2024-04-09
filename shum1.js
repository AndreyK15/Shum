const Shum1={
    data(){
        return {
            minimum:0,
            min: [1,2,3,4,5,6,7,8,9],
            max:[21,22,23,24,25,26,27,28,29],
            eq: [31,32,33,34,35,36,37,38,39]
                  
        }
    },
    computed: {
    raschetMinimuma(){
     this.minimum=0
     for (let index = 0; index < array.length; index++) {
        const element = array[index];
        
     }
    }
     },
    methods:{
    printValues(){
        console.log(this.min)
        console.log(this.max)
        console.log(this.eq)
    }
              }
    }
    
    const shum1=Vue.createApp(Shum1)
    shum1.mount('#input_shum')
