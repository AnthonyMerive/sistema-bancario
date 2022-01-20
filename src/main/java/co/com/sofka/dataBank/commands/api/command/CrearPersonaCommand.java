package co.com.sofka.dataBank.commands.api.command;

import java.math.BigDecimal;

public class CrearPersonaCommand extends BaseCommand<String>{

    private BigDecimal balance;

    public CrearPersonaCommand(String id, BigDecimal balance) {
        super(id);
        this.balance = balance;
    }

    public BigDecimal getBalance() {return balance;}
}
