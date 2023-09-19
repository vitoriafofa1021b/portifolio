import './Projeto.css'

type Projetoprops={
    titulo:string,
    sinopse:string,
    imagem:string

}

export default function Filme(props:Projetoprops){
  return(
    <div className="projeto_content">
      <div className="foto_filme">
        <img src={props.imagem} alt=""/>
        </div>
        <div className="texto_foto">
            <h1>{props.titulo}</h1>
            <p className="sinopse">
            {props.sinopse}
            </p>
        </div>
    </div>
  )
}