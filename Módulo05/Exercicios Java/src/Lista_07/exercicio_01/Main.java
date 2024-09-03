package exercicio_01;

public class Main {
    public static void main(String[] args) {

        GerenciadorTarefas gerenciador = new GerenciadorTarefas();
        gerenciador.adicionarTarefa("fazer lista de exercícios");
        gerenciador.marcarComoConcluida("fazer lista de exercícios");
        gerenciador.removerTarefa("comprar pão");
        gerenciador.removerTarefa("fazer lista de exercícios");
        gerenciador.removerTarefa("consultar documentação");

    }
}