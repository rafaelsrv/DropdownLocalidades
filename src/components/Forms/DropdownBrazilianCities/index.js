import { useEffect, useState } from "react"
import { fetchCitiesForState } from "../../../helpers/ibge"



const DropdownBrazilianCities = ({state})=>{
    let [search, setSearch] = useState("");
    const [cities, setCities] = useState([]);
    
    

    useEffect(()=>{
        fetchCitiesForState(state).then((cities)=>{
            setCities(cities)
            
        })

    },[state])
    
    
    return (
      <div>
        {search}
        <select onChange={e=>setSearch(e.target.value)} id="city">
          <option value="">Selecione uma cidade...</option>
          {cities.map((city)=>{
            const{id, nome} = city;
            
            return <option  value={nome} key={id}>{nome}</option>
          })
          }
        </select>
        </div>
        
    )
    
}
export default DropdownBrazilianCities