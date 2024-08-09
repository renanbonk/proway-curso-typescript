function calcularIdade(anoNascimento: number): number {
    if (anoNascimento <= 0) {
        throw Error("Ano nascimento inválido! Valor não pode ser zero ou negativo.");
    }

    if (anoNascimento <= 1899) {
        throw Error("Ano nascimento inválido! Valor não pode ser igual ou menor que 1899.");
    }

    if (anoNascimento >=2025){
        throw Error("Ano nascimento inválido! Valor não pode ser igual o maior que 2025.");
    }

    let idade = 2024 - anoNascimento;
    return idade;
}

try{
    console.log(calcularIdade1(1997));
} catch(error){
    console.log(error.message);
}
console.log("Thaks")