import { Link } from "react-router-dom"

import styles from './Navbar.module.css'




function Navbar(){
    return(
        <nav className={styles.navbar}>
   
       
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to='/'>Home</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/'>Projetos</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/'>Contato</Link>
                </li>
                <li className={styles.item}>    
                    <Link to='/'>Empresa</Link>
                </li>
                <li className={styles.item}>
                    <Link to='/'>Novo Projeto</Link>
                </li>
            </ul>
      
        
      </nav>
      )
}
export default Navbar