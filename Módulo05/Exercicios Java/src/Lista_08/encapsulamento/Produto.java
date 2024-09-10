package encapsulamento;

public class Produto {
    private String nome;
    private double preco;
    private int quantidade;

    public Produto(String nome, double preco, int quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public double getPreco() {
        return preco;
    }

    public void setPreco(double preco) {
        if(preco < 0){
            System.out.println("Não é possível informar preço menor que zero!");
        } else {
            this.preco = preco;
        }
    }

    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        if(quantidade < 0){
            System.out.println("Não é possível informar quantidade menor que zero!");
        } else {
            this.quantidade = quantidade;
        }
    }

    public void aplicarDesconto(double desconto){
        if(desconto > 50){
            System.out.println("Não é possível aplicar desconto maior que 50%!");
        } else{
            this.preco -= (this.preco*desconto/100);
        }
    }
}
