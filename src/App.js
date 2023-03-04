import { useState } from "react";



function App() {

  const [counter, setCounter] = useState(0);

  

   return (
    <div className="App">

      <h2>Functional Component</h2>

      <p>{counter}</p>
      
      
       
    </div>
  );
}

export default App;
