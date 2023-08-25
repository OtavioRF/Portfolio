import './Header.css'
import teste from "../../assets/LogoP.png"
export default function Header(){
  return(
     <header>
       
  <nav className="navbar">
  <img src={teste} alt="logo" />
   <ul className="botoes">
     
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Projetos</a></li>
      <li><a href="#">Sobre</a></li>
      <li><a href="#">Contato</a></li>
            
  </ul>
      </nav>
    </header>
  )
};
