package exercicio_05;

public class Main {

    public static void main(String[] args) {
        MaoJogador jogador1 = new MaoJogador();
        jogador1.addCarta("4", "copas");
        jogador1.addCarta("as", "paus");
        jogador1.addCarta("Rei", "copas");
        jogador1.exibirMao();
        jogador1.removerCarta(1);
        jogador1.exibirMao();
        jogador1.reorganizarCartas(2,1);
        jogador1.exibirMao();
    }
}
