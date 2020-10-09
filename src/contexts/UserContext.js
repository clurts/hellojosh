import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserContextProvider = (props) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/data/learninghours.json")
            .then((response) => response.json())
            .then((result) => {
                setUser(result.user);
            });
    }, []);
    return (
        <UserContext.Provider value={{ user }}>
            {props.children}
        </UserContext.Provider>
    );
};

export default UserContextProvider;
