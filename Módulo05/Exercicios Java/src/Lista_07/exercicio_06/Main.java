package exercicio_06;

public class Main {
    public static void main(String[] args) {
        FilaBanco fila = new FilaBanco();
        fila.exibirFila();
        fila.atenderCliente();
        fila.addCliente("Fernando");
        fila.addCliente("Kalebe");;
        fila.exibirFila();
        fila.atenderCliente();
        fila.exibirFila();
    }
}
