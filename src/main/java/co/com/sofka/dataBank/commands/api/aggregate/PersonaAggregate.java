package co.com.sofka.dataBank.commands.api.aggregate;

import co.com.sofka.dataBank.commands.api.command.CrearPersonaCommand;
import co.com.sofka.dataBank.commands.api.command.DepositarCommand;
import co.com.sofka.dataBank.commands.api.command.RetirarCommand;
import co.com.sofka.dataBank.events.DepositadoEvent;
import co.com.sofka.dataBank.events.PersonaActivadaEvent;
import co.com.sofka.dataBank.events.PersonaCreadaEvent;
import co.com.sofka.dataBank.events.RetiradoEvent;
import lombok.extern.slf4j.Slf4j;
import org.axonframework.commandhandling.CommandHandler;
import org.axonframework.eventsourcing.EventSourcingHandler;
import org.axonframework.modelling.command.AggregateIdentifier;
import org.axonframework.modelling.command.AggregateLifecycle;
import org.axonframework.spring.stereotype.Aggregate;

import java.math.BigDecimal;

@Aggregate
@Slf4j
public class PersonaAggregate {

    @AggregateIdentifier
    private String personaId;

    private BigDecimal balance;
    private String estado;

    public PersonaAggregate() {
    }

    @CommandHandler
    public PersonaAggregate(CrearPersonaCommand crearPersonaCommand){
        log.info("'crearPersonaCommand' recibido..!");

        AggregateLifecycle.apply(new PersonaCreadaEvent(
                crearPersonaCommand.getId(),
                crearPersonaCommand.getBalance()
        ));
    }

    @EventSourcingHandler
    public void on(PersonaCreadaEvent personaCreadaEvent){
        log.info("Un 'PersonaCreadaEvent' ocurrio..!");

        this.personaId = personaCreadaEvent.getId();
        this.balance = personaCreadaEvent.getBalance();
        this.estado = "CREADO";

        AggregateLifecycle.apply((new PersonaActivadaEvent(
                this.personaId,
                "ACTIVADO"
        )));
    }

    @EventSourcingHandler
    public void on(PersonaActivadaEvent personaActivadaEvent){
        log.info("Un 'PersonaActivadaEvent' ocurrio..!");

        this.estado = personaActivadaEvent.getEstado();
    }

    @CommandHandler
    public void on(DepositarCommand depositarCommand){
        log.info("'DepositarCommand' recibido..!");

        AggregateLifecycle.apply(new DepositadoEvent(
                depositarCommand.getId(),
                depositarCommand.getMonto()
        ));
    }

    @EventSourcingHandler
    public void on(DepositadoEvent depositadoEvent){
        log.info("'DepositadoEvent' Ocurrio..!");

        this.balance = this.balance.add(depositadoEvent.getMonto());
    }

    @CommandHandler
    public void on(RetirarCommand retirarCommand){
        log.info("'RetirarCommand' recibido..!");

        AggregateLifecycle.apply(new RetiradoEvent(
                retirarCommand.getId(),
                retirarCommand.getMonto()
        ));
    }

    @EventSourcingHandler
    public void on(RetiradoEvent retiradoEvent){
        log.info("'RetiradoEvent' Ocurrio..!");

        this.balance = this.balance.subtract(retiradoEvent.getMonto());
    }
}
