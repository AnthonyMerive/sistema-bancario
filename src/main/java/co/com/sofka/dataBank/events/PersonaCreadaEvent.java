package co.com.sofka.dataBank.events;

import java.math.BigDecimal;


public class PersonaCreadaEvent extends BaseEvent<String>{

    private final BigDecimal balance;

    public PersonaCreadaEvent(String id, BigDecimal balance) {
        super(id);
        this.balance = balance;
    }

    public BigDecimal getBalance() {
        return balance;
    }
}
