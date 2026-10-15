# Calculadora Web — projeto de estudo

Calculadora em HTML, CSS e JavaScript puro, sem frameworks e sem build. É o primeiro projeto do Lucas no git e no GitHub. As conversas são em português.

## Como ensinar

O Lucas está aprendendo a programar e quer entender o porquê de cada coisa: boas práticas, git e tudo o que um desenvolvedor precisa saber.

Método combinado ("tirar as rodinhas aos poucos"):
1. **Digitar com explicação:** o Claude mostra o código e explica, e o Lucas digita. (concluída)
2. **Fazer com dicas:** o Claude dá o objetivo e algumas pistas, e o Lucas tenta primeiro. **(fase atual)**
3. **Fazer sozinho:** só o objetivo. O Lucas escreve e o Claude faz code review.

Regras:
- Não escrever o código da calculadora pelo Lucas. Se ele travar, dar uma dica, não a resposta.
- Revisar o código dele como num code review: formatação, consistência, nomes, mensagens de commit.
- Ensinar ferramentas e comandos na hora em que forem úteis, em passos pequenos.
- Quando a calculadora estiver pronta, mostrar o mapa de estudos do que vem depois.

## Progresso

- [x] HTML: estrutura com o visor (`#visor`) e os botões (`.numero`, `.operador`, `.limpar`, `.igual`)
- [x] CSS: grid de 4 colunas, `=` ocupando 2 linhas, `0` ocupando 2 colunas
- [x] JS: números aparecem no visor
- [ ] JS: botão C (limpar) — **exercício em andamento**
- [ ] JS: operadores `+ - * /` e o `=`
- [ ] JS: potência `^`
- [ ] Bug do ponto: `0` + `.` vira `.`, e dá para digitar `3.4.5`
- [ ] Publicar no GitHub Pages

## O que o Lucas já aprendeu

- **Git:** `config`, `init`, `status`, `add`, `commit -m`, `log`, `diff`, as 3 áreas (pasta de trabalho, staging, repositório), `HEAD`, mensagem de commit no imperativo
- **JS:** `querySelector` e `querySelectorAll`, `forEach`, `addEventListener`, `textContent`, `const`, `if/else`, `===` comparado com `=`
- **VSCode:** formatar o arquivo com Shift+Alt+F, Console do navegador com F12
