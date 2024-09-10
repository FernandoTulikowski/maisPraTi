package heranca;

public class Gerente extends Funcionario{
    public Gerente(String nome, double salario) {
        super(nome, salario);
    }

    public double calcularBonus() {
        return this.salario * 0.20;
    }

    @Override
    public void trabalhar() {
        System.out.println(nome + " está gerenciando a equipe.");
    }
}
