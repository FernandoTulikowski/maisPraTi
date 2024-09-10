package abstracao;

class Desenvolvedor extends Funcionario {
    private double bonusDesenvolvimento;

    public Desenvolvedor(String nome, double salarioBase, double bonusDesenvolvimento) {
        super(nome, salarioBase);
        this.bonusDesenvolvimento = bonusDesenvolvimento;
    }

    @Override
    public double calcularSalario() {
        return salarioBase + bonusDesenvolvimento;
    }

    @Override
    public double calcularBonus() {
        return salarioBase * 0.1;
    }
}