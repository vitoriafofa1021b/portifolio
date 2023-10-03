import './Contato.css'
function Contato(){
    return(
        <main className="contato">
        <div className="contato-container">
          <h2>ENTRE EM CONTATO</h2>
          <p>Envie-nos uma mensagem:</p>
          <form className="contato-form">
            <div className="form-group">
              <label htmlFor="nome">Nome:</label>
              <input type="text" id="nome" name="nome" placeholder="Seu nome" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" placeholder="Seu email" />
            </div>
            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea id="mensagem" name="mensagem" placeholder="Sua mensagem"></textarea>
            </div>
            <div>
            <button type="button">Enviar</button>
            </div>
          </form>
        </div>
      </main>
    );
  }
export default Contato