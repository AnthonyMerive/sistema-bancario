package co.com.sofka.dataBank.events;

import java.math.BigDecimal;

public class DepositadoEvent extends BaseEvent<String>{

    private final BigDecimal monto;

    public DepositadoEvent(String id, BigDecimal monto) {
        super(id);
        this.monto = monto;
    }

    public BigDecimal getMonto() {
        return monto;
    }
}
