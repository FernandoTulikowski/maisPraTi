package exercicio_08;

import exercicio_07.GerenciamentoImpressoes;

public class Main {
    public static void main(String[] args) {
        GerenciamentoProcessos processos = new GerenciamentoProcessos();
        processos.exibirFilaProcessos();
        processos.addProcesso("Proc 1");
        processos.addProcesso("Proc 2");
        processos.addProcesso("Proc 3");
        processos.exibirFilaProcessos();
        processos.executarProcesso();
        processos.exibirFilaProcessos();
    }
}
