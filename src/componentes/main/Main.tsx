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
      titulo: "Barbie",
      descricao:
        "Depois de ser expulsa da Barbieland por ser uma boneca de aparência menos do que perfeita, Barbie parte para o mundo humano em busca da verdadeira felicidade.",
      imagem: "/teste.png",
    },
    {
      id: 2,
      titulo: "Oppenheimer",
      descricao:
        "O físico J. Robert Oppenheimer trabalha com uma equipe de cientistas durante o Projeto Manhattan, levando ao desenvolvimento da bomba atômica.",
      imagem: "/teste2.jpg",
    },
    {
      id: 3,
      titulo: "Bullet-Train",
      descricao:
        "Em um trem-bala indo rapidamente de Tóquio a Morioka, cinco assassinos profissionais descobrem que possuem o mesmo objetivo.",
      imagem: "/teste3.png",
    },
    {
      id: 4,
      titulo: "Barbie sereia",
      descricao: "Uma sereia estilista tem o poder de mudar a cor de pérolas preciosas.",
      imagem: "/teste4.jpg",
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
