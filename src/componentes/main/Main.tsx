import './Main.css'
import pc from "../../assets/pc_pixel.png"
import gm from "../../assets/GameMakerLogo.png"
import jv from "../../assets/Jvs.png"

export default function Main(){
  return(
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
        <div className='especialidade_box'>
        <img className='img2' src={gm} alt="logo" />
          <h3 className='h3L'>Game Maker</h3>
          <p>INICIANDO PROJETOS DE PRODUÇÃO DE JOGOS 2D NO GAME MAKER, VENHA CONHECER ALGUNS PROJETOS FEITOS POR MIM!</p>
        </div>

        <div className='especialidade_box'>
        <img src={jv} alt="logo" />
          <h3 className='h3L'>JavaScript</h3>
          <p>PROJETOS FEITOS EM JAVASCRIPT NO CONTEXTO ESCOLAR, CONHEÇA ALGUNS DELES!</p>
        </div>

      </div>
    </div>
    <h4>EM BREVE MAIS CONTEUDOS!</h4>
    </section>

  </main>
  )
};
