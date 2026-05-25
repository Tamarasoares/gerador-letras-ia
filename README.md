# DOCUMENTAÇÃO DA ENGENHARIA DE PROMPT
## Gerador de Letras com Inteligência Artificial

---

# 1. Introdução

Este documento apresenta a documentação técnica referente à engenharia de prompt utilizada no projeto **Gerador de Letras com IA**.

A aplicação foi desenvolvida com o objetivo de auxiliar usuários na criação de letras musicais personalizadas utilizando Inteligência Artificial Generativa. O sistema permite que o usuário informe parâmetros específicos, como tema, gênero musical, humor e palavras-chave, possibilitando a geração automática de letras organizadas em estruturas musicais.

O projeto integra tecnologias modernas de desenvolvimento web com APIs de Large Language Models (LLMs), explorando conceitos de:
- Engenharia de Prompt
- Desenvolvimento Front-end
- Desenvolvimento Back-end
- Integração de APIs de IA
- Comunicação Cliente-Servidor

---

# 2. Objetivo da Engenharia de Prompt

A engenharia de prompt foi aplicada para orientar o modelo de IA a produzir respostas mais organizadas, coerentes e alinhadas às necessidades do usuário.

O sistema utiliza prompts dinâmicos construídos a partir das informações fornecidas pelo usuário no formulário da aplicação.

Os objetivos principais da estratégia de prompting foram:

- Gerar letras coerentes e criativas
- Garantir organização estrutural da música
- Personalizar o conteúdo de acordo com os parâmetros informados
- Permitir iterações e refinamentos da letra
- Simular o comportamento de um compositor profissional

---

# 3. Prompt Principal de Geração

## Estrutura do Prompt

```txt
Você é um compositor profissional.

Crie uma letra de música com:

Tema: [TEMA]
Gênero: [GENERO]
Humor: [HUMOR]
Palavras-chave: [PALAVRAS_CHAVE]

Organize em:

Verso 1
Refrão
Verso 2
Ponte
Refrão Final
