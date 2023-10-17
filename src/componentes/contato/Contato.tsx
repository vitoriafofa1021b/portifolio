import { useState } from "react";
import './Contato.css'
function Contato(){
const [nome,setNome] = useState("");
function mudaNome(e: React.ChangeEvent<HTMLInputElement>) {
  setNome(e.target.value);
}
const [email,setEmail] = useState("");
function mudaEmail(e: React.ChangeEvent<HTMLInputElement>) {
  setEmail(e.target.value);
}
const [mensagem,setMensagem] = useState("");
function mudaMensagem(e: React.ChangeEvent<HTMLInputElement>) {
  setMensagem(e.target.value);
}


    return(
        <main className="contato">
        <div className="contato-container">
          <h2>ENTRE EM CONTATO</h2>
          <p>Envie-nos uma mensagem:</p>
          <form className="contato-form">
            <div className="form-group">
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" placeholder="Seu nome"  onChange={mudaNome} required/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Seu email" onChange={mudaEmail} required/>
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem" onChange={mudaMensagem} required></textarea>
            </div>
      <button type="submit">Enviar</button>
          </form>
        </div>
        <div className="alinha">
          <p className="state">Nome:{nome}</p>
          <p className="state">Email:{email}</p>
          <p className="state">Mensagem:{mensagem}</p>
        </div>
      </main>
    );
  }
export default Contato

