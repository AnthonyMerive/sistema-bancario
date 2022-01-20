package co.com.sofka.dataBank.commands.api.command;

import java.math.BigDecimal;

public class RetirarCommand extends BaseCommand<String>{

    private final BigDecimal monto;

    public RetirarCommand(String id, BigDecimal monto) {
        super(id);
        this.monto = monto;
    }

    public BigDecimal getMonto() {
        return monto;
    }
}
