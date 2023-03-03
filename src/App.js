import { useState } from "react";

function App() {
 const [form, setForm] = useState({name:"", city:"", bio:""});


  // const [name, setName] = useState("");
  // const [city, setCity] = useState("");
  // const [bio, setBio] = useState("");

  const handleChange = event => {
    setForm ({...form, [event.target.name] : event.target.value});
  }
  
  console.log("Form", form)


   return (
    <div className="App">
      <h1>React Dersleri</h1>
      <form>
      <input  value={form.name} onChange={handleChange}
       name="name"
       placeholder="your name"
       />
      <select value={form.city} name="city" onChange={handleChange}>
        <option value="" disabled value hidden>
          Chose a city
        </option>
        <option value="ankara"> Ankara</option>
        <option value="istanbul">İstanbul</option>
        <option value="izmir">İzmir</option>

      </select>
      <textarea value={form.bio} onChange={handleChange} rows="10" placeholder="biyografiniz" name="bio"/>
      <button >Gönder</button>

      </form>

       
    </div>
  );
}

export default App;
