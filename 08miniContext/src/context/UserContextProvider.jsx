import React from "react";
import UserContext from "./Usercontext";
import { useState } from "react";

export default function UserContextProvider({children}) {
    const [user, setUser] = useState(null);
    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}