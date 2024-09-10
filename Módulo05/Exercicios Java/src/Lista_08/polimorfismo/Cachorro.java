package polimorfismo;

public class Cachorro extends Animal{
    @Override
    public void emitirSom() {
        System.out.println("O som que o cachorro emite é: Au Au!");
    }
}
