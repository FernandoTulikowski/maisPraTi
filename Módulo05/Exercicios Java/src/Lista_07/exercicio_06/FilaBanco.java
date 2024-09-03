package exercicio_06;

import java.util.LinkedList;
import java.util.Queue;

public class FilaBanco {
    private Queue<String> filaClientes;

    public FilaBanco (){
        this.filaClientes = new LinkedList<>();
    }

    public void addCliente (String nomeCliente){
        filaClientes.add(nomeCliente);
        System.out.println("Cliente " + nomeCliente + " foi adicionado á fila.");
    }

    public void atenderCliente () {
        if(filaClientes.isEmpty()){
            System.out.println("A fila está vazia!");
        } else {
            System.out.println("Cliente " + filaClientes.peek() + " em atendimento.");
            filaClientes.poll();
        }
    }

    public void exibirFila () {
        if (filaClientes.isEmpty()) {
            System.out.println("Nenhum cliente na fila.");
        } else {
            System.out.println("Clientes na fila:");
            int posicao = 1;
            for (String cliente : filaClientes) {
                System.out.println("Posição " + posicao + ": " + cliente);
                posicao++;
            }
        }
    }
}
