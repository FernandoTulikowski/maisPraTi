package abstracao;

public class CartaoCredito extends FormaPagamento{
    private String numeroCartao;
    private String nomeTitular;
    private String validade;
    private String codigoSeguranca;

    public CartaoCredito(String numeroCartao, String nomeTitular, String validade, String codigoSeguranca) {
        this.numeroCartao = numeroCartao;
        this.nomeTitular = nomeTitular;
        this.validade = validade;
        this.codigoSeguranca = codigoSeguranca;
    }

    @Override
    public boolean validarPagamento() {
        return numeroCartao.length() == 16 && codigoSeguranca.length() == 3;
    }

    @Override
    public void processarPagamento(double valor) {
        if (validarPagamento()) {
            System.out.println("Pagamento de R$ " + valor + " processado com Cartão de Crédito.");
        } else {
            System.out.println("Falha na validação do Cartão de Crédito.");
        }
    }
}
