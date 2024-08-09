function calcularSalariBruto(valorHora: number, quantidadeHora: number): number{
    if(valorHora <= 0) {
        throw Error("Valor da hora inválido! Valor não pode ser zero ou negativo");
    }

    if(valorHora >=351){
        throw Error("Valor da hora inválido! Valor não pode ser igual ou maior que 351");
    }

    if(quantidadeHora <= 0) {
        throw Error("A quantidade de hora é inválido! Valor não pode ser zero ou negativo");
    }

    if(quantidadeHora >= 441) {
        throw Error("A quantidade de hora é inválido! Valor não pode ser igual ou maior que 440");
    }

    let salrioBruto = valorHora * quantidadeHora;
    return salrioBruto;
}

try{
    console.log(calcularSalariBruto(200,400));
}catch (error){
    console.log(error.message);
}
console.log("Thank you")