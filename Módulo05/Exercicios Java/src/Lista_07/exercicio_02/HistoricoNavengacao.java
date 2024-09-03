package exercicio_02;

//Classe que representa cada URL do histórico de navegação
class Node {
    String url;
    Node next;

    public Node(String url){
        this.url = url;
        this.next = null;
    }
}

//Classe que representa o histórico de navegação
public class HistoricoNavengacao {
    private Node head;
    private Node last;
    private int size;
    private int maxSize;

    public HistoricoNavengacao (int maxSize){
        this.head = null;
        this.last = null;
        this.size = 0;
        this.maxSize = maxSize;
    }

    // Adiciona uma nova URL ao histórico
    public void acessarSite (String url){
        // Cria um novo nó com a url
        Node newNode = new Node(url);

        //Verifica se a lista está vazia
        if(this.head == null){
            this.head = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.size++;
        if(size > maxSize){
            removerMaisAntigo();
        }

    }

    //Remove a URL mais antiga
    public void removerMaisAntigo(){
        if(head != null){
            this.head = this.head.next;
        }
    }

    //Exibe o histórico de navegação
    public void exibirHistorico(){
        Node current = head;
        while (current != null){
            System.out.println(current.url);
            current = current.next;
        }
    }

}
