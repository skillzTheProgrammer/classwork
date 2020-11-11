import {createContext} from 'react'

const data = {
    firstName: "Alicho",
    lastName: "Emeka",
    username: "Alicho1219",
    password: "bootycall",
    numOfClasses: 34,
    numOfProjects: 12,
    numOfCourses: 49
}

export const UserContext = createContext()

function Student({children}){
    return(
        <UserContext.Provider value={data}>
            {children}
        </UserContext.Provider>
    )
}

export default Student