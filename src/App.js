import { useState } from 'react';
import './App.css';
import DropdownBrazilianStates from './components/Forms/DropdownBrazilianStates';
import DropdownBrazilianCities from './components/Forms/DropdownBrazilianCities';


function App() {

  const [formValues, setFormValues] = useState({})
  
  const handleInputChange = (e) =>{
    e.preventDefault();
    const{value, name} = e.target;
    setFormValues({...formValues, [name]:value})
  }
  console.log(formValues)
  console.log(formValues)
  
 

  return (
    <div className="container">
      <form>
        <label htmlFor="state">Estado:</label>
        <DropdownBrazilianStates onChange={handleInputChange}/>
      
      <label htmlFor="city">Cidade::</label>
       <DropdownBrazilianCities state={formValues.state}/>
        
      </form>
        <button>Pesquisar!</button>
      
    </div>
  );
}

export default App;
