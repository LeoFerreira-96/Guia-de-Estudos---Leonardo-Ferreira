/* 
------- Nomes dos meses -------

var mes = function() {
  var nomes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio","Junho", "Julho", "Agosto", "Setembro", "Outubro","Novembro", "Dezembro"];
  return {
    nome: function(numero) { return nomes[numero]; },
    numero: function(nome) { return nomes.indexOf(nome); }
  };
}();

console.log(mes.nome(2));
console.log(mes.numero("November"));
*/

// Rever como Criar Modulos