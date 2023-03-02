import { useState } from "react";
import User from "./User";

const data = [
  {name: "Ahmet"},
  {name:"Mehmet"},
  {name: "Veli" },
  {name: "Ali"},


]


function App() {
  const [users, setUsers] = useState(data);

  return (
    <div className="App">
      <h1>React Dersleri</h1>
      <input 
       name="arama"
       placeholder="arama"
       />

       {users.map((user, index)  => {
        
        return(
         <User user={user} key={index}/>
        )
       } )}

    </div>
  );
}

export default App;
