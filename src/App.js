import { useState } from "react";

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
        const{name} = user;
        return(
          <p key={index}>{name}</p>
        )
       } )}

    </div>
  );
}

export default App;
