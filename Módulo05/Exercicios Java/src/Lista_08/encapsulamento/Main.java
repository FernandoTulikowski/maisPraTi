package encapsulamento;

public class Main {
    public static void main(String[] args) {
        Produto prod1 = new Produto("teclado", 100,5);
        System.out.println(prod1.getNome());
        System.out.println(prod1.getPreco());
        System.out.println(prod1.getQuantidade());
        prod1.setNome("Teclado sem fio");
        prod1.aplicarDesconto(80);
        prod1.aplicarDesconto(10);
        System.out.println(prod1.getNome());
        System.out.println(prod1.getPreco());

    }
}
