

// useEffect(() =>{
// setTimeout((count) => count+1);
// },1000)


import { useState,useContext, createContext } from "react";

const [user, setUser] = useState();

const context = createContext();

const Comp1 = () =>{

    return(
        <context.Provider value={user}>
            <Comp2/>
        </context.Provider>
    )
}

const Comp2 = () =>{

    return(
        <Comp3/>
    )
}

const Comp3 = () =>{
    const user = useContext(context);
    return(
        <>
        <h1> data={user}</h1>
        <h2></h2>
        </>
    )
}


import { useEffect } from "react";

useEffect(() =>{
 setTimeout(() =>{
    setTime((count) =>{
        count+1;
     })
 },1000)
},[])







