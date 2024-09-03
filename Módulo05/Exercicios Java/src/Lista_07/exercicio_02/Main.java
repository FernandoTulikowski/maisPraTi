package exercicio_02;

public class Main {
    public static void main(String[] args) {
        HistoricoNavengacao history = new HistoricoNavengacao(3);

        history.acessarSite("https://www.maisprati.com.br");
        history.acessarSite("https://www.google.com");
        history.acessarSite("https://curso.maisprati.com.br");

        System.out.println("Histórico atual:");
        history.exibirHistorico();

        history.acessarSite("https://www.github.com");

       System.out.println("Histórico atual:");
        history.exibirHistorico();
    }
}
