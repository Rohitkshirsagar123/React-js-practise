import React from 'react'; // Make sure to import React

import UserContext from "./UserContext";

const UseContextProvider = ({children})=>{
    const [user,setUser] = React.useState(null);
    return(
        <UserContext.Provider value={{user,setUser}} >
            {children}
        </UserContext.Provider>
    )
}

export default UseContextProvider;
