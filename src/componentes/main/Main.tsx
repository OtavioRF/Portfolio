import './Main.css'
import pc from "../../assets/pc_pixel.png"
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

  </main>
  )
};
