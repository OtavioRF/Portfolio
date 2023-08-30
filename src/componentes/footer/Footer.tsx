import './Footer.css'


export default function Footer() {
  return (
    <footer>

      <div className="container_footer">
        <div className="redes_sociais">
          <a href="#"><i className="fa-brands fa-facebook"> </i></a>
          <a href="#"><i className="fa-brands fa-instagram"> </i></a>
          <a href="#"><i className="fa-brands fa-twitter"> </i></a>
          <a href="#"><i className="fa-brands fa-youtube"> </i></a>
        </div>
        <div className="linha">
        <hr></hr>
        </div>
        <div className="footer_nav">
        <ul>
          <li><a href="#">MEU TIME</a></li>
          <li><a href="#">PARCEIROS</a></li>
          <li><a href="#">ORIENTADORES</a></li>
          <li><a href="#">CURRICULO</a></li>
        </ul>
        </div>
        
      <div className="footer_final">
      Projeto com fins educacionais 2023; Desingned by <span>OTÁVIO</span>
      </div>
      </div>
      
    </footer>

  )
}
