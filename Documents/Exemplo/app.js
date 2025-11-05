// Importa o módulo nativo do Node.js para trabalhar com arquivos
const fs = require("fs");

// Lê o conteúdo do arquivo JSON (dados.json)
const dados = fs.readFileSync("dados.json", "utf-8");

// Converte o texto JSON em um objeto JavaScript
const usuarios = JSON.parse(dados);

// Mostra todos os usuários no console
console.log("Lista de usuários:");
usuarios.usuarios.forEach((user) => {
  console.log(`- ${user.nome}, ${user.idade} anos, ${user.profissao}`);
});


console.log("\nNovo usuário adicionado com sucesso!");