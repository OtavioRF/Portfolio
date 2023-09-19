import './Main.css'
import pc from "../../assets/pc_pixel.png"
import React, { useState } from "react";
import Trabalho from '../trabalhos/trabalhos';

type Trabalhostype = {
  id: number;
  titulo:string,
  descricao:string,
  imagem:string
};

export default function Main(){
  const [texto, setTexto] = useState("");
  const trabalhos: Trabalhostype[] = [
    {
      id: 1,
      titulo: "Robótica",
      descricao:
        "Participei do projeto de Robotica feito pelo IFMS, durante o desenvolvimento do mesmo. Clique para ver os projetos!",
      imagem: "/robo.png",
    },
    {
      id: 2,
      titulo: "GameMaker",
      descricao:
        "Sou programador iniciante na plataforma GameMaker, atualmente estou criando protótipos de jogos. Clique para ver os projetos! (Projeto ainda sem fotos)",
      imagem: "/GameMakerL.png",
    },
    { 
      id: 3,
      titulo: "Html",
      descricao:
        "Possuo experiencia no desenvolvimento de sites, possuo projetos feitos no meio academico. Clique para ver os projetos!",
      imagem: "/htmlLogo.png",
    },
    {
      id: 4,
      titulo: "JavaScript",
      descricao: "Com o conhecimento adquirido durante meu curso integrado, desenvolvi alguns sites utilizando o JS. Clique para ver os projetos!",
      imagem: "/Jvs.png",
    },
  ];

  function muda_txt(e: React.ChangeEvent<HTMLInputElement>) {
    setTexto(e.target.value);
  }

  return(
    <>
   
  <main>
 

    <section className='topo_site'>
      <div className='interface'>
        <div className='flex'>
          <div className='txt_site'>
            <h1>TRANSFORMANDO IDEIAS EM CÓDIGO, UM PROJETO POR VEZ.</h1>
            <p>meu portfólio reflete a jornada de alguém que se dedica a transformar desafios em oportunidades através do mundo dinâmico do desenvolvimento de software. Cada linha de 
              código é um testemunho do meu compromisso em traduzir conceitos em aplicações tangíveis, enquanto continuo 
              explorando novas tecnologias e aprimorando minhas habilidades para criar experiências digitais inovadoras e impactantes.</p>

              <div className='botao_contato'>
                <a href='#'><button>Entrar em contato</button></a>
              </div>
          </div>

          <div className='img_top'>
          <img src={pc} alt="logo" />

          </div>
        </div>
    </div>

    </section>

    <section className='especialidade'>
    <div className='interface'>
      <h2 className='titulo'>MINHAS <span>ESPECIALIDADES</span></h2>
      <div className='flex'>
  
      </div>

<div className='areaPesquisa'>
      <div className="pesquisaT">
        <input className="barrapesquisa" type="text" placeholder='Buscar atividades' onChange={muda_txt}></input>
      </div>

<div className='trabalhoMain'>
  {trabalhos
          .filter((trabalho) =>
            trabalho.titulo.toLowerCase().includes(texto.toLowerCase())
          )
          .map((trabalho) => (
            <Trabalho
              key={trabalho.id}
              descricao={trabalho.descricao}
              titulo={trabalho.titulo}
              imagem={trabalho.imagem}
            />
          ))}
</div>


      </div>
    </div>
    <h4>EM BREVE MAIS CONTEUDOS!</h4>
    </section>

  </main>
  </>
  )
};
