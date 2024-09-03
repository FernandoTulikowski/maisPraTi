package exercicio_07;

public class Main {
    public static void main(String[] args) {
        GerenciamentoImpressoes impressoes = new GerenciamentoImpressoes();
        impressoes.exibirFilaImpressao();
        impressoes.addTrabalhos("Doc 1");
        impressoes.addTrabalhos("Doc 2");
        impressoes.addTrabalhos("Doc 3");;
        impressoes.exibirFilaImpressao();
        impressoes.imprimir();
        impressoes.exibirFilaImpressao();
    }
}
