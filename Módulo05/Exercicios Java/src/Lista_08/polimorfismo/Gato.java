package polimorfismo;

public class Gato extends Animal{
    @Override
    public void emitirSom() {
        System.out.println("O som que o gato emite é: Miau!");
    }
}
