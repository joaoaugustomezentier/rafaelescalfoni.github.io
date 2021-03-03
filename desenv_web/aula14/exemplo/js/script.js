$(function(){ //document.ready (qdo o documento estiver pronto)
    let url = "https://rafaelescalfoni.github.io/desenv_web/filmes.json";
    $.get(url, function(data){
        console.log(data);
        $.each(data, function(index, filme){
            let $divFilme = $("<div>").addClass("filme")
            let $filmeTitulo = $("<h3>").text(filme.titulo);
            let $elenco = $("<ul>");

            $.each(filme.elenco, function(ind, artista){
                let $artista = $("<li>").text(artista);
                $elenco.append($artista);
            });
            $divFilme.append($filmeTitulo);
            $divFilme.append($elenco);
            $("body").append($divFilme);
        })
    })
})