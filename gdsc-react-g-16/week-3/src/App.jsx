import React from "react";
import UserCard from "./UserCard";
import State from "./State";
function App(){
  return(
    <div>
      {/*This from Usercard file to print card which contain name, email and age by using props*/}
      <h1>props in React</h1>
      <UserCard name = {"Abdurazak"} email={"abdurazakm343@gmail.com"} age={21}/>


      {/* This from State function to print couter by using state function */}
      <State/>
    </div>
  )
}
export default App;