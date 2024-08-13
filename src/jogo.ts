class Player {
    private vida: number;
    private nome: string;
    private stamina: number;

    constructor(nome: string) {
        this.nome = nome;
        this.vida = 100;
        this.stamina = 50;
    }

    peteleco(player: Player) {
        if(this.estaDormindo() || player.estaDormindo())
            return;
        let vidaAtual = player.vida;
        this.realizarAtaque(this, player, 10, 10);
        this.mostrarAtaque(vidaAtual, player, `Peteleco: 10`);
        this.fatality(player);
    }

    mordida(player: Player) {
        if(this.estaDormindo() || player.estaDormindo())
            return;
        let vidaAtual = player.vida;
        this.realizarAtaque(this, player, 5, 0);
        this.mostrarAtaque(vidaAtual, player, `Mordida: 10`);
        this.fatality(player);
    }

    estaDormindo(){
        return this.vida <= 0;
    }

    tapa(player: Player) {
        if(this.estaDormindo() || player.estaDormindo())
            return;

        let vidaAtual = player.vida;
        this.realizarAtaque(this, player, 20, 15);
        this.mostrarAtaque(vidaAtual, player, `Tapa: 15`);
        this.fatality(player);
    }

    soco(player: Player) {
        if(this.estaDormindo() || player.estaDormindo())
            return;
        let vidaAtual = player.vida;
        this.realizarAtaque(this, player, 50, 35);
        this.mostrarAtaque(vidaAtual, player, `Soco: 50`);
        this.fatality(player);
    }

    fatality(atacado: Player){
        if (atacado.vida <= 0) {
            console.log(`${this.nome} ganhou`);
        }
    }

    realizarAtaque(atacante: Player, atacado: Player, dano: number, consumoStamina: number) {
        if (atacado.stamina <= 0) {
            atacado.vida -= dano * 2;
        } else {
            atacado.vida -= dano;
        }
        atacante.stamina -= consumoStamina;
    }

    // jorge.pedirDesculpa(matheus)
    pedirDesculpa(player: Player){
        this.stamina += 5;
        console.log(`${this.nome} pediu desculpas, restaurando +5 stamina (${this.stamina})`);
        
    }

    mostrarAtaque(vidaAtual: number, player: Player, ataque: string) {
        console.log(`${this.nome} => ${player.nome} Ataque ${ataque}! HP: ${vidaAtual} HP: ${player.vida}`);
    }

    informacoes() {
        return `Nome: ${this.nome}\nVida: ${this.vida}\nStamina: ${this.stamina}`;
    }
}

let jorge = new Player("Jorge");
let matheus = new Player("Matheus");


jorge.peteleco(matheus);
matheus.soco(jorge);
jorge.peteleco(matheus);
matheus.tapa(jorge);
jorge.tapa(matheus);
matheus.mordida(jorge);
matheus.mordida(jorge);
matheus.pedirDesculpa(jorge);
matheus.pedirDesculpa(jorge);
matheus.pedirDesculpa(jorge);
matheus.pedirDesculpa(jorge);
matheus.tapa(jorge);
jorge.tapa(matheus);
console.log(jorge.informacoes());
console.log(matheus.informacoes());