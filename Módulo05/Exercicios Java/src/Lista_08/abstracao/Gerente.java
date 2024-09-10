package abstracao;

class Gerente extends Funcionario {
    private double bonusGerencial;

    public Gerente(String nome, double salarioBase, double bonusGerencial) {
        super(nome, salarioBase);
        this.bonusGerencial = bonusGerencial;
    }

    @Override
    public double calcularSalario() {
        return salarioBase + bonusGerencial;
    }

    @Override
    public double calcularBonus() {
        return salarioBase * 0.2;
    }
}