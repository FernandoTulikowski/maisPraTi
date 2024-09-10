package abstracao;

public class Boleto extends FormaPagamento{
    private String codigoBarras;
    private boolean boletoPago;

    public Boleto(String codigoBarras) {
        this.codigoBarras = codigoBarras;
        this.boletoPago = false;
    }

    @Override
    public boolean validarPagamento() {
        return codigoBarras.length() == 47;
    }

    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            boletoPago = true;
            System.out.println("Boleto de R$ " + valor + " gerado e aguardando pagamento.");
        } else {
            System.out.println("Código de barras inválido.");
        }
    }

    public void pagarBoleto() {
        if (boletoPago) {
            System.out.println("Boleto pago com sucesso.");
        } else {
            System.out.println("O boleto ainda não foi gerado ou é inválido.");
        }
    }
}
