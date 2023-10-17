import './Header.css'
import teste from "../../assets/LogoP.png"
import { Link } from 'react-router-dom'
export default function Header(){
  return(
     <header>
       
  <nav className="navbar">

  <Link to="/"><img src={teste} alt="logo" /></Link>  


   <ul className="botoes">
     
   <li><Link to="/">Inicio</Link></li>
   <li><Link to="/contato">Contato</Link></li>
   <li><Link to="/sobre">Sobre</Link></li>
            
  </ul>
  
 <div className='button_Contato'>

          <Link to="/contato"><button>Contato</button></Link>

      </div>

      </nav>
     

    </header>
  )
};
