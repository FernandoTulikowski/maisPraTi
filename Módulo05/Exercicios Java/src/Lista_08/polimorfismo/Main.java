package polimorfismo;

import java.util.LinkedList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        MeioTransporte[] transportes = new MeioTransporte[] {
                new Carro(),
                new Bicicleta(),
                new Trem()
        };

        for (MeioTransporte transporte : transportes) {
            transporte.acelerar();
            transporte.frear();
        }

        List<Animal> animais = new LinkedList<>();
        animais.add(new Cachorro());
        animais.add(new Gato());
        animais.add(new Vaca());

        for (Animal animal : animais) {
            animal.emitirSom();
        }
    }
}
