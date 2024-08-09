class Animal{
    public nome: string;

    constructor (nome: string){
        this.nome = nome;
    }

    public mover(distanciaEmMetros: number){
        console.log(`${this.nome} moveu-se ${distanciaEmMetros} metros.`);
    }
}

class Cachorro extends Animal{
    public apelido: string;

    constructor(nome: string, apelido: string){
        super(nome);
        this.apelido = apelido;
    }
}

class Gato extends Animal{
    public quantidadeVidas: number;

    constructor(){
        super("Gato");
    }
}

const galinha =new Animal("Galinha");
galinha.mover(10);

const doguinho = new Cachorro("Dog", "doguinho");
console.log(`Cachoro: ${doguinho.nome}`);
console.log(`Cachorro apelido:${doguinho.apelido}`);

const tobias = new Gato();
tobias.quantidadeVidas=10;

console.log(`Gato:${tobias.nome}`);
console.log(`Gato quantidade vidas: ${tobias.quantidadeVidas}`);
