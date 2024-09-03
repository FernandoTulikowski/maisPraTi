package exercicio_07;

import java.util.LinkedList;
import java.util.Queue;

public class GerenciamentoImpressoes {
    private Queue<String> trabalhos;

    public GerenciamentoImpressoes (){
        this.trabalhos = new LinkedList<>();
    }

    public void addTrabalhos (String trabalho) {
        trabalhos.add(trabalho);
        System.out.println("Trabalho enviado para impressão");
    }

    public void imprimir () {
        if(trabalhos.isEmpty()){
            System.out.println("A fila de impressão está vazia.");
        } else {
            System.out.println("Trabalho '" + trabalhos.peek() + "' impresso com sucesso." );
            trabalhos.poll();
        }
    }

    public void exibirFilaImpressao () {
        if(trabalhos.isEmpty()){
            System.out.println(" A fila de impressão está vazia");
        } else {
            System.out.println("####FILA DE IMPRESSÃO####");
            for(String trabalho:trabalhos) {
                System.out.println(trabalho);
            }
        }
    }
}
