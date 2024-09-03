package exercicio_04;

public class Main {
    public static void main(String[] args) {
        EditorTexto editor = new EditorTexto();

        editor.addTexto("Olá ");
        editor.exibirTexto();
        editor.addTexto(" mundo!");
        editor.exibirTexto();
        editor.addTexto(" ****");
        editor.exibirTexto();
        editor.undo();
        editor.exibirTexto();
        editor.redo();
        editor.exibirTexto();
    }
}
