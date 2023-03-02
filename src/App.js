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
      <form>
      <input 
       name="name"
       placeholder="your name"
       />
      <select name="city">
        <option value="" disabled selected hidden>
          Chose a city
        </option>
        <option value="ankara"> Ankara</option>
        <option value="istanbul">İstanbul</option>
        <option value="izmir">İzmir</option>

      </select>
      <textarea rows="10" placeholder="biyografiniz" name="bio"/>
      <button >Gönder</button>

      </form>

       
    </div>
  );
}

export default App;
