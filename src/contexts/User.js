import {createContext} from 'react'

const data = {
    firstName: "John",
    lastName: "Alicho",
    username: "jimAlicho1219",
    password: "bootyCall",
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