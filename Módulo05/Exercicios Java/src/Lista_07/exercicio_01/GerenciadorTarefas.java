package exercicio_01;

//Classe que representa cada tarefa do gerenciador
class Tarefa {
    String descricao;
    boolean concluida;
    Tarefa next;

    //Método construtor
    public Tarefa(String descricao){
        this.descricao = descricao;
        this.concluida = false;
        this.next = null;
    }
}

//Classe que representa o gerenciador de tarefas
public class GerenciadorTarefas {
    private Tarefa first;
    private Tarefa last;

    //Método construtor
    public GerenciadorTarefas (){
        this.first = null;
        this.last = null;
    }

    //Método para adicionar tarefas no gerenciador
    public void adicionarTarefa (String descricao){
        //Cria uma nova tarefa
        Tarefa novaTarefa = new Tarefa(descricao);

        //Verifica se está vazia
        if(this.last == null){
            this.first = novaTarefa;
            this.last = novaTarefa;
        } else {
            this.last.next = novaTarefa;
            this.last = novaTarefa;
        }

        System.out.println("Tarefa adicionada com sucesso!");
    }

    // Método para remover uma tarefa pela descrição
    public void removerTarefa(String descricao){
        //Verifica se está vazia
        if (this.first == null) {
            System.out.println("A lista de tarefas está vazia.");
            return;
        }

        //Caso a tarefa a ser removida seja a primeira da lista
        if(this.first.descricao.equals(descricao)){
            this.first = this.first.next;
            // Se a lista ficou vazia após a remoção
            if(this.first == null){
                this.last = null;
            }
            System.out.println("Tarefa '" + descricao + "' removida com sucesso!");
            return;
        }

        Tarefa atual = this.first;
        Tarefa anterior = null;

        //Percorre a lista para encontrar a tarefa a ser removida
        while(atual != null && !atual.descricao.equals(descricao)){
            anterior = atual;
            atual = atual.next;
        }

        //Se não encontrou a tarefa
        if(atual == null){
            System.out.println("Tarefa não encontrada.");
            return;
        }

        //Remove a tarefa
        anterior.next = atual.next;

        System.out.println("Tarefa '" + descricao + "' removida com sucesso!");

        //Se a tarefa removida era a última da lista
        if(atual == this.last){
            this.last = anterior;
        }


    }

    //Método para marcar uma tarefa como concluída
    public void marcarComoConcluida(String descricao){
        Tarefa atual = this.first;

        // Percorre a lista para encontrar a tarefa
        while (atual != null){
            if (atual.descricao.equals(descricao)){
                atual.concluida = true;
                System.out.println("Tarefa '" + descricao + "' marcada como concluída.");
                return;
            }
            atual = atual.next;
        }

        // Se a tarefa não for encontrada
        System.out.println("Tarefa '" + descricao + "' não encontrada.");
    }

}
