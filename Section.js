import React, {useState} from 'react'
import { info } from './NewData'
import './App.css'
import New from './New'


const Section = () => {
let [details, setDetails] = useState(info)

function remove (id){
    let New = details.filter((detail)=>detail.id !== id)
    setDetails(New)
}

function clear (){
    setDetails([])

}

  return (
    <div>
            <New det= {details} head={remove} Name= 'Blard' handle={clear}/>
        
    </div>
  )
}

export default Section