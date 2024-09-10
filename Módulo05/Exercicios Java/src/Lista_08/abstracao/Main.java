package abstracao;

public class Main {
    public static void main(String[] args) {
        GerenciaFuncionarios empresa = new GerenciaFuncionarios();

        Funcionario gerente = new Gerente("Carlos", 10000, 3000);
        Funcionario desenvolvedor = new Desenvolvedor("Ana", 8000, 2000);
        Funcionario estagiario = new Estagiario("Pedro", 2000);

        empresa.adicionarFuncionario(gerente);
        empresa.adicionarFuncionario(desenvolvedor);
        empresa.adicionarFuncionario(estagiario);

        System.out.println("Folha de pagamento total: " + empresa.calcularFolhaPagamento());

        Funcionario novoDesenvolvedor = new Desenvolvedor("Pedro", 5000, 1000);
        empresa.promoverFuncionario(estagiario, novoDesenvolvedor);

        System.out.println("Folha de pagamento total após promoção: " + empresa.calcularFolhaPagamento());
    }
}
