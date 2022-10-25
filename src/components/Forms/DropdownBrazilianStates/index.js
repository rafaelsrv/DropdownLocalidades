import { useEffect, useState } from "react"
import { fetchStates } from "../../../helpers/ibge";


const DropdownBrazilianStates = ({onChange =() =>{}})=>{
    const [states, setStates] = useState([]);

    useEffect(()=>{
        fetchStates().then((states) =>{ setStates(states)
        })

        }, []);
    

    
    return (
        <select id="state" name ="state" onChange={onChange}>
          <option value="">Selecione um estado...</option>
          {states.map((state) =>{
            const{sigla, nome, id} = state;
            return(
                <option value={sigla} key={id}>{nome}</option>
                
            )
          })}
        </select>
    )
}
export default DropdownBrazilianStates