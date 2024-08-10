/* classe-heranca-exemplo-conta-bancaria.ts */
class ContaBancaria {
    protected numeroConta: string;
    protected saldo: number;
    protected cliente: string;

    constructor(numeroConta: string, cliente: string) {
        this.numeroConta = numeroConta;
        this.cliente = cliente;
        this.saldo = 0;
    }

    public depositar(valor: number): void {
        if (valor <= 0) {
            console.log("ERRO: Depósito não realizado, valor de depósito deve ser positivo.");
            return;
        }
        console.log(`Depositado: R$ ${valor}. Saldo anterior: R$ ${this.saldo}. Saldo atual: R$ ${this.saldo + valor}`);
        this.saldo += valor;
    }

    public sacar(valor: number): void {
        if (this.validarValorNegativoSaque(valor) === false)
            return;

        if (valor > this.saldo) {
            console.log("ERRO: Saque não realizado, pois o saldo é insuficiente");
            return;
        }

        console.log(`Saque: R$ ${valor}. Saldo anterior: R$ ${this.saldo}. Saldo atual: R$ ${this.saldo - valor}`);
        this.saldo -= valor;
    }

    protected validarValorNegativoSaque(valor: number): boolean {
        if (valor <= 0) {
            console.log("ERRO: Saque não realizado, pois valor de saque deve ser positivo.");
            return false;
        }
        return true;
    }

    public obterNomeCliente() {
        return this.cliente;
    }

    public apresentarDados() {
        console.log("Cliente: " + this.cliente + " \nSaldo: R$ " + this.saldo.toFixed(2));
    }
}

class ContaCorrente extends ContaBancaria {
    private chequeEspecial: number;

    constructor(numeroConta: string, nome: string, sobrenone: string, score: number) {
        super(numeroConta, nome);
        this.cliente = `${nome} ${sobrenone}`;
        this.chequeEspecial = this.calcularChequeEspecial(score);
    }

    private calcularChequeEspecial(score: number): number {
        if (score >= 0 && score <= 150)
            return 0;
        else if (score <= 300)
            return 100;
        else if (score <= 500)
            return 500;
        else if (score <= 750)
            return 2500;
        else if (score <= 950)
            return 10000;
        else
        return Number.MAX_SAFE_INTEGER;
    }

    public override apresentarDados(): void {
        super.apresentarDados();
        console.log ("Cheque Especial: " + this.chequeEspecial);
    }

    public override sacar(valor: number): void {
        if(super.validarValorNegativoSaque(valor)=== false)
            return;
        if (valor > this.saldo + this.chequeEspecial){
            console.log("ERRO: saque não realizadO< pois o saldo + limite é insuficiente");
            return;
        }

        console.log(`Saque R$ ${valor}. Saldo anterior: R$ ${this.saldo}. saldo atual: R$ ${this.saldo-valor}`);
        this.saldo -= valor;
    }
}


class ContaPoupanca extends ContaBancaria{
    private taxaJuros: number;

    constructor(numero: string, cliente: string, taxaJuros: number){
        super(numero, cliente);

        this.taxaJuros = taxaJuros;
    }

    public aplicarJuros(): void{
        let taxaJuros = this.taxaJuros/ 100;
        let juros = this.saldo * taxaJuros;
        this.saldo += juros;
    }

    public override apresentarDados(): void {
        super.apresentarDados();
        console.log ("Taxa de juros: " + this.taxaJuros);
    }
}


let contaPoupanca = new ContaPoupanca("A99", "Pedrinho", 7.28);
contaPoupanca.depositar(9750.20);
contaPoupanca.apresentarDados();

contaPoupanca.aplicarJuros();
contaPoupanca.apresentarDados();

let score = 300;
let contaCorrente = new ContaCorrente("1239", "Manuer", "Logan", score);
contaCorrente.sacar(98);
contaCorrente.apresentarDados();

let conta = new ContaBancaria("1A", "Pedro");
conta.depositar(100);
conta.depositar(250);
conta.depositar(-10);
conta.sacar(300);
conta.sacar(-10);
conta.sacar(100);
conta.apresentarDados();
