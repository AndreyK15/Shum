const Shum1={
    data(){
        return {
            minimum:0,
            maximum:0,
            equvalent:0,
            min: [1,2,3,4,5,6,7,8,9],
            max:[21,22,23,24,25,26,27,28,29],
            eq: [31,32,33,34,35,36,37,38,39]              
        }
    },
    computed: {
    raschetMinimuma(){
     this.minimum=0
       this.minimum=Math.min(...this.min )   
         return this.minimum
     },
    raschetMaximuma(){
     this.maximum=0
       this.maximum=Math.max(...this.min )   
         return this.maximum
     },
     raschetEquvalent(){
    this.equvalent=0
    eqv=0
    for (let i = 0; i < this.eq.length  ;i++) {
        eqv=eqv+this.eq[i]  
    }
    return eqv/this.eq.length
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