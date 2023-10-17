  import './Contato.css'
  import React, { useState } from "react";
  export default function Contato() {
    const [texto, setTexto] = useState("");

    function change_txt(e: React.ChangeEvent<HTMLInputElement>) {

      setTexto(e.target.value);
    }
    return (

    
    <div className='container-form'>
      
      <div className='contato'>

      <h2>FAÇA CONTATO COMIGO</h2>
      <p>Suas duvidas serão respondidas e criticas serão respondidas o mais rapido possivel. Sinta-se a vontade para fazer qualquer pergunta.</p>

      <li><a><i className="fa-solid fa-envelope"style={{color: "#0561ff"}}> </i> Envie um e-mail</a></li>
      <li><a><i className="fa-solid fa-phone" style={{color: "#0561ff"}}> </i> Contato por telefone </a></li>
      

      </div>

      <div className='form'>

          <h2>FORMULARIO PARA CONTATO</h2>
          
          
          <input type='text' name='name' placeholder='Digite seu nome' onChange={change_txt}></input> 
          
          <input type='email' name='email' placeholder='Digite seu email'onChange={change_txt}></input>
        
          <input type='text' name='message' placeholder='Assunto'onChange={change_txt}></input>

          <button type='submit'>Enviar</button>
          <p>Texto digitado no ultimo campo: {texto}</p>
      </div>
          
    </div>
  
    )
  }
