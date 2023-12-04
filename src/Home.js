import React from "react";


export function Home({user, setUser}){
    const handleLogout = () => {
        setUser([])
    }
    return (
        <div>
            <h1>Bienvido</h1>
            

        </div>
    )
}
export default Home
