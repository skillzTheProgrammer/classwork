import {createContext, useState} from 'react'

const data = {
    isAuthenticated: false,
    isAnonymous: false
}

export const AuthContext = createContext()

function Auth({children}){

    const [authObj,setAuthObj] = useState(data)

    return(
        <AuthContext.Provider value={[authObj,setAuthObj]}>
            {children}
        </AuthContext.Provider>
    )
}

export default Auth