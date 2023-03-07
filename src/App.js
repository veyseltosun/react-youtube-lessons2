import { useState , useEffect} from "react";
import ClassComp from "./ClassComp";



function App() {

  const [counter, setCounter] = useState(0);
  const [show, setShow] = useState(true);


  const increase = () => {
    setCounter(counter + 1)
  }

  useEffect(() => {
    console.log("useEffect is run")
  },[counter])

  

   return (
    <>
    <div className="App">

    <button onClick={() => setShow(!show)}>Toggle</button>
      <h2>Functional Component</h2>

      <p>{counter}</p>
      <button onClick={increase}>Increase</button>
      
      
       
    </div>
    {
      show ?  <ClassComp/> : <div/>
      
    }
    </>
  );
}

export default App;
