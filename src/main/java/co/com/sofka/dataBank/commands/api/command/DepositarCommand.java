package co.com.sofka.dataBank.commands.api.command;

import java.math.BigDecimal;

public class DepositarCommand extends BaseCommand<String> {

    private final BigDecimal monto;

    public DepositarCommand(String id, BigDecimal monto) {
        super(id);
        this.monto = monto;
    }

    public BigDecimal getMonto() {
        return monto;
    }
}
