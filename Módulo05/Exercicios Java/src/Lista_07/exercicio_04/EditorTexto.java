package exercicio_04;

class Node {
    String textoAtual;
    Node next;
    Node previous;

    public Node(String texto){
        this.textoAtual = texto;
        this.next = null;
        this.previous = null;
    }
}

public class EditorTexto {
    private Node head;
    private Node last;
    private Node current;
    private String memoria;

    public EditorTexto() {
        this.head = null;
        this.last = null;
        this.current = null;
        this.memoria = null;
    }

    public void addTexto(String texto) {
        this.memoria = texto;

        if (this.head == null) {
            Node newNode = new Node(texto);
            this.head = newNode;
            this.last = newNode;
            this.current = newNode;
        } else {
            if (this.current != this.last) {
                this.current.next = null;
                this.last = this.current;
            }

            Node newNode = new Node(this.current.textoAtual + texto);
            this.current.next = newNode;
            newNode.previous = this.current;
            this.current = newNode;
            this.last = newNode;
        }
    }

    public void undo() {
        if (this.current == null){
            System.out.println("Nenhuma alteração para remover.");
            return;
        }

        if (this.current.previous != null){
            this.current = this.current.previous;
            this.current.next = null;
            this.last = this.current;
        } else {
            // Se a lista tiver apenas um nó
            this.head = null;
            this.current = null;
            this.last = null;
        }
    }

    public void redo() {
        addTexto(memoria);
    }

    public void exibirTexto (){
        System.out.println(this.current.textoAtual);
    }

}