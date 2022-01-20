package co.com.sofka.dataBank.events;

import java.math.BigDecimal;

public class RetiradoEvent extends BaseEvent<String> {

    private final BigDecimal monto;

    public RetiradoEvent(String id, BigDecimal monto) {
        super(id);
        this.monto = monto;
    }

    public BigDecimal getMonto() {
        return monto;
    }
}
