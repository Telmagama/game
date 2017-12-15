var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");

$(document).ready(function(){
	atualizaTamanhoFrase();
	incializaContadores();
	incializaCronometro();
	$("#botao-reiniciar").click(reiniciaJogo);


})

function atualizaTamanhoFrase() {
	var frase = $(".frase").text();
var numPalavras = frase.split(" ").length;
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);
}

function incializaContadores() {
campo.on("input",function() {
 var conteudo = campo.val()

  var qtdPalavras = conteudo.split(/\S+/).length -1;
  $("#contador-palavras").text(qtdPalavras);

  var qtdCaracteres = conteudo.length;
  $("#contador-caracteres").text(qtdCaracteres);

});

}

function incializaCronometro() {
	var tempoRestante = $("#tempo-digitacao").text();
campo.one("focus",function(){
 var cronometroID = setInterval(function(){
    	tempoRestante--;
        $("#tempo-digitacao").text(tempoRestante);
        if(tempoRestante < 1){
        	campo.attr("disabled",true);
        	clearInterval(cronometroID);
        	campo.addClass("campo-desativado");
        }
    },1000);

  });

}


function reiniciaJogo(){
	campo.attr("disabled",false); 
	campo.val("");
	$("#contador-palavras").text("0");
	$("#contador-caracteres").text("0");
	$("#tempo-digitacao").text(tempoInicial);
	incializaCronometro();
}


 




