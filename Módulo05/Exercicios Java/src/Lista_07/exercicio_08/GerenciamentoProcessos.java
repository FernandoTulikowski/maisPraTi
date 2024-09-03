package exercicio_08;

import java.util.LinkedList;
import java.util.Queue;

public class GerenciamentoProcessos {
    private Queue<String> processos;

    public GerenciamentoProcessos() {
        this.processos = new LinkedList<>();
    }

    public void addProcesso (String processo) {
        processos.add(processo);
    }

    public void executarProcesso () {
        if(processos.isEmpty()){
            System.out.println("A fila de processos está vazia.");
        } else {
            System.out.println("'" + processos.peek() + "' executado comm sucesso." );
            processos.poll();
        }
    }

    public void exibirFilaProcessos() {
        if(processos.isEmpty()){
            System.out.println(" A fila de processos está vazia");
        } else {
            System.out.println("####PROCESSOS####");
            for(String trabalho:processos) {
                System.out.println(trabalho);
            }
        }
    }
}
