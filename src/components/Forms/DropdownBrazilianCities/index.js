import { useEffect, useState } from "react"
import { fetchCitiesForState } from "../../../helpers/ibge"
import SearchButton from "../../SearchButton";



const DropdownBrazilianCities = ({state})=>{
    let [search, setSearch] = useState("");
    const [cities, setCities] = useState([]);
    
    
    function procurar(e){
      e.preventDefault()
      setSearch(e.target.value)
    }

    useEffect(()=>{
        fetchCitiesForState(state).then((cities)=>{
            setCities(cities)
            
        })

    },[state])
    
    
    return (
      <div>
      
        <select onChange={procurar} id="city">
          <option value="">Selecione uma cidade...</option>
          {cities.map((city)=>{
            const{id, nome} = city;
            
            return <option  value={nome} key={id}>{nome}</option>
          })
          }
        </select>
         {search == false ? <div></div>  :<SearchButton City={search}/>}
        </div>
        
    )
    
}
export default DropdownBrazilianCities