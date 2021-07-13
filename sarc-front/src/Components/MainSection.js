import React from "react";
import Logo1 from "../Assets/Logo1.png";

function MainSection() {
  return (
    <main>
      <div className="form-login-register">
        {/* <img src = {Logo1} alt="Logo Sarc" /> */}
        <form>
          <h1>Login</h1>
          <fieldset>
            <div className="input-field">
              <label for="telefone">Telefone</label>
              <input
                id="telefone"
                type="text"
                placeholder="ex: 65999999999"
              ></input>
            </div>
            <div className="input-field">
              <label for="password">Senha</label>
              <input id="password" type="password" placeholder="Senha"></input>
            </div>
          </fieldset>
          <button>Entrar</button>
          <button>Criar Cadastro</button>
        </form>
      </div>
    </main>
  );
}

export default MainSection;
