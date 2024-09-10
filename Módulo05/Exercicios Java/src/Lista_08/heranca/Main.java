package heranca;

public class Main {
    public static void main(String[] args) {
        Funcionario gerente = new Gerente("Fernando", 10000.00);
        Funcionario desenvolvedor = new Desenvolvedor("Kalebe", 9000.00);
        System.out.println(gerente.calcularBonus());
        System.out.println(desenvolvedor.calcularBonus());
        desenvolvedor.trabalhar();
        gerente.trabalhar();

    }
}
