function dividir(numero1: number, numero2: number) {
    if (numero2 === 0) {
        throw Error("Numero 2 não pode ser 0");
    }
    return numero1 / numero2
}


function exemploTratamentoExecacao01() {
    try {
        console.log(dividir(32, 0));
        console.log("Deu boa");
    } catch (error) {
        console.log(error.message);
    }

    console.log("Acabou a execução");
}

function calcularImc(peso: number, altura: number): number {
    if (peso <= 0) {
        throw Error("Peso inválido! Valor não pode ser zero ou negativo");
    }

    if (peso >= 400) {
        throw Error("Peso inválido! Valor não pode ser maior que 399");
    }

    if (altura <= 0) {
        throw Error("Peso inválido! Valor não pode ser menor ou igual a zero");
    }

    if (altura >= 2.60) {
        throw Error("Peso inválido! Valor não pode ser acima de 2.60");
    }

    let imc = peso / (altura * altura);
    return imc;
}

try {
    console.log(calcularImc(570, 1.63));
} catch (error) {
    console.log(error.message);
}
console.log("Obrigado");

class AnoNascimentoAbaixoDoMinimoError extends Error {
    constructor(mesagem: string) {
        super(mesagem);
        this.name = "AnoNascimentoAbaixoDoMinimoError";
    }
}

class AnoNascimentoAbaixoDoMaximoError extends Error {
    constructor(ano_maximo: number) {
        super(`Ano Nascimento inválido! Valor deve ser abaixo de ${ano_maximo}`);
        this.name = "AnoNascimentoAbaixoDoMaximoError";
    }
}

function calcularIdade1(anoNascimento: number): number {
    if (anoNascimento < 1900) {
        throw new AnoNascimentoAbaixoDoMinimoError("Ano Nascimento inválido! Valor deve ser acima de 1899");
    }

    let dataAtual: Date = new Date();
    let anoAtual: number = dataAtual.getFullYear();

    if (anoNascimento > anoAtual) {
        throw new AnoNascimentoAbaixoDoMaximoError(anoAtual + 1);
    }
    let idade = anoAtual - anoNascimento;
    return idade;
}

try{
    let idade = calcularIdade1(1030);
    console.log(`Idade:${idade}`);
}catch(error){
    if(error instanceof AnoNascimentoAbaixoDoMinimoError || error instanceof AnoNascimentoAbaixoDoMaximoError){
        console.log("Erro no campo de Ano de Nascimento:");
        console.error(error.message);
        console.error(error.name);
        console.error(error.stack);
    }else{
        console.log(error.message);
    }
}