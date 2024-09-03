package exercicio_03;

//Classe que representa cada ação de edição do texto
class Node {
    String textoAtual;
    Node next;

    public Node(String texto){
        this.textoAtual = texto;
        this.next = null;
    }
}

//Clase que representa o controle de reversão
public class ControleReversao {
    private Node head;
    private Node last;

    public ControleReversao (){
        this.head = null;
        this.last = null;
    }

    public void addTexto (String texto){

        //Verifica se a lista está vazia
        if(this.head == null){
            Node newNode = new Node(texto);
            this.head = newNode;
            this.last = newNode;
        } else {
            Node newNode = new Node(this.last.textoAtual+texto);
            this.last.next = newNode;
            this.last = newNode;
        }

    }

    public void undo (){
        if(this.head == null) {
            System.out.println("Nenhuma alteração para remover.");
            return;
        }

        // Caso haja apenas um nó na lista
        if (this.head == this.last) {
            this.head = null;
            this.last = null;
            System.out.println("Última alteração removida. O texto está agora vazio.");
            return;
        }

        // Percorre a lista para encontrar o penúltimo nó
        Node current = this.head;
        while (current.next != this.last) {
            current = current.next;
        }

        // Remove o último nó
        this.last = current;
        this.last.next = null;
    }

    public void exibirTexto (){
        System.out.println(this.last.textoAtual);
    }
}
