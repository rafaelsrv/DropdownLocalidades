import { useEffect, useState } from "react"
import { fetchCitiesForState } from "../../../helpers/ibge"

const DropdownBrazilianCities = ({state})=>{

    const [cities, setCities] = useState([]);
    useEffect(()=>{
        fetchCitiesForState(state).then((cities)=>{
            setCities(cities)
            
        })

    },[state])
    
    return (
        <select id="city">
          <option value="">Selecione uma cidade...</option>
          {cities.map((city)=>{
            const{id, nome} = city;
            return <option value={id} key={id}>{nome}</option>
          })
          }
        </select>
    )
}
export default DropdownBrazilianCities