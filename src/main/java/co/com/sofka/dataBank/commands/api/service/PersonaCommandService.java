package co.com.sofka.dataBank.commands.api.service;

import co.com.sofka.dataBank.commands.api.command.CrearPersonaCommand;
import co.com.sofka.dataBank.commands.api.command.DepositarCommand;
import co.com.sofka.dataBank.commands.api.command.RetirarCommand;
import co.com.sofka.dataBank.commands.api.dto.CrearPersonaDto;
import co.com.sofka.dataBank.commands.api.dto.DepositarDto;
import co.com.sofka.dataBank.commands.api.dto.RetirarDto;
import org.axonframework.commandhandling.gateway.CommandGateway;
import org.springframework.stereotype.Service;

import java.util.UUID;
import java.util.concurrent.CompletableFuture;

@Service
public class PersonaCommandService {

    private final CommandGateway commandGateway;

    public PersonaCommandService(CommandGateway commandGateway) {
        this.commandGateway = commandGateway;
    }

    public CompletableFuture<String> crearPersona(CrearPersonaDto crearPersonaDto){
        return commandGateway.send(new CrearPersonaCommand(
                UUID.randomUUID().toString(),
                crearPersonaDto.getBalanceInicial()
        ));
    }

    public CompletableFuture<String> depositar(DepositarDto depositarDto){
        return commandGateway.send(new DepositarCommand(
                depositarDto.getPersonaId(),
                depositarDto.getMonto()
        ));
    }

    public CompletableFuture<String> retirar(RetirarDto retirarDto){
        return commandGateway.send(new RetirarCommand(
                retirarDto.getPersonaId(),
                retirarDto.getMonto()
        ));
    }
}
