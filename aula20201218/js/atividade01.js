//função construtora de objetos Produto
function Livro(id, nome, autores, estilo){
	this.id = id;
	this.nome = nome;
	this.autores = autores;
	this.estilo = estilo;
}

// programar a inserção dos novos livros no array listaLivros e sua adição no DOM
function adicionarLivro(livro){
// seu programa aqui.
}

// programar a remoção do livro no array listaLivros e sua remoção no DOM
function removerLivro(livro){
// seu programa aqui.
}

var listaLivros = [];

// carregamento de cardápio de exemplo
var cardapio = [Produto(1, "Capuccino", 1, 7)
			, Produto(2, "Espresso", 1, 4)
			, Produto(3, "Fraputino", 1, 8)
			, Produto(4, "Chocotino", 1, 7)
			, Produto(5, "Chocolate Quente", 1, 10)
			, Produto(6, "Frapê", 1, 12)
			, Produto(7, "Suco de Laranja", 1, 10)
			, Produto(8, "Açaí", 1, 12)];
		
$(function(){
			
	$("#adicionar").click(function(){

	});

	$("#excluir").click(function(){
		
	})
});