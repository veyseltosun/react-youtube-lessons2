import { useState , useEffect} from "react";




function App() {

  const [counter, setCounter] = useState(0);
  


  const increase = () => {
    setCounter(counter + 1)
  }

  useEffect(() => {
    console.log("useEffect is run")
  },[counter])

  

   return (
    <>
    <div className="App">

       
    </div>
   
      

    </>
  );
}

export default App;
