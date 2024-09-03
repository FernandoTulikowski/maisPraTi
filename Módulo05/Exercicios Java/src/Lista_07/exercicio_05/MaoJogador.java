package exercicio_05;

class Node {
    String valor;
    String naipe;
    Node next;
    Node previous;

    public Node (String valor, String naipe){
        this.valor = valor;
        this.naipe = naipe;
        this.next = null;
        this.previous = null;
    }
}

public class MaoJogador {
    private Node head;
    private Node current;
    private Node last;

    public MaoJogador (){
        this.head = null;
        this.current = null;
        this.last = null;
    }

    public void addCarta (String valor, String naipe) {
        Node carta = new Node(valor, naipe);

        if(this.head == null){
            this.head = carta;
            this.current = carta;
            this.last = carta;
        } else {
            if(this.current != this.last) {
                this.current.next = null;
                this.last = this.current;
            }

            this.current.next = carta;
            carta.previous = this.current;
            this.current = carta;
            this.last = carta;
        }
    }

    public void removerCarta(int posicao) {
        if (head == null) {
            System.out.println("A mão está vazia.");
            return;
        }

        Node current = head;
        int index = 1;

        while (current != null && index < posicao) {
            current = current.next;
            index++;
        }

        if (current == null) {
            System.out.println("Posição inválida.");
            return;
        }

        if (current.previous != null) {
            current.previous.next = current.next;
        } else {
            head = current.next;
        }

        if (current.next != null) {
            current.next.previous = current.previous;
        } else {
            last = current.previous;
        }

        if (current == this.current) {
            this.current = current.previous;
        }
    }

    public void reorganizarCartas (int posAtual, int posFinal){
        if(posAtual == posFinal){
            System.out.println("A carta já está na posição solicitada!");
        }

        Node current = head;
        int index = 1;

        while (current != null && index < posAtual) {
            current = current.next;
            index++;
        }

        if (current == null) {
            System.out.println("Posição atual inválida!");
            return;
        }

        if (current.previous != null) {
            current.previous.next = current.next;
        } else {
            head = current.next; // Atualizar o head se o nó removido for o primeiro
        }

        if (current.next != null) {
            current.next.previous = current.previous;
        } else {
            last = current.previous;
        }

        if (posFinal == 1) {
            current.next = head;
            current.previous = null;
            if (head != null) {
                head.previous = current;
            }
            head = current;
            if (last == null) {
                last = current;
            }
        } else {
            Node carta = head;
            index = 1;

            while (carta != null && index < posFinal - 1) {
                carta = carta.next;
                index++;
            }

            if (carta == null) {
                System.out.println("Nova posição inválida!");
                return;
            }

            current.next = carta.next;
            current.previous = carta;
            if (carta.next != null) {
                carta.next.previous = current;
            } else {
                last = current;
            }
            carta.next = current;
        }
    }

    public void exibirMao() {
        Node current = head;
        System.out.println("Mão do jogador:");
        int posicao =1;
        while (current != null) {
            System.out.println("Posição " + posicao + ": " + current.valor + " de " + current.naipe);
            current = current.next;
            posicao++;
        }
    }

}
