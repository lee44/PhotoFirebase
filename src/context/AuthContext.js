import React from 'react'

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(authContext)
}

export function AuthContext() {

    return (
        <AuthContext.Provider value={} >

        </AuthContext.Provider>
        
    )
}
