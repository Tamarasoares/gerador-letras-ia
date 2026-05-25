import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [tema, setTema] = useState("");
  const [genero, setGenero] = useState("");
  const [humor, setHumor] = useState("");
  const [palavrasChave, setPalavrasChave] = useState("");
  const [letra, setLetra] = useState("");
  const [carregando, setCarregando] = useState(false);

  async function gerarLetra(tipo = "letra completa") {
    setCarregando(true);

    try {
      const resposta = await axios.post("http://localhost:3000/gerar-letra", {
        tema,
        genero,
        humor,
        palavrasChave,
        tipo,
      });

      setLetra(resposta.data.letra);
    } catch (erro) {
      console.log(erro);
      alert("Erro ao gerar letra");
    } finally {
      setCarregando(false);
    }
  }

  return (
    <div className="container">
      <h1>Gerador de Letras com IA 🎵</h1>

      <div className="formulario">
        <input placeholder="Tema da música" value={tema} onChange={(e) => setTema(e.target.value)} />
        <input placeholder="Gênero musical" value={genero} onChange={(e) => setGenero(e.target.value)} />
        <input placeholder="Humor" value={humor} onChange={(e) => setHumor(e.target.value)} />
        <input placeholder="Palavras-chave" value={palavrasChave} onChange={(e) => setPalavrasChave(e.target.value)} />

        <button disabled={carregando} onClick={() => gerarLetra("letra completa")}>
          {carregando ? "Gerando letra..." : "Gerar Letra"}
        </button>
      </div>

      <div className="botoes-iteracao">
        <button disabled={carregando} onClick={() => gerarLetra("continuação da letra")}>
          Continuar Letra
        </button>

        <button disabled={carregando} onClick={() => gerarLetra("novo refrão")}>
          Novo Refrão
        </button>

        <button disabled={carregando} onClick={() => gerarLetra("ponte musical")}>
          Criar Ponte
        </button>
      </div>

      <div className="resultado">
        <h2>Letra Gerada</h2>
        <pre>{carregando ? "Gerando sua letra, aguarde..." : letra || "Sua letra aparecerá aqui..."}</pre>
      </div>

      <footer>
        Projeto desenvolvido com React, Node.js, Express e Inteligência Artificial Generativa.
      </footer>
    </div>
  );
}

export default App;