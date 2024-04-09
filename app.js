///import getValue from "./modules/get_values.js"

//import { getValue } from "./modules/helpers_array"

///import mapArray from "./modules/map.js "   
///import {getValue,mapArray} from './modules/helpers_array.js'
import {getValue,mapArray,p} from './modules/helpers_array2.js'
const superHero=[
    {id: 12345, hero: 'batman' , power:'money'},
    {id: 54321, hero: 'aquaman', power:'fishp'}
]
// получить значения из масива

console.log(superHero)


console.log(getValue(superHero,'hero'))
console.log(mapArray(superHero,'id'))
console.log(p)
