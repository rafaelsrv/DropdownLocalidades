import { useState } from 'react';
import './App.css';
import DropdownBrazilianStates from './components/Forms/DropdownBrazilianStates';
import DropdownBrazilianCities from './components/Forms/DropdownBrazilianCities';

function App() {


  
  return (
    <div className="container">
      <form>
        <label htmlFor="state">Estado:</label>
        <DropdownBrazilianStates/>
      
      <label htmlFor="city">Cidade:</label>
       <DropdownBrazilianCities/>
        
      </form>
        
      
    </div>
  );
}

export default App;
