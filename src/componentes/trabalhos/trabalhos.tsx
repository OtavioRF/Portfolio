import './trabalhos.css'
type  trabalhoProps={
    titulo:string,
    descricao:string,
    imagem:string

}
export default function Trabalho(props:trabalhoProps){
    return(
        <div className="trabalho_container">
            <div className='foto-trabalho'>
              <img src={props.imagem} alt=""/>   
            </div>
            <div className="texto_foto">
                <h1>{props.titulo}</h1>
                <p className="descricao">{props.descricao}</p>
            </div>
         </div>
    )
}