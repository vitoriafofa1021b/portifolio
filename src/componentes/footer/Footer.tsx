import './Footer.css'
function Footer(){
  return(
 <footer>
   <div className="canto">
     <div className="logo2"> </div>
     <div className="icons">
       <div className="facebook"> </div>
       <div className="twitter"> </div>
       <div className="instagram"> </div>
       
     </div>
     <hr className='linhaP'></hr>
   </div>
   

   <nav className="navbar">
     <div></div>
    <ul className="base3"><a className="titulo">INÍCIO</a>
      <li className="base2">
        <a className="base" href='#'>Home</a>
      </li>
      <li className="base2">
        <a className="base" href='#'>Mídia</a>
      </li>
      <li className="base2">
        <a className="base" href='#'>Downloads</a>
      </li>
    </ul>
    <ul className="base3"><a className="titulo">LINKS</a>
      <li className="base2">
        <a className="base" href='#'>Projetos</a>
      </li>
      <li className="base2">
        <a className="base" href='#'>Sobre mim</a>
      </li>
      <li className="base2">
        <a className="base" href='#'>Currículo</a>
      </li>
    </ul>
    <ul className="base3"><a className="titulo">SERVIÇOS</a>
      <li className="base2">
        <a className="base" href='#'>Blog</a>
      </li>
      <li className="base2">
        <a className="base" href='#'>Contato</a>
      </li>
      <li className="base2">
        <a className="base" href='#'>Informações</a>
      </li>
    </ul>
    <ul className="base3"><a className="titulo">SUPORTE</a>
      <li className="base2">
        <a className="base" href='#'>Chat</a>
      </li>
      <li className="base2">
        <a className="base" href='#'>FAQ</a>
      </li>
      <li className="base2">
        <a className="base" href='#'>Telefone</a>
      </li>
    </ul>
    <ul className="base3"><a className="titulo2">ENTRE EM CONTATO</a>
      <li className="base4"><a className="base5">Email:</a>
        <a className="base4" href='#'>vitoria@gmail.com</a>
      </li>
      <li className="base4"><a className="base5">Telefone:</a>
        <a className="base4" href='#'>(123)456-7890</a>
      </li>
    </ul>
   </nav>
 </footer>

  )}
    export default Footer