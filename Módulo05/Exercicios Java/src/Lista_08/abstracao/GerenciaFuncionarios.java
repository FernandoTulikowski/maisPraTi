package abstracao;

import java.util.ArrayList;
import java.util.List;

public class GerenciaFuncionarios {
    private List<Funcionario> funcionarios;

    public GerenciaFuncionarios() {
        this.funcionarios = new ArrayList<>();
    }

    public void adicionarFuncionario(Funcionario funcionario) {
        funcionarios.add(funcionario);
    }

    public void promoverFuncionario(Funcionario funcionario, Funcionario novoCargo) {
        int index = funcionarios.indexOf(funcionario);
        if (index >= 0) {
            funcionarios.set(index, novoCargo);
        }
    }

    public double calcularFolhaPagamento() {
        double total = 0;
        for (Funcionario f : funcionarios) {
            total += f.calcularSalario() + f.calcularBonus();
        }
        return total;
    }
}
