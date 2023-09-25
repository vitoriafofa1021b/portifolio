import { useState } from "react";
import Projeto from "../projeto/Projeto";
import './Main.css'
type ProjetoType = {
    id: number,
    titulo:string,
    sinopse:string,
    imagem:string
}
export default function Main(){
    //Hook
    const [texto,setTexto] = useState("")

    const projeto: ProjetoType[] = [
{
  id:1,
  titulo:"VITÓRIA PAES",
  sinopse:"Oi Pessoal, sou a Vitória e tenho 17 anos.Moro na cidade de Naviraí-Ms e estudo no Instituto Federal de Mato Grosso do Sul",
  imagem:"vit.jpg" 
},
{
  id:2,
  titulo:"VISITA TÉCNICA",
  sinopse:"Uma visita técnica à Usina Hidrelétrica de Itaipu é uma oportunidade educacional para aprender sobre a operação dessa grande usina localizada na fronteira entre Brasil e Paraguai.",
  imagem:"sol.jpg" 
},
{
  id:3,
  titulo:"NEGONA",
  sinopse:"A negona é uma cocker spaniel, ela tem muita energia e é uma ótima companhia para passeios e brincadeiras.",
  imagem:"negona.jpg" 
},
{
  id:4,
  titulo:"MEU AMOR",
  sinopse:"Esse é o Wellington meu namorado, mais conhecido como Coco, estamos juntos há quase cinco meses, e eu amo muito ele.",
  imagem:"amor.jpg" 
},
{
  id:5,
  titulo:"ENCANTO",
  sinopse:"Esta é a Encanto Moda Feminina, a loja da minha mãe na onde eu trabalho. Foi inaugurada no dia 27 de Maio de 2022 e desde então trazendo peças diferenciadas para vestir você mulher.",
  imagem:"moda.jpg" 
},
{
  id:6,
  titulo:"ACADEMIA",
  sinopse:" A academia é um ambiente onde as pessoas se exercitam e se dedicam a melhorar sua saúde física e bem-estar geral. E eu treino na Scala, academia onde o Professor Tere diz que treina.",
  imagem:"gym2.jpg" 
},
{
  id:7,
  titulo:"MÃE E VÓ",
  sinopse:"Essas são as pessoas mais especiais da minha vida, minha vó e minha mãe, elas me criaram e me tornaram uma pessoa melhor. Eu as amo demais.",
  imagem:"mae.jpg" 
},
{
  id:8,
  titulo:"MELHOR AMIGA",
  sinopse:"Essa é a Lulu, minha melhor amiga, nos conhecemos a mais de dez anos e desde sempre estamos juntas! Eu amo ela. ",
  imagem:"luana2.jpg" 
},
{
  id:9,
  titulo:"LELECO",
  sinopse:"Esse é o Leleco,um vira-lata que encontrei na rua, e adotei. Ele é muito especial e amoroso. Hoje em dia ele mora na casa da minha vó e teve que fazer uma cirurgia no olho. Mas tudo ocorreu bem!",
  imagem:"leleco.jpg" 
},
{
  id:10,
  titulo:"VIAGEM",
  sinopse:"Essa foto é de uma viajem que fiz com minha mãe para o Rio de Janeiro, tudo lá é incrivel, a comida, as praias e pontos turísticos.",
  imagem:"RIO.jpg" 
},


]

function mudaTexto(e: React.ChangeEvent<HTMLInputElement>) {
  console.log(e.target.value);
  setTexto(e.target.value);
}

return (
  <>
    <div className="pesquisa">
      <p>MEUS PROJETOS</p>
      <input className="barrapesquisa" type="text" onChange={mudaTexto} />
      <div>
        
      </div>
    </div>

    <main className="content-main">
    {projeto.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto.toLowerCase())).map((projeto: ProjetoType)=><Projeto key={projeto.id} titulo= {projeto.titulo} sinopse= {projeto.sinopse} imagem={projeto.imagem}
      />

    )}

  
    </main>
  </>
)
}