package exercicio_03;

public class Main {
    public static void main(String[] args){
        ControleReversao reversao = new ControleReversao();
        reversao.addTexto("olá");
        reversao.exibirTexto();
        reversao.addTexto(", mundo");
        reversao.addTexto("!");
        reversao.exibirTexto();
    }
}
