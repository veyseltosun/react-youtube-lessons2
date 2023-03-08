import { useState, useEffect } from "react";
import UserList from "./UserList";
import { UserContext } from "./context/UserContext";

const data = [
  { id: 1, name: "Ahmet", email: "ahmet@mail.com", age: 25, color: "lightcyan" },
  { id: 2, name: "Mehmet", email: "mehmet@mail.com", age: 30, color: "honeydew" },
  { id: 3, name: "Ali", email: "ali@mail.com", age: 35, color: "mistyrose" },
]





function App() {

  const [users, setUsers] = useState(data);

  const changeColor = (id, color) => {
    setUsers(
      users.map(user => (user.id === id ? { ...user, color: color } : user))
    );
  }









  return (

  <UserContext.Provider value={{changeColor, users}}>

    <div className="App">

      <h1>Welcome!</h1>
      <UserList />


    </div>
  </UserContext.Provider>




  );
}

export default App;
