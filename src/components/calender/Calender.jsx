import React,{useState} from 'react'
import { Outter } from './style'
import Calendar from 'react-calendar'
//import 'react-calendar/dist/Calendar.css';

export default function Calender(props) {
    const[value,onChange] = useState(new Date()
    
    )
    const[value1, changeValue] = useState('java'
        
        //   [ 'monday': 'java, Springboot',
        //   ' Tuesday': 'python',
        //     ' Wednesday': 'Javascript',
        //     ' Thursday': 'React',
        //     ' Friday': 'Springboot']
           
    )
    return (
        <Outter>
           
            
            <Calendar onChange={onChange} value={value}/>
              <button onClick={()=> changeValue(value1)} >Check today's course</button>
             <p>{value1}</p>
        </Outter>
        
           
           
           )
        
}
