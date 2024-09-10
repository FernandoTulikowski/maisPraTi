package abstracao;

public class SistemaPagamento {
    public static void main(String[] args) {
        FormaPagamento cartaoCredito = new CartaoCredito("1234567812345678", "João Silva", "12/25", "123");
        cartaoCredito.processarPagamento(200.0);

        FormaPagamento boleto = new Boleto("12345678901234567890123456789012345678901234567");
        boleto.processarPagamento(350.00);

        FormaPagamento pix = new Pix("joao123@banco.com");
        pix.processarPagamento(150.0);
    }
}
