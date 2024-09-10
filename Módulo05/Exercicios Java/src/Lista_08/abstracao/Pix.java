package abstracao;

public class Pix extends FormaPagamento {
    private String chavePix;

    public Pix(String chavePix) {
        this.chavePix = chavePix;
    }

    @Override
    public boolean validarPagamento() {
        return chavePix.length() > 5;
    }

    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Pagamento de R$ " + valor + " processado via PIX.");
        } else {
            System.out.println("Chave PIX inválida.");
        }
    }

}
