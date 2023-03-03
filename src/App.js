import { useState } from "react";
import CountryList from "./CountryList";
import SearchForm from "./SearchForm";

function App() {
  const [search, setSearch] = useState("");
  
  const handleChange = event => {
    setSearch(event.target.value);
  }

   return (
    <div className="App">
      <h1>React Dersleri</h1>
      <SearchForm search={search} onSearchChange={handleChange} />
      <CountryList search={search}/>
     
       
    </div>
  );
}

export default App;
