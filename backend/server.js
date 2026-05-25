const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { GoogleGenAI } = require("@google/genai");

const app = express();

app.use(cors());
app.use(express.json());

// conexão Gemini
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

// rota inicial
app.get("/", (req, res) => {
    res.send("Servidor funcionando!");
});

// rota gerar letra
app.post("/gerar-letra", async (req, res) => {

    try {

        const {
            tema,
            genero,
            humor,
            palavrasChave
        } = req.body;

        const prompt = `
        Você é um compositor profissional.

        Crie uma letra de música com:

        Tema: ${tema}
        Gênero: ${genero}
        Humor: ${humor}
        Palavras-chave: ${palavrasChave}

        Organize em:

        Verso 1
        Refrão
        Verso 2
        Ponte
        Refrão Final
        `;

        // gerar resposta IA
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: prompt
        });

        res.json({
            sucesso: true,
            letra: response.text
        });

    } catch (erro) {

        console.log(erro);

        // modo reserva caso API falhe
        res.json({
            sucesso: true,
            modo: "reserva",
            letra: `
Verso 1
Em meio ao silêncio eu tentei me encontrar,
Com o coração cansado de tanto esperar.
A noite trouxe lembranças que eu não esqueci,
Mas ainda existe uma força dentro de mim.

Refrão
Eu vou seguir, mesmo sem direção,
Transformar saudade em canção.
Se o mundo tentar me parar,
Minha coragem vai me levantar.

Verso 2
Cada passo lento também me ensinou,
Que até a dor vira luz quando passa o amor.
Entre quedas e sonhos eu posso vencer,
Ainda há uma história pronta pra nascer.

Ponte
E se a estrada parecer escura,
Eu faço da música minha cura.

Refrão Final
Eu vou seguir, mesmo sem direção,
Transformar saudade em canção.
Se o mundo tentar me parar,
Minha coragem vai me levantar.
`
        });

    }

});

// porta
const PORT = 3000;

// iniciar servidor
app.listen(PORT, () => {
    console.log("Servidor rodando na porta 3000");
});