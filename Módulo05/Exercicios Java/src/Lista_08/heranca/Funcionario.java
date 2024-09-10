package heranca;

public class Funcionario {
    protected String nome;
    protected double salario;

    public Funcionario(String nome, double salario) {
        this.nome = nome;
        this.salario = salario;
    }

    public double calcularBonus() {
        return this.salario * 0.0;
    }

    public void trabalhar() {
        System.out.println(nome + " está trabalhando.");
    }

}
