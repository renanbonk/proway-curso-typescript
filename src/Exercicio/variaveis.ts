function exercicio01() {
    let nomeCliente: string = "Jorge Mateus";
    let cnpjCliente: string = "34.936.897/0001-81";
    let inscricaoEsdual: string = "817.649.131"
    let categoria: string = "Musica"
    let estaFalida: boolean = false;

    estaFalida = false;

    let estaFalidaTexto = convertBooleanParaString2(estaFalida);

    let titulo = document.querySelector("h1");
    titulo.innerText = nomeCliente;

    let paragrafo = document.querySelector("p");
    paragrafo.innerText = `
Nome do cliente: ${nomeCliente}
CNPJ da Empresa: ${cnpjCliente}
Incrição Estadual da Empresa: ${inscricaoEsdual}
Categoria da Empresa: ${categoria}
Esta Falida: ${estaFalidaTexto}
`
}

function convertBooleanParaString2 (valor: boolean): string{
    if (valor){
        return "Sim";
    }
    return "Não";
}

exercicio01()
